import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { CkeditorComponent } from './ckeditor/ckeditor.component';


@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
