class CreateSavedCasts < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_casts do |t|
      t.integer :user_id
      t.integer :cast_id

      t.timestamps
    end
  end
end
