class MessagesController < ApplicationController
  def new
    @message = Message.new()
  end

  def create
    @message = Message.new(message_params)
    # @message.save
    if @message.save
      respond_to do |format|
        # format.html { redirect_to root_url }
        format.json { render json: @message }
      end
    end
  end

  private

    def message_params
      params.require(:message).permit(:message)
    end

end
