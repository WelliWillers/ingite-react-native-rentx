import { CarDTO } from "../screens/dtos/CarDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            CarDetails: {
                car: CarDTO
            };
            Scheduling: undefined;
            SchedulingDetails: undefined;
            ShedulingComplete: undefined;
            MyCars: undefined;
        }
    }
}