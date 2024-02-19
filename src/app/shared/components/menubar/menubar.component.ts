
import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
    selector: 'shared-menubar',
    templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de angular',
                icon: 'pi pi-fw pi-th-large',
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: PrimeIcons.ALIGN_LEFT,
                        routerLink: '/'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Números',
                        icon: PrimeIcons.DOLLAR,
                        routerLink: 'number'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'No comunes',
                        icon: PrimeIcons.QUESTION_CIRCLE,
                        routerLink: 'common'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: PrimeIcons.COG,
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
        ];
    }
}
