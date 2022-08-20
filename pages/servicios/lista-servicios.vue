<template>
  <v-app>
    <h1 class="display-1 pl-10 py-5 grey lighten-2">Servicios</h1>
    <v-container>
      <v-row class="py-10">
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card :to="{ name: 'servicios-id', params: { id: item.id } }">
            <v-img :src="item.url" height="300"></v-img>
            <v-card-title>{{item.msg}}</v-card-title>
            <v-card-text class="red">{{item.span}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          msg: "Servicios a empresas",
          src: "https://i.postimg.cc/4Ks6d5qx/Whats-App-Image-2022-08-17-at-11-27-41-AM.jpg",
          url: require("../../static/img/aseo-empresa.jpg"),
          icon: "mdi-check-circle",
          span: "Profesionales capacitados",
        },
        {
          id: 2,
          msg: "Envío correspondencia",
          src: "https://i.postimg.cc/Yjh1hjnY/Whats-App-Image-2022-08-17-at-11-27-43-AM.jpg",
          url: require("../../static/img/correspondencia.jpg"),
          icon: "mdi-check-circle",
          span: "Siempre puntal",
        },
        {
          id: 3,
          msg: "Servicios a domicilios",
          src: "https://i.postimg.cc/WtC0rjCK/Whats-App-Image-2022-08-17-at-11-27-43-AM-1.jpg",
          url: require("../../static/img/aseo-domicilio.jpg"),
          icon: "mdi-check-circle",
          span: "Profundo y delicado",
        },
        {
          id: 4,
          msg: "Jardinería",
          src: "https://i.postimg.cc/YGyYdw9v/Whats-App-Image-2022-08-17-at-11-27-44-AM.jpg",
          url: require("../../static/img/jardineria.jpg"),
          icon: "mdi-check-circle",
          span: "Capacidad y rigor",
        },
      ],
    };
  },
};
</script>