
import { useState } from "react";
import axios from "axios";
import { boolean } from "yup";

const BASE_URL = "https://6a89694820fcac8c1edec5ec.mockapi.io/users";

interface Credentials {
  email: string;
  password: string;
}

interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export function useCheckCredentials() {
  const [isLoading, setIsLoading] = useState(false);

  const checkCredentials = ({ email, password }: Credentials) => {
    setIsLoading(true);

    return axios
      .get<MockUser[]>(BASE_URL)
      .then((res) => {
        const users = res.data;
        const found = users.find(
           (u) => {
            return u.email === email && u.password === password}
        );
        return Boolean(found);
      }).catch((error) => {
        console.log(error);
        
    //   toast.error("Something went wrong. Please try again.");
      return false; // یا throw error اگه می‌خوای بالاتر مدیریتش کنی
    })
      .finally(() => setIsLoading(false));
  };

  return { checkCredentials, isLoading };
}