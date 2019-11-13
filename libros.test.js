const librito = require('./libros'),
    libro = librito.libro;

beforeEach(()=>{
    libro.reviews=[];
});

    test("Se agregan reviews", () =>{
        libro.critica("Juan","Me gusto",4);
        libro.critica("Jose","Me gusto x2",5);
        libro.critica("Peter","Mal explicado",2);

        expect(libro.reviews).toHaveLength(3);
        expect(libro.reviews[0]).toStrictEqual({
            nombre: "Juan",
            review: "Me gusto",
            valoracion: 4,
        })
    });
    