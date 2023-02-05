import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() classificacao: number = 0;
    larguraCorte: number = 75;

    ngOnChanges(): void {
        this.larguraCorte = this.classificacao * 75/5
    }

    onClick(): void {
        console.log(`A classificação ${this.classificacao} foi clicada!`);
    }
}