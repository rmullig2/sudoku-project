class Api::V1::GamesController < ApplicationController
  def create
    game = Games.new()
    render json: game
  end
end