Ejercicio teórico practico

Realizar una aplicación web para el control de inventarios, esta aplicación web servirá para que un
usuario pueda ingresar una lista de artículos con sus categorías y el número de artículos disponibles


Requerimientos técnicos

• React web como framework principal
• Usar redux para manejo de state de la aplicación
• Semantic UI para maquetación (Opcional) (https://react.semantic-ui.com/)
• Crear una API en Node JS para el guardado de los datos con cualquier DB (Opcional)

Requerimientos funcionales


• Se mostrarán tres vistas diferentes, la vista principal sera el listado de artículos del inventario, y
las vistas secundarias serán los formularios para dar de alta las categorías de los artículos y el
formulario de alta de un articulo en especifico
• El listado de artículos debe mostrar un mensaje “No se han agregado artículos” en caso de no
haber artículos
• En el alta de categorías solo se capturara el nombre de la categoría, por ejemplo Linea blanca,
Jugueteria, Herramientas, etc
• En el alta de artículos se capturaran el nombre del articulo, la categoría, unidades disponibles y
precio
• Al dar de alta un articulo, el campo de las categorías sera un dropdown donde el usuario pueda
seleccionar las categorías dadas de alta, en caso de no existir ninguna categoría se mostrara una
única opción por default “Sin categoría”
• Una vez dada de alta un articulo en el formulario, se redireccionara al usuario al listado de
artículos
• En el listado de artículos cada row del listado mostrara todos los campos del articulo, su
nombre, categoría, unidades disponibles y precio, ademas de botones para borrar o editar el
articulo
• El listado de artículos contará con un filtro por categoría para mostrar unicamente los artículos
de linea blanca por ejemplo