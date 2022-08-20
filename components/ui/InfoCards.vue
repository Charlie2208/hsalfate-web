<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="info in infos" :key="info.id">
        <v-icon color="primary">{{ info.icon }}</v-icon>
        <h5>{{ info.title }}</h5>
        <span>{{ info.msg }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      infos: [
        {
          id: 1,
          icon: 'mdi-phone',
          title: "Llámanos al +569 62371915",
          msg: "Estamos encantados de atenderte",
        },
        {
          id: 2,
          icon: 'mdi-message',
          title: "Consultas o dudas?",
          msg: "Estaremos atentos a tu solicitud",
        },
        {
          id: 3,
          icon: 'mdi-whatsapp',
          title: "Llámanos al +569 62371915",
          msg: "Estamos encantados de atenderte",
        },
      ],
    };
  },
};
</script>