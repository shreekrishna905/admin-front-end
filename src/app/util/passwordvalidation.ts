import {FormGroup} from '@angular/forms';
export class PasswordValidation {

  static matchPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {
      [key: string]: boolean
    } => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        return {
          mismatchPassword: true
        };
      }
    }
  }
}