/**
 * CompMath Database & Storage Service
 * Gerencia o armazenamento local (LocalStorage), dados iniciais de demonstração (seeds),
 * importação/exportação de backups e consultas para a aplicação.
 */

const CompMathDB = (function() {
  const STORAGE_KEY = 'compmath_planejamentos_v2';
  const SETTINGS_KEY = 'compmath_settings_v2';

  // Planejamentos padrão para o professor nunca abrir a plataforma vazia
  const DEFAULT_PLANEJAMENTOS = [
    {
      id: "PLAN-2026-001",
      ano: "3º Ano EM",
      turma: "3º Ano A - Ensino Médio Integral",
      conteudo: "Probabilidade Clássica, Regra do Produto e Eventos Independentes",
      habilidadeMatematicaCodigo: "EM13MAT311",
      habilidadeMatematicaDescricao: "Identificar e calcular a probabilidade de eventos aleatórios simples e compostos (união, interseção e eventos complementares), aplicando o princípio aditivo e multiplicativo.",
      habilidadeComputacaoCodigo: "EM13CO01",
      habilidadeComputacaoDescricao: "Construir modelos algorítmicos e simulações estocásticas com números pseudoaleatórios para testar hipóteses probabilísticas em larga escala.",
      curriculoPE: "Currículo de Pernambuco: Utilizar a probabilidade para interpretação de riscos em seguros, medicina diagnóstica, jogos de azar e tomada de decisões sob incerteza.",
      pilares: ["Algoritmos", "Abstração", "Decomposição"],
      objetivos: "Compreender a probabilidade como razão entre casos favoráveis e casos possíveis; aplicar a 'regra do contra' (evento complementar) e a regra do produto para eventos simultâneos; construir e rodar um simulador estocástico no Scratch para comparar probabilidade teórica e empírica com 1.000 lançamentos de moeda.",
      estrategias: "1. Abertura com lousa intuitiva e desafio prático de 3 moedas; 2. Deduzir o espaço amostral completo (8 casos) utilizando diagrama em árvore no quadro; 3. Apresentar a 'Fórmula de Ouro': P = Casos Favoráveis / Total; 4. Prática no Scratch: alunos utilizam o bloco de sorteio pseudoaleatório com laço de repetição de 1.000 iterações para verificar a convergência empírica para 50%.",
      atividades: "PRAT-09 (Simulador de Probabilidade e Lei dos Grandes Números no Scratch) e PRAT-06 (Árvores de Probabilidade e Diagramas de Decisão).",
      recursos: "Lousa e pincéis, 30 moedas para experimentação manual em duplas, laboratório de informática ou computadores/smartphones com Scratch online/offline.",
      tempoPrevisto: "4 aulas (200 min)",
      avaliacao: "Rubrica formativa: 1) Registro correto da árvore de possibilidades no caderno; 2) Cálculo sem erros das probabilidades teóricas compostas; 3) Participação e análise crítica da convergência estatística observada na simulação computacional.",
      createdAt: "2026-09-15T10:30:00.000Z",
      updatedAt: "2026-09-17T14:20:00.000Z"
    },
    {
      id: "PLAN-2026-002",
      ano: "6º Ano",
      turma: "6º Ano B - Escola Municipal (Igarassu)",
      conteudo: "Múltiplos, Divisores e Algoritmo de Euclides (MDC)",
      habilidadeMatematicaCodigo: "EF06MA05",
      habilidadeMatematicaDescricao: "Classificar números naturais em primos e compostos, estabelecer relações entre números expressas pelos termos 'é múltiplo de', 'é divisor de', 'é fator de', e estabelecer critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000.",
      habilidadeComputacaoCodigo: "EF06CO01",
      habilidadeComputacaoDescricao: "Identificar e construir algoritmos que envolvam sequências de passos lógicos, instruções condicionais simples e repetições para a resolução de problemas.",
      curriculoPE: "Currículo de Pernambuco: Articular os critérios de divisibilidade à elaboração de regras formais e fluxogramas de decisão, valorizando a formulação de hipóteses e a verificação empírica.",
      pilares: ["Algoritmos", "Decomposição", "Reconhecimento de Padrões"],
      objetivos: "Compreender o conceito de Maior Divisor Comum de forma concreta; aplicar o Algoritmo de Euclides com tiras de papel quadriculado e formalizar o raciocínio em um fluxograma lógico com laço de repetição condicional.",
      estrategias: "Atividade desplugada em duplas com tiras de papel quadriculado cortadas em comprimentos diferentes. Os estudantes realizam divisões sucessivas por sobreposição física e registram cada etapa no caderno em formato de fluxograma com caixas de decisão 'Resto = 0?'.",
      atividades: "PRAT-02 (O Desafio do MDC com o Algoritmo de Euclides Desplugado).",
      recursos: "Folhas quadriculadas de 1cm², réguas, tesouras escolares e cartões com operadores de fluxograma (Início, Processo, Decisão, Fim).",
      tempoPrevisto: "2 aulas (100 min)",
      avaliacao: "Avaliação processual baseada na resolução do desafio do ladrilhamento de salas no papel e clareza na construção do fluxograma algorítmico da repetição condicional.",
      createdAt: "2026-09-10T08:00:00.000Z",
      updatedAt: "2026-09-12T09:15:00.000Z"
    },
    {
      id: "PLAN-2026-003",
      ano: "EJA Médio",
      turma: "Módulo II - EJA Noturno",
      conteudo: "Matemática Financeira, Juros e Orçamento Pessoal com Planilhas",
      habilidadeMatematicaCodigo: "EM13MAT203",
      habilidadeMatematicaDescricao: "Aplicar conceitos de matemática financeira (juros simples e compostos, descontos, inflação) para planejar investimentos, compras parceladas e gestão do orçamento familiar.",
      habilidadeComputacaoCodigo: "EM13CO05",
      habilidadeComputacaoDescricao: "Utilizar ferramentas digitais de cálculo automatizado e simulações para tomada de decisões econômicas éticas, consumo responsável e letramento financeiro-digital.",
      curriculoPE: "Currículo de Pernambuco (EJA): Valorizar os saberes prévios dos estudantes trabalhadores, conectando a teoria matemática ao controle financeiro doméstico e trabalhista.",
      pilares: ["Decomposição", "Abstração", "Algoritmos"],
      objetivos: "Compreender a diferença entre juros simples e compostos a partir de situações reais de crédito rotativo e parcelamento; construir planilha automatizada com fórmulas no Google Planilhas para simular o crescimento de dívidas e organizar o orçamento pessoal.",
      estrategias: "Discussão a partir de faturas de cartão de crédito e contas de energia. Demonstração no projetor da inserção de fórmulas de multiplicação iterativa em planilhas. Atividade prática no laboratório ou celulares para montar a 'Planilha Pessoal de Equilíbrio Financeiro'.",
      atividades: "PRAT-14 (Simulador de Juros Compostos e Finanças) e PRAT-12 (Análise Estatística e Planilhas).",
      recursos: "Laboratório de informática ou smartphones dos estudantes com Google Planilhas instalado, faturas reais desidentificadas e folhas guia impressas.",
      tempoPrevisto: "3 aulas (150 min)",
      avaliacao: "Entrega e apresentação da planilha orçamentária funcional com fórmulas automáticas de soma e cálculo de juros mensais, justificando a decisão financeira tomada diante de uma compra parcelada.",
      createdAt: "2026-09-08T19:00:00.000Z",
      updatedAt: "2026-09-09T21:00:00.000Z"
    }
  ];

  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, jsonStringify(DEFAULT_PLANEJAMENTOS));
    }
  }

  function jsonStringify(data) {
    try {
      return JSON.stringify(data);
    } catch (e) {
      console.error('Erro ao serializar dados:', e);
      return '[]';
    }
  }

  function jsonParse(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.error('Erro ao fazer parse dos dados:', e);
      return [];
    }
  }

  function getAllPlanejamentos() {
    init();
    const data = localStorage.getItem(STORAGE_KEY);
    return jsonParse(data) || [];
  }

  function getPlanejamentoById(id) {
    const list = getAllPlanejamentos();
    return list.find(item => item.id === id) || null;
  }

  function savePlanejamento(planData) {
    const list = getAllPlanejamentos();
    const now = new Date().toISOString();

    if (planData.id) {
      // Atualização
      const index = list.findIndex(item => item.id === planData.id);
      if (index !== -1) {
        list[index] = {
          ...list[index],
          ...planData,
          updatedAt: now
        };
        localStorage.setItem(STORAGE_KEY, jsonStringify(list));
        return list[index];
      }
    }

    // Novo planejamento
    const newId = 'PLAN-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 1000);
    const newPlan = {
      ...planData,
      id: newId,
      createdAt: now,
      updatedAt: now
    };
    list.unshift(newPlan);
    localStorage.setItem(STORAGE_KEY, jsonStringify(list));
    return newPlan;
  }

  function deletePlanejamento(id) {
    let list = getAllPlanejamentos();
    list = list.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, jsonStringify(list));
    return true;
  }

  function duplicatePlanejamento(id) {
    const original = getPlanejamentoById(id);
    if (!original) return null;

    const copy = { ...original };
    delete copy.id;
    copy.turma = copy.turma ? `${copy.turma} (Cópia)` : 'Nova Turma';
    return savePlanejamento(copy);
  }

  function getStats() {
    const list = getAllPlanejamentos();
    const totalPlanos = list.length;
    
    // Contagem de turmas distintas
    const turmas = new Set(list.map(p => p.turma).filter(Boolean));
    
    // Contagem por pilares
    const pilarCount = {
      "Algoritmos": 0,
      "Abstração": 0,
      "Decomposição": 0,
      "Reconhecimento de Padrões": 0
    };

    list.forEach(p => {
      if (Array.isArray(p.pilares)) {
        p.pilares.forEach(pilar => {
          if (pilarCount[pilar] !== undefined) {
            pilarCount[pilar]++;
          }
        });
      }
    });

    return {
      totalPlanos,
      totalTurmas: turmas.size,
      pilarCount,
      totalCurriculo: typeof CURRICULO_DATA !== 'undefined' ? CURRICULO_DATA.length : 20,
      totalPraticas: typeof PRATICAS_DATA !== 'undefined' ? PRATICAS_DATA.length : 15
    };
  }

  function exportBackupJSON() {
    const list = getAllPlanejamentos();
    const backup = {
      app: "CompMath",
      version: "2.0.0",
      exportedAt: new Date().toISOString(),
      planejamentos: list
    };
    return JSON.stringify(backup, null, 2);
  }

  function importBackupJSON(jsonText) {
    try {
      const parsed = JSON.parse(jsonText);
      if (parsed && Array.isArray(parsed.planejamentos)) {
        localStorage.setItem(STORAGE_KEY, jsonStringify(parsed.planejamentos));
        return { success: true, count: parsed.planejamentos.length };
      } else if (Array.isArray(parsed)) {
        localStorage.setItem(STORAGE_KEY, jsonStringify(parsed));
        return { success: true, count: parsed.length };
      }
      return { success: false, error: 'Estrutura de dados inválida.' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  function resetToDefaults() {
    localStorage.setItem(STORAGE_KEY, jsonStringify(DEFAULT_PLANEJAMENTOS));
    return true;
  }

  return {
    init,
    getAllPlanejamentos,
    getPlanejamentoById,
    savePlanejamento,
    deletePlanejamento,
    duplicatePlanejamento,
    getStats,
    exportBackupJSON,
    importBackupJSON,
    resetToDefaults
  };
})();

// Inicializa no carregamento
if (typeof window !== 'undefined') {
  CompMathDB.init();
}
