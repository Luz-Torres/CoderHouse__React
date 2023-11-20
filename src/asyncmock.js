const misProductos = [
    {
        "id" :1,
        "nombre" : "El señor de los anillos: La comunidad del anillo",
        "autor" :"J.R.R. Tolkien",
        "publicacion": 1954,
        "editorial": "Minotauro",
        "precio":8600,
        "stock":7,
        "img":"../lordofrings1.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :2,
        "nombre" : "El señor de los anillos: Las dos torres",
        "autor" :"J.R.R. Tolkien",
        "publicacion": 1954,
        "editorial": "Minotauro",
        "precio":8500,
        "stock":5,
        "img": "../lordofrings2.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :3,
        "nombre" : "El señor de los anillos: El retorno del rey",
        "autor" :"J.R.R. Tolkien",
        "publicacion": 1955,
        "editorial": "Minotauro",
        "precio":8100,
        "stock":6,
        "img": "../lordofrings3.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :4,
        "nombre" : "El Silmarillon",
        "autor" :"J.R.R. Tolkien",
        "publicacion": 1977,
        "editorial": "Minotauro",
        "precio":8000,
        "stock":2,
        "img": "../elsilmarillion.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :5,
        "nombre" : "El Hobbit",
        "autor" :"J.R.R. Tolkien",
        "publicacion": 1937,
        "editorial": "Minotauro",
        "precio":9000,
        "stock":3,
        "img": "../elhobbit.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :6,
        "nombre" : "Dune",
        "autor":"Frank Herbert",
        "publicacion": 1965,
        "editorial": "De Bolsillo",
        "precio":9000,
        "stock":5,
        "img": "../dune1.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :7,
        "nombre" : "El mesias de Dune",
        "autor":"Frank Herbert",
        "publicacion": 1969,
        "editorial": "De Bolsillo",
        "precio":9200,
        "stock":5,
        "img": "../dune2.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :8,
        "nombre" : "Hijos de Dune",
        "autor":"Frank Herbert",
        "publicacion": 1976,
        "editorial": "De Bolsillo",
        "precio":8200,
        "stock":5,
        "img": "../dune3.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :9,
        "nombre" : "Dios Emperador de Dune",
        "autor":"Frank Herbert",
        "publicacion": 1981,
        "editorial": "De Bolsillo",
        "precio":7800,
        "stock":5,
        "img": "../dune4.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :10,
        "nombre" : "Herejes de Dune",
        "autor":"Frank Herbert",
        "publicacion": 1984,
        "editorial": "De Bolsillo",
        "precio":7900,
        "stock":5,
        "img": "../dune5.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :11,
        "nombre" : "Casa Capitular de Dune",
        "autor":"Frank Herbert",
        "publicacion": 1985,
        "editorial": "De Bolsillo",
        "precio":9700,
        "stock":5,
        "img": "../dune6.webp",
        "idCat":"2",
        "descripcion": "Informacion detallada del producto seleccionado"
    },
    {
        "id" :12,
        "nombre" : "Harry Potter y la piedra filosofal",
        "autor":"J.K. Rowling",
        "publicacion": 1998,
        "editorial": "Salamandra",
        "precio":7500,
        "stock":1,
        "img": "../hp1.webp",
        "idCat":"2",
        "descripcion":"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!"
    },
    {
        "id" :13,
        "nombre" : "Harry Potter y la camara secreta",
        "autor":"J.K. Rowling",
        "publicacion": 1999,
        "editorial": "Salamandra",
        "precio":8150,
        "stock":7,
        "img": "../hp2.webp",
        "idCat":"2",
        "descripcion":"Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompañado de Ron, se dirige a Hogwarts en un coche volador. Pero, ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario."
    },
    {
        "id" :14,
        "nombre" : "Harry Potter y el prisionero de Azkaban",
        "autor":"J.K. Rowling",
        "publicacion": 2000,
        "editorial": "Salamandra",
        "precio":8000,
        "stock":10,
        "img": "../hp3.webp",
        "idCat":"2",
        "descripcion":"Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia y Hechicería. Tras haber cumplido trece años, solo y lejos de sus amigos de Hogwarts, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a eliminar a Harry del mapa. Y por si esto fuera poco, Harry debe enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarles la felicidad a los magos y de borrar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más."
    },
    {
        "id" :15,
        "nombre" : "Harry Potter y el caliz de fuego",
        "autor":"J.K. Rowling",
        "publicacion": 2001,
        "editorial": "Salamandra",
        "precio":10000,
        "stock":2,
        "img": "../hp4.webp",
        "idCat":"2",
        "descripcion" : "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch.Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara."
    },
    {
        "id" :16,
        "nombre" : "Harry Potter y la orden del fenix",
        "autor":"J.K. Rowling",
        "publicacion": 2004,
        "editorial": "Salamandra",
        "precio":7500,
        "stock":8,
        "img": "../hp5.webp",
        "idCat":"2",
        "descripcion":"Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts.En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos.Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo."
    },
    {
        "id" :17,
        "nombre" : "Harry Potter y el misterio del principe",
        "autor":"J.K. Rowling",
        "publicacion": 2006,
        "editorial": "Salamandra",
        "precio":9400,
        "stock":4,
        "img": "../hp6.webp",
        "idCat":"2",
        "descripcion":"Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida. El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo."
    },
    {
        "id" :18,
        "nombre" : "Harry Potter y las reliquias de la muerte",
        "autor":"J.K. Rowling",
        "publicacion": 2008,
        "editorial": "Salamandra",
        "precio": 10500,
        "stock": 1,
        "img": "../hp7.webp",
        "idCat":"2",
        "descripcion": "La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible misión de encontrar y destruir los Horrocruxes restantes es más urgente que nunca.Ha llegado el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, solo dentro de sí mismo encontrará la fuerza que lo impulsará en la vertiginosa carrera hacia un destino desconocido."
    },
    {
        "id" :19,
        "nombre" : "Harry Potter y el legado maldito",
        "autor":"Jonh Tiffany y Jack Thorne",
        "publicacion": 2016,
        "editorial": "Salamandra",
        "precio": 9500,
        "stock": 3,
        "img": "../hp8-legado.webp",
        "idCat":"2",
        "descripcion": "Diecinueve años después...La octava historia. Harry Potter y el legado maldito es una obra de teatro de Jack Thorne basada en una historia original de J.K. Rowling, John Tiffany y JackThorne. Es la octava historia de la saga de Harry Potter y la primera que se representa oficialmente en los escenarios."
    },
    {
        "id" :20,
        "nombre" : "Tarot Genealógico",
        "autor":"Víctor Leni Cordero",
        "publicacion": 2021,
        "editorial": "Grupo Zeta",
        "precio": 8000,
        "stock": 4,
        "img": "../tarot-genealogico.webp",
        "idCat":"3",
        "descripcion": "Nuestro árbol genealógico es un sistema lleno de información inconsciente que puede condicionarnos de tal manera que a veces se convierte en una trampa. Esto se traduce en todas aquellas conductas, vínculos, vicios y sucesos de los que no nos podemos escapar y que parecen dominar nuestra vida. Una jaula sin escapatoria, pero una jaula de cristal, porque no la vemos. Víctor Leni Cordero nos propone abordar esa historia que nos precede a través del tarot, utilizando esta herramienta para crear puentes hacia nuestra alma y nuestra sabiduría. El abordaje termina con un manual para aprender a hacer lecturas, y con juegos y ritos que buscan desde la práctica, traducir a la acción lo aprendido, nuestras resonancias e intuiciones. Estas páginas nos invitan a un viaje desconocido y vertiginoso a través de esta mancia y sus múltiples posibilidades: avanzar en las profundidades de nosotros mismos y, sobre todo, de nuestro árbol genealógico y las historias de nuestros ancestros para destrabar, liberar, sacar a luz y hasta enmendar heridas."
    },
    {
        "id" :21,
        "nombre" : "Rubik",
        "autor":"Erno Rubik",
        "publicacion": 2022,
        "editorial": "???",
        "precio": 7500,
        "stock": 10,
        "img": "../rubik.webp",
        "idCat": "4",
        "descripcion": "Desde su creación en 1974, el cubo de Rubik ha vendido más de 400 millones de ejemplares. Pese a que pocos saben resolverlo, su creador Ernó Rubik asegura que cualquiera podría haberlo inventado. Esta es la historia de un célebre juego, pero también la del hombre que hay detrás: uno que ya de niño adoraba los puzles geométricos y que de ahí en adelante se encargó de imaginar muchos otros juegos posibles. Uno que jamás dejó de divertirse y de soñar con nuevos rompecabezas e ingenios matemáticos, y que sin quererlo inventó uno de los objetos más icónicos de todos los tiempos. Rubik son unas memorias repletas del ímpetu nostálgico y la humildad de un genio. Pero no solo son unas memorias, son mucho más que eso. Son también una explicación única del proceso creativo, un manual para el paciente e imperfecto arte de la invención, y una invitación al acto más puro y creativo de todos: jugar."
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}