document.addEventListener('DOMContentLoaded', () => {
  const nav  = document.getElementById('navArea');
  const btn  = document.querySelector('.toggle_btn');
  const mask = document.getElementById('mask');
  const openClass = 'open';

  // メニューの開閉
  btn.addEventListener('click', () => {
    nav.classList.toggle(openClass);
  });

  // マスク（背景）クリックで閉じる
  mask.addEventListener('click', () => {
    nav.classList.remove(openClass);
  });
});