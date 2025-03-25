


import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryName: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('New Category:', this.categoryName);
      // כאן תוכל לשמור ל-Firestore אם תרצה
      form.resetForm(); // מאפס את השדות
    }
  }
}

