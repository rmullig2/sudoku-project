require 'test_helper'
require "action_controller/railtie"

class RoutesTest < ActionDispatch::IntegrationTest
  test "users_index_test" do
    assert_routing({ path: 'api/v1/users', method: :get }, { controller: 'api/v1/users', action: 'index', format: :json })
  end
  test "users_create_test" do
    assert_routing({ path: 'api/v1/users', method: :post }, { controller: 'api/v1/users', action: 'create', format: :json })
  end
    test "users_show_test" do
    assert_routing({ path: 'api/v1/users/:slug', method: :get }, { format: :json, controller: 'api/v1/users', action: 'show', slug: ":slug" })
  end

  test "games_index_test" do
    assert_routing({ path: 'api/v1/users/:user_slug/games', method: :get }, { format: :json, controller: 'api/v1/games', action: 'index', user_slug: ":user_slug" })
  end
  test "games_create_test" do
    assert_routing({ path: 'api/v1/users/:user_slug/games', method: :post }, { format: :json, controller: 'api/v1/games', action: 'create', user_slug: ":user_slug" })
  end
  test "games_show_test" do
    assert_routing({ path: 'api/v1/users/:user_slug/games/:id', method: :get }, { format: :json, controller: 'api/v1/games', action: 'show', user_slug: ":user_slug", id: ":id" })
  end
  test "high_scores" do
    assert_routing({ path: 'api/v1/high_scores', method: :get }, { format: :json, controller: 'api/v1/games', action: 'high' })
  end
end


     #api_v1_high_scores GET   /api/v1/high_scores(.:format)                api/v1/games#high {:format=>:json}
