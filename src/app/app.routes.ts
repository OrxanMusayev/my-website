import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Orxan Musayev | AI Danışmanlık Hizmetleri - Yapay Zeka Stratejisti',
    data: { 
      description: 'AI danışmanlığı ile işinizi dönüştürün. Yapay zeka stratejileri, proje danışmanlığı ve kurumsal AI çözümleri.' 
    }
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'Hakkımda | Orxan Musayev - AI Danışmanı',
    data: { 
      description: 'AI alanında uzman Orxan Musayev hakkında bilgi alın. Deneyim, misyon ve vizyon.' 
    }
  },
  { 
    path: 'services', 
    component: ServicesComponent,
    title: 'AI Danışmanlık Hizmetleri | Yapay Zeka Çözümleri',
    data: { 
      description: 'Temel danışmanlık, proje desteği ve kurumsal AI çözümleri. Size uygun paketi keşfedin.' 
    }
  },
  { 
    path: 'marketplace', 
    component: MarketplaceComponent,
    title: 'AI Otomasyonlar | N8N İş Akışları Marketi',
    data: { 
      description: 'Hazır AI otomasyonlarını keşfedin ve işinizi kolaylaştırın. WhatsApp, e-mail, sosyal medya otomasyonları.' 
    }
  },
  { 
    path: 'blog', 
    component: BlogComponent,
    title: 'AI Blog | Yapay Zeka Trendleri ve İçgörüler',
    data: { 
      description: 'AI dünyasındaki son gelişmeler, pratik ipuçları ve iş stratejileri hakkında yazılar.' 
    }
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    title: 'İletişim | AI Danışmanlığı için İletişime Geçin',
    data: { 
      description: 'AI projeleriniz için profesyonel danışmanlık almak üzere iletişime geçin.' 
    }
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];
