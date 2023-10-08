import { ref } from "vue";
import { apiAuth } from "@/api/apiAuth";

import router from "@/router";
//login data
const username = ref("");
const password = ref("");
//register data
const reg_username = ref("");
const reg_email = ref("");
const reg_name = ref("");
const reg_lastName = ref("");
const reg_phone = ref("555555555");
const reg_password = ref("");
//-----end register data ----

export const useLogin = () => {
  const sendLogin = async () => {
    try {
      const {data} =await apiAuth.post("/login", {
        username: username.value,
        password: password.value,
      });

      console.log(data)

      localStorage.setItem("token", data.token);
      localStorage.setItem('id', data.id)
      router.push("/home");



    } catch (error) {
      console.log(error);
    }
  };

  const sendRegister = async () => {
    const { data } = await apiAuth.post("/register", {
      username: reg_username.value,
      email: reg_email.value,
      name: reg_name.value,
      lastName: reg_lastName.value,
      phone: '5555555555',
      password: reg_password.value,
    });

    console.log(data);
  };

  return {
    sendRegister,
    sendLogin,
    username,
    password,
    reg_username,
    reg_email,
    reg_name,
    reg_lastName,
    reg_phone,
    reg_password,
  };
};
