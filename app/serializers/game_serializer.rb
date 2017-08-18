class GameSerializer < ActiveModel::Serializer
  attributes :id, :start, :current_state, :score, :moves, :level, :user_id
end
