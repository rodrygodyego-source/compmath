/**
 * CompMath - Aplicação Principal e Roteador SPA
 */

const App = {
  mainContainer: null,
  currentRoute: 'dashboard',

  init: function() {
    const self = this;
    self.mainContainer = document.getElementById('main-content');

    // Escutar alterações de hash na URL
    window.addEventListener('hashchange', function() {
      self.handleRouting();
    });

    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
      // Fechar ao clicar em link mobile
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    // Carregar rota inicial
    self.handleRouting();
  },

  parseHash: function() {
    const rawHash = window.location.hash.slice(1) || 'dashboard';
    const [route, queryString] = rawHash.split('?');
    const params = {};

    if (queryString) {
      queryString.split('&').forEach(part => {
        const [k, v] = part.split('=');
        if (k) params[k] = decodeURIComponent(v || '');
      });
    }

    return { route: route || 'dashboard', params };
  },

  handleRouting: function() {
    const self = this;
    const { route, params } = self.parseHash();
    self.currentRoute = route;

    // Atualizar visual da barra de navegação
    self.updateNavLinks(route);

    // Rolar para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Renderizar o controlador correspondente
    switch (route) {
      case 'dashboard':
        DashboardController.render(self.mainContainer);
        break;
      case 'integracao':
        IntegracaoController.render(self.mainContainer);
        break;
      case 'planejamento':
        PlanejamentoController.render(self.mainContainer, params);
        break;
      case 'praticas':
        PraticasController.render(self.mainContainer, params);
        break;
      case 'detalhes':
        DetalhesController.render(self.mainContainer, params);
        break;
      default:
        window.location.hash = '#dashboard';
        break;
    }
  },

  updateNavLinks: function(activeRoute) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkRoute = href.replace('#', '').split('?')[0];

      if (linkRoute === activeRoute) {
        link.classList.add('bg-blue-800', 'text-white');
        link.classList.remove('text-blue-100', 'hover:bg-blue-800/60');
      } else {
        link.classList.remove('bg-blue-800', 'text-white');
        link.classList.add('text-blue-100', 'hover:bg-blue-800/60');
      }
    });
  },

  showToast: function(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `
      <span>${icon}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  exportPDF: function(id) {
    // Caso de Uso 4: Exportar Planejamento
    // Redireciona para a tela de detalhes daquele planejamento e chama a impressão do navegador
    window.location.hash = `#detalhes?id=${id}`;
    setTimeout(() => {
      window.print();
    }, 450);
  }
};

// Iniciar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
