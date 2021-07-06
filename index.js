const gameElements = document.querySelectorAll('[data-id="game"]');

console.log(gameElements);

Array.from(gameElements).forEach((gameElement) => {
  gameElement.addEventListener('mouseover', (event) => {
    gameElement.classList.add('is-active');
    Array.from(gameElements)
      .filter((globalGameElement) => {
        return globalGameElement !== gameElement;
      })
      .forEach((otherGameElemenet) => {
        otherGameElemenet.classList.remove('is-active');
      });
  });
});
