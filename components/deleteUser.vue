<template>
  <v-btn icon>
    <v-icon color="error" @click="deleteUser()"> mdi-delete</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { User } from "../core/models/user";
import Vue, { PropOptions } from "vue";

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
      this.$store
        .dispatch("deleteUser", this.id)
        .then(() => {
          this.$emit("userDeleted");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  created() {
    console.log(this.id);
  },
});
</script>
