/**
 * Controller: Dashboard
 * Tela inicial com resumo analítico, atalhos rápidos e planejamentos recentes.
 */

const DashboardController = {
  render: function(container) {
    const stats = CompMathDB.getStats();
    const planejamentos = CompMathDB.getAllPlanejamentos();
    const recentes = planejamentos.slice(0, 3);

    // Calcular percentuais dos pilares
    const totalPilaresCount = Object.values(stats.pilarCount).reduce((a, b) => a + b, 0) || 1;
    const pilarPercents = {
      "Algoritmos": Math.round((stats.pilarCount["Algoritmos"] / totalPilaresCount) * 100),
      "Abstração": Math.round((stats.pilarCount["Abstração"] / totalPilaresCount) * 100),
      "Decomposição": Math.round((stats.pilarCount["Decomposição"] / totalPilaresCount) * 100),
      "Reconhecimento de Padrões": Math.round((stats.pilarCount["Reconhecimento de Padrões"] / totalPilaresCount) * 100)
    };

    let recentesHTML = '';
    if (recentes.length === 0) {
      recentesHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
            📋
          </div>
          <h4 class="text-lg font-semibold text-slate-800 mb-2">Nenhum planejamento salvo ainda</h4>
          <p class="text-slate-600 text-sm max-w-md mx-auto mb-6">Comece criando seu primeiro plano de aula integrando os conteúdos de Matemática com o Pensamento Computacional e o Currículo de PE.</p>
          <a href="#planejamento" class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium text-sm transition-colors">
            ➕ Criar Primeiro Planejamento
          </a>
        </div>
      `;
    } else {
      recentesHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${recentes.map(p => `
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full">${p.ano || 'Geral'}</span>
                  <span class="text-xs text-slate-500">${p.turma || 'Turma não informada'}</span>
                </div>
                <h4 class="font-bold text-slate-800 text-base mb-2 line-clamp-2">${p.conteudo}</h4>
                <div class="text-xs text-slate-600 mb-3 space-y-1">
                  <div class="flex items-center gap-1 font-mono text-blue-700 font-semibold">
                    <span>📐 ${p.habilidadeMatematicaCodigo || ''}</span>
                    <span class="text-slate-400">•</span>
                    <span class="text-emerald-700">💻 ${p.habilidadeComputacaoCodigo || ''}</span>
                  </div>
                  <p class="line-clamp-2 text-slate-500 mt-1">${p.objetivos ? p.objetivos.slice(0, 110) + '...' : ''}</p>
                </div>
                <div class="flex flex-wrap gap-1 mb-4">
                  ${(p.pilares || []).map(pilar => `
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      pilar === 'Algoritmos' ? 'badge-algoritmos' :
                      pilar === 'Abstração' ? 'badge-abstracao' :
                      pilar === 'Decomposição' ? 'badge-decomposicao' : 'badge-padroes'
                    }">${pilar}</span>
                  `).join('')}
                </div>
              </div>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a href="#detalhes?id=${p.id}" class="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  Ver Detalhes →
                </a>
                <div class="flex items-center gap-2">
                  <a href="#planejamento?id=${p.id}" class="text-xs text-slate-600 hover:text-blue-700 p-1 rounded" title="Editar">
                    ✏️
                  </a>
                  <button onclick="App.exportPDF('${p.id}')" class="text-xs text-slate-600 hover:text-emerald-700 p-1 rounded" title="Imprimir / Salvar PDF">
                    📄
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="fade-in space-y-8">
        <!-- Banner de Boas-Vindas e Propósito -->
        <div class="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          <div class="relative z-10 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wide text-blue-200 mb-3 backdrop-blur-sm">
              <span>🌟 Plataforma Educacional CompMath</span>
              <span>•</span>
              <span>BNCC Computação & Currículo de PE</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Integração Inteligente entre Matemática e Pensamento Computacional
            </h2>
            <p class="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
              Desenvolvida para apoiar o trabalho do professor na Educação Básica (Anos Finais, Ensino Médio e EJA). Conecte habilidades curriculares oficiais, explore práticas plugadas e desplugadas e elabore planejamentos prontos para exportar em PDF.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="#planejamento" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-sm shadow transition-all flex items-center gap-2">
                <span>➕ Criar Novo Planejamento</span>
              </a>
              <a href="#integracao" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-sm backdrop-blur-sm transition-all flex items-center gap-2">
                <span>🔍 Explorar Matriz Curricular</span>
              </a>
              <a href="#praticas" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-sm backdrop-blur-sm transition-all flex items-center gap-2">
                <span>💡 Banco de Práticas</span>
              </a>
            </div>
          </div>
          <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <!-- Cards de Estatísticas -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl font-bold">
              📚
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Planejamentos</p>
              <h3 class="text-2xl font-bold text-slate-800">${stats.totalPlanos}</h3>
              <p class="text-[11px] text-emerald-600 font-medium">Salvos no sistema</p>
            </div>
          </div>

          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold">
              👥
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Turmas Atendidas</p>
              <h3 class="text-2xl font-bold text-slate-800">${stats.totalTurmas}</h3>
              <p class="text-[11px] text-slate-500">Registradas nos planos</p>
            </div>
          </div>

          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl font-bold">
              🔗
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Habilidades Mapeadas</p>
              <h3 class="text-2xl font-bold text-slate-800">${stats.totalCurriculo}</h3>
              <p class="text-[11px] text-purple-600 font-medium">BNCC Mat + Comp + PE</p>
            </div>
          </div>

          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-bold">
              🧩
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Banco de Práticas</p>
              <h3 class="text-2xl font-bold text-slate-800">${stats.totalPraticas}</h3>
              <p class="text-[11px] text-amber-700 font-medium">Plugadas e Desplugadas</p>
            </div>
          </div>
        </div>

        <!-- Seção de Pilares e Metodologia -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Gráfico/Distribuição de Pilares -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm lg:col-span-2">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-bold text-slate-800">Pilares do Pensamento Computacional</h3>
                <p class="text-xs text-slate-500">Presença dos 4 pilares nos seus planejamentos pedagógicos elaborados</p>
              </div>
              <span class="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Equilíbrio Curricular</span>
            </div>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Algoritmos (Passo a passo lógico e repetições)</span>
                  <span>${stats.pilarCount["Algoritmos"]} planos (${pilarPercents["Algoritmos"]}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-blue-600 h-3 rounded-full transition-all duration-500" style="width: ${pilarPercents["Algoritmos"]}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Abstração (Foco no essencial e modelos gerais)</span>
                  <span>${stats.pilarCount["Abstração"]} planos (${pilarPercents["Abstração"]}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-purple-600 h-3 rounded-full transition-all duration-500" style="width: ${pilarPercents["Abstração"]}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Decomposição (Divisão de problemas complexos)</span>
                  <span>${stats.pilarCount["Decomposição"]} planos (${pilarPercents["Decomposição"]}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-amber-500 h-3 rounded-full transition-all duration-500" style="width: ${pilarPercents["Decomposição"]}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Reconhecimento de Padrões (Regularidades e generalização)</span>
                  <span>${stats.pilarCount["Reconhecimento de Padrões"]} planos (${pilarPercents["Reconhecimento de Padrões"]}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-emerald-600 h-3 rounded-full transition-all duration-500" style="width: ${pilarPercents["Reconhecimento de Padrões"]}%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Informações de Apoio ao Docente -->
          <div class="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xl">📖</span>
                <h4 class="font-bold text-slate-800 text-sm">Resolução CNE/CP nº 1/2022</h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                A BNCC Computação institui que o Pensamento Computacional, o Mundo Digital e a Cultura Digital devem ser desenvolvidos de modo interdisciplinar, com destaque prioritário para a articulação com a Matemática.
              </p>
              <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <p class="font-semibold text-blue-900">💡 Dica Didática CompMath:</p>
                <p>Comece com atividades <strong>desplugadas</strong> (sem telas) para fixar conceitos lógicos e, em seguida, consolide com práticas <strong>plugadas</strong> (Scratch, GeoGebra ou Planilhas).</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-200/60">
              <a href="#integracao" class="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center justify-between">
                <span>Ver Matriz de Integração Curricular</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Seção: Planejamentos Recentes -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-lg font-bold text-slate-800">Planejamentos Pedagógicos Recentes</h3>
              <p class="text-xs text-slate-500">Acesse, edite ou gere o PDF oficial das suas aulas salvas</p>
            </div>
            <a href="#detalhes" class="text-xs font-semibold text-blue-700 hover:text-blue-900">
              Ver Todos (${planejamentos.length}) →
            </a>
          </div>
          ${recentesHTML}
        </div>
      </div>
    `;
  }
};
