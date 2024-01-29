import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoriesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.categoriesForm = this.fb.group({
      name: this.fb.control(''),
      students: this.fb.array([]),
    });
  }

  get studentsControl() {
    return this.categoriesForm.get('students') as FormArray;
  }

  getControl(index: number){
    return this.studentsControl.controls[index]?.get(
      'studentName') as FormControl;
  }

  deleteControl(index: number){
    this.studentsControl.removeAt(index);
  }

  onnAddStudent(): void {
    const formArray = this.categoriesForm.get('students');
    if(formArray instanceof FormArray) {
      formArray.push(
        this.fb.group({
          studentName: this.fb.control(''),
        })
      );
    }
  }
}
