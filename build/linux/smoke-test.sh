#!/bin/bash
deployedSystemUrl=$1
httpCode=$(curl -s -o /dev/null -w '%{http_code}' $deployedSystemUrl)

if [ $httpCode = "200" ]
then
    echo "Successfully issued request to $deployedSystemUrl"
    exit 0
else
    echo "Received unsuccessful status code on request to $deployedSystemUrl"
    exit -1
fi
