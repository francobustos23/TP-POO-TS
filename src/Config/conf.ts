import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '3000';
export const URI = process.env.URI;