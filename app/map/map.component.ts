import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

    @ViewChild('map') mapRef: ElementRef;
    @Input() location: string;
    private zoom = 12;

    constructor(private mapService: MapService) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
      this.mapService.findLocation(this.location, this.mapRef.nativeElement, {
            scrollwheel: true,
            zoom: this.zoom
        });
    }
}
