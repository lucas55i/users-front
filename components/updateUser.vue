<template>
  <v-container>
    <v-btn icon color="primary" @click="dialog = true">
      <v-icon>mdi-pencil</v-icon>

      <v-dialog v-model="dialog" persistent max-width="600px">
        
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar User</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="updateUserForm">
              <v-text-field
                label="Nome"
                v-model="editUser.name"
                clearable
              ></v-text-field>
              <!-- <v-text-field
                label="Ativo"
                v-model="editUser.active"
                clearable
              ></v-text-field> -->
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false"> Fechar </v-btn>
            <v-btn color="primary" @click="updateUser()"> Editar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      editUser: {
        name: "",
        active: false,
      },
    };
  },

  computed: {},
  methods: {
    async updateUser() {
      const updateUserForm = this.$refs.updateUserForm as any;

      if (updateUserForm.validate()) {
        await this.$store.dispatch("updateUser", this.id);
        this.dialog = false;
        this.$emit("updateUser");
      }
    },
  },
  created() {
    this.editUser = {
      ...this.user,
    };
  },
});
</script>
