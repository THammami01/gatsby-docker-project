# Gatsby Docker Project

![Gatsby Badge](https://github.com/THammami01/gatsby-docker-project/actions/workflows/gatsby.yml/badge.svg)

## Technology Choices

The used Jamstack SSG is [Gatsby](https://www.gatsbyjs.com/).

## Usage

### Prerequisites

[Download and install Docker.](https://docs.docker.com/get-docker/)

### Development

After running these commands, the application should be reachable at `http://localhost:8000` while in development mode.
Thanks to the volume, file updates will trigger an automatic reload in the browser.

```sh
# BUILD DOCKER IMAGE
docker build -t gatsby-docker-dev -f Dockerfile.dev .

# RUN THE APP IN A DOCKER CONTAINER
docker run -p 8000:80 gatsby-docker-dev
```

### Production

After running these commands, the app should be accessible at `http://localhost:8000`.

```sh
# BUILD DOCKER IMAGE
docker build -t gatsby-docker-prod -f Dockerfile.prod .

# RUN THE APP IN A DOCKER CONTAINER
docker run -p 8000:80 gatsby-docker-prod ...
```

## Demo

### Live

[https://tarekhammami.me/gatsby-docker-project](https://thammami01.github.io/gatsby-docker-project)

### Screenshot

![Screenshot](https://github.com/THammami01/gatsby-docker-project/assets/50141415/e2b1b7dd-5064-4eca-b769-db3ae9fea6bf)

## Credit

[gatsby-theme-intro](https://www.gatsbyjs.com/plugins/@wkocjan/gatsby-theme-intro) open source Gatsby theme by [@wkocjan](https://github.com/wkocjan) was used (dark-blue variant).
