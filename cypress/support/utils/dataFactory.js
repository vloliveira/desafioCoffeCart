import { faker } from "@faker-js/faker";

// Classe que com funções para gerar dados dinâmicos

class DataFactory {
  /*  tresCafesAleatorios(qtd, max) {
    //Essa função gera número aleatório para usar na seleção de café
    const numeros = new Set();
    while (numeros.size < qtd) {
      numeros.add(this.tresCafesAleatorios(max));
    }
    return [...numeros];
  } */

  gerarNome() {
    return faker.internet.userName();
  }
  gerarEmail() {
    return faker.internet.exampleEmail();
  }
}

export default new DataFactory();
