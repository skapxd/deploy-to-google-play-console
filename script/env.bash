# Delete temp, env.zip and env.exr 
rm -rf temp

# Create .env file 
cat << EOF > .env
EMAIL=your@email.com
PASS=yourPAss
EOF

# install node modules
npm i 
