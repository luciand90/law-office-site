$('.btn-toggle').click(function() {
    var currentLanguage = $(this).find('.btn-primary').text();
    if(currentLanguage === 'RO') {
        window.location = 'under-construction.html';
    }
    // $(this).find('.btn').toggleClass('active');
    // console.log($(this).find('.btn-primary').text());
    // if ($(this).find('.btn-primary').length > 0) {
    //     $(this).find('.btn').toggleClass('btn-primary');
    // }
    //
    // $(this).find('.btn').toggleClass('btn-default');
    // $.get('messages_' + $('.active').text() + '.json',function(data){
    //     for(var key in data) {
    //         if(data.hasOwnProperty(key)) {
    //             $('.' + key).html(data[key]);
    //         }
    //     }
    // });

});
