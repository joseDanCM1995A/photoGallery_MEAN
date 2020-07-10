import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PothoListComponent } from './potho-list.component';

describe('PothoListComponent', () => {
  let component: PothoListComponent;
  let fixture: ComponentFixture<PothoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PothoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PothoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
