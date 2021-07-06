// Get game elements
const gameElements = document.querySelectorAll('[data-id="game"]');

// Activate game element on hover
Array.from(gameElements).forEach((gameElement) => {
  gameElement.addEventListener('mouseover', () => {
    // Add 'is-active' class to this element

    gameElement.classList.add('is-active');
    // Remove 'is-active' classes from other elements
    Array.from(gameElements)
      .filter((globalGameElement) => {
        return globalGameElement !== gameElement;
      })
      .forEach((otherGameElemenet) => {
        otherGameElemenet.classList.remove('is-active');
      });
  });
});
