import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PothoPreviewComponent } from './potho-preview.component';

describe('PothoPreviewComponent', () => {
  let component: PothoPreviewComponent;
  let fixture: ComponentFixture<PothoPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PothoPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PothoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
