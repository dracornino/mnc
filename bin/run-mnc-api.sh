#!/bin/bash
docker build  -t jdelcompare/mncapi .
docker run -p 14801:14801 -d jdelcompare/mncapi
