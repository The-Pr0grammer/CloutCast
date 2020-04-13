class UsersController < ApplicationController
    def create
        User.create(params[:user_params])
        render json: @User
    end

    private
    def user_params
        params.require(user:).permit(:name, :city, :zip, :website, :image_url, :social_media, :password)
    end
end
