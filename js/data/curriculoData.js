// Base Curricular Completa CompMath: BNCC Matemática + BNCC Computação (Resolução CNE/CP 1/2022)
// Mapeamento aprofundado nos 3 Eixos: Pensamento Computacional, Mundo Digital e Cultura Digital • CEDIM-PE

const CURRICULO_DATA = [
  {
    "id": "CURR-EF6-01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Sistema de Numeração Decimal, Ordens e Conversão Binária",
    "unidadeTematica": "Números",
    "habilidadeMatematica": {
      "codigo": "EF06MA01",
      "descricao": "Comparar, ordenar, ler e escrever números naturais e números racionais cuja representação decimal é finita, fazendo uso da reta numérica."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO03",
      "descricao": "Compreender que sistemas digitais representam qualquer informação (números, textos, sons, imagens) utilizando o sistema binário (bits 0 e 1) e bases numéricas."
    },
    "curriculoPE": "Currículo de Pernambuco: Relacionar a evolução histórica dos sistemas de numeração (egípcio, romano, maia e indo-arábico) às necessidades de contagem e à representação de dados em computadores.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender o princípio posicional dos sistemas numéricos e converter números decimais simples em binários e vice-versa, compreendendo a linguagem fundamental dos computadores.",
    "estrategiasSugeridas": "Atividade desplugada 'Cartões Binários' (1, 2, 4, 8, 16 pontos): os estudantes viram cartões para cima (1) ou para baixo (0) para formar qualquer número decimal.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-01"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-02",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Critérios de Divisibilidade, Primos e Algoritmo de Euclides (MDC)",
    "unidadeTematica": "Números",
    "habilidadeMatematica": {
      "codigo": "EF06MA05",
      "descricao": "Classificar números naturais em primos e compostos, estabelecer relações entre números expressas pelos termos 'é múltiplo de', 'é divisor de', 'é fator de', e estabelecer critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO01",
      "descricao": "Identificar e construir algoritmos que envolvam sequências de passos lógicos, instruções condicionais simples e repetições para a resolução de problemas."
    },
    "curriculoPE": "Currículo de Pernambuco: Articular os critérios de divisibilidade à elaboração de regras formais e fluxogramas de decisão, valorizando a formulação de hipóteses e a verificação empírica.",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender e aplicar o Algoritmo de Euclides para determinar o MDC entre dois números naturais; formalizar o processo na forma de algoritmo passo a passo e fluxograma de repetição condicional.",
    "estrategiasSugeridas": "Atividade com tiras de papel quadriculado cortadas em comprimentos distintos para medições sucessivas e dedução do fluxograma de divisões sucessivas.",
    "praticasRecomendadas": [
      "PRAT-02",
      "PRAT-03"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-03",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Operações Fundamentais com Naturais e Fluxogramas com Condicionais",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF06MA03",
      "descricao": "Resolver e elaborar problemas que envolvam cálculos (mentais ou escritos, exatos ou aproximados) com números naturais, por meio de estratégias variadas, com compreensão dos processos neles envolvidos com e sem uso de calculadora."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO02",
      "descricao": "Representar algoritmos utilizando diferentes linguagens, como linguagem natural estruturada e fluxogramas de processos com blocos de decisão."
    },
    "curriculoPE": "Currículo de Pernambuco: Desenvolver o pensamento computacional por meio da representação gráfica de passos e tomada de decisões em problemas aritméticos.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Mapear o algoritmo da divisão euclidiana (dividendo = divisor × quociente + resto) em um fluxograma formal no caderno ou no computador.",
    "estrategiasSugeridas": "Elaboração de cartazes de fluxograma em pequenos grupos contendo blocos de 'Início', 'Processo', 'Decisão (Resto = 0?)' e 'Fim'.",
    "praticasRecomendadas": [
      "PRAT-03",
      "PRAT-02"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-04",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Propriedades da Igualdade e Equações na Balança de Pratos",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF06MA14",
      "descricao": "Reconhecer que a relação de igualdade matemática não se altera ao adicionar, subtrair, multiplicar ou dividir os seus dois membros por um mesmo número e utilizar essa noção para determinar valores desconhecidos."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO01",
      "descricao": "Construir algoritmos de balanceamento e inversão de operações aritméticas para descoberta de incógnitas."
    },
    "curriculoPE": "Currículo de Pernambuco: Princípio da equivalência operacional e transição do pensamento aritmético para o algébrico com analogias concretas.",
    "pilares": [
      "Algoritmos",
      "Abstração"
    ],
    "objetivosSugeridos": "Manter o equilíbrio de equações aplicando operações inversas em ambos os membros; representar a regra de equivalência em um algoritmo condicional.",
    "estrategiasSugeridas": "Simulação de balança de dois pratos no Scratch onde adicionar pesos em um prato exige a mesma ação no outro.",
    "praticasRecomendadas": [
      "PRAT-03",
      "PRAT-13"
    ],
    "eixos": [
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-05",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Plano Cartesiano e Coordenadas no 1º Quadrante",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF06MA16",
      "descricao": "Associar pares ordenados de números a pontos do plano cartesiano do 1º quadrante em situações como a localização dos vértices de um polígono."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO04",
      "descricao": "Reconhecer que sistemas computacionais utilizam coordenadas numéricas para posicionamento, controle de objetos visuais e representação gráfica de interfaces."
    },
    "curriculoPE": "Currículo de Pernambuco: Explorar a malha quadriculada articulada a sistemas de referência locais, mapas geográficos de Pernambuco e jogos digitais simples.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Localizar pontos no plano cartesiano por meio de pares ordenados (x, y) e compreender como softwares de jogos e animações controlam a posição de personagens na tela.",
    "estrategiasSugeridas": "Atividade de 'Batalha Naval Algorítmica' na malha quadriculada da sala, seguida de um teste no Scratch movimentando o ator para posições (x, y) específicas.",
    "praticasRecomendadas": [
      "PRAT-01",
      "PRAT-10"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-06",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Polígonos Regulares, Ângulos e Desenho Algorítmico com Caneta",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF06MA18",
      "descricao": "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e classificá-los em regulares e não regulares, tanto em suas representações no plano como em faces de poliedros."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO05",
      "descricao": "Utilizar ambientes de programação visual para construir figuras geométricas planas mediante instruções de desenho com ângulo e deslocamento."
    },
    "curriculoPE": "Currículo de Pernambuco: Valorizar o patrimônio arquitetônico pernambucano (Igrejas de Olinda, pontes do Recife) identificando polígonos e simetrias.",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Construir algoritmos de repetição no Scratch (módulo Caneta) para desenhar triângulos equiláteros, quadrados e hexágonos regulares.",
    "estrategiasSugeridas": "Investigação da fórmula do giro externo (360° / número de lados) com simulação corporal de giros na sala de aula.",
    "praticasRecomendadas": [
      "PRAT-10",
      "PRAT-07"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-07",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Áreas, Perímetros e Decomposição de Figuras Planas",
    "unidadeTematica": "Grandezas e Medidas",
    "habilidadeMatematica": {
      "codigo": "EF06MA24",
      "descricao": "Resolver e elaborar problemas que envolvam as grandezas comprimento, massa, tempo, temperatura, área (triângulos e retângulos), capacidade e volume (sólidos formados por blocos retangulares)."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO01",
      "descricao": "Decompor áreas irregulares em figuras geométricas elementares através de algoritmos de soma de subáreas."
    },
    "curriculoPE": "Currículo de Pernambuco: Ladrilhamentos de áreas reais com ladrilhos hidráulicos típicos de Olinda e Recife Antigo.",
    "pilares": [
      "Decomposição",
      "Abstração"
    ],
    "objetivosSugeridos": "Decompor polígonos irregulares em retângulos e triângulos menores para calcular a área total; formalizar a soma em uma planilha simples.",
    "estrategiasSugeridas": "Desenho de plantas baixas em malha quadriculada de 1cm² com cálculo de área total por contagem e multiplicação.",
    "praticasRecomendadas": [
      "PRAT-02",
      "PRAT-12"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF6-08",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Coleta, Organização de Dados e Gráficos em Planilhas",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF06MA32",
      "descricao": "Interpretar e resolver situações que envolvam dados de pesquisas sobre contextos ambientais, sustentabilidade, trânsito, consumo responsável, veiculadas pela mídia em tabelas e em diferentes tipos de gráficos."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO04",
      "descricao": "Utilizar ferramentas de planilhas digitais para inserção, ordenação de dados e geração automática de gráficos estatísticos."
    },
    "curriculoPE": "Currículo de Pernambuco: Investigar temas locais de saneamento, coleta seletiva e consumo de energia através de pesquisas empíricas escolares.",
    "pilares": [
      "Decomposição",
      "Abstração"
    ],
    "objetivosSugeridos": "Criar uma tabela no Google Planilhas com dados coletados da turma e gerar gráficos de colunas e setores, interpretando os resultados.",
    "estrategiasSugeridas": "Mini-pesquisa na turma sobre meios de transporte utilizados para ir à escola, gerando gráficos na sala de informática ou no celular.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Números Inteiros, Reta Orientada e Variáveis de Estado",
    "unidadeTematica": "Números",
    "habilidadeMatematica": {
      "codigo": "EF07MA04",
      "descricao": "Resolver e elaborar problemas que envolvam operações com números inteiros (adição, subtração, multiplicação e divisão), relacionando-os a situações de saldo bancário, temperatura e deslocamento."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO01",
      "descricao": "Compreender como dados numéricos positivos e negativos são representados, manipulados e atualizados em variáveis de sistemas computacionais."
    },
    "curriculoPE": "Currículo de Pernambuco: Fomentar o uso de representações semióticas diversas (reta orientada, modelos de débitos/créditos) articuladas a situações-problema do cotidiano.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Operar com números inteiros positivos e negativos; associar a variação de saldo ao conceito de incremento/decremento de variáveis em programação.",
    "estrategiasSugeridas": "Jogo de cartas com débitos e créditos desplugado ou criação de jogo no Scratch onde pegar itens bons soma pontos e bater em obstáculos subtrai pontos.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-09"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-02",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Equações Polinomiais de 1º Grau e Algoritmo de Resolução",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF07MA18",
      "descricao": "Resolver e elaborar problemas que possam ser representados por equações polinomiais de 1º grau, redutíveis à forma ax + b = c, fazendo uso das propriedades da igualdade."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO02",
      "descricao": "Escrever algoritmos que recebam entradas de dados, executem cálculos por meio de expressões aritméticas e fórmulas, e apresentem saídas de dados correspondentes."
    },
    "curriculoPE": "Currículo de Pernambuco: Transição do pensamento aritmético para o algébrico através do significado da incógnita como valor determinado a ser descoberto.",
    "pilares": [
      "Abstração",
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Compreender a diferença entre incógnita na matemática e variável na computação; construir um algoritmo para calcular automaticamente a solução x = (c - b) / a para a ≠ 0.",
    "estrategiasSugeridas": "Elaboração de um fluxograma de resolução no papel com testes de mesa manuais, seguido da construção de um programa em blocos no Scratch ou script Python.",
    "praticasRecomendadas": [
      "PRAT-13",
      "PRAT-03"
    ],
    "eixos": [
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-03",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Razão, Proporcionalidade e Regra de Três Algorítmica",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF07MA17",
      "descricao": "Resolver e elaborar problemas que envolvam variação de proporcionalidade direta e do tipo inverso entre duas grandezas, incluindo escalas, divisão em partes proporcionais e taxa de variação."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO02",
      "descricao": "Implementar rotinas de conversão e escalonamento linear de grandezas físicas e visuais em interfaces computacionais."
    },
    "curriculoPE": "Currículo de Pernambuco: Aplicações em escalas cartográficas da Região Metropolitana do Recife e receitas da culinária regional pernambucana.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Modelar a regra de três simples direta em algoritmo computacional: x = (b × c) / a; calcular escalas de redução e ampliação.",
    "estrategiasSugeridas": "Conversor automático de receitas culinárias para diferentes números de porções desenvolvido em planilha ou Scratch.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-04",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Transformações Geométricas, Simetrias e Rotações no Scratch",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF07MA19",
      "descricao": "Realizar transformações de figuras geométricas no plano cartesiano (translação, reflexão e rotação), identificando as características que não se alteram (medidas de lados e ângulos) e as que se alteram."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO03",
      "descricao": "Aplicar transformações gráficas e instruções de repetição e angulação em ambientes de programação visual ou textual para a construção de padrões geométricos."
    },
    "curriculoPE": "Currículo de Pernambuco: Valorizar a geometria das artes visuais, do artesanato pernambucano (como a xilogravura de J. Borges e o barro de Caruaru) e padrões de ladrilhamento.",
    "pilares": [
      "Reconhecimento de Padrões",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Desenvolver algoritmos que desenhem polígonos regulares e padrões de mandalas no plano utilizando repetições e rotação angular calculada (360° / n).",
    "estrategiasSugeridas": "Atividade com Scratch (módulo Caneta / Pen) ou Python Turtle para programar a tartaruga para desenhar triângulos, quadrados, pentágonos e padrões simétricos.",
    "praticasRecomendadas": [
      "PRAT-10",
      "PRAT-07"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-05",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Condição de Existência de Triângulos e Desigualdade Triangular",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF07MA27",
      "descricao": "Calcular medidas de ângulos internos de polígonos regulares e reconhecer a condição de existência de triângulos quanto à medida dos lados."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO01",
      "descricao": "Construir árvores de decisão lógicas com operadores booleanos (E, OU, NÃO) para validação e classificação de dados geométricos."
    },
    "curriculoPE": "Currículo de Pernambuco: Investigação empírica com canudos ou palitos de fósforo para constatar a rigidez triangular nas pontes metálicas de Pernambuco.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Implementar um algoritmo que receba 3 segmentos e verifique logicamente se formam triângulo: (a < b + c) E (b < a + c) E (c < a + b), classificando-os em equilátero, isósceles ou escaleno.",
    "estrategiasSugeridas": "Construção do Classificador Lógico de Triângulos no Scratch ou em Python com testes de valores reais.",
    "praticasRecomendadas": [
      "PRAT-15",
      "PRAT-03"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-06",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Experimentos Aleatórios, Frequência e Probabilidade Teórica",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF07MA36",
      "descricao": "Planejar e realizar experimentos aleatórios ou simulações que envolvem cálculo de probabilidades ou estimativas por meio de frequência de ocorrências."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO04",
      "descricao": "Utilizar blocos de geração de números pseudoaleatórios em ambientes de programação para simulação de sorteios e tomada de decisões não determinísticas."
    },
    "curriculoPE": "Currículo de Pernambuco: Articular experimentos com moedas, dados e roletas a jogos populares e compreensão de eventos prováveis e improváveis.",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Identificar o espaço amostral de sorteios simples e programar um sorteador aleatório no Scratch para comparar resultados teóricos e empíricos.",
    "estrategiasSugeridas": "Sorteador digital de nomes ou números da turma feito em Scratch, discutindo se o sorteio do computador é realmente justo.",
    "praticasRecomendadas": [
      "PRAT-09",
      "PRAT-06"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Notação Científica e Representação Digital de Informações (Bits e Bytes)",
    "unidadeTematica": "Números",
    "habilidadeMatematica": {
      "codigo": "EF08MA01",
      "descricao": "Efetuar cálculos com potências de expoentes inteiros e aplicar esse conhecimento na representação de números em notação científica."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO02",
      "descricao": "Compreender como grandezas digitais (bytes, kilobytes, megabytes, gigabytes) e ordens de grandeza são calculadas com potências de base 2 e base 10."
    },
    "curriculoPE": "Currículo de Pernambuco: Relacionar grandezas astronômicas e microscópicas ao armazenamento digital de celulares e computadores do cotidiano discente.",
    "pilares": [
      "Abstração",
      "Decomposição"
    ],
    "objetivosSugeridos": "Operar com potências de 10 e relacioná-las à capacidade de cartões de memória, pendrives e downloads na internet.",
    "estrategiasSugeridas": "Cálculo de quantos segundos levaria para baixar um arquivo de 10 GB em diferentes velocidades de internet (Mbps).",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-12"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-FIN01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Educação Financeira: Porcentagens, Acréscimos, Descontos e Juros Simples",
    "unidadeTematica": "Matemática Financeira",
    "habilidadeMatematica": {
      "codigo": "EF08MA04",
      "descricao": "Resolver e elaborar problemas que envolvam o cálculo de porcentagens, incluindo os que lidam com acréscimos e decréscimos simples, utilizando estratégias pessoais, cálculo mental e calculadora, no contexto de educação financeira, entre outros."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO04",
      "descricao": "Construir modelos automatizados em planilhas eletrônicas e scripts simples com operadores percentuais e condicionais para tomada de decisão financeira."
    },
    "curriculoPE": "Currículo de Pernambuco: Contextualizar acréscimos e descontos em contas de energia (bandeiras tarifárias da Neoenergia), inflação nos preços de alimentos em feiras livres de Pernambuco e compras parceladas no comércio.",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Abstração"
    ],
    "objetivosSugeridos": "Calcular acréscimos e descontos sucessivos em situações reais de compras; desenvolver uma calculadora automatizada de juros simples no Scratch ou Google Planilhas.",
    "estrategiasSugeridas": "Análise crítica de encartes de supermercado e lojas de eletrodomésticos: comparar compra à vista com desconto versus a prazo parcelada, programando as fórmulas em planilha.",
    "praticasRecomendadas": [
      "PRAT-14",
      "PRAT-12"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-FIN02",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Fração Percentual, Decimais e Orçamento em Planilhas Eletrônicas",
    "unidadeTematica": "Matemática Financeira",
    "habilidadeMatematica": {
      "codigo": "EF08MA05",
      "descricao": "Reconhecer e utilizar procedimentos para a obtenção de uma fração percentual e a representação decimal correspondente, aplicando esse conhecimento em situações de educação financeira (taxas de juros, inflação, compras à vista e a prazo)."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO04",
      "descricao": "Utilizar funções de formatação numérica (moeda, porcentagem, decimal) e fórmulas de multiplicação automática em ferramentas de produtividade digital."
    },
    "curriculoPE": "Currículo de Pernambuco: Estimular o letramento financeiro e o consumo consciente dos estudantes e suas famílias, analisando orçamentos domésticos reais.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Converter instantaneamente frações, decimais e porcentagens; estruturar uma planilha de orçamento familiar pessoal no Google Planilhas.",
    "estrategiasSugeridas": "Oficina prática com Google Planilhas calculando gastos por categoria (alimentação, transporte, lazer) com gráficos de pizza automáticos.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-02",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Princípio Multiplicativo da Contagem e Árvores de Decisão",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF08MA03",
      "descricao": "Resolver e elaborar problemas de contagem cuja resolução envolva a aplicação do princípio multiplicativo, como agrupamentos de elementos e árvores de possibilidades."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO01",
      "descricao": "Modelar estruturas de dados em forma de árvore e grafos simples para mapear trajetórias, opções e cenários de busca combinatória."
    },
    "curriculoPE": "Currículo de Pernambuco: Construir diagramas em árvore sistemáticos para organização do pensamento combinatório e tomada de decisões em problemas reais.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Modelar problemas de escolha e combinatória utilizando diagramas de árvore; compreender a equivalência entre a árvore de possibilidades e as bifurcações lógicas de decisões computacionais.",
    "estrategiasSugeridas": "Atividade desplugada 'Chatbot de Papel': criar um fluxo de atendimento por ramificações e calcular o total de caminhos possíveis.",
    "praticasRecomendadas": [
      "PRAT-06",
      "PRAT-09"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-03",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Estatística Descritiva: Médias, Mediana e Planilhas Eletrônicas",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF08MA25",
      "descricao": "Obter os valores de medidas de tendência central de uma pesquisa estatística (média, mediana e moda) com a compreensão de seus significados e relacioná-los com a dispersão de dados."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO04",
      "descricao": "Utilizar ferramentas digitais de planilhas e scripts para organizar grandes volumes de dados, calcular fórmulas estatísticas e gerar visualizações gráficas interpretáveis."
    },
    "curriculoPE": "Currículo de Pernambuco: Investigar temas sociais relevantes (consumo de água, energia, gastos da comunidade) por meio de pesquisas de campo e análise de dados.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Coletar dados reais da turma e utilizar planilhas eletrônicas para aplicar funções automatizadas (=MÉDIA, =MEDIANA, =MODO), comparando as medidas e construindo gráficos.",
    "estrategiasSugeridas": "Criação de um mini-laboratório de Ciência de Dados com a turma, analisando hábitos de estudo ou tempo de tela através do Google Planilhas.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-04",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Expressões Algébricas, Fórmulas e Funções Parametrizadas",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF08MA06",
      "descricao": "Resolver e elaborar problemas que envolvam o cálculo do valor numérico de expressões algébricas, utilizando as propriedades das operações."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO02",
      "descricao": "Criar sub-rotinas e blocos de função parametrizados em ambientes de programação que recebam argumentos e retornem valores computados."
    },
    "curriculoPE": "Currículo de Pernambuco: Generalização de padrões aritméticos em leis algébricas funcionais aplicadas a problemas da física e economia.",
    "pilares": [
      "Abstração",
      "Decomposição"
    ],
    "objetivosSugeridos": "Calcular valor numérico de fórmulas da física e geometria; programar blocos 'Meus Blocos' no Scratch que funcionem como funções matemáticas parametrizadas.",
    "estrategiasSugeridas": "Criação de um bloco personalizado no Scratch chamado `CalcularAreaTrapezio(baseMaior, baseMenor, altura)` que executa a fórmula e diz a resposta.",
    "praticasRecomendadas": [
      "PRAT-13",
      "PRAT-10"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-05",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Sistemas de Equações de 1º Grau e Busca Gráfica no GeoGebra",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF08MA08",
      "descricao": "Resolver e elaborar problemas relacionados ao seu contexto próximo, que possam ser representados por sistemas de equações de 1º grau com duas incógnitas e interpretá-los, inclusive no plano cartesiano."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO03",
      "descricao": "Modelar algoritmos de busca de interseção de retas e soluções simultâneas através de iteração e matrizes."
    },
    "curriculoPE": "Currículo de Pernambuco: Interpretação geométrica da solução de um sistema como ponto de encontro de duas retas no plano cartesiano.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Resolver sistemas pelos métodos da adição e substituição; plotar as duas retas no GeoGebra e observar o ponto de interseção (x, y).",
    "estrategiasSugeridas": "Desafio no GeoGebra: digitar as duas equações e usar a ferramenta 'Interseção de Dois Objetos' para conferir o cálculo feito na lousa.",
    "praticasRecomendadas": [
      "PRAT-11",
      "PRAT-13"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF8-06",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Área de Figuras Planas, Círculo e Algoritmos de Aproximação",
    "unidadeTematica": "Grandezas e Medidas",
    "habilidadeMatematica": {
      "codigo": "EF08MA19",
      "descricao": "Resolver e elaborar problemas que envolvam medidas de área de figuras geométricas, utilizando expressões de cálculo de área (quadriláteros, triângulos e círculos), em situações como determinar medida de terrenos."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO01",
      "descricao": "Implementar rotinas algorítmicas de cálculo automático de áreas e estimativa de Pi por polígonos inscritos/circunscritos."
    },
    "curriculoPE": "Currículo de Pernambuco: Medição de áreas de terrenos e construções em áreas rurais e urbanas do estado de Pernambuco.",
    "pilares": [
      "Algoritmos",
      "Abstração"
    ],
    "objetivosSugeridos": "Calcular área do círculo A = πR² e compreender a constante Pi através do Método de Arquimedes com polígonos regulares no GeoGebra.",
    "estrategiasSugeridas": "Aproximação de Pi aumentando o número de lados de um polígono regular inscrito no GeoGebra de 6 para 96 lados.",
    "praticasRecomendadas": [
      "PRAT-08",
      "PRAT-11"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF9-01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Teorema de Pitágoras e Algoritmo de Distância Euclidiana",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF09MA14",
      "descricao": "Demonstrar relações métricas do triângulo retângulo, entre elas o teorema de Pitágoras, e aplicá-las para determinar medidas desconhecidas em situações reais."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO02",
      "descricao": "Implementar rotinas algorítmicas de cálculo de distância euclidiana entre dois pontos no espaço bidimensional, base para sistemas de geolocalização e jogos digitais."
    },
    "curriculoPE": "Currículo de Pernambuco: Contextualizar a trigonometria e relações métricas em problemas práticos de navegação, topografia e acessibilidade urbana.",
    "pilares": [
      "Decomposição",
      "Algoritmos",
      "Abstração"
    ],
    "objetivosSugeridos": "Compreender e demonstrar geometricamente o Teorema de Pitágoras; programar um calculador de hipotenusa e distância entre dois pontos no plano cartesiano.",
    "estrategiasSugeridas": "Demonstração visual do Teorema de Pitágoras no GeoGebra com controle deslizante, seguida de implementação em Scratch ou Python do algoritmo da distância: d = √((x2-x1)² + (y2-y1)²).",
    "praticasRecomendadas": [
      "PRAT-11",
      "PRAT-13"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF9-02",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Equações do 2º Grau: Bhaskara e Condicionais de Raízes",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF09MA09",
      "descricao": "Compreender os processos de fatoração de expressões algébricas e resolver equações polinomiais de 2º grau por meio de diferentes métodos (fatoração, completamento de quadrados e fórmula resolutiva)."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO01",
      "descricao": "Desenvolver algoritmos com múltiplos caminhos de execução condicionais (if-else encadeado) baseados na avaliação de discriminantes matemáticos."
    },
    "curriculoPE": "Currículo de Pernambuco: Investigar o comportamento do discriminante Delta e sua relação com a quantidade de raízes reais.",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Estruturar o algoritmo completo da fórmula de Bhaskara, mapeando os 3 casos possíveis do discriminante (Δ > 0, Δ = 0, Δ < 0).",
    "estrategiasSugeridas": "Construção de fluxograma no quadro com testes manuais de mesa; programação do solucionador automático de equações em Python ou Scratch.",
    "praticasRecomendadas": [
      "PRAT-13",
      "PRAT-03"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF9-03",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Probabilidade e Simulação da Lei dos Grandes Números",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF09MA20",
      "descricao": "Reconhecer, em experimentos aleatórios, eventos equiprováveis ou não e calcular a probabilidade de um evento por meio da razão entre casos favoráveis e casos possíveis."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO03",
      "descricao": "Projetar e executar simulações computacionais repetitivas (laços de repetição com centenas/milhares de iterações) para observar a convergência estatística empírica."
    },
    "curriculoPE": "Currículo de Pernambuco: Superar concepções intuitivas equivocadas (falácia do jogador) mediante simulações e experimentos aleatórios frequenciais.",
    "pilares": [
      "Algoritmos",
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Calcular probabilidades teóricas e confrontá-las com simulações de 10, 100, 1.000 e 5.000 lançamentos de moeda no Scratch, constatando empiricamente a convergência assintótica.",
    "estrategiasSugeridas": "Início com 30 lançamentos manuais na turma registrados na lousa. Em seguida, execução de projeto Scratch com gráfico em tempo real.",
    "praticasRecomendadas": [
      "PRAT-09",
      "PRAT-08"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF9-04",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Noção de Função e Dependência entre Grandezas",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF09MA06",
      "descricao": "Compreender as funções como relações de dependência unívoca entre duas variáveis e suas representações numérica, algébrica e gráfica e utilizar esse conceito para analisar situações que envolvam relações funcionais entre duas variáveis."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO04",
      "descricao": "Entender o conceito computacional de função como um mapeamento determinístico de entradas (inputs) em saídas (outputs) sem efeitos colaterais imprevistos."
    },
    "curriculoPE": "Currículo de Pernambuco: Analisar fenômenos locais como velocidade média de transportes e tabelas de consumo elétrico da Celpe/Neoenergia.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender que para cada valor de entrada x existe um único valor correspondente f(x); plotar tabelas e gráficos dinâmicos no GeoGebra.",
    "estrategiasSugeridas": "Comparação entre uma máquina de sucos (entra fruta -> sai suco) e uma função matemática f(x) = 2x + 3 programada em blocos.",
    "praticasRecomendadas": [
      "PRAT-11",
      "PRAT-13"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF9-05",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Volumes de Cilindros e Prismas Retos",
    "unidadeTematica": "Grandezas e Medidas",
    "habilidadeMatematica": {
      "codigo": "EF09MA19",
      "descricao": "Resolver e elaborar problemas que envolvam medidas de volumes de prismas e de cilindros retos, inclusive com uso de expressões de cálculo, em situações cotidianas."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO04",
      "descricao": "Criar rotinas algorítmicas para cálculo de capacidade cúbica e simulação volumétrica de embalagens industriais."
    },
    "curriculoPE": "Currículo de Pernambuco: Dimensionamento de reservatórios de água e cisternas no semiárido pernambucano (Agreste e Sertão).",
    "pilares": [
      "Decomposição",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Calcular volumes de cilindros V = π·R²·h e prismas retos; comparar o custo por litro de diferentes formatos de recipientes.",
    "estrategiasSugeridas": "Simulador de capacidade de cisternas feito no Google Planilhas recebendo diâmetro e altura.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM1-01",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Função Afim, Taxa de Variação e Sliders no GeoGebra",
    "unidadeTematica": "Álgebra e Funções",
    "habilidadeMatematica": {
      "codigo": "EM13MAT101",
      "descricao": "Interpretar criticamente situações econômicas, sociais e ambientais por meio de modelos matemáticos (função afim e linear), analisando taxas de variação constante e coeficientes lineares e angulares."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO01",
      "descricao": "Construir modelos algorítmicos e simulações computacionais para representar funções matemáticas e prever comportamentos de sistemas em cenários dinâmicos."
    },
    "curriculoPE": "Currículo de Pernambuco: Contextualizar a função afim com tarifas de energia, planos de dados móveis e corridas de transporte por aplicativo (bandeirada + km rodado).",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Modelar problemas reais de custos fixos e variáveis através da função f(x) = ax + b; explorar o papel do coeficiente angular 'a' como taxa de incremento contínuo em loops computacionais.",
    "estrategiasSugeridas": "Investigação interativa no GeoGebra com controle deslizante (slider) para os coeficientes 'a' e 'b', seguida de um simulador de corrida de aplicativo no Scratch ou planilha.",
    "praticasRecomendadas": [
      "PRAT-11",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM1-02",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Função Quadrática, Parábola e Pontos Extremos de Otimização",
    "unidadeTematica": "Álgebra e Funções",
    "habilidadeMatematica": {
      "codigo": "EM13MAT301",
      "descricao": "Resolver e elaborar problemas do cotidiano, da Matemática e de outras áreas do conhecimento, que envolvam equações lineares e quadráticas, identificando pontos de máximo ou de mínimo."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO02",
      "descricao": "Desenvolver algoritmos de busca de valores extremos (máximo e mínimo) em conjuntos de dados e trajetórias de projéteis em jogos 2D."
    },
    "curriculoPE": "Currículo de Pernambuco: Aplicações em trajetórias balísticas e maximização de lucros em pequenos negócios locais.",
    "pilares": [
      "Abstração",
      "Decomposição",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Calcular as coordenadas do vértice V(xv, yv) e compreender o significado do ponto de máximo/mínimo; simular a trajetória parabólica de um objeto no Scratch.",
    "estrategiasSugeridas": "Criação de jogo simples no Scratch de arremesso de basquete onde a trajetória do objeto segue a função y = -a·x² + b·x.",
    "praticasRecomendadas": [
      "PRAT-11",
      "PRAT-13"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM1-03",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Progressões Aritméticas e Geométricas (PA e PG) e Loops",
    "unidadeTematica": "Álgebra e Funções",
    "habilidadeMatematica": {
      "codigo": "EM13MAT501",
      "descricao": "Investigar relações entre termos de progressões aritméticas e geométricas com foco na identificação de padrões de crescimento (linear vs exponencial) e cálculo de somas de termos."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO02",
      "descricao": "Implementar laços de repetição (for e while) com acumuladores de soma e incremento multiplicativo/aditivo para geração de sequências numéricas."
    },
    "curriculoPE": "Currículo de Pernambuco: Diferenciar o crescimento linear do exponencial em fenômenos biológicos (reprodução bacteriana, epidemias) e na economia.",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões",
      "Decomposição"
    ],
    "objetivosSugeridos": "Associar a fórmula do termo geral de uma PA/PG aos acumuladores e variáveis contadoras de laços de repetição; calcular somas de termos finitos através de algoritmos iterativos.",
    "estrategiasSugeridas": "Comparação entre o problema dos grãos de trigo no tabuleiro de xadrez (PG de razão 2) e um aumento fixo diário (PA) implementados em código.",
    "praticasRecomendadas": [
      "PRAT-05",
      "PRAT-14"
    ],
    "eixos": [
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM1-04",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Matemática Financeira e Juros Compostos com Planilhas",
    "unidadeTematica": "Matemática Financeira",
    "habilidadeMatematica": {
      "codigo": "EM13MAT203",
      "descricao": "Aplicar conceitos de matemática financeira (juros simples e compostos, descontos, inflação) para planejar investimentos, compras parceladas e gestão do orçamento familiar."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO05",
      "descricao": "Utilizar ferramentas digitais de cálculo automatizado e simulações para tomada de decisões econômicas éticas, consumo responsável e letramento financeiro-digital."
    },
    "curriculoPE": "Currículo de Pernambuco: Investigar o impacto das taxas de juros de cartão de crédito e financiamentos habitacionais na renda das famílias pernambucanas.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Calcular montantes de juros compostos M = C(1 + i)^t; construir simuladores em planilhas que comparam compras parceladas com juros embutidos vs compras à vista com desconto.",
    "estrategiasSugeridas": "Oficina no Google Planilhas construindo a 'Planilha de Planejamento de Sonhos e Prevenção de Dívidas'.",
    "praticasRecomendadas": [
      "PRAT-14",
      "PRAT-12"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM2-01",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Matrizes, Operações e Processamento de Imagens Digitais",
    "unidadeTematica": "Álgebra e Funções",
    "habilidadeMatematica": {
      "codigo": "EM13MAT202",
      "descricao": "Planejar e executar pesquisa amostral sobre questões relevantes, utilizando matrizes, tabelas e gráficos para sintetizar e comparar conjuntos multivariados de dados."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO03",
      "descricao": "Compreender e manipular estruturas de dados bidimensionais (matrizes/arrays) como fundamento do armazenamento e processamento de imagens digitais (mapas de bits e escala de cinza/RGB)."
    },
    "curriculoPE": "Currículo de Pernambuco: Compreender a álgebra matricial não como mera técnica de cálculo mecânico, mas como linguagem da computação gráfica e da inteligência artificial.",
    "pilares": [
      "Abstração",
      "Decomposição",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Identificar uma imagem digital como uma matriz bidimensional de pixels com valores numéricos de intensidade; aplicar operações de adição de matrizes (aumento de brilho) e multiplicação por escalar.",
    "estrategiasSugeridas": "Atividade desplugada com matriz 8x8 de papel para decodificar um emoji pixelado; manipulação no computador de filtros simples de imagem.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-12"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM2-02",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Análise Combinatória e Segurança Criptográfica de Senhas",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT310",
      "descricao": "Resolver e elaborar problemas de contagem envolvendo agrupamentos (combinações simples, arranjos e permutações) com ou sem repetição, justificando as técnicas mobilizadas."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO04",
      "descricao": "Analisar a complexidade temporal de algoritmos (crescimento fatorial/exponencial) e a segurança de senhas e chaves criptográficas."
    },
    "curriculoPE": "Currículo de Pernambuco: Relacionar a combinatória à cidadania digital, segurança de senhas na internet e prevenção contra ataques de força bruta.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Calcular o número de permutações e arranjos possíveis para diferentes tamanhos de senhas; avaliar o tempo computacional para quebrar senhas de 4, 6 e 8 caracteres.",
    "estrategiasSugeridas": "Laboratório de 'Engenharia de Senhas': cálculo manual das possibilidades e uso de simulador interativo de segurança digital.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-06"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM2-03",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Trigonometria na Circunferência e Animação Gráfica 2D",
    "unidadeTematica": "Geometria e Trigonometria",
    "habilidadeMatematica": {
      "codigo": "EM13MAT102",
      "descricao": "Analisar tabelas, gráficos e amostras de dados estatísticos associados a fenômenos periódicos (como ondas sonoras, marés e ciclos biológicos) utilizando funções trigonométricas (seno e cosseno)."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO06",
      "descricao": "Utilizar funções trigonométricas (seno e cosseno) para controlar o movimento circular, oscilatório e trajetórias angulares de atores em jogos e animações."
    },
    "curriculoPE": "Currículo de Pernambuco: Estudo das tábuas de marés do Porto do Recife e movimentação do mar em Suape através de curvas periódicas.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender o ciclo trigonométrico e usar seno e cosseno para calcular posições x = R·cos(θ) e y = R·sen(θ) de um objeto em rotação contínua.",
    "estrategiasSugeridas": "Programar um ponteiro de relógio analógico funcional no Scratch usando seno e cosseno para as posições.",
    "praticasRecomendadas": [
      "PRAT-10",
      "PRAT-11"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM3-01",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Probabilidade Clássica, Regra do Produto e Eventos Independentes",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT311",
      "descricao": "Identificar e calcular a probabilidade de eventos aleatórios simples e compostos (união, interseção e eventos complementares), aplicando o princípio aditivo e multiplicativo."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO01",
      "descricao": "Construir modelos algorítmicos e simulações estocásticas com números pseudoaleatórios para testar hipóteses probabilísticas em larga escala."
    },
    "curriculoPE": "Currículo de Pernambuco: Utilizar a probabilidade para interpretação de riscos em seguros, medicina diagnóstica, jogos de azar e tomada de decisões sob incerteza.",
    "pilares": [
      "Algoritmos",
      "Abstração",
      "Decomposição"
    ],
    "objetivosSugeridos": "Dominar a razão entre casos favoráveis e casos possíveis P(A) = n(A)/n(S); utilizar a regra do contra (evento complementar) e a regra do produto; simular experimentos compostos via computador.",
    "estrategiasSugeridas": "Roteiro de lousa com fórmulas intuitivas ('o que eu quero / tudo o que pode acontecer' e 'regra do contra'), seguido de um simulador de Monte Carlo no Scratch de 3 moedas simultâneas.",
    "praticasRecomendadas": [
      "PRAT-09",
      "PRAT-08"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM3-02",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Probabilidade Condicional e Classificadores Bayesianos",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT312",
      "descricao": "Resolver e elaborar problemas que envolvam o cálculo de probabilidade condicional, reconhecendo a redução do espaço amostral e aplicando a regra da probabilidade total."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO02",
      "descricao": "Modelar filtros de classificação probabilística (algoritmo Naive Bayes) e filtros anti-spam baseados em probabilidade condicional de ocorrência de palavras."
    },
    "curriculoPE": "Currículo de Pernambuco: Analisar testes rápidos de saúde pública (falsos positivos e falsos negativos) com redução de espaço amostral e tabelas de contingência.",
    "pilares": [
      "Abstração",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Calcular a probabilidade condicional P(A|B) = P(A ∩ B)/P(B) compreendendo a redução intuitiva do espaço amostral ('quem eu quero dentro do grupo / total do grupo'); compreender como filtros de inteligência artificial classificam spam.",
    "estrategiasSugeridas": "Tabela de contingência no quadro com dados hipotéticos de 1.000 pacientes em teste de diagnóstico, calculando a chance real de ter a doença diante de resultado positivo.",
    "praticasRecomendadas": [
      "PRAT-06",
      "PRAT-09"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM3-03",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Geometria Espacial: Poliedros, Corpos Redondos e Modelagem 3D",
    "unidadeTematica": "Geometria e Trigonometria",
    "habilidadeMatematica": {
      "codigo": "EM13MAT401",
      "descricao": "Converter representações de figuras bidimensionais e tridimensionais, articulando noções de projeção ortogonal, vistas e planificações de sólidos geométricos."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO04",
      "descricao": "Compreender como objetos tridimensionais são representados em computação gráfica através de malhas de polígonos (vértices, arestas e faces)."
    },
    "curriculoPE": "Currículo de Pernambuco: Relação de Euler e cálculo de volumes em cisternas, caixas d'água e embalagens industriais do Polo de Suape.",
    "pilares": [
      "Abstração",
      "Decomposição"
    ],
    "objetivosSugeridos": "Calcular volumes e áreas totais de prismas e cilindros; explorar a modelagem 3D digital com softwares de geometria espacial dinâmica (GeoGebra 3D).",
    "estrategiasSugeridas": "Construção de sólidos geométricos com canudos e barbante, seguida de visualização tridimensional interativa no GeoGebra 3D.",
    "praticasRecomendadas": [
      "PRAT-07",
      "PRAT-11"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EM3-04",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Estatística Inferencial, Desvio Padrão e Ciência de Dados",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT504",
      "descricao": "Investigar processos de tomada de decisão baseados em dados estatísticos, calculando e interpretando medidas de dispersão (amplitude, variância e desvio padrão)."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO04",
      "descricao": "Processar grandes conjuntos de dados reais utilizando scripts e planilhas para identificar anomalias, tendências e calcular métricas de dispersão."
    },
    "curriculoPE": "Currículo de Pernambuco: Análise de indicadores educacionais (IDEPE, SAEPE, IDEB) e índices socioeconômicos dos municípios de Pernambuco.",
    "pilares": [
      "Abstração",
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Calcular média e desvio padrão em planilhas eletrônicas; compreender que conjuntos com a mesma média podem ter comportamentos e riscos completamente distintos.",
    "estrategiasSugeridas": "Comparação entre duas turmas fictícias com a mesma média em Matemática, calculando a variância e desvio padrão para avaliar a homogeneidade da aprendizagem.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EJA-01",
    "etapa": "EJA",
    "ano": "EJA Fundamental",
    "conteudo": "Operações Aritméticas e Orçamento Básico no Comércio",
    "unidadeTematica": "Matemática do Cotidiano",
    "habilidadeMatematica": {
      "codigo": "EF06MA03",
      "descricao": "Resolver problemas envolvendo cálculos com números naturais e racionais em contextos de compras, troco e controle de caixa."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO01",
      "descricao": "Estruturar procedimentos passo a passo para verificação de cálculos e conferência de notas fiscais e comprovantes digitais."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Valorizar os saberes do trabalhador na feira livre, construção civil e comércio de bairro.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Operar com cálculos aritméticos fundamentais com dinheiro e desenvolver algoritmos mentais de conferência rápida de troco e notas fiscais.",
    "estrategiasSugeridas": "Simulação de caixa de mercadinho com confecção de comandas e conferência automatizada de totais.",
    "praticasRecomendadas": [
      "PRAT-01",
      "PRAT-14"
    ],
    "eixos": [
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EJA-02",
    "etapa": "EJA",
    "ano": "EJA Fundamental",
    "conteudo": "Medidas de Terreno, Área de Piso e Otimização de Obras",
    "unidadeTematica": "Geometria e Medidas",
    "habilidadeMatematica": {
      "codigo": "EF08MA19",
      "descricao": "Resolver e elaborar problemas que envolvam medidas de área de figuras geométricas planas (retângulos, triângulos) e volume de blocos retangulares em reformas."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO03",
      "descricao": "Compreender como algoritmos de roteamento e mapas digitais (Google Maps/GPS) utilizam grafos e ponderação de distâncias para encontrar rotas eficientes."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Integrar a realidade espacial do estudante trabalhador (itinerários de ônibus na RMR e cálculos de reformas civis).",
    "pilares": [
      "Decomposição",
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Calcular áreas para orçamentos de cerâmicas e tintas; compreender princípios de rotas de entrega por aplicativos de transporte.",
    "estrategiasSugeridas": "Planta baixa de um cômodo no papel quadriculado calculando desperdício e quantidade exata de caixas de piso.",
    "praticasRecomendadas": [
      "PRAT-03",
      "PRAT-01"
    ],
    "eixos": [
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EJA-03",
    "etapa": "EJA",
    "ano": "EJA Médio",
    "conteudo": "Matemática Financeira, Juros de Cartão e Planilha Doméstica",
    "unidadeTematica": "Matemática Financeira",
    "habilidadeMatematica": {
      "codigo": "EM13MAT203",
      "descricao": "Aplicar conceitos de matemática financeira (juros simples e compostos, descontos, inflação) para planejar investimentos, compras parceladas e gestão do orçamento familiar."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO05",
      "descricao": "Utilizar ferramentas digitais de cálculo automatizado e planilhas para tomada de decisões econômicas éticas, consumo responsável e letramento financeiro-digital."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Empoderamento financeiro das famílias trabalhadoras diante das armadilhas do crédito rotativo e consignado.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Montar uma planilha automatizada com receitas e despesas familiares e comparar o custo real de compras parceladas com juros.",
    "estrategiasSugeridas": "Análise de faturas reais de cartão de crédito e contas de energia elétrica, simulando opções de pagamento.",
    "praticasRecomendadas": [
      "PRAT-14",
      "PRAT-12"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EJA-04",
    "etapa": "EJA",
    "ano": "EJA Médio",
    "conteudo": "Leitura Crítica de Gráficos de Notícias e Fake News Numéricas",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT202",
      "descricao": "Interpretar criticamente dados estatísticos divulgados em meios de comunicação, analisando a fidedignidade de escalas, gráficos truncados e amostragens."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO04",
      "descricao": "Identificar manipulações digitais em gráficos e desinformação na internet, aplicando critérios lógicos de checagem de fontes e consistência de dados."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Cidadania digital e combate à desinformação sobre saúde, eleições e economia.",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Identificar eixos truncados e gráficos com proporções enganosas veiculados na TV ou internet; reconstruir os gráficos corretamente.",
    "estrategiasSugeridas": "Oficina de checagem de notícias: os estudantes analisam manchetes com gráficos e corrigem a escala visual no Google Planilhas.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-06"
    ],
    "eixos": [
      "Mundo Digital",
      "Cultura Digital",
      "Pensamento Computacional"
    ]
  },
  {
    "id": "CURR-EF7-DIG01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Representação Digital de Caracteres (Tabela ASCII) e Binário",
    "unidadeTematica": "Números",
    "habilidadeMatematica": {
      "codigo": "EF07MA01",
      "descricao": "Resolver e elaborar problemas com números naturais, envolvendo as noções de divisor e múltiplo e sistemas de representação."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO01",
      "descricao": "Compreender como símbolos alfanuméricos e caracteres são codificados em valores numéricos decimais e binários na memória do computador (Mundo Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Transição dos códigos secretos manuais para a codificação de texto padrão internacional utilizada em celulares e computadores.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender que cada letra digitada no teclado corresponde a um número inteiro (Tabela ASCII) e convertê-la em binário de 8 bits (1 byte).",
    "estrategiasSugeridas": "Atividade desplugada onde os alunos codificam seus nomes usando a tabela ASCII e transmitem mensagens secretas em cartões binários.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-18"
    ]
  },
  {
    "id": "CURR-EF8-CUL01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Cidadania Digital, Redes Sociais e Pesquisa Amostral",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF08MA23",
      "descricao": "Avaliar a adequação de diferentes técnicas amostrais para a elaboração de pesquisas de opinião, consumo e comportamento social."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO04",
      "descricao": "Analisar o funcionamento dos algoritmos de recomendação em plataformas digitais e os impactos das bolhas de informação na sociedade (Cultura Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Debater o tempo de tela, a pegada digital e a privacidade de dados de jovens e adolescentes nas redes sociais.",
    "eixos": [
      "Cultura Digital",
      "Mundo Digital"
    ],
    "pilares": [
      "Abstração",
      "Decomposição"
    ],
    "objetivosSugeridos": "Elaborar pesquisa estatística escolar sobre o tempo de uso de redes sociais e avaliar criticamente como os algoritmos retêm a atenção dos usuários.",
    "estrategiasSugeridas": "Coleta de dados anônimos na turma e tabulação no Google Planilhas, discutindo a relação entre matemática, estatística e saúde mental digital.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-16"
    ]
  },
  {
    "id": "CURR-EF9-DIG01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Topologia de Redes, Grafos e Roteamento de Pacotes de Dados",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF09MA14",
      "descricao": "Aplicar o Teorema de Pitágoras e relações métricas para cálculo de distâncias entre pontos no espaço e malhas de conexão."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO02",
      "descricao": "Compreender como a infraestrutura de redes e cabos submarinos transporta dados fragmentados em pacotes através da rota mais rápida (Mundo Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Estudo da chegada de cabos de fibra óptica submarinos no litoral do Nordeste e a infraestrutura física da internet.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Modelar uma rede de computadores escolar como um grafo ponderado e calcular a rota de envio de pacotes com menor distância total.",
    "estrategiasSugeridas": "Simulação desplugada de roteamento de pacotes na sala de aula: alunos representam roteadores que repassam cartas pelo caminho mais rápido.",
    "praticasRecomendadas": [
      "PRAT-19",
      "PRAT-01"
    ]
  },
  {
    "id": "CURR-EF9-CUL01",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Combate à Desinformação: Checagem de Gráficos Manipulados",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EF09MA21",
      "descricao": "Analisar e identificar, em gráficos divulgados pela mídia, os elementos que podem induzir a erros de leitura, como escalas inadequadas, omissão de legendas e distorções visuais."
    },
    "habilidadeComputacao": {
      "codigo": "EF09CO04",
      "descricao": "Desenvolver postura ética, analítica e responsável na verificação de fontes de informação digital e combate às fake news visuais (Cultura Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Formação para a cidadania midiática: análise de notícias e posts de redes sociais com gráficos enganosos.",
    "eixos": [
      "Cultura Digital",
      "Mundo Digital"
    ],
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Identificar falhas intencionais em gráficos da mídia (eixo truncado, áreas desproporcionais) e recriar o gráfico com fidedignidade em planilhas digitais.",
    "estrategiasSugeridas": "Oficina 'Detetives de Dados': os estudantes analisam manchetes reais e reconstroem os dados no Google Planilhas corrigindo a distorção.",
    "praticasRecomendadas": [
      "PRAT-16",
      "PRAT-12"
    ]
  },
  {
    "id": "CURR-EM1-CUL01",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Educação Financeira Digital: Crédito Rotativo, Parcelamentos e Apostas Online (Bets)",
    "unidadeTematica": "Matemática Financeira",
    "habilidadeMatematica": {
      "codigo": "EM13MAT203",
      "descricao": "Aplicar conceitos de matemática financeira (juros simples e compostos, taxas de inflação, amortização) para analisar investimentos e compras a prazo."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO05",
      "descricao": "Compreender os mecanismos algorítmicos de aplicativos financeiros, carteiras digitais e plataformas de apostas online, avaliando riscos e impactos na Cultura Digital."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Conscientização contra o superendividamento de jovens por apostas online e uso compulsivo do cartão de crédito.",
    "eixos": [
      "Cultura Digital",
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Calcular o impacto dos juros compostos em dívidas de aplicativos financeiros e demonstrar matematicamente por que a probabilidade matemática das plataformas de apostas favorece estritamente a banca.",
    "estrategiasSugeridas": "Simulação de investimentos vs dívidas no Google Planilhas e cálculo da esperança matemática negativa de jogos de azar e apostas.",
    "praticasRecomendadas": [
      "PRAT-14",
      "PRAT-09"
    ]
  },
  {
    "id": "CURR-EM2-CUL01",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Criptografia RSA, Chaves Públicas e Números Primos Gigantes",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT310",
      "descricao": "Resolver problemas de contagem e teoria dos números aplicados à segurança da informação e transmissão sigilosa de dados."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO04",
      "descricao": "Compreender os princípios de funcionamento da criptografia assimétrica (chaves pública e privada) que protege transações bancárias e mensagens instantâneas (Mundo e Cultura Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): Segurança da informação, proteção de dados pessoais e privacidade de comunicações governamentais e civis.",
    "eixos": [
      "Cultura Digital",
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "pilares": [
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Compreender como a multiplicação de dois números primos é fácil para o computador, mas a fatoração do produto é computacionalmente inviável, sustentando o algoritmo RSA.",
    "estrategiasSugeridas": "Simulação simplificada com primos pequenos (p=3, q=11) calculando chaves de cifragem e decifragem.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-17"
    ]
  },
  {
    "id": "CURR-EM3-CUL01",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Inteligência Artificial, Viés Algorítmico e Ética na Cultura Digital",
    "unidadeTematica": "Estatística e Probabilidade",
    "habilidadeMatematica": {
      "codigo": "EM13MAT312",
      "descricao": "Resolver e elaborar problemas de probabilidade condicional e probabilidade total para tomada de decisões fundamentadas."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO02",
      "descricao": "Compreender como modelos de Inteligência Artificial utilizam probabilidades e estatística para aprender padrões, refletindo criticamente sobre viés algorítmico e discriminação de dados (Cultura Digital)."
    },
    "curriculoPE": "Currículo de Pernambuco (CEDIM-PE): O impacto da Inteligência Artificial no mundo do trabalho, na educação e nas decisões automatizadas da sociedade contemporânea.",
    "eixos": [
      "Cultura Digital",
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Compreender a relação entre probabilidade condicional e aprendizado de máquina; identificar casos reais de algoritmos de recrutamento ou reconhecimento facial com viés discriminatório.",
    "estrategiasSugeridas": "Debate em mesa redonda sobre os limites éticos da IA, com análise matemática de como bases de dados históricas desiguais geram previsões enviesadas.",
    "praticasRecomendadas": [
      "PRAT-20",
      "PRAT-06"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULO_DATA };
}
