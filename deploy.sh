cd client
rm -rf dist
echo 'Building client...'
ng build --env --aot=false
cd ..
echo "Copy files to public..."
rm -rf ./server/public
cp -r ./client/dist ./server/public

git add .
git commit -m "Building sources commit"
git subtree push --prefix=server heroku master
echo "Done!"