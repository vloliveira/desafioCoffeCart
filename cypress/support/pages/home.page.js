const CAFE = ".cup-body";

class EscolherCafe {
  selecionarTresCafesDiferentes() {
    cy.get(CAFE).should("have.length.at.least", 3);

    for (let i = 0; i < 3; i++) {
      cy.get(CAFE).eq(i).should("be.visible").click();
    }
  }
}

export default new EscolherCafe();
