import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../../core/services/users.service';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();

  constructor(
    private route: ActivatedRoute, 
    private usersService: UsersService,
    private loadingService: LoadingService,
    private fb: FormBuilder
  ) {
    this.loadingService.setIsLoading(true);
    this.usersService.getUserById(this.route.snapshot.params['id']).subscribe({
      next: (foundUser) => {
        console.log(foundUser);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void{
    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
    this.userSubmitted.emit(this.userForm.value);
    this.userForm.reset();
    this.userForm.markAsPristine();
    }
  }

}
