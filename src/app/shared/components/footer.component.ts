import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Ana Səhifə', route: '/' },
    { name: 'Haqqımda', route: '/about' },
    { name: 'Xidmətlər', route: '/services' },
    { name: 'Marketplace', route: '/marketplace' },
    { name: 'Bloq', route: '/blog' },
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
      url: 'https://linkedin.com/in/orxanmusayev', 
      icon: 'fab fa-linkedin',
      platform: 'linkedin'
    },
    { 
      name: 'Email', 
      url: 'mailto:info@orxanmusayev.com', 
      icon: 'fas fa-envelope',
      platform: 'email'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/orxanmusayev', 
      icon: 'fab fa-instagram',
      platform: 'instagram'
    }
  ];
}
