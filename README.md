# Gift App

### Dependencies
- ruby -- 3.1.2 (marked as at least 3.1.0 for CI configuration)
- rails -- 7.0.3
- postgres -- 14.3

### Setup
1. `bundle install`
1. `bundle exec rails db:setup`
1. `bundle exec rails db:migrate`
1. start backend `bundle exec rails server` (running @ localhost:3000)
