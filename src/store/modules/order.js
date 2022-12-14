export const orderModule = {
    state: () => ({
        orders: []
    }),
    getters: {

    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        },
        removeOrder(state, id) {
            const index = state.orders.findIndex(el => el.id === id);
            state.orders.splice(index, 1);
        }
    },
    actions: {
        async updateOrders({commit}) {
            commit('setOrders', []);

            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/orders/');
                if (response.ok) commit('setOrders', await response.json());
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                commit('setOrders', [{id: 1, total: 4000}]);
            }
        },
        async cancelOrder({commit, dispatch}, id) {
            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/orders/' + id, { method: "DELETE" });
                if (response.ok) dispatch('updateOrders');
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                commit('removeOrder', id);
            }
        },
        async loadDescription({state}, id) {
            try {
                const response = await fetch('https://demo-api.vsdev.space/api/orders_admin/20212489/orders/' + id);
                if (response.ok) return await response.json();
            } catch {
                console.log('Ошибка запроса. Попробуйте позже');

                const order = state.orders.find(el => el.id === id);

                return {
                    id: id,
                    total: order.total,
                    basket_items: [
                        {
                            id: 0,
                            name: 'Пицца',
                            quantity: 3,
                            price: 2000
                        },
                        {
                            id: 1,
                            name: 'Бургеры',
                            quantity: 10,
                            price: 2000
                        }
                    ]
                }
            }
        },
    },
    namespaced: true
}