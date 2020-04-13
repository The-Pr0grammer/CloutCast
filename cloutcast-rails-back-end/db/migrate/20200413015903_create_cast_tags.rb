class CreateCastTags < ActiveRecord::Migration[6.0]
  def change
    create_table :cast_tags do |t|
      t.integer :cast_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
