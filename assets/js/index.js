import { propiedades_alquiler, propiedades_venta } from "./propiedades.js";

const $ = document;

export const contenedor_venta = $.querySelector('#venta > div');
export const contenedor_alquiler = $.querySelector('#alquiler > div');



export function renderCards(contenedor, informacion) {
   for( let item of informacion){
    contenedor.innerHTML += `
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
                  <i class="fas fa-bed"></i> ${item.habitaciones} |
                  <i class="fas fa-bath"></i> ${item.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
                ${
                  item.smoke ? `<p class="text-success">
                  <i class="fas fa-smoking-ban"></i> Si se permite fumar
                </p>` 
                : 
                `<p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
              </p>`
                }
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
    `
  }
}
renderCards(contenedor_alquiler, propiedades_alquiler.splice(0,3))
renderCards(contenedor_venta, propiedades_venta.splice(0,3))