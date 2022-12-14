import { createStore } from "vuex";
import { deliveryModule } from "./modules/delivery";
import { orderModule } from "./modules/order";

export default createStore({
    modules: {
        delivery: deliveryModule,
        order: orderModule
    }
})