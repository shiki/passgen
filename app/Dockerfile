# This is based on Alpine Linux
FROM node:7.2.1

# https://intercityup.com/blog/downsizing-docker-containers.html
RUN apt-get update \
  && apt-get -y install python-pip \
  && pip install xkcdpass==1.9.1 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Yarn
# RUN curl -o- -L https://yarnpkg.com/install.sh | bash
# ENV PATH /root/.yarn/bin:$PATH

EXPOSE 3000
ENV DIR /usr/src/app
RUN mkdir -p $DIR
WORKDIR $DIR
COPY . $DIR

RUN npm install --silent
# RUN yarn install --ignore-engines
RUN $DIR/node_modules/.bin/gulp build
CMD node server