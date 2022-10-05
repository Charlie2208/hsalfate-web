<template>
  <v-app>
    <h1 class="display-1 pl-10 py-5 grey lighten-2">Servicios</h1>
    <v-container>
      <v-row class="py-10">
        <v-col cols="12" md="4" v-for="item in datos" :key="item.id">
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
    };
  },
  computed:{
      datos(){
          return this.$store.getters['readData']
      }
  }
};
</script>