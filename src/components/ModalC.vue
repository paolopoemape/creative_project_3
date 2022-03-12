<template>
      <div class="modal" v-show="value">
        <div class="container">
            <GmapMap
            :center= "{lat: showStore.lat, lng: showStore.lng}"
            :zoom='17'
        style='width:100%;  height: 400px;'
        />

          <button @click.prevent="close"
 class="mt-3 border-b border-teal font-semibold">Close</button>
        </div>
      </div>

    </template>

    <script>
        export default {
            name: 'ModalC',
            data(){
              return{
                center: { lat: 0, lng: 0},
              }
            },
            props: {
                store: Array,
                value: {
                    required: true,
                }
            },
              methods: {
                close() {
                  this.$emit("input", !this.value);
                }

            },
            computed: {
            showStore() {
              const id = this.$route.params.id;
              const store = this.$root.$data.stores.find((p) => p.id == id);

              return store;
            },
          },
        };
    </script>


    <style lang="css" scoped>
        .modal {
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          padding: 100px;

      }
    </style>
