Milestone 1

● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse

- Gia presente la differenziazione tra le classi per i colori, verifica bene la struttura css e html 

● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

- creare un array di oggetti compesta dai vari nomi, cognomi la foto dell'avatar ed eventualmente la thumbnail del profilo e ciclare con un v-for all'interno dei list item per generarli dinamicamente

Milestone 2

● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione

- creare una seconda array di oggetti che contenga i messaggi della conversazione e ciclarcli all'interno della finestra di chat

● Click sul contatto mostra la conversazione del contatto cliccato
- utilizzando la direttiva v-on oppure il @click sul contatto desiderato aprire una nuova finestra di chat

Milestone 3

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde

- dobbiamo trasformare l'inpu testuale in un v-model per l'inserimento del testo dinamico, e ogni testo dell'utente deve avere la classe verde
- Prevedere la possibilità di aggiungere subito dopo un messaggio dell'utente una risposta dell'interlocutore

● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
- settare con un timing una risposta che avverrà dopo 1 secondo, ripassa la sezione mounted per l'inserimento dinamico 

Milestone 4

● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
- Nuovamente occorre trasformare l'input testuale a sinistra in un v-model interattivo, alla pressione di invio con un @keyup enter rimuovere dai list item i soggetti che non corrispondono ai criteri letterali in questo caso 






<!-- Bonus section -->
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
Consigli utili:
● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
lista dei contatti
● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
● Per gestire le date, può essere utile la libreria Luxon
● La struttura dell’array dei contatti potrebbe avere questa forma