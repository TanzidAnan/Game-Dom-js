let headingOne =document.querySelector('.headingOne')
let inputOne =document.querySelector('.inputOne')
let buttonOne =document.querySelector('.buttonOne');
let error = document.querySelector('.error')







buttonOne.addEventListener('click',function(){
    if(!inputOne.value){
        error.innerHTML='Enter sonething';
    }
    else if(isNaN(inputOne.value)){
        error.innerHTML="Enter Number:";

    }else if(!(inputOne.value <=10 && inputOne.value >0)){
        error.innerHTML='please Enter a number 1 to 10';
    }
    else{
        console.log('Ok')
    }
})