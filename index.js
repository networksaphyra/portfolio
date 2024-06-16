document.addEventListener('DOMContentLoaded', function() {
  const hobbies = document.querySelectorAll('.hobby');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const hobbyName = document.getElementById('hobby-name');

  const currentHobby = ["Chess", "Speed Typing", "Soccer"];
  const currentHobbyColor = ["#E8D0A9", "#66FCF1", "#7CFC00"];
  let currentIndex = 0;

  function showHobby(index) {
    hobbies.forEach(hobby => hobby.classList.remove('active'));
    hobbies[index].classList.add('active');
    hobbyName.textContent = currentHobby[index];
    hobbyName.style.color = currentHobbyColor[index];
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + hobbies.length) % hobbies.length;
    showHobby(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % hobbies.length;
    showHobby(currentIndex);
  });

  showHobby(currentIndex);
});