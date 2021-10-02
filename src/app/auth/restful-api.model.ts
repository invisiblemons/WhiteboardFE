export class RESTApiModel<T> {
    message: string;
    data?: T;
    error?: CustomError;
    [key: string]: any;
}

export class CustomError {
    code: string;
    params: CustomErrorParam;
}

export class CustomErrorParam {
    field: string | string[];
}