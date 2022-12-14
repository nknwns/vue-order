export const deliveryModule = {
    state: () => ({
        deliveries: []
    }),
    getters: {

    },
    mutations: {
        setDeliveries(state, deliveries) {
            state.deliveries = deliveries;
        },
        addDelivery(state, delivery) {
            state.deliveries.push(delivery);
        },
        removeDelivery(state, index) {
            state.deliveries.splice(index, 1);
        }
    },
    actions: {
        async updateDeliveries({commit}) {
            commit('setDeliveries', []);

            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/deliveries/');
                if (response.ok) commit('setDeliveries', await response.json());
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                const deliveries = [
                    {
                        id: 1,
                        order_id: 1,
                        created_at: (new Date())
                    }
                ];
                commit('setDeliveries', deliveries);
            }
        },
        async cancelDelivery({dispatch, state, commit}, id) {
            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/deliveries/' + id, { method: "DELETE" });
                if (response.ok) dispatch('updateDeliveries');
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                const deliveryIndex = state.deliveries.findIndex(element => element.id === id);
                commit('removeDelivery', deliveryIndex);
            }
        },
        async orderToDelivery({dispatch, commit, state}, id) {
            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/orders/' + id + '/delivery', { method: "POST" });
                if (response.ok) dispatch('updateDeliveries');
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                const delivery = {
                    id: state.deliveries.length + 1,
                    order_id: id,
                    created_at: (new Date())
                }

                commit('addDelivery', delivery);
            }
        }
    },
    namespaced: true
}