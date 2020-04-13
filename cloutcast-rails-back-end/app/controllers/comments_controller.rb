class CommentsController < ApplicationController
    
    def create
        Comment.create(params[:comment_params])
        render json: @comment
    end

    private
    def comment_params
        params.require(comment_tag:).permit(:content, :user_id, :cast_id)
    end
end
