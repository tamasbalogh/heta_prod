<template>
    <div>
        <v-parallax src="@/assets/head.jpg" :height="this.$vuetify.breakpoint.height">
            <v-app-bar elevate-on-scroll fade-img-on-scroll fixed color="transparent" class="mb-2">
                <v-img
                        class="mr-4"
                        src="@/assets/heta_logo_new.svg"
                        style="height: inherit;"
                        max-width="60"
                        contain>
                </v-img>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="title">Heta</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-1">Vászon és Kép</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <span class="hidden-md-and-up">
                <v-btn @click="drawer = !drawer">
                    Menü
                </v-btn>
            </span>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn to="/" text>
                        <v-icon small left>mdi-home</v-icon>
                        Kezdőlap
                    </v-btn>
                    <v-btn to="/products" text>
                        <v-icon small left>mdi-image-frame</v-icon>
                        Termékek
                    </v-btn>
                    <v-btn to="/order" text class="ml-4" color="red">
                        <v-icon small left>mdi-shopping</v-icon>
                        Rendelés
                    </v-btn>
                </v-toolbar-items>
            </v-app-bar>
            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    right>
                <v-list dense>
                    <v-list-item
                            v-for="item in items" :key="item.title"
                            :to="item.link"
                            link>
                        <v-list-item-icon>
                            <v-icon small>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-parallax>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            drawer: false,
            items: [
                {title: "Kezdőlap", link: "/", icon: "mdi-home"},
                {title: "Termékek", link: "/products", icon: "mdi-image-frame"},
                {title: "Rendelés", link: "/order", icon: "mdi-shopping"}
            ]
        }),
    }
</script>

<style scoped>

</style>