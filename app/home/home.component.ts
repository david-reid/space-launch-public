import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../services/launch.service';
import { Launch } from '../models/launch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private launchService: LaunchService, private router: Router) { }

    public schedule: Launch[] = null;

    ngOnInit(): void {
        this.launchService.getSchedule().subscribe(
            data => {
                this.schedule = data;
            }
        );
    }

    go(index:number): void {
        let data = this.schedule[index];
        this.router.navigate(['planned-launch'], {
            state: data 
        });
    }
}
