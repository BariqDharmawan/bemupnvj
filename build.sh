echo "start building backend"
yarn build
echo "start building frontend"
yarn production
echo "copy .env to build folder"
cp .env build/.env
cd build
echo "install backend dependencies"
yarn install --production
echo "its finish, and ready to run"
