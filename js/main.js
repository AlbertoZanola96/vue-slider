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
    // evento di incremento e decremento
    methods: {
        fotoPrecedente() {
            this.contatore -= 1;
        },
        fotoSuccessiva() {
            this.contatore += 1;
        }
    }
})












// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.