document.addEventListener("DOMContentLoaded", function() {

  alert("Please use a desktop while viewing this, I still haven't ported it to mobile 😅.")
  let pages = document.getElementsByClassName("page");
  function updateDocumentPage(activePage) {
    Array.from(pages).forEach(page => {
      page.classList.remove("active");
      if (page.classList.contains(activePage)) {
        page.classList.add("active");
      }
    });
  }

  function saveCurrentPage(activePage) {
    localStorage.setItem("currentPage", activePage);
  }

  function loadLastPage() {
    const lastPage = localStorage.getItem("currentPage");
    if (lastPage) {
      updateDocumentPage(lastPage);
    } else {
      updateDocumentPage("home-page");
    }
  }

  loadLastPage();

  document.getElementById("nav-home").addEventListener("click", function() {
    updateDocumentPage("home-page");
    saveCurrentPage("home-page");
  });
  
  document.getElementById("nav-projects").addEventListener("click", function() {
    updateDocumentPage("projects");
    saveCurrentPage("projects");
  });

  const hobbyTextContainer = document.querySelector(".hobby-text-container");
  const hobbyHeading = document.getElementById("hobby-heading");
  const hobbyName = document.getElementById("hobby-name");
  const hobbyImage = document.getElementById("hobby-image");

  const hobbyImages = ["chess.png", "soccer.png", "socializing.png"];

  let lastScrollTop = 0;
  let currentHobbyIndex = 0;
  const hobbies = document.querySelectorAll(".hobby");

  hobbyTextContainer.addEventListener("scroll", function() {
    const st = hobbyTextContainer.scrollTop;
    const direction = st > lastScrollTop ? "down" : "up";
    lastScrollTop = st;

    const containerHeight = hobbyTextContainer.clientHeight;
    const scrollPosition = hobbyTextContainer.scrollTop;
    const newIndex = Math.round(scrollPosition / containerHeight);

    if (newIndex !== currentHobbyIndex) {
      currentHobbyIndex = newIndex;
      console.log(`Updating to hobby index: ${currentHobbyIndex}`);
      updateHobbyDisplay(currentHobbyIndex);
    }
  });

  function updateHobbyDisplay(index) {
    const hobby = hobbies[index];
    const hobbyData = hobby.getAttribute("data-hobby");
    
    hobbyName.style.opacity = 0;
    hobbyImage.style.opacity = 0;
  
    setTimeout(() => {
      hobbyName.textContent = hobbyData;
      hobbyImage.src = `assets/${hobbyImages[index]}`;
      
      hobbyName.style.opacity = 1;
      hobbyImage.style.opacity = 1;
      console.log(`Updated hobby to: ${hobbyData}`);
    }, 500);
  }
});
