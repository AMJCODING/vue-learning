<template>
  <div class="my_videos">
    <second-header
      text="Add your favourte videos"
      title="My videos"
    ></second-header>
    <videos-feilds @addVideo="addVideo"></videos-feilds>
    <br />
    <br />
    <page-section>
      <template v-slot:controls>
        <video-controls
          @ChangeOrder="ChangeOrder"
          :rules="rules"
        ></video-controls>
      </template>
      <template v-slot:content>
        <videos-table
          @DeleteVideo="DeleteVideo"
          :videos="DisplayedVideo"
        ></videos-table>
      </template>
    </page-section>
  </div>
</template>

<script>
import SecondHeader from "@/components/SeconddHeader.vue";
import VideosFeilds from "@/components/ViedoesFeilds.vue";
import VideosTable from "@/components/Table.vue";
import VideoControls from "@/components/VideoControls.vue";
import PageSection from "@/components/PageSection.vue";
export default {
  data() {
    return {
      videos: [],
      rules: {
        reverse: false,
        ById: false,
        ByName: false,
      },
    };
  },
  computed: {
    DisplayedVideo() {
      let final = [...this.VideosWithId];

      if (this.rules.ByName) {
        final = this.SortByName;
        !this.rules.ById;
      }
      if (this.rules.ById) {
        final = this.SortById;
        !this.rules.ByName;
      }
      if (this.rules.reverse) {
        return final.reverse();
      } else {
        return final;
      }
    },
    VideosWithId() {
      const result = [...this.videos].map((video, index) => ({
        ...video,
        id: video.id ? video.id : index + 1,
      }));
      return result;
    },
    SortById() {
      const result = [...this.VideosWithId].sort((a, b) => a.id - b.id);
      return result;
    },
    SortByName() {
      const result = [...this.VideosWithId].sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;

        if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;

        return 0;
      });
      return result;
    },
  },
  methods: {
    addVideo(payload) {
      const { name, url } = payload;

      let check = this.videos.filter(function (video) {
        return name === video.name || url === video.url;
      }).length;

      if (!name ) {
        return alert(
          "Sorry try again 'Video name' can not be empty"
        );
      }
      if (!url) {
        return alert(
          "Sorry try again 'video url' can not be empty"
        );
      }
      if (check > 0) {
        alert("'video name' or 'video url' is repeated");
      } else {
        this.videos.push({
          name: name,
          url: url,
        });
      }
    },

    DeleteVideo(video) {
      this.videos = this.videos.filter(
        (v) => v.name !== video.name && v.url !== video.url
      );
    },
    ChangeOrder(paylaod) {
      const { name, checked } = paylaod;
      this.rules[name] = checked;
    },
  },
  components: {
    SecondHeader,
    VideosFeilds,
    VideosTable,
    PageSection,
    VideoControls,
  },
};
</script>
<style scoped>
.feilds {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
