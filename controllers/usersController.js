let all = [
    {
        title: "Titulo1",
        description: "Descripción1",
        id: "1"
    },
    {
        title: "Titulo2",
        description: "Descripción2",
        id: "2"
    },
    {
        title: "Titulo3",
        description: "Descripción3",
        id: "3"
    },
    {
        title: "Titulo4",
        description: "Descripción4",
        id: "4"
    },
    {
        title: "Titulo5",
        description: "Descripción5",
        id: "5"
    }
];

function allMovies() {
    return all;
}

function findMovie($title) {



    return {title: $title}
};

module.exports =  {allMovies, findMovie};