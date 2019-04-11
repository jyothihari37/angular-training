import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  usersForm: FormGroup;
  submitted: Boolean = false;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router) { }
  // id: number;
  // this.route.params.subscribe(params => {
  //   this.id = params['id'];
  // })
  ngOnInit() {
    this.usersForm = this.formBuilder.group({

      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],

      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],

      lastname: ['', [Validators.minLength(2), Validators.maxLength(100)]],

      designation: ['', [Validators.required, Validators.maxLength(50)]],

      email: ['', [Validators.required, Validators.maxLength(355)]],

      mobile: ['', [Validators.required, Validators.maxLength(10)]],

      status: ['', [Validators.required]],

      isdeleted: ['', [Validators.required]],
    });


  }

  get f() { return this.usersForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true
      if (this.usersForm.invalid) return
      await this.UserService.insertUsers(this.usersForm.value)
      alert("users form created succesfully")
      this.navigateToUsers()


    }
    catch (err) {
      alert(err);
    }
  }

  navigateToUsers() {
    this.router.navigate(['users'])
  }
}

