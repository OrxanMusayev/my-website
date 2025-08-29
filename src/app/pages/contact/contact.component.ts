import { Component, OnInit, OnDestroy } from '@angular/core';

// Declare gtag as a global variable for TypeScript
declare var gtag: Function;
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  // Form Data
  contactForm: ContactForm = {
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  };

  // Form States
  isSubmitting = false;
  isFormSubmitted = false;
  submitError = '';

  // FAQ Data
  faqs: FAQ[] = [
    {
      question: 'AI xidmətlərinizə nələri əhatə edir?',
      answer: 'AI dəstəkli strategiyanın hazırlanması, AI alətlər seçimi, komanda təlimi, avtomatlaşdırma həlləri və məlumat analitikası kimi geniş spektrli xidmətlər təklif olunur. Hər layihə üçün fərdiləşdirilmiş yanaşma tətbiq edilir.',
      isOpen: false
    },
    {
      question: 'Fərdi həllər üçün layihələr nə qədər vaxt davam edir?',
      answer: 'Layihənin mürəkkəbliyindən asılı olaraq, sadə məsləhət 1-2 həftə, tam strategiya planı 4-6 həftə, xüsusi avtomatlaşdırılmı sistemlərin qurulmasi 4-8 həftə, böyük korporativ həllər isə 2-6 ay çəkə bilər. Təfsilatları konsultasiya zamani müzakirə edirik.',
      isOpen: false
    },
    {
      question: 'Hansı sektorlarla işləyirsiniz?',
      answer: 'E-ticarət, maliyyə, səhiyyə, təhsil, turizm və xidmət sektorları daxil olmaqla müxtəlif sahələrdə xidmətlər təklif olunur. Hər sektorun spesifik ehtiyaclarına uyğun həllər təklif edirik.',
      isOpen: false
    },
    {
      question: 'Uzaqdan əməkdaşlıq mümkündürmü?',
      answer: 'Bəli, bütün məsləhət xidmətlərimi uzaqdan təqdim edə bilirəm. Online görüşlər, ekran paylaşımı və virtual təlimlər vasitəsilə effektiv əməkdaşlıq mümkündür. Lazım gəldikdə yerində görüş də təşkil olunur.',
      isOpen: false
    },
    {
      question: 'Layihədən sonra dəstək verirsizmi?',
      answer: 'Bəli, bütün layihələrə pulsuz dəstək daxildir. Bu müddətdə yarana biləcək sualları cavablandırır və lazımi düzəlişləri aparıram. Sonrasında da uzunmüddətli dəstək paketləri mövcuddur.',
      isOpen: false
    },
    {
      question: 'Qiymətlər necə formalaşır?',
      answer: 'Qiymətlər layihənin mürəkkəbliyi, tələb olunan vaxt və resurslardan asılıdır. Standart paketlər olaraq mövcuddur, lakin hər layihə üçün fərdi qiymət təklifi hazırlayıram. Pulsuz ilkin məsləhətdə büdcənizi müzakirə edirik.',
      isOpen: false
    }
  ];

  // Service Options for better UX
  serviceOptions = [
    { value: 'consulting', label: 'AI Məsləhət' },
    { value: 'strategy', label: 'AI Strategiya' },
    { value: 'training', label: 'Komanda Təlimi' },
    { value: 'automation', label: 'Avtomatlaşdırma' },
    { value: 'other', label: 'Digər' }
  ];

  // Budget Options
  budgetOptions = [
    { value: 'under-500', label: '500 USD-dən az' },
    { value: '500-1000', label: '500-1.000 USD' },
    { value: '1000-5000', label: '1.000-5.000 USD' },
    { value: '5000-20000', label: '5.000-20.000 USD' },
    { value: 'over-20000', label: '20.000 USD-dən artıq' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Component initialization
    this.resetFormValidation();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  // Form Submission Handler
  async onSubmit(): Promise<void> {
    if (this.isSubmitting || !this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    try {
      // Simulate API call - replace with actual service
      await this.submitContactForm(this.contactForm);

      // Success
      this.isFormSubmitted = true;
      this.trackFormSubmission();

    } catch (error) {
      // Error handling
      this.submitError = 'Mesaj göndərilmədi. Lütfən yenidən cəhd edin.';
      console.error('Form submission error:', error);

    } finally {
      this.isSubmitting = false;
    }
  }

  // Simulate form submission
  private async submitContactForm(formData: ContactForm): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        if (Math.random() > 0.1) { // 90% success rate for demo
          console.log('Form submitted successfully:', formData);
          resolve();
        } else {
          reject(new Error('Submission failed'));
        }
      }, 2000);
    });
  }

  // Form Validation
  private isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.isValidEmail(this.contactForm.email) &&
      this.contactForm.message.trim()
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Reset form validation states
  private resetFormValidation(): void {
    this.submitError = '';
  }

  // Reset form after successful submission
  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    };
    this.isFormSubmitted = false;
    this.isSubmitting = false;
    this.submitError = '';
    this.resetFormValidation();
  }

  // FAQ Toggle Handler
  toggleFaq(index: number): void {
    // Close all other FAQs
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });

    // Toggle selected FAQ
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  // Close all FAQs
  closeAllFaqs(): void {
    this.faqs.forEach(faq => faq.isOpen = false);
  }

  // Get form completion percentage for UX
  getFormCompletionPercentage(): number {
    const requiredFields = ['name', 'email', 'message'];
    const optionalFields = ['company', 'service', 'budget'];

    let completed = 0;
    let total = requiredFields.length + optionalFields.length;

    // Check required fields (weighted more)
    requiredFields.forEach(field => {
      if (this.contactForm[field as keyof ContactForm].trim()) {
        completed += 2; // Required fields count double
        total += 1; // Adjust total accordingly
      }
    });

    // Check optional fields
    optionalFields.forEach(field => {
      if (this.contactForm[field as keyof ContactForm].trim()) {
        completed += 1;
      }
    });

    return Math.round((completed / total) * 100);
  }

  // Analytics tracking (replace with actual analytics)
  private trackFormSubmission(): void {
    // Track form submission event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Contact Form',
        value: 1
      });
    }

    // Console log for development
    console.log('Contact form submitted:', {
      timestamp: new Date().toISOString(),
      formData: this.contactForm,
      completionRate: this.getFormCompletionPercentage()
    });
  }

  // Helper method to get service label
  getServiceLabel(value: string): string {
    const option = this.serviceOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  }

  // Helper method to get budget label
  getBudgetLabel(value: string): string {
    const option = this.budgetOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  }

  // Input field focus handlers for better UX
  onFieldFocus(fieldName: string): void {
    // Clear any previous errors when user starts typing
    if (this.submitError) {
      this.submitError = '';
    }
  }

  // Real-time email validation
  onEmailBlur(): void {
    if (this.contactForm.email && !this.isValidEmail(this.contactForm.email)) {
      // Could show inline validation here
    }
  }

  // Character count for message field
  get messageCharacterCount(): number {
    return this.contactForm.message.length;
  }

  get messageCharacterLimit(): number {
    return 1000;
  }

  get isMessageTooLong(): boolean {
    return this.messageCharacterCount > this.messageCharacterLimit;
  }
}