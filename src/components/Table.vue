<template>
  <div class="videos_table">
    <table>
      <thead>
        <tr>
          <th>Id</th>
           <th>VideoName</th>
           <th>VideoURL</th> 
          <th> Video name </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="video.id" v-for="video in videos">
          <td>#{{ video.id }}</td>
          <td>
            {{ video.name }}
          </td>
          <td>
            <a :href="video.url">{{ video.url }}</a>
          </td>
          <td>
            <button @click="DeleteVideo(video)" style="color: red">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    DeleteVideo(video) {
      this.$emit("DeleteVideo", video);
    },
  },
};
</script>
<style scoped>
.videos_table {
  width: 50%;
  margin: auto;
}
table {
  width: 100%;
  margin: auto;
  font-size: 20px;
}
tr {
  border-bottom: 0.1px solid;
}
th {
  text-align: center;
  color: white;
  background: #0083a7;
  font-weight: 10px;
  padding: 10px;
  width: 200px;
}
td {
  text-align: center;
  padding: 10px;
  width: 200px;
}
</style>
