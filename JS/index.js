function mostrarProductos() {
  let catalogo = "Catalogo de productos: \n";
  catalogo += "1. Carne- $5000: \n";
  catalogo += "2. Carbon- $3000: \n";
  catalogo += "3. Lechuga- $2000: \n";
  catalogo += "4. Tomate- $1000: \n";
  return catalogo;
}

mostrarProductos();

function comprarProducto() {
  let total = 0;
  let seguirComprando = true;

  while (seguirComprando) {
    let catalogo = mostrarProductos();
    let eleccion = prompt(
      catalogo +
        "Que producto quieres comprar? ingrese el numero o escriba 'salir' para finalizar"
    );

    //si el dato es valido
    if (eleccion === null || eleccion === " ") {
      alert("no has ingresado un datos valido");
      continue;
    }

    //usuario ingresa salir
    if (eleccion === "salir") {
      break;
    }

    //el dato es el rango del numero
    eleccion = parseInt(eleccion);
    if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
      alert("Producto no valido, seleciiona nuevamente");
      continue;
    }

    if (eleccion === 1) {
      total += 5000;
      alert("Has agregado carne ");
    } else if (eleccion === 2) {
      total += 3000;
      alert("Has agregasdo Carbon ");
    } else if (eleccion === 3) {
      total += 4000;
      alert("Has agregasdo Lechuga ");
    } else if (eleccion === 4) {
      total += 5000;
      alert("Has agregasdo Tomate ");
    }

    let respuesta = prompt("quieres seguir comprando? (si/no)");

    if (respuesta === "si") {
      seguirComprando = true;
    } else {
      seguirComprando = false;
    }
  }

  alert(` Gracias por su compra. El total es ${total} `);
}

comprarProducto();
