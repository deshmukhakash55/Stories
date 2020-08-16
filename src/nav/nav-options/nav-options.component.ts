import { Component } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css']
})
export class NavOptionsComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public navigateToSocial(): void {
    this.router.navigate([{ outlets: { home: 'social' } }]);
  }

  public navigateHome(): void {
    this.router.navigate([{ outlets: { home: 'home' } }]);
  }

  public isHomeOpened(): Observable<boolean> {
    return this.activatedRoute.url.pipe(
      map((urlSegments: UrlSegment[]) => {
        return this.isUrlValid(urlSegments[urlSegments.length - 1].path, 'home)');
      })
    );
  }

  private isUrlValid(path: string, expectedPath: string): boolean {
    return path.endsWith(expectedPath);
  }

  public isSocialOpened(): Observable<boolean> {
    return this.activatedRoute.url.pipe(
      map((urlSegments: UrlSegment[]) => this.isUrlValid(urlSegments[urlSegments.length - 1].path, 'social)'))
    );
  }

}
