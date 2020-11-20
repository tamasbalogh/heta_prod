<template>
    <div>
        <v-sheet height="300px">
            <v-container class="fill-height">
                <v-row align="center" justify="center">
                    <h1 class="display-2">Mit kínálunk?</h1>
                </v-row>
            </v-container>
        </v-sheet>
        <v-row>
            <v-col v-for="benefit in benefits" :key="benefit.title">
                <v-card elevation="0" align="center">
                    <v-img class="ma-4" height="150px" width="150px"
                           :src="require('@/assets/icons/' + benefit.icon)"></v-img>
                    <v-card-title
                            class="justify-center">
                        {{ benefit.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        A piacon található legjobb minőségű vászonnal dolgozunk.
                    </v-card-subtitle>
                    <v-card-text>
                        A piacon található legjobb minőségű vászonnal dolgozunk.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            drawer: false,
            benefits: [
                {title: "Magas minőség", icon: "quality_icon.png"},
                {title: "Egyszerű rendelés", icon: "easy_to_use_icon.png"},
                {title: "Gyors kézbesítés", icon: "shipping_icon.png"}
            ]
        }),
        methods: {
            aspectRatio() {
                return this.$vuetify.breakpoint.width / this.$vuetify.breakpoint.width
            }
        },
        mounted() {
            console.log(this.aspectRatio())
        }
    }
</script>

<style scoped>

</style>