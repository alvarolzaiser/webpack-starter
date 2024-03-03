// Con hacer lo que está debajo, le estoy diciendo a mi archivo de "componentes.js" que va a requerir importar el archivo de css que se encuentra en la ruta especificada debajo. No debo preocuparme por el momento en el que se importe el archivo css, ya que si ese archivo css solo contiene estilos para este archivo js, cuando este archivo js se requiera, lo primero que se va a importar son los estilos.
// De esa forma, logramos tener mejor rendimiento y mejoras de performance, ya que, el archivo o código css solo se va a cargar cuando se requiera o se necesite el archivo JS. Antes de eso, NO, lo que genera un ahorro de recursos y una optimización de los mismos, debido a que no los vamos a cargar siempre, o en todo momento o cuando recien ingresamos a nuestra aplicación (lo cual es absurdo e ineficiente, porque probablemente cuando ingresamos a nuestra app, no requiramos de ese archivo js, entonces es absurdo usar recursos para cargar los estilos de un archivo js que aún no se requiere, ni se solicita, entonces, los estilos se cargan cuando el archivo esté siendo requerido o demandado, sino no, porque no hace falta cargar estilos de un archivo que no se está requiriendo), sino que solo cuando se necesite o se requiera del archivo JS que necesita de esos estilo o requiere esa importacion de estilos..
import '../css/componentes.css';


export const saludar = ( nombre ) => {

    const etiquetaH1 = document.createElement('h1');
    
    etiquetaH1.innerText = `Hola ${nombre}`;
    
    document.body.append(etiquetaH1);
    
    console.log(`Creando etiqueta H1`);

}

/*
"export" nos sirve para decir que es una funcion, código o módulo
que puede ser exportado (como su palabra lo indica) y utilizado
por otros archivos js. En este caso si nosotros queremos
importar o exportar modulos o partes de códigos de diferentes
archivos porque estamos trabajando de manera modular
en diversos archivos de js que permiten una mejor, mas
rapida y eficiente mantención del código, para indicar que se
puede utilizar y que no, debemos colocar el "export" en los
casos que querramos compartir ese código e importarlo en
otro lugar, sino, por defecto, va a interpretar que no se
puede importar ese módulo o trozo de código. ¿Se entiende?
es decir, si no le coloco nada, por defecto se asume
que ese modulo no se quiere compartir, entonces no se 
puede hacer luego una importación de dicho modulo en un
archivo js externo. Entonces, digamos que, necesito especificar
que quiero compartir ese módulo, porque sino, por defecto,
va a entender que no lo quiero hacer.
Si no ponemos nada, entonces entiende, interpreta y asume
que no se comparte, para que lo haga hay que colocar "export"
*/