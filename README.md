## Running with Docker

This project includes a Docker-based setup for easy local development and production deployment. The provided `Dockerfile` and `docker-compose.yml` are tailored for this application and use Node.js version **22.13.1** (slim variant).

### Requirements
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed
- (Optional) `.env` file for environment variables (see below)

### Environment Variables
- The application can be configured using a `.env` file in the project root. Uncomment the `env_file` line in `docker-compose.yml` if you wish to use it.
- No required environment variables are hardcoded in the Docker setup, but you may want to provide database connection strings or other secrets as needed for your environment.

### Build and Run

To build and start the application using Docker Compose:

```bash
$ docker compose up --build
```

This will:
- Build the application image using the multi-stage `Dockerfile`
- Expose the application on **port 3000** (as defined in both the Dockerfile and `docker-compose.yml`)
- Use a dedicated Docker network (`app-network`)
- Automatically restart the container unless stopped

### Special Configuration
- The Dockerfile generates the Prisma client during both build and production stages to ensure compatibility with the running architecture.
- The application runs as a non-root user for improved security.
- Healthchecks are configured to monitor the application's status.
- If you add a database or other services, update `docker-compose.yml` accordingly and use the `depends_on` option as needed.

### Ports
- **3000**: Main application API (exposed as `3000:3000` in Docker Compose)

For any additional configuration (such as database connections), refer to your `.env` file and update the compose file as needed.
