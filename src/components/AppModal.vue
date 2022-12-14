<template>
    <div class="modal">
        <div @click="hide" class="modal__background"></div>
        <div class="modal__body">
            <div class="modal__card">
                <div class="modal__header">
                    <p class="modal__title">Заказ #{{order.id}}</p>
                    <button @click="hide" class="modal__close">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>
                </div>
                <div class="modal__content">
                    <p class="modal__subtitle">Корзина</p>
                    <ul class="modal__list basket">
                        <li v-for="item in order.basket_items" :key="item" class="modal__item basket__item item">
                            <span class="basket__title">{{item.name}}</span>
                            <span class="basket__count">{{item.quantity}} шт.</span>
                            <span class="basket__price">{{item.price}} руб</span>
                        </li>
                    </ul>
                    <p class="modal__subtitle modal__subtitle--right">Итого: {{order.total}} руб</p>
                </div>
                <div class="modal__footer">
                    <button @click="orderToDelivery" class="button button--success">К отгрузке</button>
                    <button @click="cancelOrder" class="button button--danger">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        id: Number
    },
    data() {
        return {
            order: {}
        }
    },
    methods: {
        ...mapActions({
            loadDescription: 'order/loadDescription'
        }),

        handlerEscape(event) {
            if (event.key == "Escape") this.hide();
        },

        hide() {
            document.removeEventListener('keypress', this.handlerEscape);
            this.$emit('hide');
        },

        orderToDelivery() {
            this.$emit('order-to-delivery', this.order.id);
            this.hide();
        },

        cancelOrder() {
            this.$emit('cancel-order', this.order.id)
            this.hide();
        }
    },
    async mounted() {
        document.addEventListener('keydown', this.handlerEscape);
        this.order = await this.loadDescription(this.id);
    }
}
</script>