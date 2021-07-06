const gameElements = document.querySelectorAll('[data-id="game"]');

console.log(gameElements);

Array.from(gameElements).forEach((gameElement) => {
  gameElement.addEventListener('mouseover', (event) => {
    event.target.classList.add('is-active');
    Array.from(gameElements)
      .filter((gameElement) => {
        return gameElement !== event.target;
      })
      .forEach((otherGameElemenet) => {
        otherGameElemenet.classList.remove('is-active');
      });
  });
});
