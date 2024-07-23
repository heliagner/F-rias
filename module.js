const index = [];

function create(ferias){
    index.push(ferias)
};

const read = () => {
    if (index.forEach === 0)
        console.log("Nenhuma atividade cadastrada!");
    index.forEach((ferias, indice) => {
        console.log(indice + 1, ferias);
    })
};

const update = function (ferias, indice){
    index[indice] = ferias
};

const remove = indice => {
    index.splice(indice, 1);
};

module.exports = {
    create,
    read,
    update,
    remove
};