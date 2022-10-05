export const state = () => ({
    counter: 0,
    datos: [
        {
            id: 1,
            msg: 'Servicios a empresas',
            src: 'https://i.postimg.cc/4Ks6d5qx/Whats-App-Image-2022-08-17-at-11-27-41-AM.jpg',
            url: require('../static/img/aseo-empresa.jpg'),
            icon: 'mdi-check-circle',
            span: 'Profesionales capacitados',
            to: '/servicios/1'
        },
        {
            id: 2,
            msg: 'Envío correspondencia',
            src: 'https://i.postimg.cc/Yjh1hjnY/Whats-App-Image-2022-08-17-at-11-27-43-AM.jpg',
            url: require('../static/img/correspondencia.jpg'),
            icon: 'mdi-check-circle',
            span: 'Siempre puntal',
            to: '/servicios/2'
        },
        {
            id: 3,
            msg: 'Servicios a domicilios',
            src: 'https://i.postimg.cc/WtC0rjCK/Whats-App-Image-2022-08-17-at-11-27-43-AM-1.jpg',
            url: require('../static/img/aseo-domicilio.jpg'),
            icon: 'mdi-check-circle',
            span: 'Profundo y delicado',
            to: '/servicios/3'
        },
        {
            id: 4,
            msg: 'Jardinería',
            src: 'https://i.postimg.cc/YGyYdw9v/Whats-App-Image-2022-08-17-at-11-27-44-AM.jpg',
            url: require('../static/img/jardineria.jpg'),
            icon: 'mdi-check-circle',
            span: 'Capacidad y rigor',
            to: '/servicios/4'
        },
    ],
});

export const getters = {
    readCounter(state) {
        return state.counter
    },
    readData(state) {
        return state.datos
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    },
   async  get_datos(state) {
        state.datos = payload
    }
}
export const actions = {

    increment(context) {
        setTimeout(() => {
            context.commit("increment")
        }, 1000)
    }
}