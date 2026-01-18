import ArmazenadorDeCafes from "../utils/armazenaDadosCafe";

/* O clique e a extração de dados precisam ser feitas no <li>,
porque o .cup-body é apenas um container visual.
O nome e o preço ficam dentro do <li> (h4 e small),
e o click funcional também está associado ao <li>. */

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
          const preco = $li.find("small").text().trim();

          ArmazenadorDeCafes.adicionarItem(nome, preco);
          cy.wrap($li).click();
        });
    }
  }
}

export default new EscolherCafe();
