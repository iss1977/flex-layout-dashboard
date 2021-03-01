import { Component, OnDestroy, OnInit } from '@angular/core';

import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Observable, pipe, of } from 'rxjs';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'flex-layout-dashboard';
  //mediaSub: Subscription; // was in tutorial, but that usage is depreceated.
  mediaSub: Observable<MediaChange[]>;

  constructor(public mediaObserver: MediaObserver){}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.asObservable();

    this.mediaSub.pipe().subscribe(
      (mChange: MediaChange[])=>{
        mChange.forEach((element, index) => {
          if(index ===0) console.log("Mediachange detected: mqAlias is "+element.mqAlias)
        });
      });


  //   this.watcher = mediaObserver.asObservable()
  // .pipe(
  //   filter((changes: MediaChange[]) => changes.length > 0),
  //   map((changes: MediaChange[]) => changes[0])
  // ).subscribe((change: MediaChange) => {
  //   this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
  //   if ( change.mqAlias == 'xs') {
  //     this.loadMobileContent();
  //   }
  // });




    // media$.subscribe((result: MediaChange) => {
    // // this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
    //   console.log(result.mqAlias);
    // })
  };
  ngOnDestroy(){
    // this.mediaSub.unsubscribe();
  };
} // end of class AppComponent
