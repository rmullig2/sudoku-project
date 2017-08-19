class Api::V1::GamesController < ApplicationController
  def index
  end
  
  def create
  end
  
  def show
  end
  
  def update
  end
  
  def high
    games = Game.all
    render json: games
  end
end