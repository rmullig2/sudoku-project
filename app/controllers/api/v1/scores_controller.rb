class Api::V1::ScoresController < ApplicationController
  def index
    scores = Score.order(time: :asc).limit(10)
    render json: scores
  end
  
  def create
    score = Score.create!(name: params[:name], time: params[:time], likes: 0)
    render score
  end
  
  def update
    score = Score.find(params[:id]);
    !score.likes ? score.likes = 1 : score.likes += 1
    score.save
    render json: score
  end
end
