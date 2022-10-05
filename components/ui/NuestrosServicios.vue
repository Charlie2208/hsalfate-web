<template>
  <v-container>
    <h2 class="text-center py-5 display-1">Nuestros servicios</h2>

    <v-row>
      <v-col cols="12" md="3" v-for="item in datos" :key="item.id">
        <v-card :to="item.to">
          <v-img height="200" :src="item.url"></v-img>
          <v-card-title class="body-2 font-weight-bold">{{
            item.msg
          }}</v-card-title>
          <v-card-text class="body-3">
            <v-icon color="green">{{ item.icon }}</v-icon>
            <span>{{ item.span }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    
  computed: {
    datos() {
      return this.$store.getters["readData"];
    },
  },
};
</script>