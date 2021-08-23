# bemupnvj

## How to install and run the project
1. Check if NodeJS on your local already installed. If not, install it https://nodejs.org/en/download
2. Clone this repo to your local server (C:/xampp/htdocs if on windows, /var/www/html if on ubuntu with LAMPP)
3. Open the folder with terminal / cmd
4. Run this command to install project on your terminal / cmd: `npm install`
5. Run this command to run the project on your terminal / cmd (open two terminal / cmd), and don't close it: 
    - `npm run dev`
    - `npm run watch`
6. Copy paste `.env.exaple` and rename to `.env`, and then config it just like you're using laravel
7. Run this command to generate the database: 
    - `node ace migration:run`
    - `node ace db:seed`
