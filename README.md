# desafio-typescript-dio
Desafio de Projeto: Introdução Prática ao TypeScript - DIO
Professor: João Santos
Repositório original: https://github.com/lira1705/mentoria-typescript

- Os desafios propostos estão na pasta src/desafios

## Minhas anotações sobre o conteúdo

- Ao usar defer na tag script não preciso mais colocá-la no final do body

- Por que usar TS?
  - Funcionalidades do código mais explícitas
  - Maior segurança durante o desenvolvimento
  - Detecta erros durante a compilação que só seriam percebidos em execução
  - Compila um JavaScript mais resiliente
  - Ajuda a desenvolver boas práticas de programação

- Setup do ambiente
  - npm init -y
  - npm install -g typescript (necessário para rodar os comandos "tsc")

- Ao iniciar uma variável no TS não posso mais mudar o tipo dela (a não ser que eu use o tipo any, mas isso não é recomendável)

- Exemplo de enum e interface:
  - enum Profissao { Professora, Atriz, Desenvolvedora }
  - interface Pessoa { nome: string, idade: number, profissao: Profissao}
  - const vanessa: Pessoa = { nome: 'Vanessa', idade: 23, profissao: Profissao.Desenvolvedora}
  - (enum é como se fosse um grupo de constantes)
  - Se algo não é obrigatório eu posso usar uma "?" logo após a palavra na interface (... profissao?: Profissao ...)

- type input = number | string (cria um tipo personalizado chamado input que pode ser tanto number quanto string)

- tsconfig.json
  - "outDir": "dist" (coloca os arquivos .js compilados em uma pasta chamada dist
  )

- document.getElementById('limpar-saldo')!;
  - A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
