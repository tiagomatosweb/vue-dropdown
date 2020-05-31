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
                <Dropdown text="Menu">
                    <DropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                                fill-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        Editar
                    </DropdownItem>

                    <DropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path
                                fill-rule="evenodd"
                                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        Arquivar
                    </DropdownItem>

                    <DropdownDivider />

                    <DropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>

                        Compartilhar
                    </DropdownItem>

                    <DropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        Adicionar aos favoritos
                    </DropdownItem>

                    <DropdownDivider />

                    <DropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        Deletar
                    </DropdownItem>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from '@/components/Dropdown';
    import DropdownItem from '@/components/DropdownItem';
    import DropdownDivider from '@/components/DropdownDivider';

    export default {
        name: 'App',

        components: { DropdownDivider, DropdownItem, Dropdown },

        data() {
            return {
            };
        },

        methods: {
            onItem4Click(evt) {
                console.log('click item 4', evt);
            },
        },
    };
</script>
