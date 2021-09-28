class Transit < ApplicationRecord
    scope :order_by_date, ->{order("transits.date DESC")}
end
