import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Launch } from '../models/launch';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.headers = this.configService.createApiHeaders();
    }

    getSchedule(): Observable<Launch[]> {
        return this.http
            .get<Launch[]>('https://space-launch.p.rapidapi.com/all', { headers: this.headers });
    }
}
