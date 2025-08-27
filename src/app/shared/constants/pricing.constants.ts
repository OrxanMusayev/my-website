// Pricing Configuration - Centralized pricing data
// Bu faylda bütün qiymətləndirmə məlumatları saxlanılır
// Gələcəkdə backend-dən gələn data ilə əvəz edilə bilər

export interface PricingPlan {
  id: number;
  title: string;
  subtitle: string;
  price: number; // USD formatında
  currency: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export const PRICING_CONFIG = {
  currency: 'USD',
  period: 'ay',
  plans: [
    {
      id: 1,
      title: 'Əsas Məsləhət',
      subtitle: 'Basic',
      price: 2.99,
      currency: 'USD',
      period: 'ay',
      description: 'Fikir mərhələsindəki layihələr üçün əsas yol xəritəsi və AI alətləri təklifləri təqdim edir.',
      features: [
        'AI strategiyası məsləhəti',
        'Uyğun alət təklifləri',
        'Əsas tətbiq bələdçisi',
        '2 saat pulsuz məsləhət'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Layihə Dəstək Paketi',
      subtitle: 'Pro',
      price: 9.99,
      currency: 'USD',
      period: 'ay',
      description: 'Müəyyən bir layihədə AI inteqrasiyasını addım-addım tətbiq etməyi əhatə edən hərtərəfli dəstək.',
      features: [
        'Ətraflı layihə təhlili',
        'Fərdiləşdirilmiş AI həlləri',
        'Addım-addım tətbiq',
        'Davamlı dəstək və mentorluq',
        'Performans optimallaşdırılması'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'Korporativ Həllər',
      subtitle: 'Enterprise',
      price: 99.99,
      currency: 'USD',
      period: 'ay',
      description: 'Şirkətlərin mövcud iş proseslərini təhlil edərək, AI ilə effektivlik və avtomatlaşdırma təmin edəcək xüsusi və miqyaslana bilən həllər təklif edir.',
      features: [
        'Hərtərəfli iş prosesi təhlili',
        'Xüsusi AI həlli inkişaf etdirmə',
        'Komanda təlimi və mentorluq',
        'Miqyaslana bilən sistem arxitekturası',
        '7/24 texniki dəstək',
        'ROI təhlili və hesabat'
      ],
      popular: false
    }
  ]
};

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export const BENEFITS_CONFIG: BenefitItem[] = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Ekspert Rəhbərlik',
    description: 'Sahəsində təcrübəli AI ekspertindən peşəkar məsləhət'
  },
  {
    icon: 'fas fa-clock',
    title: 'Sürətli Nəticə',
    description: 'Sübut edilmiş metodlarla qısa müddətdə konkret nəticələr'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Fərdiləşdirilmiş Həll',
    description: 'Ehtiyaclarınıza xüsusi olaraq hazırlanmış AI strategiyaları'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Davamlı Böyümə',
    description: 'Uzunmüddətli uğur üçün miqyaslana bilən həllər'
  }
];

// Helper functions for price formatting
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const getFormattedPrice = (price: number, currency: string, period: string): string => {
  return `${formatPrice(price)} ${currency}/${period}`;
};
