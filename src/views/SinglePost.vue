<template>
  <div class="singePost">
    <page-content>
      <template v-slot:PageHeader>
        <second-header
          :title="post.title"
          :text="post.description"
        ></second-header>
      </template>
      <template v-slot:PageContent>
        <about-card showMedia showContent background="lightyellow" width="50%">
          <template v-slot:media> </template>
          <template v-slot:content>
            <p>{{ post.content }}</p>
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
// import Cards from "@/json/CardsContent";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta.1",
          content:
            "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus magnam corrupti ipsa dolor commodi veritatis ratione, minima odit autem nihil labore quia. Assumenda modi beatae neque magni sint? Ullam. 1       ",
        },
        {
          id: 2,
          title: "Post 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta.2",
          content:
            "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus magnam corrupti ipsa dolor commodi veritatis ratione, minima odit autem nihil labore quia. Assumenda modi beatae neque magni sint? Ullam. 2      ",
        },
        {
          id: 3,
          title: "Post 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta.3",
          content:
            "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus magnam corrupti ipsa dolor commodi veritatis ratione, minima odit autem nihil labore quia. Assumenda modi beatae neque magni sint? Ullam. 3      ",
        },
        {
          id: 4,
          title: "Post 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta.4",
          content:
            "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus magnam corrupti ipsa dolor commodi veritatis ratione, minima odit autem nihil labore quia. Assumenda modi beatae neque magni sint? Ullam. 4      ",
        },
      ],
      post: this.getPosts(this.$route.params.id),
    };
  },

  methods: {
    getPosts(id) {
      const post = this.posts.find((p) => p.id === id);
      return (
        post || {
          id: 0,
          title: "no title",
          description: "no description",
        }
      );
    },
  },

  components: {
    PageContent,
    AboutCard,
    AboutButton,
    SecondHeader,
  },
};
</script>
