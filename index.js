console.log('⠉⠉⠉⣿⡿⠿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣻⣩⣉⠉⠉\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⡀⠄⠄⠉⠉⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⢤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄\n⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠄⠉⠉⠉⣋⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⢷⡀⠄⠄\n⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣾⣿⣷⣄⣀⣀⣀⣠⣄⣢⣤⣤⣾⣿⡀⠄\n⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢁⣠\n⣿⣿⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣉⣉⣰⣿⣿⣿⣿⣷⣥⡀⠉⢁⡥⠈\n⣿⣿⣿⢹⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠛⠛⠋⠉⠉⠛⢻⣿⣿⣷⢀⡭⣤⠄\n⣿⣿⣿⡼⣿⠷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣿⣟⢷⢾⣊⠄⠄\n⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣈⣉⣭⣽⡿⠟⢉⢴⣿⡇⣺⣿⣷\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⢊⣡⣴⣾⣥⣿⣿⣿');
/* сохраняю для себя, пригодится
function samp_hyperlink() {
    document.location.href='samp://legacy.samp-rp.ru:7777';
    if(confirm('Сейчас должна была открыться гиперссылка на SA:MP. Если у вас не установлен SA:MP - вы можете нажать "ОК" и перейти на страницу скачивания сборки игры с мультиплеером.')) {
        document.location.href='https://samp-rp.online/threads/grand-theft-auto-san-andreas-bazovaja-sborka-igry-na-pk.2228702/';
    }
}
*/
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'https://avatars.githubusercontent.com/u/6939218', // github
        'https://lastfm.freetls.fastly.net/i/u/300x300/886c99244bd8976636564d40ad95d000.gif', // last.fm
        'https://astral.express.wf/hentai/d6/d68d9f478e0c1a4a94aded20437341052e6785a0cb64f3ecd98c03374ef88542c65d80cec1bfcdaa90463138fa5ec5e3bd976e07c0030199c714079c7213c619.jpeg', // openvk
        '/img/noelle.jpg', // default avatar
        '/img/among-us-avatar.png', // among us avatar
        'https://i1.sndcdn.com/avatars-5xRvsgp6ZoKePtQG-4p3C6A-t500x500.jpg', // soundcloud / default avatar
        'https://img.guildedcdn.com/UserAvatar/ba5945958bb2f482717e0e795d30d447-Large.webp?w=450&h=450', // guilded / tatsumaki avatar
        'https://ru.gravatar.com/userimage/184665281/3093176e9bb3b54c049fd1e80570835c?size=original' // gravatar
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('avatar').src = randomImage;
});

// copyright button
function clyde() {
    if(confirm('Увы, Discord решили закрыть бота с чат-нейросетью даже не оставив статьи о нём, поэтому Вы получаете это сообщение с вопросом о переходе на архивную страницу со статьёй о боте. Вся информация там неактуальна. Для перехода - нажмите "ОК"')) {
        document.location.href='https://web.archive.org/web/20230320090056/https://dis.gd/clyde';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const attributionLink = document.querySelector('.attribution-link');
    attributionLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Большое спасибо',
            html: '<u><a href="https://immails.su">immails</a></u> за помощь со скриптами и вёрсткой,<br><u><a href="https://rofl-here.glitch.me/">𝑅 🍬𝐹 𝐿</a></u> за основную карточку и всё что выше,<br><u><a href="javascript:clyde()">Clyde</a></u> за виджет last.fm,<br><u><a href="https://bitor.in/">bit0r1n</a></u> за выделение домена<br>и <u><a href="https://fadeinsi.de">fadeinside</a></u> за ключ к API last.fm.<br>При нажатии на <b>OK</b> - произойдёт переход на репозиторий сайта.',
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

// donate button
document.addEventListener("DOMContentLoaded", function () {
    const attributionLink = document.querySelector('.donate-link');
    attributionLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Вы правда не мисскликнули?',
            html: 'В таком случае, Ваши деньги пойдут в дело - прямо сейчас я коплю на переезд из родного города и счастливую жизнь.',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Нажал(а) из интереса'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://new.donatepay.ru/@Igordos';
            }
        });
    });
});

// last.fm widget
$(document).ready(function () {
    $.getJSON("/api/last-fm", function (data) {
        if (data.recenttracks.track[0].date) {
            $("#status a").text("а дайте мне возможность делать многое и даже больше");
        } else {
            const trackName = data.recenttracks.track[0].name;
            const artistName = data.recenttracks.track[0].artist["#text"];
            const url = "https://www.last.fm/music/" + encodeURIComponent(artistName) + "/_/" + encodeURIComponent(trackName);
            const html = "<div><i style='font-size: 25px; color: #b90000; bottom: 2px;' class='fab fa-lastfm'></i><span class='song'>" + artistName + " — " + trackName + "</span></div>";
            $("#status a").html(html).attr("href", url);
        }
    });
});