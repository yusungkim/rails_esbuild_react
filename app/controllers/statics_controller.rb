class StaticsController < ApplicationController
  def show
    render safe_template_name
  end

  private

  def safe_template_name
    params[:id].gsub(/[^a-zA-Z0-9_]/,"")
  end
end