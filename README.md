# Aplicação deployada

A aplicação foi deployada usando o Github Pages e pode ser acessada através do endereço:

https://migh1.github.io/luizalabs-marvel

# Aplicação local

1. Para rodar a aplicação local, primeiramente, é preciso criar as chaves de API da Marvel, que pode ser feito acessando o [Marvel Developer](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount) e gerando suas Keys

2. Feito isso, crie um arquivo chamado .env na raiz do projeto, e siga o exemplo do arquivo .env.example, colocando suas recém geradas chaves conforme o modelo.

3. E então, é preciso clonar o repositório, instalar as dependencias e iniciar a aplicação.

```bash
git clone https://github.com/migh1/luizalabs-marvel.git
cd luizalabs-marvel
yarn install
yarn start
```

4. Para rodar os testes, execute o seguinte comando abaixo:

##### **foi feito apenas 2 testes afim de exemplificação.**

```bash
yarn test
```

# Sobre o desenvolvimento

- Optei por fazer a construção do projeto da forma mais simples e intuitiva possível. A componentização realizada, além do motivo principal de reutilização de código, foi para separar e abstrair responsabilidades.
- O intuito de separar as responsabilidade serve para:
  - Manutenbilidade do código
  - Legibilidade do código
  - Testes mais individuais
- Foi utilizado a versão de React.Hooks e Functional Components e neles apenas:
  - React.useContext
  - React.useState
  - React.useEffect
