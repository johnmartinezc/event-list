let value = 0


let numDisply = document.querySelector("#number")



let add1 = document.querySelector('#add-one')
let double = document.querySelector('#double');
let rest = document.querySelector('#rest')
let addx = document.querySelector('#add-x')

add1.addEventListener('click',function(){
    value++
    numDisply.innerText = value
})

double.addEventListener('click', function(){
    value *= 2
    numDisply.innerText = value
})

rest.addEventListener('click', resetValue)

function resetValue(){
    value = 0
    numDisply.innerText = value
}

addx.addEventListener('click', function(){
    addXToValue(5)
})

function addXToValue(x){
    value = value + x
    numDisply.innerText = value
}

numDisply.addEventListener('mouseenter', function(){
    numDisply.style.background = 'lightblue'
})
numDisply.addEventListener('mouseout', function(){
    numDisply.style.background = 'gray'
    numDisply.style.color = 'white'
})