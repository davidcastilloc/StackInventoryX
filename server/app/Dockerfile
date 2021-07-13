FROM strapi/strapi:3.6.3-alpine as build
LABEL name="strapi_build"
ENV NODE_ENV=development
WORKDIR /srv/app
COPY . ./
RUN yarn install && yarn run build
CMD ["yarn", "develop"]

FROM strapi/strapi:3.6.3-alpine as production
LABEL name="strapi_production"
ENV NODE_ENV=production
WORKDIR /srv/app
COPY --from=build /srv/app .
EXPOSE 1337
CMD ["yarn", "start"]