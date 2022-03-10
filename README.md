# Configuración inicial

Ejecutar el siguiente `script.bash` dentro de `git bash` en caso de tener **Node** instalado

```bash
script/env.bash
```

Ejecutar los siguientes `script.bash` dentro de `git bash` en caso de no tener **Node** instalado

**Importante:** En caso ocurrir algún problema, ejecutar `git bash` en modo administrador

```bash
# primero -> Se abrirá una ventana pidiendo instalar nvm, no se require ninguna configuración especial, presionar "next o siguiente" hasta finalizar la instalación
script/install-nvm.bash

# segundo -> Se configurará la versión de node 16.14.0, la ultima versión con soporte duradero
script/setting-nvm.bash

# tercero
script/env.bash
```

Ejemplo:
![Tux, the Linux mascot](./images/Screenshot_1.png)

Después de ejecutar el script `env.bash` se creara el archivo `.env`, dentro de el se deberá agregar las credenciales de la cuenta asociada a **Google Play Console**

Ejemplo

```env
EMAIL=your@email.com
PASS=yourPAss
```

Luego deberá ejecutar el comando

```
npm start
```

## Metodologías y Herramientas

### 1. **VSCode** como editor de código

> Recomiendo encarecidamente utilizar **VSCode** porque provee soporte nativo para **TypeScript**, **JSDoc** y tiene una galería de **Extensiones** que hace la vida mucho mas fácil

### 2. **TypeScript** y **JSDoc** como analizadores de código estático

> Debido a las características de **JavaScript** es muy fácil que se cometan errores a la hora de escribir el código, por eso el analizador de tipos de **TypeScript** y la declaración de tipos con **JSDoc** en archivos **.js** hace que se reduzcan drásticamente los errores debido al intellisense que proveen estas 2 herramientas al usarse juntas
>
> Ejemplo
>
> `Nota Importante:`
>
> - `// @ts-check` se utiliza para decirle a VSCode tiene que estar atento a los tipos
> - `/** @type {string} */` se utiliza para declarar los tipos, **JSDoc** es un estándar muy grande, tiene solución a casí todos los casos :)

```Javascript
// @ts-check

/** @type {string} */
const name = 'Manuel'

/** @type {boolean} */
const isMan = true

/** @type {number}*/
const age = 22

/**
 * @type {{
 * name: string,
 * isMan: boolean,
 * age: number
 * }}
 */
const person = {
    name: name,
    isMan: isMan,
    age: age,
}
```

### 3. Forma de declarar funciones con más de un argumento

> Para realizar un código mucho más legible se recomienda utilizar **Objetos primitivos** como alternativa a multiples parámetros
>
> Esto se recomienda por 3 motivos
>
> - Es menos problemático al momento de agregar nuevos parámetros
> - Es mucho más sencillo determinar que valor colocar en cada parámetro
> - El orden en que se introduzcan los parámetros no va a afectar el funcionamiento
>
> Ejemplo:

```Javascript
// Función con multiples parametros
function saludarConMultiplesParametros(
    nombre = 'defaultName',
    momentoDelDia = 'defaultMoment',
){
    console.log(`Hola ${nombre}, buenos/as ${momentoDelDia} como esta?`)
}

// Como podrá notar se tiene que entender muy bien la función que se esta llamando para pasarle los argumentos en el orden correcto con los valores correctos
saludarConMultiplesParametros('Manuel', 'tardes')

// --------------------------------------------

// Función con un parametro
function saludarConUnParametro(props){

    const {
        nombre = 'defaultName',
        momentoDelDia = 'defaultMoment'
    } = props

    console.log(`Hola ${nombre}, buenos/as ${momentoDelDia} como esta?`)
}

// Como podrá notar es mucho fácil entender los argumentos con un solo parámetro de tipo `Objeto primitivo`
saludarConUnParametro({
    nombre: 'Manuel',
    momentoDelDia: 'tardes'
})
```

### 4. Código **declarativo** como preferencia a la hora de desarrollar

> En mi experiencia como desarrollador me he encontrado una cantidad de código que no se puede entender su funcionamiento a primera vista.
>
> Esto realmente no es un problema si se trata de una pequeña función o un componente de react muy pequeño
>
> Tener código **imperativo** en una lógica de negocio como un formulario dinámico con muchas validaciones puede volverse un infierno para depurar posibles bugs
>
> Un código imperativo se realiza con la intención de resolver un problema pero resulta difícil de leer porque se confunde donde comienza y donde termina, adicionalmente esta alternativa no puede aprovecharse
>
> Mientras que un código declarativo se aprovecha de la lógica creada con código imperativo y lo hace reutilizable
>
> Normalmente un archivo se debería construir con código declarativo y darle la responsabilidad de la logia a funciones externas
>
> Ejemplo

```JavaScript
// @ts-check
//
// Ejemplo de código imperativo
//
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {

    const { limit, from, by } = req.query;

    // validar que [limit] no sea nulo
    if ( !limit ) return res.status(400).json({
        success: false ,
        message: 'limit query parameter is empty'
    });

    // validar que no sea un NaN
    if (isNaN(limit)) return res.status(400).json({
        success: false ,
        message: 'limit query parameter is not string'
    });

    // validar qe el limite no sea mayor a 20
    if (+limit > 20) return res.status(400).json({
        success: false ,
        message: 'limit param is greater than 20'
    });

}

//
// Ejemplo de código declarativo
//
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {

    const { limit, from, by } = req.query;

    const {
        isValidParam: isValidLimit,
        value: imitAsNumber,
        message: messageOfLimit,
    } = ValidateParam({
        min: 0,
        max: 20,
        param: limit,
        isRequired: true,
        nameParam: "*limit query param*",
        typeData: TypeDataValidateParam.number,
    });

    if (!isValidLimit) return res.status(400).json({
        success: false ,
        message: messageOfLimit
    });


```

### 5. Propiedades estáticas de clase como forma de **ENUM**

> Debido a que en **JavaScript** no existe la palabra reservada **enum** para facilitar las opciones de un determinado argumento, se opto por utilizar un enfoque diferente que soluciona el mismo problema
>
> Una opción alternativa es usar un **Objeto primitivo** de **JavaScript** pero esto le genera problemas al analizador de tipos de **TypeScript**
>
> Ejemplo:

```Javascript
// @ts-check

// Recommended
class TypeOfGender {
  static male = "male";
  static female = "female";
  static nonBinary = "nonBinary";
}

// No use
const typeOfGender = {
  male: "male",
  female: "female",
  nonBinary: "nonBinary",
};

/**
 * @type {{
 * name: string,
 * age: number,
 * gender: TypeOfGender // No use -> gender: typeOfGender
 * }}
 */
const person = {
  name: "Manuel",
  age: 22,
  // TypeScript no reconoce los tipos
  // gender: typeOfGender.male
  //
  // Recommended
  gender: TypeOfGender.male,
};

```
