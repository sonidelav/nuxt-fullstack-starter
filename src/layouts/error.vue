<template>
    <div class="container">
        <div class="d-flex flex-column justify-content-center align-items-center vh-100">
            <div class="mb-3">
                <h1 v-if="error.statusCode === 404">Oops, there is nothing here!</h1>
                <h1 v-else>Something went wrong</h1>
            </div>
            <b-btn variant="primary" to="/" class="p-3">Take me home, I've been lost</b-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'empty'
}
</script>
