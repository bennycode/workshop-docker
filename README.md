# workshop-docker

## Commands

Level 1:

- `FROM`
- `RUN`
- `WORKDIR`
- `COPY`
- `CMD`

Level 2:

- `ENV`
- `EXPOSE`
- `ENTRYPOINT`

Examples:

- Shell Form: `RUN chmod + x ./hello.sh`
- Exec Form: `RUN ["python", "hello.py"]`
- https://goinbigdata.com/docker-run-vs-cmd-vs-entrypoint/

## Learnings

- Docker container will be automatically stopped when there is no infinite command (ex. using a simple command like `console.log` without an infinite loop surrounding it)

## Images

### Build Image

```yml
docker build .
docker build -f Dockerfile -t our-server .
```

### List Images

```yml
docker image list
docker image ls
```

### Remove Images

```yml
docker image rm <REPOSITORY>
docker rmi <IMAGE ID>

# Example
docker image rm lambot-1_tws:latest
```

## Containers

### Run Containers

```yml
docker run -d <REPOSITORY:TAG>
docker run -d -p <CONTAINER PORT>:<IMAGE PORT> our-server:latest
docker run --env-file=.env -d -p 8080:1339 our-server:latest
docker run --name some-container -e POSTGRES_USER=root -d postgres

# Example:
docker run -d our-server:latest
docker run -d -p 8080:80 our-server:latest
```

### Show Containers

```yml
# Show running containers
docker ps

# Show all containers (running & stopped)
docker ps -a
```

### View Container Logs

```yml
docker logs <CONTAINER NAME>
docker logs -f <CONTAINER NAME>
```

### Remove Container

```yml
docker rm <CONTAINER ID>
```

### Publish Images

- Docker Registries: Docker Hub, GitHub's Docker Registry (https://ghcr.io), Google Container Registry

```yml
docker login ghcr.io --username phanatic --password-stdin
docker tag app ghcr.io/phanatic/app:1.0.0
docker push ghcr.io/phanatic/app:1.0.0
```

## Docker Compose

### Start Composition

```yml
docker-compose up -d
docker-compose -f docker-compose.yml up -d
docker-compose -p ninja-workshop up -d
docker-compose -p ninja-workshop --env-file=.env up -d
docker-compose -p ninja-workshop --env-file=.env up -d --build # enforce new Image builds
docker-compose --profile dev up -d
```

### Terminate Composition

```yml
docker-compose -p ninja-workshop down
```