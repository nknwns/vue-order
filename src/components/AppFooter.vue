<template>
    <footer class="footer">
        <div class="container">
            <div class="wrapper">
                <div class="card">
                    <div class="card__body footer__body">
                        <p class="footer__author">Шаев Андрей Андреевич, группа 211-322</p>
                        <button @click="goToHead" class="footer__button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
                                <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        goToHead() {
            window.scrollTo(0, 0);
        }
    }
}
</script>