class CastsController < ApplicationController
    
    def index
        @casts = Cast.all
        render json: @casts
    end
    
    def create
        @cast = Cast.create(cast_params)
        
        render json: @cast
    end

    private
    def cast_params
        params.require(:cast).permit(:cast_id,:description, :image_url, :video_url, :social_media, :clout, :views, :user_id, :category_id)
    end
end
