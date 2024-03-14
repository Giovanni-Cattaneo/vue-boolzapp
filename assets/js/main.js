console.log("Hello world");

const { createApp } = Vue

createApp({
    data(){
        return{
            contacts : 
            [
                {
                    image: "./assets/img/avatar_1.jpg",
                    fullname: "Giovanni cattaneo",
                    Activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
            ]
        }
    },

    methods(){

    }
}).mount("#app")