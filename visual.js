(function(){
  $(document).ready(init);

  function init (){
    $('.hovername').hover(function(){
      $(this).find('h3').toggle();
    });

  }
})();
