window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots:'.carrousel__indicadores',
        arrows: {
            prev: '.carrousel__prev',
            next: '.carrousel__next'
        },
        responsive: [
            {
                breakpoint: 700,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                breakpoint: 1160,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    })
})