// Navn på cachen – skift versionsnummer (f.eks. v2), når du laver store ændringer på siden
const CACHE_NAME = "legestue-cache-v2";
const OFFLINE_FALLBACK = "index.html";

// 1. INSTALLATION: Læg fallback-siden i cachen
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installerer...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Cacher offline-side");
      return cache.add(OFFLINE_FALLBACK);
    })
  );
  self.skipWaiting();
});

// 2. AKTIVERING: Slet gammel cache når koden opdateres
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Aktiverer...");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Fjerner gammel cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. FETCH: Håndter netværkskald og caching
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignorer alt andet end GET, samt ikke-HTTP(S) forespørgsler (f.eks. chrome-extension://)
  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then(async (response) => {
        // Gem KUN i cachen hvis svaret er succesfuldt (HTTP 200) og ikke en delvis/fejl respons
        if (response.status === 200 && response.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      })
      .catch(async () => {
        // Hvis brugeren er offline eller netværket fejler:
        console.log("[Service Worker] Netværk fejlede, søger i cachen for:", request.url);
        
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Hvis det er en side-visning (navigation) og den ikke findes i cachen, vis offline-siden
        if (request.mode === "navigate") {
          return caches.match(OFFLINE_FALLBACK);
        }
      })
  );
});