import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRabbitsComponent } from './my-rabbits.component';

describe('MyRabbitsComponent', () => {
  let component: MyRabbitsComponent;
  let fixture: ComponentFixture<MyRabbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRabbitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRabbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
