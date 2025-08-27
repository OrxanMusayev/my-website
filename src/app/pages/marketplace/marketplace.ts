import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.scss'
})
export class MarketplaceComponent {
  
  // N8N otomasyonları için demo data
  automations = [
    {
      id: 1,
      title: 'WhatsApp Müştəri Dəstəyi',
      description: 'Avtomatik müştəri sorğularına cavab verir və uyğun departmana yönləndirir',
      category: 'Müştəri Dəstəyi',
      price: 49,
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=200&fit=crop&crop=center',
      features: ['24/7 Cavab', 'Multi-dil Dəstəyi', 'Ağıllı Yönləndirmə'],
      rating: 4.8,
      downloads: 1250
    },
    {
      id: 2,
      title: 'E-mail Marketinq Avtomatizasyonu',
      description: 'Müştəri davranışına əsasən personalizə edilmiş e-mail kampaniyaları',
      category: 'Marketinq',
      price: 39,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=200&fit=crop&crop=center',
      features: ['Personalizasiya', 'A/B Test', 'Analitika'],
      rating: 4.6,
      downloads: 890
    },
    {
      id: 3,
      title: 'Sosial Media İdarəetməsi',
      description: 'Instagram, Facebook və LinkedIn üçün avtomatik post paylaşımı',
      category: 'Sosial Media',
      price: 59,
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=200&fit=crop&crop=center',
      features: ['Çox Platform', 'Avtomatik Paylaşım', 'Məzmun Planlaması'],
      rating: 4.7,
      downloads: 1050
    },
    {
      id: 4,
      title: 'CRM İnteqrasiyası',
      description: 'Müştəri məlumatlarını avtomatik olaraq CRM sisteminə əlavə edir',
      category: 'CRM',
      price: 79,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center',
      features: ['Avtomatik Əlavə', 'Data Sinxronizasiyası', 'Lead Skorlaması'],
      rating: 4.9,
      downloads: 720
    },
    {
      id: 5,
      title: 'Inventar İdarəetməsi',
      description: 'Stok səviyyələrini izləyir və avtomatik sifariş verir',
      category: 'İnventar',
      price: 69,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop&crop=center',
      features: ['Stok İzləmə', 'Avtomatik Sifariş', 'Təchizatçı İnteqrasiyası'],
      rating: 4.5,
      downloads: 640
    },
    {
      id: 6,
      title: 'Maliyyə Hesabat Generatoru',
      description: 'Aylıq maliyyə hesabatlarını avtomatik olaraq hazırlayır',
      category: 'Maliyyə',
      price: 89,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center',
      features: ['PDF Generasiya', 'Qrafik Analiz', 'E-mail Göndərmə'],
      rating: 4.8,
      downloads: 480
    }
  ];

  categories = [
    'Hamısı',
    'Müştəri Dəstəyi',
    'Marketinq',
    'Sosial Media',
    'CRM',
    'İnventar',
    'Maliyyə'
  ];

  selectedCategory = 'Hamısı';
  searchTerm = '';

  // Filterlenmiş otomasyonlar
  get filteredAutomations() {
    return this.automations.filter(automation => {
      const matchesCategory = this.selectedCategory === 'Hamısı' || automation.category === this.selectedCategory;
      const matchesSearch = automation.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           automation.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
