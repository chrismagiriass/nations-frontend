import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredStatsComponent } from './filtered-stats.component';

describe('FilteredStatsComponent', () => {
  let component: FilteredStatsComponent;
  let fixture: ComponentFixture<FilteredStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
