<template>
  <f7-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <f7-navbar title="Sheet Modal" back-link="Back"></f7-navbar>
    <f7-block strong-ios outline-ios>
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals
        allow to create custom overlays with custom content.
      </p>
      <p class="grid grid-cols-2 grid-gap">
        <f7-button fill sheet-open=".demo-sheet">Open Sheet</f7-button>
        <f7-button fill @click="createSheet">Dynamic Sheet</f7-button>
      </p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-top">Top Sheet</f7-button>
      </p>
      <p>
        <f7-button fill @click="sheetOpened = true">Open Via Prop Change</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Push View</f7-block-title>
    <f7-block strong-ios outline-ios>
      <p>
        Sheet can push view behind on open. By default it has effect only when `safe-area-inset-top`
        is more than zero (iOS fullscreen webapp or iOS cordova app)
      </p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-push">Sheet Push</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Swipeable Sheet</f7-block-title>
    <f7-block strong-ios outline-ios>
      <p>
        Sheet modal can be closed with swipe to top (for top Sheet) or bottom (for default Bottom
        sheet):
      </p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-swipe-to-close">Swipe To Close</f7-button>
      </p>
      <p>Also there is swipe-step that can be set on Sheet modal to expand it with swipe:</p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-swipe-to-step">Swipe To Step</f7-button>
      </p>
      <p>
        In addition to "swipe step" there is a support for position breakpoints (multiple steps):
      </p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-breakpoints">Breakpoints</f7-button>
      </p>
    </f7-block>

    <f7-sheet v-model:opened="sheetOpened" class="demo-sheet">
      <f7-toolbar>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>Close</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet top class="demo-sheet-top">
      <f7-toolbar bottom>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>Close</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet class="demo-sheet-push" push>
      <f7-toolbar>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>Close</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet class="demo-sheet-swipe-to-close" style="height: auto" swipe-to-close push backdrop>
      <div class="swipe-handler"></div>

      <f7-page-content>
        <f7-block-title large>Hello!</f7-block-title>
        <f7-block>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet
      class="demo-sheet-swipe-to-step"
      style="height: auto"
      swipe-to-close
      swipe-to-step
      push
      backdrop
    >
      <div class="swipe-handler" @click="toggleSwipeStep"></div>
      <div class="sheet-modal-swipe-step">
        <div class="display-flex padding justify-content-space-between align-items-center">
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px"><b>$500</b></div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <f7-button large fill>Make Payment</f7-button>
          <div class="margin-top text-align-center">Swipe up for more details</div>
        </div>
      </div>
      <f7-block-title medium class="margin-top">Your order:</f7-block-title>
      <f7-list>
        <f7-list-item title="Item 1">
          <template #after>
            <b>$200</b>
          </template>
        </f7-list-item>
        <f7-list-item title="Item 2">
          <template #after>
            <b>$180</b>
          </template>
        </f7-list-item>
        <f7-list-item title="Delivery">
          <template #after>
            <b>$120</b>
          </template>
        </f7-list-item>
      </f7-list>
    </f7-sheet>

    <f7-sheet
      class="demo-sheet-breakpoints"
      style="height: auto"
      swipe-to-close
      :breakpoints="[0.33, 0.66]"
      backdrop
      :backdrop-breakpoint="0.66"
      push
      :push-breakpoint="0.66"
    >
      <div class="swipe-handler" style="background-color: transparent"></div>
      <div style="display: flex; align-items: center; justify-content: center; height: 20vh">
        Section 1
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 20vh">
        Section 2
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 20vh">
        Section 3
      </div>
    </f7-sheet>
  </f7-page>
</template>
<script>
import {
  f7Page,
  f7Navbar,
  f7Sheet,
  f7PageContent,
  f7Toolbar,
  f7BlockTitle,
  f7Block,
  f7Button,
  f7Link,
  f7List,
  f7ListItem,
  f7,
} from '@xenknight/framework7-vue';
import $ from 'dom7';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7Sheet,
    f7PageContent,
    f7Toolbar,
    f7BlockTitle,
    f7Block,
    f7Button,
    f7Link,
    f7List,
    f7ListItem,
  },
  data() {
    return {
      sheetOpened: false,
    };
  },
  methods: {
    toggleSwipeStep() {
      f7.sheet.stepToggle('.demo-sheet-swipe-to-step');
    },
    createSheet() {
      const self = this;
      // Create sheet modal
      if (!self.sheet) {
        self.sheet = f7.sheet.create({
          content: `
            <div class="sheet-modal sheet-modal-bottom">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a  class="link sheet-close">Close</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p>This sheet modal was created dynamically</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      }
      // Close inline sheet
      if ($('.demo-sheet.modal-in').length > 0) f7.sheet.close('.demo-sheet');
      // Open it
      self.sheet.open();
    },
    onPageBeforeOut() {
      // Close opened sheets on page out
      f7.sheet.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy sheet modal when page removed
      if (self.sheet) self.sheet.destroy();
    },
  },
};
</script>
