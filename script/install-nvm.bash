URL=https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip

mkdir temp

file_name=temp/nvm-setup.zip

curl -L "${URL}" -o "${file_name}"

unzip -d temp "${file_name}" 

temp/nvm-setup.exe