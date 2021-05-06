import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroamigoComponent } from './muroamigo.component';

describe('MuroamigoComponent', () => {
  let component: MuroamigoComponent;
  let fixture: ComponentFixture<MuroamigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroamigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroamigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
