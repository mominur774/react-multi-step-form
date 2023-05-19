FROM node:16-alpine

WORKDIR /app

COPY . /app/

COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

CMD ["/app/entrypoint.sh"]