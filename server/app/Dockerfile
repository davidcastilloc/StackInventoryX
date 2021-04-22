FROM strapi/strapi:3.5.4-alpine as build
LABEL name="strapi_build"
ENV NODE_ENV=development
WORKDIR /srv/app
COPY . ./
RUN yarn && yarn build

FROM strapi/strapi:3.5.4-alpine as production
LABEL name="strapi_production"
ENV NODE_ENV=production
WORKDIR /srv/app
COPY --from=build /srv/app .
EXPOSE 1337
