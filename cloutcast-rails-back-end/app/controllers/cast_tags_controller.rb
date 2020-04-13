class CastTagsController < ApplicationController
    def create
        CastTag.create(params[:cast_tag_params])
         render json: @cast_tag
    end

    private
    def cast_tag_params
        params.require(cast_tag:).permit(:cast_id, :tag_id)
    end
end
