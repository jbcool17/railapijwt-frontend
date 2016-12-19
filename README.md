# rails-api-w-jwt-frontend

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> demonstrating FrontEnd Frameworks; Json Web Token Creation/Authentication

This project utilizes a [Rails 5 API](https://github.com/jbcool17/railsapijwt/) for the backend and a jekyll site generator to compile various mini sites using JS FrontEnd Frameworks(React) via custom rake tasks. The purpose of this is to learn about APIs and Javascript Front-End Frameworks.

## Table of Contents

- [Development](#development)
- [Usage](#usage)
- [Specs](#specs)
- [Styles](#styles)
- [License](#license)
- [How To - JWT Creation / Authentication via React App](#how-to)

## Development
- follow these instructions or run the following script:

```
# Setup Project
rake setup:project
```

```
# Rails API Setup
# https://github.com/jbcool17/railsapijwt/
```

```
# Static Site Generator - Jekyll - this will contain the mini sites
$ bundle
```

```
# React Mini Sites - work done from '_client' folder
$ cd _clients/<PROJECT> && npm install
```

## Usage
### For Development - Static Sites
```
# Start Rails API Server First
# React Mini Sites - Work with Directly
cd _clients/<PROJECT> && npm start

# Jekyll - Main Site - Hosting Mini Sites
# Run rake task to build all mini sites first
$ rake build:all

# http://localhost:4000
$ jekyll serve

```
### Deploy
```
# When ready to deploy run:
$ rake build:all
$ rake deploy:ghpages     # Deploy Site to Github Pages
```

### Other
```
# Build Helpers
rake build:all          # Builds & deploys all sites to public folder
rake build:credentials  # Build credentials react site and copies to root credentials folder
rake build:hockey       # Build hockey api react site and copies to root hockey folder
rake build:jekyll       # Builds Jekyll Site to _site folder
```

## Specs
- Ruby v2.3.1
- Jekyll Gem
- Uses npm for js frontend

## Styles
- hmmm...

## License

MIT © John Brilla

# How To
## JWT Creation / Authentication via React App
- Check the browser console for status messages

### 1 - Sign Up - with Email/Password/Password Confirmation
- this gives you a confirmation link that would normally get sent out via email.

![Step 2](https://floating-tor-40582.herokuapp.com/images/021.png)
![Step 3](https://floating-tor-40582.herokuapp.com/images/031.png)

### 2 - Click Confirm
![Step 4](https://floating-tor-40582.herokuapp.com/images/041.png)

### 3 - Login - Enter credentials from above, after confirmation complete.
![Step 6](https://floating-tor-40582.herokuapp.com/images/061.png)

### 4 - Current user should have the email.
- JWT should be in the console.
![Step 7](https://floating-tor-40582.herokuapp.com/images/071.png)

### 5 - Click 'Get All Beer' to get data
![Step 8](https://floating-tor-40582.herokuapp.com/images/081.png)
