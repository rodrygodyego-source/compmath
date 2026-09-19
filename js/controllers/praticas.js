/**
 * Controller: Banco de Práticas Pedagógicas (CompMath v2.4)
 * Catálogo com 20 atividades plugadas e desplugadas integradas aos 3 Eixos da BNCC Computação,
 * com sugestão de vídeos tutoriais do YouTube para apoio pedagógico ao docente.
 */

const PraticasController = {
  filtroTipo: 'todos',
  filtroEtapa: 'todas',
  filtroEixo: 'todos',
  searchQuery: '',

  render: function(container, params = {}) {
    const self = this;
    if (params.q) {
      self.searchQuery = decodeURIComponent(params.q).toLowerCase();
    }

    container.innerHTML = `
      <div class="fade-in space-y-6">
        <!-- Cabeçalho -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-2xl">💡</span>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800">Banco de Práticas Pedagógicas Integradas</h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-500">
              Atividades de <strong>Pensamento Computacional</strong>, <strong>Mundo Digital</strong> e <strong>Cultura Digital</strong> com vídeos tutoriais recomendados do YouTube.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold">
              ${PRATICAS_DATA.length} Práticas Detalhadas
            </span>
          </div>
        </div>

        <!-- Filtros e Busca -->
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">🔍 Pesquisar Atividade ou Conteúdo</label>
              <input type="text" id="prat-search" placeholder="Ex: Criptografia, Scratch, Fake News, Probabilidade..."
                value="${self.searchQuery}"
                class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Eixo da BNCC Computação</label>
              <select id="prat-filtro-eixo" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <option value="todos" ${self.filtroEixo === 'todos' ? 'selected' : ''}>Todos os Eixos</option>
                <option value="Pensamento Computacional" ${self.filtroEixo === 'Pensamento Computacional' ? 'selected' : ''}>🧠 Pensamento Computacional</option>
                <option value="Mundo Digital" ${self.filtroEixo === 'Mundo Digital' ? 'selected' : ''}>💻 Mundo Digital</option>
                <option value="Cultura Digital" ${self.filtroEixo === 'Cultura Digital' ? 'selected' : ''}>👥 Cultura Digital</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Modalidade</label>
              <select id="prat-filtro-tipo" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <option value="todos" ${self.filtroTipo === 'todos' ? 'selected' : ''}>Todas as Modalidades</option>
                <option value="Desplugada" ${self.filtroTipo === 'Desplugada' ? 'selected' : ''}>✂️ Desplugadas (Sem computador)</option>
                <option value="Plugada" ${self.filtroTipo === 'Plugada' ? 'selected' : ''}>💻 Plugadas (Scratch, GeoGebra, Python, Planilhas)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Etapa de Ensino</label>
              <select id="prat-filtro-etapa" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium">
                <option value="todas" ${self.filtroEtapa === 'todas' ? 'selected' : ''}>Todas as Etapas</option>
                <option value="Fundamental" ${self.filtroEtapa === 'Fundamental' ? 'selected' : ''}>Ensino Fundamental</option>
                <option value="Médio" ${self.filtroEtapa === 'Médio' ? 'selected' : ''}>Ensino Médio</option>
                <option value="EJA" ${self.filtroEtapa === 'EJA' ? 'selected' : ''}>Educação de Jovens e Adultos (EJA)</option>
              </select>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span id="prat-count" class="font-medium">Carregando catálogo...</span>
            <button id="prat-reset-filters" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors">Limpar Filtros</button>
          </div>
        </div>

        <!-- Grid de Cards de Práticas -->
        <div id="prat-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>

        <!-- Modal de Detalhes da Prática -->
        <div id="prat-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
          <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div id="prat-modal-content" class="p-6 sm:p-8 space-y-6"></div>
          </div>
        </div>
      </div>
    `;

    self.setupEvents(container);
    self.renderGrid(container);
  },

  setupEvents: function(container) {
    const self = this;
    const searchInput = container.querySelector('#prat-search');
    const eixoSelect = container.querySelector('#prat-filtro-eixo');
    const tipoSelect = container.querySelector('#prat-filtro-tipo');
    const etapaSelect = container.querySelector('#prat-filtro-etapa');
    const resetBtn = container.querySelector('#prat-reset-filters');
    const modal = container.querySelector('#prat-modal');

    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        self.searchQuery = e.target.value.toLowerCase().trim();
        self.renderGrid(container);
      });
    }

    if (eixoSelect) {
      eixoSelect.addEventListener('change', function(e) {
        self.filtroEixo = e.target.value;
        self.renderGrid(container);
      });
    }

    if (tipoSelect) {
      tipoSelect.addEventListener('change', function(e) {
        self.filtroTipo = e.target.value;
        self.renderGrid(container);
      });
    }

    if (etapaSelect) {
      etapaSelect.addEventListener('change', function(e) {
        self.filtroEtapa = e.target.value;
        self.renderGrid(container);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        self.filtroTipo = 'todos';
        self.filtroEtapa = 'todas';
        self.filtroEixo = 'todos';
        self.searchQuery = '';
        searchInput.value = '';
        eixoSelect.value = 'todos';
        tipoSelect.value = 'todos';
        etapaSelect.value = 'todas';
        self.renderGrid(container);
      });
    }

    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    }
  },

  renderGrid: function(container) {
    const self = this;
    const grid = container.querySelector('#prat-grid');
    const countSpan = container.querySelector('#prat-count');
    if (!grid) return;

    let filtered = PRATICAS_DATA.filter(p => {
      if (self.filtroTipo !== 'todos' && p.tipo !== self.filtroTipo) return false;
      if (self.filtroEtapa !== 'todas' && !p.etapa.toLowerCase().includes(self.filtroEtapa.toLowerCase())) return false;
      if (self.filtroEixo !== 'todos' && !(p.eixos || []).includes(self.filtroEixo)) return false;
      if (self.searchQuery) {
        const text = [
          p.titulo,
          p.conteudoMatematico,
          p.resumo,
          p.materiais,
          p.ano,
          (p.eixos || []).join(' '),
          (p.pilares || []).join(' ')
        ].join(' ').toLowerCase();
        if (!text.includes(self.searchQuery)) return false;
      }
      return true;
    });

    if (countSpan) {
      countSpan.textContent = `Exibindo ${filtered.length} de ${PRATICAS_DATA.length} atividades cadastradas`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full bg-white rounded-xl p-8 text-center border border-slate-200 shadow-sm">
          <div class="text-4xl mb-3">🔍</div>
          <h4 class="font-bold text-slate-800 text-lg mb-2">Nenhuma atividade encontrada</h4>
          <p class="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4">
            Não encontramos atividades para a combinação de filtros selecionada.
          </p>
          <button onclick="document.querySelector('#prat-reset-filters').click()" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow">
            Redefinir Filtros
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden">
        <div>
          <!-- Header do Card -->
          <div class="p-4 pb-2 border-b border-slate-100 flex items-center justify-between gap-2">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${p.tipo === 'Desplugada' ? 'badge-desplugada' : 'badge-plugada'}">
              ${p.tipo === 'Desplugada' ? '✂️ Desplugada' : '💻 Plugada'}
            </span>
            <span class="text-[11px] font-semibold text-slate-500">⏱️ ${p.tempoEstimado}</span>
          </div>

          <!-- Corpo do Card -->
          <div class="p-5 space-y-3">
            <div class="flex items-center gap-1.5 text-xs text-blue-800 font-bold">
              <span>🏫</span>
              <span>${p.ano}</span>
            </div>
            <h3 class="font-bold text-slate-900 text-base leading-snug line-clamp-2">
              ${p.titulo}
            </h3>
            <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              ${p.resumo}
            </p>

            <!-- Badges dos Eixos -->
            <div class="flex flex-wrap gap-1 pt-1">
              ${(p.eixos || ["Pensamento Computacional"]).map(eixo => `
                <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  eixo === 'Pensamento Computacional' ? 'badge-eixo-pc' :
                  eixo === 'Mundo Digital' ? 'badge-eixo-md' : 'badge-eixo-cd'
                }">${eixo === 'Pensamento Computacional' ? '🧠' : eixo === 'Mundo Digital' ? '💻' : '👥'} ${eixo}</span>
              `).join('')}
            </div>

            <!-- Sugestão de Vídeo do YouTube -->
            ${p.videoYoutube ? `
              <div class="pt-2">
                <a href="${p.videoYoutube.url}" target="_blank" rel="noopener noreferrer" 
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-[11px] font-bold transition-colors">
                  <span class="text-xs">▶️</span>
                  <span class="truncate max-w-[200px]">Vídeo Tutorial (YouTube)</span>
                </a>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Rodapé com Ações -->
        <div class="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
          <button onclick="PraticasController.abrirModal('${p.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
            Roteiro Completo →
          </button>
          <a href="#planejamento?praticaId=${p.id}" class="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors" title="Incorporar ao planejamento">
            ➕ Planejar
          </a>
        </div>
      </div>
    `).join('');
  },

  abrirModal: function(id) {
    const p = PRATICAS_DATA.find(item => item.id === id);
    if (!p) return;

    const modal = document.querySelector('#prat-modal');
    const content = document.querySelector('#prat-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="text-xs font-bold px-3 py-1 rounded-full ${p.tipo === 'Desplugada' ? 'badge-desplugada' : 'badge-plugada'}">
              ${p.tipo === 'Desplugada' ? '✂️ Atividade Desplugada' : '💻 Atividade Plugada'}
            </span>
            <span class="text-xs text-slate-500 font-semibold">• ${p.ano}</span>
            <span class="text-xs text-slate-500 font-semibold">• ⏱️ ${p.tempoEstimado}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 leading-snug">${p.titulo}</h2>
          <p class="text-xs sm:text-sm text-blue-800 font-bold mt-1">
            Conteúdo Matemático: ${p.conteudoMatematico}
          </p>
        </div>
        <button onclick="document.querySelector('#prat-modal').classList.add('hidden')" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-base transition-colors">
          ✕
        </button>
      </div>

      <!-- Eixos da BNCC Computação -->
      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
        <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          Eixos da BNCC Computação Desenvolvidos:
        </h4>
        <div class="flex flex-wrap gap-2">
          ${(p.eixos || ["Pensamento Computacional"]).map(eixo => `
            <span class="text-xs px-3 py-1 rounded-full font-bold ${
              eixo === 'Pensamento Computacional' ? 'badge-eixo-pc' :
              eixo === 'Mundo Digital' ? 'badge-eixo-md' : 'badge-eixo-cd'
            }">${eixo === 'Pensamento Computacional' ? '🧠' : eixo === 'Mundo Digital' ? '💻' : '👥'} ${eixo}</span>
          `).join('')}
        </div>
      </div>

      <!-- Destaque para o Vídeo Tutorial do YouTube -->
      ${p.videoYoutube ? `
        <div class="p-4 bg-red-50/80 rounded-xl border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-0.5">
            <span class="text-[11px] font-bold text-red-800 uppercase tracking-wider block">
              📺 Vídeo Tutorial Recomendado no YouTube
            </span>
            <h5 class="text-xs sm:text-sm font-bold text-slate-900">${p.videoYoutube.titulo}</h5>
            <p class="text-xs text-slate-500">Canal: <strong>${p.videoYoutube.canal}</strong></p>
          </div>
          <a href="${p.videoYoutube.url}" target="_blank" rel="noopener noreferrer" 
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 flex-shrink-0">
            <span>▶️</span> Assistir no YouTube ↗
          </a>
        </div>
      ` : ''}

      <!-- Pilares e Objetivos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 bg-blue-50/50 rounded-xl border border-blue-100 space-y-2">
          <h4 class="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
            <span>🎯</span> Objetivo Pedagógico
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${p.objetivo}</p>
        </div>

        <div class="p-4 bg-purple-50/50 rounded-xl border border-purple-100 space-y-2">
          <h4 class="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧠</span> Pilares do Pensamento Computacional
          </h4>
          <div class="flex flex-wrap gap-1.5">
            ${(p.pilares || [p.pilarPrincipal]).map(pilar => `
              <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${
                pilar === 'Algoritmos' ? 'badge-algoritmos' :
                pilar === 'Abstração' ? 'badge-abstracao' :
                pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
              }">${pilar}</span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Materiais Necessários -->
      <div class="p-4 bg-amber-50/50 rounded-xl border border-amber-200/70 text-xs sm:text-sm text-amber-950 space-y-1">
        <h4 class="font-bold text-amber-900 flex items-center gap-1.5">
          <span>📦</span> Materiais e Recursos Necessários
        </h4>
        <p class="text-amber-900/90 leading-relaxed">${p.materiais}</p>
      </div>

      <!-- Roteiro Didático Passo a Passo -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
          <span>📋</span> Roteiro de Execução Didática em Sala de Aula
        </h4>
        <div class="space-y-2.5">
          ${p.passoAPasso.map((passo, idx) => `
            <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <span>${passo}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Dicas de Mediação e Rubrica -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1.5">
          <h4 class="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
            <span>💡</span> Dicas de Mediação Docente
          </h4>
          <p class="text-xs text-slate-700 leading-relaxed">${p.dicasProfessor}</p>
        </div>

        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
          <h4 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <span>📊</span> Rubrica de Avaliação Formativa
          </h4>
          <p class="text-xs text-slate-700 leading-relaxed">${p.rubricaAvaliacao}</p>
        </div>
      </div>

      <!-- Botões de Ação no Modal -->
      <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <button onclick="document.querySelector('#prat-modal').classList.add('hidden')" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors">
          Fechar
        </button>
        <a href="#planejamento?praticaId=${p.id}" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow transition-all flex items-center gap-2">
          <span>➕</span> Iniciar Planejamento com Esta Prática
        </a>
      </div>
    `;

    modal.classList.remove('hidden');
  }
};
