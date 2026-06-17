/* NOVO LAVAN — interações */
(function(){
  'use strict';

  // Nav: fundo ao rolar
  var nav = document.getElementById('nav');
  var onScroll = function(){
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  // Menu mobile
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');
  if(burger && links){
    burger.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }

  // Scroll reveal + gauge
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        if(e.target.id === 'gauge') e.target.classList.add('on');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.16, rootMargin:'0px 0px -8% 0px'});

  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  var gauge = document.getElementById('gauge');
  if(gauge) io.observe(gauge);

  // Ano dinâmico (caso exista marcador)
  document.querySelectorAll('[data-year]').forEach(function(el){
    el.textContent = new Date().getFullYear();
  });
})();
