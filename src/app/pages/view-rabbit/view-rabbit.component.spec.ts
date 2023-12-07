import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRabbitComponent } from './view-rabbit.component';

describe('ViewRabbitComponent', () => {
  let component: ViewRabbitComponent;
  let fixture: ComponentFixture<ViewRabbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRabbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
