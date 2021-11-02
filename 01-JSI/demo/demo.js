function suma(a, b) {
    console.log (a + b);
}

 suma(2, 3);
 suma(18, 25);
 suma(345, 875);

 function saludar(nombre) {
     console.log ('Hola, como estás' + ', ' + nombre + '?')
 }

 saludar('Juan Segundo')

//  Esto es para corroborar que funciona, pero a la hora de programar se escribe RETURN en lugar de CONSOLE.LOG

function suma(a, b) {
    return a + b;
}

 suma(65, 78)




 function puedeManejar(edad) {
    if(edad === 18) {
        console.log('Puede pasar');
        return true;
        
    }   else if(edad < 18) {
        console.log('Puede pasar');
        return false;
    }   else {
        console.log('NO puede pasar');
        return false;
    }
}

console.log(puedeManejar(18));
console.log(puedeManejar(26));
console.log(puedeManejar(17));


for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}
console.log('Termine!')