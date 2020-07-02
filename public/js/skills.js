var skills = {
    ht: 90,
    cs: 80,
    bts: 75,
    my: 70,
    ph: 70,
    jq: 70,
    js: 75,
    lv: 50,
    ag: 70,
    op: 100,
    wn: 95,
    ln: 70,
    vs: 90,
    gt: 80,
    jr: 80,
    ch: 75
};

$.each(skills, function (k, v) { 
    var skillbar = $('.' + k);

    skillbar.animate({
        width: v + "%"
    }, 
    3000,
    function() { 
        $(".speech-bubble").fadeIn();
    });
});