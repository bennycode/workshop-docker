FROM node:16-alpine

# Use /app
WORKDIR /app
# Create /app/src
RUN mkdir "src"
# Create /app/src/start.js
COPY ./src/start.js ./src
# Create /app/package.json
COPY ./package.json .

CMD npm start
