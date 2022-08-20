<template>
 <v-app fluid>
   <ui-carousel-layout></ui-carousel-layout>

   <ui-info-cards class="my-5 d-none d-md-block mr-15"></ui-info-cards>

   <v-divider class="my-3"></v-divider>

    <div class="light-green">
    <ui-porque-nosotros></ui-porque-nosotros>
    </div>

    <v-divider class="my-3"></v-divider>

    <ui-nuestros-servicios></ui-nuestros-servicios>
 </v-app>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

