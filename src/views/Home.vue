<template>
  <ul>
    <router-link
      v-for="book in books"
      v-bind:key="book.id"
      v-bind:to="'/bookInfo/'+book.id"
      v-bind:style="{background: book.color}"
      class="home"
    >
      {{book.title}}
      <br />
      {{book.author}}
    </router-link>
  </ul>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  computed: {
    books() {
      return this.$root.$data.books;
    }
  }
};
</script>
<style scoped>
.home {
  /* background-color: bisque;
  border: solid 2px green; */
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  width: 300px;
  height: 200px;
  margin: 5px; */
  display: flex;
  width: 300px;
  height: 200px;
  margin: 5px;
}
</style>
