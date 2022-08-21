<template>
  <v-app class="font">
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      color="white"
    >
      <v-list color="white">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon color="red lighten-2">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        v-for="info in infos"
        :key="info.item"
        :to="info.to"
        >
          <v-list-item-icon>
           <v-icon color="red lighten-2">{{info.icon}}</v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            {{info.item}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-app-bar app color="white" elevation="0" height="100">
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="ml-15"></v-toolbar-title>
        <v-img :src=logo max-width="150"></v-img>
        <v-spacer></v-spacer>
        <div class="d-none d-md-block mr-15">
          <v-btn text to="/" class="">inicio</v-btn>
          <v-btn text to="/quienes-somos" class="">Quienes Somos?</v-btn>
          <v-btn text to="/servicios/lista-servicios" class="">Servicios</v-btn>
          <v-btn text to="/clientes" class="">Clientes</v-btn>
          <v-btn text to="/contacto" class="">contacto</v-btn>
        </div>
      </v-app-bar>

    <v-main >
      <nuxt />
      <v-btn icon
      href="https://api.whatsapp.com/send?phone=56962371915"
      class="btn-position">
      <v-icon color="green"
      x-large
      >mdi-whatsapp</v-icon>
      </v-btn>
      
    </v-main>

    <v-footer color="light-green">
      <v-row justify="center" no-gutters>
        <v-col class="text-center white--text" cols="12">
          &copy; {{ new Date().getFullYear() }} - Todos los derechos reservados a empresa de aseo HSalfate
        </v-col>
        <v-btn color="white" small icon> <v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn color="white" small icon>
          <v-icon>mdi-instagram</v-icon></v-btn
        >
        <v-btn color="white" small icon>
          <v-icon>mdi-pinterest</v-icon></v-btn
        >
        <v-btn color="white" small icon> <v-icon>mdi-twitter</v-icon></v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer:false,
      logo:require("../static/img/Logo.jpg"),
      infos:[
        {
          item:"Quienes Somos?",
          to:"/quienes-somos",
          icon:"mdi-account-box-outline"
        },
        {
          item:"Servicios",
          to:"/servicios/lista-servicios",
          icon:"mdi-face-agent"
        },
        {
          item:"Clientes",
          to:"/clientes",
          icon:"mdi-account-star"
        },
        {
          item:"Contacto",
          to:"/contacto",
          icon:"mdi-card-account-phone"
        },
        ]
    };
  },
};
</script>
<style scoped>

.font{
  font-family: 'Open Sans', sans-serif;
}

.btn-position {
	position:fixed;
	width:60px;
	height:60px;
	bottom:70px;
	right:40px;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}
.btn-position:hover {
	text-decoration: none;
	color: #25d366;
  background-color:#fff;
}
</style>