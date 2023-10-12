import { MarkedDateProps } from "../components/Calendar";
import { Car as ModelCar } from "../database/model/Car";

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
        car: ModelCar;
      };
      Scheduling: {
        car: ModelCar;
      };
      SchedulingDetails: {
        car: ModelCar;
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
