// CARRITO DE COMPRAS


const vinos = [];
    vinos.push(new Producto('Cordero Con Piel De Lobo', 'Mosquita Muerta Wines', 'Malbec', 1563, 'Tinto'));
    vinos.push(new Producto('Alma Mora', 'Finca Las Moras', 'Malbec', 1695, 'Tinto'));
    vinos.push(new Producto('Angelica Zapata', 'Catena Zapata', 'Malbec', 14494, 'Tinto'));

    vinos.push(new Producto('Coleccion Privada', 'Navarro Correas', 'Pinot Noir', 2326, 'Tinto'));


    vinos.push(new Producto('Saint Felicien', 'Catena Zapata', 'Chardonnay', 2098, 'Blanco'));
    vinos.push(new Producto('Luigi Bosca', 'Luigi Bosca', 'Chardonnay', 3013, 'Blanco'));

    vinos.push(new Producto('Portillo', 'Salentein', 'Sauvignon Blanc', 1199, 'Blanco'));

    
    vinos.push(new Producto('Luigi Bosca', 'Luigi Bosca', 'Rosé', 9402, 'Rosado'));


///variables y constantes

const SI = "si";
const NO = "no";
const EDAD_MINIMA = 18 ;

let edad;
let seleccionVino;
let continuar = 'si';
let total;
let seleccionFinal;

const detalleCarrito = [];

///funciones

function agregarProductos (){
    do {
        const listaProductos = vinos.map((product,index) =>
            `${index + 1} - ${product.nombre} de ${product.bodega} | ${product.varietal} | $${product.precio}`);
        seleccionVino = +prompt('Ingrese el numero del producto que desea elegir:' + '\n' + listaProductos.join('\n'));

        while (seleccionVino <= 0 || seleccionVino > vinos.length || isNaN(seleccionVino) || seleccionVino == undefined) {
            seleccionVino = +prompt('No contamos con esa opción. Por favor ingrese un numero de esta lista:' + '\n' +  listaProductos.join('\n'));
        }

        cantidad = +prompt('Ingrese la cantidad que desea comprar:');
        if (cantidad <= 0 || isNaN(cantidad) || cantidad == undefined) {
            cantidad = +prompt('Debe ingresar un número');
        }

        detalleCarrito.push(new ProductoCarrito(vinos[seleccionVino-1].nombre, vinos[seleccionVino-1].precio, cantidad));

        continuar = prompt('¿Desea agregar otro vino al carrito? Ingrese "si" o "no"');
        
        while (continuar != 'no' && continuar != 'si') {
            continuar = prompt('Debe ingresar "si" o "no"');
        }

    } while(continuar == 'si');
}


function mostrarDetallePedido(detalle) {
    let detallePedido = ["Detalle del Pedido:"];
    
    detallePedido = detallePedido.concat(
      detalle.map((item, index) => 
        `${index + 1}. Producto: ${item.nombre} | Precio: $${item.precio} | Cantidad: ${item.cantidad} | Subtotal: $${item.subtotal}`
      )
    );
  
    detallePedido.push(`Total a abonar: $${total}`);
    alert(detallePedido.join('\n'));
  }



///inicio de interaccion

edad = +prompt ("Bienvenido a Bodega Selección. Por favor ingrese su edad:");
if (edad >= EDAD_MINIMA) {

agregarProductos ();

total = detalleCarrito.reduce((acc,item) => acc + item.subtotal,0);

alert(`Muchas gracias por comprar en Bodega Selección. El total a abonar es de $${total}. A continuacion le dejamos el detalle de su pedido.`);

mostrarDetallePedido(detalleCarrito);


} else {
    alert ("Lo sentimos, debe ser mayor de edad para ingresar en la página")
}
