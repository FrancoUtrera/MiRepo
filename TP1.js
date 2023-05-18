//1
 alert("un mensaje")
 //2
 document.write("Hello World, ")
 //3
 alert(3 + 5)
 //4
 let persona = prompt("Ingrese su Nombre")
 document.write(" Hola " + persona)
 //5
 let cinconum1 = parseInt(prompt("ingrese el numero 1"))
 let cinconum2 = parseInt(prompt("ingrese el numero 2"))
 alert("El Resultado es " + (cinconum1 + cinconum2))
 //6
let seisnum1 = parseInt(prompt("ingrese el numero"));
let seisnum2 = parseInt(prompt("ingrese el numero"));

if(seisnum1 > seisnum2){
    alert("El " + seisnum1 + " es Mayor");
} else if (seisnum1 < seisnum2) {
    alert("El " + seisnum2 + " es Mayor");

} else {
    alert("Los Numeros son Igules");
}    
//7
    let sietenum1 = parseInt(prompt("ingrese el numero"));
    let sietenum2 = parseInt(prompt("ingrese el numero"));
    let sietenum3 = parseInt(prompt("ingrese el numero"));
    
    if(sietenum1 > sietenum2 && sietenum1 > sietenum3) {
        console.log("El Mayor es " + sietenum1);
    } else if(sietenum3 > sietenum1 && sietenum3 > sietenum2){
        console.log("El Mayor es" + sietenum3)
    } else{
        console.log("El Mayor es " + sietenum2)
    };
//8
let ochonum1 = parseInt(prompt("ingrese el numero"));
if(ochonum1 % 2 === 0){
    console.log(ochonum1 + " es divisible en 2")
} else{
    console.log(ochonum1 + " No es divisible")
}
//9




//10
    let dieznum1 = prompt("ingrese un Numero")
    if(dieznum1 % 2 === 0){
        console.log(dieznum1 + " es divisible por 2")
    }else{
        if(dieznum1 % 3 === 0){
            console.log(dieznum1 + " es divisible por 3")
        }else{
            if(dieznum1 % 5 === 0){
                console.log(dieznum1 + " es divisible por 5")
            }else{
                if(dieznum1 % 7 === 0){
                    console.log(dieznum1 + " es divisible por 7")
                }else{
                    console.log(dieznum1 + " No es divicible por 2,3,5,7")
                }
            }
        }
    }

