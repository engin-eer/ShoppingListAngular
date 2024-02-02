import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainComponent } from './ui-main.component';

describe('UiMainComponent', () => {
  let component: UiMainComponent;
  let fixture: ComponentFixture<UiMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiMainComponent]
    });
    fixture = TestBed.createComponent(UiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
