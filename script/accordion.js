const btn = document.querySelector('.feature__link')
const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')
// console.dir(sub);

// btn.addEventListener('click', () => {
//     console.log('gah')
// })

// for (let i=0; i<btns.length; i++){
//     btns[i].addEventListener('click', () => 
//         console.log(btns[i]))
// }

// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem, index) => {
//             btnItem.classList.remove('feature__link_active')
//         })
//         btnItem.classList.add('feature__link_active')
        
//         lists.forEach((listItem) =>{
//             listItem.classList.add('hidden')
//         })
//         lists[index].classList.remove('hidden')
//     })
// })

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {

        if(btnItem.classList.contains('feature__link_active')){
            btnItem.classList.remove('feature__link_active')
        } else {
            btnItem.classList.add('feature__link_active')
        }


        lists.forEach((listItem) =>{
            listItem.classList.add('hidden')
        })

        if(btnItem.classList.contains('feature__link_active')){
            lists[index].classList.remove('hidden')
        } else {
            lists[index].classList.add('hidden')
        }
        
        })
    })

