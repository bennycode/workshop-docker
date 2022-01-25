FROM node:16.13.2-alpine3.15

# Create dirs
WORKDIR /app
RUN mkdir "src"

# Create files
COPY ./src/start.js ./src
COPY ./package.json .
COPY ./package-lock.json .

# Install dependencies
RUN npm install

# Setup environment variables
ENV APP_PORT=1337
EXPOSE ${APP_PORT}

# Start server
CMD npm start
