<template>
  <div>
    <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="name"
        @input="update($event, 'name')"
        placeholder="Enter name"
        required
        :state="!$v.name.$invalid"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Surname:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="surname"
        @input="update($event, 'surname')"
        placeholder="Enter surname"
        :state="!$v.surname.$invalid"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators';
import Step from '@/components/form/Step';

export default {
  name: 'Step1',
  mixins: [Step],
  data() {
    return {
      name: '',
      surname: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    surname: {
      required,
      minLength: minLength(2),
    },
  },
};
</script>

<style lang="sass" scoped>
.form-group
  margin-bottom: 20px
</style>
