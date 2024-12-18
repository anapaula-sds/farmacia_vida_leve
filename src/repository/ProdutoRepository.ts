import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	// CRUD da Produto
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;
	
}
