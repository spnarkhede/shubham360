# Docker Cheatsheet

A comprehensive reference guide for Docker commands and concepts. 
This is a quick reference cheat sheet for Docker. And you can find the most common Docker commands here.

## Table of Contents
- [Getting Started](#getting-started)
- [Docker Containers](#docker-containers)
- [Docker Images](#docker-images)
- [Docker Networking](#docker-networking)
- [Clean Up](#clean-up)
- [Miscellaneous](#miscellaneous)

---

## Getting Started

### Basic Container Operations

#### Run Container in Background
```bash
docker run -d -p 80:80 docker/getting-started
```
**Flags:**
- `-d` - Run container in detached mode (background)
- `-p 80:80` - Map host port 80 to container port 80
- `docker/getting-started` - Image to use

#### Run Container in Foreground (Interactive)
```bash
docker run -it -p 8001:8080 --name my-nginx nginx
```
**Flags:**
- `-it` - Interactive mode with pseudo-TTY
- `-p 8001:8080` - Map host port 8001 to container port 8080
- `--name my-nginx` - Assign a custom name to the container
- `nginx` - Image to use

### General Commands

| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker ps -s` | List running containers with CPU/memory stats |
| `docker images` | List all images |
| `docker exec -it <container> bash` | Connect to a running container via bash |
| `docker logs <container>` | Show container's console logs |
| `docker stop <container>` | Stop a container gracefully |
| `docker restart <container>` | Restart a container |
| `docker rm <container>` | Remove a container |
| `docker port <container>` | Show container's port mapping |
| `docker top <container>` | List processes running in container |
| `docker kill <container>` | Force kill a container |

> **Note:** `<container>` parameter can be either container ID or name

---

## Docker Containers

### Starting & Stopping Containers

| Command | Description |
|---------|-------------|
| `docker start my-nginx` | Start a container |
| `docker stop my-nginx` | Stop a container gracefully |
| `docker restart my-nginx` | Restart a container |
| `docker pause my-nginx` | Pause a container |
| `docker unpause my-nginx` | Unpause a container |
| `docker wait my-nginx` | Block until container stops |
| `docker kill my-nginx` | Send SIGKILL to container |
| `docker attach my-nginx` | Connect to an existing container |

### Container Information

| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker logs my-nginx` | View container logs |
| `docker inspect my-nginx` | Inspect container details (JSON) |
| `docker events my-nginx` | View container events |
| `docker port my-nginx` | Show published ports |
| `docker top my-nginx` | Show running processes |
| `docker stats my-nginx` | Monitor container resource usage |
| `docker diff my-nginx` | Show filesystem changes |

### Creating Containers

```bash
docker create [options] IMAGE
```

**Common Options:**
- `-a, --attach` - Attach stdout/stderr
- `-i, --interactive` - Attach stdin (interactive)
- `-t, --tty` - Allocate pseudo-TTY
- `--name NAME` - Assign name to container
- `-p, --publish 5000:5000` - Port mapping (host:container)
- `--expose 5432` - Expose port to other containers
- `-P, --publish-all` - Publish all exposed ports
- `--link container:alias` - Link to another container
- `-v, --volume \`pwd\`:/app` - Mount volume (absolute paths needed)
- `-e, --env NAME=hello` - Set environment variables

**Example:**
```bash
docker create --name my_redis --expose 6379 redis:3.0.2
```

### Container Manipulation

#### Renaming a Container
```bash
docker rename my-nginx my-nginx-new
```

#### Removing a Container
```bash
docker rm my-nginx
```

#### Updating Container Resources
```bash
docker update --cpu-shares 512 -m 300M my-nginx
```

---

## Docker Images

### Image Manipulation

| Command | Description |
|---------|-------------|
| `docker images` | List all images |
| `docker rmi nginx` | Remove an image |
| `docker load < ubuntu.tar.gz` | Load image from tar archive |
| `docker load --input ubuntu.tar` | Load image from tar file |
| `docker save busybox > ubuntu.tar` | Save image to tar archive |
| `docker history nginx` | Show image layer history |
| `docker commit nginx` | Create image from container changes |
| `docker tag nginx eon01/nginx` | Tag an image |
| `docker push eon01/nginx` | Push image to registry |

### Building Images

```bash
# Various build methods
docker build .
docker build github.com/creack/docker-firefox
docker build - < Dockerfile
docker build - < context.tar.gz
docker build -t eon/my-nginx .
docker build -f myOtherDockerfile .
curl example.com/remote/Dockerfile | docker build -f - .
```

---

## Docker Networking

### Network Management

#### Removing a Network
```bash
docker network rm MyOverlayNetwork
```

#### Listing Networks
```bash
docker network ls
```

#### Inspecting a Network
```bash
docker network inspect MyOverlayNetwork
```

#### Connecting/Disconnecting Containers
```bash
# Connect running container to network
docker network connect MyOverlayNetwork nginx

# Connect at container startup
docker run -it -d --network=MyOverlayNetwork nginx

# Disconnect container from network
docker network disconnect MyOverlayNetwork nginx
```

### Creating Networks

```bash
# Create overlay network
docker network create -d overlay MyOverlayNetwork

# Create bridge network
docker network create -d bridge MyBridgeNetwork

# Create complex overlay network with custom settings
docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

---

## Clean Up

### System Prune

#### Basic Cleanup
```bash
# Clean up dangling images, containers, volumes, and networks
docker system prune
```

#### Comprehensive Cleanup
```bash
# Remove stopped containers and all unused images
docker system prune -a
```

### Container Cleanup

#### Stop All Running Containers
```bash
docker stop $(docker ps -a -q)
```

#### Delete Stopped Containers
```bash
docker container prune
```

### Image Cleanup

#### Remove Dangling Images
```bash
# Remove untagged images not associated with containers
docker image prune
```

#### Remove All Unused Images
```bash
# Remove all images not used by existing containers
docker image prune -a
```

### Volume Cleanup

```bash
# Remove all volumes not used by at least one container
docker volume prune
```

---

## Miscellaneous

### Docker Hub Operations

| Command | Description |
|---------|-------------|
| `docker search search_word` | Search Docker Hub for images |
| `docker pull user/image` | Download image from Docker Hub |
| `docker login` | Authenticate to Docker Hub |
| `docker push user/image` | Upload image to Docker Hub |

### Registry Commands

#### Authentication
```bash
# Login to registry
docker login
docker login localhost:8080

# Logout from registry
docker logout
docker logout localhost:8080
```

#### Image Management
```bash
# Search for images
docker search nginx
docker search nginx --stars=3 --no-trunc busybox

# Pull images
docker pull nginx
docker pull eon01/nginx localhost:5000/myadmin/nginx

# Push images
docker push eon01/nginx
docker push eon01/nginx localhost:5000/myadmin/nginx
```

### Batch Operations

```bash
# Stop all containers
docker stop -f $(docker ps -a -q)

# Remove all containers
docker rm -f $(docker ps -a -q)

# Remove all images
docker rmi -f $(docker images -q)
```

### Volume Management

```bash
# List volumes
docker volume ls

# Clean up unused volumes
docker volume prune
```

---

## Tips

- Use `--help` with any Docker command to see available options
- Container names must be unique
- Use `-f` flag for force removal when containers are running
- Always specify versions in image tags for production use
- Use `.dockerignore` files to exclude unnecessary files from build context

This cheatsheet covers the most common Docker commands and scenarios. For more detailed information, refer to the [official Docker documentation](https://docs.docker.com/).