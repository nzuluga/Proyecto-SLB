document.getElementById("downloadexcel").addEventListener('click',function(){
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#tabla"));

});


function captura3(){
  // Creamos una matriz del tamaño 
  let productos = new Array(1);
  // Captamos los valores de las 2 variables que se llenan en el formulario
  // longitud estator 
  var texto1 = document.getElementById("texto1").value;
  var texto2 = document.getElementById("texto2").value;
  // un checkbox manda un on cuando se marco 
  var checkbox1 = document.getElementById("checkbox1").checked;
  var checkbox2 = document.getElementById("checkbox2").checked;
  var select1 = document.getElementById("select1").value;
  var selectanimales = document.getElementById("select1");
  //console.log(select1)


  // se crea un objecto que tiene todos los resultados  
  productos[0] = {hora:"",estator: 1, bom:'' , caa:'', base:'',LonCa:''};
  
  let valuetexto = selectanimales.options[selectanimales.selectIndex]
  
  // Se modifican los objectos con la información del formulario
  
  if (checkbox1==true){
    productos[0].bom='Check'
  }else{
    productos[0].bom='No Check'
  }

  if (checkbox2==true){
    productos[0].caa='Check'
  }else{
    productos[0].caa='No Check'
  }

  if (select1==1){
    productos[0].LonCa='Standard'
  }else{
    productos[0].LonCa='Especial'
  }

  productos[0].estator=texto1;
  productos[0].base=texto2;
  
  let fechaActual = new Date();
  productos[0].hora=fechaActual;

  let tablaProducto = document.getElementById('tabla');
  let cuerpoTabla = document.createElement('tbody');

  productos.forEach(p=>{
    
    
    
    let fila = document.createElement('tr');

      let td = document.createElement('td');
      td.innerText = p.hora;
      fila.appendChild(td);

      td = document.createElement('td');
      td.innerText = p.bom;
      fila.appendChild(td)
      
      td = document.createElement('td');
      td.innerText = p.caa;
      fila.appendChild(td)

      td = document.createElement('td');
      td.innerText = p.estator;
      fila.appendChild(td)
      
      td = document.createElement('td');
      td.innerText = p.base;
      fila.appendChild(td)

      td = document.createElement('td');
      td.innerText = p.LonCa;
      fila.appendChild(td)

      cuerpoTabla.appendChild(fila);
       
 });

tablaProducto.appendChild(cuerpoTabla)

}

var element = document.getElementById('element')
    function pdf(){
        html2pdf(element)
    }