module Api
  module V1
    class MechanicsController < ApplicationController
      def index
        mechanics = Mechanic.all
        render json: { data: mechanics }
      end

      def create
        mechanic = Mechanic.new(mechanic_params)
        if mechanic.save
          render json: { data: mechanic }, status: :created
        else
          render json: { error: mechanic.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        mechanic = Mechanic.find(params[:id])
        mechanic.destroy
        render json: { message: 'Mechanic deleted' }, status: :ok
      end

      private

      def mechanic_params
        params.require(:mechanic).permit(:name)
      end
    end
  end
end 