const DESCONTO = '[data-test="(Discounted)_Mocha"]';
const MSG_DESCONTO = ".promo span";
const BUTTON = ".promo button.yes";

class ModalPromocao {
  validarModal() {
    cy.log("Desconto visível");
    cy.get(DESCONTO).should("exist").and("be.visible");
    cy.get(MSG_DESCONTO)
      .should("be.visible")
      .and(
        "contain.text",
        "It's your lucky day! Get an extra cup of Mocha for $4.",
      );
    cy.get(BUTTON).should("be.visible").click();
  }
}
export default new ModalPromocao();

//Colocar o café do desconto na lista de cafés selecionados
