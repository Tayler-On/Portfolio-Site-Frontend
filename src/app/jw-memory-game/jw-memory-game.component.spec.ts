import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwMemoryGameComponent } from './jw-memory-game.component';

describe('JwMemoryGameComponent', () => {
  let component: JwMemoryGameComponent;
  let fixture: ComponentFixture<JwMemoryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwMemoryGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
