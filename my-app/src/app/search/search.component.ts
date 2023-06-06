import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, skip, takeLast } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup;

  categories = ['zzz1', 'ccc', 'fff', 'yyy', 'ddd', 'yyy', 'fff'];
  category$: Observable<string> = from(this.categories);

  ranks = [1, 1, 2, 5, 500, 65, 100];
  rank$: Observable<number> = from(this.ranks);

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit(): void {
  //   this.searchForm = new FormGroup({
  //     name: new FormControl("start search")
  //   });

  //   this.searchForm.get('name').valueChanges
  //   .pipe(
  //     debounceTime(3000)
  //   )
  //   .subscribe(data => {
  //     console.log(data);
  //   })


  // }

  // readValue() {

  // }

  ngOnInit(): void {
    // this.category$.pipe(
    //   // takeLast(2)
    //   // first()
    //   // last()
    //   elementAt(2)
    // ).subscribe(data => {
    //   console.log(data);
    // });

    this.rank$.pipe(
      // distinct(),
      // filter((v) => this.filterValues(v)),
      // max()
      min()
    ).subscribe(data => {
      console.log(data);
    })

    
    
    this.category$.pipe(
      // distinct(),
      // // skip(2)
      // count()
    )
    .subscribe(data => {
      // console.log(data);
    });
  }

  filterValues(v) {
    return v < 10000 ? true : false; 
  }


}
