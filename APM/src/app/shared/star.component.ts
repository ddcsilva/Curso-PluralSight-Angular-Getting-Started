import { Component, OnChanges } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    classificacao: number = 4;
    larguraCorte: number = 75;

    ngOnChanges(): void {
        this.larguraCorte = this.classificacao * 75/5
    }
}