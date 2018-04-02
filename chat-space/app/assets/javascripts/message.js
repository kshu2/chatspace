$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var only_text = `<div class="message" data-message-id="${message.id}">
                     <div class="top-content">
                     <div class="top-content__id">
                      ${message.user_name}
                     </div>
                     <div class="top-content__date">
                      ${message.date}
                     </div>
                     </div>
                     <div class="bottom-content">
                     <p class="bottom-content__text">
                      ${message.content}
                     </p>`
    var not_image = `</div></div>`
    var image =  `<img class="bottom-content__image" src=${message.image}>
                  </div>
                </div>`
    if(message.image == null){
      html = only_text + not_image;
    }else{
      html = only_text + image;
    }
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.form_image').val('')
      $('.form__submit').prop("disabled", false)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  })
});
