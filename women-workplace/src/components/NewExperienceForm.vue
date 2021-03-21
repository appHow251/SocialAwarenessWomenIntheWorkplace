<template>
    <form class="new-experience-form" v-on:submit.prevent="saveExperience">
        <input class="event-input" type="text" placeholder="Event" v-model="experience.title" />
        <input class="where-input" type="text" placeholder="Where" v-model="experience.where" />
        <input class="result-input" type="text" placeholder="Result" v-model="experience.result" />
    <button>Save</button>
    </form>
</template>

<script>
export default {
    name: "new-experience-form",
    data() {
        return {
            experience: {
                event: '',
                where: '',
                result: ''
            }
        }
    },
methods: {
    saveExperience() {
        this.$store.commit('SAVE_EXPERIENCE', this.experience);
        this.experience = {
            event: '',
            where: '',
            result: ''
        };
        this.$route.push({name: "newExperience"});
    }
}
   
}
</script>
<style scoped>
.new-experience-form {
    margin: 20px;
}

.new-experience-form input, .new-experience-form button {
    margin: 10px;
    font-size: 1rem;
}
.form {
    margin: 10px;
    font-size: 1rem;
}
</style>