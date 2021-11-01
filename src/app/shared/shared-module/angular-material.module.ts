import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';

const angularMaterialModule = [
	MatInputModule,
	MatFormFieldModule,
	MatButtonModule,
	MatTabsModule,
	MatSnackBarModule,
	MatCardModule,
	MatSelectModule,
	MatIconModule,
	MatDialogModule,
	MatMenuModule,
	MatStepperModule,
	MatCheckboxModule,
	MatRadioModule,
	MatExpansionModule,
	MatBottomSheetModule,
	MatListModule,
	MatSidenavModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatTooltipModule,
	MatBadgeModule,
	MatToolbarModule,
    MatRippleModule
];


@NgModule({
	exports: [
		angularMaterialModule
	]
})
export class AngularMaterialModule {
}
