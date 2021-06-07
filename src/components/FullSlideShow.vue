<template>
    <b-carousel :interval="10000" controls class="full-carousel">
        <b-carousel-slide img-src="~/static/photos/slider.jpg"/>
    </b-carousel>
</template>

<script>
export default {
    name: "FullSlideShow"
}
</script>

<style scoped lang="scss">
@import "src/assets/parts/variables";
.full-carousel::v-deep {
    height: 100vh;
    .carousel-inner {
        .carousel-item {
            img {
                height: 100vh;
                object-fit: cover;
            }
        }
    }
}
</style>
