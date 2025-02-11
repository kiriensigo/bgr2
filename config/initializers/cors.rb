Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000' # Next.jsの開発サーバーのURL
    resource '*',
             headers: :any,
             expose: ['access-token', 'uid', 'client'],
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end 