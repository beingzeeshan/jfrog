FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN apk --update --no-cache \
		add  \
		automake \
		git \
		alpine-sdk  \
		nasm  \
		autoconf  \
		build-base \
		zlib \
		zlib-dev \
		libpng \
		libpng-dev\
		libwebp \
		libwebp-dev \
		libjpeg-turbo \
		libjpeg-turbo-dev
COPY . .
RUN npm run build
FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/dist /usr/share/nginx/html