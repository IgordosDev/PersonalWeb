console.log('⠉⠉⠉⣿⡿⠿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣻⣩⣉⠉⠉\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⡀⠄⠄⠉⠉⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⢤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄\n⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠄⠉⠉⠉⣋⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⢷⡀⠄⠄\n⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣾⣿⣷⣄⣀⣀⣀⣠⣄⣢⣤⣤⣾⣿⡀⠄\n⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢁⣠\n⣿⣿⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣉⣉⣰⣿⣿⣿⣿⣷⣥⡀⠉⢁⡥⠈\n⣿⣿⣿⢹⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠛⠛⠋⠉⠉⠛⢻⣿⣿⣷⢀⡭⣤⠄\n⣿⣿⣿⡼⣿⠷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣿⣟⢷⢾⣊⠄⠄\n⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣈⣉⣭⣽⡿⠟⢉⢴⣿⡇⣺⣿⣷\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⢊⣡⣴⣾⣥⣿⣿⣿');

// random avatar
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'https://avatars.githubusercontent.com/u/6939218', // github
        '/img/last.fm-avatar.gif',
        '/img/openvk-avatar.png', // openvk avatar by mitsvalen
        '/img/noelle.jpg', // default
        '/img/among-us-avatar.png', // among us
        '/img/infinite_by_prekoler.png', // моя коммишка от vk.com/prekoler
        '/img/rekvizit.png', // я не придумал, я просто люблю эту пикчу
        '/img/CY-ZPKxcFU0.jpg', // default
        'https://ru.gravatar.com/userimage/184665281/3093176e9bb3b54c049fd1e80570835c?size=original' // gravatar
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('avatar').src = randomImage;
});

// copyright button
document.addEventListener("DOMContentLoaded", function () {
    const attributionLink = document.querySelector('.attribution-link');
    attributionLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Большое спасибо',
            html: 'immails за помощь со скриптами и вёрсткой,<br><u><a href="https://goganotclownpage.netlify.app/">𝑅 🍬𝐹 𝐿</a></u> за основную карточку и всё что выше,<br><u><a href="https://discord.fandom.com/ru/wiki/Clyde_AI">Clyde</a></u> за виджет last.fm,<br><u><a href="https://bitor.in/">bit0r1n</a></u> за поддомены <u><a href="https://arbuz.pro/">arbuz.pro</a></u><br>и kaoshipaws за ключ к API last.fm.<br>При нажатии на <b>OK</b> - произойдёт переход на репозиторий сайта, если он Вам понравился - большая просьба оставить свою звезду. <i class="fas fa-star"></i>',
            icon: 'info',
            showCancelButton: true,
            cancelButtonText: 'Отмена'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://github.com/IgordosDev/PersonalWeb';
            }
        });
    });
});

// random icon
document.addEventListener('DOMContentLoaded', function () {
    const icons = ['/img/sad.ico', '/img/smirk.ico', '/img/tired.ico', '/img/nervous.ico'];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomIcon = icons[randomIndex];
    document.getElementById('icon').href = randomIcon;
});

// last.fm widget
/* $(document).ready(function () {
    $.getJSON("/last.fm_api.php", function (data) {
        if (data.recenttracks.track[0].date) {
         */   $("#status a").text("а дайте мне возможность делать многое и даже больше");
    /*    } else {
            const trackName = data.recenttracks.track[0].name;
            const artistName = data.recenttracks.track[0].artist["#text"];
            const url = "https://www.last.fm/music/" + encodeURIComponent(artistName) + "/_/" + encodeURIComponent(trackName);
            const html = "<div><i style='font-size: 25px; color: #b90000; bottom: 2px;' class='fab fa-lastfm'></i><span class='song'>" + artistName + " — " + trackName + "</span></div>";
            $("#status a").html(html).attr("href", url);
        }
    });
}); */

/* сохраняю для себя, пригодится
function samp_hyperlink() {
    document.location.href='samp://legacy.samp-rp.ru:7777';
    if(confirm('Сейчас должна была открыться гиперссылка на SA:MP. Если у вас не установлен SA:MP - вы можете нажать "ОК" и перейти на страницу скачивания сборки игры с мультиплеером.')) {
        document.location.href='https://samp-rp.online/threads/grand-theft-auto-san-andreas-bazovaja-sborka-igry-na-pk.2228702/';
    }
} */