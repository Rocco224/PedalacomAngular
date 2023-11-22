import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  serviceName: string[]=['peppe','martina','ludovica']
  constructor() { }
}
