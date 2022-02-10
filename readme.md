# Explicación del desarrollo de la aplicación

1. Lo primero que realize fue descargar bootstraps.
2. Colocar el CDN de google fonts para tener una fuenta distinta.
3. Instale Animate.css para hacer evector hover a la hora de obtener de mostrar las tarjetas de los producutos.
4. Las peticiones en vez de usar fetch las realize con axios, y cuando existe un error se muestra con sweetAlert mostrando el error que devuelve la base de datos.
5. Como se indico era un diseno solamente con js puro por lo cual se creo 3 paginas
    * Index
    * Product
    * ShoppingCart
6. Desde el js se creo una funcion que atraves de axios realiza una peticion a nuestro API-RES de haber un error se muetra una alerta, en el caso correcto se desectrura el obj resultante, extrayendo solamente el arreglo de productos.
7. Luego cree un elemento div donde le agrege los atributos de css para que sea responsive, a ese elemento con un **innerHTML** y backTicks cree una plantilla de una Card de boostraps. Esta se crea por cada iteracion del arreglo de productos que obtengo. al finalizar el recorrido se inyecta al dom con un elemento que se hizo atravez de un id en el HTML.
8. Cada accion que se realiza en la pagina tales como
    * Buscar: Permite realizar busquedas por palabra compuesta, esto se logra ya que en el api-res existe un endpoint que hacer una query donde busca si los productos tienen el valor dentro del nombre, por lo cual es mas flexible con las busquedas.
    * Filtrar: Este funciona con un selector con categorias, las cuales se obtiene tambiem atraves de un endPoint y se guarda el id en los option del select. Estos se manda como parametro al backend que sirve como valor para hacer el respectivo filtro de los productos.
    * Mostrar: En este hay dos diferentes metodos uno en el index y uno en el products page, la diferencia es que en el index, se muestra 4 productos y en el products page es la lista completa, los dos son endPoint distintos ya que era inecesario obtener una lista tan grande para mostrar solamente 4 por lo cual se obto por crear una query con un limit de 4 para este caso.
9. Cada vez que se obtienen nuevos datos se hace una limpieza en el elemento para que no se cargan abajo de lo mismo.

10. Este fue el proceso que se realizo para el desarrollo.