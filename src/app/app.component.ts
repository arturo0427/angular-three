import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraph } from '../scene-graph';
import { Color } from 'three';

@Component({
  selector: 'app-root',
  imports: [NgtCanvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { class: 'block h-dvh w-full' },
})
export class AppComponent {
  title = 'angular-three';

  protected sceneGraph = SceneGraph;
  backgroundColor = new Color('#121212');
}
