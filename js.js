let headingOne =document.querySelector('.headingOne')
let inputOne =document.querySelector('.inputOne')
let buttonOne =document.querySelector('.buttonOne')

buttonOne.addEventListener('click',function(){
    if(!inputOne.value){
        console.log('Enter sonething')
    }
    else if(isNaN(inputOne.value)){
        console.log("Enter Number")
    }
})