class TagsController < ApplicationController
    def create
        Tag.create(params[:tag_params])
        render json: @Tag
    end

    private
    def tag_params
        params.require(tag:).permit(:name)
    end
end
