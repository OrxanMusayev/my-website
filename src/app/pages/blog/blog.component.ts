import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  categories = [
    { name: 'Hamısı', slug: 'all', active: true },
    { name: 'AI Alətləri', slug: 'tools', active: false },
    { name: 'Marketinq üçün AI', slug: 'marketing', active: false },
    { name: 'Gələcək Trendləri', slug: 'trends', active: false },
    { name: 'İş Strategiyaları', slug: 'business', active: false }
  ];

  blogPosts = [
    {
      id: 1,
      title: 'AI ilə İş Proseslərində Transformasiya',
      excerpt: 'Müasir iş dünyasında süni intellekt texnologiyalarının necə inqilab yaratdığını və şirkətlərin bu transformasiyadan necə faydalana biləcəyini kəşf edin.',
      category: 'İş',
      date: '2025-01-15',
      readTime: '8',
      image: '/assets/images/blog1.jpg',
      featured: true,
      link: '#'
    },
    {
      id: 2,
      title: 'Gələcəyin AI Trendləri: 2025 və Sonrası',
      excerpt: '2025-ci ildə bizi gözləyən AI inkişafları və bu texnologiyaların iş dünyasına təsirlərini təhlil edirik.',
      category: 'Trendlər',
      date: '2025-01-12',
      readTime: '6',
      image: '/assets/images/blog2.jpg',
      featured: false,
      link: '#'
    },
    {
      id: 3,
      title: 'Kiçik Müəssisələr üçün AI Alətləri',
      excerpt: 'KOM-lər üçün büdcə dostu və təsirli AI həllərini kəşf edin. Hansı alətlər həqiqətən işə yarayır?',
      category: 'Alətlər',
      date: '2025-01-10',
      readTime: '5',
      image: '/assets/images/blog3.jpg',
      featured: false,
      link: '#'
    },
    {
      id: 4,
      title: 'AI ilə Marketinq Strategiyalarınızı Gücləndin',
      excerpt: 'Marketinq kampaniyalarınızda AI-nin gücündən necə faydalana biləcəyinizi öyrənin.',
      category: 'Marketinq',
      date: '2025-01-08',
      readTime: '7',
      image: '/assets/images/blog4.jpg',
      featured: false,
      link: '#'
    },
    {
      id: 5,
      title: 'ChatGPT və İş Həyatı: Praktik İstifadə Nümunələri',
      excerpt: 'ChatGPT-ni iş həyatınızda necə daha səmərəli istifadə edə biləcəyinizə dair praktik məsləhətlər.',
      category: 'Alətlər',
      date: '2025-01-05',
      readTime: '9',
      image: '/assets/images/blog5.jpg',
      featured: false,
      link: '#'
    },
    {
      id: 6,
      title: 'AI Etikası və İş Dünyasındakı Məsuliyyətlər',
      excerpt: 'Süni intellekt istifadə edərkən diqqət edilməsi lazım olan etik mövzular və məsul AI istifadəsi.',
      category: 'İş',
      date: '2025-01-03',
      readTime: '10',
      image: '/assets/images/blog6.jpg',
      featured: false,
      link: '#'
    }
  ];

  get featuredPost() {
    return this.blogPosts.find(post => post.featured);
  }

  filteredPosts = [...this.blogPosts];

  filterByCategory(slug: string) {
    this.categories.forEach(cat => cat.active = false);
    this.categories.find(cat => cat.slug === slug)!.active = true;
    
    if (slug === 'all') {
      this.filteredPosts = [...this.blogPosts];
    } else {
      this.filteredPosts = this.blogPosts.filter(post => post.category === slug);
    }
  }
}
