import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SignUpService} from './service/sign-up.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers:[
        SignUpService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ShowSignUp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ShowSignUp');
  });

  it('should capture the users first name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
   
    let firstName = compiled.querySelector('#firstName');

    //Act
    firstName.value='John'
    //Assert
    
    expect(firstName.value).toEqual('John');
  });

  it('should capture the users last name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
   
    let lastName = compiled.querySelector('#lastName');

    //Act
    lastName.value='Smith'
    //Assert
    
    expect(lastName.value).toEqual('Smith');
  });


  it('should capture the users email address', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
   
    let email = compiled.querySelector('#email');

    //Act
    email.value='jsmith@gmail.com'
    //Assert
    
    expect(email.value).toEqual('jsmith@gmail.com');
  });

  describe('FormSubmission', () => {

    it('should save the form fields', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const service = TestBed.get(SignUpService);
     const mockSignUpService = spyOn(service, 'save');
     
      let firstName = compiled.querySelector('#firstName');
      firstName.value='John'

      let lastName = compiled.querySelector('#lastName');
      let email = compiled.querySelector('#email');

      //Fill out all required fields
      //Click a save button that calls a service
      let saveBtn = compiled.querySelector('#saveBtn');

      saveBtn.click();

      fixture.detectChanges();

      //place the data in the service
      //cexecute a service to save the form data
      //verify it has called the service
      expect(mockSignUpService).toHaveBeenCalled();
    });
    
  });

});
