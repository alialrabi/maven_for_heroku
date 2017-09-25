import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    MavenForHerokuSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        MavenForHerokuSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        MavenForHerokuSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class MavenForHerokuSharedCommonModule {}
