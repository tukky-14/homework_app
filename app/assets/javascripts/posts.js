$(function(){
  function buildHTML(message) {
    var html =
      `<div class="messages__box">
        <div class="messages__box__text">
          ${message.text}
        </div>
        <ul class="messages__box__info">
          <li>
            ${message.user_name}
          </li>
          <li>
            ${message.created_at}
          </li>
        </ul>
      </div>`
      return html
  }

  $('#new-post').on('submit', function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({ 
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done (function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset(); $(".messages").animate({
        scrollTop: $(".messages")[0].scrollHeight,
      });
    })
    .fail(function() {
      alert('error');
    })
  })
});