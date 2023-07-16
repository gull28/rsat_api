import express from 'express';
import { scrapeAndDownload } from './cronjobs/cronjobs';
import cron from "node-cron";
import fs from 'fs';
import {  RouteParser } from './parsers/RouteParser';
import { StopsParser } from './parsers/StopsParser';
const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    const fileContents = fs.readFileSync("data/routes.txt", 'utf-8');
    const routeParser = new RouteParser(fileContents)
    const parsedFile = routeParser.parseLines();
    const stopsParser = new StopsParser(fs.readFileSync("data/stops.txt", 'utf-8'));
    const parsedStops = stopsParser.parseStops();

    console.log("xd", parsedStops);    
});

cron.schedule("* * * * *", () => {
    scrapeAndDownload();
}); // Run every day at midnight


