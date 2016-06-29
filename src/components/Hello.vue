<template>
  <div class="hello">
    <h1>{{ msg }} ME</h1>
    <button @click="show()">Click {{comp}}</button>
    <bye-bye> </bye-bye>
  </div>
</template>

<script>
import ByeBye from './Bye.vue'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!!!'
    }
  },
  components: { ByeBye },
  methods: {
    show () {
      console.log(2)
    }
  },
  computed: {
    comp () {
      return this.msg + '----'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
