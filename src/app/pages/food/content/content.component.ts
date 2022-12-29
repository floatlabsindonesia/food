import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector    : 'app-content',
    templateUrl : './content.component.html',
    styleUrls   : ['./content.component.scss']
})
export class ContentComponent {

    listPembeli         : any = []

    model: any

    constructor( private cdref: ChangeDetectorRef ) {}

    ngOnInit(): void {
        this.model = {
            diskon  : {
                tipe    : "persen",
                jumlah  : null
            },
            ongkir  : null
        }
        this.listPembeli = [
            {
                nama    : null,
                item    : [
                    {
                        nama    : null,
                        harga   : null
                    }
                ]
            }
        ]
    }

    btnSwitchDiskon(tipe: string){
        this.model.diskon.tipe      = tipe
        this.cdref.detectChanges(); // jika tidak ada ini error
        this.model.diskon.jumlah    = null
    }

    dataPengaturan(){
        return this.model
    }

    hapusItem(indexParent: any, indexChild: any){
        this.listPembeli[indexParent].item.splice(indexChild, 1);
    }

    hapusPembeli(index: any){
        this.listPembeli.splice(index, 1);
    }

    result(){
        return this.listPembeli
    }

    tambahItem(index: any){
        this.listPembeli[index].item.push({nama: null,harga: null})        
    }

    tambahPembeli(){
        this.listPembeli.push(
            {
                nama    : null,
                item    : [
                    {
                        nama    : null,
                        harga   : null
                    }
                ]
            }
        )
    }

    validasiDiskon(){
        if(this.model.diskon.tipe == 'persen' && this.model.diskon.jumlah > 100){
            this.model.diskon.jumlah = 100
        }
    }
}
