import { Component } from '@angular/core';
import "froala-editor/js/plugins.pkgd.min.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public options: Object = {
    events: {
      initialized: function() {
        console.log(this);
      }
    },
    placeholderText: "Start typing..."
  };

  public editorContent: string = 'My Document\'s Title';
  title = 'MyFroalaApp';

}
