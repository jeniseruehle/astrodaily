class RemoveSignFromTransits < ActiveRecord::Migration[6.0]
  def change
    remove_column :transits, :sign, :string
  end
end
