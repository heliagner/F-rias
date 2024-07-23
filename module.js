const prompt = require ('prompt-sync')({sigint: true});

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

const update = function (){
    read();
    indice = prompt("Digite o indice da atividade: ")
    ferias = prompt("Atualize sua atividade: ")
    index[indice -1] = ferias
};

const remove = indice => {
    index.splice(indice -1 , 1);
};

module.exports = {
    create,
    read,
    update,
    remove
};