/**
 * Controller: Integração Curricular
 * Matriz inteligente que relaciona conteúdos de Matemática com a BNCC Computação e o Currículo de Pernambuco.
 */

const IntegracaoController = {
  selectedEtapa: 'todas',
  selectedAno: 'todos',
  selectedUnidade: 'todas',
  searchQuery: '',

  render: function(container) {
    const self = this;
    
    // Obter anos disponíveis para o select dinâmico
    const anos = Array.from(new Set(CURRICULO_DATA.map(c => c.ano)));
    const unidades = Array.from(new Set(CURRICULO_DATA.map(c => c.unidadeTematica)));

    container.innerHTML = `
      <div class="fade-in space-y-6">
        <!-- Cabeçalho da Seção -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-2xl">🔗</span>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800">Matriz de Integração Curricular</h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-500">
              Articulação automatizada: Conteúdos de Matemática ↔ BNCC Computação ↔ Currículo de Pernambuco
            </p>
          </div>
          <a href="#planejamento" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow transition-colors">
            ➕ Novo Planejamento
          </a>
        </div>

        <!-- Filtros e Barra de Pesquisa -->
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <!-- Busca Geral -->
            <div class="lg:col-span-1">
              <label class="block text-xs font-semibold text-slate-700 mb-1">🔍 Buscar por Termo ou Código</label>
              <input type="text" id="integracao-search" placeholder="Ex: Probabilidade, EF06MA, Scratch..." 
                value="${self.searchQuery}"
                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Filtro por Etapa -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Etapa de Ensino</label>
              <select id="integracao-filtro-etapa" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="todas" ${self.selectedEtapa === 'todas' ? 'selected' : ''}>Todas as Etapas</option>
                <option value="Ensino Fundamental (Anos Finais)" ${self.selectedEtapa === 'Ensino Fundamental (Anos Finais)' ? 'selected' : ''}>Ensino Fundamental (6º ao 9º)</option>
                <option value="Ensino Médio" ${self.selectedEtapa === 'Ensino Médio' ? 'selected' : ''}>Ensino Médio (1º ao 3º)</option>
                <option value="EJA" ${self.selectedEtapa === 'EJA' ? 'selected' : ''}>Educação de Jovens e Adultos (EJA)</option>
              </select>
            </div>

            <!-- Filtro por Ano -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Ano Escolar / Módulo</label>
              <select id="integracao-filtro-ano" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="todos">Todos os Anos</option>
                ${anos.map(a => `<option value="${a}" ${self.selectedAno === a ? 'selected' : ''}>${a}</option>`).join('')}
              </select>
            </div>

            <!-- Filtro por Unidade Temática -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Unidade Temática</label>
              <select id="integracao-filtro-unidade" class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="todas">Todas as Unidades</option>
                ${unidades.map(u => `<option value="${u}" ${self.selectedUnidade === u ? 'selected' : ''}>${u}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span id="integracao-count">Carregando dados...</span>
            <button id="integracao-reset-filters" class="text-blue-600 hover:text-blue-800 font-medium">Limpar Filtros</button>
          </div>
        </div>

        <!-- Lista de Integrações Curriculares -->
        <div id="integracao-lista" class="space-y-4">
          <!-- Renderizado via JS -->
        </div>
      </div>
    `;

    self.setupEvents(container);
    self.renderList(container);
  },

  setupEvents: function(container) {
    const self = this;
    const searchInput = container.querySelector('#integracao-search');
    const etapaSelect = container.querySelector('#integracao-filtro-etapa');
    const anoSelect = container.querySelector('#integracao-filtro-ano');
    const unidadeSelect = container.querySelector('#integracao-filtro-unidade');
    const resetBtn = container.querySelector('#integracao-reset-filters');

    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        self.searchQuery = e.target.value.toLowerCase().trim();
        self.renderList(container);
      });
    }

    if (etapaSelect) {
      etapaSelect.addEventListener('change', function(e) {
        self.selectedEtapa = e.target.value;
        self.renderList(container);
      });
    }

    if (anoSelect) {
      anoSelect.addEventListener('change', function(e) {
        self.selectedAno = e.target.value;
        self.renderList(container);
      });
    }

    if (unidadeSelect) {
      unidadeSelect.addEventListener('change', function(e) {
        self.selectedUnidade = e.target.value;
        self.renderList(container);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        self.selectedEtapa = 'todas';
        self.selectedAno = 'todos';
        self.selectedUnidade = 'todas';
        self.searchQuery = '';
        searchInput.value = '';
        etapaSelect.value = 'todas';
        anoSelect.value = 'todos';
        unidadeSelect.value = 'todas';
        self.renderList(container);
      });
    }
  },

  renderList: function(container) {
    const self = this;
    const listContainer = container.querySelector('#integracao-lista');
    const countSpan = container.querySelector('#integracao-count');
    if (!listContainer) return;

    let filtered = CURRICULO_DATA.filter(item => {
      if (self.selectedEtapa !== 'todas' && item.etapa !== self.selectedEtapa) return false;
      if (self.selectedAno !== 'todos' && item.ano !== self.selectedAno) return false;
      if (self.selectedUnidade !== 'todas' && item.unidadeTematica !== self.selectedUnidade) return false;
      if (self.searchQuery) {
        const text = [
          item.ano,
          item.conteudo,
          item.unidadeTematica,
          item.habilidadeMatematica.codigo,
          item.habilidadeMatematica.descricao,
          item.habilidadeComputacao.codigo,
          item.habilidadeComputacao.descricao,
          item.curriculoPE,
          (item.pilares || []).join(' ')
        ].join(' ').toLowerCase();
        if (!text.includes(self.searchQuery)) return false;
      }
      return true;
    });

    if (countSpan) {
      countSpan.textContent = `Exibindo ${filtered.length} de ${CURRICULO_DATA.length} articulações curriculares mapeadas`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
          <div class="text-3xl mb-2">🔎</div>
          <h4 class="font-bold text-slate-800 text-base mb-1">Nenhum resultado para os filtros atuais</h4>
          <p class="text-xs sm:text-sm text-slate-500 mb-4">Tente buscar por termos mais amplos ou redefinir os seletores de ano e etapa.</p>
          <button onclick="document.querySelector('#integracao-reset-filters').click()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold">
            Redefinir Filtros
          </button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => `
      <div class="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 transition-all overflow-hidden">
        <!-- Barra Superior com Metadados -->
        <div class="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
              ${item.ano}
            </span>
            <span class="text-xs text-slate-500 font-medium">
              ${item.etapa} • <strong class="text-slate-700">${item.unidadeTematica}</strong>
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${(item.pilares || []).map(pilar => `
              <span class="text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                pilar === 'Algoritmos' ? 'badge-algoritmos' :
                pilar === 'Abstração' ? 'badge-abstracao' :
                pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
              }">${pilar}</span>
            `).join('')}
          </div>
        </div>

        <!-- Conteúdo Principal do Card -->
        <div class="p-5 space-y-4">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📐</span>
            <span>${item.conteudo}</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Coluna BNCC Matemática -->
            <div class="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-blue-900 tracking-wide flex items-center gap-1">
                  <span>📐</span> BNCC MATEMÁTICA
                </span>
                <span class="font-mono text-xs font-bold px-2 py-0.5 bg-blue-200 text-blue-900 rounded">
                  ${item.habilidadeMatematica.codigo}
                </span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                ${item.habilidadeMatematica.descricao}
              </p>
            </div>

            <!-- Coluna BNCC Computação -->
            <div class="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-emerald-900 tracking-wide flex items-center gap-1">
                  <span>💻</span> BNCC COMPUTAÇÃO
                </span>
                <span class="font-mono text-xs font-bold px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded">
                  ${item.habilidadeComputacao.codigo}
                </span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                ${item.habilidadeComputacao.descricao}
              </p>
            </div>
          </div>

          <!-- Orientações do Currículo de Pernambuco -->
          <div class="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5">
            <span class="text-base flex-shrink-0">🏛️</span>
            <div>
              <strong class="font-semibold text-amber-900">Orientações do Currículo de Pernambuco:</strong>
              <p class="mt-0.5 text-amber-900/90 leading-relaxed">${item.curriculoPE}</p>
            </div>
          </div>

          <!-- Sugestão Didática Integrada -->
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <div class="font-semibold text-slate-800 flex items-center gap-1">
              <span>💡</span> Proposta Metodológica Sugerida:
            </div>
            <p class="text-slate-600 leading-relaxed">${item.estrategiasSugeridas}</p>
          </div>

          <!-- Ações de Apoio -->
          <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div class="text-xs text-slate-500">
              Práticas conectadas: <strong>${(item.praticasRecomendadas || []).length} atividade(s)</strong> no banco
            </div>
            <div class="flex items-center gap-2">
              <a href="#praticas?q=${encodeURIComponent(item.conteudo)}" class="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                Ver Práticas
              </a>
              <a href="#planejamento?habilidadeId=${item.id}" class="px-4 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5">
                <span>➕</span> Iniciar Planejamento
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
};
