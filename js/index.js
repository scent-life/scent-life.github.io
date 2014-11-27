(function(root) {
    if (!root.i18n) {
        root.i18n = {};
    }

    root.i18n['zh-CN'] = {
        "BANNER": "SCENT 是利用数据服务来提供你多样的气味选择, 并可以透过气味混合器来为不同场合, 创造属于自己独一无二的味道",
        "VOTE_US": "投我们一票",
        "SCENE_TITLE": "时时对味",
        "SCENE_DESC": "产品包含硬件混合器, 数千种不同香味基底油与香味瓶来让你自己混出多种味道。同时也提供专家或用户推荐的香味方程式数据服务, 让用户可以快速选择适合自己或场合的香味",
        "MIX_STEP1": "放上SCENT 空瓶",
        "MIX_STEP2": "依照你选择的喜好自动混合并填充",
        "SMELL_TITLE": "嗅觉是人的基础感知",
        "SMELL_DESC": "人类的嗅觉在生物学上非常重要, 它可以留在我们记忆，也可成为沟通信号，潜意识里影响人的情绪跟行为。我们并没意识到它的重要，但它却显著的影响着我们生活，在商业上发展上， 也不如视觉、 听觉或触觉在商品化多有满足， 我们的产品“ SCENT” 目的是要填补这块需求的空缺 ",
        "SOLVE_TITLE": "我们要解决的",
        "SOLVE_DESC": "在现在商业的香水市场，品牌公司大部份都只提供了单一瓶装香水，用户也只能到店内试用，买回来一整瓶，也许只喷了几次就因为口味变了，就不想用了，用户也没办法为了所有的社交场合与心情买了上百瓶用不完的香水。另外，大部份的用户在买香水的时候，也不知道什么样的香味是对场合或心情的，完全没有人提供参考，而我们的产品可以解决这些困扰",
        "BENEFITS_TITLE": "产品特色",
        "BENEFIT_1": "<strong>丰富的选择 - </strong> 利用不同的基底与量的调整，就能有不同的香味",
        "BENEFIT_2": "<strong>省钱 - </strong> 只要混少量，不需一大瓶",
        "BENEFIT_3": "<strong>对的味道 - </strong> 不同的场合需要不同的香味搭配来增加自信与事件成功率",
        "BENEFIT_4": "<strong>独一无二 - </strong> 找到属于你自己的味道",
        "BENEFIT_5": "<strong>回亿- </strong> 把事件时的香味数据存起来，随时可以利用香味重建记亿",
        "BENEFIT_6": "<strong>香味数据库 - </strong> 当你不知道怎么混或针对场合、对象要混什么时，提供你参考的量",
        "BENEFIT_7": "<strong>多变化 - </strong> 你可以随时改变你要的味道",
        "OUR_TEAM": "多元的团队组合",
        "PARTNERS": "合作夥伴",
        "CONTACT_US": "联络我们",
        "SHARE_WECHAT": "使用WeChat扫描二维码"
    };

}(this));

(function(root, $) {
    /* init scroll */
    var $controller = $('#controller'),
        $document = $(document);

    function topBarAppear() {
        var scrollTop = $document.scrollTop();

        // convert js hide/show to class for animated
        // $controller[ scrollTop > 800 ? 'show' : 'hide']();
        if (scrollTop > 800) {
            $controller.addClass('show');
        } else {
            $controller.removeClass('show');
        }
    };

    /* for browser cache position */
    $(window).scroll(topBarAppear);
    topBarAppear();

    /* */
    var shareBtnHtml = $('#main-share-btns').html();
    $('.clone-share-btns').each(function() {
        $(this).html(shareBtnHtml);
    });

    function hideOverlay() {
        $('.overlay').removeClass('show');
    }

    $('.share-wechat').click(function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var $overlay = $(this).children('.overlay');
        if ($overlay.hasClass('show')) {
            $overlay.removeClass('show');
            $('body').off('click', hideOverlay);
        } else {
            $overlay.addClass('show');
            $('body').on('click', hideOverlay);
        }
    });

}(this, jQuery));

(function(root, $) {
    var lang = navigator.language || navigator.userLanguage,
        isChina = lang === 'zh-CN';

    if (location.hash === '#test') {
        isChina = false;
        return;
    }

    function addChinaClass() {
        $('body').addClass('zh-CN');
    }

    function renderChinaText() {
        var text = root.i18n['zh-CN'] || {};

        $('.i18n').each(function() {
            var $dom = $(this),
                key = $dom.data('i18n-key'),
                val = text[key];

            if (val) {
                $dom.html(val);
            }
        });
    }

    function renderChinaImg() {
        $('.i18n-img').each(function() {
            var $dom = $(this),
                imgSrc = $dom.data('src-zh-cn');
            $dom.attr('src', imgSrc);
        });
    }

    function setupChinaVideo() {
        var $video = $('#video');

        $video.children('iframe').attr('src', $video.data('video-china'));
    }

    function initChina() {
        addChinaClass();
        renderChinaText();
        renderChinaImg();
        setupChinaVideo();
    }

    if (isChina) {
        initChina();
    } else {
        $.ajax({
            url: 'http://api.facebook.com/restserver.php',
            timeout: 1000
        }).fail(function() {
            /* if user is in China, then polyfill to youku */
            initChina();
        }).done(function() {
            //alert('you are free!!');
        });
    }

}(this, jQuery));

(function(root, $) {

    var isMobile = $(window).width() < 1024 || (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true;})(navigator.userAgent||navigator.vendor||window.opera);

    if (!isMobile) {
        $.getScript('http://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.29/skrollr.min.js')
            .done(function() {
                skrollr.init();
            });
    }

}(this, jQuery));
