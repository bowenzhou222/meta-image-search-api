## Deploy to EC2 (linux x64)

### On local machine
```
npm run build
scp -i first-instance-key-pair-name.pem -r ../rangeme/api/dist/* ec2-user@ec2-18-216-213-41.us-east-2.compute.amazonaws.com:~/
```

### In EC2 instance
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install 13.7.0
curl -o- -L https://yarnpkg.com/install.sh | bash
yarn install
node server.js &
```
