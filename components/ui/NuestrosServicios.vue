<template>
<v-container>
    <h2 class="text-center py-5 display-1">Nuestros servicios</h2>

    <v-row>
        <v-col cols="12" md="3" v-for="item in items" :key="item.id">
            <v-card :to="item.to">
                <v-img
                height="200"
                :src="item.url"></v-img>
                <v-card-title class="body-2 font-weight-bold">{{item.msg}}</v-card-title>
                <v-card-text class="body-3">
                    <v-icon color="green">{{item.icon}}</v-icon>
                    <span>{{item.span}}</span>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
    data(){
        return{
            items: [
      {      id:1,
            msg:'Servicios a empresas',
            src: 'https://i.postimg.cc/4Ks6d5qx/Whats-App-Image-2022-08-17-at-11-27-41-AM.jpg',
            url:require('../../static/img/aseo-empresa.jpg'),
            icon:'mdi-check-circle',
            span:'Profesionales capacitados',
            to:'/servicios/1'
          },
          {  id:2,
            msg:'Envío correspondencia',
            src: 'https://i.postimg.cc/Yjh1hjnY/Whats-App-Image-2022-08-17-at-11-27-43-AM.jpg',
            url:require('../../static/img/correspondencia.jpg'),
            icon:'mdi-check-circle',
            span:'Siempre puntal',
            to:'/servicios/2'
          },
          { id:3,
            msg:'Servicios a domicilios',
            src: 'https://i.postimg.cc/WtC0rjCK/Whats-App-Image-2022-08-17-at-11-27-43-AM-1.jpg',
            url:require('../../static/img/aseo-domicilio.jpg'),
            icon:'mdi-check-circle',
            span:'Profundo y delicado',
            to:'/servicios/3'
          },
          { id:4,
            msg:'Jardinería',
            src: 'https://i.postimg.cc/YGyYdw9v/Whats-App-Image-2022-08-17-at-11-27-44-AM.jpg',
            url:require('../../static/img/jardineria.jpg'),
            icon:'mdi-check-circle',
            span:'Capacidad y rigor',
            to:'/servicios/4'
          },
    ],
        }
    }
}
</script>