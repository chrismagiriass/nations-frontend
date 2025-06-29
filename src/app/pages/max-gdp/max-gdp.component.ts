import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-max-gdp',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './max-gdp.component.html',
  styleUrls: ['./max-gdp.component.css']
})
export class MaxGdpComponent implements OnInit {
  displayedColumns: string[] = ['name', 'countryCode3', 'year', 'population', 'gdp'];
  dataSource: any[] = [];

  currentPage = 1;
  pageSize = 10;
  totalElements = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.countriesService.getMaxGdpPerPopulation(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.dataSource = response.data;
        this.totalElements = response.totalElements;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
