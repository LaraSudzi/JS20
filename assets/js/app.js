function action() {
  const arr = [];
  let i = 1;
  do {
    arr.push(i);

    //console.log(' arr.push(i);', i, arr);
    for (let n = 0; n <= arr.length; n++) {
      for (let j = 2; j < n; j++) {
        console.log("i", i);
        if (arr[n] % j == 0) {
          console.log("false", arr.indexOf(i));
          arr.splice(n, arr[n]);
        }
        console.log("true", arr);
      }
    }
    i += 1;
  } while (i < 100);
  return (resultPlace.innerHTML = arr.join(', '));
}
