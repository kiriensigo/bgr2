module Api
  module V1
    class SearchController < ApplicationController
      def index
        games = Game.where('name LIKE ?', "%#{params[:query]}%")
        render json: { data: games }
      end
    end
  end
end 