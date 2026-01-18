const IR_CARRINHO = '[aria-label="Cart page"]';

const REMOVE = ".delete:eq(1)";
const BTN_CONFERIR = '[data-test="checkout"]';

class Carrinho {
  irAoCarrinho() {
    cy.get(IR_CARRINHO).click();
  }

  removerSegundoItem() {
    cy.log("Removendo segundo item do carrinho");
    cy.get(REMOVE).click();
  }

  finalizarPedido() {
    cy.get(BTN_CONFERIR).click();
  }
}

export default new Carrinho();
