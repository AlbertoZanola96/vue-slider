// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
const app = new Vue({
    el: '#root',
    data: {
        contatore: 0,
        photos: [
           'img/image1.jpg',
           'img/image2.jpg', 
           'img/image3.jpg',
           'img/image4.jpg', 
        ]
    },
    created() {
        this.scorrimento();
    },
    // evento di incremento e decremento
    methods: {
        fotoPrecedente() {
            this.contatore -= 1;
            if(this.contatore < 0) this.contatore = (this.photos.length - 1); // inseriamo il meno 1 dato che gli array contano da 0
            
        },
        fotoSuccessiva() {
            this.contatore += 1;
            if(this.contatore == (this.photos.length)) this.contatore = 0; // se il contatore é = 4 ci riporta a 0
        },
        scorrimento() {
            setInterval(() => { // setInterval attiva una funzione all’infinito, ogni tot di tempo.
                this.fotoSuccessiva(); // nelle Arrow Function il nostro this rappresenta lo scope nella quale è stata invocata
            },2000);
        }
        
    }
});











// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.