class Api::V1::UsersController < ApplicationController
  def index
    users = { id: "test" }
    render json: users
  end
end
