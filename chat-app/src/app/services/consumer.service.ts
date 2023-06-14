import { Injectable } from "@angular/core";

@Injectable()
export class ConsumerService {
  constructor() {}

  public sayHello() {
    console.log("Hello from ConsumerService!");
  }
}
