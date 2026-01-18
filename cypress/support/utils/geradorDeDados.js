import { faker } from "@faker-js/faker";

// Classe que com funções para gerar dados dinâmicos

class GeraDados {
  gerarNome() {
    return faker.internet.userName();
  }
  gerarEmail() {
    return faker.internet.exampleEmail();
  }
}

export default new GeraDados();
