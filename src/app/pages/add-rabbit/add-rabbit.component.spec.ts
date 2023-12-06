import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRabbitComponent } from './add-rabbit.component';

describe('AddRabbitComponent', () => {
  let component: AddRabbitComponent;
  let fixture: ComponentFixture<AddRabbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRabbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
