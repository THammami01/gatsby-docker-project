# Gatsby Docker Project

Demo personal website made with a static site generator.

![Gatsby Badge](https://github.com/THammami01/gatsby-docker-project/actions/workflows/gatsby.yml/badge.svg)

## Technology Choices

The used Jamstack SSG is [Gatsby](https://www.gatsbyjs.com/).

## Usage

### Prerequisites

[Download and install Docker.](https://docs.docker.com/get-docker/)

### Development

After running the following command, the application should be reachable at `http://localhost:8000` while in development mode. Thanks to the volume, file updates will trigger an automatic reload in the browser.

```sh
# RUN THE DEV SERVICE WITH DOCKER COMPOSE
docker compose up dev --build

# ONCE DONE, STOP THE SERVICE WITH `CTRL+C` AND CLEAN UP
docker compose down dev -v --rmi all
```

### Production

After running the following command, the app should be accessible at `http://localhost:8000`.

```sh
# RUN THE PROD SERVICE WITH DOCKER COMPOSE
docker compose up prod --build

# ONCE DONE, STOP THE SERVICE WITH `CTRL+C` AND CLEAN UP
docker compose down prod -v --rmi all
```

## Demo

### Live

[https://tarekhammami.me/gatsby-docker-project/](https://thammami01.github.io/gatsby-docker-project/)

### Screenshot

![Screenshot](https://github.com/THammami01/gatsby-docker-project/assets/50141415/e2b1b7dd-5064-4eca-b769-db3ae9fea6bf)

## Credit

[gatsby-theme-intro](https://www.gatsbyjs.com/plugins/@wkocjan/gatsby-theme-intro) open source Gatsby theme by [@wkocjan](https://github.com/wkocjan) was used (dark-blue variant).
