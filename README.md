# Overview
This project involved the containerization and deployment of a full-stack application using Docker and Kubernetes clusters.

The application is called Yolomy and it allows you to create products for an E-commerce store

These are the steps to use to deploy and access the client and backend components of the project on Kubernetes using Minikube.

## Prerequisites
- Ensure Minikube is installed and running.
- Kubernetes configuration files are located in the `k8s/` folder.

## Kubernetes Configuration Files

The Kubernetes configurations for deploying the client and backend are located in the `k8s/` folder.

### 1. Client Deployment (`frontend.yaml`)
Defines the client deployment by specifying:
- **Replicas**: Ensures one instance of the client pod.
- **Containers**: Deploys the Docker Hub client image `paulmaingi/yoloclient:v1.0.0`, exposes container port 3000, and defines CPU and memory resources.

### 2. Backend Deployment (`backend-deployment.yaml`)
Defines the backend deployment by specifying:
- **Containers**: Deploys the Docker Hub backend image (e.g., `paulmaingi/yolobacked:v1.0.0`), with port 5000 exposed to interact with the frontend.
- **ClusterIP**: Exposes the backend service internally for communication with the client application.
- **Selector**: Targets the backend deployment.

### 3. Backend Service (`backend-service.yaml`)
Exposes the backend application within the Kubernetes cluster:
- **ClusterIP**: Exposes the backend service internally for communication with the client application.
- **Selector**: Targets the backend deployment.

### 4. StatefulSet MongoDB Deployment (`statefuldb.yaml`)
Defines the MongoDB StatefulSet deployment in Kubernetes:
- **Replicas**: Ensures one replica of the MongoDB pod.
- **Containers**: Deploys the MongoDB container with port 27017 exposed.
- **ClusterIP**: Provides a stable endpoint for MongoDB that other services can connect to.

## Steps to Deploy

1. **Start Minikube**  
   Make sure Minikube is running:
   ```
   minikube status

2. **Deploy the Client Application**
   Apply the Kubernetes manifests in the k8s/ directory

   ```
   kubectl apply -f k8s/


Read "explanation.md" for more information.
