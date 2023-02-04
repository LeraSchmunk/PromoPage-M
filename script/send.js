const form = document.querySelector('.form-test-drive')
let data = {}

// console.log(form)
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    // alert('submit')
    // console.dir(form)
    for(let {name, value} of form.elements){
        // console.log(elem);
        if(name){
            data[name]=value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    
    .then(response =>{
        if(response.status===200 || response.status===201){
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then (data =>{
           alert('Данные успешно сохранены')
           form.reset()
    })
    .catch (error =>{
            alert('Произошла ошибка, статус' + error.message)
        })
        
})

