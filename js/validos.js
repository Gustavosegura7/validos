 export function valida(input){
  const tipoDeInput = input.dataset.tipo;
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input);
  }
console.log(input.parentElement);
    if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
        } else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }

}
const tipoDeErrores=[
  "valueMissing",
  "typeMissing",
  "patternMismatch",
  "customError",
]


 const mensajeDeError = {
  nombre:{
    valueMissing :"El campo nombre no puede estar vacio"
  },
  email:{
    valueMissing :"El campo email no puede estar vacio",
    typeMissing :"el correo no es valido"
  },
  password:{
    valueMissing :"El campo  contraseña no puede estar vacio",
    patternMismatch:" almenos 6 caracteres, maximo 12, debe tener una letra mayuscula y una letra minusculas, un numero y no puede contener un caracteres especial."
  },
  nacimiento:{
    valueMissing :"El campo nacimiento no puede estar vacio",
    customError:" debes ser  mayor de edad"
  },
  numero:{
    valueMissing :"El campo nacimiento no puede estar vacio",
    patternMismatch:"El formato requiere xxxxxxxxxx 10 numeros" 
  },
  dirección:{
    valueMissing :"El campo nacimiento no puede estar vacio",
    patternMismatch:"La direccion de tener enter 10 y 40 caracteres" 
  },
  ciudad:{
    valueMissing :"El campo nacimiento no puede estar vacio",
    patternMismatch:"La ciudad de tener enter 10 y 40 caracteres"
  },
  estado:{
    valueMissing :"El campo nacimiento no puede estar vacio",
    patternMismatch:"El estado de tener enter 10 y 40 caracteres" 
  }
 }

const validadores = {
    nacimiento: (input) => validarNacimiento(input), 

}

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje=""
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      console.log(tipoDeInput,error);
      console.log(input.validity[error]);
      console.log(mensajeDeError[tipoDeInput][error]);
     mensaje= mensajeDeError[tipoDeInput][error];
    }

  })
  return mensaje
}

function validarNacimiento (input){
    const fechaCliente = new Date(input.value);
    let mensaje ="";
   if(!mayorDeEdad(fechaCliente)){
    mensaje = " debes ser  mayor de edad";
   }

   input.setCustomValidity(mensaje);
};
 

function mayorDeEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
     fecha.getUTCFullYear() + 18 ,
     fecha.getUTCMonth() ,
     fecha.getUTCDate()
     );
return diferenciaFechas <= fechaActual ;
}
