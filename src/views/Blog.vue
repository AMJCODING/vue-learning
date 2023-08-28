<template>
  <div class="blog">
    <page-content>
      <template v-slot:PageHeader>
        <second-header title="Blog page" text="read this blogs"></second-header>
      </template>
      <template v-slot:PageContent>
        <blog-posts v-for="card in cards" :key="card.id" :id="card.id" :title="card.title" :description="card.description"></blog-posts>
      </template>
    </page-content>
  </div>
</template>

<script>
import SecondHeader from "@/components/SeconddHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import PageContent from "@/components/PageContent.vue";
import CardsContent from "@/json/CardsContent";
export default {
  data () {
    return {
      cards: CardsContent
    }
  },
  components: {
    BlogPosts,
    PageContent,
    SecondHeader,
  },
};
</script>
