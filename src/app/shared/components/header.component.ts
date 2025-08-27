import { Component, Inject, PLATFORM_ID, HostListener, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  isScrolled = false;
  isMobileMenuOpen = false;
  
  // User authentication states
  isLoggedIn = true; // Test için true yapıyoruz
  isUserMenuOpen = false;
  userName = 'Orxan Musayev';
  userAvatar = '';
  userInitials = 'OM';

  // Navigation links
  navLinks = [
    { label: 'Ana Səhifə', route: '/', isActive: false },
    { label: 'Haqqımda', route: '/about', isActive: false },
    { label: 'Xidmətlər', route: '/services', isActive: false },
    { label: 'Marketplace', route: '/marketplace', isActive: false },
    { label: 'Bloq', route: '/blog', isActive: false },
    { label: 'Əlaqə', route: '/contact', isActive: false }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode = prefersDark;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      }
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Prevent body scroll when mobile menu is open
    if (isPlatformBrowser(this.platformId)) {
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = '';
      }
    }
  }

  // User authentication methods
  showLogin() {
    console.log('Show login modal');
    // TODO: Implement login modal
  }

  showSignup() {
    console.log('Show signup modal');
    // TODO: Implement signup modal
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  viewProfile(event: Event) {
    event.preventDefault();
    console.log('View profile');
    this.isUserMenuOpen = false;
    // TODO: Navigate to profile page
  }

  viewSettings(event: Event) {
    event.preventDefault();
    console.log('View settings');
    this.isUserMenuOpen = false;
    // TODO: Navigate to settings page
  }

  logout(event: Event) {
    event.preventDefault();
    console.log('Logout user');
    this.isLoggedIn = false;
    this.isUserMenuOpen = false;
    // TODO: Implement logout logic
  }
}
