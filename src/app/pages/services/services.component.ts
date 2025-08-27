import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRICING_CONFIG, BENEFITS_CONFIG, formatPrice, PricingPlan } from '../../shared/constants/pricing.constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  // Mərkəzi pricing configuration-dan istifadə edirik
  services: PricingPlan[] = PRICING_CONFIG.plans;
  
  // Benefits data
  benefits = BENEFITS_CONFIG;
  
  // Price formatting helper
  formatPrice = formatPrice;
  
  // Currency və period məlumatları
  currency = PRICING_CONFIG.currency;
  period = PRICING_CONFIG.period;
}
