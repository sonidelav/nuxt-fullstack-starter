<template>
    <b-navbar toggleable="lg" variant="transparent-dark" fixed="top" type="dark" class="navigation-bar">
        <b-navbar-brand>
            Fullstack Web Page
            <small class="sub-brand">Nuxt + NestJS</small>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>Welcome</b-nav-item>
                <b-nav-item-dropdown text="Lang" right class="lang-dropdown">
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">EL</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "NavigationBar"
}
</script>

<style lang="scss" scoped>
@import "src/assets/parts/variables";
.navigation-bar::v-deep {

    .navbar-brand {
        text-align: center;
        font-family: $font-family-base;
        font-size: 32pt;

        .sub-brand {
            font-family: $font-family-base;
            font-weight: bold;
            font-size: 9pt;
            letter-spacing: 4px;
            text-transform: uppercase;
            display: block;
        }
    }

    .navbar-nav {
        .nav-item {
            padding: 8px 20px;
            & > a {
                color: $white;
                @include text-shadow($black);
            }
        }
    }
}
</style>
