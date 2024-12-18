import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    listaProdutos = new Array <Produto>();

    public id: number =0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
 
        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            console.log(colors.fg.red, "\nO Produto id: " + id
                + " não foi encontrada!", colors.reset);
    }

    listarTodas(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());   
        
        //for(let ptoduto of this.listaProdutos){
        //    produto.visualiza();
        //}
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O Produto foi cadastrado com sucesso!")
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);
 
        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO produto Id: " + produto.id + 
                        " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + produto.id + 
                        " não foi encontrada!", colors.reset);
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
 
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1); //1 pq apaga somente um 
        	console.log(colors.fg.green,"\nO produto id: " + id + 
                        " foi apagada com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nA Conta numero: " + id + 
                    " não foi encontrada!", colors.reset);
    }
    
     /*Métodos Auxiliares*/

    /*Gerar Id da Produto*/
    public gerarId(): number {
        return ++this.id;
    }

    /*Checa se um Produto existe*/
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

}