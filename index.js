console.log('⠉⠉⠉⣿⡿⠿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣻⣩⣉⠉⠉\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⡀⠄⠄⠉⠉⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⢤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄\n⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠄⠉⠉⠉⣋⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⢷⡀⠄⠄\n⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣾⣿⣷⣄⣀⣀⣀⣠⣄⣢⣤⣤⣾⣿⡀⠄\n⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢁⣠\n⣿⣿⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣉⣉⣰⣿⣿⣿⣿⣷⣥⡀⠉⢁⡥⠈\n⣿⣿⣿⢹⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠛⠛⠋⠉⠉⠛⢻⣿⣿⣷⢀⡭⣤⠄\n⣿⣿⣿⡼⣿⠷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣿⣟⢷⢾⣊⠄⠄\n⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣈⣉⣭⣽⡿⠟⢉⢴⣿⡇⣺⣿⣷\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⢊⣡⣴⣾⣥⣿⣿⣿');

function samp_hyperlink() {
    document.location.href='samp://legacy.samp-rp.ru:7777';
    if(confirm('Сейчас должна была открыться гиперссылка на SA:MP. Если у вас не установлен SA:MP - вы можете нажать "ОК" и перейти на страницу скачивания сборки игры с мультиплеером.')) {
        document.location.href='https://samp-rp.online/threads/grand-theft-auto-san-andreas-bazovaja-sborka-igry-na-pk.2228702/';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'avatars.githubusercontent.com/u/6939218', // github
        'lastfm.freetls.fastly.net/i/u/300x300/886c99244bd8976636564d40ad95d000.gif', // last.fm
        'images-ext-2.discordapp.net/external/2a-ngndKSBLzX9Fy27OC3WsjPUs_jIpIo74jQLt4j7I/%3Fsize%3D1951x2160%26quality%3D96%26sign%3D04d5e3e4c6a4bb424f9e92346d09a45f%26type%3Dalbum/https/sun3-8.userapi.com/impg/HIRoJRkDPanN-CZmU3NinoM_0AA64OW9rNFHeA/4ASTTECrwSQ.jpg?width=500&height=500', // vk
        'images-ext-1.discordapp.net/external/x3Xl6KOD7VbM_JBIK2A0OcZ4-yeQbzezfECTXcJQ3Oo/https/img3.gelbooru.com/images/8d/67/8d6729002e9298755b2c6ad32dafc31d.jpg?width=500&height=500', // openvk
        'media.discordapp.net/attachments/863356751897296896/1007598313928937512/7a0062a07ae307bd0c3c42f402c32f89.png?width=500&height=500', // default avatar 
        'media.discordapp.net/attachments/863356751897296896/1045748342572974170/f02f1eec31de78103f96f62d495e57f2.png?width=500&height=500', // among us avatar
        'i1.sndcdn.com/avatars-5xRvsgp6ZoKePtQG-4p3C6A-t500x500.jpg', // soundcloud / default avatar
        'img.guildedcdn.com/UserAvatar/ba5945958bb2f482717e0e795d30d447-Large.webp?w=450&h=450', // guilded / tatsumaki avatar
        'cdn.discordapp.com/guilds/609708818829541397/users/694849711437250581/avatars/a46e9764dff224361b31364da8302e8a.png?size=2048', // nitro gosling avatar
        'ru.gravatar.com/userimage/184665281/3093176e9bb3b54c049fd1e80570835c?size=original', // gravatar
        'cdn.discordapp.com/attachments/933669422332252180/961300223454490714/sa-mp-035.png' // old samp-rp
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    document.getElementById('avatar').src = 'https://' + randomImage;
});

document.addEventListener("DOMContentLoaded", function () {
    const attributionLink = document.querySelector('.attribution-link');
    attributionLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Большое спасибо',
            html: '<a href="https://immails.ml/">I\'mMails</a> за помощь со скриптами и вёрсткой,<br><a href="https://rofl-here.glitch.me/">𝑅 🍬𝐹 𝐿</a> за основную карточку и всё что выше,<br><a href="https://dis.gd/clyde">Clyde</a> за виджет last.fm,<br><a href="https://bitor.in/">bit0r1n</a> за выделение домена<br>и <a href="https://fadeinside.online">fadeinside</a> за ключ к API last.fm.<br>При нажатии на <b>OK</b> - произойдёт переход на репозиторий сайта.',
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

// last.fm widget
$(document).ready(function () {
    $.getJSON("/last.fm_api.php", function (data) {
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