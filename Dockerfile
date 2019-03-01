FROM node:10

COPY . /home/node/app

WORKDIR /home/node/app

RUN yarn

RUN yarn tsc --project ./ci/tsconfig.json

RUN yarn build

ENV NODE_ENV "production"

EXPOSE 14801

CMD [ "node", "dist/lib/index.js" ]
