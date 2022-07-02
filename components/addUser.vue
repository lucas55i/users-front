<template>
  <v-container>
    <v-row class="row" justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab dark v-on="on" color="primary">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Adicionar Grupo</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="addGroupForm">
              <v-text-field
                label="Nome"
                v-model="user.name"
                clearable
              ></v-text-field>
              <v-text-field
                label="Pais"
                v-model="user.active"
                clearable
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false"> Fechar </v-btn>
            <v-btn color="primary" @click="addUser()"> Cadastrar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "../core/models/user";

export default Vue.extend({
  data() {
    return {
      dialog: false,
      user: {
        name: "",
        active: false,
      } as User,
    };
  },

  computed: {},
  methods: {
    async addUser() {
      let user = { ...this.user };
      await this.$store
        .dispatch("addUser", this.user)
        .then(() => {
          this.dialog = false;
          this.$emit("userAdded");
          this.user = {
            name: "",
            active: false,
          };
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  created() {},
});
</script>
