<template>
  <div class="home">
    <div>
      <img class="robot" src="../../assets/robot-home.png" aria-hidden="true" alt="Robot">
    </div>
    <div class="get-started">
      <a href="">Get Started</a> building your vue app
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
