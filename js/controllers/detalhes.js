/**
 * Controller: Detalhes do Planejamento & Gerenciador de Planos
 * Exibe a lista de planejamentos salvos ou a ficha oficial completa com exportação para PDF.
 */

const DetalhesController = {
  currentId: null,
  searchQuery: '',

  render: function(container, params = {}) {
    const self = this;
    self.currentId = params.id || null;

    if (self.currentId) {
      self.renderFichaPlanejamento(container, self.currentId);
    } else {
      self.renderListaPlanejamentos(container);
    }
  },

  // Vista 1: Lista de Todos os Planejamentos
  renderListaPlanejamentos: function(container) {
    const self = this;
    const list = CompMathDB.getAllPlanejamentos();

    container.innerHTML = `
      <div class="fade-in space-y-6">
        <!-- Cabeçalho da Seção -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-2xl">📋</span>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800">Meus Planejamentos Pedagógicos</h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-500">
              Gerencie, visualize, edite e exporte seus planos de aula integrados para impressão ou PDF oficial.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="DetalhesController.abrirModalBackup()" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5">
              <span>💾</span> Backup / Restaurar
            </button>
            <a href="#planejamento" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow transition-colors flex items-center gap-1.5">
              <span>➕</span> Novo Planejamento
            </a>
          </div>
        </div>

        <!-- Barra de Busca e Filtros -->
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="relative flex-1">
            <input type="text" id="planos-search" placeholder="🔍 Buscar por conteúdo, turma, ano ou código de habilidade..."
              value="${self.searchQuery}"
              class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <span id="planos-count" class="text-xs text-slate-500 font-medium">
            Total: ${list.length} planejamento(s)
          </span>
        </div>

        <!-- Lista de Cards dos Planejamentos -->
        <div id="planos-cards-container" class="space-y-4">
          <!-- Injetado via JS -->
        </div>

        <!-- Modal de Backup JSON -->
        <div id="backup-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-base flex items-center gap-2">
                <span>💾</span> Backup e Sincronização dos Planejamentos
              </h3>
              <button onclick="document.querySelector('#backup-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Você pode baixar uma cópia de segurança de todos os seus planejamentos em formato JSON ou restaurar dados salvos em outro computador.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <button onclick="DetalhesController.baixarBackupArquivo()" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold">
                📥 Baixar Arquivo de Backup (.json)
              </button>
              <button onclick="DetalhesController.restaurarDemonstracao()" class="px-3 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-xs font-semibold">
                🔄 Restaurar Planos Padrão
              </button>
            </div>
            <div class="pt-3 border-t border-slate-100">
              <label class="block text-xs font-semibold text-slate-700 mb-1">Restaurar a partir de texto JSON:</label>
              <textarea id="import-json-area" rows="3" placeholder="Cole o conteúdo do backup aqui..." class="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"></textarea>
              <button onclick="DetalhesController.processarImportacaoJSON()" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold">
                Importar Dados
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    self.setupListaEvents(container);
    self.renderCards(container);
  },

  setupListaEvents: function(container) {
    const self = this;
    const searchInput = container.querySelector('#planos-search');
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        self.searchQuery = e.target.value.toLowerCase().trim();
        self.renderCards(container);
      });
    }
  },

  renderCards: function(container) {
    const self = this;
    const listContainer = container.querySelector('#planos-cards-container');
    const countSpan = container.querySelector('#planos-count');
    if (!listContainer) return;

    const list = CompMathDB.getAllPlanejamentos();
    let filtered = list.filter(p => {
      if (!self.searchQuery) return true;
      const text = [
        p.ano,
        p.turma,
        p.conteudo,
        p.habilidadeMatematicaCodigo,
        p.habilidadeComputacaoCodigo,
        p.objetivos,
        (p.pilares || []).join(' ')
      ].join(' ').toLowerCase();
      return text.includes(self.searchQuery);
    });

    if (countSpan) {
      countSpan.textContent = `Exibindo ${filtered.length} de ${list.length} planejamento(s)`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
          <div class="text-3xl mb-2">📋</div>
          <h4 class="font-bold text-slate-800 text-base mb-1">Nenhum planejamento encontrado</h4>
          <p class="text-xs sm:text-sm text-slate-500 mb-4">Que tal criar uma nova aula articulada com a BNCC Computação?</p>
          <a href="#planejamento" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow">
            ➕ Elaborar Planejamento
          </a>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(p => {
      const dataFormatada = p.updatedAt ? new Date(p.updatedAt).toLocaleDateString('pt-BR') : '';

      return `
        <div class="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="space-y-2 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
                ${p.ano || 'Geral'}
              </span>
              <span class="text-xs font-medium text-slate-500">
                ${p.turma ? `Turma: <strong>${p.turma}</strong>` : 'Turma livre'}
              </span>
              <span class="text-xs text-slate-400">• Atualizado em ${dataFormatada}</span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              <a href="#detalhes?id=${p.id}" class="hover:text-blue-700">
                ${p.conteudo}
              </a>
            </h3>

            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-mono">
              <span class="bg-slate-100 text-blue-900 font-bold px-2 py-0.5 rounded">
                📐 ${p.habilidadeMatematicaCodigo}
              </span>
              <span class="bg-slate-100 text-emerald-900 font-bold px-2 py-0.5 rounded">
                💻 ${p.habilidadeComputacaoCodigo}
              </span>
              <span class="font-sans text-slate-500">⏱️ ${p.tempoPrevisto || '2 aulas'}</span>
            </div>

            <div class="flex flex-wrap gap-1 pt-1">
              ${(p.pilares || []).map(pilar => `
                <span class="text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  pilar === 'Algoritmos' ? 'badge-algoritmos' :
                  pilar === 'Abstração' ? 'badge-abstracao' :
                  pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
                }">${pilar}</span>
              `).join('')}
            </div>
          </div>

          <!-- Ações Rápidas -->
          <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
            <a href="#detalhes?id=${p.id}" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1">
              <span>👁️</span> Visualizar Ficha
            </a>
            <a href="#planejamento?id=${p.id}" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors" title="Editar planejamento">
              ✏️
            </a>
            <button onclick="App.exportPDF('${p.id}')" class="px-3 py-2 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 rounded-lg text-xs font-semibold transition-colors" title="Imprimir / Salvar PDF Oficial">
              🖨️ PDF
            </button>
            <button onclick="DetalhesController.confirmarExclusao('${p.id}')" class="px-2.5 py-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-xs transition-colors" title="Excluir">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  // Vista 2: Ficha Oficial do Planejamento Integrado
  renderFichaPlanejamento: function(container, id) {
    const plan = CompMathDB.getPlanejamentoById(id);
    if (!plan) {
      container.innerHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
          <h3 class="text-lg font-bold text-slate-800 mb-2">Planejamento não encontrado</h3>
          <p class="text-xs text-slate-500 mb-4">O identificador informado não corresponde a nenhum plano salvo.</p>
          <a href="#detalhes" class="px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-semibold">Voltar para Meus Planejamentos</a>
        </div>
      `;
      return;
    }

    const dataCriacao = plan.createdAt ? new Date(plan.createdAt).toLocaleDateString('pt-BR') : '';
    const dataAtualizacao = plan.updatedAt ? new Date(plan.updatedAt).toLocaleDateString('pt-BR') : '';

    container.innerHTML = `
      <div class="fade-in space-y-6 max-w-4xl mx-auto">
        <!-- Barra de Navegação e Ações de Exportação -->
        <div class="no-print flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <a href="#detalhes" class="text-xs font-semibold text-slate-600 hover:text-blue-700 flex items-center gap-1">
            ← Voltar para Todos os Planejamentos
          </a>
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="App.exportPDF('${plan.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow transition-all flex items-center gap-1.5">
              <span>🖨️</span> Imprimir / Salvar PDF Oficial
            </button>
            <a href="#planejamento?id=${plan.id}" class="px-3.5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1">
              <span>✏️</span> Editar
            </a>
            <button onclick="DetalhesController.duplicar('${plan.id}')" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors" title="Duplicar para outra turma">
              📋 Duplicar
            </button>
            <button onclick="DetalhesController.copiarTextoFormatado('${plan.id}')" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors" title="Copiar texto para colar no SIEPE / Diário">
              📄 Copiar Texto
            </button>
            <button onclick="DetalhesController.confirmarExclusao('${plan.id}')" class="px-3 py-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-xs transition-colors" title="Excluir">
              🗑️
            </button>
          </div>
        </div>

        <!-- Ficha Oficial do Planejamento (Otimizada para Impressão e PDF) -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm print-page space-y-6">
          <!-- Cabeçalho Oficial -->
          <div class="text-center pb-6 border-b-2 border-slate-800 space-y-1">
            <p class="text-[11px] font-bold tracking-widest text-slate-600 uppercase">
              Governo do Estado de Pernambuco • Secretaria de Educação e Esportes
            </p>
            <h1 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              Planejamento Pedagógico Integrado: Matemática & Computação
            </h1>
            <p class="text-xs text-slate-500 font-medium">
              CompMath • Plataforma de Apoio Curricular • BNCC Computação (Resolução CNE/CP 1/2022)
            </p>
          </div>

          <!-- Quadro de Identificação -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <span class="text-slate-500 font-semibold block">Etapa / Ano Escolar:</span>
              <strong class="text-slate-900 text-sm">${plan.ano || 'Não informado'}</strong>
            </div>
            <div>
              <span class="text-slate-500 font-semibold block">Turma:</span>
              <strong class="text-slate-900 text-sm">${plan.turma || 'Livre / Múltiplas'}</strong>
            </div>
            <div>
              <span class="text-slate-500 font-semibold block">Carga Horária Prevista:</span>
              <strong class="text-slate-900 text-sm">${plan.tempoPrevisto || '2 aulas (100 min)'}</strong>
            </div>
            <div>
              <span class="text-slate-500 font-semibold block">Data de Registro:</span>
              <strong class="text-slate-900 text-sm">${dataAtualizacao || dataCriacao}</strong>
            </div>
          </div>

          <!-- Tema / Conteúdo Central -->
          <div class="space-y-1">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Conteúdo Matemático Curricular:</span>
            <h2 class="text-lg sm:text-xl font-bold text-blue-900 leading-snug">
              ${plan.conteudo}
            </h2>
          </div>

          <!-- Articulação Curricular Lado a Lado -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Habilidade BNCC Matemática -->
            <div class="p-4 bg-blue-50/40 rounded-xl border border-blue-200 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-blue-900 uppercase tracking-wide">📐 BNCC Matemática</span>
                <span class="font-mono text-xs font-bold px-2 py-0.5 bg-blue-200 text-blue-900 rounded">${plan.habilidadeMatematicaCodigo}</span>
              </div>
              <p class="text-xs text-slate-800 leading-relaxed">${plan.habilidadeMatematicaDescricao}</p>
            </div>

            <!-- Habilidade BNCC Computação -->
            <div class="p-4 bg-emerald-50/40 rounded-xl border border-emerald-200 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-900 uppercase tracking-wide">💻 BNCC Computação</span>
                <span class="font-mono text-xs font-bold px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded">${plan.habilidadeComputacaoCodigo}</span>
              </div>
              <p class="text-xs text-slate-800 leading-relaxed">${plan.habilidadeComputacaoDescricao}</p>
            </div>
          </div>

          <!-- Orientações do Currículo de Pernambuco -->
          ${plan.curriculoPE ? `
            <div class="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-xs space-y-1">
              <span class="font-bold text-amber-900 block">🏛️ Orientações do Currículo de Pernambuco:</span>
              <p class="text-amber-950 leading-relaxed">${plan.curriculoPE}</p>
            </div>
          ` : ''}

          <!-- Pilares do Pensamento Computacional -->
          <div class="space-y-2">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block">Pilares do Pensamento Computacional Envolvidos:</span>
            <div class="flex flex-wrap gap-2">
              ${(plan.pilares || []).map(pilar => `
                <span class="text-xs px-3 py-1 rounded-full font-semibold ${
                  pilar === 'Algoritmos' ? 'badge-algoritmos' :
                  pilar === 'Abstração' ? 'badge-abstracao' :
                  pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
                }">🧠 ${pilar}</span>
              `).join('')}
            </div>
          </div>

          <!-- Objetivos de Aprendizagem -->
          <div class="space-y-2 pt-2 border-t border-slate-100">
            <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯</span> Objetivos de Aprendizagem
            </h3>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-xl border border-slate-200">
              ${plan.objetivos || 'Objetivos gerais do componente curricular.'}
            </div>
          </div>

          <!-- Estratégias Metodológicas e Desenvolvimento -->
          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>💡</span> Encaminhamento Metodológico / Estratégias Pedagógicas
            </h3>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-xl border border-slate-200">
              ${plan.estrategias || 'Estratégias descritas pelo professor.'}
            </div>
          </div>

          <!-- Atividades e Práticas -->
          ${plan.atividades ? `
            <div class="space-y-2">
              <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>🧩</span> Atividades Práticas (Plugadas / Desplugadas)
              </h3>
              <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-xl border border-slate-200">
                ${plan.atividades}
              </div>
            </div>
          ` : ''}

          <!-- Recursos Didáticos -->
          ${plan.recursos ? `
            <div class="space-y-1">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block">Recursos e Materiais Didáticos:</span>
              <p class="text-xs sm:text-sm text-slate-700">${plan.recursos}</p>
            </div>
          ` : ''}

          <!-- Avaliação Formativa -->
          <div class="space-y-2 pt-2 border-t border-slate-100">
            <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>📊</span> Critérios de Avaliação e Rubricas Formativas
            </h3>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-xl border border-slate-200">
              ${plan.avaliacao || 'Avaliação processual e contínua baseada na participação e resolução de problemas.'}
            </div>
          </div>

          <!-- Assinatura / Rodapé da Ficha -->
          <div class="pt-8 mt-8 border-t border-slate-300 text-center space-y-1">
            <div class="w-64 border-b border-slate-400 mx-auto mb-2"></div>
            <p class="text-xs font-bold text-slate-800">Prof. Rodrygo Dyego da Silva Nascimento</p>
            <p class="text-[11px] text-slate-500">Docente de Matemática • Rede Pública de Ensino (PE/Igarassu)</p>
          </div>
        </div>
      </div>
    `;
  },

  duplicar: function(id) {
    const copy = CompMathDB.duplicatePlanejamento(id);
    if (copy) {
      App.showToast('Planejamento duplicado com sucesso!', 'success');
      window.location.hash = `#detalhes?id=${copy.id}`;
    }
  },

  confirmarExclusao: function(id) {
    if (confirm('Tem certeza que deseja excluir este planejamento? Esta ação é irreversível.')) {
      CompMathDB.deletePlanejamento(id);
      App.showToast('Planejamento excluído.', 'info');
      window.location.hash = '#detalhes';
    }
  },

  copiarTextoFormatado: function(id) {
    const p = CompMathDB.getPlanejamentoById(id);
    if (!p) return;

    const texto = `
PLANEJAMENTO PEDAGÓGICO INTEGRADO: MATEMÁTICA & COMPUTAÇÃO (COMPMATH)
----------------------------------------------------------------------
Etapa / Ano: ${p.ano} | Turma: ${p.turma || 'Geral'} | Duração: ${p.tempoPrevisto || '2 aulas'}
Conteúdo: ${p.conteudo}

ARTICULAÇÃO CURRICULAR:
• BNCC Matemática: [${p.habilidadeMatematicaCodigo}] ${p.habilidadeMatematicaDescricao}
• BNCC Computação: [${p.habilidadeComputacaoCodigo}] ${p.habilidadeComputacaoDescricao}
• Currículo PE: ${p.curriculoPE || 'Orientações complementares'}
• Pilares: ${(p.pilares || []).join(', ')}

OBJETIVOS DE APRENDIZAGEM:
${p.objetivos}

ENCAMINHAMENTO METODOLÓGICO:
${p.estrategias}

ATIVIDADES PRÁTICAS:
${p.atividades}

RECURSOS: ${p.recursos}

AVALIAÇÃO:
${p.avaliacao}
----------------------------------------------------------------------
Docente: Prof. Rodrygo Dyego da Silva Nascimento
    `.trim();

    navigator.clipboard.writeText(texto).then(() => {
      App.showToast('Texto copiado para a área de transferência!', 'success');
    }).catch(() => {
      App.showToast('Não foi possível copiar automaticamente.', 'error');
    });
  },

  abrirModalBackup: function() {
    const modal = document.querySelector('#backup-modal');
    if (modal) modal.classList.remove('hidden');
  },

  baixarBackupArquivo: function() {
    const jsonStr = CompMathDB.exportBackupJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compmath_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    App.showToast('Download do backup concluído!', 'success');
  },

  restaurarDemonstracao: function() {
    if (confirm('Deseja restaurar os planejamentos originais de demonstração?')) {
      CompMathDB.resetToDefaults();
      App.showToast('Dados de demonstração restaurados.', 'success');
      document.querySelector('#backup-modal').classList.add('hidden');
      window.location.reload();
    }
  },

  processarImportacaoJSON: function() {
    const area = document.querySelector('#import-json-area');
    if (!area || !area.value.trim()) {
      alert('Por favor, cole o texto JSON antes de importar.');
      return;
    }

    const res = CompMathDB.importBackupJSON(area.value.trim());
    if (res.success) {
      App.showToast(`Importação realizada! ${res.count} planos carregados.`, 'success');
      document.querySelector('#backup-modal').classList.add('hidden');
      window.location.reload();
    } else {
      alert('Erro na importação: ' + res.error);
    }
  }
};
