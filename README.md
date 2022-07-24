# Gift App

[![Ruby on Rails CI](https://github.com/laamp/gift_app/actions/workflows/rubyonrails.yml/badge.svg)](https://github.com/laamp/gift_app/actions/workflows/rubyonrails.yml) [![NodeJS with Webpack](https://github.com/laamp/gift_app/actions/workflows/webpack.yml/badge.svg)](https://github.com/laamp/gift_app/actions/workflows/webpack.yml)

### Dependencies

- ruby -- 3.1.2 (marked as at least 3.1.0 for CI configuration)
- rails -- 7.0.3
- postgres -- 14.3

### Steps to run

1. bundle install
1. yarn install
1. foreman start

### Running Postgres with WSL2

1. sudo mkdir -p /run/postgresql
1. sudo chown -R postgres:postgres /run/postgresql
1. sudo -iu postgres
1. pg_ctl -D /var/lib/postgres/data start
