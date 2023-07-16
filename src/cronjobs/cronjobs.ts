import fs from 'fs';
import path from 'path';
import axios from 'axios';


export const scrapeAndDownload = async () : Promise<void> => {
    const routeUrl = 'https://www.rigassatiksme.lv/data/routes.txt';
    const stopsUrl = 'https://www.rigassatiksme.lv/data/stops.txt';

    const routeResponse = await axios.get(routeUrl,{ responseType: "arraybuffer" });
    const stopsResponse = await axios.get(stopsUrl,{ responseType: "arraybuffer" });

    const routesBuffer = Buffer.from(routeResponse.data, "binary");
    const stopsBuffer = Buffer.from(stopsResponse.data, "binary");

    fs.writeFileSync("data/stops.txt", stopsBuffer);
    fs.writeFileSync("data/routes.txt", routesBuffer);
}
