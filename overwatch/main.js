const heroes = document.querySelectorAll('.hero .image');

heroes.forEach((imageEl, index) => {
  const heroNumber = index + 1; 
  imageEl.style.backgroundImage = `url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero${heroNumber}.png")`
});