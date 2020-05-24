class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user)
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      respond_to do |format|
        format.json
      end
    else
    render :index
    end
  end

  private
  def post_params
    params.require(:post).permit(:text).merge(user_id: current_user.id)
  end
end
