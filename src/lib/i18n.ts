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
    'nav.changeLanguage': 'تغيير اللغة',
    'nav.languageMenu': 'قائمة اللغة',
    'nav.closeMenu': 'إغلاق القائمة',
    'nav.openMenu': 'فتح القائمة',
    'nav.scrollToTop': 'العودة إلى الأعلى',
    
    // New Navigation Structure
    'nav.platform': 'المنصة',
    'nav.industries': 'الصناعات',
    'nav.whyMovinware': 'لماذا MovinWare',
    'nav.pricing': 'الأسعار',
    'nav.resources': 'الموارد',
    'nav.getDemo': 'احصل على عرض توضيحي',
    'nav.contact': 'تواصل معنا',

    // Platform Dropdown
    'platform.coreModules': 'الوحدات الأساسية',
    'platform.aiFeatures': 'الميزات المدعومة بالذكاء الاصطناعي',
    'platform.integration': 'قدرات التكامل',
    'platform.mobileCloud': 'الوصول عبر الهاتف المحمول والسحابة',

    // Industries Dropdown
    'industries.education': 'التعليم والتدريب',
    'industries.retail': 'التجارة والتجارة الإلكترونية',
    'industries.manufacturing': 'التصنيع',
    'industries.logistics': 'اللوجستيات والتوزيع',
    'industries.viewAll': 'عرض جميع الصناعات',

    // Why MovinWare Dropdown
    'whyMovinware.story': 'قصتنا ومهمتنا',
    'whyMovinware.methodology': 'منهجية التنفيذ',
    'whyMovinware.success': 'قصص النجاح',
    'whyMovinware.expertise': 'الخبرة الإقليمية',

    // Pricing Dropdown
    'pricing.startup': 'حزمة الشركات الناشئة',
    'pricing.sme': 'حزمة الشركات الصغيرة والمتوسطة',
    'pricing.enterprise': 'حزمة المؤسسات',
    'pricing.custom': 'حلول مخصصة',

    // Resources Dropdown
    'resources.documentation': 'الوثائق',
    'resources.tutorials': 'دروس الفيديو',
    'resources.caseStudies': 'دراسات الحالة',
    'resources.blog': 'المدونة والرؤى',
    'resources.support': 'مركز الدعم',

    // Hero Section
    'hero.title': 'العمليات الذكية',
    'hero.subtitle': 'التحول السلس',
    'hero.description': 'نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع حلول MovinWare الذكية.',
    'hero.metrics.implementation': 'تنفيذ أسرع',
    'hero.metrics.adoption': 'معدل اعتماد',
    'hero.metrics.support': 'دعم',

    // About Section
    'about.badge': 'من نحن',
    'about.title': 'نعيد تعريف',
    'about.titleHighlight': 'أنظمة تخطيط موارد المؤسسات',
    'about.description1': 'تأسست MovinWare من رؤية بسيطة: جعل أنظمة تخطيط موارد المؤسسات المتقدمة في متناول كل عمل في منطقة الشرق الأوسط وشمال أفريقيا.',
    'about.description2': 'نحن نؤمن أن التكنولوجيا يجب أن تتكيف مع ثقافتك، وليس العكس. لهذا السبب بنينا منصة تفهم التعقيدات الفريدة للأعمال في المنطقة.',

    // Principles
    'about.principles.speed.title': 'السرعة في التنفيذ',
    'about.principles.speed.description': 'من المفهوم إلى التشغيل في أسابيع، وليس أشهر',
    'about.principles.intelligence.title': 'الذكاء المدمج',
    'about.principles.intelligence.description': 'الذكاء الاصطناعي يتعلم من عملياتك ويحسنها',
    'about.principles.adoption.title': 'سهولة الاعتماد',
    'about.principles.adoption.description': 'واجهات بديهية تحبها الفرق',
    'about.principles.growth.title': 'النمو المستدام',
    'about.principles.growth.description': 'يتوسع مع عملك دون تعقيد',

    // Vision & Mission
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'نتصور مستقبلاً حيث تمكن التكنولوجيا كل عمل من الازدهار، بغض النظر عن حجمه أو صناعته.',
    'about.vision.points.democratize': 'إضفاء الطابع الديمقراطي على الوصول إلى تكنولوجيا المؤسسات',
    'about.vision.points.eliminate': 'القضاء على حواجز التنفيذ التقليدية',
    'about.vision.points.enable': 'تمكين النمو المدفوع بالبيانات',

    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نحن نبني أكثر من مجرد برنامج - نحن نصنع شراكات تحول الأعمال.',
    'about.mission.metrics.title': 'التزامنا بالتميز',
    'about.mission.metrics.days': '30',
    'about.mission.metrics.daysDesc': 'يوماً للتنفيذ',
    'about.mission.metrics.process': '87%',
    'about.mission.metrics.processDesc': 'تحسن في العمليات',
    'about.mission.metrics.user': '95%',
    'about.mission.metrics.userDesc': 'رضا المستخدمين',

    // Regional Focus
    'about.regional.title': 'مبني للمنطقة، مصمم للعالم',
    'about.regional.description': 'نحن نفهم التحديات الفريدة للأعمال في منطقة الشرق الأوسط وشمال أفريقيا ونبني حلولاً تتناسب مع احتياجاتك.',
    'about.regional.understanding.title': 'فهم ثقافي',
    'about.regional.understanding.description': 'حلول مصممة للممارسات التجارية المحلية',
    'about.regional.bilingual.title': 'دعم ثنائي اللغة',
    'about.regional.bilingual.description': 'واجهات أصلية بالعربية والإنجليزية',
    'about.regional.standards.title': 'معايير عالمية',
    'about.regional.standards.description': 'جودة وأمان على مستوى عالمي',

    // Value Section
    'value.title': '360° VALUE',
    'value.subtitle': 'حيث تلتقي التكنولوجيا بالتحول',
    'value.subtitleHighlight': 'لتحقيق نتائج استثنائية',
    'value.cta': 'اكتشف قيمتنا',

    // Services Section
    'services.badge': 'منصتنا',
    'services.title': 'حلول شاملة لكل احتياج',
    'services.description': 'من الوحدات الأساسية إلى الميزات المتقدمة، منصتنا تنمو مع عملك وتتكيف مع متطلباتك الفريدة.',

    // Service Tabs
    'services.tabs.platform': 'المنصة',
    'services.tabs.solutions': 'الحلول',
    'services.tabs.value': 'القيمة',

    // Platform Services
    'services.erp.title': 'تطوير أنظمة تخطيط موارد المؤسسات',
    'services.erp.description': 'حلول ERP مخصصة مبنية على احتياجاتك المحددة',
    'services.erp.features.architecture': 'تصميم معمارية النظام',
    'services.erp.features.development': 'تطوير مخصص',
    'services.erp.features.migration': 'ترحيل البيانات',
    'services.erp.features.training': 'تدريب المستخدمين',

    'services.industry.title': 'حلول خاصة بالصناعة',
    'services.industry.description': 'حلول مصممة خصيصاً لمتطلبات صناعتك',
    'services.industry.features.healthcare': 'إدارة الرعاية الصحية',
    'services.industry.features.education': 'أنظمة التعليم',
    'services.industry.features.fitness': 'إدارة اللياقة البدنية',
    'services.industry.features.logistics': 'حلول اللوجستيات',

    'services.ai.title': 'الذكاء الاصطناعي والأتمتة',
    'services.ai.description': 'ميزات ذكية تتعلم وتحسن عملياتك تلقائياً',
    'services.ai.features.forecasting': 'التنبؤ الذكي',
    'services.ai.features.chatbots': 'مساعدين افتراضيين',
    'services.ai.features.ocr': 'معالجة المستندات',
    'services.ai.features.automation': 'أتمتة سير العمل',

    'services.ux.title': 'تجربة المستخدم والتصميم',
    'services.ux.description': 'واجهات بديهية مصممة للمستخدمين في المنطقة',
    'services.ux.features.rtl': 'دعم RTL أصلي',
    'services.ux.features.localization': 'التوطين الثقافي',
    'services.ux.features.accessibility': 'إمكانية الوصول',
    'services.ux.features.mobile': 'تصميم متجاوب',

    'services.migration.title': 'ترحيل وتكامل الأنظمة',
    'services.migration.description': 'انتقال سلس من أنظمتك الحالية',
    'services.migration.features.mapping': 'تخطيط البيانات',
    'services.migration.features.api': 'تكامل API',
    'services.migration.features.sync': 'مزامنة البيانات',
    'services.migration.features.backup': 'نسخ احتياطية آمنة',

    'services.support.title': 'الدعم والصيانة',
    'services.support.description': 'دعم مستمر لضمان الأداء الأمثل',
    'services.support.features.updates': 'تحديثات منتظمة',
    'services.support.features.tuning': 'تحسين الأداء',
    'services.support.features.development': 'تطوير مستمر',
    'services.support.features.monitoring': 'مراقبة النظام',

    // Solutions
    'solutions.accounting.title': 'المحاسبة والمالية',
    'solutions.accounting.description': 'إدارة مالية شاملة مع تقارير متقدمة',
    'solutions.accounting.features.ledger': 'دفتر الأستاذ العام',
    'solutions.accounting.features.invoicing': 'الفوترة الذكية',
    'solutions.accounting.features.reporting': 'التقارير المالية',
    'solutions.accounting.features.compliance': 'الامتثال الضريبي',

    'solutions.hr.title': 'الموارد البشرية',
    'solutions.hr.description': 'إدارة شاملة للموارد البشرية والرواتب',
    'solutions.hr.features.records': 'سجلات الموظفين',
    'solutions.hr.features.attendance': 'الحضور والانصراف',
    'solutions.hr.features.payroll': 'إدارة الرواتب',
    'solutions.hr.features.calendar': 'تقويم الإجازات',

    'solutions.sales.title': 'المبيعات والعملاء',
    'solutions.sales.description': 'إدارة دورة المبيعات من العميل المحتمل إلى الإغلاق',
    'solutions.sales.features.leads': 'إدارة العملاء المحتملين',
    'solutions.sales.features.quotes': 'عروض الأسعار',
    'solutions.sales.features.orders': 'معالجة الطلبات',
    'solutions.sales.features.portal': 'بوابة العملاء',

    'solutions.inventory.title': 'إدارة المخزون',
    'solutions.inventory.description': 'تتبع وإدارة المخزون في الوقت الفعلي',
    'solutions.inventory.features.stock': 'تتبع المخزون',
    'solutions.inventory.features.warehousing': 'إدارة المستودعات',
    'solutions.inventory.features.pricing': 'استراتيجيات التسعير',
    'solutions.inventory.features.labeling': 'طباعة الملصقات',

    'solutions.manufacturing.title': 'التصنيع والإنتاج',
    'solutions.manufacturing.description': 'تخطيط وتتبع عمليات الإنتاج',
    'solutions.manufacturing.features.bom': 'قوائم المواد',
    'solutions.manufacturing.features.orders': 'أوامر الإنتاج',
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
    'value.ai.features.forecasting': 'التنبؤ بالمبيعات',
    'value.ai.features.automation': 'أتمتة المهام',
    'value.ai.features.workflows': 'سير عمل ذكي',
    'value.ai.features.analytics': 'تحليلات متقدمة',

    'value.speed.title': 'سرعة في التنفيذ',
    'value.speed.description': 'من التوقيع إلى التشغيل في وقت قياسي',
    'value.speed.features.deployment': 'نشر سريع',
    'value.speed.features.roi': 'عائد استثمار سريع',
    'value.speed.features.benefits': 'فوائد فورية',
    'value.speed.features.methodology': 'منهجية مثبتة',

    'value.cultural.title': 'التوافق الثقافي',
    'value.cultural.description': 'مبني خصيصاً للأعمال في منطقة الشرق الأوسط',
    'value.cultural.features.bilingual': 'واجهات ثنائية اللغة',
    'value.cultural.features.rtl': 'دعم RTL كامل',
    'value.cultural.features.compliance': 'امتثال محلي',
    'value.cultural.features.alignment': 'توافق ثقافي',

    'value.adoption.title': 'سهولة الاعتماد',
    'value.adoption.description': 'واجهات بديهية يحبها المستخدمون',
    'value.adoption.features.design': 'تصميم بديهي',
    'value.adoption.features.training': 'تدريب شامل',
    'value.adoption.features.interface': 'واجهة سهلة',
    'value.adoption.features.support': 'دعم مستمر',

    // Industries
    'industries.badge': 'الصناعات',
    'industries.title': 'حلول مخصصة لكل صناعة',
    'industries.description': 'نحن نفهم أن كل صناعة لها متطلبات فريدة. حلولنا مصممة خصيصاً لتلبية احتياجاتك المحددة.',

    'industries.education.title': 'التعليم والتدريب',
    'industries.education.description': 'حلول شاملة لإدارة المؤسسات التعليمية',
    'industries.education.features.student': 'إدارة الطلاب',
    'industries.education.features.academic': 'السجلات الأكاديمية',
    'industries.education.features.parent': 'بوابة أولياء الأمور',
    'industries.education.features.fee': 'إدارة الرسوم',
    'industries.education.clients.schools': 'المدارس',
    'industries.education.clients.universities': 'الجامعات',
    'industries.education.clients.training': 'مراكز التدريب',
    'industries.education.clients.online': 'التعليم الإلكتروني',

    'industries.logistics.title': 'اللوجستيات والتوزيع',
    'industries.logistics.description': 'تحسين سلسلة التوريد وعمليات التوزيع',
    'industries.logistics.features.fleet': 'إدارة الأسطول',
    'industries.logistics.features.route': 'تحسين المسارات',
    'industries.logistics.features.inventory': 'تتبع المخزون',
    'industries.logistics.features.customs': 'إدارة الجمارك',
    'industries.logistics.clients.shipping': 'شركات الشحن',
    'industries.logistics.clients.3pl': 'مقدمو الخدمات اللوجستية',
    'industries.logistics.clients.distribution': 'مراكز التوزيع',
    'industries.logistics.clients.freight': 'شركات الشحن',

    'industries.retail.title': 'التجارة والتجارة الإلكترونية',
    'industries.retail.description': 'حلول متكاملة للتجارة التقليدية والإلكترونية',
    'industries.retail.features.pos': 'نقاط البيع',
    'industries.retail.features.sync': 'مزامنة المخزون',
    'industries.retail.features.loyalty': 'برامج الولاء',
    'industries.retail.features.multichannel': 'البيع متعدد القنوات',
    'industries.retail.clients.chains': 'سلاسل التجزئة',
    'industries.retail.clients.online': 'المتاجر الإلكترونية',
    'industries.retail.clients.fashion': 'الأزياء',
    'industries.retail.clients.electronics': 'الإلكترونيات',

    'industries.manufacturing.title': 'التصنيع والإنتاج',
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
    'industries.clientSize.description': 'من الشركات الناشئة إلى المؤسسات الكبيرة، لدينا الحل المناسب لك.',

    'industries.startups.title': 'الشركات الناشئة',
    'industries.startups.description': 'حلول مرنة وقابلة للتوسع للشركات الناشئة',
    'industries.startups.benefits.implementation': 'تنفيذ سريع',
    'industries.startups.benefits.scalable': 'قابلية توسع',
    'industries.startups.benefits.cost': 'فعالية التكلفة',
    'industries.startups.benefits.growth': 'دعم النمو',

    'industries.smes.title': 'الشركات الصغيرة والمتوسطة',
    'industries.smes.description': 'حلول شاملة للشركات الصغيرة والمتوسطة',
    'industries.smes.benefits.featured': 'ميزات غنية',
    'industries.smes.benefits.customization': 'تخصيص مرن',
    'industries.smes.benefits.integration': 'تكامل سلس',
    'industries.smes.benefits.support': 'دعم مخصص',

    'industries.enterprises.title': 'المؤسسات الكبيرة',
    'industries.enterprises.description': 'حلول متقدمة للمؤسسات الكبيرة',
    'industries.enterprises.benefits.analytics': 'تحليلات متقدمة',
    'industries.enterprises.benefits.multi': 'دعم متعدد المواقع',
    'industries.enterprises.benefits.compliance': 'امتثال متقدم',
    'industries.enterprises.benefits.support247': 'دعم 24/7',

    // Implementation
    'implementation.badge': 'التنفيذ',
    'implementation.title': 'منهجية تنفيذ',
    'implementation.titleHighlight': 'مثبتة ومجربة',
    'implementation.description': 'عملية تنفيذ منظمة تضمن النجاح من اليوم الأول.',

    // Implementation Phases
    'implementation.phase1.title': 'التحليل والتخطيط',
    'implementation.phase1.duration': '1-2 أسابيع',
    'implementation.phase1.description': 'فهم شامل لعملياتك ومتطلباتك',
    'implementation.phase1.activities.mapping': 'تخطيط العمليات',
    'implementation.phase1.activities.analysis': 'تحليل المتطلبات',
    'implementation.phase1.activities.audit': 'مراجعة الأنظمة الحالية',
    'implementation.phase1.activities.gathering': 'جمع البيانات',
    'implementation.phase1.deliverables.assessment': 'تقييم شامل',
    'implementation.phase1.deliverables.gap': 'تحليل الفجوات',
    'implementation.phase1.deliverables.requirements': 'وثيقة المتطلبات',
    'implementation.phase1.deliverables.roadmap': 'خارطة طريق التنفيذ',

    'implementation.phase2.title': 'التصميم والتكوين',
    'implementation.phase2.duration': '2-3 أسابيع',
    'implementation.phase2.description': 'تصميم النظام وفقاً لمتطلباتك المحددة',
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
    'implementation.phase3.description': 'بناء واختبار النظام المخصص',
    'implementation.phase3.activities.development': 'التطوير المخصص',
    'implementation.phase3.activities.demos': 'عروض توضيحية',
    'implementation.phase3.activities.migration': 'ترحيل البيانات',
    'implementation.phase3.activities.testing': 'اختبار شامل',
    'implementation.phase3.deliverables.system': 'نظام جاهز',
    'implementation.phase3.deliverables.data': 'بيانات محولة',
    'implementation.phase3.deliverables.results': 'نتائج الاختبار',
    'implementation.phase3.deliverables.documentation': 'وثائق المستخدم',

    'implementation.phase4.title': 'النشر والتدريب',
    'implementation.phase4.duration': '1-2 أسابيع',
    'implementation.phase4.description': 'إطلاق النظام وتدريب المستخدمين',
    'implementation.phase4.activities.training': 'تدريب المستخدمين',
    'implementation.phase4.activities.support': 'دعم الإطلاق',
    'implementation.phase4.activities.monitoring': 'مراقبة الأداء',
    'implementation.phase4.activities.resolution': 'حل المشاكل',
    'implementation.phase4.deliverables.users': 'مستخدمون مدربون',
    'implementation.phase4.deliverables.live': 'نظام مباشر',
    'implementation.phase4.deliverables.support': 'دعم مستمر',
    'implementation.phase4.deliverables.performance': 'تقارير الأداء',

    'implementation.phase5.title': 'التحسين والنمو',
    'implementation.phase5.duration': 'مستمر',
    'implementation.phase5.description': 'تحسين مستمر ودعم النمو',
    'implementation.phase5.activities.reviews': 'مراجعات دورية',
    'implementation.phase5.activities.retuning': 'إعادة ضبط',
    'implementation.phase5.activities.upgrades': 'ترقيات',
    'implementation.phase5.activities.optimization': 'تحسين',
    'implementation.phase5.deliverables.reports': 'تقارير دورية',
    'implementation.phase5.deliverables.features': 'ميزات جديدة',
    'implementation.phase5.deliverables.enhanced': 'أداء محسن',
    'implementation.phase5.deliverables.growth': 'دعم النمو',

    // Proof Points
    'implementation.provenResults': 'نتائج مثبتة',
    'implementation.provenDescription': 'منهجيتنا المجربة تحقق نتائج استثنائية لعملائنا',
    'implementation.proof.faster': 'تنفيذ أسرع',
    'implementation.proof.fasterDesc': 'من المتوسط في الصناعة',
    'implementation.proof.zero': 'صفر',
    'implementation.proof.zeroDesc': 'توقف في العمليات',
    'implementation.proof.zeroDetail': 'انتقال سلس دون انقطاع',
    'implementation.proof.adoption': 'معدل اعتماد',
    'implementation.proof.adoptionDesc': 'من المستخدمين في الشهر الأول',

    // Testimonials
    'testimonials.badge': 'قصص النجاح',
    'testimonials.title': 'عملاؤنا',
    'testimonials.titleHighlight': 'يحققون النجاح',
    'testimonials.description': 'اكتشف كيف تحول عملاؤنا أعمالهم باستخدام حلول MovinWare.',
    'testimonials.caseStudyNavigation': 'التنقل بين دراسات الحالة',

    // Case Studies
    'testimonials.case1.client': 'مجموعة الأزياء الحديثة',
    'testimonials.case1.industry': 'التجارة والأزياء',
    'testimonials.case1.challenge': 'تحدي إدارة المخزون عبر 15 فرعاً مع نقص في الرؤية الموحدة للمبيعات والمخزون.',
    'testimonials.case1.solution': 'تنفيذ نظام ERP متكامل مع نقاط بيع ذكية ولوحة تحكم موحدة لجميع الفروع.',
    'testimonials.case1.results.timeline': 'تنفيذ في 6 أسابيع فقط',
    'testimonials.case1.results.efficiency': '40% تحسن في كفاءة المخزون',
    'testimonials.case1.results.visibility': 'رؤية فورية لجميع الفروع',
    'testimonials.case1.results.processes': 'أتمتة 80% من العمليات اليدوية',
    'testimonials.case1.quote': 'MovinWare حول عملنا تماماً. الآن لدينا رؤية كاملة لجميع فروعنا ويمكننا اتخاذ قرارات مدروسة بناءً على بيانات فورية.',
    'testimonials.case1.author': 'أحمد المنصوري',
    'testimonials.case1.position': 'المدير العام',
    'testimonials.case1.metrics.implementation': '6 أسابيع',
    'testimonials.case1.metrics.efficiency': '40%',
    'testimonials.case1.metrics.adoption': '95%',

    'testimonials.case2.client': 'أكاديمية المستقبل',
    'testimonials.case2.industry': 'التعليم',
    'testimonials.case2.challenge': 'إدارة معقدة لـ 2000 طالب مع تحديات في التواصل مع أولياء الأمور وإدارة الرسوم.',
    'testimonials.case2.solution': 'نظام إدارة تعليمي شامل مع بوابة أولياء أمور ونظام دفع إلكتروني.',
    'testimonials.case2.results.cultural': 'واجهة ثنائية اللغة مثالية',
    'testimonials.case2.results.communication': 'تحسن 60% في التواصل',
    'testimonials.case2.results.exams': 'أتمتة كاملة لنظام الامتحانات',
    'testimonials.case2.results.management': 'تبسيط إدارة الرسوم',
    'testimonials.case2.quote': 'النظام سهل الاستخدام ويدعم اللغة العربية بشكل مثالي. أولياء الأمور سعداء جداً بالبوابة الجديدة.',
    'testimonials.case2.author': 'د. فاطمة الزهراء',
    'testimonials.case2.position': 'مديرة الأكاديمية',
    'testimonials.case2.metrics.implementation': '4 أسابيع',
    'testimonials.case2.metrics.efficiency': '60%',
    'testimonials.case2.metrics.adoption': '92%',

    'testimonials.case3.client': 'شركة الخليج للوجستيات',
    'testimonials.case3.industry': 'اللوجستيات والنقل',
    'testimonials.case3.challenge': 'تتبع معقد للشحنات عبر دول الخليج مع تحديات في إدارة الأسطول والجمارك.',
    'testimonials.case3.solution': 'نظام لوجستي متكامل مع تتبع GPS وإدارة ذكية للمسارات.',
    'testimonials.case3.results.reduction': '30% تقليل في أوقات التسليم',
    'testimonials.case3.results.delivery': 'تتبع فوري للشحنات',
    'testimonials.case3.results.maintenance': 'جدولة ذكية للصيانة',
    'testimonials.case3.results.tracking': 'شفافية كاملة للعملاء',
    'testimonials.case3.quote': 'الآن يمكن لعملائنا تتبع شحناتهم بالوقت الفعلي، وقد تحسنت كفاءة أسطولنا بشكل كبير.',
    'testimonials.case3.author': 'خالد العتيبي',
    'testimonials.case3.position': 'مدير العمليات',
    'testimonials.case3.metrics.implementation': '8 أسابيع',
    'testimonials.case3.metrics.efficiency': '30%',
    'testimonials.case3.metrics.adoption': '88%',

    // Labels
    'testimonials.labels.challenge': 'التحدي',
    'testimonials.labels.solution': 'الحل',
    'testimonials.labels.results': 'النتائج',
    'testimonials.labels.implementation': 'التنفيذ',
    'testimonials.labels.efficiency': 'تحسن الكفاءة',
    'testimonials.labels.adoption': 'معدل الاعتماد',

    // Contact Section
    'contact.badge': 'تواصل معنا',
    'contact.title': 'ابدأ رحلة',
    'contact.titleHighlight': 'التحول الرقمي',
    'contact.description': 'دعنا نساعدك في تحويل عملك بحلول ذكية مصممة خصيصاً لاحتياجاتك.',

    // Contact Form
    'contact.form.name': 'الاسم الكامل',
    'contact.form.namePlaceholder': 'أدخل اسمك الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'contact.form.company': 'اسم الشركة',
    'contact.form.companyPlaceholder': 'أدخل اسم شركتك',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.phonePlaceholder': 'أدخل رقم هاتفك',
    'contact.form.inquiryType': 'نوع الاستفسار',
    'contact.form.inquiryPlaceholder': 'اختر نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'أخبرنا عن مشروعك ومتطلباتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.submitting': 'جاري الإرسال...',

    // Form Validation
    'contact.form.validation.nameRequired': 'الاسم مطلوب',
    'contact.form.validation.emailRequired': 'البريد الإلكتروني مطلوب',
    'contact.form.validation.emailInvalid': 'البريد الإلكتروني غير صحيح',
    'contact.form.validation.inquiryRequired': 'نوع الاستفسار مطلوب',
    'contact.form.validation.messageRequired': 'الرسالة مطلوبة',

    // Form Messages
    'contact.form.successMessage': 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    'contact.form.errorMessage': 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',

    // Contact Info
    'contact.info.title': 'معلومات التواصل',
    'contact.info.description': 'تواصل معنا مباشرة أو احجز استشارة مجانية لمناقشة احتياجاتك.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'الهاتف',
    'contact.info.location': 'الموقع',

    // Quick Actions
    'contact.quickActions': 'إجراءات سريعة',
    'contact.talkToExpert': 'تحدث مع خبير',
    'contact.scheduleConsultation': 'احجز استشارة',

    // WhatsApp
    'contact.whatsappSupport': 'دعم واتساب',
    'contact.whatsappDescription': 'تواصل معنا فوراً عبر واتساب للحصول على دعم سريع.',
    'contact.chatWhatsapp': 'دردشة واتساب',

    // Footer
    'footer.tagline': 'المستقبل\nيبدأ اليوم',
    'footer.links.solutions': 'الحلول',
    'footer.links.services': 'الخدمات',
    'footer.links.industries': 'الصناعات',
    'footer.links.about': 'من نحن',
    'footer.links.contact': 'تواصل معنا',
    'footer.links.careers': 'الوظائف',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.links.terms': 'شروط الاستخدام',
    'footer.links.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.links.support': 'الدعم',
    'footer.links.documentation': 'الوثائق',
    'footer.links.partner': 'كن شريكاً',
    'footer.copyright': '© 2024 MovinWare. جميع الحقوق محفوظة.'
  },
  en: {
    // Navigation
    'nav.skipToMain': 'Skip to main content',
    'nav.mainNavigation': 'Main navigation',
    'nav.homeLink': 'Home',
    'nav.changeLanguage': 'Change language',
    'nav.languageMenu': 'Language menu',
    'nav.closeMenu': 'Close menu',
    'nav.openMenu': 'Open menu',
    'nav.scrollToTop': 'Scroll to top',
    
    // New Navigation Structure
    'nav.platform': 'Platform',
    'nav.industries': 'Industries',
    'nav.whyMovinware': 'Why MovinWare',
    'nav.pricing': 'Pricing',
    'nav.resources': 'Resources',
    'nav.getDemo': 'Get Demo',
    'nav.contact': 'Contact',

    // Platform Dropdown
    'platform.coreModules': 'Core ERP Modules',
    'platform.aiFeatures': 'AI-Powered Features',
    'platform.integration': 'Integration Capabilities',
    'platform.mobileCloud': 'Mobile & Cloud Access',

    // Industries Dropdown
    'industries.education': 'Education & Training',
    'industries.retail': 'Retail & E-commerce',
    'industries.manufacturing': 'Manufacturing',
    'industries.logistics': 'Logistics & Distribution',
    'industries.viewAll': 'View All Industries',

    // Why MovinWare Dropdown
    'whyMovinware.story': 'Our Story & Mission',
    'whyMovinware.methodology': 'Implementation Methodology',
    'whyMovinware.success': 'Success Stories',
    'whyMovinware.expertise': 'Regional Expertise',

    // Pricing Dropdown
    'pricing.startup': 'Startup Package',
    'pricing.sme': 'SME Package',
    'pricing.enterprise': 'Enterprise Package',
    'pricing.custom': 'Custom Solutions',

    // Resources Dropdown
    'resources.documentation': 'Documentation',
    'resources.tutorials': 'Video Tutorials',
    'resources.caseStudies': 'Case Studies',
    'resources.blog': 'Blog & Insights',
    'resources.support': 'Support Center',

    // Hero Section
    'hero.title': 'Smart Operations',
    'hero.subtitle': 'Seamless Transformation',
    'hero.description': 'AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare\'s intelligent solutions.',
    'hero.metrics.implementation': 'Faster Implementation',
    'hero.metrics.adoption': 'Adoption Rate',
    'hero.metrics.support': 'Support',

    // About Section
    'about.badge': 'About Us',
    'about.title': 'Redefining',
    'about.titleHighlight': 'Enterprise Systems',
    'about.description1': 'MovinWare was founded on a simple vision: making advanced ERP systems accessible to every business in the MENA region.',
    'about.description2': 'We believe technology should adapt to your culture, not the other way around. That\'s why we built a platform that understands the unique complexities of regional business.',

    // Principles
    'about.principles.speed.title': 'Speed to Value',
    'about.principles.speed.description': 'From concept to operation in weeks, not months',
    'about.principles.intelligence.title': 'Built-in Intelligence',
    'about.principles.intelligence.description': 'AI that learns from your operations and improves them',
    'about.principles.adoption.title': 'Easy Adoption',
    'about.principles.adoption.description': 'Intuitive interfaces that teams love to use',
    'about.principles.growth.title': 'Sustainable Growth',
    'about.principles.growth.description': 'Scales with your business without complexity',

    // Vision & Mission
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'We envision a future where technology empowers every business to thrive, regardless of size or industry.',
    'about.vision.points.democratize': 'Democratize access to enterprise technology',
    'about.vision.points.eliminate': 'Eliminate traditional implementation barriers',
    'about.vision.points.enable': 'Enable data-driven growth',

    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We build more than software - we craft partnerships that transform businesses.',
    'about.mission.metrics.title': 'Our Commitment to Excellence',
    'about.mission.metrics.days': '30',
    'about.mission.metrics.daysDesc': 'Days to Implementation',
    'about.mission.metrics.process': '87%',
    'about.mission.metrics.processDesc': 'Process Improvement',
    'about.mission.metrics.user': '95%',
    'about.mission.metrics.userDesc': 'User Satisfaction',

    // Regional Focus
    'about.regional.title': 'Built for the Region, Designed for the World',
    'about.regional.description': 'We understand the unique challenges of MENA businesses and build solutions that fit your needs.',
    'about.regional.understanding.title': 'Cultural Understanding',
    'about.regional.understanding.description': 'Solutions designed for local business practices',
    'about.regional.bilingual.title': 'Bilingual Support',
    'about.regional.bilingual.description': 'Native Arabic and English interfaces',
    'about.regional.standards.title': 'Global Standards',
    'about.regional.standards.description': 'World-class quality and security',

    // Value Section
    'value.title': '360° VALUE',
    'value.subtitle': 'Where Technology Meets Transformation',
    'value.subtitleHighlight': 'For Exceptional Results',
    'value.cta': 'Discover Our Value',

    // Services Section
    'services.badge': 'Our Platform',
    'services.title': 'Comprehensive Solutions for Every Need',
    'services.description': 'From core modules to advanced features, our platform grows with your business and adapts to your unique requirements.',

    // Service Tabs
    'services.tabs.platform': 'Platform',
    'services.tabs.solutions': 'Solutions',
    'services.tabs.value': 'Value',

    // Platform Services
    'services.erp.title': 'ERP Development',
    'services.erp.description': 'Custom ERP solutions built for your specific needs',
    'services.erp.features.architecture': 'System Architecture Design',
    'services.erp.features.development': 'Custom Development',
    'services.erp.features.migration': 'Data Migration',
    'services.erp.features.training': 'User Training',

    'services.industry.title': 'Industry-Specific Solutions',
    'services.industry.description': 'Tailored solutions designed for your industry requirements',
    'services.industry.features.healthcare': 'Healthcare Management',
    'services.industry.features.education': 'Education Systems',
    'services.industry.features.fitness': 'Fitness Management',
    'services.industry.features.logistics': 'Logistics Solutions',

    'services.ai.title': 'AI & Automation',
    'services.ai.description': 'Intelligent features that learn and improve your operations automatically',
    'services.ai.features.forecasting': 'Smart Forecasting',
    'services.ai.features.chatbots': 'Virtual Assistants',
    'services.ai.features.ocr': 'Document Processing',
    'services.ai.features.automation': 'Workflow Automation',

    'services.ux.title': 'UX & Design',
    'services.ux.description': 'Intuitive interfaces designed for regional users',
    'services.ux.features.rtl': 'Native RTL Support',
    'services.ux.features.localization': 'Cultural Localization',
    'services.ux.features.accessibility': 'Accessibility',
    'services.ux.features.mobile': 'Responsive Design',

    'services.migration.title': 'System Migration & Integration',
    'services.migration.description': 'Seamless transition from your existing systems',
    'services.migration.features.mapping': 'Data Mapping',
    'services.migration.features.api': 'API Integration',
    'services.migration.features.sync': 'Data Synchronization',
    'services.migration.features.backup': 'Secure Backups',

    'services.support.title': 'Support & Maintenance',
    'services.support.description': 'Ongoing support to ensure optimal performance',
    'services.support.features.updates': 'Regular Updates',
    'services.support.features.tuning': 'Performance Tuning',
    'services.support.features.development': 'Continuous Development',
    'services.support.features.monitoring': 'System Monitoring',

    // Solutions
    'solutions.accounting.title': 'Accounting & Finance',
    'solutions.accounting.description': 'Comprehensive financial management with advanced reporting',
    'solutions.accounting.features.ledger': 'General Ledger',
    'solutions.accounting.features.invoicing': 'Smart Invoicing',
    'solutions.accounting.features.reporting': 'Financial Reporting',
    'solutions.accounting.features.compliance': 'Tax Compliance',

    'solutions.hr.title': 'Human Resources',
    'solutions.hr.description': 'Complete HR management and payroll processing',
    'solutions.hr.features.records': 'Employee Records',
    'solutions.hr.features.attendance': 'Time & Attendance',
    'solutions.hr.features.payroll': 'Payroll Management',
    'solutions.hr.features.calendar': 'Leave Calendar',

    'solutions.sales.title': 'Sales & CRM',
    'solutions.sales.description': 'Manage your sales cycle from lead to close',
    'solutions.sales.features.leads': 'Lead Management',
    'solutions.sales.features.quotes': 'Quote Generation',
    'solutions.sales.features.orders': 'Order Processing',
    'solutions.sales.features.portal': 'Customer Portal',

    'solutions.inventory.title': 'Inventory Management',
    'solutions.inventory.description': 'Real-time inventory tracking and management',
    'solutions.inventory.features.stock': 'Stock Tracking',
    'solutions.inventory.features.warehousing': 'Warehouse Management',
    'solutions.inventory.features.pricing': 'Pricing Strategies',
    'solutions.inventory.features.labeling': 'Label Printing',

    'solutions.manufacturing.title': 'Manufacturing & Production',
    'solutions.manufacturing.description': 'Plan and track your production operations',
    'solutions.manufacturing.features.bom': 'Bill of Materials',
    'solutions.manufacturing.features.orders': 'Production Orders',
    'solutions.manufacturing.features.planning': 'Production Planning',
    'solutions.manufacturing.features.quality': 'Quality Control',

    'solutions.assets.title': 'Asset Management',
    'solutions.assets.description': 'Track and maintain your company assets',
    'solutions.assets.features.depreciation': 'Depreciation Calculation',
    'solutions.assets.features.maintenance': 'Maintenance Scheduling',
    'solutions.assets.features.qr': 'QR Code Assets',
    'solutions.assets.features.alerts': 'Maintenance Alerts',

    // Value Propositions
    'value.ai.title': 'Built-in AI Intelligence',
    'value.ai.description': 'AI that learns from your data and improves your operations',
    'value.ai.features.forecasting': 'Sales Forecasting',
    'value.ai.features.automation': 'Task Automation',
    'value.ai.features.workflows': 'Smart Workflows',
    'value.ai.features.analytics': 'Advanced Analytics',

    'value.speed.title': 'Speed to Value',
    'value.speed.description': 'From signing to operation in record time',
    'value.speed.features.deployment': 'Rapid Deployment',
    'value.speed.features.roi': 'Quick ROI',
    'value.speed.features.benefits': 'Immediate Benefits',
    'value.speed.features.methodology': 'Proven Methodology',

    'value.cultural.title': 'Cultural Alignment',
    'value.cultural.description': 'Built specifically for Middle Eastern businesses',
    'value.cultural.features.bilingual': 'Bilingual Interfaces',
    'value.cultural.features.rtl': 'Full RTL Support',
    'value.cultural.features.compliance': 'Local Compliance',
    'value.cultural.features.alignment': 'Cultural Alignment',

    'value.adoption.title': 'Easy Adoption',
    'value.adoption.description': 'Intuitive interfaces that users love',
    'value.adoption.features.design': 'Intuitive Design',
    'value.adoption.features.training': 'Comprehensive Training',
    'value.adoption.features.interface': 'User-Friendly Interface',
    'value.adoption.features.support': 'Ongoing Support',

    // Industries
    'industries.badge': 'Industries',
    'industries.title': 'Tailored Solutions for Every Industry',
    'industries.description': 'We understand that every industry has unique requirements. Our solutions are specifically designed to meet your specific needs.',

    'industries.education.title': 'Education & Training',
    'industries.education.description': 'Comprehensive solutions for educational institutions',
    'industries.education.features.student': 'Student Management',
    'industries.education.features.academic': 'Academic Records',
    'industries.education.features.parent': 'Parent Portal',
    'industries.education.features.fee': 'Fee Management',
    'industries.education.clients.schools': 'Schools',
    'industries.education.clients.universities': 'Universities',
    'industries.education.clients.training': 'Training Centers',
    'industries.education.clients.online': 'E-Learning',

    'industries.logistics.title': 'Logistics & Distribution',
    'industries.logistics.description': 'Optimize your supply chain and distribution operations',
    'industries.logistics.features.fleet': 'Fleet Management',
    'industries.logistics.features.route': 'Route Optimization',
    'industries.logistics.features.inventory': 'Inventory Tracking',
    'industries.logistics.features.customs': 'Customs Management',
    'industries.logistics.clients.shipping': 'Shipping Companies',
    'industries.logistics.clients.3pl': '3PL Providers',
    'industries.logistics.clients.distribution': 'Distribution Centers',
    'industries.logistics.clients.freight': 'Freight Companies',

    'industries.retail.title': 'Retail & E-commerce',
    'industries.retail.description': 'Integrated solutions for traditional and online retail',
    'industries.retail.features.pos': 'Point of Sale',
    'industries.retail.features.sync': 'Inventory Sync',
    'industries.retail.features.loyalty': 'Loyalty Programs',
    'industries.retail.features.multichannel': 'Multi-channel Sales',
    'industries.retail.clients.chains': 'Retail Chains',
    'industries.retail.clients.online': 'Online Stores',
    'industries.retail.clients.fashion': 'Fashion',
    'industries.retail.clients.electronics': 'Electronics',

    'industries.manufacturing.title': 'Manufacturing & Production',
    'industries.manufacturing.description': 'Optimize your production and manufacturing processes',
    'industries.manufacturing.features.planning': 'Production Planning',
    'industries.manufacturing.features.quality': 'Quality Control',
    'industries.manufacturing.features.supply': 'Supply Chain Management',
    'industries.manufacturing.features.maintenance': 'Equipment Maintenance',
    'industries.manufacturing.clients.manufacturers': 'Manufacturers',
    'industries.manufacturing.clients.assembly': 'Assembly Lines',
    'industries.manufacturing.clients.food': 'Food Processing',
    'industries.manufacturing.clients.textile': 'Textile',

    // Client Size Categories
    'industries.clientSize.title': 'Solutions for Every Business Size',
    'industries.clientSize.description': 'From startups to large enterprises, we have the right solution for you.',

    'industries.startups.title': 'Startups',
    'industries.startups.description': 'Flexible and scalable solutions for growing businesses',
    'industries.startups.benefits.implementation': 'Quick Implementation',
    'industries.startups.benefits.scalable': 'Scalable Architecture',
    'industries.startups.benefits.cost': 'Cost-Effective',
    'industries.startups.benefits.growth': 'Growth Support',

    'industries.smes.title': 'Small & Medium Enterprises',
    'industries.smes.description': 'Comprehensive solutions for established businesses',
    'industries.smes.benefits.featured': 'Feature-Rich',
    'industries.smes.benefits.customization': 'Flexible Customization',
    'industries.smes.benefits.integration': 'Seamless Integration',
    'industries.smes.benefits.support': 'Dedicated Support',

    'industries.enterprises.title': 'Large Enterprises',
    'industries.enterprises.description': 'Advanced solutions for complex organizations',
    'industries.enterprises.benefits.analytics': 'Advanced Analytics',
    'industries.enterprises.benefits.multi': 'Multi-location Support',
    'industries.enterprises.benefits.compliance': 'Advanced Compliance',
    'industries.enterprises.benefits.support247': '24/7 Support',

    // Implementation
    'implementation.badge': 'Implementation',
    'implementation.title': 'Proven Implementation',
    'implementation.titleHighlight': 'Methodology',
    'implementation.description': 'A structured implementation process that ensures success from day one.',

    // Implementation Phases
    'implementation.phase1.title': 'Analysis & Planning',
    'implementation.phase1.duration': '1-2 weeks',
    'implementation.phase1.description': 'Comprehensive understanding of your processes and requirements',
    'implementation.phase1.activities.mapping': 'Process Mapping',
    'implementation.phase1.activities.analysis': 'Requirements Analysis',
    'implementation.phase1.activities.audit': 'Current System Audit',
    'implementation.phase1.activities.gathering': 'Data Gathering',
    'implementation.phase1.deliverables.assessment': 'Comprehensive Assessment',
    'implementation.phase1.deliverables.gap': 'Gap Analysis',
    'implementation.phase1.deliverables.requirements': 'Requirements Document',
    'implementation.phase1.deliverables.roadmap': 'Implementation Roadmap',

    'implementation.phase2.title': 'Design & Configuration',
    'implementation.phase2.duration': '2-3 weeks',
    'implementation.phase2.description': 'System design according to your specific requirements',
    'implementation.phase2.activities.workflow': 'Workflow Design',
    'implementation.phase2.activities.ai': 'AI Configuration',
    'implementation.phase2.activities.bilingual': 'Bilingual Setup',
    'implementation.phase2.activities.security': 'Security Configuration',
    'implementation.phase2.deliverables.blueprint': 'System Blueprint',
    'implementation.phase2.deliverables.specifications': 'Configuration Specifications',
    'implementation.phase2.deliverables.mockups': 'Prototype Mockups',
    'implementation.phase2.deliverables.integration': 'Integration Plan',

    'implementation.phase3.title': 'Development & Testing',
    'implementation.phase3.duration': '3-4 weeks',
    'implementation.phase3.description': 'Building and testing your customized system',
    'implementation.phase3.activities.development': 'Custom Development',
    'implementation.phase3.activities.demos': 'Demo Sessions',
    'implementation.phase3.activities.migration': 'Data Migration',
    'implementation.phase3.activities.testing': 'Comprehensive Testing',
    'implementation.phase3.deliverables.system': 'Ready System',
    'implementation.phase3.deliverables.data': 'Migrated Data',
    'implementation.phase3.deliverables.results': 'Test Results',
    'implementation.phase3.deliverables.documentation': 'User Documentation',

    'implementation.phase4.title': 'Deployment & Training',
    'implementation.phase4.duration': '1-2 weeks',
    'implementation.phase4.description': 'System launch and user training',
    'implementation.phase4.activities.training': 'User Training',
    'implementation.phase4.activities.support': 'Launch Support',
    'implementation.phase4.activities.monitoring': 'Performance Monitoring',
    'implementation.phase4.activities.resolution': 'Issue Resolution',
    'implementation.phase4.deliverables.users': 'Trained Users',
    'implementation.phase4.deliverables.live': 'Live System',
    'implementation.phase4.deliverables.support': 'Ongoing Support',
    'implementation.phase4.deliverables.performance': 'Performance Reports',

    'implementation.phase5.title': 'Optimization & Growth',
    'implementation.phase5.duration': 'Ongoing',
    'implementation.phase5.description': 'Continuous improvement and growth support',
    'implementation.phase5.activities.reviews': 'Regular Reviews',
    'implementation.phase5.activities.retuning': 'System Retuning',
    'implementation.phase5.activities.upgrades': 'Feature Upgrades',
    'implementation.phase5.activities.optimization': 'Performance Optimization',
    'implementation.phase5.deliverables.reports': 'Regular Reports',
    'implementation.phase5.deliverables.features': 'New Features',
    'implementation.phase5.deliverables.enhanced': 'Enhanced Performance',
    'implementation.phase5.deliverables.growth': 'Growth Support',

    // Proof Points
    'implementation.provenResults': 'Proven Results',
    'implementation.provenDescription': 'Our proven methodology delivers exceptional results for our clients',
    'implementation.proof.faster': 'Faster Implementation',
    'implementation.proof.fasterDesc': 'Than industry average',
    'implementation.proof.zero': 'Zero',
    'implementation.proof.zeroDesc': 'Business Downtime',
    'implementation.proof.zeroDetail': 'Seamless transition without interruption',
    'implementation.proof.adoption': 'User Adoption',
    'implementation.proof.adoptionDesc': 'Within first month',

    // Testimonials
    'testimonials.badge': 'Success Stories',
    'testimonials.title': 'Our Clients',
    'testimonials.titleHighlight': 'Achieve Success',
    'testimonials.description': 'Discover how our clients transformed their businesses with MovinWare solutions.',
    'testimonials.caseStudyNavigation': 'Case study navigation',

    // Case Studies
    'testimonials.case1.client': 'Modern Fashion Group',
    'testimonials.case1.industry': 'Retail & Fashion',
    'testimonials.case1.challenge': 'Managing inventory across 15 branches with lack of unified visibility into sales and stock levels.',
    'testimonials.case1.solution': 'Implemented integrated ERP system with smart POS and unified dashboard for all branches.',
    'testimonials.case1.results.timeline': 'Implementation in just 6 weeks',
    'testimonials.case1.results.efficiency': '40% improvement in inventory efficiency',
    'testimonials.case1.results.visibility': 'Real-time visibility across all branches',
    'testimonials.case1.results.processes': 'Automated 80% of manual processes',
    'testimonials.case1.quote': 'MovinWare completely transformed our business. We now have complete visibility across all our branches and can make informed decisions based on real-time data.',
    'testimonials.case1.author': 'Ahmed Al-Mansouri',
    'testimonials.case1.position': 'General Manager',
    'testimonials.case1.metrics.implementation': '6 weeks',
    'testimonials.case1.metrics.efficiency': '40%',
    'testimonials.case1.metrics.adoption': '95%',

    'testimonials.case2.client': 'Future Academy',
    'testimonials.case2.industry': 'Education',
    'testimonials.case2.challenge': 'Complex management of 2000 students with challenges in parent communication and fee management.',
    'testimonials.case2.solution': 'Comprehensive education management system with parent portal and electronic payment system.',
    'testimonials.case2.results.cultural': 'Perfect bilingual interface',
    'testimonials.case2.results.communication': '60% improvement in communication',
    'testimonials.case2.results.exams': 'Complete automation of exam system',
    'testimonials.case2.results.management': 'Simplified fee management',
    'testimonials.case2.quote': 'The system is easy to use and supports Arabic perfectly. Parents are very happy with the new portal.',
    'testimonials.case2.author': 'Dr. Fatima Al-Zahra',
    'testimonials.case2.position': 'Academy Director',
    'testimonials.case2.metrics.implementation': '4 weeks',
    'testimonials.case2.metrics.efficiency': '60%',
    'testimonials.case2.metrics.adoption': '92%',

    'testimonials.case3.client': 'Gulf Logistics Company',
    'testimonials.case3.industry': 'Logistics & Transportation',
    'testimonials.case3.challenge': 'Complex shipment tracking across Gulf countries with challenges in fleet and customs management.',
    'testimonials.case3.solution': 'Integrated logistics system with GPS tracking and smart route management.',
    'testimonials.case3.results.reduction': '30% reduction in delivery times',
    'testimonials.case3.results.delivery': 'Real-time shipment tracking',
    'testimonials.case3.results.maintenance': 'Smart maintenance scheduling',
    'testimonials.case3.results.tracking': 'Complete customer transparency',
    'testimonials.case3.quote': 'Now our customers can track their shipments in real-time, and our fleet efficiency has improved significantly.',
    'testimonials.case3.author': 'Khalid Al-Otaibi',
    'testimonials.case3.position': 'Operations Manager',
    'testimonials.case3.metrics.implementation': '8 weeks',
    'testimonials.case3.metrics.efficiency': '30%',
    'testimonials.case3.metrics.adoption': '88%',

    // Labels
    'testimonials.labels.challenge': 'Challenge',
    'testimonials.labels.solution': 'Solution',
    'testimonials.labels.results': 'Results',
    'testimonials.labels.implementation': 'Implementation',
    'testimonials.labels.efficiency': 'Efficiency Gain',
    'testimonials.labels.adoption': 'Adoption Rate',

    // Contact Section
    'contact.badge': 'Contact Us',
    'contact.title': 'Start Your',
    'contact.titleHighlight': 'Digital Transformation',
    'contact.description': 'Let us help you transform your business with intelligent solutions designed specifically for your needs.',

    // Contact Form
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'Enter your email address',
    'contact.form.company': 'Company Name',
    'contact.form.companyPlaceholder': 'Enter your company name',
    'contact.form.phone': 'Phone Number',
    'contact.form.phonePlaceholder': 'Enter your phone number',
    'contact.form.inquiryType': 'Inquiry Type',
    'contact.form.inquiryPlaceholder': 'Select inquiry type',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project and requirements',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',

    // Form Validation
    'contact.form.validation.nameRequired': 'Name is required',
    'contact.form.validation.emailRequired': 'Email is required',
    'contact.form.validation.emailInvalid': 'Email is invalid',
    'contact.form.validation.inquiryRequired': 'Inquiry type is required',
    'contact.form.validation.messageRequired': 'Message is required',

    // Form Messages
    'contact.form.successMessage': 'Your message has been sent successfully! We\'ll get back to you soon.',
    'contact.form.errorMessage': 'There was an error sending your message. Please try again.',

    // Contact Info
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Reach out to us directly or schedule a free consultation to discuss your needs.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',

    // Quick Actions
    'contact.quickActions': 'Quick Actions',
    'contact.talkToExpert': 'Talk to Expert',
    'contact.scheduleConsultation': 'Schedule Consultation',

    // WhatsApp
    'contact.whatsappSupport': 'WhatsApp Support',
    'contact.whatsappDescription': 'Connect with us instantly via WhatsApp for quick support.',
    'contact.chatWhatsapp': 'Chat on WhatsApp',

    // Footer
    'footer.tagline': 'The Future\nStarts Today',
    'footer.links.solutions': 'Solutions',
    'footer.links.services': 'Services',
    'footer.links.industries': 'Industries',
    'footer.links.about': 'About',
    'footer.links.contact': 'Contact',
    'footer.links.careers': 'Careers',
    'footer.links.privacy': 'Privacy Policy',
    'footer.links.terms': 'Terms of Service',
    'footer.links.cookies': 'Cookie Policy',
    'footer.links.support': 'Support',
    'footer.links.documentation': 'Documentation',
    'footer.links.partner': 'Become a Partner',
    'footer.copyright': '© 2024 MovinWare. All rights reserved.'
  }
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to English if translation not found
      value = translations.en
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey]
        } else {
          return key // Return key if no translation found
        }
      }
      break
    }
  }
  
  return typeof value === 'string' ? value : key
}