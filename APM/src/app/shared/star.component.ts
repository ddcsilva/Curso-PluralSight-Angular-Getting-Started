import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() classificacao: number = 0;
    larguraCorte: number = 75;
    @Output() classificacaoClicada: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.larguraCorte = this.classificacao * 75/5
    }

    onClick(): void {
        this.classificacaoClicada.emit(`A classificação ${this.classificacao} foi clicada!`);
    }
}