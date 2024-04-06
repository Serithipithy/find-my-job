import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrl: './job-add.component.scss',
})
export class JobAddComponent {
  jobFormGroup: FormGroup = new FormGroup({})
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit started...");
    this.jobFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      position: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      open: new FormControl(false),
      location: new FormControl('', Validators.required),
      remote: new FormControl('', Validators.required),
    })

    // this.jobFormGroup.valueChanges.subscribe((value) => {
    //   console.log("Form model: ", this.jobFormGroup);
    //   // console.log('First name erorrs:', this.formGroup.get('firstName')?.errors);
    //   console.log('New value:', value);
    // });
  }

  submitForm() {
    if (this.jobFormGroup.valid) {
      // Form submission logic
      console.log(this.jobFormGroup.value);
    }
  }

  setTitleRequiredStatus(checkboxValue: boolean): void {
    const titleControl = this.jobFormGroup.get('title');
    if (checkboxValue === true) {
      titleControl?.clearValidators();
    } else {
      titleControl?.setValidators(Validators.required);
    }
    // Reevaluate the email FormControl's validation state
    titleControl?.updateValueAndValidity();
  }

  setOrPatchValue(): void {
    // this.jobFormGroup.setValue({
    //   title: 'Software Engineer',
    //   description: 'This is a job for a software engineer.',
    //   position: 'Senior',
    //   company: 'Tech Corp',
    //   experience: '5 years',
    //   open: true,
    //   location: 'Bucharest',
    //   remote: 'Yes'
    // });
    this.jobFormGroup.patchValue({
      title: 'Software Engineer',
      description: 'This is a job for a software engineer.',
    });
  }
}
