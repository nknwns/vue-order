<template>
    <header class="header">
        <div class="container">
            <div class="wrapper">
                <div class="card">
                    <div class="card__body header__body">
                        <h1 class="header__title">Vue Order</h1>
                        <label class="header__label" for="">
                            Темная тема
                            <input @change="changeTheme" type="checkbox" class="switch">
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        changeTheme() {
            document.body.classList.toggle('dark');
        }
    }
}
</script>

<style>

</style>