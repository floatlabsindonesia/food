import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector    : 'app-navbar-bottom',
    templateUrl : './navbar-bottom.component.html',
    styleUrls   : ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {
    @Input()    dataPengaturan  : any = {};
    @Input()    listPembeli     : any = [];
    @Output()   tambahPembeli   = new EventEmitter<string>();

    // Lottie
    options: AnimationOptions = {
        path: '/assets/js/empty.json',
    };

    listResult  : any = []

    total   : any

    ngOnInit() {

    }

    addPenerima(){
        this.tambahPembeli.emit()
    }

    hitung(){
        let model = {
            diskon  : {
                tipe    : this.dataPengaturan.diskon.tipe,
                jumlah  : this.dataPengaturan.diskon.jumlah ?? 0
            },
            ongkir  : this.dataPengaturan.ongkir ?? 0
        }
        let modelPembeli    : any = [];
        let ongkir          : any = model.ongkir / this.listPembeli.length

        this.listPembeli.forEach((val: any, key: any) => {
            let subtotal = 0
            val.item.forEach((val2: any, key2: any) => {
                subtotal = val2.harga != null ? (subtotal + val2.harga) : subtotal + 0
            })
            modelPembeli.push({
                nama        : val.nama ?? "Pembeli " + (key + 1),
                subtotal    : "Rp" + (subtotal.toLocaleString("id-ID")),
                diskon      : this.hitungDiskon(subtotal).string,
                ongkir      : "Rp" + ((ongkir).toLocaleString("id-ID")),
                total       : "Rp" + (subtotal - this.hitungDiskon(subtotal).digit + ongkir).toLocaleString("id-ID"),
                total_digit : (subtotal - this.hitungDiskon(subtotal).digit + ongkir)
            })
        });

        let total = 0
        modelPembeli.forEach((val: any, key: any) => {
            total = total + val.total_digit
        })
        this.total = "Rp" + (total).toLocaleString("id-ID")

        return this.listResult = modelPembeli
    }

    hitungDiskon(harga: any){
        let tipe    = this.dataPengaturan.diskon.tipe
        let jumlah  = this.dataPengaturan.diskon.jumlah ?? 0
        
        if(tipe == "persen" && jumlah != 0){
            return {
                string: "(" + jumlah + "%) -Rp" + ((jumlah * harga) / 100).toLocaleString('id-ID'),
                digit: ((jumlah * harga) / 100)
            }
        } else {
            let diskon = jumlah / this.listPembeli.length
            return {
                string: "Rp" + diskon.toLocaleString('id-ID'),
                digit: diskon
            }
        }
    }
}
