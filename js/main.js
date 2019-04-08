$(document).ready(function() {
  const menuBtn = $(".menu-btn");
  const menu = $(".menu");
  const menuNav = $(".menu-nav");
  const menuBranding = $(".menu-branding");
  const navItems = $(".nav-item");

  let showMenu = false;
  menuBtn.on("click", function toggleMenu() {
    if (!showMenu) {
      menuBtn.addClass("close");
      menu.addClass("show");
      menuNav.addClass("show");
      menuBranding.addClass("show");
      navItems.each(function() {
        $(this).addClass("show");
      });
      showMenu = true;
    } else {
      menuBtn.removeClass("close");
      menu.removeClass("show");
      menuNav.removeClass("show");
      menuBranding.removeClass("show");
      navItems.each(function() {
        $(this).removeClass("show");
      });
      showMenu = false;
    }
  });

  ////////////////progress-bars///////////////////////
  $(document).ready(function() {
    $(".skillbar").each(function() {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent")
          },
          4000
        );
    });
  });
});
