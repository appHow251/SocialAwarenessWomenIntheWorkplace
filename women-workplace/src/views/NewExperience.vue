<template>
    <div>
        <h1>What Was Your Experience</h1>
        <ul>
            <li>The purpose of this site is to build real solutions</li>
            <li>so please explain what happened while avoiding bashing.</li>
            <li>We'll learn and improve together!</li>
        </ul>        
        <new-experience-form />
    </div>
</template>
<script>
import NewExperienceForm from '../components/NewExperienceForm.vue';
export default {
    name: 'new-experience',
    components: {
        NewExperienceForm,
    },
}
</script>