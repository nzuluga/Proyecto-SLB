console.log("Hola mundo")

// funcion Alert
// Este es el primer ejemplo para entender la entrada y salida de datos
// esta permite sacar una ventana flotante arriba del texto
// alert ("Bienvenidos");

//funcion prompt 
//cuadro de texto en ventana flotante
//var nombreestudiante;

//nombreestudiante=prompt("Digitar si nombre completo: ")
//alert("El nombre del estudiante es: " + nombreestudiante);

function captura(){
    var nombreest = document.getElementById("nomest").value;
    alert(nombreest);
}    
 //Esta funcion permite cambiar el nombre 
// query selector puede identificar multiples etiquetas
// get.ElementById solo permite identificar temas con respecto al ID
function cambiar(){
    var perro = document.getElementById("nomest").value;
    var parrafo = document.querySelector('#parrafo')
    //parrafo.textContent = 'texto desde js';
    parrafo.innerHTML = perro;
    var lista = document.getElementById('lista')
    const li = document.createElement('li');
    li.textContent = perro;
    lista.appendChild(li);

    //var columna = document.getElementById('columna')
    //const th = document.createElement('th');
    //th.textContent = perro;
    //columna.appendChild(th);

    const arrayElementtabla= ['elemento1','elemento2','elemento3'];
    console.log(arrayElementtabla)

   

// esta es una funcion que recorre cada elemento de la matriz
    arrayElementtabla.forEach(item => {
        // crea una variable que contine el tipo de etiqueta que tiene
        var columna = document.getElementById('columna')
        // muestra los items en consola 
        console.log(item)
        // crea una constante que crea en el documento un elemento de la etiqueta que se coloque
        // en este caso se crea una th
        const th = document.createElement('th')
        // la etiqueta creada se le esta asignando texto, en este caso, cada item se esta pasando a texto
        th.textContent = item;
        //en la etiqueta th con id columna, se va a agregar el th con al infomracion de texto
        columna.appendChild(th)
        
    })

// se crea una matriz y un fragmento
const arrayItem = ["item 1","item 2", "item 3"];
const fragment = document.createDocumentFragment()
arrayItem.forEach(item =>{
    //se crea un li
    const li = document.createElement('li')
    // se llena de texto el li
    li.textContent =item
    // se guardo todo en el fragmento declarado
    fragment.appendChild(li)

})
// Se agrega a la lista todo el fragmento 
lista.appendChild(fragment)

}

//Creo una varibale que representa la etiqueta html que estoy trabajando 
     //var lista = document.getElementById('lista')
    //console.log(lista);
// La funcion createElement nos permite crear un elemento a partir
// de etiquetas de html
    //const li = document.createElement('li');
// aqui le estamos diciendo que el elemtno li tiene como contenido
// 'primer elemento'
    //li.textContent = 'primer elemento';
// incorpora en la lista con ID:lista elemento creado( elemento hijo)
// incorpora el elemnto
    //lista.appendChild(li);

//const arrayElement= ['elemento1','elemento2','elemento3'];
//console.log(arrayElement)

//arrayElement.forEach(item => {
  //  console.log(item)
    //const li = document.createElement('li')
    //li.textContent = item
    //lista.appendChild(li)

//})