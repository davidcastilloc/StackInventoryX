FROM strapi/strapi:3.5.4-alpine as production
LABEL name="strapi_production"
ENV NODE_ENV=production
WORKDIR /srv/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn && yarn build
RUN yarn start
EXPOSE 1337

FROM strapi/strapi:3.5.4-alpine as development
LABEL name="strapi_development"
ENV NODE_ENV=development
WORKDIR /srv/app
COPY . ./
RUN yarn && yarn build
RUN yarn start
EXPOSE 1337
