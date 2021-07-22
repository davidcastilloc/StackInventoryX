FROM node:lts-alpine3.13  as build
LABEL name="backend_build"
WORKDIR /srv/app
COPY package*.json ./
ENV NODE_ENV=development
RUN yarn 
CMD ["yarn", "dev"]

FROM node:lts-alpine3.13  as production
LABEL name="backend_production"
ENV NODE_ENV=production
WORKDIR /srv/app
COPY --from=build /srv/app .
EXPOSE 3000
