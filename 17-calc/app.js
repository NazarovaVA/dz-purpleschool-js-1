'use strick';

function validation(num1,num2){
    if (Number(num1) && Number(num2)){
        return true;
    }
    return false;
}

function clean(){
    document.querySelectorAll('.input')[0].value = "";
    document.querySelectorAll('.input')[1].value = "";
}

document.querySelector('.button_plus').addEventListener('click', () => {
    const [obj1,obj2] = document.querySelectorAll('.input');
    if (validation(obj1.value,obj2.value)){
        document.querySelector('.panel').innerText = obj1.value + ' + ' + obj2.value + ' = ' + String(Number(obj1.value) + Number(obj2.value));
    };
    clean();
});

document.querySelector('.button_minus').addEventListener('click', () => {
    const [obj1,obj2] = document.querySelectorAll('.input');
    if (validation(obj1.value,obj2.value)){
        document.querySelector('.panel').innerText = obj1.value + ' - ' + obj2.value + ' = ' + String(Number(obj1.value) - Number(obj2.value));
    };
    clean();
});

document.querySelector('.button_multiplication').addEventListener('click', () => {
    const [obj1,obj2] = document.querySelectorAll('.input');
    if (validation(obj1.value,obj2.value)){
        document.querySelector('.panel').innerText = obj1.value + ' * ' + obj2.value + ' = ' + String(Number(obj1.value) * Number(obj2.value));
    }
    clean();
});

document.querySelector('.button_division').addEventListener('click', () => {
    const [obj1,obj2] = document.querySelectorAll('.input');
    if (obj2.value != '0' && validation(obj1.value,obj2.value)){
        document.querySelector('.panel').innerText = obj1.value + ' / ' + obj2.value + ' = ' + String(Number(obj1.value) / Number(obj2.value));
    } 
    clean();
});


