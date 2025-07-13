function createCounter() {
  let count = 0; 
  return function () {
    count++;
    return count;
  };
}

const countClicks = createCounter(); 
const button = document.getElementById('btnClick');
const display = document.getElementById('clickDisplay');

button.addEventListener('click', () => {
  const currentCount = countClicks();
  display.textContent = `Clicked ${currentCount} times`;
});
