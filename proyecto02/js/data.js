let cargarChart1 = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.text() )  
    .then(data =>{
    data = JSON.parse(data)
    labelDirectores = []
    dicDirectores = {}
    for(pelicula of data){
      let director = pelicula.director
      let score = pelicula.rt_score

      if(!dicDirectores.hasOwnProperty(director) ){
          dicDirectores[director] = [];
      }
      dicDirectores[director].push(parseInt(score))
     
      
      if(!labelDirectores.includes(director)){
          labelDirectores.push(director)
      }
    }

    values = []
    for(dir in (dicDirectores)){
      total = 0
      dicDirectores[dir].forEach(function(a){total += a;});
      values.push(total/dicDirectores[dir].length)
      
    }
  
    
      var ctx1 = $("#director-films").get(0).getContext("2d");
      var myChart1 = new Chart(ctx1, {
          type: "bar",
          data: {
              labels: Object.values(labelDirectores),
              datasets: [{
                      label: "Score",
                      data: values,
                      backgroundColor: "rgba(235, 22, 22, .7)"
                  }
              ]
              },
          options: {
              responsive: true
          }
      });

    }
  )}

let cargarChart2 = () =>{
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.text())
      .then(data => {
      data= JSON.parse(data)
      laberYear = []
      dicYear = {}
      for(pelicula of data){
        let year = pelicula.release_date
        let score = pelicula.rt_score

        if(!dicYear.hasOwnProperty(year) ){
            dicYear[year] = [];
        }
        dicYear[year].push(parseInt(score))
       
        
        if(!laberYear.includes(year)){
            laberYear.push(year)
        }
      }

      values = {}
      max = 0
      
      for(year in (dicYear)){
        total = 0
        dicYear[year].forEach(function(a){total += a;});
        values[year]= (total/dicYear[year].length)
        if(max < values[year]){
            max = values[year]
        }
      }
        
      for(key in values){
        console.log(key)
        console.log(values[key])
        porcentaje = values[key] / max
        plantilla= `
            <tr>
                <th scope="row">${key}</th>
                <td style="--size: ${porcentaje}"><button aria-label="${values[key]}" data-balloon-pos="right">&nbsp;</button></td>
            </tr>
      
      ` 
      document.querySelector("#bar-example-12 .tdatos").innerHTML += plantilla
      }


    })
      .catch(console.error);
  }
  

let cargarDatos = (directorSelected) => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.text())
      .then(data => {
            data = JSON.parse(data)
            for (pelicula of data){
                let title= pelicula.title
                let score= pelicula.rt_score
                let director= pelicula.director
                let running_time=pelicula.running_time
                let release_date= pelicula.release_date
                let producer = pelicula.producer
                if (director == directorSelected){
                let plantilla = 
                `<tr>
                  <td>${title}</td>
                  <td>${director}</td>
                  <td>${producer}</td>
                  <td>${running_time}</td>
                  <td>${score}</td>
                  <td>${release_date}</td>
                 </tr>`
                document.querySelector("#div1 #div2 .table-responsive .table .datos").innerHTML += plantilla
              }
              }
        })
        .catch(console.error);
}

let cargarOpciones = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.text())
    .then(data => {
    data= JSON.parse(data)
    let directores=[]
    for (pelicula of data){
      let director= pelicula.director
      if(!directores.includes(director)){
          directores.push(director)
          plantilla= `<option value= "${director}">${director}</option>` 
          document.querySelector("select#tipo").innerHTML += plantilla
      }
         
  }  
  })
    .catch(console.error);
}
window.addEventListener('change', (event) => {
  let selection = document.querySelector('select#tipo');
  let directorSelected = selection.options[selection.selectedIndex].value;
  document.querySelector("#div1 #div2 .table-responsive .table .datos").innerHTML = ""
  cargarDatos(directorSelected);

})

window.addEventListener('DOMContentLoaded', (event) => {
    cargarOpciones()
    cargarChart1()
    cargarChart2()
  });

