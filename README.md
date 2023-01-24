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