import $ from '../../shared/dom7.js';
import { nextFrame, bindMethods } from '../../shared/utils.js';
import { destroyTabbarNewHighlight, initTabbarNewHighlight } from './tabbar-highlight.js';

const ToolbarNew = {
  setHighlight(tabbarEl) {
    const app = this;
    const $tabbarEl = $(tabbarEl);

    if (
      $tabbarEl.length === 0 ||
      !($tabbarEl.hasClass('tabbar-new') || $tabbarEl.hasClass('tabbar-new-icons'))
    ) {
      return;
    }

    let $highlightEl = $tabbarEl.find('.tab-link-highlight');
    const tabLinksCount = $tabbarEl.find('.tab-link').length;
    if (tabLinksCount === 0) {
      $highlightEl.remove();
      return;
    }

    if ($highlightEl.length === 0) {
      if (app.theme === 'ios') {
        $tabbarEl
          .children('.toolbar-new-inner')
          .children('.toolbar-new-pane')
          .append('<span class="tab-link-highlight"></span>');
      } else {
        $tabbarEl.children('.toolbar-new-inner').append('<span class="tab-link-highlight"></span>');
      }

      $highlightEl = $tabbarEl.find('.tab-link-highlight');
    } else if ($highlightEl.next('a,button,.tab-link').length) {
      if (app.theme === 'ios') {
        $tabbarEl.children('.toolbar-new-inner').children('.toolbar-new-pane').append($highlightEl);
      } else {
        $tabbarEl.children('.toolbar-new-inner').append($highlightEl);
      }
    }

    const $activeLink = $tabbarEl.find('.tab-link-active');
    let highlightWidth;
    let highlightTranslate;

    if ($tabbarEl.hasClass('tabbar-new-scrollable') && $activeLink && $activeLink[0]) {
      highlightWidth = `${$activeLink[0].offsetWidth}px`;
      highlightTranslate = `${$activeLink[0].offsetLeft}px`;
    } else {
      const activeIndex = $activeLink.index();
      highlightWidth = `${100 / tabLinksCount}%`;
      highlightTranslate = `${(app.rtl ? -activeIndex : activeIndex) * 100}%`;
    }

    nextFrame(() => {
      $highlightEl.css('width', highlightWidth).transform(`translate3d(${highlightTranslate},0,0)`);
    });
  },
  init(tabbarEl) {
    const app = this;
    app.toolbarNew.setHighlight(tabbarEl);
    if (app.theme !== 'ios') return;
    initTabbarNewHighlight(tabbarEl);
  },
  destroy(tabbarEl) {
    const app = this;
    if (app.theme !== 'ios') return;
    destroyTabbarNewHighlight(tabbarEl);
  },
  hide(el, animate = true) {
    const app = this;
    const $el = $(el);
    if ($el.hasClass('toolbar-new-hidden')) return;
    const className = `toolbar-new-hidden${animate ? ' toolbar-new-transitioning' : ''}`;
    $el.transitionEnd(() => {
      $el.removeClass('toolbar-new-transitioning');
    });
    $el.addClass(className);
    $el.trigger('toolbar-new:hide');
    app.emit('toolbarNewHide', $el[0]);
  },
  show(el, animate = true) {
    const app = this;
    const $el = $(el);
    if (!$el.hasClass('toolbar-new-hidden')) return;
    if (animate) {
      $el.addClass('toolbar-new-transitioning');
      $el.transitionEnd(() => {
        $el.removeClass('toolbar-new-transitioning');
      });
    }
    $el.removeClass('toolbar-new-hidden');
    $el.trigger('toolbar-new:show');
    app.emit('toolbarNewShow', $el[0]);
  },
  initToolbarOnScroll(pageEl) {
    const app = this;
    const $pageEl = $(pageEl);
    let $toolbarEl = $pageEl.parents('.view').children('.toolbar-new');
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.find('.toolbar-new');
    }
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.parents('.views').children('.tabbar-new, .tabbar-new-icons');
    }
    if ($toolbarEl.length === 0) {
      return;
    }

    let previousScrollTop;
    let currentScrollTop;

    let scrollHeight;
    let offsetHeight;
    let reachEnd;
    let action;
    let toolbarHidden;
    function handleScroll(e) {
      if ($pageEl.hasClass('page-with-card-opened')) return;
      if ($pageEl.hasClass('page-previous')) return;
      const scrollContent = this;
      if (e && e.target && e.target !== scrollContent) {
        return;
      }
      currentScrollTop = scrollContent.scrollTop;
      scrollHeight = scrollContent.scrollHeight;
      offsetHeight = scrollContent.offsetHeight;
      reachEnd = currentScrollTop + offsetHeight >= scrollHeight;
      toolbarHidden = $toolbarEl.hasClass('toolbar-new-hidden');

      if (reachEnd) {
        if (app.params.toolbarNew.showOnPageScrollEnd) {
          action = 'show';
        }
      } else if (previousScrollTop > currentScrollTop) {
        if (app.params.toolbarNew.showOnPageScrollTop || currentScrollTop <= 44) {
          action = 'show';
        } else {
          action = 'hide';
        }
      } else if (currentScrollTop > 44) {
        action = 'hide';
      } else {
        action = 'show';
      }

      if (action === 'show' && toolbarHidden) {
        app.toolbarNew.show($toolbarEl);
        toolbarHidden = false;
      } else if (action === 'hide' && !toolbarHidden) {
        app.toolbarNew.hide($toolbarEl);
        toolbarHidden = true;
      }

      previousScrollTop = currentScrollTop;
    }
    $pageEl.on('scroll', '.page-content', handleScroll, true);
    $pageEl[0].f7ScrollToolbarNewHandler = handleScroll;
  },
};
export default {
  name: 'toolbar-new',
  create() {
    const app = this;
    bindMethods(app, {
      toolbarNew: ToolbarNew,
    });
  },
  params: {
    toolbarNew: {
      hideOnPageScroll: false,
      showOnPageScrollEnd: true,
      showOnPageScrollTop: true,
    },
  },
  on: {
    pageBeforeRemove(page) {
      const app = this;
      if (page.$el[0].f7ScrollToolbarNewHandler) {
        page.$el.off('scroll', '.page-content', page.$el[0].f7ScrollToolbarNewHandler, true);
      }
      page.$el.find('.tabbar-new, .tabbar-new-icons').each((tabbarEl) => {
        app.toolbarNew.destroy(tabbarEl);
      });
    },
    pageBeforeIn(page) {
      const app = this;
      let $toolbarEl = page.$el.parents('.view').children('.toolbar-new');
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.parents('.views').children('.tabbar-new, .tabbar-new-icons');
      }
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.find('.toolbar-new');
      }
      if ($toolbarEl.length === 0) {
        return;
      }
      if (page.$el.hasClass('no-toolbar-new')) {
        app.toolbarNew.hide($toolbarEl);
      } else {
        app.toolbarNew.show($toolbarEl);
      }
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.tabbar-new, .tabbar-new-icons').each((tabbarEl) => {
        app.toolbarNew.init(tabbarEl);
      });
      if (
        app.params.toolbarNew.hideOnPageScroll ||
        page.$el.find('.hide-toolbar-new-on-scroll').length ||
        page.$el.hasClass('hide-toolbar-new-on-scroll') ||
        page.$el.find('.hide-bars-on-scroll').length ||
        page.$el.hasClass('hide-bars-on-scroll')
      ) {
        if (
          page.$el.find('.keep-toolbar-new-on-scroll').length ||
          page.$el.hasClass('keep-toolbar-new-on-scroll') ||
          page.$el.find('.keep-bars-on-scroll').length ||
          page.$el.hasClass('keep-bars-on-scroll')
        ) {
          return;
        }
        app.toolbarNew.initToolbarOnScroll(page.el);
      }
    },
    init() {
      const app = this;
      app.$el.find('.tabbar-new, .tabbar-new-icons').each((tabbarEl) => {
        app.toolbarNew.init(tabbarEl);
      });
    },
  },
  vnode: {
    tabbarNew: {
      insert(vnode) {
        const app = this;
        app.toolbarNew.init(vnode.elm);
      },
      destroy(vnode) {
        const app = this;
        app.toolbarNew.destroy(vnode.elm);
      },
    },
  },
};

