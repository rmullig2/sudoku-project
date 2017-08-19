class Api::V1::UsersController < ActionController::TestCase
  def index
    users = User.all
    render json: users
  end
  
  def create
  end
  
  def show
  end
end
