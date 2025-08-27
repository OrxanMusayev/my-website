import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  };

  isSubmitting = false;

  faqs = [
    {
      question: 'AI məsləhət xidmətləriniz nələri əhatə edir?',
      answer: 'AI strategiya hazırlama, alət seçimi, komanda təlimi, avtomatlaşdırma həlləri və məlumat analitikası kimi geniş spektrli xidmətlər təklif edirəm.',
      isOpen: false
    },
    {
      question: 'Layihə nə qədər vaxt sürar?',
      answer: 'Layihənin mürəkkəbliyindən asılı olaraq, sadə məsləhət 1-2 həftə, tam strategiya planı 4-6 həftə, böyük korporativ həllər isə 2-6 ay çəkə bilər.',
      isOpen: false
    },
    {
      question: 'Hansı sektorlarla işləyirsiniz?',
      answer: 'E-ticarət, maliyyə, səhiyyə, təhsil, istehsal və xidmət sektorları daxil olmaqla müxtəlif sahələrdə təcrübəm var.',
      isOpen: false
    },
    {
      question: 'Uzaqdan işləmək mümkündürmü?',
      answer: 'Bəli, bütün məsləhət xidmətlərimi uzaqdan təqdim edə bilirəm. Online görüşlər, ekran paylaşımı və virtual təlimlər vasitəsilə effektiv əməkdaşlıq edirəm.',
      isOpen: false
    },
    {
      question: 'Layihədən sonra dəstək verirsizmi?',
      answer: 'Bəli, bütün layihələrə 3 aylıq pulsuz dəstək daxildir. Bu müddətdən sonra da gərəkərsə davamlı dəstək paketləri təklif edirəm.',
      isOpen: false
    }
  ];

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      this.isSubmitting = true;
      
      // Simulated form submission
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm);
        this.isSubmitting = false;
        // Reset form
        this.contactForm = {
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        };
        alert('Mesajınız uğurla göndərildi!');
      }, 2000);
    }
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
