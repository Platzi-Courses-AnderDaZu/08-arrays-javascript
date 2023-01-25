# 08-arrays-javascript
En este repositorio se guardara código e información relacionada al manejo y manipulación de Arrays en JavaScript

## ForEach
> Se uso el método foreach de los arrays para volver más simple el código a la hora de
> consultar los elementos de los Arrays.

## Mutable o Inmutable
Los conceptos de **mutabilidad e inmutabilidad** son muy importantes para los siguientes métodos de
*arrays*. Existen métodos mutables que cambian el *array* original; e inmutables que devuelven un
*array* diferente al original.
### Referencias en Memoria
En JavaScript, cada estructura está guardada en una referencia de memoria, por lo que si cambiamos un
elemento en el *array*, también lo haremos en esa referencia. Al clonar *arrays*, se crea un nuevo 
*array* que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio
en el original, también cambiará en la copia.
### Diferencias entre mutabilidad e inmutabilidad
Con lo mencionado anteriormente, **mutable es aquilla acción que cambia el valor en la referencia en**
**memoria del elemento del *array original***, provocando que cambien el original y la copia.
**Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original,**
provocando que el original siga igual.
La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos;
pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más
exigente, te permite generar nuevoas estructuras para manejarlas sin cambiar la original, pero esto
puede que la memoria colapse.
Por lo que, ¿cuál es mejor? La respuesta es ninguna, ya que cada uno permite manejar estructuras de datos,
por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.

## Método Map
El método <map> consiste en crear un nuevo *array* a partir de los elementos originales transformados mediante
una función *(callback)* y es **inmutable**.
La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro *array*. Las
posibilidades son infinitas.
Este método recibe dos **argumentos**:
- La función que itera y transforma cada elemento del *array* (obligatorio).
- Un objeto al que puede hacer referencia el contexto <this> en la función. si se lo omite, será <undefined>.

> Recordar que <this> en *arrow functions* es un objeto global.

La función, que recibe como argumento el método <map>, utiliza **tres parámetros**:
- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El ***array*** que está iterando.

## Map Reloaded
**Transformando objetos dentro de un *array***
De un conjunto de datos, de los cuales son objetos, a veces requieres añadir una propiedad nueva o eliminar una 
que no es necesaria. Si necesitas transformar objetos dentro de un *array*, debes tener en cuenta que **cada objeto** 
**tiene una referencia en memoria propia**. Por lo que si transformas un objeto, también lo harás en el original como 
en el nuevo, aun cuando el método <map> es inmutable.
Los parámetros por referencia los debes tener presente cuando manejes objetos y arrays.
Una forma de evitar este comportamiento, es crear un nuevo objeto con el [spread operator](https://platzi.com/clases/1815-ecmascript-6/25942-que-se-implemento-en-es9/) *(operador de propagación)*.