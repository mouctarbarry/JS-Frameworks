<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="@/assets/build-a-bot-logo.png" alt="logo"/>
          Build a bot
        </li>
      </ul>
    </nav>
  </header>

 <main>
    <RobotBuilder />

 </main>
</template>

<script>
import RobotBuilder from '@/components/build/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body{
  background: linear-gradient(to bottom, #555, #999) fixed;
}
main{
  margin: 0 auto;
  padding: 30px;
  background-color: azure;
  min-height: 300px;
  width: 1400px;
}

.robot{
  height: 500px;
}

.home{
  text-align: center;
}

header{
  background-color: #999;
  width: 1460px;
  margin: 0 auto;
}

nav ul{
  padding: 3px;
  display: flex;
}

.nav-item{
  display: inline-block;
  margin: 0 10px;
}

.logo{
  vertical-align: middle;
  height: 30px;
}

</style>
