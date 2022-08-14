//Importar componentes
import { CardProductComponent } from "./card/card-product/card-product.component";
import { SliderComponent } from "./slider/slider.component";
import { InmodalComponent } from "./modals/inmodal/inmodal.component";
import { RegmodalComponent } from './modals/regmodal/regmodal.component';
import { ItemmodalComponent } from './modals/itemmodal/itemmodal.component';

export const components: any[] = [
    CardProductComponent,
    SliderComponent,
    InmodalComponent,
    RegmodalComponent,
    ItemmodalComponent
];

export * from "./card/card-product/card-product.component";
export * from "./slider/slider.component";
export * from "./modals/inmodal/inmodal.component";
export * from './modals/regmodal/regmodal.component';
export * from './modals/itemmodal/itemmodal.component';
