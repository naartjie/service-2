FROM mhart/alpine-node:5.10.1

WORKDIR /src
ADD . .

EXPOSE 3000
CMD ["npm", "start"]