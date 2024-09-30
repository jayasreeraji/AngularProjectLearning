import { Component } from "@angular/core"; //angular component module

@Component({
    selector: 'app-navbar', //Good practice for selector name - "app-selector_name"
    standalone: true,
    // template: `<h1>Navbar Component</h1> -- Use either Inline code or use external HTML file
    //            <p>Dummy paragraph</p>
    //            <button>submit</button>`,
    // styles: `h1{ -- Use either Inline code or use external CSS file
    //             color: red;
    //             background: black
    //         }`,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class AppNavbar { //camel case why export? To access this class outside of this component

}  