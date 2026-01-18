import DataFactory from "../utils/dataFactory";

const NOME = "#name";
const EMAIL = "#email";
const ENVIAR = "#submit-payment";
const MSG_SUCESSO = ".snackbar";

class FinalizarPedido {
  formularioFinalizarPedido() {
    cy.get(NOME).type(DataFactory.gerarNome());
    cy.get(EMAIL).type(DataFactory.gerarEmail());
    cy.get(ENVIAR).click();
  }
  validarMensagemFinal() {
    cy.get(MSG_SUCESSO)
      .should("be.visible")
      .and(
        "contain.text",
        "Thanks for your purchase. Please check your email for payment.",
      );
  }
}

export default new FinalizarPedido();
