import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  courseForm: FormGroup;

  @Output()
  courseSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      hours: this.fb.control('', Validators.required),
      professor: this.fb.control('', Validators.required),
    });
  }

onSubmit(): void{
  if(this.courseForm.invalid) {
    this.courseForm.markAllAsTouched();
  } else {
  this.courseSubmitted.emit(this.courseForm.value);
  this.courseForm.reset();
  this.courseForm.markAsPristine();
  }
}
}
