const IR_CARRINHO = '[aria-label="Cart page"]';
//O seletor "li.list-item" foi necessário para verificar uma lista visível no carrino
const LISTA_CAFES = "li.list-item";
const REMOVE = ".delete:eq(0)";
const BTN_CONFERIR = '[data-test="checkout"]';

import ArmazenadorDeCafes from "../utils/armazenaDadosCafe";

class Carrinho {
  irAoCarrinho() {
    cy.get(IR_CARRINHO).click();
  }

  validarItensCarrinho() {
    const selecionados = ArmazenadorDeCafes.retornaItens();

    //Aqui o get busca a lista visível. Pois existe uma lista base(.cart-preview) com display:none que cria outra lista com os novos valores.
    cy.get(LISTA_CAFES)
      .filter(":visible")
      .then(($lista) => {
        selecionados.forEach((cafe) => {
          //Verifica se algum li visível contém o nome
          const found = Array.from($lista).some((li) =>
            li.innerText.includes(cafe.nome),
          );
          expect(found).to.be.true;

          //Percorre a lista(li) para pegar o café pelo nome e comparar com o preço
          const li = Array.from($lista).find((li) =>
            li.innerText.includes(cafe.nome),
          );
          //O include verifica o preço e ignora 'x 1'(quantidades)
          expect(li.innerText).to.include(cafe.preco);
        });
      });
  }

  removerSegundoItem() {
    cy.log("Removendo segundo item do carrinho");
    cy.get(REMOVE).should("be.visible").click();
  }

  finalizarPedido() {
    cy.get(BTN_CONFERIR).should("be.visible").click();
  }
}

export default new Carrinho();
