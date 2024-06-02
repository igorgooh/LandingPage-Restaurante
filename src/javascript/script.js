$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2600,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testemunhos_chef', {
        origin: 'left',
        duration: 2600,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'width',
        duration: 2000,
        distance: '25%'
    });

    $(document).ready(function(){
        let currentIndex = 0;
        const items = $('.carousel-item');
        const itemCount = items.length;
    
        function showItem(index) {
            const transformValue = -index * 100 + '%';
            $('.carousel-inner').css('transform', 'translateX(' + transformValue + ')');
            items.removeClass('active').eq(index).addClass('active');
        }
    
        $('.next').click(function() {
            currentIndex = (currentIndex + 1) % itemCount;
            showItem(currentIndex);
        });
    
        $('.prev').click(function() {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            showItem(currentIndex);
        });
    });
});