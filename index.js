const prompt = require ('prompt-sync')({sigint: true});
const index = require ("./module.js");

while(true){
    console.log(`~~ PORTAL DAS ATIVIDADES ~~
    1. Cadastrar atividade
    2. Listar atividades
    3. Atualizar alguma atividade cadastrada
    4. Deletar atividade
    5. Sair`);
    
    let opcao = prompt("Digite a opção desejada: ");
    let atividade

    switch (opcao) {
        case "1":
            let atividade = prompt("Informe como e quando foi a sua atividade: ");
            
            index.create({
               atividade
            })

            break;
        case "2":
            index.read();

            break;
        case "3": 
            indice = prompt("Digite o indice da atividade: ")
            atividade = prompt("Atualize sua atividade: ")

            index.update({
                atividade
            }, 
            --indice);

            break;
        case "4":
            index.read();

            indice = prompt("Digite o indice da atividade que deseja excluir: ");

            index.remove(--indice);

            break;
        case "5":
            console.log("Programa encerrado com sucesso!");
            process.exit();
            break;
        default:
            console.log("Opção inválida!");
            break;
    };
};