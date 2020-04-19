class CastSerializer
    include FastJsonapi::ObjectSerializer
  attributes :created_at,:cast_id,:description, :image_url, :video_url, :social_media, :clout, :views, :user_id, :category_id
  belongs_to :user
  has_one :category
end
