<template>
    <div class="card home__part home__orders orders">
        <div class="card__header">
            <span class="card__title">Заказы</span>
            <button @click="updateOrders" class="card__refresh">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" />
                </svg>
            </button>
        </div>
        <div class="card__body">
            <ul v-if="orders.length" class="orders__list">
                <OrderItem
                    @show-order-details="showOrderDetails"
                    @order-to-delivery="orderToDelivery"
                    @cancel-order="cancelOrder"
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                />
            </ul>
            <p v-else class="card__text">Список загрузок пуст</p>
            <AppModal
                @hide="hideOrderDetails"
                @cancel-order="cancelOrder"
                @order-to-delivery="orderToDelivery"
                v-if="modalIsOpened"
                :id="modalID"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import OrderItem from './OrderItem.vue';
import AppModal from './AppModal.vue';

export default {
    components: {
        OrderItem, AppModal
    },
    data() {
        return {
            modalIsOpened: false,
            modalID: null
        }
    },
    computed: {
        ...mapState({
            orders: state => state.order.orders
        })
    },
    methods: {
        ...mapActions({
            updateOrders: 'order/updateOrders',
            cancelOrder: 'order/cancelOrder',
            orderToDelivery: 'delivery/orderToDelivery'
        }),
        showOrderDetails(id) {
            this.modalID = id;
            this.modalIsOpened = true;
        },

        hideOrderDetails() {
            this.modalIsOpened = false;
        }
    },
    created() {
        this.updateOrders();
    }
}
</script>