const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const listItem=document.querySelector('.menu-list')

const toggleMenu = () =>{
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', ()=>{
    toggleMenu()
})

listItem.addEventListener('click', ()=>{
    toggleMenu()
})