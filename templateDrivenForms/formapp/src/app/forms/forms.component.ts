import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService} from '../services/formPoster.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  languages: any[] = ['AngularJs', 'ReactJs', 'NodeJS', 'GoLang'];
  model = new Employee('John', 'Methew', 'a@a.com', '12345678', 'male', true, 'AngularJs');
  hasCodeLangError: Boolean = false;

  constructor(private _FormPosterService: FormPosterService) { }

  firstToUpper(value: string): void {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  submitForm(form: NgForm): void {
    this._FormPosterService.postEmployee(form.value)
        .subscribe((data) => console.log('success', data));
    console.log(form.value);
  }

  validateCodeLang(event): void {
    if (this.model.codelang === 'default') {
      this.hasCodeLangError = true;
    } else {
      this.hasCodeLangError = false;
    }
  }
  ngOnInit() {
  }

}


/*
<div class="row">
                    <div class="card col-sm-6" style="width:200px;"  *ngFor="let album ">
                        <img class="card-img-top" src="../assets/albums/{{album.cover}}.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">{{album.title}}</h4>
                        </div>
                    </div>
                 </div>


pristine   valid         untouched
dirty      invalid        touched

*/
