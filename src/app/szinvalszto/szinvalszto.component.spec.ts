import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzinvalsztoComponent } from './szinvalszto.component';

describe('SzinvalsztoComponent', () => {
  let component: SzinvalsztoComponent;
  let fixture: ComponentFixture<SzinvalsztoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzinvalsztoComponent]
    });
    fixture = TestBed.createComponent(SzinvalsztoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
