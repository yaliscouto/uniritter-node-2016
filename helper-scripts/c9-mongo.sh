#!/usr/bin/env bash

mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --smallfiles --rest "$@"' > mongod
chmod a+x mongod
echo "setup complete. now you have a mongod script to start your mongo db"