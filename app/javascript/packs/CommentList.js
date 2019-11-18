const CommentList = function(el){
  this.$el = $(el);
  this.$form = $('form');
  this.$comments = $('ul');

  this.refresh(this.$comments);
};

CommentList.prototype.refresh = function($comments){
  console.log('refresh');
  setInterval(function () {
    $.ajax({
      url: "/messages",
      type: "GET",
      success: function (data) {
        if (data.length != $('li').length) {
          console.log('success')
          const comments = data.map(el => el.message);
          const mappedComments = comments.map(el => $(`<li>${el}</li>`))
          $comments.html(mappedComments);
        }

      }
    });
  }, 5000);
};

module.exports = CommentList;
