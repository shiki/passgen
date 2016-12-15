# This is based on Alpine Linux
FROM node:7.2.1

# https://intercityup.com/blog/downsizing-docker-containers.html
RUN apt-get update \
  && apt-get -y install python-pip \
  && pip install xkcdpass==1.9.1 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 3000
ENV DIR /usr/src/app
RUN mkdir -p $DIR
WORKDIR $DIR
COPY . $DIR
RUN npm install
RUN $DIR/node_modules/.bin/gulp build
CMD node server