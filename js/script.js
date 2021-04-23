var app = new Vue(
    {
        el: '#root',
        data: {
            
            contattoAttivo: 2,
            messaggioInputUtente: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        }
                    ],
                },
                {
                    name: 'Luiso',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        }
                    ],
                },
            ]
            
        },
        methods: {
            cambiaContatto(index){
                this.contattoAttivo = index;
            },
            inviaMessaggio(){
                if(this.messaggioInputUtente != ''){
                    this.contacts[this.contattoAttivo].messages.push({
                    date: dayjs().format('YYYY/MM/DD HH:MM:SS'),
                    text: this.messaggioInputUtente,
                    status: 'sent',
                    stileMessaggio: 'message-sent'});
                    this.messaggioInputUtente = '';
                    setTimeout(()=>{
                        this.contacts[this.contattoAttivo].messages.push({
                            date: dayjs().format('YYYY/MM/DD HH:MM:SS'),
                            text: 'ok',
                            status: 'received',
                            stileMessaggio: 'message-received'});
                    }, 1000);
                }
            }   
        },
    }
);
//Aggiunta di un messaggio:
// l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde