<template>
  <about-card showMedia showTitle showContent showActions background="#eee">
    <template v-slot:media>
      <img :src="`https://picsum.photos/id/${id}/400/200`" alt="Photo" />
    </template>
    <template v-slot:title>
      <h2>{{ title }}</h2>
    </template>
    <template v-slot:content>
      <p>
        {{ description }}
      </p>
    </template>
    <template v-slot:actions>
      <about-button
        background="white"
        :link="`/blog/${id}`"
        title="Read more"
      ></about-button>
    </template>
  </about-card>
</template>

<script>
import AboutButton from "@/components/Button.vue";
import AboutCard from "@/components/Card.vue";
import PageContent from "@/components/PageContent.vue";

export default {
  props: {
    id: String,
    title: String,
    description: String,
  },
  components: {
    PageContent,
    AboutCard,
    AboutButton,
  },
};
</script>
