/* Progressive enhancement only: every link and every section works without this
   file. It adds the mobile menu and highlights the section currently in view. */
(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var backdrop = document.querySelector(".nav-backdrop");
  var body = document.body;

  // Must match the breakpoint that reveals .nav-toggle in the stylesheet.
  var MOBILE_NAV = window.matchMedia("(max-width: 900px)");

  function setMenu(open) {
    body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (backdrop) {
      // The backdrop fades, so it is only removed from the layout once the
      // transition has had its turn; hiding it immediately would cut the fade.
      if (open) {
        backdrop.hidden = false;
      } else {
        window.setTimeout(function () {
          if (!body.classList.contains("nav-open")) {
            backdrop.hidden = true;
          }
        }, 200);
      }
    }
  }

  function closeMenu(returnFocus) {
    if (!body.classList.contains("nav-open")) {
      return;
    }
    setMenu(false);
    if (returnFocus) {
      toggle.focus();
    }
  }

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = !body.classList.contains("nav-open");
      setMenu(open);
      if (open) {
        var first = nav.querySelector("a");
        if (first) {
          first.focus();
        }
      }
    });

    // Following a link inside the panel is the usual way out.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu(false);
      }
    });

    if (backdrop) {
      backdrop.addEventListener("click", function () {
        closeMenu(true);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    });

    // Widening past the breakpoint restores the horizontal bar; an open panel
    // would otherwise leave the page scroll locked with nothing on screen.
    var onBreakpoint = function (event) {
      if (!event.matches) {
        closeMenu(false);
      }
    };
    if (MOBILE_NAV.addEventListener) {
      MOBILE_NAV.addEventListener("change", onBreakpoint);
    } else if (MOBILE_NAV.addListener) {
      MOBILE_NAV.addListener(onBreakpoint);
    }
  }

  var links = nav ? Array.prototype.slice.call(nav.querySelectorAll("a[data-section]")) : [];
  var sections = links
    .map(function (link) {
      return document.getElementById(link.dataset.section);
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  // The header covers the top of the viewport, so the "current" section is the
  // topmost one whose body is inside the band below it.
  var visible = new Set();

  function refresh() {
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible.has(sections[i].id)) {
        current = sections[i].id;
        break;
      }
    }
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.section === current);
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visible.add(entry.target.id);
        } else {
          visible.delete(entry.target.id);
        }
      });
      refresh();
    },
    { rootMargin: "-70px 0px -55% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
