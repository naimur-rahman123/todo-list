$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (e) {
    //stops the event from bubbling up from child to parent elements
    e.stopPropagation();

    //removes the parent element of the 'span' which is 'li' after the fadeout
    $(this)
        .parent()
        .fadeOut(500, function () {
            $(this).remove();
        });
});

$('input[type="text"]').on('keypress', function (e) {
    if (e.which === 13) {
        //grabbing new to-do text from input
        var textValue = $(this).val();
        //creating a new li and add it to the ul
        $('ul').append(
            `<li><span><img src="assets/icons/trash-solid.svg"></span> ${textValue}</li>`
        );
        //clearing the input
        $(this).val('');
    }
});

$('h1 img').on('click', function () {
    $('input[type="text"]').fadeToggle(400);
});
