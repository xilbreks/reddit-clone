import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article'; 
import { ArticleListHeaderComponent } from '../article-list-header/article-list-header.component';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService, private activeRoute: ActivatedRoute) {
    this.articles = articleService.orderedArticles;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params=>{
      const sourceKey = params['sourceKey'];
      this.articleService.updateArticles(sourceKey); 
    });
  }

}
