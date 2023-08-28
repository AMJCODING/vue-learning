<template>
  <div class="home">
    <page-content>
      <template v-slot:PageHeader>
        <second-header
          title="Home Page"
          text="this a home page"
        ></second-header>
      </template>
      <template v-slot:PageContent>
        <about-card
          showMedia
          showTitle
          showContent
          showActions
          background="#eee"
          width="50%"
        >
          <template v-slot:media>
            <p>img</p>
          </template>
          <template v-slot:title>
            <h2>New offer</h2>
          </template>
          <template v-slot:content>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              amet iure adipisci recusandae id, omnis autem eum laborum ratione,
              rerum doloribus ex quos et, enim libero eaque temporibus quisquam?
              A!
            </p>
          </template>
          <template v-slot:actions>
            <about-button
              background="white"
              link="/home"
              title="check offer 1"
            ></about-button>
            <about-button
              background="black"
              link="/home"
              title="do it"
            ></about-button>
          </template>
        </about-card>

        <about-card width="50%" background="lightblue" showTitle showContent>
          <template v-slot:title>
            <h2>Who are we ?</h2>
          </template>
          <template v-slot:content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              possimus voluptate maxime, ex expedita eveniet aut obcaecati odio
              repellendus fuga dicta saepe asperiores, repellat, quae odit
              dolore. Reprehenderit officiis error rerum sequi voluptatibus,
              vero aliquid atque, in et corporis ullam officia. Explicabo
              corporis consequuntur labore inventore, illo nulla sequi sit.
            </p>
          </template>
        </about-card>

        <about-card showActions width="50%" background="lightgreen" showTitle>
          <template v-slot:title>
            <h2>Wanna pick offer ?</h2>
          </template>
          <template v-slot:actions>
            <about-button
              background="white"
              link="/home"
              title="Yes take me now"
              FullWidth
            ></about-button>
          </template>
        </about-card>
      </template>
    </page-content>
  </div>
</template>

<script>
import AboutButton from "@/components/Button.vue";
import AboutCard from "@/components/Card.vue";
import PageContent from "@/components/PageContent.vue";
import SecondHeader from "@/components/SeconddHeader.vue";
export default {
  components: {
    PageContent,
    AboutCard,
    AboutButton,
    SecondHeader,
  },
};
</script>
