<template>
    <div class="card home__part home__deliveries deliveries">
        <div class="card__header">
            <button @click="updateDeliveries" class="card__refresh card__refresh--right">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" />
                </svg>
            </button>
            <span class="card__title card__title--right">Отгрузки</span>
        </div>
        <div class="card__body">
            <div
                @drop="drop"
                @dragenter="dragEnter"
                @dragover.prevent
                @dragleave="dragEnd"
                class="item item--outline"
                :class="{'dragging': dragging}"
            >
                Перетащите заказ сюда, чтобы отправить в отгрузки.
            </div>
            <ul class="orders__list">
                <DeliveryItem
                    @cancel-delivery="cancelDelivery"
                    v-for="delivery in deliveries"
                    :key="delivery.id"
                    :delivery="delivery"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DeliveryItem from './DeliveryItem.vue';

export default {
    components: {
        DeliveryItem
    },
    data() {
        return {
            dragging: false
        }
    },
    computed: {
        ...mapState({
            deliveries: state => state.delivery.deliveries
        })
    },
    methods: {
        ...mapActions({
            updateDeliveries: 'delivery/updateDeliveries',
            cancelDelivery: 'delivery/cancelDelivery',
            orderToDelivery: 'delivery/orderToDelivery'
        }),
        dragEnter() {
            this.dragging = true; 
        },

        dragEnd() {
            this.dragging = false;
        },

        async drop(event) {
            const id = event.dataTransfer.getData('order-id');
            await this.orderToDelivery(id);
            this.dragging = false;
        }
    },
    created() {
        this.updateDeliveries();
    }
}
</script>

<style>

</style>