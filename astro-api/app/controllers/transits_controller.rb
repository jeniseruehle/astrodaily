class TransitsController < ApplicationController
    
    def index
        transits = Transit.all.order_by_date
        render json: transits.to_json(except: [:created_at, :updated_at])
    end

    def create
        transit = Transit.new(transit_params)
        if transit.save
            render json: transit.to_json(except: [:created_at, :updated_at])
        else
            render json: {message: "error: transit did not save!"}
        end
    end

    private

    def transit_params
        params.require(:transit).permit(:title, :event, :focus, :mood, :journal, :date)
    end
end
