---
title: "Kubernetes"
date: "2024-04-07"
category: "Tech"
---

Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform initially developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF). At its core, Kubernetes automates the deployment, scaling, and management of containerized applications. 🎢

It provides native support for microservices architectures, container-based deployments, and modern DevOps practices, making it an ideal platform for building and running cloud-native applications. 📦

Kubernetes monitors the health of applications and automatically restarts or reschedules containers that fail. 🔃

### Commands

Start minikube cluster `minikube start`

View Minikube Dashboard `minikube dashboard`

Stop minikube cluster `minikube stop`

Delete minikube cluster `minikube delete`

Apply kubernetes file `kubectl apply -f <file-name.yaml>`

List the pods `kubectl get pods`

List the deployments `kubectl get deployments`

List the services `kubectl get svc`

View logs of a pod `kubectl logs -f <pod-name>`

Delete pod `kubectl delete pod <pod-name>`

Describe details of a pod/svc/deployment `kubectl describe <pod/svc/deployment> <pod/svc/deployment-name>`
