module Api
  module V1
    class PasswordsController < ApplicationController
      def forgot
        user = User.find_by(email: params[:email])
        if user
          # パスワードリセットトークンを生成してメール送信
          render json: { message: 'Password reset instructions sent' }, status: :ok
        else
          render json: { error: 'Email not found' }, status: :not_found
        end
      end

      def reset
        user = User.find_by(reset_token: params[:token])
        if user&.update(password: params[:password])
          render json: { message: 'Password has been reset' }, status: :ok
        else
          render json: { error: 'Invalid token or password' }, status: :unprocessable_entity
        end
      end
    end
  end
end 