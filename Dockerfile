FROM node:18.15.0-slim
WORKDIR /app
COPY ./src/test/mock .
RUN npm install -g json-server
ARG EXPOSE_PORT=8945
ENV EXPOSE_PORT=$EXPOSE_PORT
ARG HOST=0.0.0.0
ENV HOST=$HOST
EXPOSE $PORT
#CMD ["json-server", "-H", $HOST, "-p", $PORT, "/app/db.js"]
CMD ["sh","/app/exec.sh"]
#ENTRYPOINT json-server -H 0.0.0.0 -p $PORT /app/db.js