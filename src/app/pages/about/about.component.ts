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
    title: 'AI Researcher & Senior Software Engineer | PhD Candidate',
    bio: `10 ildə IT sektorunda qazandığım dərin təcrübə və hazırda apardığım AI tədqiqatları 
          sayəsində, innovativ süni zəka həlləri yaradıram. Akademik bilgiləri real biznes 
          problemləri ilə birləşdirərək, AI-ı praktik və məhsuldar ediram.`,
    mission: 'İnsanları və təşkilatları AI-ın həqiqi potensialından faydalandırmaq, texnologiya ilə insan zəkasını sintez edərək yeni imkanlar yaratmaq.',
    vision: 'AI-ı hər sahədə insan kreativliyini və səmərəliliyini artıran, problemləri həll edən güc kimi qurmaq və gələcəyin teknoloji liderlərini yetişdirmək.'
  };

  // Kişisel Bilgiler
  personalInfo = {
    about: `Həmişə AI sahəsinə böyük həvəsim olub və bu sahədə innovativ həllər yaratmağa 
            can atıram. 10 illik software development təcrübəmin üzərinə AI expertise 
            əlavə edərək, akademik tədqiqat və praktik tətbiqləri birləşdirirəm.`,
    career: `Senior Software Engineer olaraq müxtəlif kompleks layihələrdə liderlik etmişəm. 
             İndi isə AI sahəsində ixtisaslaşaraq, cloud texnologiyaları və machine learning 
             həllərini real biznes problemlərində tətbiq edirəm.`,
    education: `ASOIU-da Bachelor dərəcəmi, UNEC-də Master dərəcəmi aldım. Hazırda 
                International Science and Technology University-də AI sahəsində PhD 
                tədqiqatlarımı davam etdirirəm.`
  };

  // Profesyonel Yolculuq
  journeyData = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'PhD Candidate - Artificial Intelligence',
      period: '2025 - Davam ediyor',
      description: 'International Science and Technology University-də AI sahəsində doktora tədqiqatları aparıram və innovativ machine learning alqoritmləri üzərində işləyirəm.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & AI Solutions Architect',
      period: '2020 - Davam ediyor',
      description: 'Azure platformasında AI həllərini dizayn edirəm və cloud-native AI aplikasiyaları yaradıram.'
    },
    {
      icon: 'fas fa-code',
      title: 'Senior Software Engineer',
      period: '2018 - 2023',
      description: 'Kompleks software məhsullarının inkişafında liderlik edərək, AI component-lərini traditional sistemlərlə inteqrasiya etdim.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Software Developer',
      period: '2014 - 2018',
      description: 'IT sektorunda karyeraya başlayaraq, müxtəlif texnoloji stacklərdə təcrübə qazandım və AI-a olan marağımı inkişaf etdirdim.'
    }
  ];

  // Uzmanlık Alanları
  skillsData = [
    {
      icon: 'fas fa-brain',
      name: 'Artificial Intelligence & ML',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      icon: 'fas fa-cloud',
      name: 'Cloud & Infrastructure',
      skills: ['Microsoft Azure', 'Azure ML Studio', 'Cloud Architecture', 'Serverless Computing', 'DevOps', 'CI/CD Pipelines']
    },
    {
      icon: 'fas fa-code',
      name: 'Software Development',
      skills: ['Python', 'JavaScript', 'C#', 'TensorFlow', 'PyTorch', 'FastAPI', 'React', 'Node.js']
    },
    {
      icon: 'fas fa-database',
      name: 'Data Science & Analytics',
      skills: ['Data Mining', 'Statistical Analysis', 'Big Data Processing', 'SQL/NoSQL', 'Data Visualization', 'ETL Processes']
    },
    {
      icon: 'fas fa-cogs',
      name: 'System Architecture',
      skills: ['Microservices', 'API Design', 'System Integration', 'Performance Optimization', 'Security Implementation']
    }
  ];

  // Təhsil və Sertifikatlar
  educationData = [
    {
      icon: 'fas fa-graduation-cap',
      degree: 'PhD in Artificial Intelligence',
      institution: 'International Science and Technology University',
      year: '2025 - Davam ediyor',
      description: 'Machine Learning alqoritmləri və AI sistemləri üzərində dərin tədqiqat aparıram.'
    },
    {
      icon: 'fas fa-university',
      degree: 'Master of Computer Science',
      institution: 'Azerbaijan State University of Economics (UNEC)',
      year: '2016 - 2018',
      description: 'Kompüter elmləri sahəsində dərin bilik əldə etdim və AI-a olan marağımı inkişaf etdirdim.'
    },
    {
      icon: 'fas fa-laptop-code',
      degree: 'Bachelor of Information Technology',
      institution: 'Azerbaijan State Oil and Industry University (ASOIU)',
      year: '2012 - 2016',
      description: 'IT sahəsində möhkəm əsas qurdum və proqramlaşdırma bacarıqlarımı inkişaf etdirdim.'
    }
  ];
}