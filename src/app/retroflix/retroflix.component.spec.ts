import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroflixComponent } from './retroflix.component';

describe('RetroflixComponent', () => {
  let component: RetroflixComponent;
  let fixture: ComponentFixture<RetroflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
