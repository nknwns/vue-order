<template>
    <AppHeader />
    <main>
        <section class="home">
            <div class="container">
                <div class="wrapper home__wrapper">
                    <AppOrders />
                    <AppDelivery />
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppOrders from './components/AppOrders.vue';
import AppDelivery from './components/AppDelivery.vue';

export default {
    components: {
        AppHeader, AppFooter, AppOrders, AppDelivery
    }
}
</script>