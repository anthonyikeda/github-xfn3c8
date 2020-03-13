import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WasmComponent } from './wasm/wasm.component';

const routes: Routes = [
  { path: 'wasm', component: WasmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
