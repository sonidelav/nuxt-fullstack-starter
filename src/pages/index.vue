<template>
    <div class="index-page">
        <navigation-bar/>
        <full-slide-show/>
    </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import FullSlideShow from "../components/FullSlideShow";

export default {
    name: "index",
    components: {
        FullSlideShow,
        NavigationBar
    }
}
</script>
