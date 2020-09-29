FROM ubuntu:18.04
WORKDIR /code
RUN apt-get update && \
  DEBIAN_FRONTEND="noninteractive" TZ="Etc/UTC" apt-get -y install tzdata
RUN apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  apt-get install -y nodejs
COPY app.js app.js

CMD ["node", "app.js"]

