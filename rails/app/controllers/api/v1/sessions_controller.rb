module Api
  module V1
    class SessionsController < ApplicationController
      def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          token = encode_token({ user_id: user.id })
          render json: { token: token }, status: :ok
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end

      def destroy
        # ログアウトのロジック（トークンの無効化など）
        render json: { message: 'Logged out' }, status: :ok
      end

      def google_oauth2
        # Googleログインコールバックのロジック
      end

      def twitter
        # Twitterログインコールバックのロジック
      end
    end
  end
end 