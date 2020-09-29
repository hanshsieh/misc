#!/usr/bin/env bash

while true; do 
  echo | openssl s_client -connect "$(kubectl get service haproxy-ingress-controller -n test -o json | jq -r '.status.loadBalancer.ingress[0].ip')":1936 | openssl x509 -text
  sleep 1
done
