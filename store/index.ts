import { User } from "~/core/models/user";
import { userService } from "~/core/services/user-service";

interface UserState {
  users: Array<User>;
}

export const state = (): UserState => ({
  users: [],
});

export const mutations = {
  setUser(state: UserState, users: Array<User>) {
    state.users = users;
  },
};

export const actions = {
  getAll(context: any) {
    return new Promise<void>((resolve, reject) => {
      context.commit("setUser", []);

      userService
        .getAll()
        .then((result) => {
          resolve();
          context.commit("setUser", result);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        })
        .finally(() => {
          console.log("Chamada Feita");
        });
    });
  },

  addUser(context: any, user: User) {
    return new Promise((resolve, reject) => {
      userService
        .addUser(user)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          console.log("Chamada Feita");
        });
    });
  },

  updateUser(context: any, _id: string) {
    return new Promise((resolve, reject) => {
      userService
        .updateUser(_id)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          console.log("Chamada Feita");
        });
    });
  },

  deleteUser(context: any, _id: string) {
    return new Promise((resolve, reject) => {
      userService
        .deleteUser(_id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        })
        .finally(() => {
          console.log("Chamada Feita");
        });
    });
  },
};
