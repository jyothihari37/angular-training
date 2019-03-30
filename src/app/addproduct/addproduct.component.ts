import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductsForm: FormGroup;
  submitted: Boolean = false;
  category: Array<string> = [
    "Clothes",
    "Watches",
    "Accessories"
  ]
  subCategory = {
    clothes: [
      "Formal",
      "Casual",
      "Smart Casual"
    ],
    watches: [
      "Digital",
      "Analog",
      "Fitbit"
    ],
    accessories: [
      "Headphones",
      "Mobile Covers",
      "Speakers"
    ]
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProductsForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      price: ['', [Validators.required, Validators.min(500), Validators.max(10000)]],

      category: [
        // giving first value as default value
        this.category[0],
        [
          Validators.required
        ]
      ],
      subCategory: [
        this.subCategory.clothes[0],
        [
          Validators.required
        ]
      ]
    });
  }
  getSelectedCategory() {
    switch (this.addProductsForm.controls['category'].value) {
      case 'Clothes': return 'clothes'
      case 'Watches': return 'watches'
      case 'Accessories': return 'accessories'
    }
  }
  get f() { return this.addProductsForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addProductsForm.invalid) {
      return false;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    console.log(this.addProductsForm.value)

  }
}