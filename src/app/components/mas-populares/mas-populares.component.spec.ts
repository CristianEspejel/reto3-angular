import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasPopularesComponent } from './mas-populares.component';

describe('MasPopularesComponent', () => {
  let component: MasPopularesComponent;
  let fixture: ComponentFixture<MasPopularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasPopularesComponent]
    });
    fixture = TestBed.createComponent(MasPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
