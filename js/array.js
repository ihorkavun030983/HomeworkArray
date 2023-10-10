    let arrNumber = [];
    for(var i=0; i < 10; i++) {

        arrNumber[i] = prompt('Введіть будь-яке число від 1 до 10', +i);
        if(arrNumber[i] === null) {
            alert('Отмена');
            
        }

        if(arrNumber[i] === '') {
            alert('Ви не вказали число');
            arr[i] = prompt('Введіть будь-яке число від 1 до 10'); 

        }}
        console.log(arrNumber)
