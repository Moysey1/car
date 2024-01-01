const allConditionItem = document.querySelectorAll('.conditions__item-desc__text')
const itemArray = document.querySelectorAll('.conditions__item')

function removeClass(arr) {
    arr.forEach(item => {
        item.classList.remove('conditions__item-desc__text--open')
        item.style.maxHeight = null;
    })
}

itemArray.forEach(item => {
    item.addEventListener('click', (e) => {
        const text = item.querySelector('.conditions__item-desc__text');

        if(text.style.maxHeight) {
            text.style.maxHeight = null
            text.classList.remove('conditions__item-desc__text--open')
        } 
        else {
            removeClass(allConditionItem)
            text.classList.add('conditions__item-desc__text--open')
            text.style.maxHeight = text.scrollHeight + "px";
            
        }
        
    });
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-item__link')

burger.addEventListener('click' ,

  function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function (el){
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  })
});