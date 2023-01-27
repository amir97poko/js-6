do {
    var a = +prompt('Введите первое число')
  } while (isNaN(a) || a == null || a === 0);
  
  do {
    var b = prompt('Введите второе число')
  } while (b == '');
  
  do {
    var c = prompt('Введите третие число')
  } while (b == '');
  
  for (let i = 0; i < a; i++) {
    c = i && 0 ? c : b + c
    console.log(c);
    alert(c)
}

 

