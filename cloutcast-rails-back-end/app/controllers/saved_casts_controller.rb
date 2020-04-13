class SavedCastsController < ApplicationController
     def create
        SavedCast.create(params[:saved_cast_params])
        render json: @SavedCast
    end

    private
    def saved_cast_params
        params.require(saved_cast_tag:).permit(:user_id, :cast_id)
    end
end
