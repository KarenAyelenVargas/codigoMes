let btnEnviar = document.getElementById("btnEnv");
let nroMes: number = 0;

btnEnviar.addEventListener("click", () => {
  let nroMes: number = Number(mes.value);
  switch (nroMes) {
    case 1:
      console.log("El mes es Enero");
      break;
    case 2:
      console.log("El mes es Febrero");
      break;
    case 3:
      console.log("El mes es Marzo");
      break;
    case 4:
      console.log("El mes es Abril");
      break;
    case 5:
      console.log("El mes es Mayo");
      break;
    case 6:
      console.log("El mes es Junio");
      break;
    case 7:
      console.log("El mes es Julio");
      break;
    case 8:
      console.log("El mes es Agosto");
      break;
    case 9:
      console.log("El mes es Septiembre");
      break;
    case 10:
      console.log("El mes es Octubre");
      break;
    case 11:
      console.log("El mes es Noviembre");
      break;
    case 12:
      console.log("El mes es Diciembre");
      break;
    default:
      console.log("Usted no ha escrito un número de mes válido.");
  }
});
