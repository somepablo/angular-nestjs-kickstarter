import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    public greeting: string;

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.appService.getGreeting().subscribe(greeting => this.greeting = greeting);
    }

}
