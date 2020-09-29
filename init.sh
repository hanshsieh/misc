#!/usr/bin/env bash
kubectl create namespace test
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./key.pem -out ./cert.pem -subj "/CN=www.example.com/O=www.example.com"
kubectl create secret -n test tls ingress-cert --key ./key.pem --cert ./cert.pem

