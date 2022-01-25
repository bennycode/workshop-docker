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

### Run Images

```yml
docker run -d our-server:latest
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
