import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { database } from "../database";
import { User } from "../database/model/User";

interface UserProps {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredential {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserProps;
  singIn: (credencials: SignInCredential) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<UserProps>({} as UserProps);

  async function singIn({ email, password }: SignInCredential) {
    try {
      const res = await api.post<UserProps>("/sessions", {
        email,
        password,
      });

      const user = res.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

      const userCollection = database.get<User>("users");

      await database.action(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = user.token;
        });
      });

      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const userCollection = database.get<User>("users");

      const res = await userCollection.query().fetch();

      if (res.length > 0) {
        const userData = res[0]._raw as unknown as User;

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${userData.token}`;

        setData(userData);
      }
    }

    loadUserData();
  });

  return (
    <AuthContext.Provider
      value={{
        singIn,
        user: data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
