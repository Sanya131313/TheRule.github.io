const player = new Plyr('#player', {
    invertTime: false,
});
player.source = {
    type: 'audio',
    sources: [
        {
            src: 'GetAMoveOn.mp3', // Путь к треку по умолчанию
            type: 'audio/mp3'
        }
    ]
};
$(function() {
    // Включение трека по клику
    $('.change-audio').click(function(){
        $('.change-audio').removeClass('active');
        $(this).addClass('active');    
        let audiourl = $(this).attr('data-audio');
        player.source = {
            type: 'audio',
            sources: [
                {
                    src: audiourl,
                    type: 'audio/mp3'
                }
            ]
        };        
        player.play(); 
    });
    // Переключение трека на следующий по окончанию    
    player.on('ended', event => {
        let nextaudio = $('.change-audio.active').next(".change-audio");
        let urlnextaudio = nextaudio.attr('data-audio');
        if (!urlnextaudio) {
            player.stop();     
            } else {
            $('.change-audio').removeClass('active');
            nextaudio.addClass('active');
            player.source = {
                type: 'audio',
                sources: [
                    {
                        src: urlnextaudio,
                        type: 'audio/mp3'
                    }
                ]
            };        
            player.play();     
        }
    });    
});

const s = window.screen;
const w = (q.width = s.width);
const h = (q.height = s.height);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "0123456789ABCDEF".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0f0";
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);

$(document).ready(function () {
    //Обработка нажатия на кнопку "Вверх"
    $("#up").click(function () {
        //Необходимо прокрутить в начало страницы
        var curPos = $(document).scrollTop();
        var scrollTime = curPos / 1.73;
        $("body,html").animate({ "scrollTop": 0 }, scrollTime);
    });
});