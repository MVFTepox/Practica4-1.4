<template>
    <div>
        <div class="grid grid-cols-6">
            <div class=""></div>
            <div class="col-span-4 border my-4 p-5 rounded-lg shadow-2xl">
                <form @submit.prevent="handleSubmit">
                    <label class="input input-bordered flex items-center gap-2 my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" class="grow my-4" placeholder="Email" v-model="email" />
                    </label>
                    <label class="input input-bordered flex items-center gap-2 my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" class="grow" placeholder="Username" v-model="username" />
                    </label>
                    <label class="input input-bordered flex items-center gap-2 my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="number" min="0" class="grow" placeholder="Phone" v-model="phone" />
                    </label>
                    <p class="text-red-500 text-4xl"> </p>
                    <textarea class="textarea textarea-accent mt-5 w-full" placeholder="Escribe tu mensaje aqui :3" v-model="text"></textarea>
                    <div class="grid grid-cols-3 gap-4">

                        <button type="submit" class="btn btn-primary mt-5">Enviar Información</button>

                    </div>
                </form>
            </div>
            <div class=""></div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useAuthStore } from '../Store/loginStore';
import { useFormStore } from '../Store/store';

export default defineComponent({
    setup() {
        const name = ref('');
        const email = ref('');
        const username = ref('');
        const phone = ref('');
        const text = ref('');
        const auth = useAuthStore();
        const form = useFormStore();

        function deleteData() {
            name.value = '';
            email.value = '';
            username.value = '';
            phone.value = '';
            text.value = '';
        }




        function handleSubmit(event) {
            event.preventDefault();
            console.log(name.value);
            if (!name.value === '' || !email.value === '' || !username.value === '' || !phone.value === '' ) {
                alert('Porfavor rellene todos los campos');
                return;
            }
            form.addSubmission({
                name: name.value,
                email: email.value,
                phone: phone.value,
                username: username.value,
                message: text.value
            });
             this.$router.push('/listcards');
            deleteData();
        }

        return {
            name,
            email,
            username,
            phone,
            text,
            handleSubmit
        };
    }
});
</script>
