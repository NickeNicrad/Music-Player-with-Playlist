//song list
let All_song = [
   {
     name: "Big Fariouz - Leave Me Alone",
     path: "music/Big Fariouz  - Leave Me Alone.mp3",
     img: "images/1.jpg",
     singer: "Big Fariouz"
   },
   {
     name: "Big Fariouz - Munyana",
     path: "music/Big Fariouz - Munyana(MP3_70K).mp3",
     img: "images/2.jpg",
     singer: "Big Fariouz"
   },
   {
     name: "Big Fizzo - Bajou",
     path: "music/Big Fizzo - Bajou.mp3",
     img: "images/3.jpg",
     singer: "Big Fariouz"
   },
   {
     name: "Big Fizzo Fariouz - NDAKUMISINZE",
     path: "music/Big Fizzo Fariouz   NDAKUMISINZE (OFFICIAL MUSIC V(MP3_70K).mp3",
     img: "images/4.jpg",
     singer: "Big Fariouz"
   },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/