import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffhoursChangePageComponent } from './offhours-change-page.component';

describe('OffhoursChangePageComponent', () => {
  let component: OffhoursChangePageComponent;
  let fixture: ComponentFixture<OffhoursChangePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffhoursChangePageComponent]
    });
    fixture = TestBed.createComponent(OffhoursChangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
