import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import {
  NgtArgs,
  extend,
  injectBeforeRender,
  injectStore,
} from 'angular-three';
import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  SpotLight,
} from 'three';
import { OrbitControls } from 'three-stdlib';

@Component({
  selector: 'app-scene-graph',
  template: `
    <!-- Mesh -->
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-standard-material color="hotpink" />
    </ngt-mesh>

    <!-- Luces a nivel de escena -->
    <ngt-ambient-light [intensity]="0.1" />
    <ngt-directional-light
      [position]="10"
      [intensity]="0.7 * Math.PI"
      [angle]="0.4"
      [penumbra]="1"
      [decay]="0"
      [color]="'#1a1a'"
    />

    <!-- OrbitControls: args = [camera, gl.domElement] -->
    <ngt-orbit-controls *args="[camera(), glDomElement()]" />
    <ngt-grid-helper />
  `,
  imports: [NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
  private meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  protected Math = Math;

  private store = injectStore();

  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');

  constructor() {
    extend({
      Mesh,
      BoxGeometry,
      MeshStandardMaterial,
      AmbientLight,
      SpotLight,
      DirectionalLight,
      OrbitControls,
      GridHelper,
    });

    injectBeforeRender(({ delta }) => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += delta;
      mesh.rotation.y += delta;
    });
  }
}
