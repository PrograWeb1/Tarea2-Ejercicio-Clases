class ElementoDeColeccion {
    constructor(id, titulo, tipo) {
        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
    }
}

class AdministradorDeColeccion {
    constructor() {
        this.coleccion = [];
        this.proximoId = 1;
    }

    agregarElemento(titulo, tipo) {
        const elemento = new ElementoDeColeccion(this.proximoId++, titulo, tipo);
        this.coleccion.push(elemento);
        console.log(`Elemento agregado: [${elemento.tipo}] ${elemento.titulo}`);
    }

    listarElementos() {
        if (this.coleccion.length === 0) {
            console.log("La colección está vacía.");
        } else {
            this.coleccion.forEach(elemento => console.log(`${elemento.id}: [${elemento.tipo}] ${elemento.titulo}`));
        }
    }

    eliminarElemento(id) {
        const indice = this.coleccion.findIndex(elemento => elemento.id === id);
        if (indice !== -1) {
            const elemento = this.coleccion.splice(indice, 1)[0];
            console.log(`Elemento eliminado: [${elemento.tipo}] ${elemento.titulo}`);
        } else {
            console.log("Elemento no encontrado.");
        }
    }
}

// Uso de ejemplo
const administrador = new AdministradorDeColeccion();

console.log("Bienvenido al Administrador de Colecciones");

const menuPrincipal = () => {
    const menu = `Elija una opción:
1. Agregar elemento
2. Listar elementos
3. Eliminar elemento
4. Salir
`;

    readline.question(menu, opcion => {
        switch (opcion) {
            case '1':
                mostrarMenuAgregar();
                break;
            case '2':
                administrador.listarElementos();
                menuPrincipal();
                break;
            case '3':
                readline.question('Ingrese el ID del elemento a eliminar: ', id => {
                    administrador.eliminarElemento(parseInt(id));
                    menuPrincipal();
                });
                break;
            case '4':
                readline.close();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuPrincipal();
        }
    });
};

const mostrarMenuAgregar = () => {
    const menuAgregar = `Seleccione el tipo de elemento:
1. Película
2. Libro
3. Persona
`;

    readline.question(menuAgregar, tipo => {
        switch (tipo) {
            case '1':
                agregarElemento('Película');
                break;
            case '2':
                agregarElemento('Libro');
                break;
            case '3':
                agregarElemento('Persona');
                break;
            default:
                console.log('Tipo inválido. Intente de nuevo.');
                mostrarMenuAgregar();
        }
    });
};

const agregarElemento = (tipo) => {
    readline.question('Ingrese el título del elemento: ', titulo => {
        administrador.agregarElemento(titulo, tipo);
        menuPrincipal();
    });
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

menuPrincipal();
