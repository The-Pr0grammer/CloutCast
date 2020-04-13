class User < ApplicationRecord
    has_many :saved_casts
    has_many :casts
    has_many :comments
end
