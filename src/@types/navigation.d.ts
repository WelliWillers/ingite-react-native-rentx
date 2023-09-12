import { MarkedDateProps } from "../components/Calendar";
import { CarDTO } from "../screens/dtos/CarDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SignIn: undefined;
      SignUpFirstStep: undefined;
      SignUpSecondStep: {
        user: {
          name: string;
          email: string;
          cnh: string;
        };
      };
      CarDetails: {
        car: CarDTO;
      };
      Scheduling: {
        car: CarDTO;
      };
      SchedulingDetails: {
        car: CarDTO;
        dates: {};
      };
      Confirmation: {
        title: string;
        message: string;
        buttomTitle: string;
        nextScreenRouter: keyof ReactNavigation.RootParamList;
      };
      MyCars: undefined;
    }
  }
}
