import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';

@NgModule({
  declarations: [
    AppComponent,
    TexteditorComponent,
    PagecontentComponent,
    DetailspostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
