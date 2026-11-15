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
//    busca     -> palavras extras só para a busca (não aparecem na tela).
//                 Ex.: busca: "mouse fonte carregador"
//    naoTesta  -> coloque  naoTesta: true  nos produtos que a loja NÃO
//                 consegue testar (ex.: DVR, interfone, telefone RJ11).
//                 Aparece um aviso vermelho para o caixa e a fala pronta
//                 para o cliente. (Também aceita um texto no lugar de true,
//                 explicando o motivo.)
//
//  AVISOS POR MARCA: veja a lista "avisosMarca" logo abaixo dos produtos.
// =====================================================================

// A data "Atualizado em" é buscada AUTOMATICAMENTE no GitHub (data do último commit).
// A data abaixo só aparece se o GitHub não responder (sem internet, etc.).
const ULTIMA_ATUALIZACAO = "13/11/2026";
const DIAS_TROCA_NAO_TESTADO = 7;   // dias para troca direta dos produtos que a loja não testa
const REPO_GITHUB = "feliphemedeiros/CENTRAL-DE-GARANTIAS-R7-INFORM-TICA";

const produtos = [
  // ---------------- 3 MESES ----------------
  { marca: "AGOLD",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AIKER",              modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AISILI",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "AITEK",              modelo: "Todos", garantia: "3 meses ou 6 meses (ver na caixa)", tipo: "Loja", busca: "repetidor pendrive controle adaptador wi-fi wifi fonte chaveada carregador universal mouse" },
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
  { marca: "DELTA",              modelo: "Todos", garantia: "3 meses ou 6 meses (ver na caixa)", tipo: "Loja", busca: "suporte monitor microfone headset fans fan cooler monitor fonte atx placa de video placa mae" },
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
  { marca: "KAPBOM",             modelo: "Cabo Óptico", garantia: "3 meses", tipo: "Loja", naoTesta: true },
  { marca: "KAPBOM",             modelo: "Demais produtos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KBROAD",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KETCHUP",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "KTS",                modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LEHMOX",             modelo: "Cabo RCA", garantia: "3 meses", tipo: "Loja", naoTesta: true },
  { marca: "LEHMOX",             modelo: "Demais produtos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LEVEL PRO3",         modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "LUATEK",             modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MAX BEATS",          modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MB-TECH / FIT / TOOLS / HOUSE / CAR", modelo: "Antena de TV", garantia: "3 meses", tipo: "Loja", naoTesta: true },
  { marca: "MB-TECH / FIT / TOOLS / HOUSE / CAR", modelo: "Demais produtos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MECHA WARRIOR",      modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MEX",                modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "MICROWEAR",          modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "NATICON",            modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
  { marca: "OHEY",               modelo: "Todos", garantia: "3 meses", tipo: "Loja" },
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
  { marca: "ASROCK",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BATERIA DE NOTEBOOK",    modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BRINGIT",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "BRX",                    modelo: "Todos", garantia: "6 meses ou 1 ano (ver na caixa)", tipo: "Loja", busca: "fonte atx monitor" },
  { marca: "CARREGADOR DE NOTEBOOK", modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "COWBOY",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "EXBOM",                  modelo: "Antena de TV / Cabo RCA", garantia: "6 meses", tipo: "Loja", naoTesta: true },
  { marca: "EXBOM",                  modelo: "Demais produtos", garantia: "6 meses", tipo: "Loja" },
  { marca: "GRASEP",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "IFONTE",                 modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "INFOKIT",                modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "INTEL / AMD",            modelo: "Processador", garantia: "6 meses", tipo: "Loja" },
  { marca: "IPEGA",                  modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KINGSPEC",               modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KINGSTON",               modelo: "Todos", garantia: "6 meses", tipo: "Loja" },
  { marca: "KNUP",                   modelo: "Adaptador HDMI X DisplayPort / Adaptador Mini DP X HDMI / Cabo P2 X RCA / Cabo Óptico / Cabo DisplayPort", garantia: "6 meses ou 1 ano (ver na caixa)", tipo: "Loja", naoTesta: true },
  { marca: "KNUP",                   modelo: "Demais produtos", garantia: "6 meses ou 1 ano (ver na caixa)", tipo: "Loja" },
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
  { marca: "ELG",       modelo: "Antena de TV", garantia: "1 ano", tipo: "Loja", naoTesta: true },
  { marca: "ELG",       modelo: "Demais produtos (exceto cadeiras)", garantia: "1 ano", tipo: "Loja" },
  { marca: "GET",       modelo: "Todos (exceto tinta, limpa tela e garrafas)", garantia: "1 ano", tipo: "Loja" },
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
  { marca: "ELGIN",               modelo: "Todos",         garantia: "1 ano com a ELGIN",     tipo: "Fabricante", contato: "Casa Magalhães - (85) 9 9215-4946", endereco: "Rua Luiza Miranda Coelho, 800 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-110" },
  { marca: "EPSON",               modelo: "Impressoras",   garantia: "1 ano com a EPSON",     tipo: "Fabricante", contato: "LW Informática - (85) 3253-5704", endereco: "R. Carlos Ribeiro, 578 - Fátima, Fortaleza - CE, 60040-420" },
  { marca: "HP",                  modelo: "Impressoras",   garantia: "1 ano com a HP",        tipo: "Fabricante", contato: "www.support.hp.com" },
  { marca: "HQ",                  modelo: "Monitor",         garantia: "1 ano com a HQ",        tipo: "Fabricante", contato: "JCS Assistência Técnica - (85) 9 9998-0010", endereco: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "INTELBRAS",           modelo: "Câmeras / DVR / Interfones / Telefones / Antena de TV", garantia: "1 ano com a INTELBRAS", tipo: "Fabricante", naoTesta: true, contato: "A2 Conect - (85) 9 8729-5235", endereco: "Av. Antônio Sales, 284 - Joaquim Távora, Fortaleza - CE, 60135-100" },
  { marca: "INTELBRAS",           modelo: "Demais produtos", garantia: "1 ano com a INTELBRAS", tipo: "Fabricante", contato: "A2 Conect - (85) 9 8729-5235", endereco: "Av. Antônio Sales, 284 - Joaquim Távora, Fortaleza - CE, 60135-100" },
  { marca: "ITATIAIA",            modelo: "Todos",         garantia: "1 ano com a ITATIAIA",  tipo: "Fabricante", contato: "Assistência Técnica Itatiaia - 0800 200 0020" },
  { marca: "JBL",                 modelo: "Todos",         garantia: "1 ano com a JBL",       tipo: "Fabricante", contato: "Opelicano Assistência Técnica - (85) 9 8969-0000", endereco: "R. Esperanto, 1390 - Vila União, Fortaleza - CE, 60410-622" },
  { marca: "MULTI (NOTEBOOK ULTRA)", modelo: "Notebook",   garantia: "1 ano com a MULTI",     tipo: "Fabricante", contato: "Grupo Multi - (85) 9 8739-2269 / (85) 9 8809-4821 / (85) 3393-3353 / (85) 3036-2456" },
  { marca: "MONDIAL (SOUND)",     modelo: "Todos",         garantia: "1 ano com a MONDIAL",   tipo: "Fabricante", contato: "Eletrônica N-Alfa - (85) 9 9278-8843", endereco: "Rua Cardeal Arcoverde, 1012 - Autran Nunes, Fortaleza - CE" },
  { marca: "PHILCO",              modelo: "Todos",         garantia: "1 ano com a PHILCO",    tipo: "Fabricante", contato: "www.suporte.philco.com.br" },
  { marca: "SUMAY",               modelo: "Todos",         garantia: "1 ano com a SUMAY",     tipo: "Fabricante", contato: "Eletrônica Itasom - (85) 3223-1856", endereco: "Av. Padre Ibiapina, 1365 - Jacarecanga, Fortaleza - CE, 60010-690" },
  { marca: "TANCA",               modelo: "Todos",         garantia: "1 ano com a TANCA",     tipo: "Fabricante", contato: "Assistência Glautec - (14) 99626-7391" },
  { marca: "TSHARA",              modelo: "Todos",         garantia: "1 ano com a TSHARA",    tipo: "Fabricante", contato: "UPS Soluções - (85) 9 8899-6308", endereco: "R. Martins Neto, 313 - Antônio Bezerra, Fortaleza - CE, 60360-415" },

  // ---------------- CONFERÊNCIA / OUTROS ----------------
  { marca: "GARRAFAS",     modelo: "Todos",            garantia: "3 dias", tipo: "Loja" },
  { marca: "DOGGO",        modelo: "Todos",            garantia: "Conferência no ato da compra", tipo: "Loja", obs: "Conferir tamanho, modelo e condições da peça no ato da compra." },
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
  "AITEK": "Verifique a garantia impressa na CAIXA do produto (3 ou 6 meses, conforme a embalagem).",
  "EPSON": "Tintas: conferência no ato da compra. Verificar modelo, compatibilidade, cor e condições da embalagem.",
  "HP":    "Cartuchos: conferência no ato da compra. Verificar modelo, compatibilidade, cor e condições da embalagem.",
  // \n = nova linha dentro do mesmo aviso
  "GET":   "Tinta, limpa tela e garrafas: Tinta e limpa tela: conferência no ato da compra. Verificar modelo, compatibilidade, cor e embalagem.\nGarrafas: 3 dias para troca, somente se não tiver gravação.",
  "PULSE": "Caixas de som: garantia de 1 ano com o fabricante, pelo Grupo Multi - (85) 9 8739-2269 / (85) 9 8809-4821.",
  "GARRAFAS": "3 dias para troca: somente se a garrafa não tiver sido personalizada.",
  "ELG":   "Cadeiras: garantia com o fabricante, pelo site elg.com.br, aba Contato > SAC (resposta por e-mail).",
  "DELTA": "Verifique a garantia impressa na CAIXA do produto (3 ou 6 meses, conforme a embalagem).",
  "BRX":   "Verifique a garantia impressa na CAIXA do produto (6 meses ou 1 ano, conforme a embalagem).",
  "KNUP":  "Verifique a garantia impressa na CAIXA do produto (6 meses ou 1 ano, conforme a embalagem).",
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

// todas as categorias de uma linha (ex.: "3 meses ou 6 meses" -> 3m e 6m)
function categorias(p) {
  if (normalizar(p.tipo) === "fabricante") return ["fab"];
  const g = normalizar(p.garantia);
  const lista = [];
  if (g.includes("3 meses")) lista.push("3m");
  if (g.includes("6 meses")) lista.push("6m");
  if (g.includes("1 ano"))   lista.push("1a");
  return lista.length ? lista : ["conf"];
}

function badgeDe(p) {
  const cat = categoria(p);
  const g = normalizar(p.garantia);
  if (g.includes("caixa")) {
    // "3 meses ou 6 meses (ver na caixa)" -> "3 ou 6 Meses"; "6 meses ou 1 ano (...)" -> "6 Meses ou 1 Ano"
    let texto = "Ver na caixa";
    if (g.includes("3 meses ou 6 meses")) texto = "3 ou 6 Meses";
    else if (g.includes("6 meses ou 1 ano")) texto = "6 Meses ou 1 Ano";
    return { label: texto, cls: cat === "conf" ? "badge-gray" : CATEGORIAS[cat].cls };
  }
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
// um telefone clicável (com botão de WhatsApp se for celular), sem quebrar no meio
function htmlTelefone(bruto) {
  const dig = bruto.replace(/\D/g, "");
  if (/^0800/.test(dig)) {
    return '<span class="tel-item"><a class="link-tel" href="tel:' + dig + '">' + esc(bruto) + "</a></span>";
  }
  let h = '<span class="tel-item"><a class="link-tel" href="tel:+55' + dig + '">' + esc(bruto) + "</a>";
  if (dig.length === 11 && dig.charAt(2) === "9") {
    h += ' <a class="link-zap" href="https://wa.me/55' + dig + '" target="_blank" rel="noopener">WhatsApp</a>';
  }
  return h + "</span>";
}

const RE_TELEFONE = /\(\d{2}\)\s?(?:9\s?)?\d{4,5}-\d{4}|0800[\s-]?\d{3}[\s-]?\d{4}/g;

// Transforma telefones e sites em links clicáveis (texto já tratado com segurança).
// Com 2 ou mais telefones, cada um vai para uma linha própria.
function linkificar(texto) {
  if (!texto) return "";
  const tels = texto.match(RE_TELEFONE) || [];
  if (tels.length >= 2) {
    const ini = texto.indexOf(tels[0]);
    const ultimo = tels[tels.length - 1];
    const fim = texto.lastIndexOf(ultimo) + ultimo.length;
    const antes = texto.slice(0, ini).replace(/\s*[-:]\s*$/, "");
    const depois = texto.slice(fim).replace(/^\s*\.\s*$/, "");
    return linkificarSimples(antes) + (antes ? ":" : "") +
      '<span class="lista-tel">' + tels.map(htmlTelefone).join("") + "</span>" +
      linkificarSimples(depois);
  }
  return linkificarSimples(texto);
}

function linkificarSimples(texto) {
  if (!texto) return "";
  const re = /(\(\d{2}\)\s?(?:9\s?)?\d{4,5}-\d{4}|0800[\s-]?\d{3}[\s-]?\d{4})|((?:https?:\/\/)?www\.[^\s,]+|\b[a-z0-9-]+\.com(?:\.br)?(?:\/[^\s,)]*)?)/gi;
  let out = "", last = 0, m;
  while ((m = re.exec(texto)) !== null) {
    out += esc(texto.slice(last, m.index));
    const bruto = m[0];
    if (m[1]) {
      out += htmlTelefone(bruto);
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

// a garantia só "varia" se os prazos forem diferentes entre os produtos da marca
function garantiaVaria(variantes) {
  return new Set(variantes.map(function (p) { return normalizar(p.garantia); })).size > 1;
}

// junta os produtos da mesma marca que têm exatamente a mesma garantia, tipo e contato
function juntarIguais(variantes) {
  const blocos = [];
  const mapa = {};
  variantes.forEach(function (p) {
    const chave = [normalizar(p.garantia), normalizar(p.tipo), p.contato || "", p.endereco || "", p.obs || ""].join("|");
    if (!mapa[chave]) { mapa[chave] = { base: p, itens: [] }; blocos.push(mapa[chave]); }
    mapa[chave].itens.push(p);
  });
  return blocos;
}

// nome do bloco para copiar/imprimir: se tiver "Demais produtos", vira "Todos os produtos"
function nomeDoBloco(bloco) {
  if (bloco.itens.length === 1 && /^todos$/i.test(bloco.itens[0].modelo)) return "Todos os produtos";
  const demais = bloco.itens.find(function (it) { return /^demais produtos/i.test(it.modelo); });
  if (demais) return demais.modelo.replace(/^demais produtos/i, "Todos os produtos");
  return bloco.itens.map(function (it) { return it.modelo; }).join(" / ");
}

// texto grande do prazo no topo do detalhe (ex.: "3 ou 6 Meses", "1 Ano")
function prazoGrande(p) {
  const label = badgeDe(p).label.replace(" · Fabricante", "");
  return label === "Fabricante" ? "Com o fabricante" : label;
}

function avisoEhCaixa(aviso) { return /impressa na caixa/i.test(aviso); }   // não confundir com "caixas de som"

// uma marca pode ter 1 aviso (texto) ou vários (lista entre [ ])
function avisosDe(marca) {
  const v = avisosMarca[marca.toUpperCase()];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

// aviso de várias linhas: tira o título ("Tinta, limpa tela e garrafas:") e devolve cada linha
function linhasDoAviso(a) {
  if (a.indexOf("\n") === -1) return [a];
  return a.replace(/^[^:\n]{1,30}:\s*/, "").split("\n");
}

function avisoDe(marca) {
  return avisosDe(marca).join(" ");
}

// ---------- produtos que a loja não testa ----------
function motivoNaoTesta(p) {
  if (!p.naoTesta) return "";
  return typeof p.naoTesta === "string" ? p.naoTesta : "Não temos como testar este produto na loja.";
}

function nomeBonito(txt) {
  return String(txt).toLowerCase().replace(/(^|[\s\/-])(\S)/g, function (m, a, b) { return a + b.toUpperCase(); });
}

// Devolve [linha da garantia, texto dos 7 dias] para os produtos que a loja não testa
function textoTrocaNaoTesta(p) {
  const g = normalizar(p.garantia);
  let depois;
  if (normalizar(p.tipo) === "fabricante") {
    const assist = p.contato ? p.contato.split(" - ")[0] : "";
    depois = "Depois desse prazo, a garantia é pela assistência autorizada " + nomeBonito(p.marca) + (assist ? " (" + assist + ")" : "") + ".";
  } else if (g.includes("caixa")) {
    depois = "Depois desse prazo, vale a garantia informada na caixa do produto.";
  } else {
    depois = "Depois desse prazo, vale a garantia normal da loja (" + p.garantia + " a partir da compra).";
  }
  return [
    "Garantia: " + textoGarantiaLegivel(p) + ".",
    "Como este produto não é testado na loja, você tem " + DIAS_TROCA_NAO_TESTADO +
    " dias a partir da compra para troca direta na loja caso ele apresente defeito, com a Nota Fiscal, " +
    "a embalagem e todos os acessórios, e sem sinais de mau uso. " + depois
  ];
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
// cada palavra digitada precisa aparecer no texto (ex.: "caixa de som" acha "Caixas de som")
function bateBusca(texto, q) {
  const t = normalizar(texto);
  return q.split(/\s+/).filter(Boolean).every(function (palavra) { return t.includes(palavra); });
}

function aplicarFiltros() {
  const q = normalizar(searchInput.value.trim());

  marcasVisiveis = [];
  TODAS_MARCAS.forEach(function (grupo) {
    const marcaBate = q && (bateBusca(grupo.marca, q) || bateBusca(avisoDe(grupo.marca), q));
    const variantes = grupo.variantes.filter(function (p) {
      const okFiltro = filtroAtivo === "todos" || categorias(p).indexOf(filtroAtivo) !== -1;
      if (!okFiltro) return false;
      if (!q || marcaBate) return true;
      const texto = normalizar([p.modelo, p.garantia, p.contato, p.endereco, p.obs, p.busca, p.naoTesta ? "nao testa nao testado" : ""].join(" "));
      return bateBusca(texto, q);
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
    const grupoCompleto = TODAS_MARCAS.find(function (x) { return x.marca.toUpperCase() === g.marca.toUpperCase(); });
    const varia = garantiaVaria(grupoCompleto.variantes);
    html += '<div class="item" role="button" tabindex="0" data-i="' + i + '" aria-label="Ver detalhes de ' + esc(g.marca) + '">';
    html +=   '<div class="item-marca">';
    html +=     '<span class="item-nome">' + esc(g.marca) + "</span>";
    if (aviso)      html += '<span class="tag-aviso">' + (avisoEhCaixa(aviso) ? "📦 Ver na caixa" : "⚠ Ver observação") + "</span>";
    else if (varia) html += '<span class="tag-varia">Varia por produto</span>';
    html +=   "</div>";
    html +=   '<div class="item-variantes">';
    // produtos com a mesma garantia/contato aparecem juntos (a garantia aparece 1 vez só)
    juntarIguais(g.variantes).forEach(function (bloco) {
      const p = bloco.base;
      const b = badgeDe(p);
      const detalhe = p.obs || p.contato || "";
      html += '<div class="variante">';
      html +=   '<div class="variante-badges"><span class="badge ' + b.cls + '">' + esc(b.label) + "</span></div>";
      html +=   '<div class="variante-texto">';
      bloco.itens.forEach(function (it) {
        html += '<span class="variante-modelo">' + esc(it.modelo) + "</span>";
        if (it.naoTesta) html += '<span class="tag-sem-teste">⚠ Não testamos · ' + DIAS_TROCA_NAO_TESTADO + ' dias p/ troca</span>';
      });
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
    const cats = new Set();
    g.variantes.forEach(function (p) { categorias(p).forEach(function (c) { cats.add(c); }); });
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
  const varia = garantiaVaria(grupo.variantes);

  const blocos = juntarIguais(grupo.variantes);
  const umSo = blocos.length === 1;
  const base = blocos[0].base;
  document.getElementById("modalMarca").textContent = grupo.marca;
  // prazo em destaque à direita, com a cor da garantia (igual às etiquetas da lista)
  const badgeTopo = document.getElementById("modalBadge");
  const prazoEl = document.getElementById("modalPrazo");
  const modeloEl = document.getElementById("modalModelo");
  if (umSo) {
    const semGarantia = normalizar(base.garantia).includes("conferencia");
    const onde = semGarantia ? "Conferência no ato da compra" : (normalizar(base.tipo) === "fabricante" ? "Garantia com o fabricante" : "Garantia na loja");
    let produtos = nomeDoBloco(blocos[0]);
    if (/^todos$/i.test(produtos)) produtos = "todos os produtos";
    else if (/^todos \(exceto (.+)\)$/i.test(produtos)) produtos = "exceto " + produtos.match(/\(exceto (.+)\)$/i)[1];
    else if (/^todos os produtos \(exceto (.+)\)$/i.test(produtos)) produtos = "exceto " + produtos.match(/\(exceto (.+)\)$/i)[1];
    else if (/^todos os produtos/i.test(produtos)) produtos = produtos.charAt(0).toLowerCase() + produtos.slice(1);
    badgeTopo.style.display = "none";
    // "todos os produtos" não aparece (já fica claro); produtos específicos continuam (ex.: "Monitor", "exceto cadeiras")
    if (semGarantia) {
      // a caixa já diz "Conferir na compra": embaixo da marca fica só o produto
      modeloEl.textContent = produtos === "todos os produtos" ? "Todos os produtos" : produtos;
    } else {
      modeloEl.textContent = produtos === "todos os produtos" ? onde : onde + " · " + produtos;
    }
    prazoEl.textContent = prazoGrande(base);
    prazoEl.className = "modal-prazo prazo-" + badgeDe(base).cls.replace("badge-", "");
    prazoEl.style.display = "";
  } else {
    badgeTopo.style.display = "";
    badgeTopo.textContent = "Garantia diferente por produto";
    modeloEl.textContent = "Veja o prazo de cada produto abaixo";
    prazoEl.style.display = "none";
  }

  let html = "";
  // o aviso da marca vai DENTRO do primeiro quadro, junto do aviso vermelho (fica tudo no mesmo padrão)
  let avisoHtml = "";
  avisosDe(grupo.marca).forEach(function (aviso) {
    if (avisoEhCaixa(aviso)) {
      // faixa amarela, no mesmo estilo do aviso vermelho
      const m = aviso.match(/\(([^,)]+)/);
      avisoHtml += '<div class="aviso-caixa">';
      avisoHtml +=   '<strong><span class="icone-bolinha" aria-hidden="true"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span>VERIFICAR GARANTIA NA CAIXA</strong>';
      avisoHtml +=   "<p>Antes de informar o cliente, confira o prazo impresso na embalagem" +
                (m ? ": <b>" + esc(m[1].trim()) + "</b>." : ".") + "</p>";
      avisoHtml += "</div>";
    } else {
      // faixa azul (observação), no mesmo padrão dos avisos amarelo e vermelho
      // "Tintas: conferência..." -> título "ATENÇÃO · TINTAS"
      const partes = aviso.match(/^([^:\n]{1,30}):\s*([\s\S]*)$/);
      const titulo = partes ? "ATENÇÃO · " + partes[1].toUpperCase() : "ATENÇÃO";
      const texto = partes ? partes[2].charAt(0).toUpperCase() + partes[2].slice(1) : aviso;
      avisoHtml += '<div class="aviso-obs">';
      avisoHtml +=   "<strong>" + esc(titulo) + "</strong>";
      // várias linhas (\n): cada uma com o começo em negrito ("Garrafas: ...")
      avisoHtml +=   "<p>" + texto.split("\n").map(function (linha) {
        const pl = linha.match(/^([^:]{1,30}):\s*(.*)$/);
        return texto.indexOf("\n") !== -1 && pl ? "<b>" + esc(pl[1]) + ":</b> " + linkificar(pl[2]) : linkificar(linha);
      }).join("<br>") + "</p>";
      avisoHtml += "</div>";
    }
  });

  juntarIguais(grupo.variantes).forEach(function (bloco, idx) {
    const p = bloco.base;
    const b = badgeDe(p);
    const ehLoja = normalizar(p.tipo) === "loja";
    const semTeste = bloco.itens.filter(function (it) { return it.naoTesta; });
    html += '<div class="det-card">';
    if (umSo) {
      // prazo já está grande no topo: aqui não repete título nem etiqueta
    } else if (semTeste.length) {
      // com aviso vermelho: em cima só o prazo (os produtos aparecem no "Vale para")
      const temOutros = bloco.itens.some(function (it) { return !it.naoTesta; });
      html += '<div class="det-topo' + (temOutros ? "" : " det-topo-so-prazo") + '">';
      if (temOutros) html += '<div class="det-modelos"><span class="det-modelo">' + esc(nomeDoBloco(bloco)) + "</span></div>";
      html +=   '<span class="badge badge-grande ' + b.cls + '">' + esc(b.label) + "</span>";
      html += "</div>";
    } else {
      html +=   '<div class="det-topo">';
      html +=     '<div class="det-modelos">';
      bloco.itens.forEach(function (it) {
        html += '<span class="det-modelo">' + esc(it.modelo) + "</span>";
      });
      html +=     "</div>";
      html +=     '<span class="badge badge-grande ' + b.cls + '">' + esc(b.label) + "</span>";
      html +=   "</div>";
    }
    if (idx === 0 && avisoHtml) html += avisoHtml;
    if (semTeste.length) {
      html += '<div class="aviso-sem-teste">';
      html +=   '<strong>NÃO TESTAMOS NA LOJA · ' + DIAS_TROCA_NAO_TESTADO + ' DIAS PARA TROCA</strong>';
      html += "<p>Vale para: <b>" + esc(semTeste.map(function (it) { return it.modelo; }).join(" / ")) + "</b>.</p>";
      html +=   "<p>Troca direta na loja em até " + DIAS_TROCA_NAO_TESTADO + " dias em caso de defeito, com Nota Fiscal, embalagem e acessórios, sem sinais de mau uso.</p>";
      html += "</div>";
    }
    html +=   '<dl class="det-lista">';
    if (!normalizar(p.garantia).includes("conferencia")) {
      html +=   '<div><dt>Onde acionar</dt><dd><span class="tipo-badge ' + (ehLoja ? "tipo-loja" : "tipo-fabricante") + '">' + (ehLoja ? "Na loja" : "Com o fabricante") + "</span></dd></div>";
    }
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
  juntarIguais(grupo.variantes).forEach(function (bloco) {
    const p = bloco.base;
    const nomes = nomeDoBloco(bloco);
    linhas.push("• " + nomes + ": " + textoGarantiaLegivel(p) +
            (normalizar(p.tipo) === "fabricante" ? " (acionar com o fabricante)" : " (acionar na loja)"));
    if (p.obs)      linhas.push("   Obs.: " + p.obs);
    if (p.contato)  linhas.push("   Contato: " + p.contato);
    if (p.endereco) linhas.push("   Endereço: " + p.endereco);
  });
  const avisos = avisosDe(grupo.marca);
  if (avisos.length) linhas.push("");
  avisos.forEach(function (a) { linhasDoAviso(a).forEach(function (l) { linhas.push("⚠️ " + l); }); });
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

  const agora = new Date();
  const dataHora = agora.toLocaleDateString("pt-BR") + ", " +
    String(agora.getHours()).padStart(2, "0") + ":" + String(agora.getMinutes()).padStart(2, "0");
  // linha de cima (no lugar do cabeçalho do navegador, que vinha junto com o link no rodapé)
  let html = '<div class="imp-cabecalho"><span>' + dataHora + '</span><span>Central de Garantias - R7 Informática</span><span></span></div>';
  html += '<div class="imp-topo"><img src="logo-preto.png" alt="R7 Informática" class="imp-logo"><div><strong>R7 Informática</strong><span>Informativo de Garantia</span></div></div>';
  html += '<h1 class="imp-marca">' + esc(grupo.marca) + "</h1>";
  avisosDe(grupo.marca).forEach(function (a) {
    html += '<p class="imp-aviso">' + linhasDoAviso(a).map(function (l) { return "⚠ " + esc(l); }).join("<br>") + "</p>";
  });

  juntarIguais(grupo.variantes).forEach(function (bloco) {
    const p = bloco.base;
    const ehLoja = normalizar(p.tipo) === "loja";
    html += '<div class="imp-item">';
    html +=   '<p class="imp-produto">' + esc(nomeDoBloco(bloco)) + "</p>";
    html +=   "<p><b>Garantia:</b> " + esc(textoGarantiaLegivel(p)) + "</p>";
    html +=   "<p><b>Onde acionar:</b> " + (ehLoja ? "Na loja" : "Com o fabricante") + "</p>";
    if (p.obs)      html += "<p><b>Obs.:</b> " + esc(p.obs) + "</p>";
    if (p.contato)  html += "<p><b>Contato:</b> " + esc(p.contato) + "</p>";
    if (p.endereco) html += "<p><b>Endereço:</b> " + esc(p.endereco) + "</p>";
    html += "</div>";
  });

  if (precisaNF) html += '<p class="imp-nf">Para acionar a garantia na loja é necessário apresentar a <b>Nota Fiscal</b>.</p>';

  // na folha impressa, prazos ("6 meses ou 1 ano") e "Nota Fiscal" não quebram no meio da linha
  html = html
    .replace(/Nota Fiscal/g, '<span class="nobr">Nota Fiscal</span>')
    .replace(/(\(?\d+ (?:ou \d+ )?(?:meses|mês|ano|anos|dias)(?: ou \d+ (?:meses|ano|anos))?)/g, '<span class="nobr">$1</span>');

  const area = document.getElementById("areaImpressao");
  area.innerHTML = html;

  // só imprime depois que a logo carregar (senão ela sai em branco)
  const img = area.querySelector(".imp-logo");
  let jaImprimiu = false;
  const imprimir = function () { if (jaImprimiu) return; jaImprimiu = true; window.print(); };
  if (img.complete && img.naturalWidth) imprimir();
  else {
    img.onload = imprimir;
    img.onerror = imprimir;
    setTimeout(imprimir, 1500);
  }
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
  new Image().src = "logo-preto.png";   // pré-carrega a logo da impressão
  calcularStats();
  aplicarFiltros();
})();
