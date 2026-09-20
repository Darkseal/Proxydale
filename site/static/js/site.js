/* Progressive enhancement only: every link and every section works without this
   file. It adds the mobile menu and highlights the section currently in view. */
(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
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
