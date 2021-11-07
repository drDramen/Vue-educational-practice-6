<template>
  <div>
    <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
      <b-form-input
        id="input-1"
        :value="form.name"
        @input="update('name', $event)"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Surname:" label-for="input-2">
      <b-form-input
        id="input-2"
        :value="form.surname"
        @input="update('surname', $event)"
        placeholder="Enter surname"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'Step1',
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
