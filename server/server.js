import express from 'express';

import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
    res.send('Project Management Server is running');
});

app.use("/api/inngest", serve({ client: inngest, functions }));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});