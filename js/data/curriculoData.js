// Base de Dados Curricular: BNCC Matemática + BNCC Computação + Currículo de Pernambuco
// CompMath - Desenvolvido para o contexto de professores da Educação Básica e PROFCOMP/UFRPE

const CURRICULO_DATA = [
  {
    "id": "CURR-601",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Múltiplos, Divisores e Algoritmo de Euclides (MDC)",
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
    "estrategiasSugeridas": "Iniciar com atividade desplugada de divisões sucessivas utilizando tiras de papel quadriculado de comprimentos distintos (representando os dois números). Em seguida, traduzir o procedimento para um pseudocódigo/fluxograma simples no caderno ou no Scratch.",
    "praticasRecomendadas": [
      "PRAT-02",
      "PRAT-01"
    ]
  },
  {
    "id": "CURR-602",
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
    "estrategiasSugeridas": "Atividade de 'Batalha Naval Algorítmica' na malha quadriculada da sala, seguida de um teste no Scratch movimentando o ator para posições (x, y) específicas através de comandos de evento.",
    "praticasRecomendadas": [
      "PRAT-01",
      "PRAT-10"
    ]
  },
  {
    "id": "CURR-603",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudo": "Fluxogramas e Algoritmos para Resolução de Problemas",
    "unidadeTematica": "Álgebra",
    "habilidadeMatematica": {
      "codigo": "EF06MA14",
      "descricao": "Reconhecer que a relação de igualdade matemática não se altera ao adicionar, subtrair, multiplicar ou dividir os seus dois membros por um mesmo número e utilizar essa noção para determinar valores desconhecidos na resolução de problemas."
    },
    "habilidadeComputacao": {
      "codigo": "EF06CO02",
      "descricao": "Representar algoritmos utilizando diferentes linguagens, como linguagem natural estruturada e fluxogramas de processos com blocos de decisão."
    },
    "curriculoPE": "Currículo de Pernambuco: Desenvolver o raciocínio indutivo e dedutivo na representação de sequências lógicas e inversão de operações aritméticas.",
    "pilares": [
      "Algoritmos",
      "Decomposição"
    ],
    "objetivosSugeridos": "Modelar o processo de balanceamento de balanças de dois pratos (princípio da equivalência) em forma de fluxograma condicional com tomada de decisão.",
    "estrategiasSugeridas": "Dinâmica em duplas com cartões de instruções lógicas 'SE membro esquerdo > membro direito ENTÃO subtrair valor'.",
    "praticasRecomendadas": [
      "PRAT-03",
      "PRAT-15"
    ]
  },
  {
    "id": "CURR-701",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Números Inteiros, Reta Numérica e Operações",
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
    "objetivosSugeridos": "Compreender o conceito de variável e atualização de estado numérico positivo/negativo através do modelo de pontuação de jogo ou saldo financeiro.",
    "estrategiasSugeridas": "Criação de um placar eletrônico desplugado com fichas ou simulação no Scratch onde o personagem ganha ou perde pontos ao desviar de obstáculos.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-09"
    ]
  },
  {
    "id": "CURR-702",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Transformações Geométricas, Simetrias e Rotações",
    "unidadeTematica": "Geometria",
    "habilidadeMatematica": {
      "codigo": "EF07MA19",
      "descricao": "Realizar transformações de figuras geométricas no plano cartesiano (translação, reflexão e rotação), identificando as características que não se alteram (medidas de lados e ângulos) e as que se alteram."
    },
    "habilidadeComputacao": {
      "codigo": "EF07CO03",
      "descricao": "Aplicar transformações gráficas e instruções de repetição e angulação em ambientes de programação visual ou textual para a construção de padrões geométricos."
    },
    "curriculoPE": "Currículo de Pernambuco: Valorizar a geometria das artes visuais, do artesanato pernambucano (como o xilogravura e o barro de Caruaru) e padrões de ladrilhamento.",
    "pilares": [
      "Reconhecimento de Padrões",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Desenvolver algoritmos que desenhem polígonos regulares e padrões de mandalas/ladrilhos no plano utilizando repetições e rotação angular calculada (360° / n).",
    "estrategiasSugeridas": "Atividade com Scratch (módulo Caneta / Pen) ou Python Turtle para programar a tartaruga para desenhar triângulos, quadrados, pentágonos e padrões simétricos de azulejos.",
    "praticasRecomendadas": [
      "PRAT-10",
      "PRAT-07"
    ]
  },
  {
    "id": "CURR-703",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano",
    "conteudo": "Equações Polinomiais de 1º Grau e Variáveis",
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
    ]
  },
  {
    "id": "CURR-801",
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
    "estrategiasSugeridas": "Atividade desplugada de elaboração de um 'Chatbot de Papel' (árvore de diálogo e tomada de decisão) calculando o total de combinações possíveis em cada nível da árvore.",
    "praticasRecomendadas": [
      "PRAT-06",
      "PRAT-09"
    ]
  },
  {
    "id": "CURR-802",
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
    "estrategiasSugeridas": "Criação de um mini-laboratório de Ciência de Dados com a turma, analisando os hábitos de estudo ou tempo de tela dos estudantes através do Google Planilhas.",
    "praticasRecomendadas": [
      "PRAT-12",
      "PRAT-14"
    ]
  },
  {
    "id": "CURR-803",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "8º Ano",
    "conteudo": "Notação Científica e Representação Digital de Informações",
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
    "objetivosSugeridos": "Compreender as potências de base 10 e base 2 como fundamento da compressão e dimensionamento do armazenamento de arquivos de áudio, imagem e vídeo.",
    "estrategiasSugeridas": "Cálculo do tamanho de uma imagem de 1 megapixel descompactada versus compactada e conversão entre ordens de grandeza de bits/bytes e potências de dez.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-12"
    ]
  },
  {
    "id": "CURR-901",
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
    ]
  },
  {
    "id": "CURR-902",
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
    "objetivosSugeridos": "Estruturar o algoritmo completo da fórmula de Bhaskara, mapeando os 3 casos possíveis do discriminante (Δ > 0: duas raízes reais distintas; Δ = 0: uma raiz real dupla; Δ < 0: nenhuma raiz real).",
    "estrategiasSugeridas": "Construção de fluxograma no quadro com testes manuais de mesa; programação do solucionador automático de equações de segundo grau com mensagens de retorno claras.",
    "praticasRecomendadas": [
      "PRAT-13",
      "PRAT-03"
    ]
  },
  {
    "id": "CURR-903",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "9º Ano",
    "conteudo": "Probabilidade e Simulação Computacional da Lei dos Grandes Números",
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
    "objetivosSugeridos": "Calcular probabilidades teóricas e confrontá-las com simulações de 10, 100, 1.000 e 10.000 lançamentos de moeda ou dado no computador, constatando empiricamente a Lei dos Grandes Números.",
    "estrategiasSugeridas": "Início com 30 lançamentos manuais na turma (registrados no quadro). Em seguida, execução do projeto Scratch de simulação com laço 'Repita 1000 vezes' com gráfico de barras ao vivo.",
    "praticasRecomendadas": [
      "PRAT-09",
      "PRAT-08"
    ]
  },
  {
    "id": "CURR-101",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Função Afim, Taxa de Variação e Gráficos Paramétricos",
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
    ]
  },
  {
    "id": "CURR-102",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM",
    "conteudo": "Progressões Aritméticas e Geométricas (PA e PG) e Laços de Repetição",
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
    "estrategiasSugeridas": "Comparação entre o problema clássico dos grãos de trigo no tabuleiro de xadrez (PG de razão 2) e um aumento fixo diário (PA), implementando ambos em código para comparar tempos de explosão numérica.",
    "praticasRecomendadas": [
      "PRAT-05",
      "PRAT-14"
    ]
  },
  {
    "id": "CURR-201",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Matrizes, Operações e Processamento de Imagens Digitais",
    "unidadeTematica": "Álgebra Linear e Geometria",
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
    "estrategiasSugeridas": "Atividade desplugada com matriz 8x8 de papel para decodificar um emoji pixelado; manipulação no computador de filtros simples de imagem (inversão de cores como complemento numérico).",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-12"
    ]
  },
  {
    "id": "CURR-202",
    "etapa": "Ensino Médio",
    "ano": "2º Ano EM",
    "conteudo": "Análise Combinatória e Complexidade de Algoritmos",
    "unidadeTematica": "Probabilidade e Estatística",
    "habilidadeMatematica": {
      "codigo": "EM13MAT310",
      "descricao": "Resolver e elaborar problemas de contagem envolvendo agrupamentos (combinações simples, arranjos e permutações) com ou sem repetição, justificando as técnicas mobilizadas."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO04",
      "descricao": "Analisar a complexidade temporal de algoritmos (crescimento polinomial versus fatorial/exponencial) e a segurança de senhas e chaves criptográficas."
    },
    "curriculoPE": "Currículo de Pernambuco: Relacionar a combinatória à cidadania digital, segurança de senhas na internet e prevenção contra ataques de força bruta.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Calcular o número de permutações e arranjos possíveis para diferentes tamanhos de senhas; avaliar o tempo computacional necessário para quebrar uma senha de 4, 6 e 8 caracteres com diferentes alfabetos.",
    "estrategiasSugeridas": "Laboratório de 'Engenharia de Senhas': cálculo manual das possibilidades e uso de simulador interativo de segurança digital para demonstrar a eficácia de senhas longas com símbolos.",
    "praticasRecomendadas": [
      "PRAT-04",
      "PRAT-06"
    ]
  },
  {
    "id": "CURR-301",
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
    "estrategiasSugeridas": "Roteiro de lousa com fórmulas intuitivas ('o que eu quero / tudo o que pode acontecer' e 'regra do contra'), seguido de um simulador de Monte Carlo no Scratch de 3 moedas e dados simultâneos.",
    "praticasRecomendadas": [
      "PRAT-09",
      "PRAT-08"
    ]
  },
  {
    "id": "CURR-302",
    "etapa": "Ensino Médio",
    "ano": "3º Ano EM",
    "conteudo": "Probabilidade Condicional e Teorema de Bayes Simplificado",
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
    "objetivosSugeridos": "Calcular a probabilidade condicional P(A|B) = P(A ∩ B)/P(B) compreendendo a redução intuitiva do espaço amostral ('quem eu quero dentro do grupo / total do grupo'); compreender como filtros de inteligência artificial classificam mensagens como spam.",
    "estrategiasSugeridas": "Tabela de contingência no quadro com dados hipotéticos de 1.000 pacientes em teste de diagnóstico, calculando a chance real de ter a doença diante de resultado positivo; discussão sobre filtros de email.",
    "praticasRecomendadas": [
      "PRAT-06",
      "PRAT-09"
    ]
  },
  {
    "id": "CURR-EJA01",
    "etapa": "EJA",
    "ano": "EJA Médio",
    "conteudo": "Matemática Financeira, Juros e Orçamento Pessoal com Planilhas",
    "unidadeTematica": "Matemática e Mundo do Trabalho",
    "habilidadeMatematica": {
      "codigo": "EM13MAT203",
      "descricao": "Aplicar conceitos de matemática financeira (juros simples e compostos, descontos, inflação) para planejar investimentos, compras parceladas e gestão do orçamento familiar."
    },
    "habilidadeComputacao": {
      "codigo": "EM13CO05",
      "descricao": "Utilizar ferramentas digitais de cálculo automatizado e simulações para tomada de decisões econômicas éticas, consumo responsável e letramento financeiro-digital."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Valorizar os saberes prévios dos estudantes trabalhadores, conectando a teoria matemática ao controle financeiro doméstico e trabalhista.",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "objetivosSugeridos": "Desenvolver planilha eletrônica funcional com fórmulas automáticas de soma, subtração e cálculo de juros para comparar compras à vista versus a prazo com cartão de crédito.",
    "estrategiasSugeridas": "Oficina prática com Google Planilhas ou LibreOffice Calc para montar a 'Planilha de Sonhos e Orçamento', analisando taxas de juros reais cobradas pelo comércio varejista.",
    "praticasRecomendadas": [
      "PRAT-14",
      "PRAT-12"
    ]
  },
  {
    "id": "CURR-EJA02",
    "etapa": "EJA",
    "ano": "EJA Fundamental",
    "conteudo": "Grandezas, Medidas, Escala e Otimização de Rotas",
    "unidadeTematica": "Geometria e Medidas",
    "habilidadeMatematica": {
      "codigo": "EF08MA19",
      "descricao": "Resolver e elaborar problemas que envolvam medidas de área de figuras geométricas, perímetros e volumes de blocos retangulares, relacionando-os com situações cotidianas (reforma, plantio, transporte)."
    },
    "habilidadeComputacao": {
      "codigo": "EF08CO03",
      "descricao": "Compreender como algoritmos de roteamento e mapas digitais (Google Maps/GPS) utilizam grafos e ponderação de distâncias/tempos para encontrar o caminho mais curto."
    },
    "curriculoPE": "Currículo de Pernambuco (EJA): Integrar a realidade espacial do estudante trabalhador (itinerários de transporte coletivo na Região Metropolitana do Recife, cálculos de obras civis).",
    "pilares": [
      "Decomposição",
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "objetivosSugeridos": "Calcular áreas para orçamento de pisos e tintas; compreender os princípios de algoritmos de rota mais curta aplicados no cotidiano dos aplicativos de transporte.",
    "estrategiasSugeridas": "Planta baixa simplificada de uma casa no papel quadriculado, calculando materiais necessários, complementada com uma simulação desplugada do Algoritmo de Dijkstra para entrega de encomendas.",
    "praticasRecomendadas": [
      "PRAT-03",
      "PRAT-01"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULO_DATA };
}
