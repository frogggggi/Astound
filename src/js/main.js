$('.share-btn').on('click', function(e) {
    e.preventDefault();
    $('.share-box-list').toggleClass('active');
});
$('.share-box-list span').on('click', function(e) {
    e.preventDefault();
    $('.share-box-list').removeClass('active');
});
$('.item-subtitle .size_item').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});
$('.item-subtitle .color_item').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});
$('.star-box .st-star').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('checked').prevAll().addClass('checked');
    $(this).nextAll().removeClass('checked');
});



var indexSlider = 0;
$('.nav').on('click',' .prev, .next', function() {
    var allItems = $('.flex .item');
    if ($(this).hasClass('next')) {
        indexSlider++;
        indexSlider = (indexSlider > allItems.length - 1) ? 0 : indexSlider;
    }
    if ($(this).hasClass('prev')) {
        indexSlider--;
        indexSlider = (indexSlider < 0) ? allItems.length - 1 : indexSlider;
    }
    allItems.removeClass('active');
    allItems.eq(indexSlider).addClass('active');
});



if ($(window).width() < 768) {
    $('.flex .item').first().addClass('active');
}


$(window).on("resize", function(event){
    if ($(this).width() < 768) {
        $('.flex .item').first().addClass('active');
    }else{
        $('.flex .item').first().removeClass('active');
    }
});
