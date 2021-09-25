# inspired by https://certbot.eff.org/lets-encrypt/ubuntufocal-other

sudo apt update
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo certbot certonly --standalone # when asked paste the following strings openforce.de www.openforce.de


# potential troubleshooting:
# 1. when another instance seems already running https://community.letsencrypt.org/t/solved-another-instance-of-certbot-is-already-running/44690/2
# 2. when port 80 is not accessible due to very strict ufw settings: ufw allow 80/tcp
# 3. had an obsolete project running via nginx --> systemctl stop nginx
