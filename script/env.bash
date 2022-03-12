# Delete temp, env.zip and env.exr 
rm -rf temp

# Create .env file 
cat << EOF > .env
EMAIL_Google_Play_Console=your@email.com
PASS_Google_Play_Console=yourPAss
# 
EMAIL_JIRA=your@email.com
PASS_JIRA=yourPAss
# 
TASK_JIRA_ID=code
# 
NAME_MOBILE_APP=name
# 
ASSETS_MOBILE_APP=---.zip
EOF

# install node modules
npm i 
