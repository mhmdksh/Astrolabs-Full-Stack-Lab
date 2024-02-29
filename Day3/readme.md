# Day 3 (Virtualization & Containerization)
## Virtualization
- Virtulizatoin is having a virtual environment where we have access to virtualized resources (VMs, Networks, Storage etc ...)
- 2 Types: Cloud Virtualization (AWS,GCP,Azure) & On-Premise Virtualization (Local Datacenters & Servers)
## Containerization
Having all our app run within a container that has all the necessary runtime packages and codes. Instead of installing everything from scratch (Everything runs inside docker)

1. Installed Docker and Docker Compose
https://docs.docker.com/engine/install

2. Creating a Dockerfile to identify our application:

Dockerfile Example:
```
# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "index.js" ]
```
3. Create a dockerhub account: https://hub.docker.com
Logging in to dockerhub:
```
docker login
```
4. Building our application in a container and pushing it to docker-hub
### Defining Variables
```
V="v1"
PKG_NAME="astro-backend"
REGISTRY="your_docker-hub-username"
```
### Running the build & Push Commands
```
docker build -t $PKG_NAME:"$V" .
docker tag $PKG_NAME:"$V" $REGISTRY/$PKG_NAME:"latest"
```
### Pushing to dockerhub Registry
```
docker push $REGISTRY/$PKG_NAME:"latest"
```
5. Simply Running our Backend Application with one Command Using the image we've built:
```
docker run -p 3000:3000 --env-file .env -d eddsnx3/astro-backend
```
6. Creating a docker-compose version of our deployment
`docker-compose.yml` File Example
```
version: '3'
services:
  backend:
    image: eddsnx3/astro-backend
    container_name: backend
    networks:
      - astro
    ports:
      - "3000:3000"
    env_file:
      - .env

  mongodb:
    image: mongo
    container_name: mongodb
    networks:
      - astro
    ports:
      - "27017:27017"

networks:
  astro:
```