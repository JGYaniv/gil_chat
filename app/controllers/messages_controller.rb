class MessagesController < ApplicationController
  def new
    @message = Message.new()
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_url
    else
      render json: @messages.erorrs.full_messages
    end
  end

  def index
    render json: Message.all
  end

  private

    def message_params
      params.require(:message).permit(:message)
    end

end
