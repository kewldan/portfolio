docker container stop portfolio
docker container rm portfolio
docker image rm portfolioi
docker build -t portfolioi .
docker run -d -p 7000:7000 --name portfolio portfolioi
docker container ls