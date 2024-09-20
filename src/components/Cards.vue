<template>
    <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{{ submission.username }}</h2>
            <p>Email: {{ submission.email }}</p>
            <p>Phone: {{ submission.phone }}</p>
            <p>Message: {{ submission.message }}</p>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useFormStore } from '../Store/store';

export default defineComponent({
    props: {
        submission: Object
    },

    setup() {
        const form = useFormStore();
        return {
            
        }
    },

});
</script>
