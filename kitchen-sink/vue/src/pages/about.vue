<template>
  <f7-page class="page-about">
    <f7-navbar
      large
      transparent
      title="About"
      title-large="About"
      back-link="Framework7"
    ></f7-navbar>
    <f7-block-title medium>Welcome to Framework7</f7-block-title>
    <f7-block strong-ios outline-ios>
      <p>
        Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps
        or web apps with iOS or Android (Material) native look and feel. It is also an indispensable
        prototyping apps tool to show working app prototype as soon as possible in case you need to.
        Framework7 is created by Vladimir Kharlampidi.
      </p>
      <p>
        The main approach of the Framework7 is to give you an opportunity to create iOS and Android
        (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of
        freedom. It doesn't limit your imagination or offer ways of any solutions somehow.
        Framework7 gives you freedom!
      </p>
      <p>
        Framework7 is not compatible with all platforms. It is focused only on iOS and Android
        (Material) to bring the best experience and simplicity.
      </p>
      <p>
        Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova
        or Capacitor) or web app that looks like and feels as great native iOS or Android (Material)
        apps.
      </p>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7Page, f7Navbar, f7BlockTitle, f7Block } from '@xenknight/framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Block,
  },
};
</script>
