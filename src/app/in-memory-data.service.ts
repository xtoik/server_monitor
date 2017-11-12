import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
        { id: 10, name: "Client 1", isOk: true, services: [] },
        { 
          id: 20, 
          name: "Client 2", 
          isOk: true, 
          services: [
            { id: 23, name: "Client 2-SQL", isOk: true, services: [
              { id: 25, name: "Client 2-SSIS", isOk: true, services: [
                { id: 26, name: "Client 2-SSIS-Job 1", isOk: true, services: [] },
                { id: 27, name: "Client 2-SSIS-Job 2", isOk: true, services: [
                  { id: 28, name: "Client 2-SSIS-Job 2-Step 1", isOk: true, services: [] }
                ] }
              ] }          
            ] },
            { id: 29, name: "Client 2-HTTP", isOk: true, services: [] }
          ] 
        },
        { id: 30, name: "Client 3", isOk: false, services: [] }
      ];
    return services;
  }
}