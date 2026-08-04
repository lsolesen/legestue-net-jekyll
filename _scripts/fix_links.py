import os
import re

# 1. Byg et kort over alle filer og deres permalinks
file_to_permalink = {}

for root, dirs, files in os.walk("."):
    if "_site" in root or ".git" in root or ".jekyll-cache" in root:
        continue
    for f in files:
        if f.endswith(".md") or f.endswith(".html"):
            filepath = os.path.relpath(os.path.join(root, f))
            try:
                with open(filepath, "r", encoding="utf-8") as file:
                    content = file.read()
                    # Find Front Matter med permalink
                    match = re.search(r"^---\s*\n(.*?)\n---", content, re.DOTALL)
                    if match:
                        front_matter = match.group(1)
                        permalink_match = re.search(r"permalink:\s*([^\s]+)", front_matter)
                        if permalink_match:
                            permalink = permalink_match.group(1).strip("'\"")
                            file_to_permalink[filepath] = permalink
            except Exception:
                pass

print(f"Fandt {len(file_to_permalink)} filer med unikke permalinks.")

# 2. Erstat {% link path/to/file.md %} med det rigtige permalink
replaced_count = 0

for root, dirs, files in os.walk("."):
    if "_site" in root or ".git" in root or ".jekyll-cache" in root:
        continue
    for f in files:
        if f.endswith(".md") or f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as file:
                content = file.read()

            def replace_tag(match):
                global replaced_count
                target_path = match.group(1).strip()
                if target_path in file_to_permalink:
                    replaced_count += 1
                    return file_to_permalink[target_path]
                else:
                    # Hvis filen ikke har en defineret permalink, fald tilbage til ren sti uden .md
                    clean_path = re.sub(r"^\_posts\/\d{4}-\d{2}-\d{2}-", "", target_path)
                    clean_path = re.sub(r"\.md$", "", clean_path)
                    return f"/{clean_path}/"

            new_content = re.sub(r"\{\%\s*link\s+(.*?)\s*\%\}", replace_tag, content)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as file:
                    file.write(new_content)

print(f"Færdig! Erstattede {replaced_count} {{% link %}} tags med deres direkte permalink.")