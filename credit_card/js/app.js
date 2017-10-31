var cardNumber= prompt("Ingrese la tarjeta de crédito");
// var cardNumber = "4772103000098954; Variable de prueba
var isValidCard =function (cardNumber){
  var numberValidation =[];
  for(i=0; i<=cardNumber.length-1; i++){  //Pasando los datos (string) a un array
    numberValidation[i]=cardNumber[i];
    if(numberValidation[i]==" "){         //Validando que no tenga espacios
      alert("El número de la tarjeta tiene ESPACIOS en blanco");
    }
  }
  numberValidation= numberValidation.reverse(); //Invirtiendo los valore
  var newArray =[];
  var index=0;                            // Indice auxiliar para operar
  var value;
  var newValue=[];
  var add=0;
  var addTotal=0;                         //Variable que almacena la suma total

  for(var j=0;j<=numberValidation.length-1; j++){
    index=j+1;                            //Índice+1 para que sean posiciones reales
    if(index%2!== 0){                     //Validando que sea impar la posición
      numberValidation[j]=parseInt(numberValidation[j]); //almacenando dato y convirtiendolo a entero
      newArray.push(numberValidation[j]);   //Guarda el dato en el nuevo array
    }
    else if(index%2===0){                   //Validando que el índice sea par
      value= numberValidation[j];           //Guardando el dato en value para operarlo
      value= value*2;
      if(value>=10){
        value= value.toString();          //Convierte a string el resultado de value
        for(k=0; k<=value.length-1;k++){
          newValue[k]=parseInt(value.charAt(k)); //Guarda los digitos del dato mayor a diez
          add+=newValue[k];               //Suma los dígitos y los guarda en add
        }

        newArray.push(add);              //Guarda el resultado de la suma en el array
        add=0;
      }
      else{
        value= parseInt(value);         //Convierte a entero los datos de un dígito en la posición par
        newArray.push(value);           //Guarda el dato de la posición par de un dígito
      }                                 //Cierre del else
    }                                   //cierre del elseif
  }                                     //Cierre del for de validación

  for(var l=0; l<=newArray.length-1; l++){    //Suma de todos los dígitos resultantes
    addTotal+= newArray[l];  //console.log(addTotal);
  }
  if(addTotal%10===0){                  //Validando el Mod10 del resultado
    return("El número de la tarjeta es VÁLIDO"); //Si es igual a cero es válida
  }
  else{
    return("No es VÁLIDA la tarjeta")   //No es válida dado que el módulo es dif. de 0
  }
} //Fin de la función

solution= isValidCard(cardNumber);      //Manda a llamar a la función y el resultado lo guarda en solution
document.write(solution);
