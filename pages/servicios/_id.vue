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
          description:"Hacemos de tu empresa un lugar agradable y limpio, fomentando la productividad e incrementando la imagen de tu compañía. Ponemos a tu disposición servicios de mantención periódica o trabajos puntuales para oficinas, locales comerciales, establecimientos educacionales, consultas médicas, gimnasios, restaurantes y otros a consultar.",
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
          description:
            "Somos especialistas en Limpieza profunda. Nos enfocamos en atacar aquellos lugares difíciles de limpiar, logrando una mantención minuciosa de alto estándar. ¡Descubre lo que podemos hacer por tu hogar!",
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
      serviciosFiltrados: [],
    };
  },
  computed: {
    filtrarServicios() {
      const { id } = this.$route.params;
      this.serviciosFiltrados = this.items.filter((item) => item.id === id);
      
      return this.serviciosFiltrados;
    },
  },
 mounted() {
    if (this.items.length === 0) {
      this.items;
      console.log("se solicitó el servicio")
      return 
    }
  },
};
</script>