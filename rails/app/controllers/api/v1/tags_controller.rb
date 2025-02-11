module Api
  module V1
    class TagsController < ApplicationController
      def index
        tags = Tag.all
        render json: { data: tags }
      end

      def create
        tag = Tag.new(tag_params)
        if tag.save
          render json: { data: tag }, status: :created
        else
          render json: { error: tag.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        tag = Tag.find(params[:id])
        tag.destroy
        render json: { message: 'Tag deleted' }, status: :ok
      end

      private

      def tag_params
        params.require(:tag).permit(:name)
      end
    end
  end
end 