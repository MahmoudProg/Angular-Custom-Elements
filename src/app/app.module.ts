import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPopupComponent } from './my-popup/my-popup.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    MyPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(MyPopupComponent, { injector: this.injector });
    customElements.define('my-popup', el);

  }


  ngDoBootstrap() { }
}
