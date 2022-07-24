<template>
  <v-container>
    <AddUser @userAdded="getUsers()" />
    <br />
    <v-data-table :headers="headers" :items="users">
      <template v-slot:[`item.update`]="{ item }">
        <UpdateUser @updateUser="getUsers()" :id="item._id" :user="item" />
      </template>
      <template v-slot:[`item.delete`]="{ item }">
        <DeleteUser @userDeleted="getUsers()" :id="item._id" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { User } from "../core/models/user";
import Vue from "vue";
import AddUser from "./addUser.vue";

import UpdateUser from "./updateUser.vue";

export default Vue.extend({
  components: { AddUser, UpdateUser },
  data() {
    return {
      headers: [
        { text: "nome", value: "name" },
        { text: "birthday", value: "birthday" },
        { text: "Ativo", value: "active" },
        { text: "Editar", value: "update" },
        { text: "Deletar", value: "delete" },
      ],
      name: "NuxtTutorial",
      user: {} as User,
    };
  },
  computed: {
    users() {
      return this.$store.state.users as User;
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getAll");
    },
  },
  created() {
    this.getUsers();
  },
});
</script>
