import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappoinmentComponent } from './newappoinment.component';

describe('NewappoinmentComponent', () => {
  let component: NewappoinmentComponent;
  let fixture: ComponentFixture<NewappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewappoinmentComponent]
    });
    fixture = TestBed.createComponent(NewappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
