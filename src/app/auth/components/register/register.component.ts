import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../store/actions';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log('initialize');
  }
  onSubmit() {
    console.log('submit', this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
