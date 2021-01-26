import { Component } from '@angular/core';
import { faHome, faBoxOpen, faBook, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  home = faHome;
  boxOpen = faBoxOpen;
  book = faBook;
  user = faUser;

  constructor() {}

}
