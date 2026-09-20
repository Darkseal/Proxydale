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

  if (!sections.length) {
    return;
  }

  /* The current section is the last one whose top has passed under the sticky
     header — not the first one still touching a band, which lands on the
     previous entry after a jump: the section you left is still a few pixels
     inside the band while the one you asked for starts right below it.
     The line sits a little under scroll-padding-top so the section you jump to
     counts as reached the moment the jump settles. */
  function anchorLine() {
    var header = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h")
    );
    return (header || 60) + 24;
  }

  function currentSection() {
    // At the very bottom nothing further can cross the line, so the last
    // section owns the rest of the page however short it is.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      return sections[sections.length - 1].id;
    }
    var line = anchorLine();
    var current = null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) {
        current = section.id;
      }
    });
    return current;
  }

  var pending = false;

  function refresh() {
    pending = false;
    var current = currentSection();
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.section === current);
    });
  }

  function schedule() {
    if (!pending) {
      pending = true;
      window.requestAnimationFrame(refresh);
    }
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  refresh();
})();
