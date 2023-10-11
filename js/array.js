    let arrNumber = [];
    for(var i=0; i < 10; i++) {

        arrNumber[i] = prompt('Введіть будь-яке число від 1 до 10', +i);
        if(arrNumber[i] === null) {
            alert('Отмена');
            
        }
        
        if(arrNumber[i] === '') {
            alert('Ви не вказали число');
            arr[i] = prompt('Введіть будь-яке число від 1 до 10');
            
        }
        
        }
        console.log('Елементи масиву введені User', arrNumber);

        let count = arrNumber.length - 1;
        let arrNumGrowth = arrNumber
    
        for (let i = 0; i < count; i++)
          for (let j = 0; j < count - i; j++)
            if (arrNumGrowth[j] > arrNumGrowth[j + 1]) {
              let max = arrNumGrowth[j];
              arrNumGrowth[j] = arrNumGrowth[j + 1];
              arrNumGrowth[j + 1] = max;
              
            }
        
        console.log('Елементи масиву в порядку зростання', arrNumGrowth);


        arrNumber.splice(2, 3);
        let arrNumDel = [arrNumber];
        outArrNumber.innerHTML = arrNumDel;
    