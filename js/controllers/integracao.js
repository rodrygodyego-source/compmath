/**
 * Controller: Integração Curricular (CompMath v2.3)
 * Matriz curricular completa articulando Matemática aos 3 Eixos da BNCC Computação:
 * Pensamento Computacional, Mundo Digital e Cultura Digital (Resolução CNE/CP nº 1/2022)
 * com cascata estrita: Etapa -> Ano Escolar -> Unidade Temática.
 */

const IntegracaoController = {
  selectedEtapa: 'todas',
  selectedAno: 'todos',
  selectedUnidade: 'todas',
  selectedEixo: 'todos',
  searchQuery: '',

  ETAPAS_ANOS: {
    "Ensino Fundamental (Anos Finais)": ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
    "Ensino Médio": ["1º Ano EM", "2º Ano EM", "3º Ano EM"],
    "EJA": ["EJA Fundamental", "EJA Médio"]
  },

  render: function(container) {
    const self = this;

    container.innerHTML = `
      <div class="fade-in space-y-6">
        <!-- Cabeçalho da Seção -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-2xl">🔗</span>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800">Matriz de Integração Curricular Oficial</h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-500">
              Articulação com os <strong>3 Eixos da BNCC Computação</strong> (Pensamento Computacional, Mundo Digital e Cultura Digital) e o <strong>Currículo de PE (CEDIM-PE)</strong>.
            </p>
          </div>
          <a href="#planejamento" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow transition-colors">
            ➕ Novo Planejamento
          </a>
        </div>

        <!-- Filtros em Cascata Rigorosa -->
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            <!-- Campo 1: Busca Livre -->
            <div class="lg:col-span-1">
              <label class="block text-xs font-bold text-slate-700 mb-1">🔍 Busca Livre</label>
              <input type="text" id="integracao-search" placeholder="Ex: Finanças, EF08MA, Scratch..." 
                value="${self.searchQuery}"
                class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Campo 2: Eixo da BNCC Computação -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Eixo da Computação</label>
              <select id="integracao-filtro-eixo" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <option value="todos" ${self.selectedEixo === 'todos' ? 'selected' : ''}>Todos os 3 Eixos</option>
                <option value="Pensamento Computacional" ${self.selectedEixo === 'Pensamento Computacional' ? 'selected' : ''}>🧠 Pensamento Computacional</option>
                <option value="Mundo Digital" ${self.selectedEixo === 'Mundo Digital' ? 'selected' : ''}>💻 Mundo Digital</option>
                <option value="Cultura Digital" ${self.selectedEixo === 'Cultura Digital' ? 'selected' : ''}>👥 Cultura Digital</option>
              </select>
            </div>

            <!-- Campo 3: Etapa de Ensino -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Etapa de Ensino</label>
              <select id="integracao-filtro-etapa" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <option value="todas" ${self.selectedEtapa === 'todas' ? 'selected' : ''}>Todas as Etapas</option>
                <option value="Ensino Fundamental (Anos Finais)" ${self.selectedEtapa === 'Ensino Fundamental (Anos Finais)' ? 'selected' : ''}>Ensino Fundamental (6º ao 9º)</option>
                <option value="Ensino Médio" ${self.selectedEtapa === 'Ensino Médio' ? 'selected' : ''}>Ensino Médio (1º ao 3º)</option>
                <option value="EJA" ${self.selectedEtapa === 'EJA' ? 'selected' : ''}>Educação de Jovens e Adultos (EJA)</option>
              </select>
            </div>

            <!-- Campo 4: Ano Escolar (Cascata da Etapa) -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Ano Escolar / Turma</label>
              <select id="integracao-filtro-ano" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <!-- Preenchido dinamicamente -->
              </select>
            </div>

            <!-- Campo 5: Unidade Temática (Cascata Estrita: só aparece o que existe no Ano) -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Unidade Temática</label>
              <select id="integracao-filtro-unidade" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <!-- Preenchido dinamicamente -->
              </select>
            </div>

          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span id="integracao-count" class="font-medium">Carregando dados...</span>
            <button id="integracao-reset-filters" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Limpar Filtros
            </button>
          </div>
        </div>

        <!-- Lista de Integrações Curriculares -->
        <div id="integracao-lista" class="space-y-4">
          <!-- Renderizado via JS -->
        </div>
      </div>
    `;

    self.setupEvents(container);
    self.updateAnoOptions(container);
    self.updateUnidadeOptions(container);
    self.renderList(container);
  },

  updateAnoOptions: function(container) {
    const self = this;
    const anoSelect = container.querySelector('#integracao-filtro-ano');
    if (!anoSelect) return;

    let anosValidos = [];
    if (self.selectedEtapa === 'todas') {
      anosValidos = Array.from(new Set(CURRICULO_DATA.map(c => c.ano)));
    } else if (self.ETAPAS_ANOS[self.selectedEtapa]) {
      anosValidos = self.ETAPAS_ANOS[self.selectedEtapa];
    }

    anoSelect.innerHTML = '<option value="todos">Todos os Anos</option>';
    anosValidos.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      if (a === self.selectedAno) opt.selected = true;
      anoSelect.appendChild(opt);
    });

    if (self.selectedAno !== 'todos' && !anosValidos.includes(self.selectedAno)) {
      self.selectedAno = 'todos';
      anoSelect.value = 'todos';
    }
  },

  updateUnidadeOptions: function(container) {
    const self = this;
    const unidadeSelect = container.querySelector('#integracao-filtro-unidade');
    if (!unidadeSelect) return;

    const itensValidos = CURRICULO_DATA.filter(item => {
      if (self.selectedEtapa !== 'todas' && item.etapa !== self.selectedEtapa) return false;
      if (self.selectedAno !== 'todos' && item.ano !== self.selectedAno) return false;
      return true;
    });

    const unidadesPresentes = Array.from(new Set(itensValidos.map(c => c.unidadeTematica))).filter(Boolean).sort();

    unidadeSelect.innerHTML = '<option value="todas">Todas as Unidades</option>';
    unidadesPresentes.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u;
      opt.textContent = u;
      if (u === self.selectedUnidade) opt.selected = true;
      unidadeSelect.appendChild(opt);
    });

    if (self.selectedUnidade !== 'todas' && !unidadesPresentes.includes(self.selectedUnidade)) {
      self.selectedUnidade = 'todas';
      unidadeSelect.value = 'todas';
    }
  },

  setupEvents: function(container) {
    const self = this;
    const searchInput = container.querySelector('#integracao-search');
    const eixoSelect = container.querySelector('#integracao-filtro-eixo');
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

    if (eixoSelect) {
      eixoSelect.addEventListener('change', function(e) {
        self.selectedEixo = e.target.value;
        self.renderList(container);
      });
    }

    if (etapaSelect) {
      etapaSelect.addEventListener('change', function(e) {
        self.selectedEtapa = e.target.value;
        self.updateAnoOptions(container);
        self.updateUnidadeOptions(container);
        self.renderList(container);
      });
    }

    if (anoSelect) {
      anoSelect.addEventListener('change', function(e) {
        self.selectedAno = e.target.value;
        self.updateUnidadeOptions(container);
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
        self.selectedEixo = 'todos';
        self.searchQuery = '';
        searchInput.value = '';
        eixoSelect.value = 'todos';
        etapaSelect.value = 'todas';
        self.updateAnoOptions(container);
        self.updateUnidadeOptions(container);
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
      if (self.selectedEixo !== 'todos' && !(item.eixos || []).includes(self.selectedEixo)) return false;
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
          (item.eixos || []).join(' '),
          (item.pilares || []).join(' ')
        ].join(' ').toLowerCase();
        if (!text.includes(self.searchQuery)) return false;
      }
      return true;
    });

    if (countSpan) {
      countSpan.textContent = `Exibindo ${filtered.length} de ${CURRICULO_DATA.length} habilidades e conteúdos integrados`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200 shadow-sm">
          <div class="text-4xl mb-3">🔎</div>
          <h4 class="font-bold text-slate-800 text-base mb-1">Nenhum resultado para a busca atual</h4>
          <p class="text-xs sm:text-sm text-slate-500 mb-4">Verifique a palavra digitada ou redefina os filtros.</p>
          <button onclick="document.querySelector('#integracao-reset-filters').click()" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow">
            Redefinir Filtros
          </button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => `
      <div class="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 transition-all overflow-hidden">
        <!-- Barra Superior com Metadados e os 3 EIXOS da BNCC Computação -->
        <div class="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">
              ${item.ano}
            </span>
            <span class="text-xs text-slate-500 font-medium">
              ${item.etapa} • <strong class="text-slate-700">${item.unidadeTematica}</strong>
            </span>
          </div>

          <!-- Badges dos Eixos da BNCC Computação -->
          <div class="flex flex-wrap gap-1.5">
            ${(item.eixos || ["Pensamento Computacional"]).map(eixo => `
              <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold ${
                eixo === 'Pensamento Computacional' ? 'badge-eixo-pc' :
                eixo === 'Mundo Digital' ? 'badge-eixo-md' : 'badge-eixo-cd'
              }">${eixo === 'Pensamento Computacional' ? '🧠' : eixo === 'Mundo Digital' ? '💻' : '👥'} ${eixo}</span>
            `).join('')}
          </div>
        </div>

        <!-- Conteúdo Principal do Card -->
        <div class="p-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>📐</span>
              <span>${item.conteudo}</span>
            </h3>
            
            <!-- Pilares (caso existam) -->
            <div class="flex flex-wrap gap-1">
              ${(item.pilares || []).map(pilar => `
                <span class="text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  pilar === 'Algoritmos' ? 'badge-algoritmos' :
                  pilar === 'Abstração' ? 'badge-abstracao' :
                  pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
                }">${pilar}</span>
              `).join('')}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Coluna BNCC Matemática -->
            <div class="bg-blue-50/50 rounded-xl p-4 border border-blue-200 space-y-1.5">
              <div class="flex items-center justify-between">
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
            <div class="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200 space-y-1.5">
              <div class="flex items-center justify-between">
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

          <!-- Orientações do Currículo de Pernambuco (CEDIM-PE) -->
          <div class="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5">
            <span class="text-base flex-shrink-0">🏛️</span>
            <div>
              <strong class="font-semibold text-amber-900">Orientações do Currículo de Pernambuco (CEDIM-PE):</strong>
              <p class="mt-0.5 text-amber-900/90 leading-relaxed">${item.curriculoPE}</p>
            </div>
          </div>

          <!-- Proposta Metodológica -->
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
              <a href="#planejamento?habilidadeId=${item.id}" class="px-4 py-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5">
                <span>➕</span> Iniciar Planejamento
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
};
