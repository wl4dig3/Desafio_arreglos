import { propiedades_alquiler, propiedades_venta } from "./propiedades.js";

const $ = document;

const contenedor_venta = $.querySelector('#venta > div');
const contenedor_alquiler = $.querySelector('#alquiler > div');

for (let item of propiedades_venta) {
    contenedor_venta.innerHTML += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${item.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${item.nombre}
                </h5>
                <p class="card-text">
                  ${item.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
    `
}