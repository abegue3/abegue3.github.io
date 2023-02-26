import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class ToastErrorHandler extends ErrorHandler {

    public override handleError(error: Error) {
        console.error(error.message);
    }
}
