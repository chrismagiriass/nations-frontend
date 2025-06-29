import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stats-view',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginator,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './stats-view.component.html',
  styleUrls: ['./stats-view.component.css']
})
export class StatsViewComponent implements OnInit {
  displayedColumns: string[] = ['continentName', 'regionName', 'countryName', 'year', 'population', 'gdp'];
  dataSource = new MatTableDataSource<any>([]);
  regions: any[] = [];

  regionControl = new FormControl();
  yearFromControl = new FormControl();
  yearToControl = new FormControl();

  currentPage = 1;
  pageSize = 10;
  totalElements = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loadRegions();
    this.loadStats();
  }

  loadRegions(): void {
    this.countriesService.getAllRegions().subscribe((regions) => {
      this.regions = regions;
    });
  }

  loadStats(): void {
    const filters = {
      page: this.currentPage,
      size: this.pageSize,
      regionId: this.regionControl.value,
      yearFrom: this.yearFromControl.value,
      yearTo: this.yearToControl.value
    };

    this.countriesService.getStatsView(filters).subscribe((res) => {
      this.dataSource.data = res.data;
      this.totalElements = res.totalElements;
    });
  }

  onFilter(): void {
    this.currentPage = 1;
    this.paginator.firstPage();
    this.loadStats();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadStats();
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('el-GR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(value);
  }
}
