import { defineStore } from "pinia";
import axios from "../scripts/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    async getUser() {
      const response = await axios.get("/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('accessToken')
        }
      });
      this.authUser = response.data;
    },
    async handleLogin(data) {
      this.authErrors = [];

      await axios.post("/login", data)
        .then((response) => {
          localStorage.setItem('accessToken', response.data.token)
          this.router.push("/")
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        })
    },
    // async handleRegister(data) {
    //   this.authErrors = [];
    //   await this.getToken();
    //   try {
    //     await axios.post("/register", {
    //       name: data.name,
    //       email: data.email,
    //       password: data.password,
    //       password_confirmation: data.password_confirmation,
    //     });
    //     this.router.push("/");
    //   } catch (error) {
    //     if (error.response.status === 422) {
    //       this.authErrors = error.response.data.errors;
    //     }
    //   }
    // },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
    },
  },
});
