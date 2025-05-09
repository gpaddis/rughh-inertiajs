class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /comments
  def index
    @comments = Comment.all
    render inertia: 'Comment/Index', props: {
      comments: @comments.map do |comment|
        serialize_comment(comment)
      end
    }
  end

  # GET /comments/1
  def show
    render inertia: 'Comment/Show', props: {
      comment: serialize_comment(@comment)
    }
  end

  # GET /comments/new
  def new
    @comment = Comment.new
    render inertia: 'Comment/New', props: {
      comment: serialize_comment(@comment)
    }
  end

  # GET /comments/1/edit
  def edit
    render inertia: 'Comment/Edit', props: {
      comment: serialize_comment(@comment)
    }
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      redirect_to @comment, notice: "Comment was successfully created."
    else
      redirect_to new_comment_url, inertia: { errors: @comment.errors }
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      redirect_to @comment, notice: "Comment was successfully updated."
    else
      redirect_to edit_comment_url(@comment), inertia: { errors: @comment.errors }
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy!
    redirect_to comments_url, notice: "Comment was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:post_id, :body)
    end

    def serialize_comment(comment)
      comment.as_json(only: [
        :id, :post_id, :body
      ])
    end
end
