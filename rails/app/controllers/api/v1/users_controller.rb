module Api
  module V1
    class UsersController < ApplicationController
      def create
        user = User.new(user_params)
        if user.save
          render json: { data: user }, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        user = User.find(params[:id])
        render json: { data: user }
      end

      def update
        user = User.find(params[:id])
        if user.update(user_params)
          render json: { data: user }
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def reviews
        user = User.find(params[:id])
        reviews = user.reviews
        render json: { data: reviews }
      end

      def stats
        user = User.find(params[:id])
        stats = {
          review_count: user.reviews.count,
          average_score: user.reviews.average(:overall_score)
        }
        render json: { data: stats }
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :username, :bio)
      end
    end
  end
end 