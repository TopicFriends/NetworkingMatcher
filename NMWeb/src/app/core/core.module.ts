import {
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import {HeaderComponent} from './header/header.component'
import {
  MatIconModule, MatListModule,
  MatToolbar,
  MatToolbarModule,
} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module'
import {UserProfileSharedModule} from '../user-profile-shared/user-profile-shared.module'
import {MeetingsModule} from '../meeting-list/meetings.module'
import {CapitalizeFirstPipe} from '../shared/pipes/capitalize-first.pipe';
import {CleanUrlPipe} from '../shared/pipes/clean-url.pipe';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../login/login.component'
import {LoginModule} from '../login/login.module';
import { HeaderUserAccountButtonComponent } from './header/header-user-account-button/header-user-account-button.component'
import { AuthDialogService } from './auth-dialog.service'
import { ResetPasswordComponent } from 'app/login/reset-password/reset-password.component';

/** https://angular.io/guide/styleguide#prevent-re-import-of-the-core-module */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    UserProfileSharedModule,
    MeetingsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    LoginModule
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HeaderUserAccountButtonComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FlexLayoutModule,
    FooterComponent,
    HeaderUserAccountButtonComponent,
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    CleanUrlPipe,
    CapitalizeFirstPipe,
    AuthDialogService,
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
