import * as dotenv from 'dotenv';
dotenv.config();

const config: {
   app_name?: string,
   app_port?: string,
   acces_token_secret?: string,
   refresh_token_secret?: string
} = {
   app_name: process.env['APP_NAME'],
   app_port: process.env['APP_PORT'],

   acces_token_secret: process.env['ACCESS_TOKEN_SECRET'],
   refresh_token_secret: process.env['REFRESH_TOKEN_SECRET'],
}

export default config;
