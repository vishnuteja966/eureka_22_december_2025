import { Component, inject } from '@angular/core';
import { ClockService } from '../../services/clock-service';

@Component({
  selector: 'app-clock-demo',
  imports: [],
  templateUrl: './clock-demo.html',
  styleUrl: './clock-demo.css',
})
export class ClockDemo {
 clockService = inject(ClockService);
 ngOnInit(){
  console.log("Clock comp:", this.clockService.getCurrentTime())
 }

}
