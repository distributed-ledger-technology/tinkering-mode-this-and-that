cd client
trex run build  
cd ..
sed -i'' -e 's/href="\//href=".\//g' client/dist/index.html
sed -i'' -e 's/src="\//src=".\//g' client/dist/index.html
rm client/dist/index.html-e