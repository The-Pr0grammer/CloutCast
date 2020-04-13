class Tag < ApplicationRecord
    has_many :cast_tags
    has_many :casts, through: :cast_tags
end
