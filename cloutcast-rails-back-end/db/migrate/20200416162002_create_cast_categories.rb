class CreateCastCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :cast_categories do |t|
      t.integer :cast_id
      t.integer :category_id

      t.timestamps
    end
  end
end
