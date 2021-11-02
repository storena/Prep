// VARIABLES
  // var (variable, su valor es global, y puede ser modificado las veces que sea)
  // let (variable similar a var, pero solo funciona en el bloque en el que fue asignada)
  // const (constante, su valor no cambia si se intenta reasignar después)


// TIPOS DE DATOS

  // STRINGS (cadena de dígitos/letras)
  // var firstName = 'JUAN';

  // NUMBERS
  // var num = 27;
  // var num = 18.6;
  // var num = -12;

  // BOOLEANS
  // var meGusta = true;
  // var meAburre = false;

  // UNDEFINED 
  // var age; undefined; (la variable está creada, pero no se le asigno un valor)

  // NULL 
  // var age = null; (la variable está creada, pero no posee valor, ya que,
  //                  se le asigno un valor nulo intencionalmente.)

  // A los fines prácticos, null y undefined son muy similares.

  // Forma de invocar los valores de las variables, para que así aparezcan en la consola
  // console.log (var/let name);
  // (var/let/const name).lenght; (muestra en la consola la cantidad de letras/dígitos que tiene el string)

  // El signo "+" suma números, pero tambien concatena strings. Ej:
  // 'Juan' + 'Segundo' , va a dar en la consola 'JuanSegundo'.
  // 'Juan' + ' ' + 'Segundo' , va a dar en la consola 'Juan Segundo'.

// OPERADORES 
  
  // SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN
  // 1 + 1 = 2
  // 2 * 2 = 4
  // 2 - 2 = 0
  // 2 / 2 = 1 
  
  // MÓDULO (se lo divide únicamente por el mayor número que de como resultado un número entero, 
  //         y el resultado que se muesra en la consol es el resto)

  // 21 % 5 = 1;
  // 21 % 6 = 3;
  // 21 % 7 = 0;

  // POTENCIA
  // 2 ** 3 = 8
  // 2 ** 5 = 32

  // Otra forma de realizar operaciones es con la librería Math. , ej:
  // Math.sqrt (81) , esto daría, como resultado, 9  sqrt = RAÍZ CUADRADA/SQUARE ROOT
  // Math.pow (3,4) , esto daría, como resultado, 81 pow = POTENCIA/POWER

// FUNCIONES

  // function saludar() {
  //     console.log ('Hola');
  // }
  
  // saludar ()
  // Hola

  // const saludar2 = function () {
  //    console.log ('Buen día')
  // }

  //   const saludar3 = () => {      
  //      console.log ('Buenas')
  //   }

// FUNCIONES CON ARGUMENTO

  // function saludar(nombre) {
  //    console.log ('Hola' + nombre);
  // }

  // function suma(a, b) {
  //    console.log (a + b);
  // }
  // suma(2, 3)

// CONTROLADORES DE FLUJO ('===' , '<'  ,  '!=='  ,  '>')

  //    function puedeManejar(edad) {
  //     if(edad >= 18) {
  //         console.log('Puede pasar');
  //         return true;      
  //     }   else {
  //         console.log('NO puede pasar');
  //         return false;
  //     }
  //   }
  //  puedeManejar(18)
  //  puedeManejar(26)
  //  puedeManejar(16)

// VERACIDAD

  // Todos los datos o valores tiene asociado un valor de veracidad. Esto significa que son true o flase.
  // Este se averigua escribiendo un doble signo de exclamación !!, y luego el dato o valor a convertir.
  // TRUE:
  // - Todos los strings que posean al menos una letra o dígito.
  // - Todos los números, excepto cero.
  // - true.
  // - Las afirmaciones que sean verdaderas, ej., 4 > 2.
  // FALSE:
  // - String vacío.
  // - Cero.
  // - undefined y null.
  // - false.
  // - Las afirmaciones que sean falsas, ej., 4 < 2.

// OPERADORES LÓGICOS
  
  // Estos indican una condición que se tiene que dar, se usan en conjunto con los controladores de flujo.
  // - AND ( && ) , indica que se tiene que cumplir las dos condiciones. Ej., si lluve (A) y es de noche (B),
  //   me voy a dormir (C). Entonces, si A es TRUE, pero B FALSE, C es tambien es FALSE, ya que no se cumplen
  //   ambas condiciones. Lo mismo pasa si A es FALSE, pero B es TRUE, no se cumplen las dos. En cambio,
  //   si A es TRUE y B, tambien, C es TRUE. Si tanto A como B son FALSE, C es FALSE.
  // - OR ( || ) , indica que alcanza con que se cumpla una sola de las condiciones, aunque tambien 
  //   sirve si se cumplen las dos. Ej., Si A es FALSE y B es TRUE, C es TRUE, y viceversa. 
  //   Si tanto A como B son FALSE, C es FALSE.

// BUCLES, DRY CODE (DON'T REPEAT YOURSELF CODE)

  // Estos bucles son, como dice su nombre, para no repetirnos una y otra vez, y así ser mas eficientes y 
  // mas prolijos.
  
  // FOR: generalemnte se usa cuando se sabe cuantos bucles va a tener el ciclo.
  // for (let index = 1; index <= 10; index++) {
  //     console.log(index);
  // }
  // console.log('Termine!')

  // WHILE: generalmente se usa cuando NO se sabe cuantos bucles va a tener el ciclo.
  // var num = 1;
  // while (num <= 10) {
  //   console.log(num);
  //   num++;
  // }
  // console.log('Termine!')