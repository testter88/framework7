<template>
  <f7-page>
    <f7-navbar title="Floating Action Button" back-link="Back"></f7-navbar>

    <template #fixed>
      <f7-fab position="right-top">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="left">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <f7-fab position="right-bottom">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="top">
          <f7-fab-button label="Action 1">1</f7-fab-button>
          <f7-fab-button label="Action 2">2</f7-fab-button>
          <f7-fab-button label="Third Action">3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <f7-fab position="left-bottom">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="top">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <f7-fab position="left-top">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="bottom">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <f7-fab position="center-center">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="center">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
          <f7-fab-button>4</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <f7-fab position="center-bottom" text="Create">
        <f7-icon ios="f7:plus" md="material:add"></f7-icon>
      </f7-fab>
    </template>

    <f7-block>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem beatae, delectus
        eligendi est saepe molestias perferendis suscipit, commodi labore ipsa non quasi eum magnam
        neque ducimus! Quasi, numquam.
      </p>
      <p>
        Maiores culpa, itaque! Eaque natus ab cum ipsam numquam blanditiis a, quia, molestiae aut
        laudantium recusandae ipsa. Ad iste ex asperiores ipsa, mollitia perferendis consectetur
        quam eaque, voluptate laboriosam unde.
      </p>
      <p>
        Sed odit quis aperiam temporibus vitae necessitatibus, laboriosam, exercitationem dolores
        odio sapiente provident. Accusantium id, itaque aliquam libero ipsum eos fugiat distinctio
        laboriosam exercitationem sequi facere quas quidem magnam reprehenderit.
      </p>
      <p>
        Pariatur corporis illo, amet doloremque. Ab veritatis sunt nisi consectetur error modi, nam
        illo et nostrum quia aliquam ipsam vitae facere voluptates atque similique odit mollitia,
        rerum placeat nobis est.
      </p>
      <p>
        Et impedit soluta minus a autem adipisci cupiditate eius dignissimos nihil officia dolore
        voluptatibus aperiam reprehenderit esse facilis labore qui, officiis consectetur. Ipsa
        obcaecati aspernatur odio assumenda veniam, ipsum alias.
      </p>
    </f7-block>
    <f7-block>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsa debitis sed nihil eaque
        dolore cum iste quibusdam, accusamus doloribus, tempora quia quos voluptatibus corporis
        officia at quas dolorem earum!
      </p>
      <p>
        Quod soluta eos inventore magnam suscipit enim at hic in maiores temporibus pariatur tempora
        minima blanditiis vero autem est perspiciatis totam dolorum, itaque repellat? Nobis
        necessitatibus aut odit aliquam adipisci.
      </p>
      <p>
        Tenetur delectus perspiciatis ex numquam, unde corrupti velit! Quam aperiam, animi fuga
        veritatis consectetur, voluptatibus atque consequuntur dignissimos itaque, sint impedit cum
        cumque at. Adipisci sint, iusto blanditiis ullam? Vel?
      </p>
      <p>
        Dignissimos velit officia quibusdam! Eveniet beatae, aut, omnis temporibus consequatur
        expedita eaque aliquid quos accusamus fugiat id iusto autem obcaecati repellat fugit
        cupiditate suscipit natus quas doloribus? Temporibus necessitatibus, libero.
      </p>
      <p>
        Architecto quisquam ipsa fugit facere, repudiandae asperiores vitae obcaecati possimus,
        labore excepturi reprehenderit consectetur perferendis, ullam quidem hic, repellat fugiat
        eaque fuga. Consectetur in eveniet, deleniti recusandae omnis eum quas?
      </p>
      <p>
        Quos nulla consequatur quo, officia quaerat. Nulla voluptatum, assumenda quibusdam, placeat
        cum aut illo deleniti dolores commodi odio ipsam, recusandae est pariatur veniam repudiandae
        blanditiis. Voluptas unde deleniti quisquam, nobis?
      </p>
      <p>
        Atque qui quaerat quasi officia molestiae, molestias totam incidunt reprehenderit laboriosam
        facilis veritatis, non iusto! Dolore ipsam obcaecati voluptates minima maxime minus qui
        mollitia facere. Nostrum esse recusandae voluptatibus eligendi.
      </p>
    </f7-block>
  </f7-page>
</template>
<script>
import {
  f7Navbar,
  f7Page,
  f7Fab,
  f7FabButtons,
  f7FabButton,
  f7Icon,
  f7Block,
} from '@xenknight/framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
    f7Fab,
    f7FabButtons,
    f7FabButton,
    f7Icon,
    f7Block,
  },
};
</script>
