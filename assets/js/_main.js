/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

  $(function() {
    // FitVids init
    $("#main").fitVids();

    // Sticky sidebar
    var stickySideBar = function() {
      var button = $(".author__urls-wrapper").find("button");
      var show =
        button.length === 0
          ? $(window).width() > 1024 // width should match $large Sass variable
          : !button.is(":visible");
      if (show) {
        // fix
        $(".sidebar").addClass("sticky");
      } else {
        // unfix
        $(".sidebar").removeClass("sticky");
      }
    };

    stickySideBar();

    $(window).resize(function() {
      stickySideBar();
    });

    // Follow menu drop down
    var author_wrapper = $(".author__urls-wrapper").find("button");
    author_wrapper.on("click", function(author_wrapper) {
      $(".author__urls").toggleClass("is--visible");
      author_wrapper.toggleClass("open");
    });

    // Close search screen with Esc key
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        var initial_content = $(".initial-content");
        if (initial_content.hasClass("is--hidden")) {
          $(".search-content").toggleClass("is--visible");
          initial_content.toggleClass("is--hidden");
        }
      }
    });

    // Search toggle
    $(".search__toggle").on("click", function() {
      var search_content = $(".search-content");
      search_content.toggleClass("is--visible");
      $(".initial-content").toggleClass("is--hidden");
      // set focus on input
      setTimeout(function() {
        search_content.find("input").focus();
      }, 400);
    });

    // Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]', {
      offset: 20,
      speed: 400,
      speedAsDuration: true,
      durationMax: 500
    });

    // Gumshoe scroll spy init
    if($("nav.toc").length > 0) {
      var spy = new Gumshoe("nav.toc a", {
        // Active classes
        navClass: "active", // applied to the nav list item
        contentClass: "active", // applied to the content

        // Nested navigation
        nested: false, // if true, add classes to parents of active link
        nestedClass: "active", // applied to the parent items

        // Offset & reflow
        offset: 20, // how far from the top of the page to activate a content area
        reflow: true, // if true, listen for reflows

        // Event support
        events: true // if true, emit custom events
      });
    }

    // add lightbox class to all image links
    $(
      "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
    ).has("> img").addClass("image-popup");

    // Magnific-Popup options
    $(".image-popup").magnificPopup({
      // disableOn: function() {
      //   if( $(window).width() < 500 ) {
      //     return false;
      //   }
      //   return true;
      // },
      type: "image",
      tLoading: "Loading image #%curr%...",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
      },
      removalDelay: 500, // Delay in milliseconds before popup is removed
      // Class that is added to body when popup is open.
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: "mfp-zoom-in",
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $(".youtube-player").find("a").each(function() {
      console.log("Looping through Youtube");
      $(this).on("click", function(e) {
          console.log("Clicked youtube video");
          e.preventDefault();
          var iframe = document.createElement("iframe");
          iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" +
              this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "allowfullscreen");
          iframe.setAttribute("id", "youtube-iframe-" + this.parentNode.dataset.id);
          $(this).parent().replaceWith(iframe);
      });
    });
  });
