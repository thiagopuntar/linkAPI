# linkAPI

Projeto para processo seletivo na LinkAPI

## Project SETUP

This project was developed using Node.js 12.13.0 and npm 6.12.0

- Clone the project to your machine;
- Copy ".env.sample" to a .env file into the root directory;
- Put your personal infos on .env. DO NOT COMMIT this file;
- Run npm install;

- For development, run "npm run dev", for production, "npm start";

## Features

This API has routes do sync data between Pipedrive and Bling and a route to get data from
your personal MongoDB database.

All routes begin with **localhost:[PORT YOU DEFINED ON .env]/api/v1**

**POST /sync**: insert sale orders from Pipedrive into Bling app;

**POST /sync/database**: update MongoDB database with all Bling's sale orders;

**GET /data**: get total orders grouped by date;
