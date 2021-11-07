<template>
  <b-container id="app">
    <div class="wrap">
      <step-form></step-form>
    </div>
  </b-container>
</template>

<script>
import StepForm from '@/components/form/StepForm';

export default {
  name: 'App',
  components: { StepForm },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px

.wrap
  display: flex
  justify-content: center
  align-items: center
  padding-top: 50px
</style>
