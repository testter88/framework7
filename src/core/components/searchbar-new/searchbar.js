import $ from '../../shared/dom7.js';
import { extend } from '../../shared/utils.js';
import SearchbarNew from './searchbar-new-class.js';
import ConstructorMethods from '../../shared/constructor-methods.js';

export default {
  name: 'searchbar-new',
  static: {
    SearchbarNew,
  },
  create() {
    const app = this;
    app.searchbarNew = ConstructorMethods({
      defaultSelector: '.searchbar-new',
      constructor: SearchbarNew,
      app,
      domProp: 'f7SearchbarNew',
      addMethods: 'clear enable disable toggle search'.split(' '),
    });
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl)
        .find('.searchbar-new-init')
        .each((searchbarEl) => {
          const $searchbarEl = $(searchbarEl);
          app.searchbarNew.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
        });
    },
    tabBeforeRemove(tabEl) {
      $(tabEl)
        .find('.searchbar-new-init')
        .each((searchbarEl) => {
          if (searchbarEl.f7SearchbarNew && searchbarEl.f7SearchbarNew.destroy) {
            searchbarEl.f7SearchbarNew.destroy();
          }
        });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.searchbar-new-init').each((searchbarEl) => {
        const $searchbarEl = $(searchbarEl);
        app.searchbarNew.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
      });
      if (
        app.theme === 'ios' &&
        page.view &&
        page.view.router.dynamicNavbar &&
        page.$navbarNewEl &&
        page.$navbarNewEl.length > 0
      ) {
        page.$navbarNewEl.find('.searchbar-new-init').each((searchbarEl) => {
          const $searchbarEl = $(searchbarEl);
          app.searchbarNew.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
        });
      }
    },
    pageBeforeRemove(page) {
      const app = this;
      page.$el.find('.searchbar-new-init').each((searchbarEl) => {
        if (searchbarEl.f7SearchbarNew && searchbarEl.f7SearchbarNew.destroy) {
          searchbarEl.f7SearchbarNew.destroy();
        }
      });
      if (
        app.theme === 'ios' &&
        page.view &&
        page.view.router.dynamicNavbar &&
        page.$navbarNewEl &&
        page.$navbarNewEl.length > 0
      ) {
        page.$navbarNewEl.find('.searchbar-new-init').each((searchbarEl) => {
          if (searchbarEl.f7SearchbarNew && searchbarEl.f7SearchbarNew.destroy) {
            searchbarEl.f7SearchbarNew.destroy();
          }
        });
      }
    },
  },
  clicks: {
    '.searchbar-new-clear': function clear($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbarNew.get(data.searchbar);
      if (sb) sb.clear();
    },
    '.searchbar-new-enable': function enable($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbarNew.get(data.searchbar);
      if (sb) sb.enable(true);
    },
    '.searchbar-new-disable': function disable($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbarNew.get(data.searchbar);
      if (sb) sb.disable();
    },
    '.searchbar-new-toggle': function toggle($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbarNew.get(data.searchbar);
      if (sb) sb.toggle();
    },
  },
  vnode: {
    'searchbar-new-init': {
      insert(vnode) {
        const app = this;
        const searchbarEl = vnode.elm;
        const $searchbarEl = $(searchbarEl);
        app.searchbarNew.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
      },
      destroy(vnode) {
        const searchbarEl = vnode.elm;
        if (searchbarEl.f7SearchbarNew && searchbarEl.f7SearchbarNew.destroy) {
          searchbarEl.f7SearchbarNew.destroy();
        }
      },
    },
  },
};

