// ===== DADOS =====
const produtos = [
  // 3 MESES
  { marca: "AGOLD",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AIKER",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AISILI",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AITEK",                   modelo: "Repetidor / PenDrive",   garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ALTOMEX",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ATOMO",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BAOFENG",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BASIKE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BMAX",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BOMVINK",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BYOUL",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BRASPORT",                modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BTOP",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BTECK",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "CAERUS",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "CARTOON",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "C3TECH",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DIGITAL MICROSCOPE",      modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DELTA",                   modelo: "Suporte Monitor / Microfone / Headset / Fans",        garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DP",                      modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ELETRO MEX",              modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GREATNICE",               modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GS WEAR",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "HREBOS",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "IMICE",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INOVA",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INVAS",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ITBLUE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "JORTAN",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KAPBOM",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KBROAD",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KETCHUP",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KTS",                     modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LEVEL PRO3",              modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LEHMOX",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LUATEK",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MB-TECH / FIT / TOOLS / HOUSE / CAR", modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MAX BEATS",               modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MECHA WARRIOR",           modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MEX",                     modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MICROWEAR",               modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "NATICON",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OHEY",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PANASONIC",               modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PEINING",                 modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PETRIN",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PIX",                     modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PINENG",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SMART LIFE",              modelo: "Tomadas inteligente",    garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "STAINLESS STEEL",         modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SING-E",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "STICK",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TABLET INFANTIL",         modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TOMATE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TVBOX/STICKTV",           modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "UniPower",                modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "VISION",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WETOKE",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WS BATTERY",              modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WISME",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WIFI SMART CAMERA",       modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "VC",                      modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "XH",                      modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "XCELL",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "XBALOG",                  modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "XTRAD",                   modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "YEPP",                    modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "Z.MASTER",                modelo: "Todos",                  garantia: "3 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GARRAFAS",                modelo: "Todos",                  garantia: "3 dias",  tipo: "Loja",       obs: "Prazo de 3 dias para troca, desde que a garrafa não tenha sido personalizada." },

  // 6 MESES
  { marca: "AFOX",                    modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ASROCK",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "AITEK",                   modelo: "Fonte Chaveada / Carregador Universal",         garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BRX",                     modelo: "Fonte ATX",              garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "BRINGIT",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "Carregador de Notebook",  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "COWBOY",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "DELTA",                   modelo: "Monitor / Fonte ATX / Placa de Vídeo / Placa Mãe",     garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "EXBOM",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "GRASEP",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "IFONTE",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INFOKIT",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "INTEL/AMD",               modelo: "Processador",            garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "IPEGA",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KINGSTON",                modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "KNUP",                    modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LEBOSS",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MASTER DRIVER",           modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MNBOX",                   modelo: "Monitor",                garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MONSTER",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OBERON",                  modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ONISTEK",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "OXYBR",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PALIT",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SanDisk",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SOM BOX",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SUPREMA",                 modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ZOTAC",                   modelo: "Todos",                  garantia: "6 meses", tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  
  // 1 ANO NA LOJA
  { marca: "BRX",                     modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "ELG",                     modelo: "Todos (exceto cadeiras)",garantia: "1 ANO",   tipo: "Loja",       obs: "⚠️ Cadeiras têm garantia própria com o fabricante." ,     observacoes: "Garantia via fabricante. Solicitação pelo site elg.com.br, aba Contato > SAC (resposta por e-mail)." },
  { marca: "GET",                     modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "⚠️ TINTA E LIMPA TELA GET — conferir modelo, compatibilidade, cor e embalagem no ato da compra." },
  { marca: "GOLDENTEC",               modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "HAYOM",                   modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "LOGITECH",                modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "MULTILASER",              modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "PULSE",                   modelo: "Fone de Ouvido/Headset", garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "REVENGER",                modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "SOYA",                    modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "TCN",                     modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "VX",                      modelo: "Monitor",                garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  { marca: "WARRIOR",                 modelo: "Todos",                  garantia: "1 ANO",   tipo: "Loja",       obs: "Precisa de Nota Fiscal" },
  
  // 1 ANO COM O FABRICANTE
  { marca: "3GREEN",              modelo: "Monitor",        garantia: "1 ANO COM A 3GREEN",    tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",             observacoes: "Av. Visconde do Rio Branco, 1605 - loja 1 — Centro, Fortaleza - CE, 60055-170" },
  { marca: "AIWA",                modelo: "Todos",          garantia: "1 ANO COM A AIWA",      tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",             observacoes: "Av. Visconde do Rio Branco, 1605 - loja 1 — Centro, Fortaleza - CE, 60055-170" },
  { marca: "BRITANIA",            modelo: "Todos",          garantia: "1 ANO COM A BRITANIA",  tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TECNICA - (85) 9 9998-0010",             observacoes: "Av. Visconde do Rio Branco, 1605 - loja 1 - Centro, Fortaleza - CE, 60055-170" },
  { marca: "CANON",               modelo: "Impressoras",    garantia: "1 ANO COM A CANON",     tipo: "Fabricante", obs: "www.canon.com.br/atendimento/servico-tecnico",           observacoes: "www.canon.com.br" },
  { marca: "ELGIN",               modelo: "Todos",          garantia: "1 ANO COM A ELGIN",     tipo: "Fabricante", obs: "CASA MAGALHÃES - (85) 9 9215-4946",                      observacoes: "Rua Luiza Miranda Coelho, 800 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-110" },
  { marca: "EPSON",               modelo: "Impressoras",    garantia: "1 ANO COM A EPSON",     tipo: "Fabricante", obs: "LW INFORMÁTICA - (85) 3253-5704",                        observacoes: "R. Carlos Ribeiro, 578 - Fátima, Fortaleza - CE, 60040-420" },
  { marca: "HP",                  modelo: "Impressoras",    garantia: "1 ANO COM A HP",        tipo: "Fabricante", obs: "WWW.SUPPORT.HP.COM",                                     observacoes: "WWW.SUPPORT.HP.COM" },
  { marca: "HQ",                  modelo: "Tvs",            garantia: "1 ANO COM A HQ",        tipo: "Fabricante", obs: "JCS ASSISTÊNCIA TÉCNICA - (85) 9 9998-0010",              observacoes: "Francisco Costa, 112 - Jangurussu, Fortaleza - CE, 60865-220" },
  { marca: "INTELBRAS",           modelo: "Todos",          garantia: "1 ANO COM A INTELBRAS", tipo: "Fabricante", obs: "A2 CONECT - (85) 9 8729-5235",                           observacoes: "Av. Antônio Sales, 284 - Joaquim Távora, Fortaleza - CE, 60135-100" },
  { marca: "ITATIAIA",            modelo: "Todos",          garantia: "1 ANO COM A ITATIAIA",  tipo: "Fabricante", obs: "ASSISTÊNCIA TÉCNICA ITATIAIA - 0800 200 0020",           observacoes: "ASSISTÊNCIA TÉCNICA ITATIAIA - 0800 200 0020" },
  { marca: "JBL",                 modelo: "Todos",          garantia: "1 ANO COM A JBL",       tipo: "Fabricante", obs: "OPELICANO ASSISTÊNCIA TÉCNICA LTDA - (85) 9 8969-0000",  observacoes: "R. Esperanto, 1390 - Vila União, Fortaleza - CE, 60410-622" },
  { marca: "NOTEBOOK MULT ULTRA", modelo: "Notebook",       garantia: "1 ANO COM A MULT",      tipo: "Fabricante", obs: "(85) 8739-2269 / (85) 9 8809-4821 / (85) 3393-3353 / (85) 3036-2456", observacoes: "GRUPO MULTI" },
  { marca: "SOUND MONDIAL",       modelo: "Todos",          garantia: "1 ANO COM A MONDIAL",   tipo: "Fabricante", obs: "ELETRÔNICA N-ALFA - (85) 9 9278-8843",                   observacoes: "Rua Cardeal Arcoverde, 1012 - Autran Nunes" },
  { marca: "PHILCO",              modelo: "Todos",          garantia: "1 ANO COM A PHILCO",    tipo: "Fabricante", obs: "www.suporte.philco.com.br",                              observacoes: "www.suporte.philco.com.br" },
  { marca: "PULSE",               modelo: "Caixas de Som",  garantia: "1 ANO COM A PULSE",     tipo: "Fabricante", obs: "(85) 8739-2269 / (85) 9 8809-4821 / (85) 3393-3353 / (85) 3036-2456", observacoes: "GRUPO MULTI" },
  { marca: "SUMAY",               modelo: "Todos",          garantia: "1 ANO COM A SUMAY",     tipo: "Fabricante", obs: "ELETRÔNICA ITASOM - (85) 3223-1856",                     observacoes: "AV. PADRE IBIAPINA, 1365 - JACARECÉ, FORTALEZA - CE, 60010-690" },
  { marca: "TANCA",               modelo: "Todos",          garantia: "1 ANO COM A TANCA",     tipo: "Fabricante", obs: "ASSISTÊNCIA GLAUTEC - (14) 99626-7391",                  observacoes: "ASSISTÊNCIA GLAUTEC - (14) 99626-7391" },
  { marca: "TSHARA",              modelo: "Todos",          garantia: "1 ANO COM A TSHARA",    tipo: "Fabricante", obs: "UPS SOLUÇÕES - (85) 9 8899-6308",                        observacoes: "R. Martins Neto, 313 - Antônio Bezerra, Fortaleza - CE, 60360-415" },
  { marca: "LEVIVAN",             modelo: "Todos",          garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Produto frágil. Verificar se há trincas, riscos ou avarias antes de sair da loja.",},
  { marca: "PANASONIC",           modelo: "Pilhas",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir modelo, tamanho, quantidade e integridade da embalagem no ato da compra.",},
  { marca: "MADEBASICS",          modelo: "Todos",          garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Produto frágil. Verificar se há trincas, riscos ou avarias antes de sair da loja.",},
  { marca: "DOGGO",               modelo: "Todos",          garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir tamanho, modelo e condições da peça no ato da compra.",},
  { marca: "MOCHILAS",            modelo: "Todos",          garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",      obs: "Conferir tamanho, modelo e condições da peça no ato da compra." },
  { marca: "NEXEL TINTAS",        modelo: "Tintas",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "EPSON TINTAS",        modelo: "Tintas",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "HP CARTUCHOS",        modelo: "Tintas",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir modelo, compatibilidade, cor e condições da embalagem no ato da compra." },
  { marca: "IMPLASTEC",           modelo: "Alcool",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir quantidade e integridade da embalagem no ato da compra.",},
  { marca: "SOLVENPLUS",          modelo: "Alcool",         garantia: "CONFERÊNCIA NO ATO DA COMPRA",tipo: "Loja",       obs: "Conferir quantidade e integridade da embalagem no ato da compra.",},
];

// ===== ESTADO =====
var filtroAtivo = "todos";
var produtosFiltrados = [];

// ===== ELEMENTOS =====
var modal       = document.getElementById("modal");
var modalBox    = document.getElementById("modalBox");
var closeBtn    = document.getElementById("modalCloseBtn");
var modalLei      = document.getElementById("modalLei");
var closeLeiBtn   = document.getElementById("modalLeiCloseBtn");
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
    label.textContent = "";
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    label.textContent = "";
  }
}

// ===== BADGES =====
function getBadgeGarantia(garantia, tipo) {
  var g = garantia.toLowerCase();
  var t = (tipo || "").toLowerCase().trim();
  if (g.indexOf("3 meses") !== -1) return { label: "3 Meses", cls: "badge-orange" };
  if (g.indexOf("6 meses") !== -1) return { label: "6 Meses", cls: "badge-yellow" };
  if (g.indexOf("1 ano")   !== -1) {
    if (t === "fabricante") return { label: "1 Ano (Fabricante)", cls: "badge-blue" };
    return { label: "1 Ano", cls: "badge-green" };
  }
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
    var badge = getBadgeGarantia(p.garantia, p.tipo);
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
    if (filtroAtivo === "1ano")       matchFiltro = g.indexOf("1 ano") !== -1 && t === "loja";
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
  var badge = getBadgeGarantia(p.garantia, p.tipo);
  var isLoja = p.tipo.toLowerCase().trim() === "loja";

  document.getElementById("modalBadge").textContent   = badge.label;
  document.getElementById("modalMarca").textContent   = p.marca;
  document.getElementById("modalModelo").textContent  = p.modelo;
  document.getElementById("modalGarantia").textContent = p.garantia;
  document.getElementById("modalTipo").textContent    = p.tipo;
  document.getElementById("modalObs").textContent     = p.obs;

var endRow = document.getElementById("modalEndRow");
if (p.observacoes) {
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

// ===== MODAL POLITICA DE TROCA E DEVOLUCAO (acessivel pelo botao do cabecalho) =====
function abrirModalLei() {
  modalLei.classList.add("aberto");
  document.body.classList.add("modal-aberto");
}

function fecharModalLei() {
  modalLei.classList.remove("aberto");
  document.body.classList.remove("modal-aberto");
}

// Fechar ao clicar no X
closeBtn.addEventListener("click", fecharModal);
closeLeiBtn.addEventListener("click", fecharModalLei);

// Fechar ao clicar no fundo escuro (overlay), mas NÃO no conteúdo do modal
modal.addEventListener("click", function(e) {
  if (e.target === modal) fecharModal();
});
modalLei.addEventListener("click", function(e) {
  if (e.target === modalLei) fecharModalLei();
});

// Fechar com tecla Esc (fecha o modal que estiver aberto)
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    fecharModal();
    fecharModalLei();
  }
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
    if (g.indexOf("1 ano") !== -1 && t === "loja") um++;
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
