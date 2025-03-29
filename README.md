```bash
# Install Ruby
rbenv install 3.4.2
rbenv global 3.4.2

# Install Rails
gem install rails

# Create a new Rails app
rails new --javascript esbuild --css tailwind esbuild-react

bin/dev
```

```bash
# Create a demo page
rails g controller statics show
```

```bash
# Build assets
# by doing this, you can see the assets in /app/assets/builds compiled from /app/javascript, /app/stylesheets or /app/images
npm run build

# Precompile assets
# by doing this, you can see the assets in /public/assets compiled from /app/assets/builds
rails assets:precompile

# Remove all assets
rails assets:clobber
```