# 🛠️ Central de Garantias - R7 Informática

Sistema desenvolvido para gerenciamento de garantias de produtos, com foco em assistência técnica e controle rápido de prazos.

---

## 🚀 Funcionalidades

* 🔍 Busca por marca e modelo
* 📊 Dashboard com métricas (3 meses, 6 meses, 1 ano, fabricante)
* 📱 Layout responsivo (mobile e desktop)
* 🌙 Modo claro e escuro
* 🧾 Modal com detalhes completos da garantia
* ⚡ Interface moderna estilo SaaS

---

## 🖥️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)

---

## 📱 Responsividade

O sistema foi desenvolvido pensando em uso mobile:

* Exibe apenas informações essenciais no celular
* Layout adaptado para melhor leitura
* Modal otimizado para telas pequenas

---

## 🎯 Objetivo

Facilitar o controle de garantias em assistências técnicas, evitando erros e agilizando o atendimento ao cliente.

---

## 📸 Preview

(Adicione aqui prints do sistema)

---

## ⚙️ Como usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Abra o arquivo:

```bash
index.html
```

3. Utilize o sistema normalmente no navegador.

---

## 🔮 Melhorias futuras

* 🔐 Sistema de login
* ☁️ Integração com banco de dados
* 📊 Relatórios avançados
* 📲 Versão PWA (app instalável)

---

## 👨‍💻 Autor

Desenvolvido por **Felipe Medeiros**
R7 Informática

---

## 📄 Licença

Este projeto está sob a licença MIT.


---

## ✏️ Como atualizar as garantias

Tudo fica no começo do arquivo `script.js`, na lista `produtos`.

* **Nova marca:** copie uma linha parecida e troque os dados.
* **Marca com garantias diferentes por produto** (ex.: AITEK): crie uma linha para cada produto com o **mesmo nome de marca**. O site junta tudo em um card só.
* **Aviso em destaque para uma marca:** adicione na lista `avisosMarca` (ex.: `"AITEK": "Vale a garantia da caixa..."`).
* **Produto que a loja não testa** (DVR, interfone, telefone RJ11...): coloque `naoTesta: true` na linha do produto. Aparece o aviso vermelho "Não testamos na loja" com o texto dos 7 dias para troca. O número de dias fica em `DIAS_TROCA_NAO_TESTADO`, no topo do `script.js`.
* **Data de atualização:** altere `ULTIMA_ATUALIZACAO` no topo do `script.js`.
