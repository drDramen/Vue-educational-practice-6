export default {
  activated() {
    this.$emit('isValid', this.isValid);
  },
  computed: {
    isValid() {
      return !this.$v.$invalid;
    },
  },
  methods: {
    update(value, key) {
      this.$emit('updateData', key, value, this.isValid);
    },
  },
};
