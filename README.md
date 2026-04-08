<h1 align="center">Cronômetro</h1>

<p align="center">
  Aplicação web desenvolvida para funcionar como um cronômetro digital, com controle de início, pausa e reinício, exibição detalhada de horas, minutos, segundos e milissegundos, além de interface responsiva e moderna.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout-and-design-decisions">Layout e decisões de design</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

---

## 🏠 About the project

Este projeto foi desenvolvido como uma aplicação de **cronômetro digital**, com o objetivo de praticar manipulação de tempo com JavaScript, atualização dinâmica da interface e construção de uma experiência simples, funcional e responsiva.

A proposta da aplicação é permitir que o usuário acompanhe a contagem de tempo em **horas**, **minutos**, **segundos** e **milissegundos**, com botões para iniciar, parar e reiniciar o contador.

Durante o desenvolvimento, foram trabalhados conceitos importantes como controle de estado com `setInterval`, interrupção da execução com `clearInterval`, formatação numérica com `padStart`, manipulação do DOM e adaptação da interface para diferentes tamanhos de tela.

---

## 🧰 Features

- Exibição de horas
- Exibição de minutos
- Exibição de segundos
- Exibição de milissegundos
- Botão para iniciar a contagem
- Botão para parar a contagem
- Botão para reiniciar o cronômetro
- Atualização dinâmica dos valores em tela
- Formatação dos números com dois dígitos
- Bloqueio para evitar múltiplos `setInterval` simultâneos
- Interface responsiva para desktop, tablet e celular
- Layout visual com card centralizado e efeito glassmorphism

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- Manipulação do DOM
- `setInterval`
- `clearInterval`
- `String.padStart()`
- Google Fonts

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

- `index.html`
- `style.css`
- `script.js`

### Organização dos arquivos

- `index.html` → estrutura da interface do cronômetro
- `style.css` → estilização visual e responsividade
- `script.js` → lógica de tempo, atualização dos contadores e controle dos botões

---

## 🎨 Layout and design decisions

O projeto utiliza uma interface visual moderna, com fundo em gradiente, card central com transparência e blocos separados para cada unidade de tempo. Isso ajuda a destacar a leitura do cronômetro e torna a experiência mais agradável visualmente.

Alguns pontos de destaque no layout:

- fundo com gradiente vibrante
- card central com efeito de vidro
- separação visual clara entre horas, minutos, segundos e milissegundos
- tipografia monoespaçada para reforçar o estilo de mostrador digital
- botões bem destacados para controle da ação
- adaptação da disposição dos elementos em telas menores
- organização visual pensada para legibilidade rápida

---

## ⚙️ Functional rules

A lógica principal da aplicação funciona assim:

- ao clicar em **To Start**, a contagem começa
- a contagem é atualizada a cada `10ms`
- quando os milissegundos chegam a `100`, eles voltam para `0` e os segundos aumentam em `1`
- quando os segundos chegam a `60`, eles voltam para `0` e os minutos aumentam em `1`
- quando os minutos chegam a `60`, eles voltam para `0` e as horas aumentam em `1`
- ao clicar em **To Stop**, o cronômetro pausa
- ao clicar em **Restart**, os contadores são zerados e o cronômetro é interrompido

Além disso, o código impede a criação de múltiplos temporizadores simultâneos ao verificar se já existe um `timer` em execução antes de iniciar outro.

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Git
- Um navegador de sua preferência

---

### Clone the repository

```bash id="1a6h2u"
git clone https://github.com/seu-usuario/cronometer.git
