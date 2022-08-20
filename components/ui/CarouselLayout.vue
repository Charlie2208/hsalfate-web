<template>
    <v-carousel cycle dark hide-delimiter-background height="400" class="img-c">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.url"
        fade
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col cols="6"></v-col>
            <v-col cols="12" md="6" class=" text-center font-italic">
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3',
                ]"
              >
                <h4 class="animated fadeInUp grey lighten-3">{{item.msg}}</h4>
                

              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {     
            msg:'Expertos en limpieza de oficinas',
            src: 'https://i.postimg.cc/4Ks6d5qx/Whats-App-Image-2022-08-17-at-11-27-41-AM.jpg',
            url:require('../../static/img/img4.jpg')
          },
          { 
            msg:'Mensajería',
            src: 'https://i.postimg.cc/Yjh1hjnY/Whats-App-Image-2022-08-17-at-11-27-43-AM.jpg',
            url:require('../../static/img/correspondencia.jpg')
          },
          {
            msg:'Sanitización',
            src: 'https://i.postimg.cc/WtC0rjCK/Whats-App-Image-2022-08-17-at-11-27-43-AM-1.jpg',
            url:require('../../static/img/img2.jpg')
          },
          {
            msg:'Limpieza de hogares',
            src: 'https://i.postimg.cc/YGyYdw9v/Whats-App-Image-2022-08-17-at-11-27-44-AM.jpg',
            url:require('../../static/img/img1.jpg')
          },
    ],
  }),
};
</script>
<style>

.animated {
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}

.img-c {
  filter: hue-rotate (90deg);
-webkit-filter: hue-rotate (90deg);
}
</style>