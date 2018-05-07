/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
import { issuelist_PhonePortrait } from '../pages/issuelist/PhonePortrait/issuelist';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    login_PhonePortrait,
    issuelist_PhonePortrait
  ];
  static mapping = {
    'login': {
      PhonePortrait: login_PhonePortrait
    },
    'issuelist': {
      PhonePortrait: issuelist_PhonePortrait
    }
  }
}