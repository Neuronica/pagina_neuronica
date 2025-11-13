FROM node:20-alpine AS deps
WORKDIR /srv
COPY package*.json ./
RUN npm install --omit=dev

FROM node:20-alpine
WORKDIR /srv
ENV NODE_ENV=production
ENV PORT=8080
COPY --from=deps /srv/node_modules ./node_modules
COPY dist/neuronica ./dist/neuronica
COPY boot.mjs ./boot.mjs
EXPOSE 8080
CMD ["node", "--trace-uncaught", "--enable-source-maps", "boot.mjs"]
