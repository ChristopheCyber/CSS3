console.log('test0');
document.querySelector('.js-button').addEventListener('click', function() {
  console.log('test1');
  document.querySelector('.js-grid').classList.toggle('container-grid-animate')
})