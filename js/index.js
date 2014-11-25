(function(root) {
    if (!root.i18n) {
        root.i18n = {};
    }

    root.i18n['zh-CN'] = {
        "BANNER": "SCENT 是利用数据服务来提供你多样的气味选择, 并可以透过气味混合器来位不同场合, 创造属于自己或独一无二的味道",
        "VOTE_US": "投我们一票",
        "SCENE_TITLE": "时时对味",
        "SCENE_DESC": "产品包含硬件混合器, 数千种不同香味基底油与香味瓶来让你自己混出多种味道。同时也提供专家或用户推荐的香味方程式数据服务, 让用户可以快速选择适合自己或场合的香味",
        "MIX_STEP1": "放上SCENT 空瓶",
        "MIX_STEP2": "依照你选择的喜好自动混合并填",
        "SMELL_TITLE": "嗅觉是人的基础感知",
        "SMELL_DESC": "人类的嗅觉在生物学上非常重要, 它可以留在我们记亿，也可成为沟通信号，潜意识里影响人的情绪跟行为。我们并没意是到它的重要，但它却显著的影响着我们生活，在商业上， 也不如视觉、 听觉或触觉在商品化上多有满足， 我们的产品“ SCENT” 目的是要填补这块需求的空缺 ",
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
        "OUR_TEAM": "多元的团队组合"
    };

}(this));

(function(root, $) {
    var $controller = $('#controller');
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        $controller[ scrollTop > 800 ? 'show' : 'hide']();
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

    function setupChinaVideo() {
        var $video = $('#video');

        $video.children('iframe').attr('src',  $video.data('video-china'));
    }

    function initChina() {
        addChinaClass();
        renderChinaText();
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
