<template>
    <div class="container mx-auto my-4">
        <div class="grid grid-cols-3 gap-4">
            <h1 class="text-3xl font-bold text-center col-span-2">List Cards</h1>
            </div>
        <div class="grid grid-cols-3 gap-4">
            <Card v-for="(submission    ,index) in form.submissions" :key="index" :submission="submission" />
        </div>
        <div>
            <button @click="agregar">Agregar una tarjeta</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Card from '../components/cards.vue';
import { useFormStore } from '../Store/store';
import { useAuthStore } from '../Store/loginStore';
import router from '../Router/router';

export default defineComponent({
    components: {
        Card
    },
    setup() {
        const form = useFormStore();
        const auth = useAuthStore();


        function agregar() {
            router.push('/');
        }


        return {
            form,
            auth,
            agregar
        };
    }
});
</script>
