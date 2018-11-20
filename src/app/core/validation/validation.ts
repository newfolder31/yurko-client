import { YuValidationErrors } from './validation-errors';
import { FormGroup, ValidationErrors } from '@angular/forms';

export class YuValidation {

    getValidationError(errors: ValidationErrors): string {

        return YuValidationErrors[Object.keys(errors)[0]] || YuValidationErrors['default'];
    }

    isFieldInvalid(formGroup: FormGroup, fieldName: string): boolean {
        return formGroup.get(fieldName).dirty && !!formGroup.get(fieldName).errors;
    }
}
