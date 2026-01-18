import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

import EscolherCafe from "../pages/home.page";
import ModalPromocao from "../pages/modalPromocional.page";

Given("que o usuario está na página menu do Coffee Cart", () => {
  cy.visit("/");
});

When("o usuario seleciona 3 tipos de cafés diferentes", () => {
  EscolherCafe.selecionarTresCafesDiferentes();
});

And("o usuario aceita a oferta promocional de um Mocha", () => {
  ModalPromocao.aceitarPromocao();
});
