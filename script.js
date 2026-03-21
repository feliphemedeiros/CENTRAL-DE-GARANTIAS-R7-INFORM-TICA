// ===== DADOS =====
const produtos = [
  // 3 MESES
  { marca: "HREBOS",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BMAX",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WETOKE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LEHMOX",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ALTOMEX",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INOVA",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "XTRAD",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DELTA",                   modelo: "Acessórios",             garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "STICK",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "X.CELL",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BAOFENG",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BASIKE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TVBOX/STICKTV",           modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KAPBOM",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AITEK",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INVAS",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MB-TECH/FIT/TOOLS/HOUSE", modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BTECK",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KTS",                     modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LUATEK",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PINENG",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ELETRO MEX",              modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TOMATE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PANASONIC",               modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "IMICE",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DP",                      modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AISILI",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OHEY",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "YEPP",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SMART LIFE",              modelo: "Tomadas inteligente",    garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TABLET INFANTIL",         modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WIFI SMART CAMERA",       modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MOCHILAS",                modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },

  // 6 MESES
  { marca: "MONSTER",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OXYBR",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MASTER DRIVER",           modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AFOX",                    modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KINGSTON",                modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DELTA",                   modelo: "Placa de Vídeo",         garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DELTA",                   modelo: "Monitor",                garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ONISTEK",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KNUP",                    modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LEBOSS",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GRASEP",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OBERON",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MNBOX",                   modelo: "Monitor",                garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "COWBOY",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BRINGIT",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "EXBOM",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "IPEGA",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SOM BOX",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ASROCK",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SUPREMA",                 modelo: "Cadeira",                garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },

  // 1 ANO NA LOJA
  { marca: "MULTILASER",              modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WARRIOR",                 modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GET",                     modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GOLDENTEC",               modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PULSE",                   modelo: "Fone de Ouvido/Headset", garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "REVENGER",                modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "HAYON",                   modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TCN",                     modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BRX",                     modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "VX",                      modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SOYA",                    modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  
  // 7 DIAS NA LOJA / 1 ANO COM O FABRICANTE
  { marca: "PULSE",              modelo: "Caixas de Som",  garantia: "7 DIAS NA LOJA / 1 ANO COM A PULSE",     tipo: "Fabricante", obs: "GRUPO MULTI - (89) 8739-2269 / (85) 9 8809-4821",       observacoes: "Prof. Raimundo Vitor, 479A - Parquelandia, Fortaleza-CE - CEP: 60.450-115" },
  { marca: "NOTEBOOK MULT ULTRA",modelo: "Notebook",       garantia: "7 DIAS NA LOJA / 1 ANO COM A MULT",      tipo: "Fabricante", obs: "GRUPO MULTI - (89) 8739-2269 / (85) 9 8809-4821",       observacoes: "Prof. Raimundo Vitor, 479A - Parquelandia, Fortaleza-CE - CEP: 60.450-115" },
  { marca: "INTELBRAS",          modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A INTELBRAS", tipo: "Fabricante", obs: "A2 CONECT - (85) 9 8729-5235",                          observacoes: "Av. Antônio Sales, 284 - Joaquim Távora, Fortaleza - CE, 60135-100" },
  { marca: "HP",                 modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A HP",        tipo: "Fabricante", obs: "WWW.SUPPORT.HP.COM",                                    observacoes: "WWW.SUPPORT.HP.COM" },
  { marca: "EPSON",              modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A EPSON",     tipo: "Fabricante", obs: "LW INFORMÁTICA - (85) 3253-5704",                        observacoes: "R. Carlos Ribeiro, 578 - Fátima, Fortaleza - CE, 60040-420" },
  { marca: "TSHARA",             modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A TSHARA",    tipo: "Fabricante", obs: "UPS SOLUÇÕES - (85) 9 8899-6308",                        observacoes: "R. Martins Neto, 313 - Antônio Bezerra, Fortaleza - CE, 60360-415" },
  { marca: "BRITANIA",           modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A BRITANIA",  tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TECNICA LTDA - (85) 2136-1247",          observacoes: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "PHILCO",             modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A PHILCO",    tipo: "Fabricante", obs: "www.suporte.philco.com.br",                              observacoes: "www.suporte.philco.com.br" },
  { marca: "ITATIAIA",           modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A ITATIAIA",  tipo: "Fabricante", obs: "ASSISTÊNCIA TÉCNICA ITATIAIA - 0800 200 0020",           observacoes: "ASSISTÊNCIA TÉCNICA ITATIAIA - 0800 200 0020" },
  { marca: "JBL",                modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A JBL",       tipo: "Fabricante", obs: "OPELICANO ASSISTÊNCIA TÉCNICA LTDA - (85) 9 8969-0000",  observacoes: "R. Esperanto, 1390 - Vila União, Fortaleza - CE, 60410-622" },
  { marca: "TANCA",              modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A TANCA",     tipo: "Fabricante", obs: "ASSISTÊNCIA GLAUTEC - (14) 99626-7391",                  observacoes: "ASSISTÊNCIA GLAUTEC - (14) 99626-7391" },
  { marca: "ELGIN",              modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A ELGIN",     tipo: "Fabricante", obs: "CASA MAGALHÃES - (85) 9 9215-4946",                      observacoes: "Rua Luiza Miranda Coelho, 800 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-110" },
  { marca: "AIWA",               modelo: "Todos",           garantia: "7 DIAS NA LOJA / 1 ANO COM A AIWA",      tipo: "Fabricante", obs: "REGIONAL ELETRONICA - (85) 3393-3353",                   observacoes: "Av. Bezerra de Menezes, 1034 - São Gerardo, Fortaleza - CE, 60325-001" },
  { marca: "HQ",                 modelo: "Tvs",             garantia: "7 DIAS NA LOJA / 1 ANO COM A HQ",        tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",             observacoes: "Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220" },
  { marca: "3GREEN",             modelo: "Monitor",         garantia: "7 DIAS NA LOJA / 1 ANO COM A 3GREEN",    tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",             observacoes: "Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220" },
];

// ===== ESTADO =====
var filtroAtivo = "todos";
var produtosFiltrados = [];

// ===== ELEMENTOS =====
var modal       = document.getElementById("modal");
var modalBox    = document.getElementById("modalBox");
var closeBtn    = document.getElementById("modalCloseBtn");
var tbody       = document.getElementById("tbody");
var searchInput = document.getElementById("searchInput");
var searchClear = document.getElementById("searchClear");
var resultsDiv  = document.getElementById("resultsCount");

// ===== DARK MODE =====
function toggleDark() {
  var isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark ? "true" : "false");

  var icon  = document.getElementById("darkIcon");
  var label = document.getElementById("darkLabel");

  if (isDark) {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    label.textContent = "Modo Claro";
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    label.textContent = "Modo Escuro";
  }
}

// ===== BADGES =====
function getBadgeGarantia(garantia) {
  var g = garantia.toLowerCase();
  if (g.indexOf("3 meses")  !== -1) return { label: "3 Meses",        cls: "badge-orange" };
  if (g.indexOf("6 meses")  !== -1) return { label: "6 Meses",        cls: "badge-yellow" };
  if (g.indexOf("1 ano")    !== -1 && g.indexOf("7 dias") === -1) return { label: "1 Ano", cls: "badge-green" };
  if (g.indexOf("7 dias")   !== -1) return { label: "7 Dias / 1 Ano", cls: "badge-blue"   };
  return { label: garantia, cls: "badge-gray" };
}

function getTipoCls(tipo) {
  return tipo.toLowerCase().trim() === "loja" ? "tipo-loja" : "tipo-fabricante";
}

function getTipoLabel(tipo) {
  return tipo.toLowerCase().trim() === "loja" ? "Loja" : "Fabricante";
}

// ===== RENDER TABELA =====
function renderTabela(lista) {
  if (lista.length === 0) {
    var busca = searchInput.value;
    tbody.innerHTML = '<tr class="empty-row"><td colspan="5">Nenhuma marca encontrada' + (busca ? ' para "' + busca + '"' : '') + '</td></tr>';
    resultsDiv.textContent = "";
    return;
  }

  var html = "";
  for (var i = 0; i < lista.length; i++) {
    var p     = lista[i];
    var badge = getBadgeGarantia(p.garantia);
    var tipoCls   = getTipoCls(p.tipo);
    var tipoLabel = getTipoLabel(p.tipo);
    html += '<tr onclick="abrirModal(' + i + ')">'
      + '<td class="td-marca">' + p.marca + '</td>'
      + '<td class="td-modelo">' + p.modelo + '</td>'
      + '<td><span class="badge ' + badge.cls + '">' + badge.label + '</span></td>'
      + '<td><span class="tipo-badge ' + tipoCls + '">' + tipoLabel + '</span></td>'
      + '<td class="td-obs">' + p.obs + '</td>'
      + '</tr>';
  }
  tbody.innerHTML = html;

  var n = lista.length;
  resultsDiv.textContent = n + (n === 1 ? " resultado encontrado" : " resultados encontrados");
}

// ===== FILTROS =====
function aplicarFiltros() {
  var q = searchInput.value.toLowerCase();

  produtosFiltrados = produtos.filter(function(p) {
    var texto = (p.marca + " " + p.modelo + " " + p.garantia + " " + p.obs).toLowerCase();
    var matchSearch = texto.indexOf(q) !== -1;

    var g = p.garantia.toLowerCase();
    var t = p.tipo.toLowerCase().trim();
    var matchFiltro = true;
    if (filtroAtivo === "3meses")     matchFiltro = g.indexOf("3 meses") !== -1;
    if (filtroAtivo === "6meses")     matchFiltro = g.indexOf("6 meses") !== -1;
    if (filtroAtivo === "1ano")       matchFiltro = g.indexOf("1 ano") !== -1 && g.indexOf("7 dias") === -1;
    if (filtroAtivo === "fabricante") matchFiltro = t === "fabricante";

    return matchSearch && matchFiltro;
  });

  renderTabela(produtosFiltrados);
}

function buscar() {
  searchClear.style.display = searchInput.value ? "flex" : "none";
  aplicarFiltros();
}

function limparBusca() {
  searchInput.value = "";
  searchClear.style.display = "none";
  aplicarFiltros();
}

function filtrar(btn, chave) {
  filtroAtivo = chave;
  var tabs = document.querySelectorAll(".filter-tab");
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
  btn.classList.add("active");
  aplicarFiltros();
}

// ===== MODAL =====
// CORREÇÃO: usar classList.add/remove('aberto') — nunca misturar com style.display
function abrirModal(index) {
  var p     = produtosFiltrados[index];
  var badge = getBadgeGarantia(p.garantia);
  var isLoja = p.tipo.toLowerCase().trim() === "loja";

  document.getElementById("modalBadge").textContent   = badge.label;
  document.getElementById("modalMarca").textContent   = p.marca;
  document.getElementById("modalModelo").textContent  = p.modelo;
  document.getElementById("modalGarantia").textContent = p.garantia;
  document.getElementById("modalTipo").textContent    = p.tipo;
  document.getElementById("modalObs").textContent     = p.obs;

  var endRow = document.getElementById("modalEndRow");
  if (!isLoja && p.observacoes) {
    endRow.style.display = "flex";
    document.getElementById("modalEnd").textContent = p.observacoes;
  } else {
    endRow.style.display = "none";
  }

  modal.classList.add("aberto");
  document.body.classList.add("modal-aberto");
}

function fecharModal() {
  modal.classList.remove("aberto");
  document.body.classList.remove("modal-aberto");
}

// Fechar ao clicar no X
closeBtn.addEventListener("click", fecharModal);

// Fechar ao clicar no fundo escuro (overlay), mas NÃO no conteúdo do modal
modal.addEventListener("click", function(e) {
  if (e.target === modal) fecharModal();
});

// Fechar com tecla Esc
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") fecharModal();
});

// ===== STATS =====
function calcularStats() {
  var total = produtos.length;
  var tres  = 0, seis = 0, um = 0, fab = 0;
  for (var i = 0; i < produtos.length; i++) {
    var g = produtos[i].garantia.toLowerCase();
    var t = produtos[i].tipo.toLowerCase().trim();
    if (g.indexOf("3 meses") !== -1) tres++;
    if (g.indexOf("6 meses") !== -1) seis++;
    if (g.indexOf("1 ano") !== -1 && g.indexOf("7 dias") === -1) um++;
    if (t === "fabricante") fab++;
  }
  document.getElementById("statTotal").textContent = total;
  document.getElementById("stat3m").textContent    = tres;
  document.getElementById("stat6m").textContent    = seis;
  document.getElementById("stat1a").textContent    = um;
  document.getElementById("statFab").textContent   = fab;
}

// ===== INICIALIZAÇÃO =====
(function init() {
  // Restaurar modo escuro
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    document.getElementById("darkIcon").innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    document.getElementById("darkLabel").textContent = "Modo Claro";
  }
  calcularStats();
  aplicarFiltros();
})();
