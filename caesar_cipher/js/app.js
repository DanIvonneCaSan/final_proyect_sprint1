var mssCode= prompt("Ingresa una frase");
//var mssCode= "Luegovemos";

for (var i=0; i<=mssCode.length; i++){        //Revisión del mensaje sin espacios y números
  if(mssCode[i] === undefined && parseInt(mssCode[i])!==Number){
    console.log("No se puede continuar");
    document.write ("Tu frase tiene números o no ingresaste nada. Ingresa una nueva.");
  }
}

var cipher =function (stringCode){             //Función de cifrado
  var codeLength= stringCode.length;
  var arrayCode=[];                            //Array que contiene el mensaje
  var positionX;                               //Variable que guarda la posición "x" de la ecuación
  var numberSpaces=33;                         //Variable que contiene el número de desplazamientos

  for(var j=0; j<= codeLength-1; j++){
    arrayCode[j]=stringCode.charCodeAt(j);      //Guarda los valores ASCII
    if(arrayCode[j]>=65 && arrayCode[j]<=90){   //Valida que sean Mayúsculas
      positionX=65;
      arrayCode[j]=((arrayCode[j]-positionX+numberSpaces)%26)+positionX;  //Aplica la formula, el cósigo César.
    } else if(arrayCode[j]>=97 && arrayCode[j]<=122){  //Valida que sean minúsculasposition "x"=97;
      positionX=97;
      arrayCode[j]=((arrayCode[j]-positionX+numberSpaces)%26)+positionX;
    }
    arrayCode[j] = String.fromCharCode(arrayCode[j]); //Convierte el código obtenido en letras
    //console.log(arrayCode);
  }                                 //Fin del for
  stringCode =arrayCode.join();   //Junta los elementos del array
  for(var k=0; k<=stringCode.length; k++){  //Elimina las comas
    stringCode= stringCode.replace(",","");
  }                               //Termina for de eliminar comas

  return(stringCode);                            //Devuelve el valor de la función
}

var uncipher= function (codeString){
  var uncodeLength= codeString.length;
  var arrayUnCode=[];                 //Array que contiene el mensaje
  var positionX;                      //Variable que guarda la nueva posición de "x"
  var numberSpaces=33;                //Indica el número de desplazamientos
  for(var j=0; j<= uncodeLength-1; j++){ //Convierte a ASCII
    arrayUnCode[j]=arrayUnCode[j]=codeString.charAt(j);
    arrayUnCode[j]=codeString.charCodeAt(j); //Guarda los valores ASCII
    if(arrayUnCode[j]>=65 && arrayUnCode[j]<=90){ //Valida que sean Mayúsculas y aplica la formula
      positionX=90;
      arrayUnCode[j]=((arrayUnCode[j]-positionX-numberSpaces)%26)+positionX;
    } else if(arrayUnCode[j]>=97 && arrayUnCode[j]<=122) { //Valida que sean minúsculas y aplica la formula
      positionX=122;
      arrayUnCode[j]=((arrayUnCode[j]-positionX-numberSpaces)%26)+positionX;
    }
    arrayUnCode[j] = String.fromCharCode(arrayUnCode[j]);   //Convierte de ASCII a letra
  }                                   //Fin del for
  codeString =arrayUnCode.join();     //Junta los elementos del array
  for(var k=0; k<=codeString.length; k++){  //Elimina las comas
    codeString= codeString.replace(",","");
  }                                   //Fin del for para eliminar comas
  return(codeString);                 //Devuelve el valor de la función
}

var solution= cipher(mssCode);
var unCoded= uncipher(solution);
document.write("Mensaje con cifrado César: "+solution+"  ");

document.write("\n Mensaje sin cifrado César: "+unCoded );
