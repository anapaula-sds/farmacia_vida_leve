import { Produto } from "./Produto";

export class Medicamento extends Produto{
    //atributo especifico da classe medicamento
    private _generico: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco)
		this._generico = generico;
	}

    //Metodos Get e Set
	public get generico(): string {
		return this._generico;
	}

	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Generico: " + this._generico);
    }

}