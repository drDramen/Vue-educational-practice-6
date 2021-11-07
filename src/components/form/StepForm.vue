<template>
  <div class="border border-primary p-4">
    <b-form @submit.prevent v-if="currentStep < steps.length">
      <div class="header mb-3">
        <slot name="header"> Форма Регистрации</slot>
      </div>
      <div class="form-fields mb-3">
        <components :is="steps[currentStep]" :form="formData" @updateData="update" />
      </div>
      <div class="footer">
        <slot name="footer">
          <div class="d-flex justify-content-between">
            <b-button @click="prev" variant="outline-dark" v-if="currentStep">Prev</b-button>
            <b-button @click="next" :disabled="disabled" variant="outline-primary" class="ms-auto"
              >Next</b-button
            >
          </div>
        </slot>
      </div>
    </b-form>
    <div v-else>Успешно</div>
  </div>
</template>

<script>
import Step1 from '@/components/form/Step1';
import Step2 from '@/components/form/Step2';

import { required, email, minLength, numeric } from 'vuelidate/lib/validators';

export default {
  name: 'StepForm',
  data() {
    return {
      steps: [Step1, Step2],
      currentStep: 0,
      formData: {
        name: '',
        surname: '',
        age: '',
        email: '',
      },
    };
  },
  methods: {
    prev() {
      if (this.currentStep > 0) this.currentStep--;
    },
    next() {
      if (this.currentStep < this.steps.length) this.currentStep++;
    },
    update(key, value) {
      console.log(key, value);
      this.formData[key] = value;
    },
  },
  validations: {
    formData: {
      name: {
        required,
        minLength: minLength(4),
      },
      surname: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      age: {
        required,
        numeric,
      },
    },
    step1: ['formData.name', 'formData.surname'],
    step2: ['formData.email', 'formData.age'],
  },
  computed: {
    step1() {
      return this.currentStep === 0 && !this.$v.step1.$invalid;
    },
    step2() {
      return this.currentStep === 1 && !this.$v.step2.$invalid;
    },
    disabled() {
      return !(this.step1 || this.step2);
    },
  },
};
</script>

<style scoped></style>
