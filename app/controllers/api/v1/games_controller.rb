class Api::V1::GamesController < ApplicationController
  def index
    user = User.find_by_slug(params[:name])
    games = user.games
    render json: games
  end
  
  def create
    user = User.find_by_slug(params[:name])
    game = user.games.create({level: params[:level]})
    render json: game
  end
  
  def show
    user = User.find_by_slug(params[:name])
    game = user.games.find(params[:id])
    render json: game
  end
  
  def update
    user = User.find_by_slug(params[:name])
    game = user.games.find(params[:id])
    game.current = params[:current_state]
    game.save
  end
  
  def high
    games = Game.all
    render json: games
  end
end