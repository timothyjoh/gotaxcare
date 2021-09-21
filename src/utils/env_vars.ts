import dotenv from 'dotenv';
dotenv.config();

export const VARS = {
	stage: import.meta.env.VITE_NODE_ENV
};
