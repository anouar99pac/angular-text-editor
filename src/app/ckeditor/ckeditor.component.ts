import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {

  ckeditorContent = '';

  constructor() {
    console.log('construcotr CKEditor');
    // var dialogObj = new CKEDITOR.dialog( editor, 'smiley' );
    this.ckeditorContent = '<p> My HTML </p> ';
  }

  ngOnInit() {
    console.log('ngOnInit CKEditor**');
  }

}
