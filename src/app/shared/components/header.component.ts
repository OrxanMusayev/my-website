import { Component, Inject, PLATFORM_ID, HostListener, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  isDarkMode = false;
  isScrolled = false;
  isMobileMenuOpen = false;

  // User authentication states
  isLoggedIn = true; // Test için true yapıyoruz
  isUserMenuOpen = false;
  userName = 'Orxan Musayev';
  userAvatar = '';

  get userInitials(): string {
    if (!this.userName) return '';
    return this.userName.trim().charAt(0).toUpperCase();
  }

  // Navigation links
  navLinks = [
    { label: 'Ana Səhifə', route: '/', isActive: false },
    { label: 'Haqqımda', route: '/about', isActive: false },
    { label: 'Xidmətlər', route: '/services', isActive: false },
    { label: 'Marketplace', route: '/marketplace', isActive: false },
    { label: 'Əlaqə', route: '/contact', isActive: false }
  ];

  private globalClickUnlisten: (() => void) | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Set active nav link based on current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateActiveNavLink(event.url);
    });

    // Initial active link
    this.updateActiveNavLink(this.router.url);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.globalClickUnlisten = this.renderer.listen('document', 'click', (event: MouseEvent) => {
        // Eğer menü açık değilse hiçbir şey yapma
        if (!this.isUserMenuOpen) return;

        // Tıklanan elementin account section içinde olup olmadığını kontrol et
        const clickedElement = event.target as HTMLElement;
        const accountSection = this.elRef.nativeElement.querySelector('.account-section.modern');

        // Eğer account section dışında bir yere tıklandıysa menüyü kapat
        if (accountSection && !accountSection.contains(clickedElement)) {
          console.log('Menü kapatılıyor - dışarı tıklandı');
          this.isUserMenuOpen = false;
          // Angular'ın change detection'ını manuel olarak tetikle
          this.cdr.detectChanges();
          console.log('Menü kapatıldı, change detection tetiklendi');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.globalClickUnlisten) {
      this.globalClickUnlisten();
    }
  }

  private updateActiveNavLink(currentUrl: string) {
    this.navLinks.forEach(link => {
      link.isActive = link.route === currentUrl;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.pageYOffset > 50;
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

    // Logout işlemi
    this.isLoggedIn = false;
    this.isUserMenuOpen = false;

    // Local storage'dan user bilgilerini temizle (örnek)
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }

    // İsteğe bağlı: Login sayfasına yönlendir
    // this.router.navigate(['/login']);

    console.log('User logged out successfully');
  }

  // Navigation linklerine tıklandığında scroll to top
  onNavLinkClick() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    }, 100);
  }
}
