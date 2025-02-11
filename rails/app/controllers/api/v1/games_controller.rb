module Api
  module V1
    class GamesController < ApplicationController
      def index
        games = Game.all
        render json: { data: games }
      end

      def show
        game = Game.find(params[:id])
        render json: { data: game }
      end

      def create
        game = Game.new(game_params)
        if game.save
          render json: { data: game }, status: :created
        else
          render json: { error: game.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        game = Game.find(params[:id])
        if game.update(game_params)
          render json: { data: game }
        else
          render json: { error: game.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        game = Game.find(params[:id])
        game.destroy
        render json: { message: 'Game deleted' }, status: :ok
      end

      def stats
        game = Game.find(params[:id])
        stats = {
          review_count: game.reviews.count,
          average_score: game.reviews.average(:overall_score)
        }
        render json: { data: stats }
      end

      private

      def game_params
        params.require(:game).permit(:name, :description, :min_players, :max_players, :play_time, :age, :publisher, :designer, :year_published)
      end
    end
  end
end 