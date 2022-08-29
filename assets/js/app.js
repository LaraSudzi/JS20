function action() {
  
  let i = 3; 
  let arr = []; 
  do { 
      
      for (var n = 2; n < i; n++) { 
          if (i % n === 0) { 
           break; 
          }  
          
         if (!arr.includes(i)) { 
          arr.push(i); 
          } 
         
      } 
       
        
      i += 1; 
   
  } while (i < 1000); 
   
  return (resultPlace.innerHTML = arr.join(', '));
}