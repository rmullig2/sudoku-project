require 'test_helper'
require "action_controller/railtie"

class RoutesTest < ActionDispatch::IntegrationTest
  test "users_index_test" do
    assert_routing({ path: 'api/v1/users', method: :get }, { controller: 'api/v1/users', action: 'index', format: :json })
  end
  test "users_create_test" do
    assert_routing({ path: 'api/v1/users', method: :post }, { controller: 'api/v1/users', action: 'create', format: :json })
  end
end





#api_v1_users GET    /api/v1/users(.:format)       api/v1/users#index {:format=>:json}
#             POST   /api/v1/users(.:format)       api/v1/users#create {:format=>:json}
# api_v1_user GET    /api/v1/users/:slug(.:format) api/v1/users#show {:format=>:json}
#             PATCH  /api/v1/users/:slug(.:format) api/v1/users#update {:format=>:json}
#             PUT    /api/v1/users/:slug(.:format) api/v1/users#update {:format=>:json}
#             DELETE /api/v1/users/:slug(.:format) api/v1/users#destroy {:format=>:json}
