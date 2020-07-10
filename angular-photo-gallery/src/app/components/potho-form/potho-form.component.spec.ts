import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PothoFormComponent } from './potho-form.component';

describe('PothoFormComponent', () => {
  let component: PothoFormComponent;
  let fixture: ComponentFixture<PothoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PothoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PothoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
