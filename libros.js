/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

 /*
 libro con nombre,autor,año,isbn, reviews(subobjeto)

 funciones: promedio d valoracion
 getter -> nombre, autor isbn juntos
 agregar reviews
 */

 const libro = {
 nombre: "Chocolate huevos de pascua",
 autor: "Baum, Micael",
 año: 2015,
 isbn: 978-987-589-413-6,
 reviews: [],
  critica: function(nombre,review,valoracion){
    this.reviews.push({
        nombre,
        review,
        valoracion,
    })
  }
}

module.exports = {
    libro
};


