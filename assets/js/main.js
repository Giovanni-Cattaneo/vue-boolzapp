console.log("Hello world");

const { createApp } = Vue

createApp({
    data() {
        return {

            contacts:
                [
                    {
                        image: "./assets/img/avatar_1.jpg",
                        fullname: "Giovanni cattaneo",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }]
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

    methods() {

    }
}).mount("#app")