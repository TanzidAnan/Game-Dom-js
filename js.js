let headingOne = document.querySelector('.headingOne')
let inputOne = document.querySelector('.inputOne')
let buttonOne = document.querySelector('.buttonOne');
let error = document.querySelector('.error');
let div1 =document.querySelector('.div-one')


let headingTwo = document.querySelector('.headingtwo')
let inputTwo = document.querySelector('.inputtwo')
let buttonTwo = document.querySelector('.buttontwo');
let error1 = document.querySelector('.error1')
let chance = document.querySelector('.chance');
let div2 =document.querySelector('.div-two');
let count = 5;







buttonOne.addEventListener('click', function () {
    if (!inputOne.value) {
        error.innerHTML = 'Enter sonething';
    }
    else if (isNaN(inputOne.value)) {
        error.innerHTML = "Enter Number:";

    } else if (!(inputOne.value <= 10 && inputOne.value > 0)) {
        error.innerHTML = 'please Enter a number 1 to 10';
    }
    else {
        div2.style.display ='block'
        headingTwo.style.display = 'block';
        inputTwo.style.display = 'inline-block';
        buttonTwo.style.display = 'inline-block';
        error1.style.display = 'block';
        chance.innerHTML = `Chance : ${count}`

        div1.style.display ='none'
        headingOne.style.display = 'none';
        inputOne.style.display = 'none';
        buttonOne.style.display = 'none';
        error.style.display = 'none';
    }
});
buttonTwo.addEventListener('click', function () {
    if (!inputTwo.value) {
        error.innerHTML = 'Enter sonething';
    }
    else if (isNaN(inputTwo.value)) {
        error.innerHTML = "Enter Number:";

    } else if (!(inputTwo.value <= 10 && inputTwo.value > 0)) {
        error.innerHTML = 'please Enter a number 1 to 10';
    }
    else {
        if (count > 1) {
            count--;
            chance.innerHTML = `Chance : ${count}`;
            if (inputOne.value == inputTwo.value) {
                headingTwo.innerHTML='plear two winer';
                buttonTwo.style.display= 'none';
            }
        }
        else{
            count =0;
            chance.innerHTML = `Chance : ${count}`;
            headingTwo.innerHTML='plear one winer';
            buttonTwo.style.display= 'none';
        }

    }
})