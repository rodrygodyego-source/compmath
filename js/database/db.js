/**
 * CompMath Database & Storage Service (v2.3)
 * Suporte a múltiplos professores, escolas, 3 Eixos da BNCC Computação e 4 Pilares do PC.
 */

const CompMathDB = (function() {
  const STORAGE_KEY = 'compmath_planejamentos_v3';
  const PROFILE_KEY = 'compmath_teacher_profile_v3';

  // Planejamentos padrão com cabeçalho docente completo
  const DEFAULT_PLANEJAMENTOS = [
    {
      id: "PLAN-2026-001",
      nomeProfessor: "Prof. Rodrygo Dyego da Silva Nascimento",
      escola: "Escola de Referência em Ensino Médio (EREM) - Rede Estadual de PE",
      etapa: "Ensino Médio",
      ano: "3º Ano EM",
      turma: "3º Ano A - Matutino",
      turno: "Matutino",
      conteudo: "Probabilidade Clássica, Regra do Produto e Eventos Independentes",
      habilidadeMatematicaCodigo: "EM13MAT311",
      habilidadeMatematicaDescricao: "Identificar e calcular a probabilidade de eventos aleatórios simples e compostos (união, interseção e eventos complementares), aplicando o princípio aditivo e multiplicativo.",
      habilidadeComputacaoCodigo: "EM13CO01",
      habilidadeComputacaoDescricao: "Construir modelos algorítmicos e simulações estocásticas com números pseudoaleatórios para testar hipóteses probabilísticas em larga escala.",
      curriculoPE: "Currículo de Pernambuco (CEDIM-PE): Utilizar a probabilidade para interpretação de riscos em seguros, medicina diagnóstica, jogos de azar e tomada de decisões sob incerteza.",
      eixos: ["Pensamento Computacional", "Mundo Digital"],
      pilares: ["Algoritmos", "Abstração", "Decomposição"],
      objetivos: "Compreender a probabilidade como razão entre casos favoráveis e casos possíveis; aplicar a 'regra do contra' (evento complementar) e a regra do produto para eventos simultâneos; construir e rodar um simulador estocástico no Scratch para comparar probabilidade teórica e empírica com 1.000 lançamentos de moeda.",
      estrategias: "1. Abertura com lousa intuitiva e desafio prático de 3 moedas; 2. Deduzir o espaço amostral completo (8 casos) utilizando diagrama em árvore no quadro; 3. Apresentar a 'Fórmula de Ouro': P = Casos Favoráveis / Total; 4. Prática no Scratch: alunos utilizam o bloco de sorteio pseudoaleatório com laço de repetição de 1.000 iterações para verificar a convergência empírica para 50%.",
      atividades: "• PRAT-09 - Simulador de Probabilidade e Lei dos Grandes Números no Scratch (Plugada)\n• PRAT-06 - Árvores de Probabilidade e Diagramas de Decisão (Desplugada)",
      recursos: "Lousa e pincéis, 30 moedas para experimentação manual em duplas, laboratório de informática ou computadores/smartphones com Scratch online/offline.",
      tempoPrevisto: "4 aulas (200 min)",
      avaliacao: "Rubrica formativa alinhada aos eixos de Computação: 1) Registro correto da árvore de possibilidades no caderno; 2) Cálculo sem erros das probabilidades teóricas compostas; 3) Participação e análise crítica da convergência estatística observada na simulação computacional.",
      createdAt: "2026-09-15T10:30:00.000Z",
      updatedAt: "2026-09-18T14:20:00.000Z"
    },
    {
      id: "PLAN-2026-002",
      nomeProfessor: "Prof. Rodrygo Dyego da Silva Nascimento",
      escola: "Escola Municipal de Igarassu",
      etapa: "Ensino Fundamental (Anos Finais)",
      ano: "8º Ano",
      turma: "8º Ano B - Tarde",
      turno: "Vespertino",
      conteudo: "Educação Financeira: Porcentagens, Acréscimos, Descontos e Juros Simples",
      habilidadeMatematicaCodigo: "EF08MA04",
      habilidadeMatematicaDescricao: "Resolver e elaborar problemas que envolvam o cálculo de porcentagens, incluindo os que lidam com acréscimos e decréscimos simples, utilizando estratégias pessoais, cálculo mental e calculadora, no contexto de educação financeira.",
      habilidadeComputacaoCodigo: "EF08CO04",
      habilidadeComputacaoDescricao: "Construir modelos automatizados em planilhas eletrônicas e scripts simples com operadores percentuais e condicionais para tomada de decisão financeira.",
      curriculoPE: "Currículo de Pernambuco (CEDIM-PE): Contextualizar acréscimos e descontos em contas de energia (bandeiras tarifárias da Neoenergia), inflação nos preços de alimentos em feiras livres de Pernambuco e compras parceladas no comércio.",
      eixos: ["Pensamento Computacional", "Mundo Digital", "Cultura Digital"],
      pilares: ["Algoritmos", "Decomposição", "Abstração"],
      objetivos: "Compreender o cálculo de porcentagens aplicadas ao consumo consciente; utilizar planilhas eletrônicas para modelar orçamentos e comparar compras à vista com desconto versus compras a prazo parceladas.",
      estrategias: "Análise crítica de encartes de supermercado de Pernambuco. Construção no Google Planilhas de uma calculadora de juros simples e descontos comerciais, explorando a Cultura Digital e o Mundo Digital.",
      atividades: "• PRAT-14 - Simulador de Juros Compostos e Finanças (Plugada)\n• PRAT-12 - Análise Estatística da Turma e Planilhas (Plugada)",
      recursos: "Laboratório de informática ou smartphones com Google Planilhas / LibreOffice Calc, folhas guia com faturas reais desidentificadas.",
      tempoPrevisto: "3 aulas (150 min)",
      avaliacao: "Entrega e apresentação da planilha funcional com fórmulas automáticas de porcentagem e justificativa reflexiva sobre a decisão de consumo.",
      createdAt: "2026-09-12T08:00:00.000Z",
      updatedAt: "2026-09-14T09:15:00.000Z"
    }
  ];

  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PLANEJAMENTOS));
    }
  }

  function getTeacherProfile() {
    try {
      const data = localStorage.getItem(PROFILE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      nomeProfessor: "Prof. Rodrygo Dyego da Silva Nascimento",
      escola: "Rede Estadual de Pernambuco / Município de Igarassu"
    };
  }

  function saveTeacherProfile(nomeProfessor, escola) {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify({ nomeProfessor, escola }));
    } catch (e) {}
  }

  function getAllPlanejamentos() {
    init();
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return JSON.parse(data) || [];
    } catch (e) {
      return [];
    }
  }

  function getPlanejamentoById(id) {
    const list = getAllPlanejamentos();
    return list.find(item => item.id === id) || null;
  }

  function savePlanejamento(planData) {
    const list = getAllPlanejamentos();
    const now = new Date().toISOString();

    // Atualizar perfil padrão do docente para autopreenchimento futuro
    if (planData.nomeProfessor || planData.escola) {
      saveTeacherProfile(planData.nomeProfessor || '', planData.escola || '');
    }

    if (planData.id) {
      const index = list.findIndex(item => item.id === planData.id);
      if (index !== -1) {
        list[index] = {
          ...list[index],
          ...planData,
          updatedAt: now
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        return list[index];
      }
    }

    const newId = 'PLAN-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 1000);
    const newPlan = {
      ...planData,
      id: newId,
      createdAt: now,
      updatedAt: now
    };
    list.unshift(newPlan);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return newPlan;
  }

  function deletePlanejamento(id) {
    let list = getAllPlanejamentos();
    list = list.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
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
    const turmas = new Set(list.map(p => p.turma).filter(Boolean));
    
    // Contagem dos 3 Eixos da BNCC Computação
    const eixosCount = {
      "Pensamento Computacional": 0,
      "Mundo Digital": 0,
      "Cultura Digital": 0
    };

    // Contagem dos 4 Pilares do Pensamento Computacional
    const pilarCount = {
      "Algoritmos": 0,
      "Abstração": 0,
      "Decomposição": 0,
      "Reconhecimento de Padrões": 0
    };

    list.forEach(p => {
      // Eixos
      if (Array.isArray(p.eixos)) {
        p.eixos.forEach(eixo => {
          if (eixosCount[eixo] !== undefined) eixosCount[eixo]++;
        });
      } else {
        // Fallback
        eixosCount["Pensamento Computacional"]++;
      }

      // Pilares
      if (Array.isArray(p.pilares)) {
        p.pilares.forEach(pilar => {
          if (pilarCount[pilar] !== undefined) pilarCount[pilar]++;
        });
      }
    });

    return {
      totalPlanos,
      totalTurmas: turmas.size,
      eixosCount,
      pilarCount,
      totalCurriculo: typeof CURRICULO_DATA !== 'undefined' ? CURRICULO_DATA.length : 49,
      totalPraticas: typeof PRATICAS_DATA !== 'undefined' ? PRATICAS_DATA.length : 20
    };
  }

  function exportBackupJSON() {
    const list = getAllPlanejamentos();
    const backup = {
      app: "CompMath",
      version: "2.3.0",
      framework: "BNCC Computação (Resolução CNE/CP 1/2022) - 3 Eixos",
      exportedAt: new Date().toISOString(),
      planejamentos: list
    };
    return JSON.stringify(backup, null, 2);
  }

  function importBackupJSON(jsonText) {
    try {
      const parsed = JSON.parse(jsonText);
      if (parsed && Array.isArray(parsed.planejamentos)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed.planejamentos));
        return { success: true, count: parsed.planejamentos.length };
      } else if (Array.isArray(parsed)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return { success: true, count: parsed.length };
      }
      return { success: false, error: 'Estrutura de dados inválida.' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  function resetToDefaults() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PLANEJAMENTOS));
    return true;
  }

  return {
    init,
    getTeacherProfile,
    saveTeacherProfile,
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

if (typeof window !== 'undefined') {
  CompMathDB.init();
}
