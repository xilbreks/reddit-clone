import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  host: {class:'item'},  
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('article') article: Article;

  constructor() { }

  ngOnInit() {
  }

  upvote(){
    this.article.voteUp();
  }

  downvote(){
    this.article.voteDown();
  }

}
