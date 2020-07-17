# Storyline

This is a React-Redux project that allows for users to plan out stories and allows other uses to comment on the stories and characters that other uses have created. Storyline utilizes a Rails API backend with Rails sessions for user authentication to ensure security for user logins. To see the Rails API for Storyline, [click here](https://github.com/OccassionalDev/storyline-api-fixed).

# Installation and Usage

To install Storyline, fork and clone this repo along with the [Rails API](https://github.com/OccassionalDev/storyline-api-fixed), on the API, run `bundle install` to install necessary gems, `rails db:migrate` and `rails db:seed` to take care of the database, and run `rails s` to start up the API on port 3001.

After taking care of the Rails API installation, run `npm start` to begin running Storyline. To use Storyline, create or log in with one of the already created accounts in the database to begin working with project.

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/OccassionalDev/storyline. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.
