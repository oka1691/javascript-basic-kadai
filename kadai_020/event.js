const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  const childList = document.createElement('h2');
  childList.textContent = 'ボタンをクリックしました';
  text.appendChild(childList);
});