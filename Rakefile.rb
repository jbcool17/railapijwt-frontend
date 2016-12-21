namespace :setup do
  desc "Setup Project: Jekyll / React Mini Sites"
  task :project do
    sh "scripts/setup_project.sh"
  end
end

namespace :build do
  desc "Builds & deploys all sites to public folder"
  task :all do
    sh "scripts/build_all.sh"
  end
  desc "Build credentials react site and copies to root credentials folder"
  task :credentials do
    sh "scripts/build_credentials.sh"
  end
  desc "Build hockey api react site and copies to root hockey folder"
  task :hockey do
    sh "scripts/build_hockey.sh"
  end
  desc "Build Graphs"
  task :graphs do
    `cp -pvr ./_clients/graphs .`
  end
  desc "Builds Jekyll Site to _site folder"
  task :jekyll do
    sh "scripts/build_jekyll.sh"
  end
end

namespace :deploy do
  desc "Deploy Site to Github Pages"
  task :ghpages do
    sh "scripts/deploy_ghpages.sh"
  end
end
