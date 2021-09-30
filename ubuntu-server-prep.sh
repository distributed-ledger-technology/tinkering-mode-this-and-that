# inspired by https://docs.docker.com/engine/install/ubuntu/

# uninstall old docker versions
sudo apt-get remove docker docker-engine docker.io containerd runc

sudo apt-get update

 sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release


curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

apt-cache madison docker-ce

# choose one of the shown versions and...

sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
# z.B. sudo apt-get install docker-ce=5:20.10.8~3-0~ubuntu-focal docker-ce-cli=5:20.10.8~3-0~ubuntu-focal containerd.io


sudo docker run hello-world


# to test mongodb via docker check:
docker run --name testmongo -d -p 27017:27017 -d mongo

docker run --name testmongo -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=super -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo