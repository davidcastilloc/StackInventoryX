FROM node:lts-alpine3.13  as build
LABEL name="backend_build"
ENV NODE_ENV=development
WORKDIR /srv/app
COPY . ./
RUN yarn --verbose 

FROM node:lts-alpine3.13  as production
LABEL name="backend_production"
ENV NODE_ENV=production
WORKDIR /srv/app
COPY --from=build /srv/app .
EXPOSE 3000
