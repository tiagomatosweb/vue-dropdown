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
                    <DropdownItem href="http://www.google.com">Item 1</DropdownItem>
                    <DropdownItem :to="{ name: 'foo' }">Item 2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem
                        href="http://www.google.com"
                        :to="{ name: 'bar' }"
                    >
                        Item 3
                    </DropdownItem>
                    <DropdownItem @click="onItem4Click">Item 4</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Item 5</DropdownItem>
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
