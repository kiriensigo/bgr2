module Api
  module V1
    class ReviewsController < ApplicationController
      def index
        game = Game.find(params[:game_id])
        reviews = game.reviews
        render json: { data: reviews }
      end

      def create
        game = Game.find(params[:game_id])
        review = game.reviews.new(review_params.merge(user: current_user))
        if review.save
          render json: { data: review }, status: :created
        else
          render json: { error: review.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        review = Review.find(params[:id])
        if review.update(review_params)
          render json: { data: review }
        else
          render json: { error: review.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: { message: 'Review deleted' }, status: :ok
      end

      def like
        review = Review.find(params[:id])
        like = review.likes.new(user: current_user)
        if like.save
          render json: { message: 'Liked' }, status: :ok
        else
          render json: { error: 'Unable to like' }, status: :unprocessable_entity
        end
      end

      def unlike
        review = Review.find(params[:id])
        like = review.likes.find_by(user: current_user)
        if like&.destroy
          render json: { message: 'Unliked' }, status: :ok
        else
          render json: { error: 'Unable to unlike' }, status: :unprocessable_entity
        end
      end

      private

      def review_params
        params.require(:review).permit(:overall_score, :play_time, :rule_complexity, :luck_factor, :interaction, :downtime, :short_comment)
      end
    end
  end
end 