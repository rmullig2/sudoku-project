class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end
  
  def create
    @user = User.create(name: params[:name])
    render @user
  end
  
  def show
    @user = User.find_by_slug(params[:name])
    render @user
  end
end
