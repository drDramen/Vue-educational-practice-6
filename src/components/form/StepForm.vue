<template>
  <div class="border border-primary p-4">
    <b-form @submit.prevent v-if="currentStep < steps.length">
      <div class="header mb-3">
        <slot name="header"> Форма Регистрации</slot>
      </div>
      <div class="form-fields mb-3">
        <keep-alive>
          <components
            :is="steps[currentStep]"
            @updateData="update"
            @isValid="isValidStep = $event"
          />
        </keep-alive>
      </div>
      <div class="footer">
        <slot name="footer">
          <div class="d-flex justify-content-between">
            <b-button @click="prev" variant="outline-dark" v-if="currentStep">Prev</b-button>
            <b-button
              @click="next"
              :disabled="!isValidStep"
              variant="outline-primary"
              class="ms-auto"
              >Next
            </b-button>
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

export default {
  name: 'StepForm',
  data() {
    return {
      steps: [Step1, Step2],
      currentStep: 0,
      isValidStep: false,
      formData: {},
    };
  },
  methods: {
    prev() {
      if (this.currentStep > 0) this.currentStep--;
    },
    next() {
      if (this.currentStep < this.steps.length) this.currentStep++;
    },
    update(key, value, isValid) {
      if (Object.prototype.hasOwnProperty.call(this.formData, key)) {
        this.$set(this.formData, key, '');
      }
      this.formData[key] = value;
      this.isValidStep = isValid;
    },
  },
};
</script>

<style scoped></style>
