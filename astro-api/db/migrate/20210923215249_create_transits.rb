class CreateTransits < ActiveRecord::Migration[6.0]
  def change
    create_table :transits do |t|
      t.string :title
      t.string :event
      t.string :sign
      t.string :focus
      t.string :mood
      t.string :journal
      t.date :date

      t.timestamps
    end
  end
end
