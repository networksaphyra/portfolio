document.addEventListener("DOMContentLoaded", function() {
  let pages = document.getElementsByClassName("page");

  function updateDocumentPage(activePage) {
    Array.from(pages).forEach(page => {
      page.classList.remove("active");
      if (page.classList.contains(activePage)) {
        page.classList.add("active");
      }
    });
  }

  document.getElementById("nav-home").addEventListener("click", function() {
    updateDocumentPage("home-page");
  });

  document.getElementById("nav-projects").addEventListener("click", function() {
    updateDocumentPage("projects");
  });
});
