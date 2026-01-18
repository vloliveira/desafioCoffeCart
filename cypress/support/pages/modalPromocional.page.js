const DESCONTO = '[data-test="(Discounted)_Mocha"]';
const MSG_DESCONTO = ".promo span";
const BUTTON = ".promo button.yes";

import ArmazenadorDeCafes from "../utils/armazenaDadosCafe";

class ModalPromocao {
  aceitarPromocao() {
    cy.log("Desconto visível");
    cy.get(DESCONTO).should("exist").and("be.visible");
    cy.get(MSG_DESCONTO)
      .should("be.visible")
      .and(
        "contain.text",
        "It's your lucky day! Get an extra cup of Mocha for $4.",
      );

    const nome = "(Discounted) Mocha";
    const preco = "$4.00";
    ArmazenadorDeCafes.adicionarItem(nome, preco);

    cy.get(BUTTON).should("be.visible").click();
  }
}
export default new ModalPromocao();
