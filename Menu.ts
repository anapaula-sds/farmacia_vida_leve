import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, generico, fragancia: string;
    let tipoProduto = ['Medicamento', 'Cosmetico']

    //Instanciar um objeto da classe ProdutoController
    const produtos = new ProdutoController();


    while (true) {

        console.log(colors.bg.white, colors.fg.bluestrong, 
                   "*****************************************************");
        console.log("                                                     ");
        console.log("                FARMACIA VIDA LEVE                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong, 
                "\nFarmacia Vida Leve - Te ajudando na caminhada!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Produto\n\n", colors.reset);
                nome = readlinesync.question("Digite o Nome do Produto: ");
 
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
 
                preco = readlinesync.questionFloat("Digite o preco: ");

                switch(tipo){
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Produto: ");
                        //Instanciar o objeto dentro do próprio método
                        produtos.cadastrar(new Medicamento(produtos.gerarId(), nome, tipo, preco, generico))
                    break;

                    case 2:
                        fragancia = readlinesync.question("Digite a fragancia do Produto: ");
                        produtos.cadastrar(new Cosmetico(produtos.gerarId(), nome, tipo, preco, fragancia))
                    break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);
                    produtos.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);
                    id = readlinesync.questionInt("Digite o Id: ")
                    produtos.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
 
                // Verifica se o Produto existe
                let produto = produtos.buscarNoArray(id);
 
                if (produto !== null) {
 
                    nome = readlinesync.question("Digite o Nome do Produto: ");
 
                    tipo = produto.tipo;
 
                    preco = readlinesync.questionFloat("Digite o preco: ");
 
                    switch (tipo) {
                        case 1:
                            generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            produtos.atualizar(new Medicamento(id,
                                nome, tipo, preco, generico));
                            break;
                        case 2:
                            fragancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            produtos.atualizar(new Cosmetico(id,
                                nome, tipo, preco, fragancia));
                            break;
                    }
 
                } else
                    console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar um Produto\n\n", colors.reset);
                    id = readlinesync.questionInt("Digite o Id: ")
                    produtos.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nFarmacia Vida Leve - Te ajudando na vida dura\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Ana Paula Santana - anapaula-sds@hotmail.com");
    console.log("https://github.com/anapaula-sds");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();