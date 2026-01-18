import GerenciadorDeMassas from "../utils/gerenciadorDeMassas";

const MODAL_PAGAMENTO = '[aria-label="Payment form"]';
const NOME = "#name";
const EMAIL = "#email";
const ENVIAR = "#submit-payment";
const MSG_SUCESSO = ".snackbar";

class FinalizarPedido {
  formularioFinalizarPedido() {
    cy.get(MODAL_PAGAMENTO).should("be.visible");
    cy.get(NOME).type(GerenciadorDeMassas.gerarNome());
    cy.get(EMAIL).type(GerenciadorDeMassas.gerarEmail());
    cy.get(ENVIAR).should("be.visible").click();
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
