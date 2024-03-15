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
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }

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
                            {
                                date: '10/01/2020 15:50:00',
                                message: "Parlo di quell'orrore della tua macchina che mi ha lasciata a piedi, vai e sistema",
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ]
                    },
                    {
                        image: "./assets/img/avatar_5.jpg",
                        fullname: "Giuliano Vincenti",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            },
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
                        messages: [
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ]

                    },
                    {
                        image: "./assets/img/avatar_7.jpg",
                        fullname: "Luciano Cadorna",
                        activity: "Non attivo da circa 3h",
                        hour: "15:45",
                        messages: [
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ]
                    },
                ],
            inputText: "",
            activeContact: 0,
            writtenMessage: "",
            lastMessage : 0,
            copyOfContacts : 
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
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }

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
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Parlo di quell'orrore della tua macchina che mi ha lasciata a piedi, vai e sistema",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    image: "./assets/img/avatar_5.jpg",
                    fullname: "Giuliano Vincenti",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45",
                    messages: [
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
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
                    messages: [
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]

                },
                {
                    image: "./assets/img/avatar_7.jpg",
                    fullname: "Luciano Cadorna",
                    activity: "Non attivo da circa 3h",
                    hour: "15:45",
                    messages: [
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di pagarlo stavolta non come quel cretino di tuo padre che a momenti se lo scordava',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
            ],// verificare la possibilità di mettere questo in un file secondario e usare export import cosi da alleggerire il codice
            

        }

    },

    methods: {
 
        contactClick(index) {
            if (index >= 0 && index < this.contacts.length) {
                this.activeContact = index
            }

        },


        contactSearch() {
            console.log("hello word")

            let textSearch = this.inputText.toLowerCase().trim()// prende il testo dell'input, lo mette in minuscolo e rimuove eventuali spazi all'inizio e alla fine
            this.contacts = this.contacts.filter(function (contact) {

                 if (contact.fullname.toLowerCase().includes(textSearch)) { // filtra e restiuisce il fullname in minuscolo se corrisponde a quello dell'input
                    return contact.fullname
                } 
            })
        },

        contactRestore(){
            this.inputText = ""
            this.contacts = this.copyOfContacts
        },

        writeMessage() {
            console.log(this.writtenMessage); // vediamo il messaggio scritto nell'input

            console.log(this.contacts[this.activeContact].messages[1].message);

            this.contacts[this.activeContact].messages.push({
                date: "10/01/2020 16:15:22",
                message: this.writtenMessage,
                status: 'sent'
            })

            this.writtenMessage = ""
            
            setTimeout(() =>{
                this.contacts[this.activeContact].messages.push({
                    date: "10/01/2020 16:15:22",
                    message: "ok, buono a sapersi",
                    status: 'receveid'
            }) }, 1000)

        
        },

        messageOption(){
            console.log("hello world");
            console.log(this.contacts[activeContact].messages)
        },

        calcLastMessage(contact){
            const lastMessageI = contact.messages.length -1

            // valuta la possibilità di inserire una condizione se non ci sono messaggi in chat con la persona, qui non necessario
            return contact.messages[lastMessageI].message
        }
    }
}).mount("#app")