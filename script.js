// =====================================================================
//  CENTRAL DE GARANTIAS - R7 INFORMÁTICA
// =====================================================================
//
//  COMO EDITAR OS DADOS
//  --------------------
//  Cada linha da lista "produtos" é UMA garantia.
//  Se a mesma marca tem garantias diferentes por produto (ex.: AITEK),
//  basta colocar uma linha para cada produto com o MESMO nome de marca:
//  o site junta tudo automaticamente em um card só.
//
//  Campos:
//    marca     -> nome da marca (obrigatório)
//    modelo    -> produtos que essa garantia cobre ("Todos" se for tudo)
//    garantia  -> "3 meses", "6 meses", "1 ano", "3 dias",
//                 "1 ano com a JBL", "Conferência no ato da compra"...
//    tipo      -> "Loja" ou "Fabricante"
//    contato   -> telefone / site (telefones viram link automaticamente)
//    endereco  -> endereço da assistência (opcional)
//    obs       -> observação especial (opcional). NÃO precisa escrever
//                 "Precisa de Nota Fiscal": isso já aparece no site
//                 como regra geral para todas as garantias da loja.
//
//  AVISOS POR MARCA: veja a lista "avisosMarca" logo abaixo dos produtos.
// =====================================================================

// A data "Atualizado em" é buscada AUTOMATICAMENTE no GitHub (data do último commit).
// A data abaixo só aparece se o GitHub não responder (sem internet, etc.).
const ULTIMA_ATUALIZACAO = "13/11/2026";
const REPO_GITHUB = "feliphemedeiros/CENTRAL-DE-GARANTIAS-R7-INFORM-TICA";

const produtos = [
  // ---------------- 3 MESES ----------------
  { marca: "AGOLD",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AIKER",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AISILI",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AITEK",              modelo: "Repetidor / PenDrive / Controle / Adaptador Wi-Fi", garantia: "3 meses", tipo: "Loja" },
  { marca: "ALTOMEX",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AQUARIO",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "ATOMO",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BAOFENG",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BASIKE",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BMAX",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BOMVINK",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BRASPORT",           modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BTECK",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BTOP",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "BYOUL",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "C3TECH",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "CAERUS",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "CARTOON",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "DALING",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "DELTA",              modelo: "Suporte Monitor / Microfone / Headset / Fans", garantia: "3 meses", tipo: "Loja" },
  { marca: "DIGITAL MICROSCOPE", modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "DP",                 modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "ELETRO MEX",         modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "EMPALUX",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "FLEX",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "GOLD",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "GOLDENUTRA",         modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "GREATNICE",          modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "GS WEAR",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "HREBOS",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "IMICE",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "INOVA",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "INVAS",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "ITBLUE",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "JORTAN",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KAPBOM",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KBROAD",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KETCHUP",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KTS",                modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LEHMOX",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LEVEL PRO3",         modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LUATEK",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MAX BEATS",          modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MB-TECH / FIT / TOOLS / HOUSE / CAR", modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MECHA WARRIOR",      modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MEX",                modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MICROWEAR",          modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "NATICON",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "OHEY",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "PANASONIC",          modelo: "Todos (exceto pilhas)", garantia: "3 meses", tipo: "Loja" },
  { marca: "PEINING",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "PETRIN",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "PINENG",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "PIX",                modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "SING-E",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "SMART LIFE",         modelo: "Tomadas inteligentes", garantia: "3 meses", tipo: "Loja" },
  { marca: "STAINLESS STEEL",    modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "STICK",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "TABLET INFANTIL",    modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "TOMATE",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "TVBOX / STICK TV",   modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "UNIPOWER",           modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "VC",                 modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "VISION",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "WETOKE",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "WIFI SMART CAMERA",  modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "WISME",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "WS BATTERY",         modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "XBALOG",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "XCELL",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "XH",                 modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "XTRAD",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "YEPP",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "Z.MASTER",           modelo: "Todos", garantia: "3 meses", tipo: "Loja" },

  // ---------------- 6 MESES ----------------
  { marca: "AFOX",                   modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "AITEK",                  modelo: "Fonte Chaveada / Carregador Universal / Mouse", garantia: "6 meses", tipo: "Loja" },
  { marca: "ASROCK",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BATERIA DE NOTEBOOK",    modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BRINGIT",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BRX",                    modelo: "Fonte ATX", garantia: "6 meses", tipo: "Loja" },
  { marca: "CARREGADOR DE NOTEBOOK", modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "COWBOY",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "DELTA",                  modelo: "Monitor / Fonte ATX / Placa de Vídeo / Placa Mãe", garantia: "6 meses", tipo: "Loja" },
  { marca: "EXBOM",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "GRASEP",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "IFONTE",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "INFOKIT",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "INTEL / AMD",            modelo: "Processador", garantia: "6 meses", tipo: "Loja" },
  { marca: "IPEGA",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KINGSPEC",               modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KINGSTON",               modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KNUP",                   modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "LEBOSS",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "MASTER DRIVER",          modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "MNBOX",                  modelo: "Monitor", garantia: "6 meses", tipo: "Loja" },
  { marca: "MONSTER",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "OBERON",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "ONISTEK",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "OXYBR",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "PALIT",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "SANDISK",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "SOM BOX",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "SUPREMA",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "TECLADO DE NOTEBOOK",    modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "TELA DE NOTEBOOK",       modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "ZOTAC",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },

  // ---------------- 1 ANO NA LOJA ----------------
  { marca: "BRX",       modelo: "Monitor", garantia: "1 ano", tipo: "Loja" },
  { marca: "ELG",       modelo: "Todos (exceto cadeiras)", garantia: "1 ano", tipo: "Loja" },
  { marca: "GET",       modelo: "Todos (exceto tinta e limpa tela)", garantia: "1 ano", tipo: "Loja" },
  { marca: "GOLDENTEC", modelo: "Todos", garantia: "1 ano", tipo: "Loja" },
  { marca: "HAYOM",     modelo: "Todos", garantia: "1 ano", tipo: "Loja" },
  { marca: "LOGITECH",  modelo: "Todos", garantia: "1 ano", tipo: "Loja" },
  { marca: "MULTILASER",modelo: "Todos", garantia: "1 ano", tipo: "Loja" },
  { marca: "PULSE",     modelo: "Fone de Ouvido / Headset", garantia: "1 ano", tipo: "Loja" },
  { marca: "REVENGER",  modelo: "Todos", garantia: "1 ano", tipo: "Loja" },
  { marca: "SOYA",      modelo: "Monitor", garantia: "1 ano", tipo: "Loja" },
  { marca: "TCN",       modelo: "Monitor", garantia: "1 ano", tipo: "Loja" },
  { marca: "VX",        modelo: "Monitor", garantia: "1 ano", tipo: "Loja" },
  { marca: "WARRIOR",   modelo: "Todos", garantia: "1 ano", tipo: "Loja" },

  // ---------------- COM O FABRICANTE ----------------
  { marca: "3GREEN",              modelo: "Monitor",       garantia: "1 ano com a 3GREEN",    tipo: "Fabricante", contato: "JCS Assistência Técnica - (85) 9 9998-0010", endereco: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "AIWA",                modelo: "Todos",         garantia: "1 ano com a AIWA",      tipo: "Fabricante", contato: "JCS Assistência Técnica - (85) 9 9998-0010", endereco: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "BRITANIA",            modelo: "Todos",         garantia: "1 ano com a BRITANIA",  tipo: "Fabricante", contato: "JCS Assistência Técnica - (85) 9 9998-0010", endereco: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "CANON",               modelo: "Impressoras",   garantia: "1 ano com a CANON",     tipo: "Fabricante", contato: "www.canon.com.br/atendimento/servico-tecnico" },
  { marca: "ELG",                 modelo: "Cadeiras",      garantia: "Com o fabricante",      tipo: "Fabricante", contato: "Pelo site elg.com.br, aba Contato > SAC (resposta por e-mail)" },
  { marca: "ELGIN",               modelo: "Todos",         garantia: "1 ano com a ELGIN",     tipo: "Fabricante", contato: "Casa Magalhães - (85) 9 9215-4946", endereco: "Rua Luiza Miranda Coelho, 800 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-110" },
  { marca: "EPSON",               modelo: "Impressoras",   garantia: "1 ano com a EPSON",     tipo: "Fabricante", contato: "LW Informática - (85) 3253-5704", endereco: "R. Carlos Ribeiro, 578 - Fátima, Fortaleza - CE, 60040-420" },
  { marca: "HP",                  modelo: "Impressoras",   garantia: "1 ano com a HP",        tipo: "Fabricante", contato: "www.support.hp.com" },
  // ATENÇÃO: o endereço da HQ é diferente do endereço da JCS nas outras marcas. Conferir.
  { marca: "HQ",                  modelo: "TVs",           garantia: "1 ano com a HQ",        tipo: "Fabricante", contato: "JCS Assistência Técnica - (85) 9 9998-0010", endereco: "R. Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220" },
  { marca: "INTELBRAS",           modelo: "Todos",         garantia: "1 ano com a INTELBRAS", tipo: "Fabricante", contato: "A2 Conect - (85) 9 8729-5235", endereco: "Av. Antônio Sales, 284 - Joaquim Távora, Fortaleza - CE, 60135-100" },
  { marca: "ITATIAIA",            modelo: "Todos",         garantia: "1 ano com a ITATIAIA",  tipo: "Fabricante", contato: "Assistência Técnica Itatiaia - 0800 200 0020" },
  { marca: "JBL",                 modelo: "Todos",         garantia: "1 ano com a JBL",       tipo: "Fabricante", contato: "Opelicano Assistência Técnica - (85) 9 8969-0000", endereco: "R. Esperanto, 1390 - Vila União, Fortaleza - CE, 60410-622" },
  // ATENÇÃO: o 1º telefone do Grupo Multi parece estar sem o 9. Conferir.
  { marca: "MULTI (NOTEBOOK ULTRA)", modelo: "Notebook",   garantia: "1 ano com a MULTI",     tipo: "Fabricante", contato: "Grupo Multi - (85) 8739-2269 / (85) 9 8809-4821 / (85) 3393-3353 / (85) 3036-2456" },
  { marca: "MONDIAL (SOUND)",     modelo: "Todos",         garantia: "1 ano com a MONDIAL",   tipo: "Fabricante", contato: "Eletrônica N-Alfa - (85) 9 9278-8843", endereco: "Rua Cardeal Arcoverde, 1012 - Autran Nunes, Fortaleza - CE" },
  { marca: "PHILCO",              modelo: "Todos",         garantia: "1 ano com a PHILCO",    tipo: "Fabricante", contato: "www.suporte.philco.com.br" },
  { marca: "PULSE",               modelo: "Caixas de Som", garantia: "1 ano com a PULSE",     tipo: "Fabricante", contato: "Grupo Multi - (85) 8739-2269 / (85) 9 8809-4821 / (85) 3393-3353 / (85) 3036-2456" },
  { marca: "SUMAY",               modelo: "Todos",         garantia: "1 ano com a SUMAY",     tipo: "Fabricante", contato: "Eletrônica Itasom - (85) 3223-1856", endereco: "Av. Padre Ibiapina, 1365 - Jacarecanga, Fortaleza - CE, 60010-690" },
  { marca: "TANCA",               modelo: "Todos",         garantia: "1 ano com a TANCA",     tipo: "Fabricante", contato: "Assistência Glautec - (14) 99626-7391" },
  { marca: "TSHARA",              modelo: "Todos",         garantia: "1 ano com a TSHARA",    tipo: "Fabricante", contato: "UPS Soluções - (85) 9 8899-6308", endereco: "R. Martins Neto, 313 - Antônio Bezerra, Fortaleza - CE, 60360-415" },

  // ---------------- CONFERÊNCIA / OUTROS ----------------
  { marca: "GARRAFAS",     modelo: "Todos",            garantia: "3 dias", tipo: "Loja", obs: "Prazo de 3 dias para troca, desde que a garrafa não tenha sido personalizada." },
  { marca: "DOGGO",        modelo: "Todos",            garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir tamanho, modelo e condições da peça no ato da compra." },
  { marca: "EPSON",        modelo: "Tintas",           garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "GET",          modelo: "Tinta / Limpa tela", garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir modelo, compatibilidade, cor e embalagem no ato da compra." },
  { marca: "HP",           modelo: "Cartuchos",        garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "IMPLASTEC",    modelo: "Álcool",           garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir quantidade e integridade da embalagem no ato da compra." },
  { marca: "LEVIVAN",      modelo: "Todos",            garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Produto frágil. Verificar se há trincas, riscos ou avarias antes de sair da loja." },
  { marca: "MADEBASICS",   modelo: "Todos",            garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Produto frágil. Verificar se há trincas, riscos ou avarias antes de sair da loja." },
  { marca: "MOCHILAS",     modelo: "Todos",            garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir tamanho, modelo e condições da peça no ato da compra." },
  { marca: "NEXEL TINTAS", modelo: "Tintas",           garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "PANASONIC",    modelo: "Pilhas",           garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir modelo, tamanho, quantidade e integridade da embalagem no ato da compra." },
  { marca: "SOLVENPLUS",   modelo: "Álcool",           garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir quantidade e integridade da embalagem no ato da compra." },
];

// Avisos que aparecem em destaque no card da marca.
// Para adicionar outra marca, é só criar uma linha nova: "MARCA": "texto",
const avisosMarca = {
  "AITEK": "Vale a garantia impressa na CAIXA do produto. Confira na embalagem: alguns itens são 3 meses e outros 6 meses.",
};

// =====================================================================
//  A PARTIR DAQUI É A LÓGICA DO SITE (não precisa mexer para editar dados)
// =====================================================================

const CATEGORIAS = {
  "3m":   { label: "3 Meses",            cls: "badge-orange" },
  "6m":   { label: "6 Meses",            cls: "badge-yellow" },
  "1a":   { label: "1 Ano",              cls: "badge-green"  },
  "fab":  { label: "Fabricante",         cls: "badge-blue"   },
  "conf": { label: "Conferir na compra", cls: "badge-gray"   },
};

let filtroAtivo = "todos";
let marcasVisiveis = [];
let ultimoFoco = null;

// ---------- utilidades ----------
function normalizar(s) {
  return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function categoria(p) {
  const g = normalizar(p.garantia);
  if (normalizar(p.tipo) === "fabricante") return "fab";
  if (g.includes("3 meses")) return "3m";
  if (g.includes("6 meses")) return "6m";
  if (g.includes("1 ano"))   return "1a";
  return "conf";
}

function badgeDe(p) {
  const cat = categoria(p);
  const g = normalizar(p.garantia);
  if (cat === "fab")  return { label: g.includes("1 ano") ? "1 Ano · Fabricante" : "Fabricante", cls: "badge-blue" };
  if (cat === "conf") return { label: g.includes("dia") ? p.garantia : "Conferir na compra", cls: "badge-gray" };
  return CATEGORIAS[cat];
}

function textoGarantiaLegivel(p) {
  // "1 ano com a JBL" -> "1 ano com a JBL"; "3 meses" -> "3 meses"
  const g = String(p.garantia);
  return g.charAt(0).toUpperCase() + g.slice(1);
}

// Transforma telefones e sites em links clicáveis (texto já tratado com segurança)
function linkificar(texto) {
  if (!texto) return "";
  const re = /(\(\d{2}\)\s?(?:9\s?)?\d{4,5}-\d{4})|(0800[\s-]?\d{3}[\s-]?\d{4})|((?:https?:\/\/)?www\.[^\s,]+|\b[a-z0-9-]+\.com(?:\.br)?(?:\/[^\s,)]*)?)/gi;
  let out = "", last = 0, m;
  while ((m = re.exec(texto)) !== null) {
    out += esc(texto.slice(last, m.index));
    const bruto = m[0];
    if (m[1]) {
      const dig = bruto.replace(/\D/g, "");
      out += '<a class="link-tel" href="tel:+55' + dig + '">' + esc(bruto) + "</a>";
      if (dig.length === 11 && dig.charAt(2) === "9") {
        out += ' <a class="link-zap" href="https://wa.me/55' + dig + '" target="_blank" rel="noopener">WhatsApp</a>';
      }
    } else if (m[2]) {
      out += '<a class="link-tel" href="tel:' + bruto.replace(/\D/g, "") + '">' + esc(bruto) + "</a>";
    } else {
      const href = /^https?:\/\//i.test(bruto) ? bruto : "https://" + bruto;
      out += '<a class="link-site" href="' + esc(href.toLowerCase()) + '" target="_blank" rel="noopener">' + esc(bruto.toLowerCase()) + "</a>";
    }
    last = m.index + bruto.length;
  }
  out += esc(texto.slice(last));
  return out;
}

// ---------- agrupamento por marca ----------
function agruparPorMarca(lista) {
  const mapa = new Map();
  lista.forEach(function (p) {
    const chave = p.marca.toUpperCase();
    if (!mapa.has(chave)) mapa.set(chave, { marca: p.marca, variantes: [] });
    mapa.get(chave).variantes.push(p);
  });
  const ordemCat = { "3m": 1, "6m": 2, "1a": 3, "fab": 4, "conf": 5 };
  const grupos = Array.from(mapa.values());
  grupos.forEach(function (g) {
    g.variantes.sort(function (a, b) { return ordemCat[categoria(a)] - ordemCat[categoria(b)]; });
  });
  // ordem: 3 meses > 6 meses > 1 ano > fabricante > conferir na compra; dentro de cada grupo, A-Z
  grupos.sort(function (a, b) {
    const ca = ordemCat[categoria(a.variantes[0])];
    const cb = ordemCat[categoria(b.variantes[0])];
    if (ca !== cb) return ca - cb;
    return a.marca.localeCompare(b.marca, "pt-BR", { numeric: true });
  });
  return grupos;
}

const TODAS_MARCAS = agruparPorMarca(produtos);

function avisoDe(marca) {
  return avisosMarca[marca.toUpperCase()] || "";
}

// ---------- elementos ----------
const lista       = document.getElementById("lista");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const resultsDiv  = document.getElementById("resultsCount");
const modal       = document.getElementById("modal");
const modalLei    = document.getElementById("modalLei");
const toast       = document.getElementById("toast");

// ---------- filtros + busca ----------
function aplicarFiltros() {
  const q = normalizar(searchInput.value.trim());

  marcasVisiveis = [];
  TODAS_MARCAS.forEach(function (grupo) {
    const marcaBate = q && normalizar(grupo.marca).includes(q);
    const variantes = grupo.variantes.filter(function (p) {
      const okFiltro = filtroAtivo === "todos" || categoria(p) === filtroAtivo;
      if (!okFiltro) return false;
      if (!q || marcaBate) return true;
      const texto = normalizar([p.modelo, p.garantia, p.contato, p.endereco, p.obs].join(" "));
      return texto.includes(q);
    });
    if (variantes.length) {
      marcasVisiveis.push({ marca: grupo.marca, variantes: variantes, total: grupo.variantes.length });
    }
  });

  // reordena pelo que está visível (assim o filtro "6 meses" fica em ordem A-Z)
  const ordem = { "3m": 1, "6m": 2, "1a": 3, "fab": 4, "conf": 5 };
  marcasVisiveis.sort(function (a, b) {
    const ca = ordem[categoria(a.variantes[0])];
    const cb = ordem[categoria(b.variantes[0])];
    if (ca !== cb) return ca - cb;
    return a.marca.localeCompare(b.marca, "pt-BR", { numeric: true });
  });

  renderLista();
}

function renderLista() {
  if (marcasVisiveis.length === 0) {
    lista.innerHTML = "";
    const vazio = document.createElement("div");
    vazio.className = "vazio";
    const busca = searchInput.value.trim();
    vazio.innerHTML = '<div class="vazio-icone">🔍</div><p class="vazio-titulo"></p><p class="vazio-sub">Confira a grafia ou tente buscar pelo tipo de produto (ex.: mouse, monitor, fonte).</p>';
    vazio.querySelector(".vazio-titulo").textContent =
      "Nenhuma marca encontrada" + (busca ? ' para "' + busca + '"' : "");
    lista.appendChild(vazio);
    resultsDiv.textContent = "";
    return;
  }

  let html = "";
  marcasVisiveis.forEach(function (g, i) {
    const aviso = avisoDe(g.marca);
    const varia = g.total > 1;
    html += '<div class="item" role="button" tabindex="0" data-i="' + i + '" aria-label="Ver detalhes de ' + esc(g.marca) + '">';
    html +=   '<div class="item-marca">';
    html +=     '<span class="item-nome">' + esc(g.marca) + "</span>";
    if (aviso)      html += '<span class="tag-aviso">📦 Ver na caixa</span>';
    else if (varia) html += '<span class="tag-varia">Varia por produto</span>';
    html +=   "</div>";
    html +=   '<div class="item-variantes">';
    g.variantes.forEach(function (p) {
      const b = badgeDe(p);
      const detalhe = p.obs || p.contato || "";
      html += '<div class="variante">';
      html +=   '<div class="variante-badges"><span class="badge ' + b.cls + '">' + esc(b.label) + "</span></div>";
      html +=   '<div class="variante-texto">';
      html +=     '<span class="variante-modelo">' + esc(p.modelo) + "</span>";
      if (detalhe) html += '<span class="variante-detalhe">' + esc(detalhe) + "</span>";
      html +=   "</div>";
      html += "</div>";
    });
    html +=   "</div>";
    html +=   '<svg class="item-seta" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
    html += "</div>";
  });
  lista.innerHTML = html;

  const n = marcasVisiveis.length;
  resultsDiv.textContent = n + (n === 1 ? " marca encontrada" : " marcas encontradas");
}

function buscar() {
  searchClear.style.display = searchInput.value ? "flex" : "none";
  aplicarFiltros();
}

function limparBusca() {
  searchInput.value = "";
  searchClear.style.display = "none";
  aplicarFiltros();
  searchInput.focus();
}

function filtrar(chave) {
  filtroAtivo = chave;
  document.querySelectorAll(".stat-card").forEach(function (c) {
    const ativo = c.dataset.filtro === chave;
    c.classList.toggle("ativo", ativo);
    c.setAttribute("aria-pressed", ativo ? "true" : "false");
  });
  aplicarFiltros();
}

// ---------- estatísticas (contam MARCAS, não linhas) ----------
function calcularStats() {
  const cont = { todos: TODAS_MARCAS.length, "3m": 0, "6m": 0, "1a": 0, fab: 0, conf: 0 };
  TODAS_MARCAS.forEach(function (g) {
    const cats = new Set(g.variantes.map(categoria));
    cats.forEach(function (c) { cont[c]++; });
  });
  Object.keys(cont).forEach(function (k) {
    const el = document.querySelector('[data-stat="' + k + '"]');
    if (el) el.textContent = cont[k];
  });
}

// ---------- modal de detalhes ----------
function abrirModal(i) {
  const visivel = marcasVisiveis[i];
  if (!visivel) return;
  // no modal mostramos TODAS as garantias da marca, não só as filtradas
  const grupo = TODAS_MARCAS.find(function (g) { return g.marca.toUpperCase() === visivel.marca.toUpperCase(); });
  modal._grupo = grupo;

  const aviso = avisoDe(grupo.marca);
  const varia = grupo.variantes.length > 1;

  document.getElementById("modalMarca").textContent = grupo.marca;
  document.getElementById("modalBadge").textContent = varia
    ? "Garantia varia conforme o produto"
    : badgeDe(grupo.variantes[0]).label;
  document.getElementById("modalModelo").textContent = varia
    ? grupo.variantes.length + " tipos de garantia"
    : grupo.variantes[0].modelo;

  let html = "";
  if (aviso) {
    html += '<div class="aviso-marca"><span class="aviso-icone">📦</span><div><strong>Atenção</strong><p>' + esc(aviso) + "</p></div></div>";
  }

  grupo.variantes.forEach(function (p) {
    const b = badgeDe(p);
    const ehLoja = normalizar(p.tipo) === "loja";
    html += '<div class="det-card">';
    html +=   '<div class="det-topo">';
    html +=     '<span class="det-modelo">' + esc(p.modelo) + "</span>";
    html +=     '<span class="badge ' + b.cls + '">' + esc(b.label) + "</span>";
    html +=   "</div>";
    html +=   '<dl class="det-lista">';
    html +=     "<div><dt>Garantia</dt><dd>" + esc(textoGarantiaLegivel(p)) + "</dd></div>";
    html +=     '<div><dt>Onde acionar</dt><dd><span class="tipo-badge ' + (ehLoja ? "tipo-loja" : "tipo-fabricante") + '">' + (ehLoja ? "Na loja" : "Com o fabricante") + "</span></dd></div>";
    if (p.obs)      html += "<div><dt>Observação</dt><dd>" + esc(p.obs) + "</dd></div>";
    if (p.contato)  html += "<div><dt>Contato</dt><dd>" + linkificar(p.contato) + "</dd></div>";
    if (p.endereco) {
      const mapa = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(p.endereco);
      html += "<div><dt>Endereço</dt><dd>" + esc(p.endereco) +
              ' <a class="link-mapa" href="' + mapa + '" target="_blank" rel="noopener">Abrir no mapa</a></dd></div>';
    }
    if (ehLoja && categoria(p) !== "conf") html += '<div><dt>Documento</dt><dd>Precisa de Nota Fiscal</dd></div>';
    html +=   "</dl>";
    html += "</div>";
  });

  document.getElementById("modalConteudo").innerHTML = html;

  abrirOverlay(modal);
}

function textoParaCliente(grupo) {
  const linhas = ["*R7 Informática – Garantia*", "Marca: " + grupo.marca];
  grupo.variantes.forEach(function (p) {
    let l = "• " + p.modelo + ": " + textoGarantiaLegivel(p) +
            (normalizar(p.tipo) === "fabricante" ? " (acionar com o fabricante)" : " (acionar na loja)");
    linhas.push(l);
    if (p.obs)      linhas.push("   Obs.: " + p.obs);
    if (p.contato)  linhas.push("   Contato: " + p.contato);
    if (p.endereco) linhas.push("   Endereço: " + p.endereco);
  });
  const aviso = avisoDe(grupo.marca);
  if (aviso) linhas.push("", "⚠️ " + aviso);
  if (grupo.variantes.some(function (p) { return normalizar(p.tipo) === "loja" && categoria(p) !== "conf"; })) {
    linhas.push("", "Para garantia na loja é necessário apresentar a Nota Fiscal.");
  }
  return linhas.join("\n");
}

function imprimirInfo() {
  const grupo = modal._grupo;
  if (!grupo) return;
  const aviso = avisoDe(grupo.marca);
  const precisaNF = grupo.variantes.some(function (p) { return normalizar(p.tipo) === "loja" && categoria(p) !== "conf"; });

  let html = '<div class="imp-topo"><img src="logo.png" alt="" class="imp-logo"><div><strong>R7 Informática</strong><span>Informativo de Garantia</span></div></div>';
  html += '<h1 class="imp-marca">' + esc(grupo.marca) + "</h1>";
  if (aviso) html += '<p class="imp-aviso">⚠ ' + esc(aviso) + "</p>";

  grupo.variantes.forEach(function (p) {
    const ehLoja = normalizar(p.tipo) === "loja";
    html += '<div class="imp-item">';
    html +=   '<p class="imp-produto">' + esc(p.modelo) + "</p>";
    html +=   "<p><b>Garantia:</b> " + esc(textoGarantiaLegivel(p)) + "</p>";
    html +=   "<p><b>Onde acionar:</b> " + (ehLoja ? "Na loja" : "Com o fabricante") + "</p>";
    if (p.obs)      html += "<p><b>Obs.:</b> " + esc(p.obs) + "</p>";
    if (p.contato)  html += "<p><b>Contato:</b> " + esc(p.contato) + "</p>";
    if (p.endereco) html += "<p><b>Endereço:</b> " + esc(p.endereco) + "</p>";
    html += "</div>";
  });

  if (precisaNF) html += '<p class="imp-nf">Para acionar a garantia na loja é necessário apresentar a <b>Nota Fiscal</b>.</p>';
  html += '<p class="imp-rodape">Impresso em ' + new Date().toLocaleDateString("pt-BR") + "</p>";

  document.getElementById("areaImpressao").innerHTML = html;
  window.print();
}

function copiarInfo() {
  const texto = textoParaCliente(modal._grupo);
  const ok = function () { mostrarToast("Copiado! É só colar no WhatsApp."); };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(ok, function () { copiarFallback(texto); ok(); });
  } else {
    copiarFallback(texto); ok();
  }
}

function copiarFallback(texto) {
  const ta = document.createElement("textarea");
  ta.value = texto;
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

function mostrarToast(msg) {
  toast.textContent = msg;
  toast.classList.add("visivel");
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { toast.classList.remove("visivel"); }, 2200);
}

// ---------- abrir / fechar overlays ----------
function abrirOverlay(el) {
  ultimoFoco = document.activeElement;
  el.classList.add("aberto");
  document.body.classList.add("modal-aberto");
  const box = el.querySelector(".modal-box");
  if (box) box.scrollTop = 0;
  const fechar = el.querySelector(".modal-close");
  if (fechar) fechar.focus();
}

function fecharOverlay(el) {
  if (!el.classList.contains("aberto")) return;
  el.classList.remove("aberto");
  if (!document.querySelector(".modal-overlay.aberto")) document.body.classList.remove("modal-aberto");
  if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
}

function abrirModalLei() { abrirOverlay(modalLei); }

// ---------- modo escuro ----------
const ICONE_SOL = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
const ICONE_LUA = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function aplicarTema(escuro) {
  document.body.classList.toggle("dark", escuro);
  document.getElementById("darkIcon").innerHTML = escuro ? ICONE_SOL : ICONE_LUA;
  const btn = document.getElementById("darkToggle");
  const rotulo = escuro ? "Ativar modo claro" : "Ativar modo escuro";
  btn.setAttribute("aria-label", rotulo);
  btn.title = rotulo;
}

function toggleDark() {
  const escuro = !document.body.classList.contains("dark");
  aplicarTema(escuro);
  try { localStorage.setItem("darkMode", escuro ? "true" : "false"); } catch (e) {}
}

// ---------- eventos ----------
lista.addEventListener("click", function (e) {
  const item = e.target.closest(".item");
  if (item) abrirModal(+item.dataset.i);
});
lista.addEventListener("keydown", function (e) {
  const item = e.target.closest(".item");
  if (item && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrirModal(+item.dataset.i); }
});

document.querySelectorAll(".stat-card").forEach(function (c) {
  c.addEventListener("click", function () { filtrar(c.dataset.filtro); });
});

document.getElementById("modalCloseBtn").addEventListener("click", function () { fecharOverlay(modal); });
document.getElementById("modalLeiCloseBtn").addEventListener("click", function () { fecharOverlay(modalLei); });
document.getElementById("btnCopiar").addEventListener("click", copiarInfo);
document.getElementById("btnImprimir").addEventListener("click", imprimirInfo);

[modal, modalLei].forEach(function (el) {
  el.addEventListener("click", function (e) { if (e.target === el) fecharOverlay(el); });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") { fecharOverlay(modal); fecharOverlay(modalLei); }
  // "/" foca a busca (atalho rápido no balcão)
  if (e.key === "/" && document.activeElement !== searchInput && !document.querySelector(".modal-overlay.aberto")) {
    e.preventDefault(); searchInput.focus();
  }
});

// ---------- data da última atualização (automática pelo GitHub) ----------
function carregarDataAtualizacao() {
  const el = document.getElementById("ultimaAtualizacao");
  el.textContent = ULTIMA_ATUALIZACAO;

  // guarda por 10 minutos para não consultar o GitHub toda hora
  try {
    const cache = JSON.parse(sessionStorage.getItem("r7DataAtualizacao") || "null");
    if (cache && Date.now() - cache.t < 10 * 60 * 1000) { el.textContent = cache.d; return; }
  } catch (e) {}

  if (!window.fetch) return;
  fetch("https://api.github.com/repos/" + REPO_GITHUB + "/commits?per_page=1")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (dados) {
      if (!dados || !dados[0]) return;
      const data = new Date(dados[0].commit.committer.date);
      if (isNaN(data)) return;
      const texto = data.toLocaleDateString("pt-BR");
      el.textContent = texto;
      try { sessionStorage.setItem("r7DataAtualizacao", JSON.stringify({ d: texto, t: Date.now() })); } catch (e) {}
    })
    .catch(function () { /* sem internet: fica a data fixa */ });
}

// ---------- inicialização ----------
(function init() {
  let escuro = false;
  try { escuro = localStorage.getItem("darkMode") === "true"; } catch (e) {}
  aplicarTema(escuro);
  carregarDataAtualizacao();
  calcularStats();
  aplicarFiltros();
})();
