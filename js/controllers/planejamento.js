/**
 * Controller: Planejamento Pedagógico (CompMath v2.2)
 * Assistente robusto para elaboração e edição de planos de aula integrados.
 * Suporta seleção em cascata rigorosa: Etapa -> Ano Escolar -> Conteúdo Curricular.
 */

const PlanejamentoController = {
  currentPlanId: null,

  // Mapeamento estrito de Anos por Etapa
  ETAPAS_ANOS: {
    "Ensino Fundamental (Anos Finais)": ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
    "Ensino Médio": ["1º Ano EM", "2º Ano EM", "3º Ano EM"],
    "EJA": ["EJA Fundamental", "EJA Médio"]
  },

  render: function(container, params = {}) {
    const self = this;
    self.currentPlanId = params.id || null;

    let initialData = {
      id: null,
      etapa: '',
      ano: '',
      turma: '',
      conteudo: '',
      habilidadeMatematicaCodigo: '',
      habilidadeMatematicaDescricao: '',
      habilidadeComputacaoCodigo: '',
      habilidadeComputacaoDescricao: '',
      curriculoPE: '',
      pilares: [],
      objetivos: '',
      estrategias: '',
      atividades: '',
      recursos: '',
      tempoPrevisto: '2 aulas (100 min)',
      avaliacao: ''
    };

    // 1. Caso seja edição de plano existente
    if (self.currentPlanId) {
      const existing = CompMathDB.getPlanejamentoById(self.currentPlanId);
      if (existing) {
        initialData = { ...existing };
        // Inferir etapa caso não exista no objeto antigo
        if (!initialData.etapa && initialData.ano) {
          initialData.etapa = self.inferEtapaByAno(initialData.ano);
        }
      }
    } 
    // 2. Caso venha da matriz de integração curricular
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
    // 3. Caso venha do Banco de Práticas
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
              Selecione a Etapa para carregar as turmas correspondentes e os conteúdos da BNCC com preenchimento automático.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#detalhes" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1">
              <span>📋</span> Ver Meus Planos
            </a>
          </div>
        </div>

        <!-- Alerta de Validação (Caso de Uso 2) -->
        <div id="form-validation-alert" class="hidden p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-900 text-xs sm:text-sm space-y-1 shadow-sm">
          <p class="font-bold flex items-center gap-1.5">
            <span>⚠️</span> Pendências no formulário:
          </p>
          <ul id="validation-errors-list" class="list-disc pl-5 space-y-0.5 text-xs text-red-800 font-medium"></ul>
        </div>

        <!-- Formulário Estruturado -->
        <form id="planejamento-form" class="space-y-6">
          <input type="hidden" id="plan-id" value="${initialData.id || ''}">

          <!-- Bloco 1: Seleção em Cascata (Etapa -> Ano -> Conteúdo) -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
                <span>Etapa de Ensino e Seleção Curricular da Turma</span>
              </h3>
              <span class="text-xs text-slate-400 font-normal">* Campos obrigatórios</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Seletor 1: Etapa de Ensino -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  1. Etapa de Ensino <span class="text-red-500">*</span>
                </label>
                <select id="plan-etapa" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                  <option value="">-- Selecione a Etapa --</option>
                  <option value="Ensino Fundamental (Anos Finais)" ${initialData.etapa === 'Ensino Fundamental (Anos Finais)' ? 'selected' : ''}>Ensino Fundamental (Anos Finais)</option>
                  <option value="Ensino Médio" ${initialData.etapa === 'Ensino Médio' ? 'selected' : ''}>Ensino Médio</option>
                  <option value="EJA" ${initialData.etapa === 'EJA' ? 'selected' : ''}>Educação de Jovens e Adultos (EJA)</option>
                </select>
              </div>

              <!-- Seletor 2: Ano Escolar (Filtrado estritamente pela Etapa) -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  2. Ano Escolar <span class="text-red-500">*</span>
                </label>
                <select id="plan-ano" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium" ${!initialData.etapa ? 'disabled' : ''}>
                  <option value="">-- Selecione a Etapa primeiro --</option>
                </select>
              </div>

              <!-- Campo 3: Identificação da Turma -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  3. Identificação da Turma (Opcional)
                </label>
                <input type="text" id="plan-turma" value="${initialData.turma || ''}" placeholder="Ex: 6º Ano A, 3º EM Noturno, EJA III"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <!-- Seletor 3: Conteúdo Curricular -->
            <div class="pt-2">
              <label class="block text-xs font-bold text-slate-700 mb-1">
                4. Conteúdo Matemático Curricular (BNCC) <span class="text-red-500">*</span>
              </label>
              <select id="plan-conteudo-select" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 bg-white font-medium" ${!initialData.ano ? 'disabled' : ''}>
                <option value="">-- Selecione o Ano Escolar para ver os conteúdos disponíveis --</option>
              </select>
              <input type="text" id="plan-conteudo" value="${initialData.conteudo || ''}" placeholder="Nome ou tema da aula (preenchido automaticamente ou personalizável)"
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold text-slate-800">
            </div>
          </div>

          <!-- Bloco 2: Articulação Curricular Automática -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
                <span>Articulação BNCC Matemática + BNCC Computação + PE</span>
              </h3>
              <span class="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                ⚡ Preenchimento Inteligente
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- BNCC Matemática -->
              <div class="space-y-2 bg-blue-50/50 p-4 rounded-xl border border-blue-200">
                <label class="block text-xs font-bold text-blue-900 flex items-center justify-between">
                  <span>📐 Habilidade BNCC Matemática <span class="text-red-500">*</span></span>
                </label>
                <input type="text" id="plan-hab-mat-cod" value="${initialData.habilidadeMatematicaCodigo || ''}" placeholder="Código (Ex: EF06MA05)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-blue-300 bg-white text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea id="plan-hab-mat-desc" rows="3" placeholder="Descrição oficial da habilidade da BNCC Matemática"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-blue-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.habilidadeMatematicaDescricao || ''}</textarea>
              </div>

              <!-- BNCC Computação -->
              <div class="space-y-2 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200">
                <label class="block text-xs font-bold text-emerald-900 flex items-center justify-between">
                  <span>💻 Habilidade BNCC Computação <span class="text-red-500">*</span></span>
                </label>
                <input type="text" id="plan-hab-comp-cod" value="${initialData.habilidadeComputacaoCodigo || ''}" placeholder="Código (Ex: EF06CO01)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-emerald-300 bg-white text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <textarea id="plan-hab-comp-desc" rows="3" placeholder="Descrição oficial da habilidade da BNCC Computação (Resolução CNE/CP 1/2022)"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-emerald-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">${initialData.habilidadeComputacaoDescricao || ''}</textarea>
              </div>
            </div>

            <!-- Orientações do Currículo de Pernambuco -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                🏛️ Orientações e Especificidades do Currículo de Pernambuco
              </label>
              <textarea id="plan-curriculo-pe" rows="2" placeholder="Diretrizes do Currículo de Pernambuco para a rede estadual e municipal..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.curriculoPE || ''}</textarea>
            </div>

            <!-- Pilares do Pensamento Computacional -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-2">
                🧠 Pilares do Pensamento Computacional Envolvidos
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
          </div>

          <!-- Bloco 3: Metodologia, Objetivos e Práticas -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">3</span>
                <span>Desenvolvimento Pedagógico da Aula</span>
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
                <input type="text" id="plan-recursos" value="${initialData.recursos || ''}" placeholder="Ex: Lousa, projetor, Scratch, papel quadriculado, moedas..."
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
              <textarea id="plan-avaliacao" rows="3" placeholder="Como será avaliada a participação e aprendizagem dos conceitos matemáticos e computacionais..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.avaliacao || ''}</textarea>
            </div>
          </div>

          <!-- Barra de Ações com Botões Robustos -->
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

    // Função para preencher anos com base estrita na etapa selecionada
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

    // Função para preencher conteúdos correspondentes àquele ano escolar
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

    // Evento: Mudança de Etapa
    etapaSelect.addEventListener('change', function(e) {
      populateAnosByEtapa(e.target.value);
      conteudoInput.value = '';
    });

    // Evento: Mudança de Ano Escolar
    anoSelect.addEventListener('change', function(e) {
      populateConteudosByAno(e.target.value);
    });

    // Evento: Mudança de Conteúdo Selecionado (Preenchimento Inteligente)
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

      App.showToast('Conteúdo e habilidades da BNCC aplicados!', 'success');
    });

    // Inicialização caso já venha com dados pré-carregados
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

    // Submissão com Validação Estrita (Caso de Uso 2)
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const etapa = etapaSelect.value.trim();
      const ano = anoSelect.value.trim();
      const turma = container.querySelector('#plan-turma').value.trim();
      const conteudo = conteudoInput.value.trim();
      const habMatCodeVal = habMatCod.value.trim();
      const habMatDescVal = habMatDesc.value.trim();
      const habCompCodeVal = habCompCod.value.trim();
      const habCompDescVal = habCompDesc.value.trim();

      const errors = [];
      if (!etapa) errors.push('Etapa de Ensino (Fundamental, Médio ou EJA)');
      if (!ano) errors.push('Ano Escolar correspondente à turma');
      if (!conteudo) errors.push('Conteúdo Matemático Curricular');
      if (!habMatCodeVal) errors.push('Código da Habilidade BNCC Matemática');
      if (!habCompCodeVal) errors.push('Código da Habilidade BNCC Computação');

      if (errors.length > 0) {
        validationList.innerHTML = errors.map(err => `<li>Campo pendente: <strong>${err}</strong></li>`).join('');
        validationAlert.classList.remove('hidden');
        validationAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        App.showToast('Preencha os campos obrigatórios para salvar.', 'error');
        return;
      }

      validationAlert.classList.add('hidden');

      // Coleta dos pilares
      const pilaresChecked = [];
      container.querySelectorAll('input[name="plan-pilares"]:checked').forEach(cb => {
        pilaresChecked.push(cb.value);
      });

      const planData = {
        id: self.currentPlanId || undefined,
        etapa: etapa,
        ano: ano,
        turma: turma,
        conteudo: conteudo,
        habilidadeMatematicaCodigo: habMatCodeVal,
        habilidadeMatematicaDescricao: habMatDescVal,
        habilidadeComputacaoCodigo: habCompCodeVal,
        habilidadeComputacaoDescricao: habCompDescVal,
        curriculoPE: curriculoPE.value.trim(),
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
      
      // Redireciona imediatamente para a ficha oficial
      window.location.hash = `#detalhes?id=${saved.id}`;
    });
  }
};
