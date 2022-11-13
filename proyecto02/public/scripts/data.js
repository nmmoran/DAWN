let cargarDatos = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.text())
      .then(data => {
            data = JSON.parse(data)
            console.table(data)
            for (pelicula of data){
                let id= pelicula.id
                let title= pelicula.title
                let score= pelicula.rt_score
                let director= pelicula.director
                let running_time=pelicula.running_time
                let release_date= pelicula.release_date
                let producer = pelicula.producer
                let plantilla = 
                `<tr>
                  <td>${id}</td>
                  <td>${title}</td>
                  <td>${director}</td>
                  <td>${producer}</td>
                  <td>${running_time}</td>
                  <td>${score}</td>
                  <td>${release_date}</td>
                 </tr>`
                document.querySelector(".data-table-container .datos-tabla .datos").innerHTML += plantilla
            }
        })
        .catch(console.error);
}
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
  });