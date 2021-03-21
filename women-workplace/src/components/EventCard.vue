<template>
    <div class="card" v-bind:class="{read: experience.read}"></div>
</template>

<script>
export default {
    name: 'event-card',
    props: ["experience"],
    methods: {
        onChangedIt() {
            this.$store.commit('FLIP_READ', this.experience);
        }
    }
}
</script>
<style>
.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 550px;
    margin: 20px;
}

.card .event-title {
    font-size: 1rem;
}
    </style>