<h1 align='center'>Gallery. Project React with microfrontends</h1>
![image](https://github.com/papauma/gallery/assets/1780531/c5305bef-b467-4e50-8cc2-5f40f0e337c5)

<h2>Descripción del Proyecto</h2>
Se requiere la realiación de una galería de imágenes agrupadas en álbumes para un grupo  de usuarios.
Para la implementación del proyecto se han generado diferentes microfrontends con el fin de cubrir las funcionalidades descritas en lols requerimientos:
<ul>
  <li>Usuarios: mostrar la información de los usuarios que contiene el endpoint https://jsonplaceholder.typicode.com/users</li>
  <li>Álbumes: mostrar la información de los álbumes que contiene el endpoint https://jsonplaceholder.typicode.com/albums</li>
  <li>Fotos: mostrar la información de las fotos que contiene el endpoint https://jsonplaceholder.typicode.com/albums</li>
</ul>
El motivo por el que se opta por la utilización de microfrontends es porque se trata de un patrón arquitectónico en la construcción de aplicaciones web que consiste en dividir la aplicación web en partes más pequeñas y autónomas, que se pueden desarrollar, testar y desplegar de forma independiente.

<h2>Estado del proyecto</h2>
El proyecto se encuentra en construción

<h2>Características de la aplicación</h2>
En este caso, para la organización en microfontends se ha optado por la utilización de <B>Module Federation</B>. Se trata de una carácterística de Webpack 5 que permite a las aplicaciones web compartir módulos y dependencias de JavaScript entre sí en tiempo de ejecución de forma dinámica sin la necesidad de incluirlos en la compilación.

<i>Para casos más complejos se podría usar otra configuración de aplicaciones. Se podría generar apliaciones independientes deployadas en un servidor e importarlas en el package.json de la aplcaición principal. Se debería estudiar.</i>

A nivel organizativo se han creado 3 aplicaciones (microfrontend). Cada una se encargará de mostrar la información de cada una de las funcionalidades descritas anteriormente.
Además se ha generado una cuarta aplicación con soble funcinoalidad. Por un lado gobernará toda la aplicación, mostrando cada microfrontend anterior cuando sea requerido; y por otro, proveerá de aquellos componentes comunes en todos los microfrontends con el fin de poder reutilizar el máximo número de componentes y no tener que duplicarlos.

<i>Esta cuarta aplicación tiene una doble misión porque hay pocos componentes compartidos, en una aplicación más compleja sería conveniente generar una aplicación sólo para componentes reutilizables, así como para estilos, etc... Se podría usar, por ejemplo, styled-components</i>

<h2>Uso del proyecto</h2>
<ul>
  <li>Para hacer uso del proyecto en un entorno de local, es necesario arrancar cada una de las aplicaciones de manera independiente mediante el comando <b>npm start</b></li>
  <li>De la misma manera, se pueden lanzar los test de cada las aplicaciones mediante el comando <b>npm run test</b></li>
  <li>También se puede hacer uso del linter mediante el comando <b>npm run lint</b></li>
</ul>

<h2>Tecnologías utilizadas</h2>
<ul>
  <li>React (v18.2.0)</li>
  <li>Webpack 5 Module Federation</li>
  <li>SASS</li>
  <li>Jest</li>
  <li>Eslint y prettier</li>
</ul>



