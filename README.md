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

## Método Filter
El método <filter> consiste en crear un nuevo *array* a partir de los elementos originales filtrados mediante 
una función *(callback)* que indica la **condición a cumplir y es inmutable**. Si la condición se cumple, retorna 
el elemento completo.

Este proceso recibe **dos argumentos**:

- La función que itera y evalúa si cada elemento del *array* si cumple con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto <this> en la función. Si se lo omite, será <undefined>. Recuerde que <this> en arrow functions es el objeto global.

## Reduce
El método <reduce> **es inmutable** y consiste retornar un solo valor del *array* iterado a partir de una función 
*(callback)* que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe **dos argumentos**:

- La función que itera y reduce cada elemento del *array*. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del *array* y no ejecuta la función.

La función, que recibe como argumento el método <map>, utiliza cuatro parámetros:

- El **valor acumulado por la función** (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice *0*, y así sucesivamente.
- El ***array* que está iterando**.

```js
    let reducedValue = array.reduce(
        function(acumulator,element, index, array), 
        valorInicial
    )
```

Ahora que ya sabes cómo funciona el método <reduce> de *arrays*, podemos utilizarlo para crear un objeto 
con la frecuencia de cada elemento de un *array*, es decir, cuántas veces aparece.

### Objeto de frecuencias
Para obtener un objeto de frecuencias de cada elemento de un array es necesario tener presente las siguientes consideraciones:

- Establecer un objeto vacío como valor inicial del método <reduce>.
- El objeto vacío también será nuestro acumulador.
- Verificar si el elemento ya existe en nuestro objeto de frecuencias.
- Si no existe, creamos la propiedad referente al elemento del *array* y le inicializamos en 1.
- Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
- Finalmente, debes retornar el objeto dentro de la función del método <reduce>.

## Some
El método <some> es inmutable y consiste en retornar un valor lógico verdadero **si existe al menos un elemento**
**que cumpla la condición** establecida en la función *(callback)*.

Este método recibe **dos argumentos**:

- La función que itera y evalúa cada elemento del *array* hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto <this> en la función. Si se lo omite, será <undefined>. Recuerde que <this> en *arrow* functions es el objeto global.

> En el ejemplo empleado para el presente método de *arrays*, se usa una librería para la manipulación de fechas,
> dicha librería *(date-fns)* puede instalarse mediante línea de comandos:

`$ npm i date-fns`

## Método Every
El método <every> es **inmutable** y consiste retornar un valor lógico verdadero **si todos los elementos cumplen** 
**con la condición** establecida en la función *(callback)*.

Este método recibe **dos argumentos**:

- La función que itera y evalúa cada elemento del *array* hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto <this> en la función. Si se lo omite, será <undefined>. Recuerde que <this> en *arrow functions* es el objeto global.

`array.every(function(), thisArg)`

La función, que recibe como argumento el método every, utiliza tres parámetros:

El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El **array que está iterando**.

`array.every(function(element, index, array))`

## Método Some
Los métodos <find> y <findIndex> consisten en encontrar el **primer elemento de un array que cumpla con la condición especificada** en la función *(callback)*.

En el caso de <find> retornará el elemento completo, si cumple con la condición, caso contrario retornará <undefined>. El método <findIndex> retornará el índice del elemento encontrado, caso contrario retornará `-1`.

Estos procedimientos reciben **dos argumentos**:

* La función que itera y evalúa cada elemento del *array* hasta encuentre uno que cumpla con la condición especificada (obligatorio).
* Un objeto al que puede hacer referencia el contexto <this> en la función. Si se lo omite, será <undefined>. Recuerde que <this> en *arrow functions* es el objeto global.

`array.find(function(), thisArg)`
`array.findIndex(function(), thisArg)`

## Método Includes
El método <includes> determina si un *array* o *string* incluye un determinado elemento. Devuelve <true> o <false> , si existe o no respectivamente.

Este método recibe dos argumentos:

* El **elemento** a comparar.
* El **índice inicial** desde donde comparar hasta el último elemento.

> El método <includes> se utiliza para *arrays* y *strings*. El método es sensible a mayúsculas, minúsculas y espacios

## Método Join
El método <join> une los elementos del *array*, mediante una separación, y retorna un *string*. Si un elemento es <undefined> o <null>, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

- La **separación** de cada elemento del *array* al unirlos.

`array.join(separación)`

## Método split de strings
El método <split> de *strings*, es lo contrario que el método <join>, consiste en separar un *string* en *substrings*, indicando un valor a separar. Este método retornará un *array* de los elementos separados.

Este método recibe dos argumentos:

El **separador** que especifica el conjunto de caracteres a separar en *substrings*.
El **límite** de elementos separados a retornar.

```js
    const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

    cadena.split(" ") 
    /* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
    */
    cadena.split(", ") 
    /* [ 
        'JavaScript es maravilloso', 
        'con JavaScript puedo crear el futuro de la web.' 
    ]*/
    cadena.split("JavaScript")
    /* [
        '', 
        ' es maravilloso, con ', 
        ' puedo crear el futuro de la web.' 
    ]*/
    cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]
```

## Método Concat
El método <concat> **es inmutable** y consiste en crear un nuevo *array* a partir de la unión de otros valores o *arrays* especificados como argumentos.

Este método recibe **uno o varios argumentos**:

Valores cualesquiera y/o *arrays* para concatenar.

`let result = array.concat(otherArray)`

## Método Flat
El método <flat> es **inmutable** que consiste en retornar un *array* donde los *sub-arrays* han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un *array* de *arrays* a una sola dimensión.

Este procedimiento recibe un argumento:

* La **profundidad** del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los *sub-arrays* en una sola dimensión, utiliza el valor de <Infinity>.

`array.flat(profundidad)`

## Método Flatmap
El método <flatMap> es **inmutable** y consiste en la combinación de los métodos <map> y <flat>. Primero realiza la iteración de los elementos del *array* (como si fuera <map>), y después los aplana en **una sola profundidad** (como si fuera <flat>).

Este procedimiento recibe los mismos argumentos que el **método map**

```js
    const strings = ["Nunca pares", "de Aprender"]

    strings.map(string => string.split(" ")) 
    // [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

    strings.flatMap(string => string.split(" ")) 
    // [ 'Nunca', 'pares', 'de', 'Aprender' ]
```

```js
    const numbers = [1, 2, 3, 4]

    numbers.map(number => [number * 2]) 
    // [[2], [4], [6], [8]]

    numbers.flatMap(number => [number *2]) 
    // [2, 4, 6, 8]
```

## Mutable functions
Las funciones mutables consisten en cambiar el *array* original. Estos métodos son:

* push
* unshift
* pop
* shift
* splice
* sort

### Método push
El método <push> **agrega** uno o varios elementos al **final** del *array* original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del *array* mutado.

```js
    const array = [1,2,3]
    array.push(4,5)
    console.log(array) // [ 1, 2, 3, 4, 5 ]
```

### Método unshift
El método <unshift> **agrega** uno o varios elementos al **inicio** del *array* original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del *array* mutado.

```js
    const array = [3,4,5]
    array.unshift(1,2)
    console.log(array) // [ 1, 2, 3, 4, 5 ]
```

### Método pop
El método <pop> extrae el elemento del **final** del *array* original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

```js
    const array = [1,2,3,4]
    const lastElement = array.pop()
    console.log(lastElement) // 4
    console.log(array) // [ 1, 2, 3 ]
```

### Método shift
El método <shift> extrae el elemento del **inicio** del *array* original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

```js
    const array = [1,2,3,4]
    const firstElement = array.shift()
    console.log(firstElement) // 1
    console.log(array) // [ 2, 3, 4 ]
```

### Método splice
El método <splice> **extrae** uno o varios elementos del *array* original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un *array* con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

El método <splice> recibe tres argumentos:

* El **índice** donde comenzará a cambiar el *array*.
* La **cantidad de elementos** que serán reemplazados.
* **Uno o varios elementos** que reemplazarán a los originales del *array*.

```js
    array.splice(índice, cantidad, items)
    array.splice(índice, cantidad, item1, item2, ..., itemN)
```

**Ejemplos utilizando el método *splice***

```js
    const array = [1,2,3,4]
    const elements = array.splice(2,1,"tres")
    console.log(elements) // [3]
    console.log(array) // [ 1, 2, 'tres', 4 ]

    const array = [1,2,3,4]
    const elements = array.splice(1,2,"dos", "tres")
    console.log(elements) // [ 2, 3 ]
    console.log(array) // [ 1, 'dos', 'tres', 4 ]
```
