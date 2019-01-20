import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    company: new FormControl(''),
    message: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value);
    this.submitted = true;
    form.reset();
    setTimeout(()=>{
      this.submitted = false;
    }, 3000);
  }
}
