import * as path from "path";

export const MONGODB_CONNECTION="your connection string"
export const JWT_SECRET = "123";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;


export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed


export const WEB_CACHE=false;
export const PORT=4020

export function UPLOAD_FOLDER(filename){
    return path.resolve(process.cwd(), 'storage', filename )
}