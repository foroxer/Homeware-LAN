#!/bin/bash

# exec 1>logs/upgrader_`date +%s`.log 2>&1

echo "The upgrader has started.\r\n"

#Pull from the repository
sudo git pull

#Start services
sudo systemctl restart homewareMQTT
sudo systemctl restart homewareTasks
sudo systemctl restart homewareRedis
sudo systemctl restart homeware

echo "\r\The upgrader has finished.\r\n"
