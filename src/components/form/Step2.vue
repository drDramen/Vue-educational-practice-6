<template>
  <div>
    <b-form-group id="input-group-3" label="Your email:" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="email"
        @input="update($event, 'email')"
        placeholder="Enter email"
        :state="!$v.email.$invalid"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-4" label="Your age:" label-for="input-4">
      <b-form-input
        id="input-3"
        v-model="age"
        @input="update($event, 'age')"
        placeholder="Enter your age"
        :state="!$v.age.$invalid"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { email, numeric, required } from 'vuelidate/lib/validators';
import Step from '@/components/form/Step';

export default {
  name: 'Step2',
  mixins: [Step],
  data() {
    return {
      email: '',
      age: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    age: {
      required,
      numeric,
    },
  },
};
</script>

<style lang="sass" scoped>
.form-group
  margin-bottom: 20px
</style>
