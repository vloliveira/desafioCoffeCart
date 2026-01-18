import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import Carrinho from "../pages/carrinho.page";
import FinalizarPedido from "../pages/modalFinalizarPedido.page";

And("o usuario acessa a pagina de carrinho", () => {
  Carrinho.irAoCarrinho();
  Carrinho.validarItensCarrinho();
});

And("o usuario remove um item do carrinho", () => {
  Carrinho.removerSegundoItem();
});

Then("o usuario realiza o pagamento", () => {
  Carrinho.finalizarPedido();
  FinalizarPedido.formularioFinalizarPedido();
});

And("a mensagem de sucesso deve ser exibida na tela", () => {
  FinalizarPedido.validarMensagemFinal;
});
