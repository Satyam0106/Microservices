FROM node:22-alpine

WORKDIR /app

COPY package*.json ./ 
# RUN npm ci
ARG NODE_ENV
RUN if ["$NODE_ENV" = "development"]; \
    then npm install ; \
    else npm install --only=production; \
    fi
COPY . . 

EXPOSE 5050

CMD ["node" , "app.js"]





