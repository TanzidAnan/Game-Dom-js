let headingOne =document.querySelector('.headingOne')
let inputOne =document.querySelector('.inputOne')
let buttonOne =document.querySelector('.buttonOne');
let error = document.querySelector('.error')


let headingTwo =document.querySelector('.headingtwo')
let inputTwo =document.querySelector('.inputtwo')
let buttonTwo =document.querySelector('.buttontwo');
let error1 = document.querySelector('.error1')







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
        headingTwo.style.display ='block';
        inputTwo.style.display ='inline-block';
        buttonTwo.style.display ='inline-block';
        error1.style.display ='block';


        headingOne.style.display ='none';
        inputOne.style.display ='none';
        buttonOne.style.display ='none';
        error.style.display ='none';
    }
});
buttonTwo.addEventListener('click',function(){
    if(!inputTwo.value){
        error.innerHTML='Enter sonething';
    }
    else if(isNaN(inputTwo.value)){
        error.innerHTML="Enter Number:";

    }else if(!(inputTwo.value <=10 && inputTwo.value >0)){
        error.innerHTML='please Enter a number 1 to 10';
    }
})