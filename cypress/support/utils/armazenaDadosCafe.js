class ArmazenadorDeCafes {
  constructor() {
    this.itens = [];
  }

  adicionarItem(nome, preco) {
    this.itens.push({ nome, preco });
  }
  limparItens() {
    this.itens = [];
  }
  retornaItens() {
    return this.itens;
  }
}
export default new ArmazenadorDeCafes();
