import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log(formData);

    let categoryData = {
      category: formData.value.category,
      status: 'active',
    };

    console.log(categoryData);

    let subCategoryData = {
      subCategory: 'subCategory1',
    };

    this.afs
      .collection('categories')
      .add(categoryData)
      .then((docRef) => {
        console.log(docRef);
      });
  }
}
