class Categorie < ApplicationRecord 
    has_many :cast_categories
    has_many :casts, through: :cast_categories
end