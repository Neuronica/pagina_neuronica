# Dockerfile para SSR Angular 20 en Cloud Run
FROM node:20-alpine

WORKDIR /srv

# Copiamos sólo los artefactos construidos (sin node_modules)
COPY dist/neuronica/server ./server
COPY dist/neuronica/browser ./browser

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Arranque típico de Angular SSR 17+ (server.mjs)
CMD ["node", "server/server.mjs", "--port=8080", "--host=0.0.0.0", "--browserPath=./browser"]