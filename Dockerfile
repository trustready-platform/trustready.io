# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app
# install pnpm
RUN npm i -g pnpm
# copy dependency files first (layer cache)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
# copy source & build
COPY . .
RUN pnpm run build

# ---- run stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# install pnpm again (lightweight)
RUN npm i -g pnpm
# copy built app + lockfile
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# install only production deps
RUN pnpm install --prod --frozen-lockfile && pnpm store prune
EXPOSE 3000
# run the actual JS binary
CMD ["node", "node_modules/next/dist/bin/next", "start"]
