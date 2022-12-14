<template>
    <div class="item__actions menu">
        <button @click.stop="expand" class="menu__button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill="#fff" />
            </svg>
        </button>
        <ul v-if="isExpandend" class="menu__list">
            <li class="menu__item">
                <template v-if="isOrder">
                    <a @click.prevent="showOrderDetails" href="#" class="menu__link">Подробнее</a>
                    <a @click.prevent="orderToDelivery" href="#" class="menu__link menu__link--success">К отгрузке</a>
                </template>
                <a @click.prevent="cancelItem" href="#" class="menu__link menu__link--danger">Отменить</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isOrder: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isExpandend: false
        }
    },
    methods: {
        expand() {
            this.isExpandend = true;
            document.addEventListener('click', this.hide);
        },
        hide() {
            this.isExpandend = false;
            document.removeEventListener('click', this.hide);
        },

        showOrderDetails() {
            this.$emit('show-order-details');
            this.hide();
        },
        orderToDelivery() {
            this.$emit('order-to-delivery');
            this.hide();
        },
        cancelItem() {
            this.$emit('cancel');
            this.hide();
        }
    }
}
</script>

<style>

</style>