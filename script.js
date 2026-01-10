// Array de produtos
const produtos = [
   // 3 MESES 
  {marca: "HREBOS", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BMAX", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "WETOKE", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "LEHMOX", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "ALTOMEX", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "INOVA", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "XTRAD", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "DELTA", modelo: "Acessórios",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "STICK", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "X.CELL", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BAOFENG", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BASIKE", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "TVBOX/STICKTV", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "KAPBOM", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "AITEK", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "INVAS", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "MB-TECH/FIT/TOOLS/HOUSE", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BTECK", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "KTS", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "LUATEK", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "PINENG", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "ELETRO MEX", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "TOMATE", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "PANASONIC", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "IMICE", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "DP", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "AISILI", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "OHEY", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "YEPP", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "SMART LIFE", modelo: "Tomadas inteligente",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "TABLET INFANTIL", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},


  {marca: "MOCHILAS", modelo: "Todos",garantia: "3 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},


  // 6 MESES
  {marca: "MONSTER", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "OXYBR", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "MASTER DRIVER", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "AFOX", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "KINGSTON", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "DELTA", modelo: "Placa de Vídeo",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "DELTA", modelo: "Monitor",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "ONISTEK", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "KNUP", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "LEBOSS", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "GRASEP", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "OBERON", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "MNBOX", modelo: "Monitor",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "COWBOY", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BRINGIT", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "EXBOM", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "IPEGA", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "SOM BOX", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "ASROCK", modelo: "Todos",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},


  {marca: "SUPREMA", modelo: "Cadeira",garantia: "6 meses", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
 
  // 1 ANO NA LOJA
  {marca: "MULTILASER", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "WARRIOR", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "GET", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "GOLDENTEC", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "PULSE", modelo: "Fone de Ouvido/Headset",garantia: "1 ANO", tipo: "loja", obs: "Precisa de Nota Fiscal"},
  {marca: "REVENGER", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "HAYON", modelo: "Todos",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "TCN", modelo: "Monitor",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "BRX", modelo: "Monitor",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "VX", modelo: "Monitor",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},
  {marca: "SOYA", modelo: "Monitor",garantia: "1 ANO", tipo: "Loja", obs: "Precisa de Nota Fiscal"},

  //7 DIAS NA LOJA E 1 ANO COM A MARCA
  {marca: "PULSE", modelo: "Caixas de Som",garantia: "7 DIAS NA LOJA E 1 ANO COM A PULSE", tipo: "Fabricante", obs: "GRUPO MULTI - 8 9 8739-2269 - 859 8809-4821",observacoes: "Prof. Raimundo Vitor, 479A - Parquelandia, Fortaleza-ce - CEP: 60.450 -115"},
  {marca: "NOTEBOOK MULT ULTRA", modelo: "Notebook",garantia: "7 DIAS NA LOJA E 1 ANO COM A PULSE", tipo: "Fabricante", obs: "GRUPO MULTI - 8 9 8739-2269 - 859 8809-4821",observacoes: "Prof. Raimundo Vitor, 479A - Parquelandia, Fortaleza-ce - CEP: 60.450 -115"},
  {marca: "INTELBRAS", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A INTELBRAS", tipo: "Fabricante", obs: "A2 CONECT - (85)9 8729-5235", observacoes: "Av. Antônio Sales, 284 - Joaquim Távora (Fortaleza), Fortaleza - CE, 60135-100"},
  {marca: "HP", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A HP", tipo: "Fabricante", obs: "WWW.SUPPORT.HP.COM",observacoes:"WWW.SUPPORT.HP.COM"},
  {marca: "EPSON", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A EPSON", tipo: "Fabricante", obs: "LW INFORMÁTICA - (85) 3253-5704", observacoes:  "R. Carlos Ribeiro, 578 - Fátima, Fortaleza - CE, 60040-420"},
  {marca: "TSHARA", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A TSHARA", tipo: "Fabricante", obs: "UPS SOLUÇÕES - (85) 9 8899-6308",observacoes:"R. Martins Neto, 313 - Antônio Bezerra, Fortaleza - CE, 60360-415"},
  {marca: "BRITANIA", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A BRITANIA", tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TECNICA LTDA - (85) 21361247", observacoes:" Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170"},
  {marca: "PHILCO", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A PHILCO", tipo: "Fabricante", obs: "www.suporte.philco.com.br", observacoes:"www.suporte.philco.com.br"},
  {marca: "ITATIAIA", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A ITATIAIA", tipo: "Fabricante", obs: "ASSISTÊNCIA TÉCNICA. ITATIAIA - 0800 200 0020",observacoes:"ASSISTÊNCIA TÉCNICA. ITATIAIA - 0800 200 0020"},
  {marca: "JBL", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A JBL", tipo: "Fabricante", obs: "OPELICANO ASSISTÊNCIA TÉCNICA LTDA - (85)9 8969-0000", observacoes:"R. Esperanto, 1390 - Vila União, Fortaleza - CE, 60410-622"},
  {marca: "TANCA", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A TANCA", tipo: "Fabricante", obs: "ASSISTÊNCIA GLAUTEC - (14) 99626-7391",observacoes:"ASSISTÊNCIA GLAUTEC - (14) 99626-7391"},
  {marca: "ELGIN", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A ELGIN", tipo: "Fabricante", obs: "CASA MAGALHÃES - (85) 9 9215-4946", observacoes:" Rua Luiza Miranda Coelho, 800 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-110"},
  {marca: "AIWA", modelo: "Todos",garantia: "7 DIAS NA LOJA E 1 ANO COM A AIWA", tipo: "Fabricante", obs: "REGIONAL ELETRONICA - (85) 3393-3353",observacoes:"Av. Bezerra de Menezes, 1034 - São Gerardo, Fortaleza - CE, 60325-001"},
  {marca: "HQ", modelo: "Tvs",garantia: "7 DIAS NA LOJA E 1 ANO COM A HQ", tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",observacoes:"Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220"},
  {marca: "3GREEN", modelo: "Monitor",garantia: "7 DIAS NA LOJA E 1 ANO COM A 3GREEN", tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",observacoes:"Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220"},

];

const tbody = document.querySelector("#tabelaGarantias tbody");

// Função para gerar a tabela
function gerarTabela() {
  tbody.innerHTML = "";
  produtos.forEach(prod => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <!-- <td>${prod.categoria}</td> -->
      <td>${prod.marca}</td>
      <td>${prod.modelo}</td>
      <td>${prod.garantia}</td>
      <td>${prod.tipo}</td>
      <td>${prod.obs}</td>
      <td>${prod.observacoes}</td>
     
      

    `;
    tbody.appendChild(tr);

    // Evento de clique na linha inteira
tr.addEventListener("click", () => {
  document.getElementById("modalMarca").innerHTML = "<strong>" + prod.marca + "</strong>";
  document.getElementById("modalModelo").innerHTML = "<strong>Modelo:</strong> " + prod.modelo;
  document.getElementById("modalGarantia").innerHTML = "<strong>Garantia:</strong> " + prod.garantia;
  document.getElementById("modalTipo").innerHTML = "<strong>Tipo de Garantia:</strong> " + prod.tipo;

  const modalObs = document.getElementById("modalObs");

  // 👉 Se o tipo de garantia for "Loja", oculta o campo de Endereço
  if (prod.tipo && prod.tipo.trim().toLowerCase() === "loja") {
    modalObs.style.display = "none";
  } else {
    modalObs.style.display = "block";
    modalObs.innerHTML = "<strong>Endereço:</strong> " + prod.observacoes;
  }

  modal.style.display = "block";
});




  });
}

// Função de busca
function buscar() {
  const input = document.getElementById("search").value.toLowerCase();
  const linhas = document.querySelectorAll("#tabelaGarantias tbody tr");
  linhas.forEach(linha => {
    const texto = linha.textContent.toLowerCase();
    linha.style.display = texto.includes(input) ? "" : "none";
  });
}

// Fecha o modal
fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha ao clicar fora
window.addEventListener("click", (event) => {
  if(event.target === modal) modal.style.display = "none";
});




// Inicializa a tabela
gerarTabela();
