<template>
  <v-app>
    <h1 class="display-1 pl-10 py-5 grey lighten-2">Quienes Somos</h1>
    <v-container>
      <v-row class="py-10">
        <v-col cols="12" md="6">
          <v-card>
            <v-img :src="img" max-height="400"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h2>Misión, Visión y Valores</h2>
          <h3>Misión</h3>
          <p>
            Lograr la completa satisfacción de nuestros clientes, cubriendo
            enteramente sus necesidades de limpieza e higiene con el mejor
            servicio y la mejor calidad, teniendo siempre como prioridad el
            cuidado del medio ambiente, la salud de los usuarios y fomentando la
            cultura de salud mediante la limpieza.
          </p>
          <h3>Visión</h3>
          <p>
            Ser una empresa bien posicionada en el giro de la limpieza e
            higiene, mediante la implementación de procesos de mejora continua
            enfocados hacia el cliente, el medio ambiente y a nuestro capital
            humano.
          </p>
          <h3>Valores</h3>
          <ul>
              <li>Confianza</li>
              <li>Honestidad</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Puntualidad</li>
              <li>Ética profesional</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      img: require("../static/img/img4.jpg"),
    };
  },
};
</script>