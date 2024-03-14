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
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_1.jpg",
                    fullname: "Fabio De Luigi",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_2.jpg",
                    fullname: "Michele Lamperti",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_3.jpg",
                    fullname: "Samuele Bonomi",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_4.jpg",
                    fullname: "Alessandro de Bortoli",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_5.jpg",
                    fullname: "Giuliano Vincenti",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_6.jpg",
                    fullname: "Loretta Scott king",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
                {
                    image: "./assets/img/avatar_7.jpg",
                    fullname: "Luciano Cadorna",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45"
                },
            ]
        }
    },

    methods(){

    }
}).mount("#app")