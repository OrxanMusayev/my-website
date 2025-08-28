import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Ana Səhifə', route: '/' },
    { name: 'Haqqımda', route: '/about' },
    { name: 'Xidmətlər', route: '/services' },
    { name: 'Marketplace', route: '/marketplace' },
    { name: 'Əlaqə', route: '/contact' }
  ];

  services = [
    'Əsas Məsləhət',
    'Layihə Dəstək Paketi',
    'Korporativ Həllər',
    'AI Strategiyası',
    'Təlim və Mentorluq'
  ];

  socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/orxanmuss/', 
      icon: 'fab fa-linkedin',
      platform: 'linkedin'
    },
    { 
      name: 'Email', 
      url: 'mailto:orxanmusayev1102@gmail.com', 
      icon: 'fas fa-envelope',
      platform: 'email'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/aiwithorxan/', 
      icon: 'fab fa-instagram',
      platform: 'instagram'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit() {
    // Her route değişikliğinde sayfanın başına scroll et
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
  }

  // Footer linklerine tıklandığında da scroll to top
  onLinkClick() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    }, 100);
  }
}
