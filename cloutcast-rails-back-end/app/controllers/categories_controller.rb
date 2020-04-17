class CategoriesController < ApplicationController
    
    def index
        @Categories = Category.all
        render json: @Categories
    end
    
    def create
        @category = Category.create(params[:category_params])
        render json: @category
    end

    private
    def category_params
        params.require(:category_tag).permit(:category_id,:name)
    end
    
end
