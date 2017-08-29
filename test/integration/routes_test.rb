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
    assert_routing({ path: 'api/v1/users/:name', method: :get }, { format: :json, controller: 'api/v1/users', action: 'show', name: ":name" })
  end

  test "games_index_test" do
    assert_routing({ path: 'api/v1/users/:user_name/games', method: :get }, { format: :json, controller: 'api/v1/games', action: 'index', user_name: ":user_name" })
  end
  test "games_create_test" do
    assert_routing({ path: 'api/v1/users/:user_name/games', method: :post }, { format: :json, controller: 'api/v1/games', action: 'create', user_name: ":user_name" })
  end
  test "games_show_test" do
    assert_routing({ path: 'api/v1/users/:user_name/games/:id', method: :get }, { format: :json, controller: 'api/v1/games', action: 'show', user_name: ":user_name", id: ":id" })
  end
  test "high_scores" do
    assert_routing({ path: 'api/v1/high_scores', method: :get }, { format: :json, controller: 'api/v1/games', action: 'high' })
  end
end
