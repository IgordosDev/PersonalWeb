console.log('⠉⠉⠉⣿⡿⠿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣻⣩⣉⠉⠉\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⡀⠄⠄⠉⠉⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⢤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄\n⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠄⠉⠉⠉⣋⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⢷⡀⠄⠄\n⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣾⣿⣷⣄⣀⣀⣀⣠⣄⣢⣤⣤⣾⣿⡀⠄\n⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢁⣠\n⣿⣿⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣉⣉⣰⣿⣿⣿⣿⣷⣥⡀⠉⢁⡥⠈\n⣿⣿⣿⢹⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠛⠛⠋⠉⠉⠛⢻⣿⣿⣷⢀⡭⣤⠄\n⣿⣿⣿⡼⣿⠷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣿⣟⢷⢾⣊⠄⠄\n⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣈⣉⣭⣽⡿⠟⢉⢴⣿⡇⣺⣿⣷\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⢊⣡⣴⣾⣥⣿⣿⣿');

function samp_hyperlink() {
    document.location.href='samp://legacy.samp-rp.ru:7777';
    if(confirm('Сейчас должна была открыться гиперссылка на SA:MP. Если у вас не установлен SA:MP - вы можете нажать "ОК" и перейти на страницу скачивания сборки игры с мультиплеером.')) {
        document.location.href='https://samp-rp.su/threads/grand-theft-auto-san-andreas-bazovaja-sborka-igry-na-pk.2228702/';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'avatars.githubusercontent.com/u/6939218',
        'lastfm.freetls.fastly.net/i/u/300x300/c1def6ceecbca4c5f280d00a88e643ee.gif',
        'images-ext-2.discordapp.net/external/2a-ngndKSBLzX9Fy27OC3WsjPUs_jIpIo74jQLt4j7I/%3Fsize%3D1951x2160%26quality%3D96%26sign%3D04d5e3e4c6a4bb424f9e92346d09a45f%26type%3Dalbum/https/sun3-8.userapi.com/impg/HIRoJRkDPanN-CZmU3NinoM_0AA64OW9rNFHeA/4ASTTECrwSQ.jpg?width=500&height=500',
        'images-ext-1.discordapp.net/external/x3Xl6KOD7VbM_JBIK2A0OcZ4-yeQbzezfECTXcJQ3Oo/https/img3.gelbooru.com/images/8d/67/8d6729002e9298755b2c6ad32dafc31d.jpg?width=500&height=500',
        'media.discordapp.net/attachments/863356751897296896/1007598313928937512/7a0062a07ae307bd0c3c42f402c32f89.png?width=500&height=500',
        'media.discordapp.net/attachments/863356751897296896/1045748342572974170/f02f1eec31de78103f96f62d495e57f2.png?width=500&height=500',
        'i1.sndcdn.com/avatars-5xRvsgp6ZoKePtQG-4p3C6A-t500x500.jpg',
        'img.guildedcdn.com/UserAvatar/a4eded99bc54ff93ed5f333f0d5671f4-Large.webp?w=450&h=450'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    document.getElementById('avatar').src = 'https://' + randomImage;
    document.getElementById('avatar').content = 'https://' + randomImage; // я ненавижу себя
});


// last.fm
$(document).ready(function () {
    const user = "Igordos";
    const apiKey = "d14e43258ff2cd84ea2a4711a863c3aa";
    const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + user + "&api_key=" + apiKey + "&format=json&limit=1";
    $.getJSON(url, function (data) {
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

    $(".container").on("click", function () {
        window.open("https://www.last.fm/ru/user/Igordos");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const attributionLink = document.querySelector('.attribution-link');
    attributionLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Большое спасибо',
            html: '𝑅 🍬𝐹 𝐿 за основную карточку и помощь с вёрсткой,<br>Clyde (официальный ИИ от Discord) за виджет last.fm,<br>I\'mMails за помощь со скриптами и вёрсткой<br>и fadeinside за ключ к API last.fm.',
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