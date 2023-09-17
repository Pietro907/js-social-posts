/* 

Descrizione
Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.

Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Nota (bonus extra) - super opzionale:
Poiché é la parte logica ad interessarci in questa fase del corso, nello starter kit c'é il marup che potete usare per volgere l'esercizio.
Se finite la parte logica ed i vari bonus e vi avanza tempo per giocare un pó, pensate pure ad un layout differente e lavorateci su come bonus extra.

*/

//Creo una variabile di appoggio con un array per pushare dentro i post che hanno gà dei like i like
//Ogni volta che a un post metteremo il like verrà pushato qui dentro
const havesLike = [];
//console.log(havesLike);

//Creo una variabile con l'elemento della DOM dove stampo i dati dell'array
const container = document.getElementById('container')
const userProfile = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
console.log(userProfile);

/* function template (userData) {

const {name, image} = userData;
return `<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">`


} */




generateMarkup();

function generateMarkup(markup) {

    for (let index = 0; index < userProfile.length; index++) {
        const profileObj = userProfile[index];
        console.log(profileObj);      
        
        const markupProfile = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profileObj.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${profileObj.author.name}</div>
                        <div class="post-meta__time">${profileObj.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${profileObj.content}</div>
            <div class="post__image">
                <img src="${profileObj.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${profileObj.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

        //Stampo a schermo e con l'operatore += aggiungo il markup tante volte quante il loop for
        container.innerHTML += markupProfile;
        console.log(container);



    }
    
    
    //Funzione .push in havesLike
    function checkLike() {
              
        for (let index = 0; index < userProfile.length; index++) {
            const profileObj = userProfile[index];
            console.log(profileObj);
            if (profileObj.id == likeBtn.classList.contains('like-button--liked')) {
                this.push('havesLike')
                console.log(havesLike);
            }
        }
        
    }
    
    

    
    //Creazione like/unlike
    const likeBtn = document.querySelector('.like-button__label');
    const counterResult = document.querySelector('.js-likes-counter');
    const counter = 80;
    counterResult.innerHTML = counter;
    
    
    
    
    likeBtn.addEventListener('click', function () {
        //con toggle accendo e spengo la classe ('like-button--liked');
        likeBtn.classList.toggle('like-button--liked');
        
        //Se likeBtn contiene la classe ('like-button--liked')
        if (likeBtn.classList.contains('like-button--liked')) {
            
            //Stampa in counterResult counter + 1
            counterResult.innerHTML = counter + 1;
            
            //Inserisco il post id nel array vuoto se counter + 1
            const postId = counter + 1;
            console.log(postId);
            if (postId > counter) {
                checkLike();
                console.log(' dentro haves likes');
                
            };
            
            //altrimentti
        } else {
            //Stampa il contatore in counterResult
            counterResult.innerHTML = counter;
        }
        
        
    });
}


//Non funziona

 /*for (const key in userProfile) {
    const user = userProfile[key];
    //console.log(user.author.name);
    const author = user.author.name;
    console.log(author);
    const authorNameEl = document.querySelectorAll('.post-meta__author')
    authorNameEl.innerHTML = author;


} */