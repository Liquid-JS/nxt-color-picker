import { EventEmitter } from '@angular/core';
export declare class TextDirective {
    rg: number;
    text: any;
    newValue: EventEmitter<any>;
    inputChange(event: any): void;
}
