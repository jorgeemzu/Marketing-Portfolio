let tl = gsap.timeline({defaults: {ease: 'power1.out'}});


 tl.to('.anim__h1', {opacity: 1, duration: 0.5})
 tl.to('.anim__h1', {opacity: 0, duration: 0.5, delay: 3})
 tl.to('.bg__green', {x:'-200%', duration: 1.5, }) 
 tl.to('.bg__black', {x:'200%', duration: 1.5}, "-=1.5")
 tl.to('.logo__anim',{ x:'-50%', y:'-50%', duration: 2,},"-=3" )
 tl.to('.logo__anim',{scale:1, opacity: 1, duration: 2},"-=1")
 tl.to('.logo__anim',{opacity: 0, duration: 2}, "+=1")
tl.from('.hero__text h1',{x: '-40px', opacity: 0, duration: 1})
tl.from('.hero__text p',{x: '-40px', opacity: 0, duration: 1})
tl.from('.btn',{x: '-40px', opacity: 0, duration: 0.5})
tl.from('.hero__img',{x: '40px', opacity: 0, duration: 1}, "-=3")
tl.from('nav',{y: '-40px', opacity: 0, duration: 1, delay: 0.5})
tl.to('.nav__menu', {opacity:1})
 tl.to('.bg__green', {scale: 0, duration: 1, } )
 tl.to('.bg__black', {scale: 0, duration: 1, } )
 tl.to('.anim__bg', {scale: 0, duration: 1, } )

tl.set('.hero__img', {clearProps: 'all'});
tl.set('.hero__text h1', {clearProps: 'all'});
tl.set('.hero__tet p', {clearProps: 'all'});
tl.set('.btn', {clearProps: 'all'});
tl.set('nav', {clearProps: 'all'});