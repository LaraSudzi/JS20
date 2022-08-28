function action() {
  let number = +easyNumberInput.value;
  

  for (let i = 2; i < number; i++) {
    console.log(number);

    if (number % i == 0) {
      console.log(false);
      return resultPlace.innerHTML = 'Не простое число';
      
    }
  }
 console.log(true);
  return resultPlace.innerHTML = 'Простое число';

  
}


