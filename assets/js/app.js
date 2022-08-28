function action() {
  let number = +easyNumberInput.value;
  

  for (let i = 2; i < number; i++) {
    

    if (number % i == 0) {
      
      return resultPlace.innerHTML = 'Не простое число';
      
    }
  }
 
  return resultPlace.innerHTML = 'Простое число';

  
}


