import ArmazenadorDeCafes from "../utils/armazenaDadosCafe";

const CAFE = ".cup-body";

class EscolherCafe {
  selecionarTresCafesDiferentes() {
    cy.get(CAFE).should("have.length.at.least", 3);

    for (let i = 0; i < 3; i++) {
      cy.get(CAFE)
        .eq(i)
        .should("be.visible")
        .closest("li")
        .then(($li) => {
          const nome = $li.find("h4").text().split("$")[0].trim();
          cy.log("h4");
          cy.log(nome);

          const preco = $li.find("small").text().trim();
          cy.log("small");
          cy.log(preco);

          if (!nome || !preco) {
            throw new Error(`Erro: nome ou preço vazio no café índice ${i}`);
          }

          ArmazenadorDeCafes.adicionarItem(nome, preco);
          cy.wrap($li).click();
        });
    }
  }
}

export default new EscolherCafe();
