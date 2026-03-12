# 🏁 Mario Kart Race Simulator (Node.js)

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Simulador de corrida inspirado em **Mario Kart**, desenvolvido em **Node.js**.  
O projeto simula corridas entre personagens clássicos da franquia utilizando **dados aleatórios**, **atributos dos personagens** e **tipos de pista**.

Este projeto foi desenvolvido como prática de **lógica de programação**, **estruturação de código em backend** e **JavaScript moderno**.

Baseado no repositório da formação Node.js da Digital Innovation One:

👉 https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart

---

# 🎮 Funcionalidades

✔️ Escolha de dois personagens para competir  
✔️ Simulação de corrida com múltiplas rodadas  
✔️ Sistema de atributos dos personagens  
✔️ Tipos de pista aleatórios  
✔️ Sistema de confronto entre personagens  
✔️ Contagem de pontos durante a corrida  
✔️ Declaração automática do vencedor

---

# 🧠 Mecânica da Corrida

A corrida acontece em **5 rodadas**.

A cada rodada:

1. Um **tipo de pista** é sorteado:
   - 🏎️ `RETA` → usa **velocidade**
   - 🔄 `CURVA` → usa **manobrabilidade**
   - 💥 `CONFRONTO` → usa **poder**

2. Cada jogador:
   - rola um **dado (1–6)**
   - soma o valor com o **atributo correspondente**

3. O maior resultado **ganha a rodada**.

### Confronto

No caso de **CONFRONTO**:

- os personagens disputam usando o atributo **power**
- quem perder **perde um ponto**

---

# 🧱 Estrutura do Projeto

```text
│
├── package.json
├── README.md
├── LICENSE
│
└── src
    └── index.js
```

---

# 👨‍🚀 Personagens

Cada personagem possui atributos:

- **speed** _Velocidade_
- **maneuverability** _Manobrabilidade_
- **power** _Poder_
- **points** _Pontos_

Exemplo:

```js
{
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0
}

```

Personagens disponíveis:

- Mario
- Peach
- Yoshi
- Bowser
- Luigi
- Donkey Kong

---

## ⚙️ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/simulador-mario-kart.git

Entre na pasta do projeto.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **JavaScript (ES6+)**
- **NPM**

---

## 📚 Conceitos Praticados

Este projeto foi desenvolvido para praticar diversos conceitos importantes de desenvolvimento backend:

- Estruturação de projetos Node.js
- Manipulação de **arrays e objetos**
- **Funções e modularização**
- **Lógica de programação**
- Uso de **Math.random()**
- Estruturas condicionais (`if`, `else`)
- Simulação de sistemas baseados em regras
- Organização de responsabilidades no código

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

Você pode utilizar, modificar e distribuir este projeto livremente.

---

## 👨‍💻 Autor

Desenvolvido por **Erick Campos**
