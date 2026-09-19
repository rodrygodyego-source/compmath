/**
 * Controller: Dashboard (CompMath v2.3)
 * Resumo dos 3 Eixos da BNCC Computação (Pensamento Computacional, Mundo Digital e Cultura Digital)
 * e dos 4 Pilares do Pensamento Computacional nos planejamentos do docente.
 */

const DashboardController = {
  render: function(container) {
    const stats = CompMathDB.getStats();
    const planejamentos = CompMathDB.getAllPlanejamentos();
    const recentes = planejamentos.slice(0, 3);
    const profile = CompMathDB.getTeacherProfile();

    const totalEixos = (stats.eixosCount["Pensamento Computacional"] + stats.eixosCount["Mundo Digital"] + stats.eixosCount["Cultura Digital"]) || 1;
    const pcPct = Math.round((stats.eixosCount["Pensamento Computacional"] / totalEixos) * 100);
    const mdPct = Math.round((stats.eixosCount["Mundo Digital"] / totalEixos) * 100);
    const cdPct = Math.round((stats.eixosCount["Cultura Digital"] / totalEixos) * 100);

    let recentesHTML = '';
    if (recentes.length === 0) {
      recentesHTML = `
        <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
            📋
          </div>
          <h4 class="text-lg font-semibold text-slate-800 mb-2">Nenhum planejamento salvo ainda</h4>
          <p class="text-slate-600 text-sm max-w-md mx-auto mb-6">Elabore sua primeira aula articulando a Matemática com os 3 eixos da BNCC Computação.</p>
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
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-900 rounded-full">${p.ano || 'Geral'}</span>
                  <span class="text-xs text-slate-500 font-medium">${p.turma || 'Turma livre'}</span>
                </div>
                <h4 class="font-bold text-slate-800 text-base mb-1 line-clamp-2">${p.conteudo}</h4>
                <p class="text-xs text-slate-500 mb-3 line-clamp-1">🏛️ ${p.escola || 'Escola não informada'}</p>
                <div class="text-xs text-slate-600 mb-3 space-y-1">
                  <div class="flex items-center gap-1 font-mono text-blue-700 font-semibold">
                    <span>📐 ${p.habilidadeMatematicaCodigo || ''}</span>
                    <span class="text-slate-400">•</span>
                    <span class="text-emerald-700">💻 ${p.habilidadeComputacaoCodigo || ''}</span>
                  </div>
                </div>
                
                <!-- Eixos da BNCC Computação -->
                <div class="flex flex-wrap gap-1 mb-4">
                  ${(p.eixos || ["Pensamento Computacional"]).map(eixo => `
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      eixo === 'Pensamento Computacional' ? 'badge-eixo-pc' :
                      eixo === 'Mundo Digital' ? 'badge-eixo-md' : 'badge-eixo-cd'
                    }">${eixo === 'Pensamento Computacional' ? '🧠' : eixo === 'Mundo Digital' ? '💻' : '👥'} ${eixo}</span>
                  `).join('')}
                </div>
              </div>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a href="#detalhes?id=${p.id}" class="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  Ficha Oficial →
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
        <!-- Banner Principal com os 3 EIXOS da BNCC Computação -->
        <div class="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div class="relative z-10 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wide text-emerald-300 mb-3 backdrop-blur-sm border border-white/15">
              <span>🌟 Plataforma Aberta para Professores</span>
              <span>•</span>
              <span>Resolução CNE/CP nº 1/2022 & CEDIM-PE</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Integração da Matemática com os 3 Eixos da BNCC Computação
            </h2>
            <p class="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4">
              Articule o ensino de Matemática ao <strong>Pensamento Computacional</strong>, ao <strong>Mundo Digital</strong> e à <strong>Cultura Digital</strong>. Plataforma aberta e gratuita para planejamento pedagógico, com suporte a cabeçalhos oficiais de escola, matriz curricular e banco de práticas.
            </p>

            <div class="flex flex-wrap gap-3">
              <a href="#planejamento" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-bold text-xs sm:text-sm shadow transition-all flex items-center gap-2">
                <span>➕ Elaborar Planejamento</span>
              </a>
              <a href="#integracao" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all flex items-center gap-2">
                <span>🔗 Matriz dos 3 Eixos</span>
              </a>
              <a href="#praticas" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all flex items-center gap-2">
                <span>💡 Banco de Práticas</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Cards de Métricas Gerais -->
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

        <!-- Painel dos 3 EIXOS da BNCC Computação -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm lg:col-span-2 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🌐</span> Presença dos 3 Eixos da BNCC Computação nos Planos
                </h3>
                <p class="text-xs text-slate-500">Equilíbrio formativo conforme a Resolução CNE/CP nº 1/2022</p>
              </div>
            </div>

            <div class="space-y-4">
              <!-- Eixo 1 -->
              <div>
                <div class="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span class="flex items-center gap-2 text-indigo-900">
                    <span>🧠</span> Pensamento Computacional (Algoritmos, Decomposição, Abstração, Padrões)
                  </span>
                  <span>${stats.eixosCount["Pensamento Computacional"]} planos (${pcPct}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-indigo-600 h-3 rounded-full transition-all duration-500" style="width: ${pcPct}%"></div>
                </div>
              </div>

              <!-- Eixo 2 -->
              <div>
                <div class="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span class="flex items-center gap-2 text-cyan-900">
                    <span>💻</span> Mundo Digital (Sistemas, Codificação Binária, Hardware, Software e Planilhas)
                  </span>
                  <span>${stats.eixosCount["Mundo Digital"]} planos (${mdPct}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-cyan-600 h-3 rounded-full transition-all duration-500" style="width: ${mdPct}%"></div>
                </div>
              </div>

              <!-- Eixo 3 -->
              <div>
                <div class="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span class="flex items-center gap-2 text-emerald-900">
                    <span>👥</span> Cultura Digital (Uso Ético, Cidadania, Segurança, Fake News e Letramento)
                  </span>
                  <span>${stats.eixosCount["Cultura Digital"]} planos (${cdPct}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3">
                  <div class="bg-emerald-600 h-3 rounded-full transition-all duration-500" style="width: ${cdPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Informações de Apoio ao Docente -->
          <div class="bg-gradient-to-br from-slate-50 to-blue-50/60 rounded-xl p-6 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xl">📖</span>
                <h4 class="font-bold text-slate-900 text-sm">Estrutura da BNCC Computação</h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">
                A Computação na Educação Básica não se reduz à programação de computadores: ela articula a <strong>Cultura Digital</strong> (sociedade e ética), o <strong>Mundo Digital</strong> (tecnologia e dados) e o <strong>Pensamento Computacional</strong> (raciocínio lógico e resolução de problemas).
              </p>
              <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                <p class="font-bold text-blue-900">💡 Aplicação Aberta:</p>
                <p>Ao criar uma aula, informe a escola e seu nome no cabeçalho. Todos os dados são salvos com segurança no seu navegador.</p>
              </div>
            </div>
            <a href="#planejamento" class="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center justify-between pt-2 border-t border-slate-200">
              <span>Iniciar Novo Planejamento</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Seção: Planejamentos Recentes -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-lg font-bold text-slate-800">Planejamentos Pedagógicos Recentes</h3>
              <p class="text-xs text-slate-500">Visualize a ficha oficial ou gere o PDF para impressão das suas aulas</p>
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
