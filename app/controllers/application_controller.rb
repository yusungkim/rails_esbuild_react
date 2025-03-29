class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  rescue_from ActionView::MissingTemplate do |exception|
    render status: :not_found, plain: "Page Not Found"
  end
end
