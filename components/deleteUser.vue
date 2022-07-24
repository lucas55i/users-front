<template>
  <v-btn icon>
    <v-icon color="error" @click="deleteUser()"> mdi-delete</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    async deleteUser() {
      await this.$store.dispatch("deleteUser", this.id);
      this.$emit("userDeleted");
    },
  },
});
</script>
