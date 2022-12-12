import { MarkedDateProps } from "../components/Calendar";
import { CarDTO } from "../screens/dtos/CarDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            CarDetails: {
                car: CarDTO
            };
            Scheduling: {
                car: CarDTO
            };
            SchedulingDetails: {
                car: CarDTO,
                dates: {}
            };
            ShedulingComplete: undefined;
            MyCars: undefined;
        }
    }
}