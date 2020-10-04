import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalComponentComponent } from './legal-component.component';

describe('LegalComponentComponent', () => {
  let component: LegalComponentComponent;
  let fixture: ComponentFixture<LegalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
