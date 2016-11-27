import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

declare var $:any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {
  private currentFilter:string;
  private sortDirection:number;

  constructor(private articleService: ArticleService) {
    this.currentFilter = 'Time';
    this.sortDirection = 1;
  }

  changeDirection(){
    this.sortDirection = this.sortDirection * (-1);
    this._updateSort();
  }

  changeSort(filter:string){
    if(filter === this.currentFilter){
      this.changeDirection();
    }else{
      this.currentFilter = filter;
      this._updateSort();
    }
  }

  liveSearch(evt){
    const val = evt.target.value;
    this.articleService.filterBy(val);
  }

  _updateSort(){
    this.articleService.sortBy(this.currentFilter,this.sortDirection);
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

}
