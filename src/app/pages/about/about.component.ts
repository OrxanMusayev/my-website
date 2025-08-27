import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profileData = {
    name: 'Orxan Musayev',
    title: 'AI Məsləhətçisi və Strategi',
    bio: `AI\'a olan həvəsim və bilik məşqədəm ilə, fərdlərin və şirkətlərin süni zəkadan 
          maksimum fayda əldə etmələrinə kömək edirəm. Məsləhətçiliyə, AI\'ı hər kəs 
          üçün əlçatan və tətbiq edilə bilən etmək məqsədi ilə başladım.`,
    mission: 'İnsanların AI texnologiyasını əlçatan və tətbiq edilə bilən vəziyyətə gətirmək.',
    vision: 'AI\'ın biznes dünyasında və fərdi layihələrdə transformativ güc kimi istifadə edilməsini təmin etmək.',
    experience: [
      { title: '5+ İl', description: 'AI və Maşın Öyrənməsi Təcrübəsi' },
      { title: '50+', description: 'Uğurla Tamamlanan Layihə' },
      { title: '100+', description: 'Məmnun Müştəri' }
    ]
  };
}
