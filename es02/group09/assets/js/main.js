$(document).ready(() => {
    // Menu buttons behaviours
    $('.btn--burger').on('click', (event) => {
        let $el = $(event.currentTarget);
        let pressed = ($el.attr('aria-pressed') === 'true');
        $el.attr('aria-pressed', !pressed);
        $el.addClass('nav--open');
        $('nav, body, .btn--close').addClass('nav--open');
    });
    $('.btn--close').on('click', (event) => {
        let $el = $(event.currentTarget);
        let pressed = ($el.attr('aria-pressed') === 'true');
        $el.attr('aria-pressed', !pressed);
        $el.removeClass('nav--open');
        $('nav, body, .btn--burger').removeClass('nav--open');
    });

    // Navigation images behaviours
    $('.index__item').on('mouseenter', (event) => {
        let $el = $(event.currentTarget);
        let index = $el.index() + 1;
        let image = '.nav__background-image:nth-of-type(' + index + ')';
        $('.nav__background-image').removeClass('image--shown');
        $(image).addClass('image--shown');
    }).on('mouseleave', (event) => {
        $('.nav__background-image').removeClass('image--shown');
    })
})
