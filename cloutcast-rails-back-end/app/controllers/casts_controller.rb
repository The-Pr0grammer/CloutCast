class CastsController < ApplicationController
    def index
        casts = Cast.all
        render json: @casts
    end
    
    def create
        Cast.create(params[:cast_params])
        render json: @cast
    end

    private
    def cast_params
        params.require(cast_tag:).permit(:description, :image_url, :video_url, :category, :social_media, :clout, :views, :user_id )
    end
end
