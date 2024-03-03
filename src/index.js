import './styles.css';
import { saludar } from "./js/componentes";
// Podemos ponerle "componentes.js" o simplemente "componentes" de todas formas siempre va a buscar un archivo con la extensión "js", así haya dos archivos con el mismo nombre, siempre va a tomar el archivo con la extension "js". Y no puede haber dos archivos con el mismo nombre y extensión, si puede haber dos archivos con el mismo nombre pero diferente extensión, pero NO dos archivos que tengan el mismo nombre y extensión

const nombre = 'Alvaro';

saludar( nombre );


/* 
lo que se ve aca es el problema y la necesidad,
es decir, por que necesitamos web pack. Va a haber
ocasiones en las que nuestra aplicacion sea demasiado
grande y no podamos tener todo nuestro codigo en un
mismo archivo, entonces vamos a necesitar
tener todo de manera "modular", pero tampoco vamos a
querer estar importando decenas de scripts en nuestro
"index.html", porque cada referencia o importacion
de un script es una petición a nuestro servidor,
por lo cual perjudicaría mucho la performance y el
rendimiento de nuestra web o aplicación. Entonces,
necesitamos poder hacer en un unico archivo javascript
referencia a todos nuestros componentes o modulos que
componen nuestro codigo (que no está en unico archivo 
porque sería muy dificil de mantener), entonces digamos
que necesitamos hacer la importacion de cierto contenido
de archivos de javascript externos o "modulos", es decir,
necesitamos importar en un archivos js información de
otro archivo o modulo js, y no podemos hacerlo de manera
nativa, para eso es que existe WEBPACK, y lo que nos permite
realizar webpack es importar informacion de modulos o archivos
javascript externos a otro archivo js, sin tener que
copiar y pegar el codigo en nuestro archivo y generar un
archivo de javascript gigantesco muy dificil de mantener
*/

/*
en algun momento vamos a necesitar importar modulos
o partes de codigo de un archivo externo, para no
copiarlo y pegarlo en nuestro archivo, que se haga
gigantesco y luego sea imposible de mantener, entonces
para hacer esas importaciones, es que utilizamos webpack
ese es el problema al que nos enfrentamos sin webpack
y esa es la necesidad de su implementacion o uso
*/

/*
Para lograr lo que estamos queriendo lograr ahora
(importar contenido de un archivos js externo a mi
archivo js actual)vamos a tener que trabajar con webpack
*/