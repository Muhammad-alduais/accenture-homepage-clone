export const locales = ['ar', 'en'] as const
export type Locale = typeof locales[number]

export function isRTL(locale: Locale): boolean {
  return locale === 'ar'
}

const translations = {
  ar: {
    // Navigation
    'nav.skipToMain': 'انتقل إلى المحتوى الرئيسي',
    'nav.mainNavigation': 'التنقل الرئيسي',
    'nav.homeLink': 'الصفحة الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.services': 'الخدمات',
    'nav.industries': 'الصناعات',
    'nav.about': 'حولنا',
    'nav.contact': 'اتصل بنا',
    'nav.changeLanguage': 'تغيير اللغة',
    'nav.languageMenu': 'قائمة اللغة',
    'nav.openMenu': 'فتح القائمة',
    'nav.closeMenu': 'إغلاق القائمة',
    'nav.scrollToTop': 'العودة إلى الأعلى',

    // Hero Section
    'hero.title': 'العمليات الذكية',
    'hero.subtitle': 'التحول السلس',
    'hero.description': 'نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع حلول MovinWare الذكية.',
    'hero.metrics.implementation': 'تنفيذ أسرع',
    'hero.metrics.adoption': 'معدل اعتماد',
    'hero.metrics.support': 'دعم مستمر',

    // About Section
    'about.badge': 'قصتنا',
    'about.title': 'نحن نؤمن بأن',
    'about.titleHighlight': 'التكنولوجيا يجب أن تعمل معك',
    'about.description1': 'تأسست MovinWare من رؤية بسيطة: جعل أنظمة تخطيط موارد المؤسسات قوية وسهلة الاستخدام وقابلة للوصول لكل عمل في منطقة الشرق الأوسط وشمال أفريقيا.',
    'about.description2': 'نحن نفهم التحديات الفريدة التي تواجهها الشركات في منطقتنا - من التعقيدات الثقافية واللغوية إلى المتطلبات التنظيمية المحددة. هذا هو السبب في أننا بنينا منصة لا تترجم فقط، بل تفهم حقاً.',

    // About Principles
    'about.principles.speed.title': 'السرعة في التنفيذ',
    'about.principles.speed.description': 'من المفهوم إلى التشغيل في أسابيع، وليس أشهر',
    'about.principles.intelligence.title': 'الذكاء المدمج',
    'about.principles.intelligence.description': 'الذكاء الاصطناعي الذي يتعلم ويتكيف مع عملك',
    'about.principles.adoption.title': 'اعتماد سهل',
    'about.principles.adoption.description': 'واجهات بديهية تحبها الفرق فعلاً',
    'about.principles.growth.title': 'نمو مستدام',
    'about.principles.growth.description': 'حلول تتوسع مع طموحاتك',

    // About Vision & Mission
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'نتصور مستقبلاً حيث كل عمل، بغض النظر عن الحجم أو الصناعة، يمكنه الوصول إلى تكنولوجيا تخطيط موارد المؤسسات على مستوى المؤسسات التي تفهم احتياجاته الثقافية واللغوية.',
    'about.vision.points.democratize': 'إضفاء الطابع الديمقراطي على الوصول إلى تكنولوجيا تخطيط موارد المؤسسات المتقدمة',
    'about.vision.points.eliminate': 'القضاء على الحواجز اللغوية والثقافية في التكنولوجيا',
    'about.vision.points.enable': 'تمكين الشركات للتركيز على ما تفعله بشكل أفضل',

    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نحن ملتزمون بتقديم حلول تخطيط موارد المؤسسات التي لا تلبي فقط المتطلبات التقنية، بل تحترم أيضاً وتعزز الهويات الثقافية للشركات التي نخدمها.',
    'about.mission.metrics.title': 'التزامنا بالتميز',
    'about.mission.metrics.days': '30',
    'about.mission.metrics.daysDesc': 'متوسط التنفيذ',
    'about.mission.metrics.process': '99.9%',
    'about.mission.metrics.processDesc': 'وقت التشغيل',
    'about.mission.metrics.user': '4.9/5',
    'about.mission.metrics.userDesc': 'رضا المستخدم',

    // About Regional
    'about.regional.title': 'مبني للمنطقة، مصمم للعالم',
    'about.regional.description': 'نحن نفهم بعمق الفروق الدقيقة في ممارسة الأعمال في منطقة الشرق الأوسط وشمال أفريقيا، من الامتثال التنظيمي إلى التفضيلات الثقافية.',
    'about.regional.understanding.title': 'فهم محلي',
    'about.regional.understanding.description': 'معرفة عميقة بممارسات الأعمال الإقليمية',
    'about.regional.bilingual.title': 'دعم ثنائي اللغة',
    'about.regional.bilingual.description': 'دعم كامل للعربية والإنجليزية مع RTL',
    'about.regional.standards.title': 'معايير عالمية',
    'about.regional.standards.description': 'مبني على أفضل الممارسات العالمية',

    // Value Section
    'value.title': '360° VALUE',
    'value.subtitle': 'نحن لا نبني فقط برامج',
    'value.subtitleHighlight': 'نحن نصمم تجارب',
    'value.cta': 'اكتشف قيمتنا',

    // Services Section
    'services.badge': 'خدماتنا',
    'services.title': 'حلول شاملة لكل احتياج',
    'services.description': 'من التنفيذ إلى التحسين، نقدم مجموعة كاملة من الخدمات لضمان نجاحك مع MovinWare.',

    // Services Tabs
    'services.tabs.services': 'الخدمات',
    'services.tabs.solutions': 'الحلول',
    'services.tabs.value': 'القيمة',

    // ERP Services
    'services.erp.title': 'تنفيذ تخطيط موارد المؤسسات',
    'services.erp.description': 'تنفيذ كامل لنظام تخطيط موارد المؤسسات مصمم خصيصاً لاحتياجات عملك',
    'services.erp.features.architecture': 'تصميم الهندسة المعمارية للنظام',
    'services.erp.features.development': 'التطوير والتخصيص',
    'services.erp.features.migration': 'ترحيل البيانات',
    'services.erp.features.training': 'تدريب المستخدمين',

    // Industry Services
    'services.industry.title': 'حلول خاصة بالصناعة',
    'services.industry.description': 'حلول متخصصة مصممة للمتطلبات الفريدة لصناعتك',
    'services.industry.features.healthcare': 'إدارة الرعاية الصحية',
    'services.industry.features.education': 'أنظمة التعليم',
    'services.industry.features.fitness': 'إدارة اللياقة البدنية',
    'services.industry.features.logistics': 'حلول اللوجستيات',

    // AI Services
    'services.ai.title': 'تكامل الذكاء الاصطناعي',
    'services.ai.description': 'تعزيز نظام تخطيط موارد المؤسسات بقدرات الذكاء الاصطناعي المتقدمة',
    'services.ai.features.forecasting': 'التنبؤ الذكي',
    'services.ai.features.chatbots': 'مساعدين افتراضيين',
    'services.ai.features.ocr': 'معالجة المستندات',
    'services.ai.features.automation': 'أتمتة سير العمل',

    // UX Services
    'services.ux.title': 'تصميم تجربة المستخدم',
    'services.ux.description': 'واجهات بديهية مصممة للمستخدمين العرب والدوليين',
    'services.ux.features.rtl': 'دعم RTL الأصلي',
    'services.ux.features.localization': 'التوطين الثقافي',
    'services.ux.features.accessibility': 'إمكانية الوصول',
    'services.ux.features.mobile': 'تصميم متجاوب',

    // Migration Services
    'services.migration.title': 'ترحيل النظام',
    'services.migration.description': 'انتقال سلس من أنظمتك الحالية إلى MovinWare',
    'services.migration.features.mapping': 'تخطيط البيانات',
    'services.migration.features.api': 'تكامل API',
    'services.migration.features.sync': 'مزامنة البيانات',
    'services.migration.features.backup': 'نسخ احتياطية آمنة',

    // Support Services
    'services.support.title': 'الدعم والصيانة',
    'services.support.description': 'دعم مستمر لضمان الأداء الأمثل لنظامك',
    'services.support.features.updates': 'تحديثات منتظمة',
    'services.support.features.tuning': 'تحسين الأداء',
    'services.support.features.development': 'تطوير الميزات',
    'services.support.features.monitoring': 'مراقبة النظام',

    // Solutions
    'solutions.accounting.title': 'المحاسبة والمالية',
    'solutions.accounting.description': 'إدارة مالية شاملة مع الامتثال المحلي',
    'solutions.accounting.features.ledger': 'دفتر الأستاذ العام',
    'solutions.accounting.features.invoicing': 'الفوترة',
    'solutions.accounting.features.reporting': 'التقارير المالية',
    'solutions.accounting.features.compliance': 'الامتثال الضريبي',

    'solutions.hr.title': 'الموارد البشرية',
    'solutions.hr.description': 'إدارة شاملة للموارد البشرية من التوظيف إلى التقاعد',
    'solutions.hr.features.records': 'سجلات الموظفين',
    'solutions.hr.features.attendance': 'الحضور والانصراف',
    'solutions.hr.features.payroll': 'كشوف المرتبات',
    'solutions.hr.features.calendar': 'تقويم الإجازات',

    'solutions.sales.title': 'المبيعات والعملاء',
    'solutions.sales.description': 'إدارة دورة المبيعات الكاملة وعلاقات العملاء',
    'solutions.sales.features.leads': 'إدارة العملاء المحتملين',
    'solutions.sales.features.quotes': 'عروض الأسعار',
    'solutions.sales.features.orders': 'أوامر المبيعات',
    'solutions.sales.features.portal': 'بوابة العملاء',

    'solutions.inventory.title': 'إدارة المخزون',
    'solutions.inventory.description': 'تتبع وإدارة المخزون في الوقت الفعلي',
    'solutions.inventory.features.stock': 'تتبع المخزون',
    'solutions.inventory.features.warehousing': 'إدارة المستودعات',
    'solutions.inventory.features.pricing': 'استراتيجيات التسعير',
    'solutions.inventory.features.labeling': 'وسم المنتجات',

    'solutions.manufacturing.title': 'التصنيع',
    'solutions.manufacturing.description': 'تخطيط وتنفيذ عمليات التصنيع',
    'solutions.manufacturing.features.bom': 'قائمة المواد',
    'solutions.manufacturing.features.orders': 'أوامر التصنيع',
    'solutions.manufacturing.features.planning': 'تخطيط الإنتاج',
    'solutions.manufacturing.features.quality': 'مراقبة الجودة',

    'solutions.assets.title': 'إدارة الأصول',
    'solutions.assets.description': 'تتبع وصيانة أصول الشركة',
    'solutions.assets.features.depreciation': 'حساب الاستهلاك',
    'solutions.assets.features.maintenance': 'جدولة الصيانة',
    'solutions.assets.features.qr': 'رموز QR للأصول',
    'solutions.assets.features.alerts': 'تنبيهات الصيانة',

    // Value Propositions
    'value.ai.title': 'الذكاء الاصطناعي المدمج',
    'value.ai.description': 'ذكاء اصطناعي يتعلم من بياناتك ويحسن عملياتك',
    'value.ai.features.forecasting': 'التنبؤ بالطلب',
    'value.ai.features.automation': 'أتمتة المهام',
    'value.ai.features.workflows': 'تحسين سير العمل',
    'value.ai.features.analytics': 'تحليلات متقدمة',

    'value.speed.title': 'سرعة في التنفيذ',
    'value.speed.description': 'من الفكرة إلى التشغيل في وقت قياسي',
    'value.speed.features.deployment': 'نشر سريع',
    'value.speed.features.roi': 'عائد استثمار سريع',
    'value.speed.features.benefits': 'فوائد فورية',
    'value.speed.features.methodology': 'منهجية مجربة',

    'value.cultural.title': 'التوافق الثقافي',
    'value.cultural.description': 'مصمم خصيصاً للسوق العربي',
    'value.cultural.features.bilingual': 'دعم ثنائي اللغة',
    'value.cultural.features.rtl': 'واجهة RTL أصلية',
    'value.cultural.features.compliance': 'امتثال محلي',
    'value.cultural.features.alignment': 'توافق ثقافي',

    'value.adoption.title': 'سهولة الاعتماد',
    'value.adoption.description': 'واجهات بديهية يحبها المستخدمون',
    'value.adoption.features.design': 'تصميم بديهي',
    'value.adoption.features.training': 'تدريب شامل',
    'value.adoption.features.interface': 'واجهة سهلة',
    'value.adoption.features.support': 'دعم مستمر',

    // Industries Section
    'industries.badge': 'الصناعات',
    'industries.title': 'حلول متخصصة لكل صناعة',
    'industries.description': 'نحن نفهم أن كل صناعة لها متطلباتها الفريدة. حلولنا مصممة خصيصاً لتلبية احتياجات صناعتك المحددة.',

    // Education Industry
    'industries.education.title': 'التعليم',
    'industries.education.description': 'حلول شاملة لإدارة المؤسسات التعليمية من المدارس إلى الجامعات',
    'industries.education.features.student': 'إدارة الطلاب',
    'industries.education.features.academic': 'السجلات الأكاديمية',
    'industries.education.features.parent': 'بوابة أولياء الأمور',
    'industries.education.features.fee': 'إدارة الرسوم',
    'industries.education.clients.schools': 'المدارس',
    'industries.education.clients.universities': 'الجامعات',
    'industries.education.clients.training': 'مراكز التدريب',
    'industries.education.clients.online': 'التعليم الإلكتروني',

    // Logistics Industry
    'industries.logistics.title': 'اللوجستيات',
    'industries.logistics.description': 'تحسين عمليات سلسلة التوريد والتوزيع',
    'industries.logistics.features.fleet': 'إدارة الأسطول',
    'industries.logistics.features.route': 'تحسين المسارات',
    'industries.logistics.features.inventory': 'تتبع المخزون',
    'industries.logistics.features.customs': 'إجراءات الجمارك',
    'industries.logistics.clients.shipping': 'شركات الشحن',
    'industries.logistics.clients.3pl': 'مقدمو الخدمات اللوجستية',
    'industries.logistics.clients.distribution': 'مراكز التوزيع',
    'industries.logistics.clients.freight': 'شركات الشحن',

    // Retail Industry
    'industries.retail.title': 'التجارة',
    'industries.retail.description': 'حلول متكاملة لإدارة عمليات البيع بالتجزئة',
    'industries.retail.features.pos': 'نقاط البيع',
    'industries.retail.features.sync': 'مزامنة المخزون',
    'industries.retail.features.loyalty': 'برامج الولاء',
    'industries.retail.features.multichannel': 'البيع متعدد القنوات',
    'industries.retail.clients.chains': 'سلاسل التجزئة',
    'industries.retail.clients.online': 'التجارة الإلكترونية',
    'industries.retail.clients.fashion': 'الأزياء',
    'industries.retail.clients.electronics': 'الإلكترونيات',

    // Manufacturing Industry
    'industries.manufacturing.title': 'التصنيع',
    'industries.manufacturing.description': 'تحسين عمليات الإنتاج والتصنيع',
    'industries.manufacturing.features.planning': 'تخطيط الإنتاج',
    'industries.manufacturing.features.quality': 'مراقبة الجودة',
    'industries.manufacturing.features.supply': 'إدارة سلسلة التوريد',
    'industries.manufacturing.features.maintenance': 'صيانة المعدات',
    'industries.manufacturing.clients.manufacturers': 'المصنعون',
    'industries.manufacturing.clients.assembly': 'خطوط التجميع',
    'industries.manufacturing.clients.food': 'الصناعات الغذائية',
    'industries.manufacturing.clients.textile': 'النسيج',

    // Client Size Categories
    'industries.clientSize.title': 'حلول لكل حجم عمل',
    'industries.clientSize.description': 'من الشركات الناشئة إلى المؤسسات الكبيرة، لدينا الحل المناسب لك',

    'industries.startups.title': 'الشركات الناشئة',
    'industries.startups.description': 'حلول مرنة وقابلة للتطوير للشركات سريعة النمو',
    'industries.startups.benefits.implementation': 'تنفيذ سريع',
    'industries.startups.benefits.scalable': 'حلول قابلة للتطوير',
    'industries.startups.benefits.cost': 'فعالة من حيث التكلفة',
    'industries.startups.benefits.growth': 'دعم النمو',

    'industries.smes.title': 'الشركات الصغيرة والمتوسطة',
    'industries.smes.description': 'حلول شاملة مصممة للشركات المتنامية',
    'industries.smes.benefits.featured': 'ميزات كاملة',
    'industries.smes.benefits.customization': 'تخصيص مرن',
    'industries.smes.benefits.integration': 'تكامل سلس',
    'industries.smes.benefits.support': 'دعم مخصص',

    'industries.enterprises.title': 'المؤسسات الكبيرة',
    'industries.enterprises.description': 'حلول متقدمة للمؤسسات الكبيرة والمعقدة',
    'industries.enterprises.benefits.analytics': 'تحليلات متقدمة',
    'industries.enterprises.benefits.multi': 'دعم متعدد المواقع',
    'industries.enterprises.benefits.compliance': 'امتثال متقدم',
    'industries.enterprises.benefits.support247': 'دعم 24/7',

    // Implementation Section
    'implementation.badge': 'التنفيذ',
    'implementation.title': 'منهجية مجربة',
    'implementation.titleHighlight': 'للنجاح المضمون',
    'implementation.description': 'نهجنا المنظم يضمن تنفيذاً سلساً وناجحاً لنظام تخطيط موارد المؤسسات الخاص بك.',

    // Implementation Phases
    'implementation.phase1.title': 'التحليل والتخطيط',
    'implementation.phase1.duration': '1-2 أسابيع',
    'implementation.phase1.description': 'فهم شامل لعملياتك الحالية ومتطلباتك المستقبلية',
    'implementation.phase1.activities.mapping': 'تخطيط العمليات',
    'implementation.phase1.activities.analysis': 'تحليل المتطلبات',
    'implementation.phase1.activities.audit': 'مراجعة النظام الحالي',
    'implementation.phase1.activities.gathering': 'جمع البيانات',
    'implementation.phase1.deliverables.assessment': 'تقييم شامل',
    'implementation.phase1.deliverables.gap': 'تحليل الفجوات',
    'implementation.phase1.deliverables.requirements': 'وثيقة المتطلبات',
    'implementation.phase1.deliverables.roadmap': 'خارطة طريق التنفيذ',

    'implementation.phase2.title': 'التصميم والتكوين',
    'implementation.phase2.duration': '2-3 أسابيع',
    'implementation.phase2.description': 'تصميم النظام وتكوينه ليناسب احتياجاتك المحددة',
    'implementation.phase2.activities.workflow': 'تصميم سير العمل',
    'implementation.phase2.activities.ai': 'تكوين الذكاء الاصطناعي',
    'implementation.phase2.activities.bilingual': 'إعداد ثنائي اللغة',
    'implementation.phase2.activities.security': 'تكوين الأمان',
    'implementation.phase2.deliverables.blueprint': 'مخطط النظام',
    'implementation.phase2.deliverables.specifications': 'مواصفات التكوين',
    'implementation.phase2.deliverables.mockups': 'نماذج أولية',
    'implementation.phase2.deliverables.integration': 'خطة التكامل',

    'implementation.phase3.title': 'التطوير والاختبار',
    'implementation.phase3.duration': '3-4 أسابيع',
    'implementation.phase3.description': 'تطوير التخصيصات واختبار النظام بشكل شامل',
    'implementation.phase3.activities.development': 'التطوير المخصص',
    'implementation.phase3.activities.demos': 'عروض تجريبية',
    'implementation.phase3.activities.migration': 'ترحيل البيانات',
    'implementation.phase3.activities.testing': 'اختبار شامل',
    'implementation.phase3.deliverables.system': 'نظام جاهز',
    'implementation.phase3.deliverables.data': 'بيانات محولة',
    'implementation.phase3.deliverables.results': 'نتائج الاختبار',
    'implementation.phase3.deliverables.documentation': 'وثائق النظام',

    'implementation.phase4.title': 'النشر والتدريب',
    'implementation.phase4.duration': '1-2 أسابيع',
    'implementation.phase4.description': 'نشر النظام وتدريب فريقك للاستخدام الأمثل',
    'implementation.phase4.activities.training': 'تدريب المستخدمين',
    'implementation.phase4.activities.support': 'دعم الانتقال',
    'implementation.phase4.activities.monitoring': 'مراقبة الأداء',
    'implementation.phase4.activities.resolution': 'حل المشاكل',
    'implementation.phase4.deliverables.users': 'مستخدمون مدربون',
    'implementation.phase4.deliverables.live': 'نظام مباشر',
    'implementation.phase4.deliverables.support': 'دعم مستمر',
    'implementation.phase4.deliverables.performance': 'تقارير الأداء',

    'implementation.phase5.title': 'التحسين والنمو',
    'implementation.phase5.duration': 'مستمر',
    'implementation.phase5.description': 'تحسين مستمر وإضافة ميزات جديدة حسب نمو عملك',
    'implementation.phase5.activities.reviews': 'مراجعات دورية',
    'implementation.phase5.activities.retuning': 'إعادة ضبط',
    'implementation.phase5.activities.upgrades': 'ترقيات النظام',
    'implementation.phase5.activities.optimization': 'تحسين الأداء',
    'implementation.phase5.deliverables.reports': 'تقارير دورية',
    'implementation.phase5.deliverables.features': 'ميزات جديدة',
    'implementation.phase5.deliverables.enhanced': 'نظام محسن',
    'implementation.phase5.deliverables.growth': 'دعم النمو',

    // Implementation Proof Points
    'implementation.provenResults': 'نتائج مثبتة',
    'implementation.provenDescription': 'منهجيتنا المجربة تحقق نتائج استثنائية لعملائنا',
    'implementation.proof.faster': 'تنفيذ أسرع',
    'implementation.proof.fasterDesc': 'من المتوسط في الصناعة',
    'implementation.proof.zero': 'صفر',
    'implementation.proof.zeroDesc': 'وقت توقف',
    'implementation.proof.zeroDetail': 'أثناء التنفيذ',
    'implementation.proof.adoption': 'معدل اعتماد',
    'implementation.proof.adoptionDesc': 'من المستخدمين',

    // Testimonials Section
    'testimonials.badge': 'قصص النجاح',
    'testimonials.title': 'عملاؤنا',
    'testimonials.titleHighlight': 'يحققون نتائج استثنائية',
    'testimonials.description': 'اكتشف كيف تحول الشركات عملياتها وتحقق نمواً مستداماً مع MovinWare.',
    'testimonials.caseStudyNavigation': 'التنقل بين دراسات الحالة',

    // Case Study Labels
    'testimonials.labels.challenge': 'التحدي',
    'testimonials.labels.solution': 'الحل',
    'testimonials.labels.results': 'النتائج',
    'testimonials.labels.implementation': 'التنفيذ',
    'testimonials.labels.efficiency': 'الكفاءة',
    'testimonials.labels.adoption': 'الاعتماد',

    // Case Study 1 - Retail
    'testimonials.case1.client': 'مجموعة الأزياء الحديثة',
    'testimonials.case1.industry': 'التجارة',
    'testimonials.case1.challenge': 'كانت الشركة تواجه تحديات في إدارة المخزون عبر 15 فرعاً، مع عدم وجود رؤية في الوقت الفعلي للمبيعات والمخزون.',
    'testimonials.case1.solution': 'نفذنا نظام تخطيط موارد المؤسسات المتكامل مع نقاط البيع الذكية ونظام إدارة المخزون في الوقت الفعلي مع دعم كامل للغة العربية.',
    'testimonials.case1.results.timeline': 'تنفيذ في 6 أسابيع فقط',
    'testimonials.case1.results.efficiency': 'تحسن الكفاءة التشغيلية بنسبة 40%',
    'testimonials.case1.results.visibility': 'رؤية كاملة للمخزون في الوقت الفعلي',
    'testimonials.case1.results.processes': 'أتمتة 80% من العمليات اليدوية',
    'testimonials.case1.quote': 'MovinWare غيّر طريقة عملنا تماماً. الآن لدينا رؤية كاملة لعملياتنا ويمكننا اتخاذ قرارات مدروسة بناءً على بيانات دقيقة.',
    'testimonials.case1.author': 'أحمد المنصوري',
    'testimonials.case1.position': 'المدير التنفيذي',
    'testimonials.case1.metrics.implementation': '6 أسابيع',
    'testimonials.case1.metrics.efficiency': '+40%',
    'testimonials.case1.metrics.adoption': '95%',

    // Case Study 2 - Education
    'testimonials.case2.client': 'أكاديمية المستقبل',
    'testimonials.case2.industry': 'التعليم',
    'testimonials.case2.challenge': 'إدارة معقدة لسجلات 3000 طالب مع تحديات في التواصل مع أولياء الأمور وإدارة الرسوم الدراسية.',
    'testimonials.case2.solution': 'نظام إدارة تعليمي شامل مع بوابة أولياء الأمور ونظام إدارة الرسوم المتقدم مع دعم ثنائي اللغة.',
    'testimonials.case2.results.cultural': 'دعم ثقافي ولغوي كامل',
    'testimonials.case2.results.communication': 'تحسن التواصل مع أولياء الأمور بنسبة 60%',
    'testimonials.case2.results.exams': 'أتمتة نظام الامتحانات والدرجات',
    'testimonials.case2.results.management': 'تبسيط إدارة الرسوم والمدفوعات',
    'testimonials.case2.quote': 'النظام سهل الاستخدام ويدعم اللغة العربية بشكل ممتاز. أولياء الأمور راضون جداً عن البوابة الجديدة.',
    'testimonials.case2.author': 'د. فاطمة الزهراء',
    'testimonials.case2.position': 'مديرة الأكاديمية',
    'testimonials.case2.metrics.implementation': '8 أسابيع',
    'testimonials.case2.metrics.efficiency': '+60%',
    'testimonials.case2.metrics.adoption': '92%',

    // Case Study 3 - Logistics
    'testimonials.case3.client': 'شركة الخليج للنقل',
    'testimonials.case3.industry': 'اللوجستيات',
    'testimonials.case3.challenge': 'تحديات في تتبع الشحنات وإدارة الأسطول مع عدم وجود رؤية واضحة لتكاليف التشغيل.',
    'testimonials.case3.solution': 'نظام إدارة لوجستي متكامل مع تتبع GPS وإدارة الأسطول وتحليلات التكلفة المتقدمة.',
    'testimonials.case3.results.reduction': 'تقليل تكاليف التشغيل بنسبة 25%',
    'testimonials.case3.results.delivery': 'تحسن أوقات التسليم بنسبة 35%',
    'testimonials.case3.results.maintenance': 'تحسين جدولة صيانة الأسطول',
    'testimonials.case3.results.tracking': 'تتبع في الوقت الفعلي لجميع الشحنات',
    'testimonials.case3.quote': 'الآن يمكننا تتبع كل شحنة ومركبة في الوقت الفعلي. هذا حسّن خدمة العملاء وقلل التكاليف بشكل كبير.',
    'testimonials.case3.author': 'خالد العتيبي',
    'testimonials.case3.position': 'مدير العمليات',
    'testimonials.case3.metrics.implementation': '10 أسابيع',
    'testimonials.case3.metrics.efficiency': '+35%',
    'testimonials.case3.metrics.adoption': '88%',

    // Contact Section
    'contact.badge': 'تواصل معنا',
    'contact.title': 'هل أنت مستعد',
    'contact.titleHighlight': 'لتحويل عملك؟',
    'contact.description': 'دعنا نناقش كيف يمكن لـ MovinWare أن يساعد في تحسين عملياتك وتحقيق أهدافك.',

    // Contact Form
    'contact.form.name': 'الاسم',
    'contact.form.namePlaceholder': 'اسمك الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.company': 'الشركة',
    'contact.form.companyPlaceholder': 'اسم شركتك',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.phonePlaceholder': '+971 XX XXX XXXX',
    'contact.form.inquiryType': 'نوع الاستفسار',
    'contact.form.inquiryPlaceholder': 'اختر نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'أخبرنا عن احتياجاتك...',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.submitting': 'جاري الإرسال...',

    // Contact Form Validation
    'contact.form.validation.nameRequired': 'الاسم مطلوب',
    'contact.form.validation.emailRequired': 'البريد الإلكتروني مطلوب',
    'contact.form.validation.emailInvalid': 'البريد الإلكتروني غير صحيح',
    'contact.form.validation.inquiryRequired': 'نوع الاستفسار مطلوب',
    'contact.form.validation.messageRequired': 'الرسالة مطلوبة',
    'contact.form.successMessage': 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    'contact.form.errorMessage': 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',

    // Contact Info
    'contact.info.title': 'معلومات التواصل',
    'contact.info.description': 'تواصل معنا مباشرة أو احجز استشارة مجانية لمناقشة احتياجاتك.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'الهاتف',
    'contact.info.location': 'الموقع',

    // Contact Actions
    'contact.quickActions': 'إجراءات سريعة',
    'contact.talkToExpert': 'تحدث مع خبير',
    'contact.scheduleConsultation': 'احجز استشارة',
    'contact.whatsappSupport': 'دعم واتساب',
    'contact.whatsappDescription': 'تواصل معنا عبر واتساب للحصول على دعم سريع',
    'contact.chatWhatsapp': 'دردشة واتساب',

    // Footer
    'footer.tagline': 'العمليات الذكية.\nالتحول السلس.',
    'footer.links.solutions': 'الحلول',
    'footer.links.services': 'الخدمات',
    'footer.links.industries': 'الصناعات',
    'footer.links.about': 'حولنا',
    'footer.links.contact': 'اتصل بنا',
    'footer.links.careers': 'الوظائف',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.links.terms': 'الشروط والأحكام',
    'footer.links.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.links.support': 'الدعم',
    'footer.links.documentation': 'الوثائق',
    'footer.links.partner': 'كن شريكاً',
    'footer.copyright': '© 2024 MovinWare. جميع الحقوق محفوظة.',
  },
  en: {
    // Navigation
    'nav.skipToMain': 'Skip to main content',
    'nav.mainNavigation': 'Main navigation',
    'nav.homeLink': 'Home',
    'nav.solutions': 'Solutions',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.changeLanguage': 'Change language',
    'nav.languageMenu': 'Language menu',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.scrollToTop': 'Scroll to top',

    // Hero Section
    'hero.title': 'Smart Operations',
    'hero.subtitle': 'Seamless Transformation',
    'hero.description': 'AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare\'s intelligent solutions.',
    'hero.metrics.implementation': 'Faster Implementation',
    'hero.metrics.adoption': 'Adoption Rate',
    'hero.metrics.support': 'Continuous Support',

    // About Section
    'about.badge': 'Our Story',
    'about.title': 'We believe that',
    'about.titleHighlight': 'technology should work with you',
    'about.description1': 'MovinWare was founded on a simple vision: making ERP systems powerful, intuitive, and accessible to every business in the MENA region.',
    'about.description2': 'We understand the unique challenges businesses face in our region - from cultural and linguistic complexities to specific regulatory requirements. That\'s why we\'ve built a platform that doesn\'t just translate, but truly understands.',

    // About Principles
    'about.principles.speed.title': 'Speed to Value',
    'about.principles.speed.description': 'From concept to operation in weeks, not months',
    'about.principles.intelligence.title': 'Built-in Intelligence',
    'about.principles.intelligence.description': 'AI that learns and adapts to your business',
    'about.principles.adoption.title': 'Easy Adoption',
    'about.principles.adoption.description': 'Intuitive interfaces teams actually love',
    'about.principles.growth.title': 'Sustainable Growth',
    'about.principles.growth.description': 'Solutions that scale with your ambitions',

    // About Vision & Mission
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'We envision a future where every business, regardless of size or industry, can access enterprise-grade ERP technology that understands their cultural and linguistic needs.',
    'about.vision.points.democratize': 'Democratize access to advanced ERP technology',
    'about.vision.points.eliminate': 'Eliminate language and cultural barriers in technology',
    'about.vision.points.enable': 'Enable businesses to focus on what they do best',

    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We are committed to delivering ERP solutions that not only meet technical requirements but also respect and enhance the cultural identities of the businesses we serve.',
    'about.mission.metrics.title': 'Our Commitment to Excellence',
    'about.mission.metrics.days': '30',
    'about.mission.metrics.daysDesc': 'Average Implementation',
    'about.mission.metrics.process': '99.9%',
    'about.mission.metrics.processDesc': 'Uptime',
    'about.mission.metrics.user': '4.9/5',
    'about.mission.metrics.userDesc': 'User Satisfaction',

    // About Regional
    'about.regional.title': 'Built for the Region, Designed for the World',
    'about.regional.description': 'We deeply understand the nuances of doing business in the MENA region, from regulatory compliance to cultural preferences.',
    'about.regional.understanding.title': 'Local Understanding',
    'about.regional.understanding.description': 'Deep knowledge of regional business practices',
    'about.regional.bilingual.title': 'Bilingual Support',
    'about.regional.bilingual.description': 'Full Arabic and English support with RTL',
    'about.regional.standards.title': 'Global Standards',
    'about.regional.standards.description': 'Built on international best practices',

    // Value Section
    'value.title': '360° VALUE',
    'value.subtitle': 'We don\'t just build software',
    'value.subtitleHighlight': 'We design experiences',
    'value.cta': 'Discover Our Value',

    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Solutions for Every Need',
    'services.description': 'From implementation to optimization, we provide a complete range of services to ensure your success with MovinWare.',

    // Services Tabs
    'services.tabs.services': 'Services',
    'services.tabs.solutions': 'Solutions',
    'services.tabs.value': 'Value',

    // ERP Services
    'services.erp.title': 'ERP Implementation',
    'services.erp.description': 'Complete ERP implementation tailored to your business needs',
    'services.erp.features.architecture': 'System architecture design',
    'services.erp.features.development': 'Development and customization',
    'services.erp.features.migration': 'Data migration',
    'services.erp.features.training': 'User training',

    // Industry Services
    'services.industry.title': 'Industry-Specific Solutions',
    'services.industry.description': 'Specialized solutions designed for your industry\'s unique requirements',
    'services.industry.features.healthcare': 'Healthcare management',
    'services.industry.features.education': 'Education systems',
    'services.industry.features.fitness': 'Fitness management',
    'services.industry.features.logistics': 'Logistics solutions',

    // AI Services
    'services.ai.title': 'AI Integration',
    'services.ai.description': 'Enhance your ERP with advanced AI capabilities',
    'services.ai.features.forecasting': 'Intelligent forecasting',
    'services.ai.features.chatbots': 'Virtual assistants',
    'services.ai.features.ocr': 'Document processing',
    'services.ai.features.automation': 'Workflow automation',

    // UX Services
    'services.ux.title': 'User Experience Design',
    'services.ux.description': 'Intuitive interfaces designed for Arabic and international users',
    'services.ux.features.rtl': 'Native RTL support',
    'services.ux.features.localization': 'Cultural localization',
    'services.ux.features.accessibility': 'Accessibility',
    'services.ux.features.mobile': 'Responsive design',

    // Migration Services
    'services.migration.title': 'System Migration',
    'services.migration.description': 'Seamless transition from your current systems to MovinWare',
    'services.migration.features.mapping': 'Data mapping',
    'services.migration.features.api': 'API integration',
    'services.migration.features.sync': 'Data synchronization',
    'services.migration.features.backup': 'Secure backups',

    // Support Services
    'services.support.title': 'Support & Maintenance',
    'services.support.description': 'Ongoing support to ensure optimal performance of your system',
    'services.support.features.updates': 'Regular updates',
    'services.support.features.tuning': 'Performance tuning',
    'services.support.features.development': 'Feature development',
    'services.support.features.monitoring': 'System monitoring',

    // Solutions
    'solutions.accounting.title': 'Accounting & Finance',
    'solutions.accounting.description': 'Comprehensive financial management with local compliance',
    'solutions.accounting.features.ledger': 'General ledger',
    'solutions.accounting.features.invoicing': 'Invoicing',
    'solutions.accounting.features.reporting': 'Financial reporting',
    'solutions.accounting.features.compliance': 'Tax compliance',

    'solutions.hr.title': 'Human Resources',
    'solutions.hr.description': 'Complete HR management from recruitment to retirement',
    'solutions.hr.features.records': 'Employee records',
    'solutions.hr.features.attendance': 'Time & attendance',
    'solutions.hr.features.payroll': 'Payroll management',
    'solutions.hr.features.calendar': 'Leave calendar',

    'solutions.sales.title': 'Sales & CRM',
    'solutions.sales.description': 'Manage the complete sales cycle and customer relationships',
    'solutions.sales.features.leads': 'Lead management',
    'solutions.sales.features.quotes': 'Quotations',
    'solutions.sales.features.orders': 'Sales orders',
    'solutions.sales.features.portal': 'Customer portal',

    'solutions.inventory.title': 'Inventory Management',
    'solutions.inventory.description': 'Real-time inventory tracking and management',
    'solutions.inventory.features.stock': 'Stock tracking',
    'solutions.inventory.features.warehousing': 'Warehouse management',
    'solutions.inventory.features.pricing': 'Pricing strategies',
    'solutions.inventory.features.labeling': 'Product labeling',

    'solutions.manufacturing.title': 'Manufacturing',
    'solutions.manufacturing.description': 'Plan and execute manufacturing operations',
    'solutions.manufacturing.features.bom': 'Bill of materials',
    'solutions.manufacturing.features.orders': 'Manufacturing orders',
    'solutions.manufacturing.features.planning': 'Production planning',
    'solutions.manufacturing.features.quality': 'Quality control',

    'solutions.assets.title': 'Asset Management',
    'solutions.assets.description': 'Track and maintain company assets',
    'solutions.assets.features.depreciation': 'Depreciation calculation',
    'solutions.assets.features.maintenance': 'Maintenance scheduling',
    'solutions.assets.features.qr': 'QR codes for assets',
    'solutions.assets.features.alerts': 'Maintenance alerts',

    // Value Propositions
    'value.ai.title': 'Built-in AI',
    'value.ai.description': 'AI that learns from your data and improves your operations',
    'value.ai.features.forecasting': 'Demand forecasting',
    'value.ai.features.automation': 'Task automation',
    'value.ai.features.workflows': 'Workflow optimization',
    'value.ai.features.analytics': 'Advanced analytics',

    'value.speed.title': 'Speed to Value',
    'value.speed.description': 'From idea to operation in record time',
    'value.speed.features.deployment': 'Rapid deployment',
    'value.speed.features.roi': 'Quick ROI',
    'value.speed.features.benefits': 'Immediate benefits',
    'value.speed.features.methodology': 'Proven methodology',

    'value.cultural.title': 'Cultural Alignment',
    'value.cultural.description': 'Designed specifically for the Arabic market',
    'value.cultural.features.bilingual': 'Bilingual support',
    'value.cultural.features.rtl': 'Native RTL interface',
    'value.cultural.features.compliance': 'Local compliance',
    'value.cultural.features.alignment': 'Cultural alignment',

    'value.adoption.title': 'Easy Adoption',
    'value.adoption.description': 'Intuitive interfaces users love',
    'value.adoption.features.design': 'Intuitive design',
    'value.adoption.features.training': 'Comprehensive training',
    'value.adoption.features.interface': 'User-friendly interface',
    'value.adoption.features.support': 'Ongoing support',

    // Industries Section
    'industries.badge': 'Industries',
    'industries.title': 'Specialized Solutions for Every Industry',
    'industries.description': 'We understand that every industry has its unique requirements. Our solutions are tailored to meet the specific needs of your industry.',

    // Education Industry
    'industries.education.title': 'Education',
    'industries.education.description': 'Comprehensive solutions for managing educational institutions from schools to universities',
    'industries.education.features.student': 'Student management',
    'industries.education.features.academic': 'Academic records',
    'industries.education.features.parent': 'Parent portal',
    'industries.education.features.fee': 'Fee management',
    'industries.education.clients.schools': 'Schools',
    'industries.education.clients.universities': 'Universities',
    'industries.education.clients.training': 'Training centers',
    'industries.education.clients.online': 'Online education',

    // Logistics Industry
    'industries.logistics.title': 'Logistics',
    'industries.logistics.description': 'Optimize supply chain and distribution operations',
    'industries.logistics.features.fleet': 'Fleet management',
    'industries.logistics.features.route': 'Route optimization',
    'industries.logistics.features.inventory': 'Inventory tracking',
    'industries.logistics.features.customs': 'Customs procedures',
    'industries.logistics.clients.shipping': 'Shipping companies',
    'industries.logistics.clients.3pl': '3PL providers',
    'industries.logistics.clients.distribution': 'Distribution centers',
    'industries.logistics.clients.freight': 'Freight companies',

    // Retail Industry
    'industries.retail.title': 'Retail',
    'industries.retail.description': 'Integrated solutions for retail operations management',
    'industries.retail.features.pos': 'Point of sale',
    'industries.retail.features.sync': 'Inventory sync',
    'industries.retail.features.loyalty': 'Loyalty programs',
    'industries.retail.features.multichannel': 'Multi-channel sales',
    'industries.retail.clients.chains': 'Retail chains',
    'industries.retail.clients.online': 'E-commerce',
    'industries.retail.clients.fashion': 'Fashion',
    'industries.retail.clients.electronics': 'Electronics',

    // Manufacturing Industry
    'industries.manufacturing.title': 'Manufacturing',
    'industries.manufacturing.description': 'Optimize production and manufacturing processes',
    'industries.manufacturing.features.planning': 'Production planning',
    'industries.manufacturing.features.quality': 'Quality control',
    'industries.manufacturing.features.supply': 'Supply chain management',
    'industries.manufacturing.features.maintenance': 'Equipment maintenance',
    'industries.manufacturing.clients.manufacturers': 'Manufacturers',
    'industries.manufacturing.clients.assembly': 'Assembly lines',
    'industries.manufacturing.clients.food': 'Food processing',
    'industries.manufacturing.clients.textile': 'Textile',

    // Client Size Categories
    'industries.clientSize.title': 'Solutions for Every Business Size',
    'industries.clientSize.description': 'From startups to large enterprises, we have the right solution for you',

    'industries.startups.title': 'Startups',
    'industries.startups.description': 'Flexible and scalable solutions for fast-growing companies',
    'industries.startups.benefits.implementation': 'Quick implementation',
    'industries.startups.benefits.scalable': 'Scalable solutions',
    'industries.startups.benefits.cost': 'Cost-effective',
    'industries.startups.benefits.growth': 'Growth support',

    'industries.smes.title': 'SMEs',
    'industries.smes.description': 'Comprehensive solutions designed for growing businesses',
    'industries.smes.benefits.featured': 'Full-featured',
    'industries.smes.benefits.customization': 'Flexible customization',
    'industries.smes.benefits.integration': 'Seamless integration',
    'industries.smes.benefits.support': 'Dedicated support',

    'industries.enterprises.title': 'Enterprises',
    'industries.enterprises.description': 'Advanced solutions for large and complex organizations',
    'industries.enterprises.benefits.analytics': 'Advanced analytics',
    'industries.enterprises.benefits.multi': 'Multi-location support',
    'industries.enterprises.benefits.compliance': 'Advanced compliance',
    'industries.enterprises.benefits.support247': '24/7 support',

    // Implementation Section
    'implementation.badge': 'Implementation',
    'implementation.title': 'Proven Methodology',
    'implementation.titleHighlight': 'for Guaranteed Success',
    'implementation.description': 'Our structured approach ensures smooth and successful implementation of your ERP system.',

    // Implementation Phases
    'implementation.phase1.title': 'Analysis & Planning',
    'implementation.phase1.duration': '1-2 weeks',
    'implementation.phase1.description': 'Comprehensive understanding of your current processes and future requirements',
    'implementation.phase1.activities.mapping': 'Process mapping',
    'implementation.phase1.activities.analysis': 'Requirements analysis',
    'implementation.phase1.activities.audit': 'Current system audit',
    'implementation.phase1.activities.gathering': 'Data gathering',
    'implementation.phase1.deliverables.assessment': 'Comprehensive assessment',
    'implementation.phase1.deliverables.gap': 'Gap analysis',
    'implementation.phase1.deliverables.requirements': 'Requirements document',
    'implementation.phase1.deliverables.roadmap': 'Implementation roadmap',

    'implementation.phase2.title': 'Design & Configuration',
    'implementation.phase2.duration': '2-3 weeks',
    'implementation.phase2.description': 'System design and configuration to match your specific needs',
    'implementation.phase2.activities.workflow': 'Workflow design',
    'implementation.phase2.activities.ai': 'AI configuration',
    'implementation.phase2.activities.bilingual': 'Bilingual setup',
    'implementation.phase2.activities.security': 'Security configuration',
    'implementation.phase2.deliverables.blueprint': 'System blueprint',
    'implementation.phase2.deliverables.specifications': 'Configuration specifications',
    'implementation.phase2.deliverables.mockups': 'Mockups',
    'implementation.phase2.deliverables.integration': 'Integration plan',

    'implementation.phase3.title': 'Development & Testing',
    'implementation.phase3.duration': '3-4 weeks',
    'implementation.phase3.description': 'Custom development and comprehensive system testing',
    'implementation.phase3.activities.development': 'Custom development',
    'implementation.phase3.activities.demos': 'Demo sessions',
    'implementation.phase3.activities.migration': 'Data migration',
    'implementation.phase3.activities.testing': 'Comprehensive testing',
    'implementation.phase3.deliverables.system': 'Ready system',
    'implementation.phase3.deliverables.data': 'Migrated data',
    'implementation.phase3.deliverables.results': 'Test results',
    'implementation.phase3.deliverables.documentation': 'System documentation',

    'implementation.phase4.title': 'Deployment & Training',
    'implementation.phase4.duration': '1-2 weeks',
    'implementation.phase4.description': 'System deployment and team training for optimal usage',
    'implementation.phase4.activities.training': 'User training',
    'implementation.phase4.activities.support': 'Transition support',
    'implementation.phase4.activities.monitoring': 'Performance monitoring',
    'implementation.phase4.activities.resolution': 'Issue resolution',
    'implementation.phase4.deliverables.users': 'Trained users',
    'implementation.phase4.deliverables.live': 'Live system',
    'implementation.phase4.deliverables.support': 'Ongoing support',
    'implementation.phase4.deliverables.performance': 'Performance reports',

    'implementation.phase5.title': 'Optimization & Growth',
    'implementation.phase5.duration': 'Ongoing',
    'implementation.phase5.description': 'Continuous improvement and new features as your business grows',
    'implementation.phase5.activities.reviews': 'Regular reviews',
    'implementation.phase5.activities.retuning': 'System retuning',
    'implementation.phase5.activities.upgrades': 'System upgrades',
    'implementation.phase5.activities.optimization': 'Performance optimization',
    'implementation.phase5.deliverables.reports': 'Regular reports',
    'implementation.phase5.deliverables.features': 'New features',
    'implementation.phase5.deliverables.enhanced': 'Enhanced system',
    'implementation.phase5.deliverables.growth': 'Growth support',

    // Implementation Proof Points
    'implementation.provenResults': 'Proven Results',
    'implementation.provenDescription': 'Our proven methodology delivers exceptional results for our clients',
    'implementation.proof.faster': 'Faster Implementation',
    'implementation.proof.fasterDesc': 'Than industry average',
    'implementation.proof.zero': 'Zero',
    'implementation.proof.zeroDesc': 'Downtime',
    'implementation.proof.zeroDetail': 'During implementation',
    'implementation.proof.adoption': 'User Adoption Rate',
    'implementation.proof.adoptionDesc': 'Of users',

    // Testimonials Section
    'testimonials.badge': 'Success Stories',
    'testimonials.title': 'Our Clients',
    'testimonials.titleHighlight': 'Achieve Exceptional Results',
    'testimonials.description': 'Discover how businesses transform their operations and achieve sustainable growth with MovinWare.',
    'testimonials.caseStudyNavigation': 'Case study navigation',

    // Case Study Labels
    'testimonials.labels.challenge': 'Challenge',
    'testimonials.labels.solution': 'Solution',
    'testimonials.labels.results': 'Results',
    'testimonials.labels.implementation': 'Implementation',
    'testimonials.labels.efficiency': 'Efficiency',
    'testimonials.labels.adoption': 'Adoption',

    // Case Study 1 - Retail
    'testimonials.case1.client': 'Modern Fashion Group',
    'testimonials.case1.industry': 'Retail',
    'testimonials.case1.challenge': 'The company faced challenges managing inventory across 15 branches with no real-time visibility into sales and stock levels.',
    'testimonials.case1.solution': 'We implemented an integrated ERP system with smart POS and real-time inventory management system with full Arabic language support.',
    'testimonials.case1.results.timeline': 'Implementation in just 6 weeks',
    'testimonials.case1.results.efficiency': '40% improvement in operational efficiency',
    'testimonials.case1.results.visibility': 'Complete real-time inventory visibility',
    'testimonials.case1.results.processes': 'Automated 80% of manual processes',
    'testimonials.case1.quote': 'MovinWare completely transformed how we operate. Now we have complete visibility into our operations and can make informed decisions based on accurate data.',
    'testimonials.case1.author': 'Ahmed Al-Mansouri',
    'testimonials.case1.position': 'CEO',
    'testimonials.case1.metrics.implementation': '6 weeks',
    'testimonials.case1.metrics.efficiency': '+40%',
    'testimonials.case1.metrics.adoption': '95%',

    // Case Study 2 - Education
    'testimonials.case2.client': 'Future Academy',
    'testimonials.case2.industry': 'Education',
    'testimonials.case2.challenge': 'Complex management of 3000 student records with challenges in parent communication and tuition fee management.',
    'testimonials.case2.solution': 'Comprehensive education management system with parent portal and advanced fee management system with bilingual support.',
    'testimonials.case2.results.cultural': 'Complete cultural and linguistic support',
    'testimonials.case2.results.communication': '60% improvement in parent communication',
    'testimonials.case2.results.exams': 'Automated exam and grading system',
    'testimonials.case2.results.management': 'Simplified fee and payment management',
    'testimonials.case2.quote': 'The system is easy to use and supports Arabic excellently. Parents are very satisfied with the new portal.',
    'testimonials.case2.author': 'Dr. Fatima Al-Zahra',
    'testimonials.case2.position': 'Academy Director',
    'testimonials.case2.metrics.implementation': '8 weeks',
    'testimonials.case2.metrics.efficiency': '+60%',
    'testimonials.case2.metrics.adoption': '92%',

    // Case Study 3 - Logistics
    'testimonials.case3.client': 'Gulf Transport Company',
    'testimonials.case3.industry': 'Logistics',
    'testimonials.case3.challenge': 'Challenges in shipment tracking and fleet management with no clear visibility into operating costs.',
    'testimonials.case3.solution': 'Integrated logistics management system with GPS tracking, fleet management, and advanced cost analytics.',
    'testimonials.case3.results.reduction': '25% reduction in operating costs',
    'testimonials.case3.results.delivery': '35% improvement in delivery times',
    'testimonials.case3.results.maintenance': 'Improved fleet maintenance scheduling',
    'testimonials.case3.results.tracking': 'Real-time tracking of all shipments',
    'testimonials.case3.quote': 'Now we can track every shipment and vehicle in real-time. This has improved customer service and significantly reduced costs.',
    'testimonials.case3.author': 'Khalid Al-Otaibi',
    'testimonials.case3.position': 'Operations Manager',
    'testimonials.case3.metrics.implementation': '10 weeks',
    'testimonials.case3.metrics.efficiency': '+35%',
    'testimonials.case3.metrics.adoption': '88%',

    // Contact Section
    'contact.badge': 'Contact Us',
    'contact.title': 'Ready to',
    'contact.titleHighlight': 'Transform Your Business?',
    'contact.description': 'Let\'s discuss how MovinWare can help streamline your operations and achieve your goals.',

    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.company': 'Company',
    'contact.form.companyPlaceholder': 'Your company name',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': '+971 XX XXX XXXX',
    'contact.form.inquiryType': 'Inquiry Type',
    'contact.form.inquiryPlaceholder': 'Select inquiry type',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your needs...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',

    // Contact Form Validation
    'contact.form.validation.nameRequired': 'Name is required',
    'contact.form.validation.emailRequired': 'Email is required',
    'contact.form.validation.emailInvalid': 'Email is invalid',
    'contact.form.validation.inquiryRequired': 'Inquiry type is required',
    'contact.form.validation.messageRequired': 'Message is required',
    'contact.form.successMessage': 'Your message has been sent successfully! We\'ll get back to you soon.',
    'contact.form.errorMessage': 'An error occurred while sending your message. Please try again.',

    // Contact Info
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Reach out to us directly or schedule a free consultation to discuss your needs.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',

    // Contact Actions
    'contact.quickActions': 'Quick Actions',
    'contact.talkToExpert': 'Talk to Expert',
    'contact.scheduleConsultation': 'Schedule Consultation',
    'contact.whatsappSupport': 'WhatsApp Support',
    'contact.whatsappDescription': 'Contact us via WhatsApp for quick support',
    'contact.chatWhatsapp': 'Chat on WhatsApp',

    // Footer
    'footer.tagline': 'Smart Operations.\nSeamless Transformation.',
    'footer.links.solutions': 'Solutions',
    'footer.links.services': 'Services',
    'footer.links.industries': 'Industries',
    'footer.links.about': 'About',
    'footer.links.contact': 'Contact',
    'footer.links.careers': 'Careers',
    'footer.links.privacy': 'Privacy Policy',
    'footer.links.terms': 'Terms & Conditions',
    'footer.links.cookies': 'Cookie Policy',
    'footer.links.support': 'Support',
    'footer.links.documentation': 'Documentation',
    'footer.links.partner': 'Become a Partner',
    'footer.copyright': '© 2024 MovinWare. All rights reserved.',
  }
}

export function getTranslation(locale: Locale, key: string): string {
  const translation = translations[locale]?.[key]
  if (!translation) {
    console.warn(`Translation missing for key "${key}" in locale "${locale}"`)
    return key // Return the key if translation is missing
  }
  return translation
}