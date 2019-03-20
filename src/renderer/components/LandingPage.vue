<template>
  <div id="wrapper">
    {{$store.state.count}}
    <button @click="increment">+</button>
    <br />
    Square Root:
    {{squareRoot}}
    <operations></operations>
    <operations></operations>
    <operations></operations>
    <operations></operations>
    <operations></operations>
    <operations></operations>
    <operations></operations>
    <operations></operations>
  </div>
</template>

<script>
  import Operations from './Operations';

  export default {
    name: 'landing-page',
    created() {
      console.log(this.$store.state.count);
    },
    components: {
      Operations,
    },
    computed: {
      squareRoot() {
        return this.$store.getters['sqrt'];
      }
    },
    methods: {
      increment() {
        this.$store.dispatch('incrementCount');
      },
    },
  }
</script>

<style>
</style>
