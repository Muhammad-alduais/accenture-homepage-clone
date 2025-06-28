export const locales = ['ar', 'en'] as const;
export type Locale = typeof locales[number];

export const translations = {
  ar: {
    // Navigation
    'nav.solutions': 'الحلول',
    'nav.services': 'الخدمات',
    'nav.industries': 'الصناعات',
    'nav.about': 'من نحن',
    'nav.getStarted': 'ابدأ الآن',
    'nav.search': 'بحث',
    'nav.language': 'اللغة',
    
    // Hero Section
    'hero.title': 'نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي.',
    'hero.subtitle': 'مصمم لسير عملك.',
    'hero.description': 'تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع الأتمتة الذكية، وسير العمل التكيفي، والتحول السلس المصمم للمؤسسة الحديثة.',
    'hero.cta.primary': 'ابدأ تحولك',
    'hero.cta.secondary': 'احجز استشارة مجانية',
    'hero.metrics.implementation': 'تنفيذ أسرع',
    'hero.metrics.adoption': 'معدل التبني',
    'hero.metrics.support': 'دعم الخبراء',
    
    // About Section
    'about.badge': 'قصتنا',
    'about.title': 'وُلدت من الإحباط،',
    'about.titleHighlight': 'بُنيت للنجاح',
    'about.description1': 'وُلدت MovinWare في عام 2025 من قبل مستشاري ERP المخضرمين الذين كانوا محبطين من التحديات المستمرة في الصناعة: "التنفيذ إلى الأبد"، والأنظمة الجامدة التي لا يمكنها التكيف، والذكاء الاصطناعي غير الفعال الذي وعد بالكثير ولكن قدم القليل، والهجر الواسع النطاق للمستخدمين الذي ترك الشركات في حالة أسوأ من ذي قبل.',
    'about.description2': 'هذا الإحباط ألهم نموذجاً جديداً يقوم على أربعة مبادئ أساسية توجه كل ما نقوم به.',
    'about.principles.speed.title': 'السرعة إلى القيمة',
    'about.principles.speed.description': 'تقديم تأثير تجاري قابل للقياس من اليوم الأول، وليس بعد شهور',
    'about.principles.intelligence.title': 'الذكاء التكيفي',
    'about.principles.intelligence.description': 'ذكاء اصطناعي يتعلم ويتطور مع احتياجات عملك',
    'about.principles.adoption.title': 'التبني بالتصميم',
    'about.principles.adoption.description': 'واجهات تركز على المستخدم يريد الفرق فعلاً استخدامها',
    'about.principles.growth.title': 'شراكة النمو',
    'about.principles.growth.description': 'النجاح يُقاس بنمو عملك، وليس بنشرنا',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'جعل العمليات التجارية الذكية متاحة لكل منظمة، بغض النظر عن الحجم أو التعقيد.',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'استبدال إحباط ERP بالتحول الرقمي السلس من خلال الحلول المخصصة، وأتمتة الذكاء الاصطناعي المدمجة، والتصميم الذي يركز على التبني.',
    'about.regional.title': 'جذور محلية، نظرة عالمية',
    'about.regional.description': 'نجمع بين الفهم الإقليمي العميق والمعايير العالمية، ونقدم حلولاً ثنائية اللغة تحترم الممارسات التجارية المحلية مع تمكين النمو الدولي.',
    
    // Value Section
    'value.title': 'العمليات الذكية',
    'value.subtitle': 'كل يوم، نحول الشركات بحلول ERP مدعومة بالذكاء الاصطناعي',
    'value.subtitleHighlight': 'التي تقدم السرعة إلى القيمة والتحول السلس.',
    'value.cta': 'اكتشف نهجنا',
    
    // Services Section
    'services.badge': 'الحلول الكاملة',
    'services.title': 'كل ما تحتاجه للتحول الرقمي',
    'services.description': 'من التنفيذ إلى التحسين، نقدم حلول ERP شاملة تحقق نتائج قابلة للقياس.',
    'services.tabs.services': 'خدماتنا',
    'services.tabs.solutions': 'حلول ERP',
    'services.tabs.value': 'لماذا تختارنا',
    
    // Industries Section
    'industries.badge': 'الصناعات التي نخدمها',
    'industries.title': 'حلول متخصصة لكل صناعة',
    'industries.description': 'خبرة صناعية عميقة مدمجة مع تكنولوجيا مرنة لتقديم حلول تفهم تحديات عملك الفريدة.',
    'industries.clientSize.title': 'مبني لكل حجم عمل',
    'industries.clientSize.description': 'من الشركات الناشئة الطموحة إلى المؤسسات الراسخة، حلولنا تنمو مع احتياجات عملك.',
    
    // Implementation Section
    'implementation.badge': 'نهج التنفيذ',
    'implementation.title': 'عملية مثبتة،',
    'implementation.titleHighlight': 'نتائج قابلة للتنبؤ',
    'implementation.description': 'منهجيتنا المجربة في المعركة تضمن النشر السريع مع الحد الأدنى من المخاطر والحد الأقصى من تبني المستخدمين.',
    'implementation.provenResults': 'النتائج المثبتة',
    'implementation.provenDescription': 'منهجيتنا تحقق باستمرار نتائج استثنائية عبر جميع التنفيذات.',
    
    // Testimonials Section
    'testimonials.badge': 'قصص النجاح',
    'testimonials.title': 'نتائج حقيقية،',
    'testimonials.titleHighlight': 'تأثير حقيقي',
    'testimonials.description': 'شاهد كيف حولت المنظمات عبر الصناعات المختلفة عملياتها مع MovinWare.',
    
    // Contact Section
    'contact.badge': 'لنعمل معاً',
    'contact.title': 'مستعد لتحويل',
    'contact.titleHighlight': 'عملياتك؟',
    'contact.description': 'تواصل مع خبراء ERP لدينا واكتشف كيف يمكن لـ MovinWare تسريع رحلة التحول الرقمي الخاصة بك.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.company': 'اسم الشركة',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.inquiryType': 'نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معنا',
    'contact.info.description': 'مستعد لبدء رحلة التحول الخاصة بك؟ خبراء ERP لدينا هنا لمساعدتك في كل خطوة على الطريق.',
    'contact.quickActions': 'إجراءات سريعة',
    'contact.talkToExpert': 'تحدث مع خبير ERP',
    'contact.scheduleConsultation': 'جدولة استشارة',
    'contact.whatsappSupport': 'دعم واتساب',
    'contact.whatsappDescription': 'احصل على دعم فوري وإجابات سريعة لأسئلتك.',
    'contact.chatWhatsapp': 'دردشة على واتساب',
    
    // Footer
    'footer.tagline': 'العمليات الذكية. التحول السلس.',
    'footer.copyright': '© 2025 MovinWare. جميع الحقوق محفوظة. | العمليات الذكية. التحول السلس.',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.close': 'إغلاق',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.continue': 'متابعة',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.learnMore': 'تعلم المزيد',
    'common.readMore': 'اقرأ المزيد',
    'common.viewAll': 'عرض الكل',
    'common.showMore': 'عرض المزيد',
    'common.showLess': 'عرض أقل',
  },
  en: {
    // Navigation
    'nav.solutions': 'Solutions',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.about': 'About',
    'nav.getStarted': 'Get Started',
    'nav.search': 'Search',
    'nav.language': 'Language',
    
    // Hero Section
    'hero.title': 'AI-Powered ERP.',
    'hero.subtitle': 'Designed for Your Workflow.',
    'hero.description': 'Streamline operations, boost efficiency, and future-proof your business with intelligent automation, adaptive workflows, and seamless transformation designed for the modern enterprise.',
    'hero.cta.primary': 'Start Your Transformation',
    'hero.cta.secondary': 'Book a Free Consultation',
    'hero.metrics.implementation': 'Faster Implementation',
    'hero.metrics.adoption': 'User Adoption Rate',
    'hero.metrics.support': 'Expert Support',
    
    // About Section
    'about.badge': 'Our Story',
    'about.title': 'Born from Frustration,',
    'about.titleHighlight': 'Built for Success',
    'about.description1': 'MovinWare was conceived in 2025 by veteran ERP consultants who were frustrated by the industry\'s persistent challenges: "Forever Implementations," rigid systems that couldn\'t adapt, ineffective AI that promised much but delivered little, and widespread user abandonment that left businesses worse off than before.',
    'about.description2': 'This frustration inspired a new paradigm based on four core principles that guide everything we do.',
    'about.principles.speed.title': 'Speed-to-Value',
    'about.principles.speed.description': 'Deliver measurable business impact from day one, not months later',
    'about.principles.intelligence.title': 'Adaptive Intelligence',
    'about.principles.intelligence.description': 'AI that learns and evolves with your business needs',
    'about.principles.adoption.title': 'Adoption by Design',
    'about.principles.adoption.description': 'User-first interfaces that teams actually want to use',
    'about.principles.growth.title': 'Growth Partnership',
    'about.principles.growth.description': 'Success measured by your business growth, not our deployment',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'Make intelligent business operations accessible to every organization, regardless of size or complexity.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Replace ERP frustration with fluid digital transformation through tailored solutions, built-in AI automation, and adoption-first design.',
    'about.regional.title': 'Local Roots, Global Outlook',
    'about.regional.description': 'We combine deep regional understanding with global standards, delivering bilingual solutions that respect local business practices while enabling international growth.',
    
    // Value Section
    'value.title': 'INTELLIGENT OPERATIONS',
    'value.subtitle': 'Every day, we transform businesses with AI-powered ERP solutions',
    'value.subtitleHighlight': 'that deliver speed-to-value and seamless transformation.',
    'value.cta': 'Discover Our Approach',
    
    // Services Section
    'services.badge': 'Complete Solutions',
    'services.title': 'Everything You Need for Digital Transformation',
    'services.description': 'From implementation to optimization, we provide comprehensive ERP solutions that deliver measurable results.',
    'services.tabs.services': 'Our Services',
    'services.tabs.solutions': 'ERP Solutions',
    'services.tabs.value': 'Why Choose Us',
    
    // Industries Section
    'industries.badge': 'Industries We Serve',
    'industries.title': 'Specialized Solutions for Every Industry',
    'industries.description': 'Deep industry expertise combined with flexible technology to deliver solutions that understand your unique business challenges.',
    'industries.clientSize.title': 'Built for Every Business Size',
    'industries.clientSize.description': 'From ambitious startups to established enterprises, our solutions scale with your business needs.',
    
    // Implementation Section
    'implementation.badge': 'Implementation Approach',
    'implementation.title': 'Proven Process,',
    'implementation.titleHighlight': 'Predictable Results',
    'implementation.description': 'Our battle-tested methodology ensures rapid deployment with minimal risk and maximum user adoption.',
    'implementation.provenResults': 'Proven Results',
    'implementation.provenDescription': 'Our methodology consistently delivers exceptional outcomes across all implementations.',
    
    // Testimonials Section
    'testimonials.badge': 'Success Stories',
    'testimonials.title': 'Real Results,',
    'testimonials.titleHighlight': 'Real Impact',
    'testimonials.description': 'See how organizations across different industries have transformed their operations with MovinWare.',
    
    // Contact Section
    'contact.badge': 'Let\'s Work Together',
    'contact.title': 'Ready to Transform',
    'contact.titleHighlight': 'Your Operations?',
    'contact.description': 'Connect with our ERP experts and discover how MovinWare can accelerate your digital transformation journey.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.inquiryType': 'Inquiry Type',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.info.description': 'Ready to start your transformation journey? Our ERP experts are here to help you every step of the way.',
    'contact.quickActions': 'Quick Actions',
    'contact.talkToExpert': 'Talk to an ERP Expert',
    'contact.scheduleConsultation': 'Schedule Consultation',
    'contact.whatsappSupport': 'WhatsApp Support',
    'contact.whatsappDescription': 'Get instant support and quick answers to your questions.',
    'contact.chatWhatsapp': 'Chat on WhatsApp',
    
    // Footer
    'footer.tagline': 'Intelligent Operations. Seamless Transformation.',
    'footer.copyright': '© 2025 MovinWare. All Rights Reserved. | Intelligent Operations. Seamless Transformation.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.continue': 'Continue',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.showMore': 'Show More',
    'common.showLess': 'Show Less',
  }
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}