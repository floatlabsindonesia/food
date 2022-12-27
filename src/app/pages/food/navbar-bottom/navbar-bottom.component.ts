import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector    : 'app-navbar-bottom',
    templateUrl : './navbar-bottom.component.html',
    styleUrls   : ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {
    @Input()    listPembeli     : any = [];
    @Output()   tambahPembeli   = new EventEmitter<string>();

    ngOnInit() {
        console.log(this.listPembeli)
    }

    addPenerima(){
        this.tambahPembeli.emit()
    }

    hitung(){
        console.log(this.listPembeli)
    }
}
