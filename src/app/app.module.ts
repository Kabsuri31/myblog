import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { SearchComponent } from './mycomponents/search/search.component';
import { CategoryWidgetComponent } from './mycomponents/category-widget/category-widget.component';
import { SideWidgetComponent } from './mycomponents/side-widget/side-widget.component';
import { CommentComponent } from './mycomponents/comment/comment.component';
import { ArticleComponent } from './mycomponents/article/article.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './mycomponents/post/post.component';
import { HomeComponent } from './mycomponents/home/home.component';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CategoryWidgetComponent,
    SideWidgetComponent,
    CommentComponent,
    ArticleComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    ButtonModule    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
