<template>
  <v-container class="light-green  container-view py-5">
    <h2 class="text-center py-5 white--text display-3 font-weight-bold">¿Por qué nosotros?</h2>

    <v-row>
      <v-col cols="12" md="4" v-for="item in items" :key="item.id">
        <v-card class="py-5" elevation="0" color="light-green">
          <v-card-title class="d-flex justify-center font-weight-bold"> {{ item.title }}</v-card-title>
          <v-card-text class="text-center py-4 font-weight-medium">
            <span>{{ item.msg }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Personal Capaciptado",
          msg: "Auxiliares de aseo capacitados para brindar el mejor servicio.",
        },
        {
          id: 2,
          title: "Experiencia",
          msg: "contamos con más de 10 años de experiencia en el rubro.",
        },
        {
          id: 3,
          title: "Calidad",
          msg: "Contamos con equipos y materiales de la mejor calidad, para poder brindar un servicio superior.",
        },
      ],
    };
  },
};
</script>
<style>
/* .container-view {
  
  background-color: fuchsia;
} */
</style>