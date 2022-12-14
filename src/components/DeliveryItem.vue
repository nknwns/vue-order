<template>
    <li class="orders__item item">
        <div class="item__description">
            <span class="item__name">Отгрузка #{{delivery.id}}</span>
            <span class="item__order">Заказ #{{delivery.order_id}}</span>
            <span class="item__date">{{(new Date(delivery.created_at)).toLocaleDateString('ru')}}</span>
        </div>
        <AppDropdown
            @cancel="$emit('cancel-delivery', delivery.id)"
        />
    </li>
</template>

<script>
import AppDropdown from './AppDropdown.vue';

export default {
    props: {
        delivery: Object
    },
    components: {
        AppDropdown
    },
}
</script>

<style>

</style>