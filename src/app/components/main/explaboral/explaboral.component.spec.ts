import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplaboralComponent } from './explaboral.component';

describe('ExplaboralComponent', () => {
  let component: ExplaboralComponent;
  let fixture: ComponentFixture<ExplaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
