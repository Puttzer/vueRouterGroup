<template>
  <div class="wrapper">
    <button>back</button>
    <div class="body">
      <div class="left">
        <h1>{{book.title}}</h1>
        <br />
        <h4>{{book.author}}</h4>
      </div>
      <div class="right">
        <h1>{{book.title}}</h1>
        <h3>{{book.author}}</h3>
        <p>{{ book.plot}}</p>
        <div class="details">
          <p>{{book.audience}}</p>
          <p>{{book.publisher}}</p>
          <p>{{book.year}}</p>
          <p>{{book.pages}}</p>
        </div>
        <button>flap to read</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$root.$data.books.find(
        book => book.id == this.$route.params.id
      );
    }
  }
};
</script>

<style scoped >
* {
  background: black;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.body {
  background: lightgreen;
  min-height: 500px;
  margin: 0 auto;
  width: 800px;
  display: flex;
  border: solid 2px rgb(37, 15, 15);
}

.left {
  height: 400px;
  width: 400px;
  padding: 20px;
  background: lightgreen;
}

.right {
  height: 400px;
  width: 400px;
  background: lightgrey;
}
</style>