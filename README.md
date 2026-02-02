# Zup Tasks

Esse projeto é um gerenciador simples de tasks feito em React + TypeScript como parte de um desafio técnico.

A ideia não foi só “fazer funcionar”, mas também organizar o código de uma forma que seja fácil de entender, manter e evoluir depois.

---

## Funcionalidades

- Criar uma task com título e descrição  
- Listar todas as tasks  
- Editar uma task  
- Remover uma task  
- Manter os dados salvos mesmo ao atualizar a página  
- Navegar entre páginas  
- Possuir pelo menos um teste unitário  

---

## Tecnologias

- React  
- TypeScript  
- Vite  
- React Router  
- Zustand  
- Vitest + Testing Library  

---

## Organização

Tentei separar o projeto por responsabilidade:

- `pages` ficam as telas  
- `store` cuida do estado global  
- `services` concentram a lógica das tasks  
- `hooks` abstraem o uso do estado  
- `types` guardam as tipagens  
- `tests` ficam os testes  

Assim o projeto não fica todo misturado e fica mais fácil de crescer depois.

---

## Como rodar o projeto

Depois de clonar o repositório:

```bash
npm install
npm run dev