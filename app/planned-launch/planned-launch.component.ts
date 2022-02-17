import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Launch } from '../models/launch';

@Component({
  selector: 'app-planned-launch',
  templateUrl: './planned-launch.component.html',
  styleUrls: ['./planned-launch.component.css']
})
export class PlannedLaunchComponent implements OnInit {

    public launch: Launch; 
    
    constructor(private router: Router) { 
        this.launch = <Launch>this.router.getCurrentNavigation().extras.state;
    }

    ngOnInit(): void {
    }

    back() {
        this.router.navigate(['']);
    }
}
