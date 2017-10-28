import { AsyncValidatorFn, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

export function validatePassword(pass: string, confirm: string) {
    return function(group: FormGroup): ValidationErrors {
        if (group.get(pass).value === group.get(confirm).value) {
            return null;
        }
        return { confirmPassword: true };
    }
}

// export function uniquePseudo(auth:AuthService):AsyncValidatorFn {
//     return function(control:AbstractControl):Observable<ValidationErrors> {
//         return auth.getByPseudo(control.value)
//                 .debounceTime(1000)
//                 .map(users => {
//                     if(users.length === 0) {
//                         return null
//                     }
//                     return {unique:true}
//                 });
//     }
// }

export function frenchDate(): ValidatorFn {
    return function(control:AbstractControl):ValidationErrors{
        //ce test de date est pas foufou (genre il accepte 99/99/9999 comme date)
        const reg = new RegExp(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/);
        const valid = reg.test(control.value);
        if(valid || !control.value) {
            return null
        }
        return {frenchDate: true};

    }
}