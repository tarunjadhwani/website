
$(function() {
  $('.jigsaw1').draggable({
    snap: '.dropzone',
    snapMode: 'inner'
  });
  $('.dropzone').droppable({
    drop: function( event, ui ) {
      $('.dropzone, .jigsaw1, .jigsaw2').addClass('disnone')
      $('.submit').removeClass('disnone')
      $('.submit').addClass('pulse')
    }
  });
  $('.jigsaw1').select(function(){
    // debugger
    $('.jigsaw1').focus();
    var e = $.Event('keypress');
    e.keyCode = 13; // Enter key
    $('.jigsaw1').trigger(e);
  });
  $('.jigsaw1').keypress(function(e){
    if (e.keyCode == '13') {
      $('.jigsaw1').simulate('drag', {dx: -132});
      $('.submit').focus();
    }
  });

});