export class RouteParser{
    routes: string;

    constructor(routes: string){
        this.routes = routes;
    }

    parseLines(): Array<string> {
        const lines: Array<string> = this.routes.split(";");
        console.log(lines[4]);

        let lineTokens: Array<string> = [];

        if (lines[0].indexOf(",") === -1) {
          lineTokens["RouteNum"] = lines[0];
          lineTokens["Authority"] = lines[1];
          lineTokens["City"] = lines[2];
          lineTokens["Transport"] = lines[3];
          lineTokens["Operator"] = lines[4];
          lineTokens["ValidityPeriods"] = lines[5];
          lineTokens["SpecialDates"] = lines[6];
          lineTokens["RouteTag"] = lines[7];
          lineTokens["RouteType"] = lines[8].replaceAll("-", "_");
          lineTokens["Commercial"] = lines[9];
          lineTokens["RouteName"] = lines[10];
          lineTokens["Weekdays"] = lines[11];
          lineTokens["Street"] = lines[12];
          lineTokens["RouteStops"] = lines[13];
          lineTokens["RouteStopsPlatforms"] = lines[14];
    
          if (lineTokens["Street"].indexOf(",") !== -1) {
            const streetStringArray: Array<string> = lineTokens["Street"].split(",");
            streetStringArray.forEach((value) => {
                if(value){
                    lineTokens["Street"].push(value);
                };
            });
          };

          if (lineTokens["RouteStops"].indexOf(",") !== -1) {
              const routeStopsArray: Array<string> = lineTokens["RouteStops"].split(",");
              routeStopsArray.forEach((value) => {
                if(value){
                  lineTokens["RouteStops"].push(value);
                };
              });
          };
          console.log("hello", lineTokens);
        }
        return lineTokens;
      }
}
