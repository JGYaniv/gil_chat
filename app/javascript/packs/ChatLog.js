var ChatLog = function ($el){
  this.$messages = $el.find('ul');
  this.$form = $el.find('form');
  this.$form.on("submit", this.submitMessage.bind(this))
};

ChatLog.prototype.submitMessage = function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/messages",
    dataType: "json",
    data: this.$form.serialize(),
    success: function(message){
      var $message = $('<li>').text(`${message.created_at}: ${message.message}`);
      alert($message);
      // this.$messages.append($message);
    }.bind(this)
  });
};

module.export = ChatLog;
