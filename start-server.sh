# locally
deno run --allow-net --allow-read --allow-write --unstable server/server.ts 3001 mongouser mongopw

# on web provider server
# pm2 start -n "openforce-server" --interpreter="deno" --interpreter-args="run --allow-net --allow-read --allow-write --unstable" server/server.ts -- 443 mongouser mongopw
