# Installation

Install docker, docker-compose, npm

# Usage

To run prod version (without change detection):

```
docker-compose up --build
```

To run dev version (with change detection):

```
npm install --prefix app
docker-compose -f docker-compose.dev.yml up --build
```

To stop dockers:

```
docker-compose down
```

To check dockers status:

```
docker ps
```