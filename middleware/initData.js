export default function({store}) {
    console.log("Hola, soy un middleware")
    if(store.state.datos.length == 0){
        store.dispatch('nuxtServerInit')
    }
}