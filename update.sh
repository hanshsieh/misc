#!/usr/bin/env bash
set -euo pipefail

kubectl apply -n test -f simple-server-deployment.yaml
kubectl apply -n test -f simple-server-service.yaml
kubectl apply -n test -f ingress.yaml
helm repo add incubator https://kubernetes-charts-incubator.storage.googleapis.com
helm repo update
helm upgrade --install haproxy-ingress incubator/haproxy-ingress \
   --namespace test \
  -f ./haproxy-ingress-values.yaml \
  --version v0.0.27

