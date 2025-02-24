document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navLink");
    const currentPage = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("nav-link-active");
      }
    });
  });
  