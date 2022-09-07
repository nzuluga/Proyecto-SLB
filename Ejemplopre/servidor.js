function captura(){
    var texto1 = document.getElementById("Estator1").value;
    var texto2 = document.getElementById("Nombre1").value;

    const arraydatos = [texto1,texto2];
    alert(texto1);
    alert(texto2);
    console.log(arraydatos)

    arraydatos.forEach(item => {
        // Crear una fila
        // crea una variable que contine el tipo de etiqueta que tiene
        var fila = document.getElementById('fila')
        // muestra los items en consola 
        console.log(item)
        // crea una constante que crea en el documento un elemento de la etiqueta que se coloque
        // en este caso se crea una th
        const th = document.createElement('th')
        // la etiqueta creada se le esta asignando texto, en este caso, cada item se esta pasando a texto
        th.textContent = item;
        //en la etiqueta th con id columna, se va a agregar el th con al infomracion de texto
        var caso = fila.appendChild(th)

        //Agregar un dato a la columna
        var resultados = document.getElementById('resultados')
        console.log(caso)
        // crea una constante que crea en el documento un elemento de la etiqueta que se coloque
        // en este caso se crea una th
        const tr = document.createElement('tr')

        tr.textContent = caso;

        resultados.appendChild(tr);


    })

}


function captura2(){
    var texto1 = document.getElementById("Estator1").value;
    var texto2 = document.getElementById("Nombre1").value;

    const arraydatos = [texto1,texto2];
    
    
    console.log(arraydatos)

    

    
    let tblDatos = document.getElementById('resultados').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);

    col1.innerHTML = texto1;
    col2.innerHTML = texto2;

}

function captura2(){
    var texto1 = document.getElementById("Estator1").value;
    var texto2 = document.getElementById("Nombre1").value;

    const arraydatos = [texto1,texto2];

    console.log(arraydatos)
    
    let tblDatos = document.getElementById('resultados').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);

    col1.innerHTML = texto1;
    col2.innerHTML = texto2;
}


function captura3(){
    // Creamos una matriz del tamaño 
    let productos = new Array(5);
    // Captamos los valores de las 2 variables que se llenan en el formulario 
    var texto1 = document.getElementById("Estator1").value;
    var texto2 = document.getElementById("Nombre1").value;
    // un checkbox manda un on cuando se marco 
    var checkbox1 = document.getElementById("checkbox1").checked;
    //var select1 = document.getElementById("select").value;
    console.log(checkbox1)
    //console.log(select1)


    // se crea un objecto que tiene todos los resultados  
    productos[0] = {id: 1, bom:'' , nombre:''};
    
    
    // Se modifican los objectos con la información del formulario
    productos[0].id=texto1
    productos[0].nombre=texto2
    productos[0].bom=checkbox1

    let tablaProducto = document.getElementById('resultados');
    let cuerpoTabla = document.createElement('tbody');

    productos.forEach(p=>{
        let fila = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = p.bom;
        fila.appendChild(td);

        td = document.createElement('td');
        td.innerText = p.nombre;
        fila.appendChild(td)

        td = document.createElement('td');
        td.innerText = p.id;
        fila.appendChild(td)


        cuerpoTabla.appendChild(fila);
    });

    tablaProducto.appendChild(cuerpoTabla)






}


