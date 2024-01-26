# Administrador de Colección

## Descripción
Una aplicación de consola en JavaScript para administrar una colección de elementos como películas, libros y personas. Permite agregar, listar y eliminar elementos de la colección.

## Funcionamiento
La aplicación presenta un menú en la consola para elegir entre diferentes opciones:
- Agregar un nuevo elemento a la colección.
- Listar todos los elementos en la colección.
- Eliminar un elemento de la colección.
- Salir de la aplicación.

## Uso
1. Ejecute el programa en un entorno que soporte Node.js.
2. Utilice el menú de la consola para elegir una acción.
3. Siga las instrucciones en pantalla para realizar las operaciones.

## Clases

### `ElementoDeColeccion`
Representa un elemento individual en la colección.
- `constructor(id, titulo, tipo)`: Crea un nuevo elemento con un ID, título y tipo.
- Propiedades:
  - `id`: Identificador único del elemento.
  - `titulo`: Título o nombre del elemento.
  - `tipo`: Tipo del elemento (p.ej., Película, Libro, Persona).

### `AdministradorDeColeccion`
Gestiona la colección de elementos.
- `constructor()`: Inicializa una nueva colección vacía.
- `agregarElemento(titulo, tipo)`: Agrega un nuevo elemento a la colección.
- `listarElementos()`: Muestra todos los elementos en la colección.
- `eliminarElemento(id)`: Elimina un elemento de la colección por su ID.

## Funciones adicionales

### `menuPrincipal()`
Muestra el menú principal y maneja la interacción del usuario.

### `mostrarMenuAgregar()`
Muestra un menú para seleccionar el tipo de elemento a agregar.

### `agregarElemento(tipo)`
Solicita al usuario ingresar el título del elemento y lo agrega a la colección.

## Requisitos y pasos para levantar el proyecto
- Node.js debe estar instalado para ejecutar la aplicación.
- La aplicación utiliza el módulo `readline` de Node.js para la interacción con el usuario.
- Despues de tener clonado el repositorio utilizar el comando:
`npm install`
- Por ultimo para levantar el proyecto utilizar el comando: `npm run dev`
