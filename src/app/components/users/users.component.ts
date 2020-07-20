import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  constructor( 
    private fb: FormBuilder, 
    private router: Router 
  ) { 
    this.createForm();
  }

  angForm: FormGroup;

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      rut: ["", Validators.required],
      celular: ["", Validators.required],
      correo: ["", Validators.required]
    });
  }

  onContinue() {
    this.router.navigate([
      'rent/'+'/'+this.angForm.value.rut+
      '/'+this.angForm.value.celular+
      '/'+this.angForm.value.correo
    ]);
  }

}
