import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedLaunchComponent } from './planned-launch.component';

describe('PlannedLaunchComponent', () => {
  let component: PlannedLaunchComponent;
  let fixture: ComponentFixture<PlannedLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
