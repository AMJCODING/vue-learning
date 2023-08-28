<template>
  <div class="about">
    <page-content>
      <template v-slot:PageHeader>
        <second-header title="About page" text="This an about page"></second-header>
      </template>

      <template v-slot:PageContent>
        <about-card showContent showActions background="#eee" width="50%">
          <template v-slot:content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ad dolore laudantium beatae consequuntur provident ducimus soluta?
              Cupiditate, consequatur repellendus. A, incidunt. Aperiam,
              molestiae sint. Nisi odit iusto eius eum at, sint laudantium ex
              quis. Quis minus tempore veniam tenetur reiciendis recusandae
              suscipit labore et quam? Illum a, repudiandae omnis fugit culpa
              libero maiores impedit natus odit officia. Voluptatem similique
              ratione eaque nobis reprehenderit eveniet, officiis amet eligendi
              sunt dolor at suscipit repellat porro, itaque soluta fugit
              temporibus architecto nam perferendis quod consequuntur odit,
              minus qui voluptas. Commodi autem ipsum dolorem a inventore?
              Eveniet, ipsam inventore ut consequatur vero expedita!
            </p>
          </template>
          <template v-slot:actions>
            <about-button
              background="white"
              title="Call us : 777777"
            ></about-button>
            <about-button
              background="black"
              title="My telegram : Ahmed2007.t-me"
            ></about-button>
            <about-button
              background="antiquewhite"
              title="Email us : AMJ@gmail.com"
            ></about-button>
          </template>
        </about-card>
      </template>
    </page-content>
  </div>
</template>

<script>
import SecondHeader from "@/components/SeconddHeader.vue";
import AboutButton from "@/components/Button.vue";
import AboutCard from "@/components/Card.vue";
import PageContent from "@/components/PageContent.vue";
export default {
  components: {
    SecondHeader,
    PageContent,
    AboutCard,
    AboutButton,
  },
};
</script>
