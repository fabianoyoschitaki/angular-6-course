import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    styles: [
        `
            p {
                padding: 20px;
                background-color: mistyrose;
                border: 1px solid red;
                font-weight: bold;
            }
        `
    ],
    template: `
        <p>This is a warning, you are in danger!</p>
    `
})
export class WarningAlertComponent {

}