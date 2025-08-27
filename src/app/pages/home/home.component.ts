import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { title: 'Vaxt Qazanın', description: 'AI ilə proseslərinizi avtomatlaşdırın' },
    { title: 'Xərcləri Azaldın', description: 'Səmərəli AI həlləri ilə qənaət edin' },
    { title: 'Məhsuldarlığı Artırın', description: 'İş axınlarınızı optimallaşdırın' }
  ];

  blogPosts = [
    { title: 'AI ilə İş Proseslərində Transformasiya', excerpt: 'Müasir biznes dünyasında AI\'ın rolu...' },
    { title: 'Gələcəyin AI Trendləri', excerpt: '2025\'də bizi gözləyən AI inkişafları...' },
    { title: 'Kiçik Müəssisələr üçün AI Alətləri', excerpt: 'KOM\'lər üçün ən uyğun AI həlləri...' }
  ];
}
