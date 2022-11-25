console.log('⠉⠉⠉⣿⡿⠿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣻⣩⣉⠉⠉\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⡀⠄⠄⠉⠉⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⢤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄\n⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠄⠉⠉⠉⣋⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⢷⡀⠄⠄\n⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣾⣿⣷⣄⣀⣀⣀⣠⣄⣢⣤⣤⣾⣿⡀⠄\n⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢁⣠\n⣿⣿⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣉⣉⣰⣿⣿⣿⣿⣷⣥⡀⠉⢁⡥⠈\n⣿⣿⣿⢹⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠛⠛⠋⠉⠉⠛⢻⣿⣿⣷⢀⡭⣤⠄\n⣿⣿⣿⡼⣿⠷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣿⣟⢷⢾⣊⠄⠄\n⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣈⣉⣭⣽⡿⠟⢉⢴⣿⡇⣺⣿⣷\n⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⢊⣡⣴⣾⣥⣿⣿⣿');

function samp_hyperlink() {
    document.location.href='samp://legacy.samp-rp.ru:7777';
    if(confirm('Сейчас должна была открыться гиперссылка на SA:MP. Если у вас не установлен SA:MP - вы можете нажать "ОК" и перейти на страницу скачивания сборки игры с мультиплеером.')) {
        document.location.href='https://samp-rp.su/threads/grand-theft-auto-san-andreas-bazovaja-sborka-igry-na-pk.2228702/';
    }
}

Object.defineProperty(
    Object.prototype,
    'randElement',
        {
        value: function() {
        var rand = Math.floor(Math.random() * this.length);
        return this[rand];
        }
    }
);

var avatar = ['avatars.githubusercontent.com/u/6939218\" alt=\"GitHub avatar', 'lastfm.freetls.fastly.net/i/u/300x300/c1def6ceecbca4c5f280d00a88e643ee.gif\" alt=\"last.fm avatar', 'images-ext-2.discordapp.net/external/2a-ngndKSBLzX9Fy27OC3WsjPUs_jIpIo74jQLt4j7I/%3Fsize%3D1951x2160%26quality%3D96%26sign%3D04d5e3e4c6a4bb424f9e92346d09a45f%26type%3Dalbum/https/sun3-8.userapi.com/impg/HIRoJRkDPanN-CZmU3NinoM_0AA64OW9rNFHeA/4ASTTECrwSQ.jpg?width=500&height=500\" alt=\"VK avatar', 'images-ext-2.discordapp.net/external/jeH2dZXV0c3TXgTSHjy7ktXVBOeParAseHb_6CkrxlA/https/ru-spb.openvk.uk/hentai/1e/1e8da0fdaec37d7593ac98b3c406d5f346773006023a7ff7f669ea3e503aca64b6e5d6e0bd80805e0652c3ba3d489017467bf1d61a86cb494b49f148bc255e22.jpeg?width=500&height=500\" alt=\"OpenVK avatar', 'media.discordapp.net/attachments/863356751897296896/1007598313928937512/7a0062a07ae307bd0c3c42f402c32f89.png?width=500&height=500\" alt=\"Base avatar', 'media.discordapp.net/attachments/863356751897296896/1045748342572974170/f02f1eec31de78103f96f62d495e57f2.png?width=500&height=500\" alt=\"Among Us avatar', 'i1.sndcdn.com/avatars-5xRvsgp6ZoKePtQG-4p3C6A-t500x500.jpg\" alt=\"SoundCloud, etc. avatar'];