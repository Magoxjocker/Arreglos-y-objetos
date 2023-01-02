const propiedades = [
  {
    Nombre: "Casa ubicada en comuna de Pudahuel",
    Descripcion: "Hermosa casa ubicada dentro de un tranquilo condominio",
    src: "./assets/imgs/casa01.jpg",
    Cuartos: "3",
    Baños: "4",
    Metros: "520",
  },
  {
    Nombre: "Casa ubicada en Comuna de Pirque",
    Descripcion: "Hermosa casa ubicada a los pies de el cerro conectada con la naturaleza",
    src: "./assets/imgs/casa02.jpg",
    Cuartos: "3",
    Baños: "3",
    Metros: "400",
  },
  {
    Nombre: "Casa ubicada en La Reina",
    Descripcion: "Hermosa casa ubicada en el mejor mirador de la comuna",
    src: "./assets/imgs/casa03.jpg",
    Cuartos: "6",
    Baños: "4",
    Metros: "345",
  },
  {
    Nombre: "Casa ubicada en lampa",
    Descripcion: "Hermosa y amplia vivienda ubicada en sector tranquilo",
    src: "./assets/imgs/casa04.jpg",
    Cuartos: "3",
    Baños: "3",
    Metros: "92",
  },
  {
    Nombre: "Casa Ubicada en las Cruces",
    Descripcion: "Hermosa casa ubicada a metros de un bello bosque,cercano a la playa",
    src: "./assets/imgs/casaplaya01.jpg",
    Cuartos: "2",
    Baños: "1",
    Metros: "52",
  },
  {
    Nombre: "Casa ubicada en Playa Ancha",
    Descripcion: "hermosa casa ubicada en sector tranquilo, a metros de la playa",
    src: "./assets/imgs/casaplaya02.jpg",
    Cuartos: "6",
    Baños: "4",
    Metros: "400",
  },
  {
    Nombre: "Casa ubicada en Placeres",
    Descripcion: "Hermosa y ammplia vivienda ubicada a pasos de la hermosa Plaza de la Conquista",
    src: "./assets/imgs/casaplaya03.jpg",
    Cuartos: "6",
    Baños: "4",
    Metros: "1350",
  },
  {
    Nombre: "Departamento Ubicado en Comuna de Providencia",
    Descripcion: "Hermoso y acogedor departamento a pasos del metro Los Leones",
    src: "./assets/imgs/departamento01.jpg",
    Cuartos: "4",
    Baños: "3",
    Metros: "120",
  },
  {
    Nombre: "Departamento Ubicado en Valparaiso",
    Descripcion: "Hermoso Departamento con salida directa a playa privada",
    src: "./assets/imgs/departamento02.jpg",
    Cuartos: "4",
    Baños: "3",
    Metros: "150",
  },
  {
    Nombre: "Departamento Ubicado en Vella Vista",
    Descripcion: "Hermoso y amplio departamento a pasos del metro",
    src: "./assets/imgs/departamento03.jpg",
    Cuartos: "4",
    Baños: "2",
    Metros: "200",
  },
];

let cantidad = document.getElementById('cantidad')
let cantidadbaños = document.getElementById('cantidadbaños')
let minimo = document.getElementById('minimo')
let maximo = document.getElementById('maximo')
let total = document.getElementById('total')
let propiedadesInmuebles = document.querySelector('.propiedades')

let btn = document.querySelector('.btn').addEventListener('click', buscarPro)

let modelo = ''
for (let casas of propiedades) {
  modelo += `
    <div class="propiedad">
      <div class="img"
        style="background-image: url('${casas.src}')">
      </div>
      <section>
        <h5>${casas.Nombre}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos:${casas.Cuartos}</p>
          <p>Baños:${casas.Baños}</p>
          <p>Metros: ${casas.Metros}</p>
        </div>
        <p class="my-3">${casas.Descripcion}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
    `
  propiedadesInmuebles.innerHTML = modelo
  total.innerHTML = propiedades.length
}

function buscarPro() {
  let modelo = ''
  let contador = 0
  if (cantidad.value == '' || cantidadbaños.value == '' || minimo.value == '' || maximo.value == '' ) {
    alert('faltan datos por completar')
  } else {
    for (let casas of propiedades) {
      if (+cantidad.value == casas.Cuartos && +minimo.value <= casas.Metros && +maximo.value >= casas.Metros && +cantidadbaños.value == casas.Baños) {
        contador++
        modelo += `
        <div class="propiedad">
          <div class="img"
            style="background-image: url('${casas.src}')">
          </div>
          <section>
            <h5>${casas.Nombre}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos:${casas.Cuartos}</p>
              <p>Baños:${casas.Baños}</p>
              <p>Metros: ${casas.Metros}</p>
            </div>
            <p class="my-3">${casas.Descripcion}</p>
            <button class="btn btn-info ">Ver más</button>
          </section>
        </div>
        `
        propiedadesInmuebles.innerHTML = modelo
        total.innerHTML = contador;
      }
    }
    if(contador == 0){
      propiedadesInmuebles.innerHTML = '<h2 class="resultado">No hay resultados para tu busqueda</h2>'
      total.innerHTML = 0
    }
  }
}
