import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioSiteComponent } from './protfolio-site.component';

describe('ProtfolioSiteComponent', () => {
  let component: ProtfolioSiteComponent;
  let fixture: ComponentFixture<ProtfolioSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfolioSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
