/**
 * Controller: Planejamento Pedagógico
 * Assistente para elaboração e edição de planos de aula integrados (BNCC Mat + BNCC Comp + PE).
 */

const PlanejamentoController = {
  currentPlanId: null,
  activeCurriculoItem: null,

  render: function(container, params = {}) {
    const self = this;
    self.currentPlanId = params.id || null;

    let initialData = {
      id: null,
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

    // Caso seja edição de plano existente
    if (self.currentPlanId) {
      const existing = CompMathDB.getPlanejamentoById(self.currentPlanId);
      if (existing) {
        initialData = { ...existing };
      }
    } else if (params.habilidadeId) {
      // Caso venha da matriz curricular
      const item = CURRICULO_DATA.find(c => c.id === params.habilidadeId);
      if (item) {
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
        
        // Atividades recomendadas
        if (item.praticasRecomendadas && item.praticasRecomendadas.length > 0) {
          const praticasNomes = item.praticasRecomendadas.map(id => {
            const p = PRATICAS_DATA.find(prat => prat.id === id);
            return p ? `${p.id} - ${p.titulo} (${p.tipo})` : id;
          });
          initialData.atividades = praticasNomes.join('\n');
        }
      }
    } else if (params.praticaId) {
      // Caso venha do Banco de Práticas
      const p = PRATICAS_DATA.find(prat => prat.id === params.praticaId);
      if (p) {
        initialData.ano = p.ano.split(' e ')[0] || '6º Ano';
        initialData.conteudo = p.conteudoMatematico;
        initialData.atividades = `${p.id} - ${p.titulo} (${p.tipo}): ${p.resumo}`;
        initialData.recursos = p.materiais;
        initialData.tempoPrevisto = p.tempoEstimado;
        initialData.objetivos = p.objetivo;
        initialData.avaliacao = p.rubricaAvaliacao;
        initialData.pilares = [...(p.pilares || [])];
      }
    }

    const anosDisponiveis = Array.from(new Set(CURRICULO_DATA.map(c => c.ano)));

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
              Preencha os dados da aula. O sistema relaciona automaticamente as habilidades e estratégias metodológicas.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#detalhes" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors">
              Ver Salvos
            </a>
          </div>
        </div>

        <!-- Alerta de Validação (O que pode dar errado - Caso de Uso 2) -->
        <div id="form-validation-alert" class="hidden p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-900 text-xs sm:text-sm space-y-1">
          <p class="font-bold flex items-center gap-1.5">
            <span>⚠️</span> Atenção: Existem campos obrigatórios não preenchidos!
          </p>
          <ul id="validation-errors-list" class="list-disc pl-5 space-y-0.5 text-xs text-red-800"></ul>
        </div>

        <!-- Formulário Estruturado -->
        <form id="planejamento-form" class="space-y-6">
          <input type="hidden" id="plan-id" value="${initialData.id || ''}">

          <!-- Bloco 1: Identificação da Aula -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
                <span>Identificação da Turma e Seleção Curricular</span>
              </h3>
              <span class="text-xs text-slate-400 font-normal">* Campos obrigatórios</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Ano Escolar / Etapa <span class="text-red-500">*</span>
                </label>
                <select id="plan-ano" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">-- Selecione o Ano Escolar --</option>
                  ${anosDisponiveis.map(a => `<option value="${a}" ${initialData.ano === a ? 'selected' : ''}>${a}</option>`).join('')}
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Identificação da Turma (Opcional)
                </label>
                <input type="text" id="plan-turma" value="${initialData.turma || ''}" placeholder="Ex: 3º Ano A - Matutino / 6º B"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                Conteúdo Matemático da Aula <span class="text-red-500">*</span>
              </label>
              <select id="plan-conteudo-select" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                <option value="">-- Selecione o Conteúdo Sugerido ou preencha abaixo --</option>
              </select>
              <input type="text" id="plan-conteudo" value="${initialData.conteudo || ''}" placeholder="Nome ou tema da aula de matemática"
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
          </div>

          <!-- Bloco 2: Articulação Curricular Automática -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
                <span>Articulação BNCC Matemática + BNCC Computação + PE</span>
              </h3>
              <span class="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Relação Automática</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- BNCC Matemática -->
              <div class="space-y-2 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                <label class="block text-xs font-bold text-blue-900">
                  📐 Habilidade BNCC Matemática <span class="text-red-500">*</span>
                </label>
                <input type="text" id="plan-hab-mat-cod" value="${initialData.habilidadeMatematicaCodigo || ''}" placeholder="Código (Ex: EM13MAT311)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea id="plan-hab-mat-desc" rows="3" placeholder="Descrição da habilidade matemática"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.habilidadeMatematicaDescricao || ''}</textarea>
              </div>

              <!-- BNCC Computação -->
              <div class="space-y-2 bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
                <label class="block text-xs font-bold text-emerald-900">
                  💻 Habilidade BNCC Computação <span class="text-red-500">*</span>
                </label>
                <input type="text" id="plan-hab-comp-cod" value="${initialData.habilidadeComputacaoCodigo || ''}" placeholder="Código (Ex: EM13CO01)"
                  class="w-full px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <textarea id="plan-hab-comp-desc" rows="3" placeholder="Descrição da habilidade de computação"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">${initialData.habilidadeComputacaoDescricao || ''}</textarea>
              </div>
            </div>

            <!-- Orientações do Currículo de Pernambuco -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                🏛️ Orientações do Currículo de Pernambuco
              </label>
              <textarea id="plan-curriculo-pe" rows="2" placeholder="Orientações e especificidades da rede estadual / municipal de PE"
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.curriculoPE || ''}</textarea>
            </div>

            <!-- Pilares do Pensamento Computacional -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-2">
                🧠 Pilares do Pensamento Computacional Envolvidos
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                ${['Algoritmos', 'Abstração', 'Decomposição', 'Reconhecimento de Padrões'].map(pilar => `
                  <label class="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-700">
                    <input type="checkbox" name="plan-pilares" value="${pilar}" ${(initialData.pilares || []).includes(pilar) ? 'checked' : ''} class="rounded text-blue-600 focus:ring-blue-500">
                    <span>${pilar}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Bloco 3: Metodologia, Objetivos e Estratégias -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">3</span>
                <span>Objetivos e Estratégias Metodológicas</span>
              </h3>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                🎯 Objetivos de Aprendizagem
              </label>
              <textarea id="plan-objetivos" rows="3" placeholder="O que os estudantes deverão compreender e ser capazes de fazer ao final da aula..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.objetivos || ''}</textarea>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                💡 Estratégias Pedagógicas / Encaminhamento Metodológico
              </label>
              <textarea id="plan-estrategias" rows="4" placeholder="Passo a passo da aula: acolhimento, desenvolvimento dos conceitos, mediação docente e fechamento..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.estrategias || ''}</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  ⏱️ Carga Horária / Tempo Previsto
                </label>
                <input type="text" id="plan-tempo" value="${initialData.tempoPrevisto || '2 aulas (100 min)'}" placeholder="Ex: 2 aulas de 50 min"
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  📦 Recursos Didáticos e Tecnológicos
                </label>
                <input type="text" id="plan-recursos" value="${initialData.recursos || ''}" placeholder="Ex: Lousa, projetor, Scratch, papel quadriculado, moedas..."
                  class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>
          </div>

          <!-- Bloco 4: Práticas Pedagógicas e Avaliação -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">4</span>
                <span>Atividades Selecionadas e Avaliação Formativa</span>
              </h3>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-semibold text-slate-700">
                  🧩 Atividades / Práticas Integradas
                </label>
                <a href="#praticas" target="_blank" class="text-xs text-blue-600 hover:text-blue-800 font-medium">
                  Consultar Banco de Práticas ↗
                </a>
              </div>
              <textarea id="plan-atividades" rows="3" placeholder="Práticas plugadas ou desplugadas inseridas no planejamento..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.atividades || ''}</textarea>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                📊 Critérios de Avaliação e Rubricas Formativas
              </label>
              <textarea id="plan-avaliacao" rows="3" placeholder="Como será avaliada a aprendizagem dos conceitos matemáticos e do pensamento computacional..."
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData.avaliacao || ''}</textarea>
            </div>
          </div>

          <!-- Barra de Ações -->
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 sticky bottom-4 shadow-lg backdrop-blur-md">
            <div class="flex items-center gap-2">
              <a href="#detalhes" class="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors">
                Cancelar
              </a>
              <button type="button" id="btn-limpar-form" class="px-3 py-2 text-xs text-slate-500 hover:text-red-600 transition-colors">
                Limpar Campos
              </button>
            </div>
            <button type="submit" class="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2">
              <span>💾</span> Salvar Planejamento Pedagógico
            </button>
          </div>
        </form>
      </div>
    `;

    self.setupFormLogic(container, initialData);
  },

  setupFormLogic: function(container, initialData) {
    const self = this;
    const form = container.querySelector('#planejamento-form');
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

    function populateConteudosByAno(ano) {
      if (!conteudoSelect) return;
      conteudoSelect.innerHTML = '<option value="">-- Selecione um conteúdo mapeado para este ano --</option>';
      if (!ano) return;

      const filtered = CURRICULO_DATA.filter(c => c.ano === ano);
      filtered.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.conteudo} (${item.habilidadeMatematica.codigo})`;
        conteudoSelect.appendChild(opt);
      });
    }

    if (anoSelect) {
      anoSelect.addEventListener('change', function(e) {
        populateConteudosByAno(e.target.value);
      });
      if (initialData.ano) {
        populateConteudosByAno(initialData.ano);
      }
    }

    if (conteudoSelect) {
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
        
        if (!objetivosText.value.trim()) {
          objetivosText.value = item.objetivosSugeridos || '';
        }
        if (!estrategiasText.value.trim()) {
          estrategiasText.value = item.estrategiasSugeridas || '';
        }

        // Marcar checkboxes dos pilares
        const pilaresCheckboxes = container.querySelectorAll('input[name="plan-pilares"]');
        pilaresCheckboxes.forEach(cb => {
          cb.checked = (item.pilares || []).includes(cb.value);
        });

        // Adicionar práticas recomendadas caso vazio
        if (!atividadesText.value.trim() && item.praticasRecomendadas && item.praticasRecomendadas.length > 0) {
          const nomes = item.praticasRecomendadas.map(pratId => {
            const pr = PRATICAS_DATA.find(p => p.id === pratId);
            return pr ? `${pr.id} - ${pr.titulo} (${pr.tipo})` : pratId;
          });
          atividadesText.value = nomes.join('\n');
        }

        App.showToast('Articulação curricular aplicada com sucesso!', 'success');
      });
    }

    if (btnLimpar) {
      btnLimpar.addEventListener('click', function() {
        if (confirm('Deseja realmente limpar todos os campos preenchidos?')) {
          form.reset();
          validationAlert.classList.add('hidden');
        }
      });
    }

    // Submit com validação estrita (Caso de Uso 2)
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const ano = anoSelect.value.trim();
      const turma = container.querySelector('#plan-turma').value.trim();
      const conteudo = conteudoInput.value.trim();
      const habMatCodeVal = habMatCod.value.trim();
      const habMatDescVal = habMatDesc.value.trim();
      const habCompCodeVal = habCompCod.value.trim();
      const habCompDescVal = habCompDesc.value.trim();

      // Validação de campos obrigatórios
      const errors = [];
      if (!ano) errors.push('Ano Escolar / Etapa');
      if (!conteudo) errors.push('Conteúdo Matemático');
      if (!habMatCodeVal) errors.push('Código da Habilidade BNCC Matemática');
      if (!habCompCodeVal) errors.push('Código da Habilidade BNCC Computação');

      if (errors.length > 0) {
        validationList.innerHTML = errors.map(err => `<li>Por favor, informe: <strong>${err}</strong></li>`).join('');
        validationAlert.classList.remove('hidden');
        validationAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        App.showToast('Preencha os campos obrigatórios para salvar.', 'error');
        return;
      }

      validationAlert.classList.add('hidden');

      // Coleta dos pilares selecionados
      const pilaresChecked = [];
      container.querySelectorAll('input[name="plan-pilares"]:checked').forEach(cb => {
        pilaresChecked.push(cb.value);
      });

      const planData = {
        id: self.currentPlanId || undefined,
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
      
      // Redireciona para visualização detalhada
      window.location.hash = `#detalhes?id=${saved.id}`;
    });
  }
};
