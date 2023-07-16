interface Stop {
    ID: string;
    Lat: string;
    Lng: string;
    StopStr: string;
    Stops?: string[];
    Name?: string;
}

export class StopsParser{
    stops: string;
    constructor(stops: string){
        this.stops = stops;
    }
    
    
    parseStops(): string[]{
        const fileContentArray = this.stops.split('\n');
        console.log(fileContentArray);

        const newArray = fileContentArray.map(function(sLine, index, arr) {
            if (index == 0) {
                continue; //skip fiaReturnrst line
            }
          });
          
    }

    parseStopsLine(stopsLine: string): string[]{
        const lineTokens = stopsLine.split(',');
    }

}