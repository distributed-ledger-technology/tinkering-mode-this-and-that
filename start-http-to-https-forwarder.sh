git clone https://github.com/michael-spengler/http_to_https.git
cd http_to_https
pm2 start  --interpreter="deno" --interpreter-args="run --allow-net --allow-read" forwarder.ts