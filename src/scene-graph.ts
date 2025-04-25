import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { extend, injectBeforeRender } from 'angular-three';
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

@Component({
  selector: 'app-scene-graph',
  template: `
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-basic-material color="hotpink" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
  private meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor() {
    extend({ Mesh, BoxGeometry, MeshBasicMaterial });

    injectBeforeRender(({ delta }) => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += delta;
      mesh.rotation.y += delta;
    });
  }
}
