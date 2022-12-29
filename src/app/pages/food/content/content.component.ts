import { Component } from '@angular/core';

@Component({
    selector    : 'app-content',
    templateUrl : './content.component.html',
    styleUrls   : ['./content.component.scss']
})
export class ContentComponent {

    listPembeli         : any = []

    model: any

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
        this.model.diskon.jumlah    = null
    }

    castToInt(){
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

    
    hapusItem(indexParent: any, indexChild: any){
        this.listPembeli[indexParent].item.splice(indexChild, 1);
    }

    hapusPembeli(index: any){
        this.listPembeli.splice(index, 1);
    }

    result(){
        return this.listPembeli
    }

    dataPengaturan(){
        return this.model
    }
}
