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
                        hour: "15:45",
                        messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Ti sei ricordato di andare a ritirare quella raccomandata in posta?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'E se riesci pass anche al supermercato che abbiamo finito lo zucchero a velo per la torta della nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }]
                    },
                    {
                        image: "./assets/img/avatar_2.jpg",
                        fullname: "Michele Lamperti",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai porato il cane dal veterinario per quella pucle??',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }]
                    },
                    {
                        image: "./assets/img/avatar_3.jpg",
                        fullname: "Samuele Bonomi",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'riesci ad andare a prendere Carlotta a d equitazione?',
                            status: 'sent'
                        },

                        ]
                    },
                    {
                        image: "./assets/img/avatar_4.jpg",
                        fullname: "Alessandro de Bortoli",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si trova in via tagliamento vicno al sentiero che costeggia il lambro',
                                status: 'sent'
                            },
                        ]
                    },
                    {
                        image: "./assets/img/avatar_5.jpg",
                        fullname: "Giuliano Vincenti",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ]
                    },
                    {
                        image: "./assets/img/avatar_6.jpg",
                        fullname: "Loretta Scott king",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }]

                    },
                    {
                        image: "./assets/img/avatar_7.jpg",
                        fullname: "Luciano Cadorna",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45"
                    },
                ],
            inputText: "",
            activeContact: null,

        }

    },

    methods: {

        contactClick(index) {
            console.log("Hello world");

            if (index >= 0 && index < this.contacts.length) {
                this.activeContact = index

                const user = document.querySelector(".user")

                const answer = document.querySelector(".answer")

                const avatar = document.getElementById("main_avatar")

                const intestation = document.getElementById("chat-intestation") 
                console.log(user);

                user.innerHTML = `<p>${this.contacts[index].messages[0].message}</p>`
                user.innerHTML += `<p>${this.contacts[index].messages[1].message}</p>`
                answer.innerHTML = `<p>${this.contacts[index].messages[2].message}</p>`
            }

        },

        contactSearch() {
            console.log("hello word")

            let textSearch = this.inputText.toLowerCase().trim()// prende il testo dell'input, lo mette in minuscolo e rimuove eventuali spazi all'inizio e alla fine

            // if (textSearch === "") {
            //return, capire come riportare la lista di contatti alla situazione di partenza
            // }
            this.contacts = this.contacts.filter(function (contact) {

                if (contact.fullname.toLowerCase().includes(textSearch)) { // filtra e restiuisce il fullname in minuscolo se corrisponde a quello dell'input
                    return contact.fullname
                } else {
                    return
                }

            })

        }
    }
}).mount("#app")