<template>
  <v-app>
    <h1
      class="display-1 pl-10 py-5 red white--text"
      v-for="item in filtrarServicios"
      :key="item.msg"
    >
      {{ item.msg }}
    </h1>
    <v-container>
      <v-row v-for="item in filtrarServicios" :key="item.id">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <v-icon>mdi-information</v-icon>
              Información
            </v-card-title>
            <v-card-text>
              {{item.description}}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-img max-height="500" :src="item.url"></v-img>
        </v-col>
      </v-row>
      <div class="mt-3">
        <ui-back-btn label="Volver a servicios"></ui-back-btn>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import {mapActions} from "vuex";

export default {
  middleware:"initData",
  data() {
    return {
      serviciosFiltrados: [],
    };
  },
  computed: {
    datos(){
      return this.$store.getters['readData']
    },
    filtrarServicios() {
      const { id } = this.$route.params;
      this.serviciosFiltrados = this.datos.filter((item) => item.id === id);
      
      return this.serviciosFiltrados;
    },
  },
  async mounted() {
    if (this.serviciosFiltrados.length == 0) {
     await this.$store.getters['readData']
      console.log("se solicitó la ruta")
      return 
    }
  },
  methods:{
    ...mapActions(["get_datos"])
  },
  // mounted(){
  //   console.log(this.serviciosFiltrados)
  // }
  
};
</script>
