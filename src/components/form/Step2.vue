<template>
  <div>
    <b-form-group id="input-group-3" label="Your email:" label-for="input-3">
      <b-form-input
        id="input-3"
        :value="form.email"
        @input="update('email', $event)"
        placeholder="Enter email"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-4" label="Your age:" label-for="input-4">
      <b-form-input
        id="input-3"
        :value="form.age"
        @input="update('age', $event)"
        placeholder="Enter your age"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  props: {
    form: Object,
  },
  methods: {
    update(key, value) {
      this.$emit('updateData', key, value);
    },
  },
};
</script>

<style lang="sass" scoped>
.form-group
    margin-bottom: 20px
</style>
