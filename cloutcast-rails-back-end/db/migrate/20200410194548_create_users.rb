class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :city
      t.integer :zip
      t.string :website
      t.string :image_url
      t.string :social_media
      t.string :password

      t.timestamps
    end
  end
end
