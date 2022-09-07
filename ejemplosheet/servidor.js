document.getElementById("downloadexcel").addEventListener('click',function(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#tabla"));

});


function captura3(){
    // Creamos una matriz del tamaño 
    let productos = new Array(1);
    // Captamos los valores de las 2 variables que se llenan en el formulario 
    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2").value;
    // un checkbox manda un on cuando se marco 
    var checkbox1 = document.getElementById("checkbox1").checked;
    var select1 = document.getElementById("select1").value;
    var selectanimales = document.getElementById("select1");
    alert(texto1)
    alert(texto2)
    //console.log(select1)


    // se crea un objecto que tiene todos los resultados  
    productos[0] = {id: 1, bom:'' , nombre:''};
    
    let valuetexto = selectanimales.options[selectanimales.selectIndex]
    alert(valuetexto)
    // Se modifican los objectos con la información del formulario
    productos[0].id=texto1
    productos[0].nombre=texto2
    productos[0].bom=checkbox1
    alert(checkbox1)
    alert(select1)
    //productos[0].bom=checkbox1

    let tablaProducto = document.getElementById('tabla');
    let cuerpoTabla = document.createElement('tbody');

    productos.forEach(p=>{
          let fila = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = p.nombre;
        fila.appendChild(td);

        td = document.createElement('td');
        td.innerText = p.nombre;
        fila.appendChild(td)

        td = document.createElement('td');
        td.innerText = p.bom;
        fila.appendChild(td)

        cuerpoTabla.appendChild(fila);
         
   });

  tablaProducto.appendChild(cuerpoTabla)

}