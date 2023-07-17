$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    const nomeNovaTarefa = $('#nova_tarefa').val();
    const novoItem = $('<li></li>').text(nomeNovaTarefa);
    $(novoItem).appendTo('ul')

    $('#nova_tarefa').val('');
  })

  $('ul').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
  });

})