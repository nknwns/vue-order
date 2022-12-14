<template>
    <li
        @dragstart="dragStart"
        class="orders__item item"
        draggable="true"
    >
        <div class="item__description">
            <span class="item__name">Заказ #{{ order.id }}</span>
            <span class="item__price">{{ order.total }} руб.</span>
        </div>
        <AppDropdown
            :isOrder="true"
            @show-order-details="$emit('show-order-details', order.id)"
            @order-to-delivery="$emit('order-to-delivery', order.id)"
            @cancel="$emit('cancel-order', order.id)"
        />
    </li>
</template>

<script>
import AppDropdown from './AppDropdown.vue';

export default {
    components: {
        AppDropdown
    },
    props: {
        order: Object
    },
    methods: {
        dragStart(event) {
            event.dataTransfer.setData("order-id", this.order.id);
        }
    }
}
</script>

<style>

</style>