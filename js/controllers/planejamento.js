/**
 * Controller: Planejamento Pedagógico (CompMath v2.3)
 * Assistente aberto para qualquer professor da rede pública, com cabeçalho de Escola e Docente,
 * articulação com os 3 EIXOS da BNCC Computação (Pensamento Computacional, Mundo Digital e Cultura Digital)
 * e seleção em cascata de Etapa e Ano Escolar.
 */

const PlanejamentoController = {
  currentPlanId: null,

  ETAPAS_ANOS: {
    "Ensino Fundamental (Anos Finais)": ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
    "Ensino Médio": ["1º Ano EM", "2º Ano EM", "3º Ano EM"],
    "EJA": ["EJA Fundamental", "EJA Médio"]
  },

  render: function(container, params = {}) {
    const self = this;
    self.currentPlanId = params.id || null;
    const defaultProfile = CompMathDB.getTeacherProfile();

    let initialData = {
      id: null,
      nomeProfessor: defaultProfile.nomeProfessor || '',
      escola: defaultProfile.escola || '',
      etapa: '',
      ano: '',
      turma: '',
      turno: 'Matutino',
      conteudo: '',
      habilidadeMatematicaCodigo: '',
      habilidadeMatematicaDescricao: '',
      habilidadeComputacaoCodigo: '',
      habilidadeComputacaoDescricao: '',
      curriculoPE: '',
      eixos: ["Pensamento Computacional"],
      pilares: [],
      objetivos: '',
      estrategias: '',
      atividades: '',
      recursos: '',
      tempoPrevisto: '2 aulas (100 min)',
      avaliacao: ''
    };

    // 1. Edição de plano existente
    if (self.currentPlanId) {
      const existing = CompMathDB.getPlanejamentoById(self.currentPlanId);
      if (existing) {
        initialData = { ...existing };
        if (!initialData.etapa && initialData.ano) {
          initialData.etapa = self.inferEtapaByAno(initialData.ano);
        }
        if (!initialData.eixos) {
          initialData.eixos = ["Pensamento Computacional"];
        }
      }
    } 
    // 2. Pré-carregamento a partir da Matriz Curricular
    else if (params.habilidadeId) {
      const item = CURRICULO_DATA.find(c => c.id === params.habilidadeId);
      if (item) {
        initialData.etapa = item.etapa;
        initialData.ano = item.ano;
        initialData.conteudo = item.conteudo;
        initialData.habilidadeMatematicaCodigo = item.habilidadeMatematica.codigo;
        initialData.habilidadeMatematicaDescricao = item.habilidadeMatematica.descricao;
        initialData.habilidadeComputacaoCodigo = item.habilidadeComputacao.codigo;
        initialData.habilidadeComputacaoDescricao = item.habilidadeComputacao.descricao;
        initialData.curriculoPE = item.curriculoPE;
        initialData.eixos = [...(item.eixos || ["Pensamento Computacional"])];
        initialData.pilares = [...(item.pilares || [])];
        initialData.objetivos = item.objetivosSugeridos || '';
        initialData.estrategias = item.estrategiasSugeridas || '';
        
        if (item.praticasRecomendadas && item.praticasRecomendadas.length > 0) {
          const praticasNomes = item.praticasRecomendadas.map(id => {
            const p = PRATICAS_DATA.find(prat => prat.id === id);
            return p ? `• ${p.id} - ${p.titulo} (${p.tipo}): ${p.resumo}` : id;
          });
          initialData.atividades = praticasNomes.join('\n');
        }
      }
    } 
    // 3. Pré-carregamento a partir do Banco de Práticas
    else if (params.praticaId) {
      const p = PRATICAS_DATA.find(prat => prat.id === params.praticaId);
      if (p) {
        initialData.etapa = p.etapa.includes('Fundamental') ? 'Ensino Fundamental (Anos Finais)' :
                           p.etapa.includes('Médio') ? 'Ensino Médio' : 'EJA';
        initialData.ano = (p.ano.includes('6º') ? '6º Ano' :
                          p.ano.includes('7º') ? '7º Ano' :
                          p.ano.includes('8º') ? '8º Ano' :
                          p.ano.includes('9º') ? '9º Ano' :
                          p.ano.includes('1º') ? '1º Ano EM' :
                          p.ano.includes('2º') ? '2º Ano EM' :
                          p.ano.includes('3º') ? '3º Ano EM' : '6º Ano');
        initialData.conteudo = p.conteudoMatematico;
        initialData.atividades = `• ${p.id} - ${p.titulo} (${p.tipo}): ${p.resumo}`;
        initialData.recursos = p.materiais;
        initialData.tempoPrevisto = p.tempoEstimado;
        initialData.objetivos = p.objetivo;
        initialData.avaliacao = p.rubricaAvaliacao;
        initialData.pilares = [...(p.pilares || [])];
        initialData.eixos = ["Pensamento Computacional"];
      }
    }

    container.innerHTML = `
      <div class="fade-in space-y-6 max-w-4xl mx-auto">
        <!-- Cabeçalho -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">${self.currentPlanId ? '✏️' : '📝'}</span>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800">
                ${self.currentPlanId ? 'Editar Planejamento Pedagógico' : 'Elaborar Planejamento Integrado'}
              </h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-500">
              Plataforma aberta para os professores da Educação Básica: personalize os dados da sua escola e do seu planejamento.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#detalhes" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1">
              <span>📋</span> Ver Meus Planos
            </a>
          </div>
        </div>

        <!-- Alerta de Validação -->
        <div id="form-validation-alert" class="hidden p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-900 text-xs sm:text-sm space-y-1 shadow-sm">
          <p class="font-bold flex items-center gap-1.5">
            <span>⚠️</span> Pendências obrigatórias para salvar o planejamento:
          </p>
          <ul id="validation-errors-list" class="list-disc pl-5 space-y-0.5 text-xs text-red-800 font-medium"></ul>
        </div>

        <form id="planejamento-form" class="space-y-6">
          <input type="hidden" id="plan-id" value="${initialData.id || ''}">

          <!-- Bloco 0: Cabeçalho Docente e Unidade Escolar (Uso Aberto para Qualquer Professor) -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold">🏛️</span>
                <span>Cabeçalho do Planejamento (Identificação da Escola e do Docente)</span>
              </h3>
              <span class="text-xs text-slate-500 font-medium">Uso aberto para professores</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Nome do(a) Professor(a) <span class="text-red-500">*</span>
                </label>
                <input type="text" id="plan-professor" value="${initialData.nomeProfessor || ''}" 
                  placeholder="Ex: Prof. Rodrygo Dyego da Silva Nascimento"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Escola / Instituição de Ensino <span class="text-red-500">*</span>
                </label>
                <input type="text" id="plan-escola" value="${initialData.escola || ''}" 
                  placeholder="Ex: EREM Santa Maria / Escola Municipal de Igarassu"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800">
              </div>
            </div>
          </div>

          <!-- Bloco 1: Seleção em Cascata (Etapa -> Ano -> Conteúdo) -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
                <span>Turma e Conteúdo Curricular da BNCC</span>
              </h3>
              <span class="text-xs text-slate-400 font-normal">* Campos obrigatórios</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <!-- Seletor 1: Etapa de Ensino -->
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Etapa de Ensino <span class="text-red-500">*</span>
                </label>
                <select id="plan-etapa" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                  <option value="">-- Selecione a Etapa --</option>
                  <option value="Ensino Fundamental (Anos Finais)" ${initialData.etapa === 'Ensino Fundamental (Anos Finais)' ? 'selected' : ''}>Ensino Fundamental (6º ao 9º)</option>
                  <option value="Ensino Médio" ${initialData.etapa === 'Ensino Médio' ? 'selected' : ''}>Ensino Médio (1º ao 3º)</option>
                  <option value="EJA" ${initialData.etapa === 'EJA' ? 'selected' : ''}>Educação de Jovens e Adultos (EJA)</option>
                </select>
              </div>

              <!-- Seletor 2: Ano Escolar (Cascata estrita) -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Ano Escolar <span class="text-red-500">*</span>
                </label>
                <select id="plan-ano" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium" ${!initialData.etapa ? 'disabled' : ''}>
                  <option value="">-- Selecione a Etapa --</option>
                </select>
              </div>

              <!-- Campo 3: Turno / Turma -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Turno
                </label>
                <select id="plan-turno" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option value="Matutino" ${initialData.turno === 'Matutino' ? 'selected' : ''}>Matutino</option>
                  <option value="Vespertino" ${initialData.turno === 'Vespertino' ? 'selected' : ''}>Vespertino</option>
                  <option value="Noturno" ${initialData.turno === 'Noturno' ? 'selected' : ''}>Noturno</option>
                  <option value="Integral" ${initialData.turno === 'Integral' ? 'selected' : ''}>Integral</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Identificação da Turma (Opcional)
                </label>
                <input type="text" id="plan-turma" value="${initialData.turma || ''}" placeholder="Ex: Turma A / 8º B"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Conteúdo da BNCC Matemática <span class="text-red-500">*</span>
                </label>
                <select id="plan-conteudo-select" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 bg-white font-medium" ${!initialData.ano ? 'disabled' : ''}>
                  <option value="">-- Selecione o Ano para listar os conteúdos oficiais --</option>
                </select>
                <input type="text" id="plan-conteudo" value="${initialData.conteudo || ''}" placeholder="Tema da aula (preenchido automaticamente ou editável)"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold text-slate-800">
              </div>
            </div>
          </div>

          <!-- Bloco 2: Articulação com os 3 EIXOS da BNCC Computação -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
                <span>Articulação com os 3 Eixos da BNCC Computação (Res. CNE/CP 1/2022)</span>
              </h3>
              <span class="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Resolução CNE/CP nº 1/2022
              </span>
            </div>

            <!-- Seleção dos 3 EIXOS DA BNCC COMPUTAÇÃO -->
            <div class="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
              <label class="block text-xs font-extrabold uppercase tracking-wider text-slate-800">
                🌐 Eixos da BNCC Computação Mobilizados na Aula:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="flex items-start gap-2.5 p-3 rounded-lg border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 cursor-pointer transition-colors">
                  <input type="checkbox" name="plan-eixos" value="Pensamento Computacional" ${(initialData.eixos || []).includes("Pensamento Computacional") ? 'checked' : ''} class="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4">
                  <div>
                    <strong class="text-xs font-bold text-indigo-950 block">🧠 Pensamento Computacional</strong>
                    <span class="text-[11px] text-indigo-800/80 leading-tight block mt-0.5">Modelagem, resolução de problemas, algoritmos e abstração lógica.</span>
                  </div>
                </label>

                <label class="flex items-start gap-2.5 p-3 rounded-lg border border-cyan-200 bg-cyan-50/50 hover:bg-cyan-50 cursor-pointer transition-colors">
                  <input type="checkbox" name="plan-eixos" value="Mundo Digital" ${(initialData.eixos || []).includes("Mundo Digital") ? 'checked' : ''} class="mt-0.5 rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4">
                  <div>
                    <strong class="text-xs font-bold text-cyan-950 block">💻 Mundo Digital</strong>
                    <span class="text-[11px] text-cyan-800/80 leading-tight block mt-0.5">Sistemas computacionais, binário, hardware, software e planilhas.</span>
                  </div>
                </label>

                <label class="flex items-start gap-2.5 p-3 rounded-lg border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 cursor-pointer transition-colors">
                  <input type="checkbox" name="plan-eixos" value="Cultura Digital" ${(initialData.eixos || []).includes("Cultura Digital") ? 'checked' : ''} class="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4">
                  <div>
                    <strong class="text-xs font-bold text-emerald-950 block">👥 Cultura Digital</strong>
                    <span class="text-[11px] text-emerald-800/80 leading-tight block mt-0.5">Uso ético, cidadania digital, segurança de senhas e consumo crítico.</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Pilares do Pensamento Computacional -->
            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700">
                🧩 Pilares do Pensamento Computacional (caso mobilizado):
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                ${['Algoritmos', 'Abstração', 'Decomposição', 'Reconhecimento de Padrões'].map(pilar => `
                  <label class="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs font-semibold text-slate-700 transition-colors">
                    <input type="checkbox" name="plan-pilares" value="${pilar}" ${(initialData.pilares || []).includes(pilar) ? 'checked' : ''} class="rounded text-blue-600 focus:ring-blue-500 w-4 h-4">
                    <span>${pilar}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <!-- Habilidades Curriculares Lado a Lado -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div class="space-y-2 bg-blue-50/50 p-4 rounded-xl border border-blue-200">
                <label class="block text-xs font-bold text-blue-900 flex items-center justify-between">
                  <span>📐 Habilidade BNCC Matemática <span class="text-red-500">*</span></span>
                </label>
                <input type="text" id="plan-hab-mat-cod" value="${initialData.habilidadeMatematicaCodigo || ''}" placeholder="Código (Ex: EF08MA04)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-blue-300 bg-white text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea id="plan-hab-mat-desc" rows="3" placeholder="Descrição da habilidade matemática"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-blue-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.habilidadeMatematicaDescricao || ''}</textarea>
              </div>

              <div class="space-y-2 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200">
                <label class="block text-xs font-bold text-emerald-900 flex items-center justify-between">
                  <span>💻 Habilidade BNCC Computação <span class="text-red-500">*</span></span>
                </label>
                <input type="text" id="plan-hab-comp-cod" value="${initialData.habilidadeComputacaoCodigo || ''}" placeholder="Código (Ex: EF08CO04)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-emerald-300 bg-white text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <textarea id="plan-hab-comp-desc" rows="3" placeholder="Descrição da habilidade de computação"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-emerald-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">${initialData.habilidadeComputacaoDescricao || ''}</textarea>
              </div>
            </div>

            <!-- Orientações do Currículo de Pernambuco (CEDIM-PE) -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                🏛️ Orientações e Especificidades do Currículo de Pernambuco (CEDIM-PE)
              </label>
              <textarea id="plan-curriculo-pe" rows="2" placeholder="Diretrizes do Currículo de Pernambuco para a rede estadual e municipal..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.curriculoPE || ''}</textarea>
            </div>
          </div>

          <!-- Bloco 3: Metodologia e Desenvolvimento Pedagógico -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">3</span>
                <span>Objetivos, Metodologia e Avaliação Formativa</span>
              </h3>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                🎯 Objetivos de Aprendizagem
              </label>
              <textarea id="plan-objetivos" rows="3" placeholder="O que os estudantes deverão compreender e ser capazes de fazer ao final da aula..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.objetivos || ''}</textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                💡 Encaminhamento Metodológico / Estratégias Didáticas
              </label>
              <textarea id="plan-estrategias" rows="4" placeholder="Passo a passo da aula: acolhimento, desenvolvimento dos conceitos, mediação docente e fechamento..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.estrategias || ''}</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  ⏱️ Carga Horária / Tempo Previsto
                </label>
                <input type="text" id="plan-tempo" value="${initialData.tempoPrevisto || '2 aulas (100 min)'}" placeholder="Ex: 2 aulas de 50 min"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  📦 Recursos Didáticos e Tecnológicos
                </label>
                <input type="text" id="plan-recursos" value="${initialData.recursos || ''}" placeholder="Ex: Lousa, projetor, Scratch, planilhas, papel..."
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-bold text-slate-700">
                  🧩 Atividades e Práticas (Plugadas / Desplugadas)
                </label>
                <a href="#praticas" target="_blank" class="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                  <span>💡</span> Abrir Banco de Práticas ↗
                </a>
              </div>
              <textarea id="plan-atividades" rows="3" placeholder="Práticas selecionadas para a aula..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.atividades || ''}</textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                📊 Critérios de Avaliação e Rubricas Formativas
              </label>
              <textarea id="plan-avaliacao" rows="3" placeholder="Critérios formativos alinhados à BNCC Computação e Matemática..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.avaliacao || ''}</textarea>
            </div>
          </div>

          <!-- Barra de Ações -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 sticky bottom-4 shadow-xl z-20">
            <div class="flex items-center gap-2">
              <a href="#detalhes" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors">
                Cancelar
              </a>
              <button type="button" id="btn-limpar-form" class="px-3 py-2 text-xs text-slate-500 hover:text-red-600 transition-colors">
                Limpar Campos
              </button>
            </div>
            <button type="submit" id="btn-salvar-plano" class="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2">
              <span>💾</span> Salvar Planejamento Pedagógico
            </button>
          </div>
        </form>
      </div>
    `;

    self.setupFormLogic(container, initialData);
  },

  inferEtapaByAno: function(ano) {
    if (["6º Ano", "7º Ano", "8º Ano", "9º Ano"].includes(ano)) return "Ensino Fundamental (Anos Finais)";
    if (["1º Ano EM", "2º Ano EM", "3º Ano EM"].includes(ano)) return "Ensino Médio";
    if (["EJA Fundamental", "EJA Médio"].includes(ano)) return "EJA";
    return "Ensino Fundamental (Anos Finais)";
  },

  setupFormLogic: function(container, initialData) {
    const self = this;
    const form = container.querySelector('#planejamento-form');
    const professorInput = container.querySelector('#plan-professor');
    const escolaInput = container.querySelector('#plan-escola');
    const turnoSelect = container.querySelector('#plan-turno');
    const etapaSelect = container.querySelector('#plan-etapa');
    const anoSelect = container.querySelector('#plan-ano');
    const conteudoSelect = container.querySelector('#plan-conteudo-select');
    const conteudoInput = container.querySelector('#plan-conteudo');
    const habMatCod = container.querySelector('#plan-hab-mat-cod');
    const habMatDesc = container.querySelector('#plan-hab-mat-desc');
    const habCompCod = container.querySelector('#plan-hab-comp-cod');
    const habCompDesc = container.querySelector('#plan-hab-comp-desc');
    const curriculoPE = container.querySelector('#plan-curriculo-pe');
    const objetivosText = container.querySelector('#plan-objetivos');
    const estrategiasText = container.querySelector('#plan-estrategias');
    const atividadesText = container.querySelector('#plan-atividades');
    const validationAlert = container.querySelector('#form-validation-alert');
    const validationList = container.querySelector('#validation-errors-list');
    const btnLimpar = container.querySelector('#btn-limpar-form');

    function populateAnosByEtapa(etapa, selectedAno = '') {
      anoSelect.innerHTML = '<option value="">-- Selecione o Ano Escolar --</option>';
      conteudoSelect.innerHTML = '<option value="">-- Selecione o Ano Escolar para ver os conteúdos --</option>';
      conteudoSelect.disabled = true;

      if (!etapa || !self.ETAPAS_ANOS[etapa]) {
        anoSelect.disabled = true;
        anoSelect.innerHTML = '<option value="">-- Selecione a Etapa primeiro --</option>';
        return;
      }

      anoSelect.disabled = false;
      const anos = self.ETAPAS_ANOS[etapa];
      anos.forEach(a => {
        const opt = document.createElement('option');
        opt.value = a;
        opt.textContent = a;
        if (a === selectedAno) opt.selected = true;
        anoSelect.appendChild(opt);
      });

      if (selectedAno) {
        populateConteudosByAno(selectedAno, initialData.conteudo);
      }
    }

    function populateConteudosByAno(ano, selectedConteudo = '') {
      conteudoSelect.innerHTML = '<option value="">-- Selecione um conteúdo da BNCC para este ano --</option>';
      if (!ano) {
        conteudoSelect.disabled = true;
        return;
      }

      conteudoSelect.disabled = false;
      const filtered = CURRICULO_DATA.filter(c => c.ano === ano);
      filtered.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.conteudo} [${item.habilidadeMatematica.codigo}]`;
        if (item.conteudo === selectedConteudo || (initialData.habilidadeMatematicaCodigo && item.habilidadeMatematica.codigo === initialData.habilidadeMatematicaCodigo)) {
          opt.selected = true;
        }
        conteudoSelect.appendChild(opt);
      });
    }

    etapaSelect.addEventListener('change', function(e) {
      populateAnosByEtapa(e.target.value);
      conteudoInput.value = '';
    });

    anoSelect.addEventListener('change', function(e) {
      populateConteudosByAno(e.target.value);
    });

    conteudoSelect.addEventListener('change', function(e) {
      const id = e.target.value;
      if (!id) return;
      const item = CURRICULO_DATA.find(c => c.id === id);
      if (!item) return;

      conteudoInput.value = item.conteudo;
      habMatCod.value = item.habilidadeMatematica.codigo;
      habMatDesc.value = item.habilidadeMatematica.descricao;
      habCompCod.value = item.habilidadeComputacao.codigo;
      habCompDesc.value = item.habilidadeComputacao.descricao;
      curriculoPE.value = item.curriculoPE;
      
      if (!objetivosText.value.trim() || confirm('Deseja preencher os Objetivos e Metodologia com a sugestão recomendada para este conteúdo?')) {
        objetivosText.value = item.objetivosSugeridos || '';
        estrategiasText.value = item.estrategiasSugeridas || '';
      }

      // Marcar checkboxes dos 3 EIXOS da BNCC Computação
      const eixosCheckboxes = container.querySelectorAll('input[name="plan-eixos"]');
      eixosCheckboxes.forEach(cb => {
        cb.checked = (item.eixos || ["Pensamento Computacional"]).includes(cb.value);
      });

      // Marcar checkboxes dos pilares
      const pilaresCheckboxes = container.querySelectorAll('input[name="plan-pilares"]');
      pilaresCheckboxes.forEach(cb => {
        cb.checked = (item.pilares || []).includes(cb.value);
      });

      // Adicionar práticas recomendadas
      if (item.praticasRecomendadas && item.praticasRecomendadas.length > 0) {
        const nomes = item.praticasRecomendadas.map(pratId => {
          const pr = PRATICAS_DATA.find(p => p.id === pratId);
          return pr ? `• ${pr.id} - ${pr.titulo} (${pr.tipo}): ${pr.resumo}` : pratId;
        });
        atividadesText.value = nomes.join('\n');
      }

      App.showToast('Conteúdo, habilidades e eixos aplicados!', 'success');
    });

    if (initialData.etapa) {
      populateAnosByEtapa(initialData.etapa, initialData.ano);
    }

    if (btnLimpar) {
      btnLimpar.addEventListener('click', function() {
        if (confirm('Deseja realmente limpar todos os campos preenchidos?')) {
          form.reset();
          etapaSelect.value = '';
          anoSelect.innerHTML = '<option value="">-- Selecione a Etapa primeiro --</option>';
          anoSelect.disabled = true;
          conteudoSelect.innerHTML = '<option value="">-- Selecione o Ano primeiro --</option>';
          conteudoSelect.disabled = true;
          validationAlert.classList.add('hidden');
        }
      });
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nomeProf = professorInput.value.trim();
      const escola = escolaInput.value.trim();
      const etapa = etapaSelect.value.trim();
      const ano = anoSelect.value.trim();
      const turma = container.querySelector('#plan-turma').value.trim();
      const turno = turnoSelect.value.trim();
      const conteudo = conteudoInput.value.trim();
      const habMatCodeVal = habMatCod.value.trim();
      const habMatDescVal = habMatDesc.value.trim();
      const habCompCodeVal = habCompCod.value.trim();
      const habCompDescVal = habCompDesc.value.trim();

      const errors = [];
      if (!nomeProf) errors.push('Nome do(a) Professor(a)');
      if (!escola) errors.push('Escola / Instituição de Ensino');
      if (!etapa) errors.push('Etapa de Ensino (Fundamental, Médio ou EJA)');
      if (!ano) errors.push('Ano Escolar da Turma');
      if (!conteudo) errors.push('Conteúdo Matemático Curricular');
      if (!habMatCodeVal) errors.push('Código da Habilidade BNCC Matemática');
      if (!habCompCodeVal) errors.push('Código da Habilidade BNCC Computação');

      if (errors.length > 0) {
        validationList.innerHTML = errors.map(err => `<li>Campo obrigatório: <strong>${err}</strong></li>`).join('');
        validationAlert.classList.remove('hidden');
        validationAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        App.showToast('Preencha os campos destacados para salvar.', 'error');
        return;
      }

      validationAlert.classList.add('hidden');

      // Coleta dos Eixos da BNCC Computação
      const eixosChecked = [];
      container.querySelectorAll('input[name="plan-eixos"]:checked').forEach(cb => {
        eixosChecked.push(cb.value);
      });
      if (eixosChecked.length === 0) {
        eixosChecked.push("Pensamento Computacional");
      }

      // Coleta dos Pilares
      const pilaresChecked = [];
      container.querySelectorAll('input[name="plan-pilares"]:checked').forEach(cb => {
        pilaresChecked.push(cb.value);
      });

      const planData = {
        id: self.currentPlanId || undefined,
        nomeProfessor: nomeProf,
        escola: escola,
        etapa: etapa,
        ano: ano,
        turma: turma,
        turno: turno,
        conteudo: conteudo,
        habilidadeMatematicaCodigo: habMatCodeVal,
        habilidadeMatematicaDescricao: habMatDescVal,
        habilidadeComputacaoCodigo: habCompCodeVal,
        habilidadeComputacaoDescricao: habCompDescVal,
        curriculoPE: curriculoPE.value.trim(),
        eixos: eixosChecked,
        pilares: pilaresChecked,
        objetivos: objetivosText.value.trim(),
        estrategias: estrategiasText.value.trim(),
        atividades: atividadesText.value.trim(),
        recursos: container.querySelector('#plan-recursos').value.trim(),
        tempoPrevisto: container.querySelector('#plan-tempo').value.trim(),
        avaliacao: container.querySelector('#plan-avaliacao').value.trim()
      };

      const saved = CompMathDB.savePlanejamento(planData);
      App.showToast('Planejamento pedagógico salvo com sucesso!', 'success');
      window.location.hash = `#detalhes?id=${saved.id}`;
    });
  }
};
