// Banco de Práticas Pedagógicas - CompMath v2.4
// Atividades com os 3 Eixos da BNCC Computação e Links de Tutoriais no YouTube

const PRATICAS_DATA = [
  {
    "id": "PRAT-01",
    "titulo": "Batalha Naval Algorítmica e Plano Cartesiano",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano e 7º Ano",
    "conteudoMatematico": "Plano Cartesiano, Coordenadas (x, y) e Localização Espacial",
    "pilarPrincipal": "Abstração",
    "pilares": [
      "Abstração",
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Folhas impressas com malhas quadriculadas de 10x10 (identificadas por eixos X e Y numéricos), lápis e borracha.",
    "objetivo": "Compreender a convenção de pares ordenados (x, y) no plano cartesiano e experimentar algoritmos de busca (varredura linear vs busca por quadrante).",
    "resumo": "Jogo adaptado de batalha naval em duplas onde os estudantes precisam registrar formalmente as coordenadas de tiro e documentar a estratégia algorítmica utilizada para encontrar os alvos.",
    "passoAPasso": [
      "1. Sensibilização (15 min): Apresentar como a tela de um smartphone ou computador identifica onde o dedo do usuário tocou usando eixos X (horizontal) e Y (vertical).",
      "2. Organização das Duplas (10 min): Cada aluno recebe duas grelhas quadriculadas (um 'Meu Território' com 5 navios posicionados e um 'Radar de Disparos').",
      "3. Partida com Regras Algorítmicas (40 min): Os alunos jogam em rodadas alternadas, anunciando em voz alta o par ordenado no formato '(x, y)'. A cada acerto ou erro, marcam na malha.",
      "4. Desafio de Otimização (20 min): Solicitar que cada dupla desenhe um fluxograma simples: 'Qual é o melhor método para varrer a grelha sem dar tiros aleatórios?' (Busca linear, diagonal ou em grade).",
      "5. Fechamento e Sistematização (15 min): Conectar a estratégia dos alunos com os algoritmos de busca utilizados por mecanismos computacionais e jogos."
    ],
    "dicasProfessor": "Ressaltar aos alunos o erro comum de inverter o eixo horizontal com o vertical: enfatizar que o primeiro número sempre corre no chão (X) e o segundo sobe no elevador (Y). Para turmas com alunos de baixa visão, utilizar tabuleiros em relevo ou com tampinhas de garrafa.",
    "rubricaAvaliacao": "Excelente: Identifica e plota sem erros os pares ordenados e expressa claramente a lógica algorítmica adotada. Bom: Plota coordenadas com poucos auxílios e compreende o eixo X e Y. Em desenvolvimento: Troca recorrentemente a ordem dos eixos.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Pensamento Computacional e Atividades Desplugadas",
      "canal": "Aprendiz 21",
      "url": "https://www.youtube.com/watch?v=mC_XR2ofn3o"
    }
  },
  {
    "id": "PRAT-02",
    "titulo": "O Desafio do MDC com o Algoritmo de Euclides Desplugado",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano",
    "conteudoMatematico": "Divisibilidade, Maior Divisor Comum (MDC) e Algoritmos",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "tempoEstimado": "1 a 2 aulas (50 a 100 min)",
    "materiais": "Tiras de papel quadriculado cortadas em comprimentos variados (ex: 42 cm e 18 cm, 36 cm e 24 cm), tesoura e régua.",
    "objetivo": "Compreender o Algoritmo de Euclides para obtenção do MDC através da sobreposição e divisão geométrica sucessiva, sistematizando a repetição em um fluxograma de controle.",
    "resumo": "Os estudantes utilizam tiras de papel para medir quantas vezes o comprimento menor cabe no maior. O pedaço restante vira a nova unidade de medida, repetindo-se até não haver resto.",
    "passoAPasso": [
      "1. Problematização (10 min): Como encontrar o maior tamanho de piso quadrado para ladrilhar uma sala de 42m por 18m sem quebrar peças?",
      "2. Manipulação com Tiras de Papel (30 min): Em grupos, alunos recebem a tira A (42 quadradinhos) e tira B (18 quadradinhos). Eles dobram a tira menor sobre a maior: cabe 2 vezes (36) e sobra 6. Agora testam quantas vezes a sobra 6 cabe em 18: cabe exatamente 3 vezes com sobra 0! O MDC é 6.",
      "3. Formalização Algorítmica (25 min): Montar no quadro o algoritmo em pseudocódigo: ENQUANTO (resto > 0) FAÇA: Dividir número maior pelo menor; o divisor antigo vira dividendo, e o resto vira o novo divisor.",
      "4. Teste de Mesa (20 min): Aplicar o mesmo algoritmo em cartelas com números maiores (ex: MDC entre 144 e 84).",
      "5. Conclusão (15 min): Discutir por que o computador prefere esse método à fatoração prima simultânea (complexidade muito menor)."
    ],
    "dicasProfessor": "Essa prática ilustra perfeitamente como um algoritmo concebido há mais de 2.300 anos continua sendo o mais eficiente para criptografia moderna em sistemas bancários.",
    "rubricaAvaliacao": "Excelente: Conclui a sobreposição física e traduz as operações em etapas de repetição condicional sem falhas. Bom: Realiza a parte física e calcula o MDC, com suporte na formalização do fluxograma.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Algoritmo de Euclides para MDC no papel",
      "canal": "Professor Damaceno",
      "url": "https://www.youtube.com/watch?v=aAGTcZshyrE"
    }
  },
  {
    "id": "PRAT-03",
    "titulo": "Labirinto Lógico com Operadores Booleanos e Condicionais",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental (Anos Finais) e EJA",
    "ano": "6º Ano ao 9º Ano e EJA",
    "conteudoMatematico": "Lógica Matemática, Conjuntos, Condicionais e Geometria Plana",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Abstração"
    ],
    "tempoEstimado": "1 aula (50 min)",
    "materiais": "Fita crepe para demarcar uma grade no chão da sala de aula (5x5 quadrados) e cartões com instruções lógicas (SE, SENÃO, E, OU, NÃO).",
    "objetivo": "Vivenciar o fluxo de controle algorítmico e os operadores lógicos através do movimento corporal em uma grade quadriculada.",
    "resumo": "Um estudante atua como 'Robô' (com olhos vendados ou instruído a apenas executar instruções literais) e outro como 'Programador', guiando-o pelo labirinto através de comandos precisos.",
    "passoAPasso": [
      "1. Preparação da Malha (10 min): Colocar obstáculos (mochilas ou cadeiras) e definir ponto de partida e chegada.",
      "2. Instrução das Regras (10 min): Comandos permitidos: 'Avance 1 passo', 'Gire 90° à direita', 'Gire 90° à esquerda', 'SE obstáculo à frente ENTÃO vire... SENÃO avance'.",
      "3. Execução em Rodízio (20 min): Alunos em trios alternam entre Programador, Robô e 'Depurador' (que anota se houve bug no comando).",
      "4. Debate de Fechamento (10 min): O que aconteceu quando uma instrução era ambígua? Como a precisão da linguagem matemática evita falhas de execução?"
    ],
    "dicasProfessor": "Excelente para introduzir o rigor da escrita matemática e preparar a turma para programação em Scratch ou Python. Ótimo também para descontrair turmas de EJA e criar vínculos.",
    "rubricaAvaliacao": "Excelente: Formula sequências lógicas precisas e depura instruções ambíguas. Bom: Compreende os condicionais SE/SENÃO e conduz o robô ao objetivo.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Pensamento Computacional e Programação Desplugada",
      "canal": "Matemática é Vida",
      "url": "https://www.youtube.com/watch?v=6L6aMJhJAiQ"
    }
  },
  {
    "id": "PRAT-04",
    "titulo": "Baralho Criptográfico de César e Aritmética Modular",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "7º Ano, 8º Ano e 2º Ano EM",
    "conteudoMatematico": "Operações com Números Inteiros, Resto da Divisão e Aritmética Modular",
    "pilarPrincipal": "Abstração",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões",
      "Algoritmos"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Discos de papelão concêntricos (Roda de César) para cada aluno, com letras de A a Z associadas aos números de 0 a 25.",
    "objetivo": "Compreender a cifra de César aplicando a fórmula matemática de cifragem C = (P + k) mod 26 e decifragem P = (C - k) mod 26, articulando matemática e segurança cibernética.",
    "resumo": "Os estudantes constroem uma roda de cifra para codificar e decodificar mensagens secretas, compreendendo como a aritmética modular fundamenta a segurança na internet.",
    "passoAPasso": [
      "1. Contexto Histórico e Cidadania Digital (15 min): Explicar como Júlio César enviava mensagens e como senhas e dados do WhatsApp trafegam com criptografia.",
      "2. Montagem da Roda de César (20 min): Alunos recortam dois círculos de tamanhos diferentes e prendem com um colchete/bailarina no centro.",
      "3. Desafio de Codificação (30 min): Escolher uma chave k (ex: k = 3). Escrever mensagens e codificá-las aplicando a soma modular. Trocar as mensagens codificadas com o colega.",
      "4. Ataque de Força Bruta (20 min): O que acontece quando não sabemos a chave k? Alunos testam as 25 chaves possíveis para quebrar o código (análise combinatória e tempo de processamento).",
      "5. Conexão Curricular (15 min): Demonstrar a fórmula matemática no quadro e como o computador executa o operador módulo (%) instantaneamente."
    ],
    "dicasProfessor": "Vincular a discussão ao perigo de usar senhas fracas ou curtas e a importância da criptografia de chave pública (RSA) que usa números primos gigantescos.",
    "rubricaAvaliacao": "Excelente: Aplica com autonomia a aritmética modular nas duas direções e compreende a lógica de segurança da informação. Bom: Consegue cifrar e decifrar usando a roda giratória.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional",
      "Cultura Digital"
    ],
    "videoYoutube": {
      "titulo": "Como Criptografar Mensagens com a Cifra de César",
      "canal": "TIChers",
      "url": "https://www.youtube.com/watch?v=KHryRU9vlkI"
    }
  },
  {
    "id": "PRAT-05",
    "titulo": "Torre de Hanói e a Lógica dos Padrões Recursivos",
    "tipo": "Desplugada",
    "etapa": "Ensino Médio",
    "ano": "1º Ano EM e 2º Ano EM",
    "conteudoMatematico": "Progressão Geométrica, Funções Exponenciais e Sequências",
    "pilarPrincipal": "Reconhecimento de Padrões",
    "pilares": [
      "Reconhecimento de Padrões",
      "Decomposição",
      "Algoritmos"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Kits de Torre de Hanói (em madeira, EVA ou cartolina com 3 pinos e 3 a 6 discos de tamanhos distintos) para pequenos grupos.",
    "objetivo": "Identificar o padrão de crescimento exponencial no número mínimo de movimentos da Torre de Hanói (M(n) = 2^n - 1) e entender a formulação de algoritmos recursivos.",
    "resumo": "Estudantes resolvem a Torre de Hanói começando com 1, 2, 3 e 4 discos, tabelam o número mínimo de movimentos e deduzem a fórmula exponencial e a relação de recorrência.",
    "passoAPasso": [
      "1. A Lenda dos Monges de Brahma (10 min): Apresentar a história dos 64 discos de ouro e o cálculo de bilhões de anos para terminar.",
      "2. Experimentação Prática e Registro em Tabela (35 min): Grupos testam com 1 disco (1 movimento), 2 discos (3 movimentos), 3 discos (7 movimentos), 4 discos (15 movimentos).",
      "3. Dedução Matemática (25 min): Observar o padrão: a cada novo disco adicionado, o número de movimentos é o dobro do anterior mais 1: M(n) = 2 · M(n-1) + 1 = 2^n - 1.",
      "4. A Lógica Recursiva (20 min): Para mover N discos da haste A para a haste C: (1) Mover N-1 discos de A para B; (2) Mover o maior disco de A para C; (3) Mover N-1 discos de B para C.",
      "5. Fechamento (10 min): Conexão com funções exponenciais do ENEM e conceitos de recursão em ciência da computação."
    ],
    "dicasProfessor": "Excelente gancho para explicar por que problemas exponenciais se tornam intratáveis para computadores quando o tamanho N cresce além de certo limite.",
    "rubricaAvaliacao": "Excelente: Tabela dados, identifica o padrão 2^n - 1 e explica verbalmente a chamada recursiva. Bom: Resolve a torre até 4 discos e preenche a tabela com auxílio.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Torre de Hanói - Regras e Fórmula Exponencial",
      "canal": "Professor Douglas Maioli",
      "url": "https://www.youtube.com/watch?v=Q2BooYpqS6g"
    }
  },
  {
    "id": "PRAT-06",
    "titulo": "Árvores de Probabilidade e Diagramas de Decisão",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "8º Ano e 3º Ano EM",
    "conteudoMatematico": "Probabilidade Composta, Princípio Multiplicativo e Espaço Amostral",
    "pilarPrincipal": "Decomposição",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "tempoEstimado": "1 a 2 aulas (50 a 100 min)",
    "materiais": "Papel sulfite, canetas coloridas e moedas para testes.",
    "objetivo": "Construir diagramas de árvore para mapear exaustivamente espaços amostrais de experimentos aleatórios compostos e relacionar a estrutura a árvores de decisão em computação.",
    "resumo": "Estudantes mapeiam o lançamento de três moedas ou o resultado de diagnósticos médicos em ramificações binárias, multiplicando as probabilidades ao longo dos galhos.",
    "passoAPasso": [
      "1. Apresentação do Problema (15 min): Um casal quer ter 3 filhos. Qual a chance de nascer exatamente 2 meninas? Lançar uma moeda 3 vezes simula esse processo?",
      "2. Construção da Árvore de Possibilidades (30 min): Alunos desenham a raiz, abrem 2 galhos (M e F), depois 4 galhos, depois 8 folhas finais (MMM, MMF, MFM, MFF, FMM, FMF, FFM, FFF).",
      "3. Atribuição de Pesos de Probabilidade (20 min): Cada galho recebe sua chance (1/2). Multiplica-se o caminho até a folha: (1/2) × (1/2) × (1/2) = 1/8. Soma-se os casos favoráveis: 3/8 = 37,5%.",
      "4. Extensão para Árvore de Decisão Computacional (20 min): Como o algoritmo de recomendação da Netflix ou filtro de spam utiliza perguntas em árvore para classificar usuários e mensagens?",
      "5. Sistematização (15 min): Regra de ouro da probabilidade: 'Multiplica nos galhos (E) e soma nas folhas (OU)'."
    ],
    "dicasProfessor": "Utilizar a analogia direta com as lousas práticas de probabilidade: a árvore substitui a contagem desorganizada por um método visual estruturado à prova de erros.",
    "rubricaAvaliacao": "Excelente: Desenha a árvore completa, calcula as probabilidades parciais e totais e relaciona com árvores de decisão. Bom: Monta a árvore e conta os casos favoráveis.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Probabilidade: Diagrama de Árvore e Princípio Multiplicativo",
      "canal": "Gis com Giz Matemática",
      "url": "https://www.youtube.com/watch?v=MK4cSSdNTHo"
    }
  },
  {
    "id": "PRAT-07",
    "titulo": "Origami Geométrico e Algoritmos Passo a Passo",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano e 7º Ano",
    "conteudoMatematico": "Geometria Plana, Polígonos, Ângulos e Frações",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "tempoEstimado": "1 aula (50 min)",
    "materiais": "Folhas de papel coloridas quadradas (15x15 cm ou 20x20 cm).",
    "objetivo": "Experimentar a execução estrita e determinística de um algoritmo através de dobras de origami, identificando propriedades de simetria, bissetrizes e ângulos notáveis.",
    "resumo": "Estudantes seguem instruções algorítmicas rigorosas de dobradura (para criar um marcador de página ou pássaro) e depois são desafiados a escrever o algoritmo para o colega reproduzir.",
    "passoAPasso": [
      "1. Sensibilização (10 min): O que acontece em uma receita de bolo ou em um código de computador se pularmos uma etapa ou trocarmos a ordem das instruções?",
      "2. Dobradura Guiada (20 min): Professor dita passo a passo formal: 'Dobre ao longo da diagonal para formar um triângulo isósceles; dobre as duas pontas congruentes até o vértice superior...'.",
      "3. Análise Geométrica (10 min): Abrir o papel e observar as marcas deixadas: triângulos retângulos, ângulos de 45° e 90°, áreas fracionárias da folha original.",
      "4. Engenharia Reversa (10 min): Alunos recebem uma peça pronta e devem escrever o pseudocódigo com os passos para recriá-la."
    ],
    "dicasProfessor": "Ótima atividade para trabalhar motricidade fina, concentração e tolerância a frustração, enfatizando que depurar erros de dobra faz parte do aprendizado.",
    "rubricaAvaliacao": "Excelente: Executa e redige instruções com vocabulário geométrico adequado e sequência lógica impecável. Bom: Conclui a peça e reconhece as figuras geométricas formadas.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Origami e Geometria: Ângulos, Polígonos e Algoritmos",
      "canal": "Aprendiz 21",
      "url": "https://www.youtube.com/watch?v=mC_XR2ofn3o"
    }
  },
  {
    "id": "PRAT-08",
    "titulo": "Simulação Desplugada de Monte Carlo: Estimativa de Pi",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "9º Ano e 3º Ano EM",
    "conteudoMatematico": "Área do Círculo, Razões Geométricas e Probabilidade Empírica",
    "pilarPrincipal": "Abstração",
    "pilares": [
      "Abstração",
      "Algoritmos",
      "Reconhecimento de Padrões"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Folhas de papel com um círculo inscrito em um quadrado de lado 20 cm, grãos de arroz ou feijão (ou moedas pequenas), e calculadora.",
    "objetivo": "Compreender o Método de Monte Carlo arremessando grãos aleatoriamente sobre a folha para estimar o valor de Pi a partir da razão entre pontos dentro do círculo e no total.",
    "resumo": "Uma das técnicas estatístico-computacionais mais importantes da história é reproduzida fisicamente em sala de aula, demonstrando o poder da aleatoriedade para resolver problemas analíticos.",
    "passoAPasso": [
      "1. Fundamentação Matemática (20 min): Área do quadrado = L² = (2R)² = 4R². Área do círculo = πR². A razão entre as áreas é: ÁreaCírculo / ÁreaQuadrado = (πR²) / (4R²) = π / 4.",
      "2. Experimento em Grupos (35 min): De uma altura constante (aprox. 40 cm), cada aluno solta 100 grãos sobre a folha sem mirar. Contam quantos caíram dentro do círculo (N_circ) e no quadrado (N_total).",
      "3. Cálculo da Estimativa (20 min): Aplicar a fórmula empírica: π ≈ 4 × (N_circ / N_total). Comparar o resultado de cada grupo (ex: 3,10; 3,25; 3,08).",
      "4. Agregação em Grande Escala (15 min): Somar todos os lançamentos da turma (ex: 2.000 grãos). Observar que a estimativa agregada fica muito mais próxima de 3,1415...!",
      "5. Conexão com a Computação (10 min): Mostrar como supercomputadores realizam essa mesma simulação com bilhões de iterações em segundos para previsão do tempo e física quântica."
    ],
    "dicasProfessor": "Garante um momento de encantamento na turma: os estudantes percebem que o valor de Pi pode ser 'descoberto' por meio de pura probabilidade física.",
    "rubricaAvaliacao": "Excelente: Realiza a contagem com rigor, calcula a aproximação e compreende a justificativa algébrica da razão π/4. Bom: Executa o experimento e compreende o princípio geral.",
    "eixos": [
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "O Método de Monte Carlo e a Estimativa de Pi",
      "canal": "Manual do Mundo",
      "url": "https://www.youtube.com/watch?v=aTI99jztZds"
    }
  },
  {
    "id": "PRAT-09",
    "titulo": "Simulador de Probabilidade e Lei dos Grandes Números no Scratch",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "9º Ano e 3º Ano EM",
    "conteudoMatematico": "Probabilidade Teórica vs Frequencial, Porcentagens e Estatística",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões",
      "Abstração"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores com acesso ao Scratch (online em scratch.mit.edu ou offline) ou tablets/celulares com navegador.",
    "objetivo": "Programar um simulador estocástico no Scratch que lance moedas/dados automaticamente N vezes e trace um gráfico da frequência relativa, comprovando a Lei dos Grandes Números.",
    "resumo": "Os estudantes criam variáveis 'Caras', 'Coroas' e 'Total', utilizam o bloco 'número aleatório entre 1 e 2' e um laço de repetição personalizável (10, 100, 1.000 lançamentos) para ver a convergência para 50%.",
    "passoAPasso": [
      "1. Desafio Teórico vs Realidade (15 min): Se jogarmos uma moeda 10 vezes, vai dar exatamente 5 caras e 5 coroas? Os alunos testam e percebem a variação amostral.",
      "2. Modelagem das Variáveis no Scratch (20 min): Criar as variáveis 'Caras', 'Coroas', 'Lançamentos' e 'PorcentagemCara'.",
      "3. Construção do Algoritmo (35 min): Bloco 'quando a bandeira verde for clicada' -> Zerar variáveis -> 'repita (Lançamentos) vezes' -> 'se (número aleatório entre 1 e 2 = 1) adicione 1 a Caras senão adicione 1 a Coroas' -> calcular PorcentagemCara = (Caras / Lançamentos) * 100.",
      "4. Experimento e Coleta de Dados (20 min): Executar para 10 lançamentos (ex: 70% caras), 100 lançamentos (ex: 54%), 1.000 lançamentos (ex: 50,4%) e 5.000 lançamentos (ex: 49,9%).",
      "5. Discussão Pedagógica (10 min): Como o computador nos permite investigar hipóteses estatísticas impossíveis de testar manualmente no tempo de uma aula."
    ],
    "dicasProfessor": "Perfeito para aprofundar o planejamento de 12 aulas de Probabilidade do 3º ano EM: os alunos veem na prática o conceito de convergência assintótica sem precisar de limites formais.",
    "rubricaAvaliacao": "Excelente: Monta o código funcional com laços e condicionais e explica a convergência da frequência empírica para a teórica. Bom: Constrói o programa com pequenos apoios sintáticos.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Simulando 1000 lançamentos de moeda e dado no Scratch",
      "canal": "Antonio Prado - Matemática",
      "url": "https://www.youtube.com/watch?v=wnDxzQ0POQA"
    }
  },
  {
    "id": "PRAT-10",
    "titulo": "Desenhando Polígonos e Mandalas com Repetições no Scratch",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "6º Ano e 7º Ano",
    "conteudoMatematico": "Ângulos Externos, Polígonos Regulares, Perímetro e Simetrias",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões",
      "Decomposição"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores com Scratch (ativando a extensão 'Caneta' / Pen).",
    "objetivo": "Descobrir a relação entre a quantidade de lados de um polígono regular e o ângulo de giro externo (Giro = 360° / lados), programando o ator para desenhar formas geométricas perfeitas.",
    "resumo": "Utilizando o ator do Scratch como se fosse a tartaruga do Logo (Papert), os estudantes programam laços de repetição paramétricos para desenhar triângulos, quadrados, pentágonos e mandalas decorativas.",
    "passoAPasso": [
      "1. O Enigma do Triângulo (15 min): Por que para desenhar um triângulo equilátero no Scratch devemos girar 120° e não 60°? Discutir ângulo interno vs ângulo externo suplementar.",
      "2. O Algoritmo Universal dos Polígonos (30 min): Criar variável 'NúmeroDeLados'. Estruturar o bloco: 'repita (NúmeroDeLados) vezes' -> 'mova 80 passos' -> 'gire (360 / NúmeroDeLados) graus'.",
      "3. Testes Interativos (25 min): Alunos digitam 4 (quadrado), 5 (pentágono), 6 (hexágono), 8 (octógono) e 36 (círculo aproximado!).",
      "4. Criação de Mandalas Algorítmicas (20 min): Adicionar um segundo laço externo: 'repita 12 vezes' -> desenhar polígono -> 'gire 30 graus'. O resultado é uma mandala geométrica de arte digital.",
      "5. Exposição e Reflexão (10 min): Conexão entre matemática, computação e estética artística."
    ],
    "dicasProfessor": "Resgate histórico riquíssimo: essa prática descende diretamente do trabalho seminal de Seymour Papert no MIT com a linguagem Logo e o Construcionismo.",
    "rubricaAvaliacao": "Excelente: Compreende e generaliza a fórmula 360°/n e aninha laços de repetição com criatividade estética. Bom: Desenha quadrados e triângulos com suporte.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Desenhando polígonos regulares com o Scratch (Módulo Caneta)",
      "canal": "Rodrigo Terra",
      "url": "https://www.youtube.com/watch?v=aWhlFz6KnGo"
    }
  },
  {
    "id": "PRAT-11",
    "titulo": "Investigação da Função Afim e Quadrática com Sliders no GeoGebra",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "9º Ano e 1º Ano EM",
    "conteudoMatematico": "Função Afim f(x) = ax + b, Função Quadrática, Raízes e Vértice",
    "pilarPrincipal": "Reconhecimento de Padrões",
    "pilares": [
      "Reconhecimento de Padrões",
      "Abstração",
      "Decomposição"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores ou celulares com GeoGebra Geometria/Calculadora Gráfica (geogebra.org).",
    "objetivo": "Investigar visual e dinamicamente o impacto dos parâmetros a, b e c no comportamento gráfico de funções através de controles deslizantes (sliders).",
    "resumo": "Os estudantes deixam de ver o gráfico de funções como uma tarefa maçante de tabelar pontos estáticos e passam a explorar o efeito cinético de cada coeficiente na inclinação, deslocamento e concavidade.",
    "passoAPasso": [
      "1. Introdução ao GeoGebra (15 min): Familiarização com a barra de entrada e plano cartesiano da ferramenta.",
      "2. Criação dos Controles Deslizantes (25 min): Criar sliders para 'a' e 'b'. Digitar f(x) = a*x + b. Ativar a animação automática do slider.",
      "3. Roteiro Investigativo Dirigido (30 min): Responder no caderno: 'O que acontece com a reta quando a > 0? E quando a < 0? O que acontece com a reta quando alteramos apenas o b? Onde ela corta o eixo Y?'",
      "4. Transição para a Parábola (20 min): Adicionar o slider 'c' e plotar g(x) = a*x² + b*x + c. Observar a concavidade e o vértice.",
      "5. Sistematização Coletiva (10 min): O professor resume as conclusões no quadro, formalizando os teoremas matemáticos a partir das descobertas dos alunos."
    ],
    "dicasProfessor": "Excelente para desmistificar o coeficiente linear 'b' (ponto de corte do eixo Y) e o angular 'a' (taxa de variação/inclinação). O GeoGebra roda perfeitamente em qualquer smartphone.",
    "rubricaAvaliacao": "Excelente: Registra conclusões analíticas precisas correlacionando os valores dos parâmetros à morfologia do gráfico. Bom: Manipula o software e identifica inclinações positivas e negativas.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Função afim e quadrática com controle deslizante no GeoGebra",
      "canal": "Desvendando a Matemática",
      "url": "https://www.youtube.com/watch?v=5bFynULxHS8"
    }
  },
  {
    "id": "PRAT-12",
    "titulo": "Análise Estatística da Turma e Gráficos no Google Planilhas",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental, Ensino Médio e EJA",
    "ano": "8º Ano ao 3º Ano EM e EJA",
    "conteudoMatematico": "Média Aritmética, Mediana, Moda, Tabelas de Frequência e Gráficos",
    "pilarPrincipal": "Decomposição",
    "pilares": [
      "Decomposição",
      "Abstração",
      "Algoritmos"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Acesso a laboratório de informática ou smartphones com aplicativo Google Planilhas / LibreOffice Calc.",
    "objetivo": "Estruturar um banco de dados real em planilha eletrônica, aplicar fórmulas computacionais estatísticas (=MÉDIA, =MEDIANA, =MODO) e gerar gráficos adequados para tomada de decisão.",
    "resumo": "A turma realiza uma pesquisa rápida sobre hábitos (ex: tempo diário gasto em redes sociais, quantidade de copos de água ingeridos ou despesas mensais de transporte) e tabula os dados para produzir um relatório analítico.",
    "passoAPasso": [
      "1. Coleta Colaborativa de Dados (15 min): Formulário rápido na lousa ou Google Forms para coletar dados numéricos da turma.",
      "2. Estruturação da Planilha (20 min): Ensinar a organização em colunas (variáveis) e linhas (registros/estudantes). Formatação de células.",
      "3. Aplicação de Fórmulas Automatizadas (30 min): Inserir `=MÉDIA(B2:B35)`, `=MEDIANA(B2:B35)`, `=MÁXIMO(B2:B35)` e `=MÍNIMO(B2:B35)`. Comparar o que cada medida representa.",
      "4. Geração Crítica de Gráficos (25 min): Selecionar dados e inserir gráfico de colunas e setores. Discutir: 'Qual gráfico comunica melhor esses dados? Gráficos podem distorcer informações?'",
      "5. Apresentação das Conclusões (10 min): Cada grupo compartilha um insight descoberto sobre os hábitos da turma."
    ],
    "dicasProfessor": "Para turmas de EJA, contextualizar com controle de orçamento doméstico ou horas trabalhadas/banco de horas. É uma das habilidades mais diretamente exigidas no mercado de trabalho atual.",
    "rubricaAvaliacao": "Excelente: Digita fórmulas sem erros de sintaxe, interpreta a discrepância entre média e mediana e escolhe gráficos coerentes. Bom: Utiliza as funções com orientação e gera gráficos.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional",
      "Cultura Digital"
    ],
    "videoYoutube": {
      "titulo": "Google Planilhas: Fórmulas de Média, Mediana e Gráficos",
      "canal": "Rodrigo Baez",
      "url": "https://www.youtube.com/watch?v=Ome4ZGlYta0"
    }
  },
  {
    "id": "PRAT-13",
    "titulo": "Calculadora Interativa de Bhaskara em Python",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "9º Ano e 1º Ano EM",
    "conteudoMatematico": "Equações do 2º Grau, Radiciação e Estruturas Condicionais",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Abstração"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Navegador de internet acessando ambiente online de Python gratuito (como replit.com, Google Colab ou trinket.io).",
    "objetivo": "Escrever um script em Python que receba os coeficientes a, b e c de uma equação quadrática, calcule o discriminante Delta e imprima as raízes reais correspondentes com mensagens claras.",
    "resumo": "Os estudantes transpõem a fórmula matemática resolutiva da equação de segundo grau para a sintaxe de programação, explorando variáveis float, operações de exponenciação (** 0.5) e bifurcações if/elif/else.",
    "passoAPasso": [
      "1. Tradução Matemática para Sintaxe de Código (20 min): Como escrever 'b² - 4ac' em Python? Resposta: `delta = b**2 - 4*a*c`. Como fazer raiz quadrada? `raiz_delta = delta ** 0.5`.",
      "2. Estrutura de Entrada e Saída (20 min): Comandos `input()` e conversão `float()` para ler os coeficientes a, b e c.",
      "3. Lógica Condicional do Discriminante (35 min): Estruturar no código: `if delta > 0:` calcular x1 e x2; `elif delta == 0:` calcular raiz única `x = -b / (2*a)`; `else:` informar 'A equação não possui raízes reais!'.",
      "4. Testes e Depuração de Casos Clássicos (15 min): Testar equações famosas (ex: x² - 5x + 6 = 0, x² - 4x + 4 = 0 e x² + x + 1 = 0).",
      "5. Reflexão (10 min): Discutir o que é um 'bug' e como a máquina exige que o matemático antecipe todos os casos possíveis."
    ],
    "dicasProfessor": "Para turmas iniciantes que nunca viram código textual, o professor pode fornecer o esqueleto com lacunas para os estudantes preencherem apenas as expressões matemáticas.",
    "rubricaAvaliacao": "Excelente: Programa executa sem erros de sintaxe, trata adequadamente os três casos de Delta e verifica se a ≠ 0. Bom: Constrói a lógica com assistência na sintaxe.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Equação do 2º Grau em Python Passo a Passo",
      "canal": "Programe Seu Futuro",
      "url": "https://www.youtube.com/watch?v=JuwpGiRImtc"
    }
  },
  {
    "id": "PRAT-14",
    "titulo": "Simulador de Juros Compostos e Finanças no Scratch / Planilha",
    "tipo": "Plugada",
    "etapa": "Ensino Médio e EJA",
    "ano": "1º Ano EM e EJA Médio",
    "conteudoMatematico": "Matemática Financeira, Juros Compostos, Funções Exponenciais e Orçamento",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Reconhecimento de Padrões",
      "Decomposição"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores ou celulares com Scratch ou Planilha Eletrônica.",
    "objetivo": "Construir um simulador interativo que calcule a evolução de uma dívida no cartão de crédito versus o rendimento de uma aplicação financeira sob a ação dos juros compostos ao longo dos meses.",
    "resumo": "Estudantes comparam o crescimento exponencial M = C · (1 + i)^t com laços de repetição mensais: a cada iteração de mês, novo_saldo = saldo_anterior * (1 + taxa).",
    "passoAPasso": [
      "1. O Choque dos Juros Reais (15 min): Apresentar a fatura real de um cartão de crédito com juros rotativos de 14% ao mês. O que acontece com uma dívida de R$ 500 esquecida por 12 meses?",
      "2. Modelagem Algorítmica do Acumulador (30 min): No Scratch ou Planilha, criar um loop que a cada mês multiplica o saldo devedor por 1.14.",
      "3. Comparação com Investimentos (25 min): Fazer a mesma simulação para quem poupa e investe R$ 100 por mês a uma taxa de 1% ao mês. Gráfico comparativo de crescimento.",
      "4. Tomada de Decisão Financeira (20 min): Em grupos, os estudantes calculam qual a melhor estratégia de quitação de dívidas e consumo consciente.",
      "5. Conclusão Pedagógica (10 min): Como o Pensamento Computacional e a Matemática protegem o cidadão do superendividamento."
    ],
    "dicasProfessor": "Um dos temas de maior impacto social para os estudantes da rede pública e EJA, aliando rigor matemático ao empoderamento financeiro das famílias.",
    "rubricaAvaliacao": "Excelente: Constrói a rotina iterativa de juros compostos e interpreta criticamente o perigo do efeito 'bola de neve' das taxas. Bom: Entende a mecânica do simulador e calcula montantes.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional",
      "Cultura Digital"
    ],
    "videoYoutube": {
      "titulo": "Matemática Financeira e Juros no Excel e Planilhas",
      "canal": "Rodrigo Baez",
      "url": "https://www.youtube.com/watch?v=Ome4ZGlYta0"
    }
  },
  {
    "id": "PRAT-15",
    "titulo": "Classificador Lógico de Triângulos com Árvores de Decisão no Scratch",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental (Anos Finais)",
    "ano": "7º Ano e 8º Ano",
    "conteudoMatematico": "Condição de Existência de Triângulos e Classificação quanto aos Lados",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Abstração"
    ],
    "tempoEstimado": "1 a 2 aulas (50 a 100 min)",
    "materiais": "Computadores com Scratch.",
    "objetivo": "Implementar um algoritmo no Scratch que receba as medidas de 3 segmentos, verifique se formam um triângulo (Desigualdade Triangular) e classifique em equilátero, isósceles ou escaleno.",
    "resumo": "O programa interage com o usuário fazendo perguntas pelo comando 'pergunte e espere', armazena em variáveis ladoA, ladoB e ladoC e executa uma cascata lógica de testes.",
    "passoAPasso": [
      "1. Revisão Geométrica (15 min): A condição de existência: cada lado deve ser menor que a soma dos outros dois: (a < b + c) E (b < a + c) E (c < a + b). Classificação por lados: 3 iguais (equilátero), 2 iguais (isósceles), 3 diferentes (escaleno).",
      "2. Desenho do Fluxograma no Caderno (20 min): Antes de programar no Scratch, os alunos desenham os blocos de decisão SE... ENTÃO... SENÃO.",
      "3. Programação no Scratch (35 min): Uso de operadores lógicos 'e', 'ou', '=' e blocos condicionais aninhados.",
      "4. Bateria de Testes com Valores Extremos (20 min): Testar (3, 4, 5) -> Triângulo Escaleno; (5, 5, 5) -> Triângulo Equilátero; (2, 3, 10) -> 'Não forma um triângulo!'.",
      "5. Fechamento (10 min): Sistematização de como os sistemas de visão computacional e inteligência artificial classificam formas geométricas no mundo real."
    ],
    "dicasProfessor": "Excelente para demonstrar aos alunos a importância de testar primeiro se o triângulo existe antes de tentar classificá-lo, evitando o clássico bug de classificar medidas impossíveis.",
    "rubricaAvaliacao": "Excelente: Implementa a condição de existência com operadores booleanos corretos e ramifica perfeitamente os três tipos de triângulos. Bom: Classifica os lados com apoio no condicional de existência.",
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "videoYoutube": {
      "titulo": "Condição de Existência de Triângulos e Scratch",
      "canal": "Edu Scratch",
      "url": "https://www.youtube.com/watch?v=9a20fX8bgKE"
    }
  },
  {
    "id": "PRAT-16",
    "titulo": "Detetive de Fake News Estatísticas e Gráficos Manipulados",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental, Ensino Médio e EJA",
    "ano": "8º Ano, 9º Ano, Ensino Médio e EJA",
    "conteudoMatematico": "Leitura Crítica de Gráficos, Escalas Truncadas, Proporções e Médias",
    "pilarPrincipal": "Abstração",
    "pilares": [
      "Abstração",
      "Reconhecimento de Padrões"
    ],
    "eixos": [
      "Cultura Digital",
      "Mundo Digital"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Projetor ou computadores com acesso a notícias reais e planilhas eletrônicas (Google Planilhas).",
    "objetivo": "Identificar distorções intencionais e involuntárias em gráficos divulgados na internet e televisão (eixo Y sem começar do zero, tamanhos desproporcionais de figuras 3D) e reconstruir o gráfico correto para tomada de decisão cidadã.",
    "resumo": "Os estudantes atuam como 'Checadores de Fatos Matemáticos': analisam capturas de tela de jornais e redes sociais com gráficos enganosos, tabulam os números brutos em uma planilha e geram o gráfico correto, comparando a impressão visual.",
    "passoAPasso": [
      "1. Sensibilização (15 min): Apresentar um caso real de telejornal com gráfico de barras onde uma diferença de 2% parece ter o dobro do tamanho (efeito do eixo truncado).",
      "2. O Conceito de Desinformação Estatística (20 min): Discutir a Cultura Digital: como gráficos compartilhados no WhatsApp e TikTok influenciam eleições, consumo e decisões de saúde.",
      "3. Oficina Prática em Duplas (40 min): Cada dupla recebe uma manchete com gráfico duvidoso. Eles digitam os dados no Google Planilhas e geram um gráfico padronizado com escala honesta.",
      "4. Painel de Exposição (15 min): As duplas mostram o 'Antes e Depois' e apontam qual técnica de distorção foi utilizada.",
      "5. Síntese e Cidadania (10 min): Elaboração coletiva de um guia de 3 regras para não cair em fake news numéricas."
    ],
    "dicasProfessor": "Atividade excelente para turmas de EJA e Ensino Médio. Estimula o senso crítico contra golpes, pirâmides financeiras e desinformação eleitoral.",
    "rubricaAvaliacao": "Excelente: Identifica com precisão a falha metodológica na representação e reconstrói o gráfico com escala adequada. Bom: Percebe a distorção visual com auxílio do professor.",
    "videoYoutube": {
      "titulo": "MENSAGEM SECRETA: Entenda a CRIPTOGRAFIA e Cidadania na Rede",
      "canal": "Manual do Mundo",
      "url": "https://www.youtube.com/watch?v=aTI99jztZds"
    }
  },
  {
    "id": "PRAT-17",
    "titulo": "Engenharia de Senhas Seguras e Ataques de Força Bruta",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "7º Ano, 8º Ano e 2º Ano EM",
    "conteudoMatematico": "Princípio Fundamental da Contagem, Potenciação e Análise Combinatória",
    "pilarPrincipal": "Decomposição",
    "pilares": [
      "Decomposição",
      "Algoritmos",
      "Abstração"
    ],
    "eixos": [
      "Cultura Digital",
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores ou smartphones com simulador de tempo de quebra de senhas (ex: How Secure is My Password / security.org) e papel.",
    "objetivo": "Calcular matematicamente o número de combinações possíveis para senhas de diferentes comprimentos e conjuntos de caracteres (apenas números vs letras vs símbolos) e compreender o tempo de quebra por computadores modernos.",
    "resumo": "A turma aplica o Princípio Multiplicativo: senha de 4 dígitos numéricos = 10^4 = 10.000 opções (quebrada em milissegundos). Senha de 8 caracteres com letras maiúsculas, minúsculas, números e símbolos = 94^8 ≈ 6 quatrilhões de opções (leva centenas de anos).",
    "passoAPasso": [
      "1. Abertura e Sensibilização (15 min): Qual foi a senha mais usada no Brasil no último ano? (123456). Por que isso é um risco para contas bancárias e redes sociais?",
      "2. Cálculo Combinatório no Quadro (25 min): Deduzir o total de possibilidades: N = (tamanho do alfabeto)^(comprimento da senha). Mostrar o crescimento exponencial.",
      "3. Teste em Simulador Digital (30 min): Alunos testam senhas hipotéticas no simulador e observam a mudança do tempo de quebra ao adicionar um único caractere especial.",
      "4. Prática de Criação Segura (20 min): Criar senhas mnemônicas baseadas em frases fáceis de lembrar para os alunos e quase impossíveis para máquinas.",
      "5. Reflexão sobre Cultura Digital (10 min): A responsabilidade individual na proteção de dados e privacidade pessoal (LGPD)."
    ],
    "dicasProfessor": "Alertar os estudantes para nunca digitarem suas senhas reais no simulador, criando apenas senhas fictícias para teste durante a aula.",
    "rubricaAvaliacao": "Excelente: Demonstra matematicamente o crescimento exponencial do espaço de busca e formula senhas robustas. Bom: Compreende o cálculo combinatório básico.",
    "videoYoutube": {
      "titulo": "Como funcionam as senhas e a segurança digital",
      "canal": "Manual do Mundo",
      "url": "https://www.youtube.com/watch?v=aTI99jztZds"
    }
  },
  {
    "id": "PRAT-18",
    "titulo": "Decodificando Imagens Digitais: Pixels, Cores RGB e Matrizes",
    "tipo": "Plugada",
    "etapa": "Ensino Fundamental e Ensino Médio",
    "ano": "8º Ano e 2º Ano EM",
    "conteudoMatematico": "Matrizes Bidimensionais, Coordenadas, Escala de Cinza e RGB",
    "pilarPrincipal": "Abstração",
    "pilares": [
      "Abstração",
      "Decomposição",
      "Algoritmos"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Folhas de malha quadriculada 8x8 numeradas de 0 a 9 e computadores com editor simples de imagem ou Scratch.",
    "objetivo": "Compreender que qualquer imagem na tela do celular é uma matriz de números (pixels com intensidades de 0 a 255 nas cores Vermelho, Verde e Azul).",
    "resumo": "Os estudantes iniciam colorindo uma matriz no papel através de uma tabela numérica e depois criam um gerador de arte pixelada ou filtro de contraste simples.",
    "passoAPasso": [
      "1. O que é um Pixel? (15 min): Usar uma lupa em uma tela ou dar zoom máximo em uma foto para ver os quadradinhos elementares.",
      "2. Atividade Desplugada de Transmissão de Imagem (30 min): O aluno 'transmissor' dita uma matriz numérica de 8 linhas e 8 colunas; o 'receptor' pinta as células e descobre o desenho.",
      "3. O Modelo RGB no Computador (25 min): Como a mistura aditiva de luz (R, G, B de 0 a 255) forma o amarelo, roxo e branco.",
      "4. Manipulação de Filtros (20 min): O que acontece quando somamos 50 a todos os elementos da matriz? A imagem fica mais clara (brilho)! E quando subtraímos da cor máxima 255 - pixel? Criamos o negativo da imagem!",
      "5. Conexão com IA e Visão Computacional (10 min): Como os carros autônomos e o reconhecimento facial leem essas matrizes para enxergar o mundo."
    ],
    "dicasProfessor": "Excelente ponte para introduzir o estudo de Matrizes no 2º ano do Ensino Médio de forma contextualizada, eliminando a visão de que matrizes servem apenas para cálculos mecânicos.",
    "rubricaAvaliacao": "Excelente: Articula a álgebra matricial com a formação de imagens digitais e manipula os canais de cores. Bom: Decodifica e preenche a matriz corretamente.",
    "videoYoutube": {
      "titulo": "Como funcionam os pixels e as telas dos celulares",
      "canal": "Manual do Mundo",
      "url": "https://www.youtube.com/watch?v=aTI99jztZds"
    }
  },
  {
    "id": "PRAT-19",
    "titulo": "Roteamento em Redes e o Algoritmo do Caminho Mais Curto",
    "tipo": "Desplugada",
    "etapa": "Ensino Fundamental, Ensino Médio e EJA",
    "ano": "9º Ano, Ensino Médio e EJA",
    "conteudoMatematico": "Grafos Ponderados, Geometria de Posição, Distâncias e Otimização",
    "pilarPrincipal": "Algoritmos",
    "pilares": [
      "Algoritmos",
      "Decomposição",
      "Reconhecimento de Padrões"
    ],
    "eixos": [
      "Mundo Digital",
      "Pensamento Computacional"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Mapas simplificados de bairros/cidades com nós (roteadores/escolas) e arestas com valores de distância em km ou tempo em minutos.",
    "objetivo": "Compreender como a internet envia pacotes de dados de um computador ao outro e como aplicativos de mapa (Waze/Google Maps) calculam a rota mais rápida usando o Algoritmo de Dijkstra.",
    "resumo": "Estudantes recebem uma rede de nós conectados e precisam encontrar o caminho de menor custo total sem testar todas as infinitas combinações possíveis de forma desordenada.",
    "passoAPasso": [
      "1. Problematização Cotidiana (15 min): Como uma mensagem de WhatsApp sai de Recife e chega em Petrolina em milissegundos sem se perder?",
      "2. O Conceito de Grafo (20 min): Apresentar nós (roteadores/cidades) e arestas (cabos de fibra óptica/ruas) com pesos (latência/distância).",
      "3. Aplicação do Algoritmo Passo a Passo (35 min): Partindo da origem, os alunos avaliam em cada etapa o nó vizinho não visitado com menor custo acumulado.",
      "4. Simulação de Congestionamento (20 min): Um cabo submarino é rompido (aresta bloqueada) — como o algoritmo recalcula a rota imediatamente?",
      "5. Conexão com Logística e Mundo do Trabalho (10 min): Como empresas de logística (Correios, Mercado Livre) usam esse mesmo algoritmo para economizar milhões em combustível."
    ],
    "dicasProfessor": "Atividade riquíssima para turmas de EJA, articulando planejamento de trajetos urbanos ao funcionamento invisível da internet.",
    "rubricaAvaliacao": "Excelente: Executa o algoritmo de busca com rigor, encontra o caminho ótimo e explica a lógica de atualização de nós. Bom: Encontra o caminho mais curto por inspeção guiada.",
    "videoYoutube": {
      "titulo": "💻 BNCC COMPUTAÇÃO | O Que Muda na Escola e na Sala de Aula?",
      "canal": "Prof. Eldo",
      "url": "https://www.youtube.com/watch?v=PBPowAUwKXw"
    }
  },
  {
    "id": "PRAT-20",
    "titulo": "Inteligência Artificial, Algoritmos de Recomendação e Viés Probabilístico",
    "tipo": "Plugada",
    "etapa": "Ensino Médio e EJA",
    "ano": "2º Ano EM, 3º Ano EM e EJA Médio",
    "conteudoMatematico": "Probabilidade Condicional, Estatística, Amostragem e Frequência",
    "pilarPrincipal": "Reconhecimento de Padrões",
    "pilares": [
      "Reconhecimento de Padrões",
      "Abstração",
      "Decomposição"
    ],
    "eixos": [
      "Cultura Digital",
      "Pensamento Computacional",
      "Mundo Digital"
    ],
    "tempoEstimado": "2 aulas (100 min)",
    "materiais": "Computadores ou smartphones com acesso a plataformas de vídeo ou redes sociais.",
    "objetivo": "Compreender como os algoritmos de recomendação (YouTube, Instagram, TikTok) utilizam dados de navegação e matrizes de probabilidade para sugerir o próximo vídeo, e refletir criticamente sobre as 'bolhas sociais' e vícios de atenção.",
    "resumo": "A turma simula a criação de um 'Mini-Algoritmo de Recomendação' baseado em probabilidade conjunta: se um usuário assistiu ao vídeo de funk/brega, qual a probabilidade condicional de ele querer ver outro vídeo do mesmo gênero?",
    "passoAPasso": [
      "1. Provocação Inicial (15 min): Por que a página 'Para Você' do seu amigo mostra vídeos completamente diferentes da sua?",
      "2. O Cálculo Probabilístico por Trás do Feed (30 min): Montar tabela no quadro relacionando tempo de visualização (segundos) e engajamento com probabilidades condicionais P(Vídeo B | assistiu Vídeo A).",
      "3. O Experimento das Contas Novas (25 min): Grupos criam dois perfis de teste e dão 10 curtidas em temas diferentes (ex: futebol vs receitas). Observar como o feed se molda quase instantaneamente.",
      "4. Debate sobre Cultura Digital e Saúde Mental (20 min): Como o design dos algoritmos estimula o tempo de tela excessivo e como podemos ter uma relação mais saudável e consciente com as telas.",
      "5. Fechamento Crítico (10 min): Proposta de estratégias de 'higiene digital' pessoal."
    ],
    "dicasProfessor": "Um dos temas de maior adesão entre os jovens do Ensino Médio, aliando a matemática dos algoritmos com a vida real dos estudantes.",
    "rubricaAvaliacao": "Excelente: Compreende a modelagem probabilística subjacente e desenvolve reflexão crítica consistente sobre os impactos das bolhas algorítmicas. Bom: Participa do debate e compreende o funcionamento básico das recomendações.",
    "videoYoutube": {
      "titulo": "BNCC COMPUTAÇÃO e Inteligência Artificial na Educação",
      "canal": "Prof. Eldo",
      "url": "https://www.youtube.com/watch?v=PBPowAUwKXw"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRATICAS_DATA };
}
