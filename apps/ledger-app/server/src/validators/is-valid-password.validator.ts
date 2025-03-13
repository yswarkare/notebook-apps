import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
  ValidatorOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsStrongPassword', async: false })
export class IsValidPasswordConstraint implements ValidatorConstraintInterface {
  errors: Array<string> = [];

  validate(inputPassword: string) {
    const errors = [];
    const password = inputPassword.trim();
    if (password.length < 8) {
      errors.push(' at least 8 characters');
    }
    if (password.search(/[A-Z]/g) < 0) {
      errors.push(' at least one uppercase letter');
    }
    if (password.search(/[a-z]/g) < 0) {
      errors.push(' at least one lowercase letter');
    }
    if (password.search(/[0-9]/g) < 0) {
      errors.push(' at least one digit');
    }
    if (password.search(/[^a-zA-Z\d]/g) < 0) {
      errors.push(' at least one special character');
    }
    if (errors.length > 0) {
      this.errors = errors;
      console.log(`Your password must contain ${errors.join(', ')}`);
      return false;
    } else {
      this.errors = [];
      return true;
    }
  }

  defaultMessage() {
    if (this.errors.length > 0) {
      return `Your password must contain ${this.errors.join(', ')}`;
    } else {
      return 'Password must be between 6 and 100 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
  }
}

export function IsValidPassword(validationOptions?: ValidatorOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPasswordConstraint,
    });
  };
}
