FROM node:16 AS svelte-build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]

FROM denoland/deno:alpine-1.45.5

WORKDIR /app

COPY --from=svelte-build /app/public ./public

COPY server.js .

EXPOSE 8000

CMD ["deno", "run", "--allow-net", "--allow-read", "--watch", "server.js"]