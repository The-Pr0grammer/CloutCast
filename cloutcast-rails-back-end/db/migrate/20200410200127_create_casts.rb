class CreateCasts < ActiveRecord::Migration[6.0]
  def change
    create_table :casts do |t|
      t.string :description
      t.string :image_url
      t.string :video_url
      t.string :category
      t.string :social_media
      t.integer :clout
      t.integer :views
      t.integer :user_id

      t.timestamps
    end
  end
end
