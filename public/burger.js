const burger = document.querySelector('.burger')
const header = document.querySelector('.header')

// we need header, because we will put on it active OR not active state
// default state is not active

burger.addEventListener('click', function(e){
  header.classList.toggle('active');
})
