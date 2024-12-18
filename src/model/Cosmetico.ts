import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    //atributo especifico da classe medicamento
    private _fragancia: string;

    //Metodo Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco)
        this._fragancia = fragancia;
    }

    //Metodos Get e Set
    public get fragancia(): string {
        return this._fragancia;
    }

    public set fragancia(value: string) {
        this._fragancia = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Fragancia: " + this._fragancia);
    }

}