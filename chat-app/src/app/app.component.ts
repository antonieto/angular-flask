import { Component, OnInit } from '@angular/core';
import { ConsumerService } from './services/consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chat-app';

  constructor(private readonly consumerService: ConsumerService) {}


  ngOnInit(): void {
    this.consumerService.sayHello();
  }
}
