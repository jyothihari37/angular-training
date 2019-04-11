import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductsForm: FormGroup;
  submitted: Boolean = false;
  // category: Array<string> = [
  //   "Clothes",
  //   "Watches",
  //   "Accessories"
  // ]
  // subCategory = {
  //   clothes: [
  //     "Formal",
  //     "Casual",
  //     "Smart Casual"
  //   ],
  //   watches: [
  //     "Digital",
  //     "Analog",
  //     "Fitbit"
  //   ],
  //   accessories: [
  //     "Headphones",
  //     "Mobile Covers",
  //     "Speakers"
  //   ]
  // }
  constructor(private formBuilder: FormBuilder,
    private productService: ProductServiceService,
    private router: Router) { }


  ngOnInit() {
    this.addProductsForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],

      price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],

      code: ['', [Validators.minLength(3), Validators.maxLength(20)]],

      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],

      quantity: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(1000)]],
    });


  }

  get f() { return this.addProductsForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true
      if (this.addProductsForm.invalid) return
      await this.productService.insertProducts(this.addProductsForm.value)
      alert("product inserted succesfully")
      this.navigateToProducts()


    }
    catch (err) {
      alert(err);
    }
  }

  navigateToProducts() {
    this.router.navigate(['products'])
  }
}
//       category: [
//         // giving first value as default value
//         this.category[0],
//         [
//           Validators.required
//         ]
//       ],
//       subCategory: [
//         this.subCategory.clothes[0],
//         [
//           Validators.required
//         ]
//       ]
//     });
//   }
//   getSelectedCategory() {
//     switch (this.addProductsForm.controls['category'].value) {
//       case 'Clothes': return 'clothes'
//       case 'Watches': return 'watches'
//       case 'Accessories': return 'accessories'
//     }
//   }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.addProductsForm.invalid) {
//       return false;
//     }

//     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
//     console.log(this.addProductsForm.value)

//   }
  //  }