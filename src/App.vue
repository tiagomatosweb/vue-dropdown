<template>
    <div
        id="app"
        class="container mx-auto mt-10 px-10"
    >
        <div class="mx-auto mt-20">
            <h3 class="text-lg text-center font-bold mb-4">
                Componente dropdown
            </h3>

            <div class="flex justify-center">
                <Dropdown />
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from '@/components/Dropdown';

    export default {
        name: 'App',

        components: { Dropdown },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
