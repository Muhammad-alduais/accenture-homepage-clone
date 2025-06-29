export const locales = ['ar', 'en'] as const
export type Locale = typeof locales[number]

export function isRTL(locale: Locale): boolean {
  return locale === 'ar'
}

// Enhanced translation system with nested object support
const translations = {
  ar: {
    // Navigation
    nav: {
      skipToMain: "انتقل إلى المحتوى الرئيسي",
      mainNavigation: "التنقل الرئيسي",
      homeLink: "رابط الصفحة الرئيسية",
      changeLanguage: "تغيير اللغة",
      languageMenu: "قائمة اللغة",
      closeMenu: "إغلاق القائمة",
      openMenu: "فتح القائمة",
      scrollToTop: "انتقل إلى الأعلى",
      platform: "المنصة",
      industries: "القطاعات",
      whyMovinware: "لماذا MovinWare",
      pricing: "التسعير",
      resources: "الموارد",
      getDemo: "احصل على عرض توضيحي"
    },

    // Platform dropdown
    platform: {
      coreModules: "الوحدات الأساسية",
      aiFeatures: "ميزات الذكاء الاصطناعي",
      integration: "قدرات التكامل",
      mobileCloud: "الوصول عبر الهاتف المحمول والسحابة"
    },

    // Industries
    industries: {
      education: "التعليم",
      retail: "التجارة",
      manufacturing: "التصنيع",
      logistics: "اللوجستيات",
      viewAll: "عرض جميع القطاعات",
      badge: "القطاعات",
      title: "حلول مخصصة لكل قطاع",
      description: "نقدم حلول تخطيط موارد المؤسسات المتخصصة المصممة خصيصاً لتلبية الاحتياجات الفريدة لقطاعك",
      clientSize: {
        title: "حلول لكل حجم شركة",
        description: "من الشركات الناشئة إلى المؤسسات الكبيرة، لدينا الحل المناسب لك"
      },
      education: {
        title: "التعليم",
        description: "حلول شاملة لإدارة المؤسسات التعليمية من المدارس إلى الجامعات",
        features: {
          student: "إدارة الطلاب",
          academic: "التخطيط الأكاديمي",
          parent: "بوابة أولياء الأمور",
          fee: "إدارة الرسوم"
        },
        clients: {
          schools: "المدارس",
          universities: "الجامعات",
          training: "مراكز التدريب",
          online: "التعليم الإلكتروني"
        }
      },
      logistics: {
        title: "اللوجستيات",
        description: "تحسين عمليات الشحن والتوزيع مع تتبع شامل للأسطول",
        features: {
          fleet: "إدارة الأسطول",
          route: "تحسين المسارات",
          inventory: "تتبع المخزون",
          customs: "إدارة الجمارك"
        },
        clients: {
          shipping: "شركات الشحن",
          3pl: "مقدمو الخدمات اللوجستية",
          distribution: "مراكز التوزيع",
          freight: "شركات الشحن"
        }
      },
      retail: {
        title: "التجارة",
        description: "حلول متكاملة للتجارة الإلكترونية والتقليدية مع إدارة شاملة للمخزون",
        features: {
          pos: "نقاط البيع",
          sync: "مزامنة المخزون",
          loyalty: "برامج الولاء",
          multichannel: "البيع متعدد القنوات"
        },
        clients: {
          chains: "سلاسل التجزئة",
          online: "المتاجر الإلكترونية",
          fashion: "الأزياء",
          electronics: "الإلكترونيات"
        }
      },
      manufacturing: {
        title: "التصنيع",
        description: "تحسين عمليات الإنتاج مع تخطيط متقدم للموارد وإدارة الجودة",
        features: {
          planning: "تخطيط الإنتاج",
          quality: "مراقبة الجودة",
          supply: "إدارة سلسلة التوريد",
          maintenance: "الصيانة الوقائية"
        },
        clients: {
          manufacturers: "المصنعون",
          assembly: "خطوط التجميع",
          food: "الصناعات الغذائية",
          textile: "النسيج"
        }
      },
      startups: {
        title: "الشركات الناشئة",
        description: "حلول مرنة وقابلة للتطوير للشركات سريعة النمو",
        benefits: {
          implementation: "تنفيذ سريع",
          scalable: "قابل للتطوير",
          cost: "فعال من حيث التكلفة",
          growth: "يدعم النمو السريع"
        }
      },
      smes: {
        title: "الشركات الصغيرة والمتوسطة",
        description: "حلول متكاملة مصممة للشركات المتنامية",
        benefits: {
          featured: "مليء بالميزات",
          customization: "قابل للتخصيص",
          integration: "سهل التكامل",
          support: "دعم مخصص"
        }
      },
      enterprises: {
        title: "المؤسسات الكبيرة",
        description: "حلول متقدمة للمنظمات الكبيرة والمعقدة",
        benefits: {
          analytics: "تحليلات متقدمة",
          multi: "متعدد المواقع",
          compliance: "الامتثال التنظيمي",
          support247: "دعم 24/7"
        }
      }
    },

    // Why MovinWare dropdown
    whyMovinware: {
      story: "قصتنا ومهمتنا",
      methodology: "منهجيتنا",
      success: "قصص النجاح",
      expertise: "الخبرة الإقليمية"
    },

    // Pricing dropdown
    pricing: {
      startup: "حزمة الشركات الناشئة",
      sme: "حزمة الشركات الصغيرة والمتوسطة",
      enterprise: "حزمة المؤسسات",
      custom: "حلول مخصصة"
    },

    // Resources dropdown
    resources: {
      documentation: "الوثائق",
      tutorials: "الدروس التعليمية",
      caseStudies: "دراسات الحالة",
      blog: "المدونة",
      support: "مركز الدعم"
    },

    // Hero Section
    hero: {
      title: "العمليات الذكية",
      subtitle: "التحول السلس",
      description: "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع حلول MovinWare الذكية.",
      metrics: {
        implementation: "تنفيذ أسرع",
        adoption: "معدل اعتماد",
        support: "دعم"
      }
    },

    // About Section
    about: {
      badge: "من نحن",
      title: "نحن نؤمن بأن",
      titleHighlight: "التكنولوجيا يجب أن تعمل لصالحك",
      description1: "تأسست MovinWare من رؤية بسيطة: جعل أنظمة تخطيط موارد المؤسسات المتقدمة في متناول كل شركة، بغض النظر عن حجمها أو تعقيدها. لقد رأينا الكثير من الشركات تكافح مع الحلول المعقدة والمكلفة التي تتطلب أشهراً للتنفيذ وسنوات للإتقان.",
      description2: "لهذا السبب بنينا MovinWare - نظام تخطيط موارد المؤسسات الذي يفهم عملك، ويتكيف مع احتياجاتك، وينمو معك. مع التركيز على البساطة والذكاء والسرعة، نحن نمكن الشركات من التحول رقمياً دون التعقيد.",
      principles: {
        speed: {
          title: "السرعة في التنفيذ",
          description: "من الإعداد إلى التشغيل الكامل في أسابيع، وليس أشهر"
        },
        intelligence: {
          title: "الذكاء المدمج",
          description: "الذكاء الاصطناعي والأتمتة مدمجان في كل جانب من جوانب النظام"
        },
        adoption: {
          title: "سهولة الاعتماد",
          description: "واجهات بديهية تجعل التدريب والاعتماد أمراً سهلاً"
        },
        growth: {
          title: "النمو المستدام",
          description: "حلول قابلة للتطوير تنمو مع عملك وتتطور مع احتياجاتك"
        }
      },
      vision: {
        title: "رؤيتنا",
        description: "نتصور عالماً حيث كل شركة، من الشركات الناشئة إلى المؤسسات، لديها الوصول إلى أدوات تخطيط موارد المؤسسات ذات المستوى العالمي التي تمكنها من التركيز على ما تفعله بشكل أفضل - خدمة عملائها وتنمية أعمالها.",
        points: {
          democratize: "إضفاء الطابع الديمقراطي على الوصول إلى تكنولوجيا المؤسسات",
          eliminate: "القضاء على حواجز التعقيد والتكلفة",
          enable: "تمكين كل شركة من تحقيق إمكاناتها الكاملة"
        }
      },
      mission: {
        title: "مهمتنا",
        description: "مهمتنا بسيطة: تقديم أقوى وأسهل حل لتخطيط موارد المؤسسات في العالم. نحن ملتزمون بالابتكار المستمر، والتميز في الخدمة، ونجاح عملائنا.",
        metrics: {
          title: "التزامنا بالتميز:",
          days: "30",
          daysDesc: "أيام للتنفيذ",
          process: "99%",
          processDesc: "أتمتة العمليات",
          user: "24/7",
          userDesc: "دعم المستخدمين"
        }
      },
      regional: {
        title: "خبرة إقليمية، معايير عالمية",
        description: "كشركة مقرها في منطقة الشرق الأوسط وشمال أفريقيا، نحن نفهم التحديات والفرص الفريدة للشركات في منطقتنا. حلولنا مصممة مع مراعاة الاعتبارات الثقافية واللغوية والتنظيمية المحلية.",
        understanding: {
          title: "فهم محلي",
          description: "فهم عميق لممارسات الأعمال الإقليمية والمتطلبات التنظيمية"
        },
        bilingual: {
          title: "دعم ثنائي اللغة",
          description: "واجهات أصلية باللغتين العربية والإنجليزية مع دعم RTL كامل"
        },
        standards: {
          title: "معايير عالمية",
          description: "تقنية وأمان وموثوقية على مستوى عالمي"
        }
      }
    },

    // Value Section
    value: {
      title: "360° VALUE",
      subtitle: "نحن لا نبني مجرد برنامج",
      subtitleHighlight: "نحن نبني مستقبل عملك",
      cta: "ابدأ رحلتك"
    },

    // Services Section
    services: {
      badge: "خدماتنا",
      title: "حلول شاملة لكل احتياج",
      description: "من التنفيذ إلى الدعم المستمر، نقدم مجموعة كاملة من الخدمات لضمان نجاحك",
      tabs: {
        services: "الخدمات",
        solutions: "الحلول",
        value: "القيمة المضافة"
      },
      erp: {
        title: "تنفيذ تخطيط موارد المؤسسات",
        description: "تنفيذ شامل مع التخصيص والتكامل والتدريب",
        features: {
          architecture: "تصميم البنية",
          development: "التطوير المخصص",
          migration: "ترحيل البيانات",
          training: "تدريب المستخدمين"
        }
      },
      industry: {
        title: "حلول خاصة بالقطاع",
        description: "حلول مخصصة للقطاعات المختلفة مع أفضل الممارسات",
        features: {
          healthcare: "الرعاية الصحية",
          education: "التعليم",
          fitness: "اللياقة البدنية",
          logistics: "اللوجستيات"
        }
      },
      ai: {
        title: "تكامل الذكاء الاصطناعي",
        description: "حلول ذكية مدعومة بالذكاء الاصطناعي للأتمتة والتحليلات",
        features: {
          forecasting: "التنبؤ الذكي",
          chatbots: "روبوتات المحادثة",
          ocr: "معالجة المستندات",
          automation: "أتمتة سير العمل"
        }
      },
      ux: {
        title: "تصميم تجربة المستخدم",
        description: "واجهات بديهية مصممة للمستخدمين في منطقة الشرق الأوسط وشمال أفريقيا",
        features: {
          rtl: "دعم RTL أصلي",
          localization: "التوطين الثقافي",
          accessibility: "إمكانية الوصول",
          mobile: "تصميم متجاوب"
        }
      },
      migration: {
        title: "ترحيل البيانات",
        description: "ترحيل آمن وسلس من الأنظمة القديمة",
        features: {
          mapping: "تخطيط البيانات",
          api: "تكامل API",
          sync: "المزامنة في الوقت الفعلي",
          backup: "النسخ الاحتياطي"
        }
      },
      support: {
        title: "الدعم والصيانة",
        description: "دعم مستمر وتحديثات وتحسينات للأداء",
        features: {
          updates: "التحديثات التلقائية",
          tuning: "تحسين الأداء",
          development: "التطوير المستمر",
          monitoring: "المراقبة 24/7"
        }
      }
    },

    // Solutions
    solutions: {
      accounting: {
        title: "المحاسبة والمالية",
        description: "إدارة مالية شاملة مع تقارير في الوقت الفعلي",
        features: {
          ledger: "دفتر الأستاذ العام",
          invoicing: "الفوترة الآلية",
          reporting: "التقارير المالية",
          compliance: "الامتثال التنظيمي"
        }
      },
      hr: {
        title: "الموارد البشرية",
        description: "إدارة شاملة للموظفين من التوظيف إلى التقاعد",
        features: {
          records: "سجلات الموظفين",
          attendance: "إدارة الحضور",
          payroll: "كشوف المرتبات",
          calendar: "تقويم الإجازات"
        }
      },
      sales: {
        title: "المبيعات وإدارة العملاء",
        description: "إدارة شاملة لدورة المبيعات وعلاقات العملاء",
        features: {
          leads: "إدارة العملاء المحتملين",
          quotes: "عروض الأسعار",
          orders: "معالجة الطلبات",
          portal: "بوابة العملاء"
        }
      },
      inventory: {
        title: "إدارة المخزون",
        description: "تتبع وإدارة المخزون في الوقت الفعلي",
        features: {
          stock: "تتبع المخزون",
          warehousing: "إدارة المستودعات",
          pricing: "استراتيجيات التسعير",
          labeling: "وضع العلامات الآلي"
        }
      },
      manufacturing: {
        title: "التصنيع",
        description: "تخطيط ومراقبة الإنتاج المتقدم",
        features: {
          bom: "قائمة المواد",
          orders: "أوامر الإنتاج",
          planning: "تخطيط الموارد",
          quality: "مراقبة الجودة"
        }
      },
      assets: {
        title: "إدارة الأصول",
        description: "تتبع وصيانة الأصول الثابتة",
        features: {
          depreciation: "حساب الاستهلاك",
          maintenance: "الصيانة المجدولة",
          qr: "تتبع رمز QR",
          alerts: "تنبيهات الصيانة"
        }
      }
    },

    // Value propositions
    value: {
      ai: {
        title: "الذكاء الاصطناعي المدمج",
        description: "ذكاء اصطناعي مدمج في كل جانب من جوانب النظام",
        features: {
          forecasting: "التنبؤ التلقائي",
          automation: "أتمتة القرارات",
          workflows: "سير عمل ذكي",
          analytics: "تحليلات متقدمة"
        }
      },
      speed: {
        title: "سرعة لا مثيل لها",
        description: "من الإعداد إلى التشغيل الكامل في وقت قياسي",
        features: {
          deployment: "نشر سريع",
          roi: "عائد استثمار فوري",
          benefits: "فوائد فورية",
          methodology: "منهجية مثبتة"
        }
      },
      cultural: {
        title: "التوافق الثقافي",
        description: "مصمم خصيصاً للشركات في منطقة الشرق الأوسط وشمال أفريقيا",
        features: {
          bilingual: "دعم ثنائي اللغة",
          rtl: "واجهات RTL أصلية",
          compliance: "الامتثال المحلي",
          alignment: "توافق ثقافي"
        }
      },
      adoption: {
        title: "اعتماد سهل",
        description: "واجهات بديهية تضمن اعتماداً سريعاً",
        features: {
          design: "تصميم بديهي",
          training: "تدريب مبسط",
          interface: "واجهة سهلة الاستخدام",
          support: "دعم مستمر"
        }
      }
    },

    // Implementation Section
    implementation: {
      badge: "التنفيذ",
      title: "منهجية مثبتة",
      titleHighlight: "نتائج مضمونة",
      description: "نهجنا المنظم يضمن تنفيذاً ناجحاً وسلساً مع الحد الأدنى من التعطيل لعملياتك",
      phase1: {
        title: "التقييم والتخطيط",
        duration: "1-2 أسابيع",
        description: "تحليل شامل لعملياتك الحالية ومتطلباتك",
        activities: {
          mapping: "تخطيط العمليات",
          analysis: "تحليل الفجوات",
          audit: "مراجعة النظام",
          gathering: "جمع المتطلبات"
        },
        deliverables: {
          assessment: "تقرير التقييم",
          gap: "تحليل الفجوات",
          requirements: "وثيقة المتطلبات",
          roadmap: "خارطة طريق التنفيذ"
        }
      },
      phase2: {
        title: "التصميم والتكوين",
        duration: "2-3 أسابيع",
        description: "تصميم النظام وتكوينه وفقاً لمتطلباتك المحددة",
        activities: {
          workflow: "تصميم سير العمل",
          ai: "تكوين الذكاء الاصطناعي",
          bilingual: "إعداد ثنائي اللغة",
          security: "تكوين الأمان"
        },
        deliverables: {
          blueprint: "مخطط النظام",
          specifications: "مواصفات التكوين",
          mockups: "نماذج أولية",
          integration: "خطة التكامل"
        }
      },
      phase3: {
        title: "التطوير والاختبار",
        duration: "3-4 أسابيع",
        description: "تطوير التخصيصات واختبار النظام بشكل شامل",
        activities: {
          development: "التطوير المخصص",
          demos: "عروض توضيحية",
          migration: "ترحيل البيانات",
          testing: "اختبار شامل"
        },
        deliverables: {
          system: "نظام جاهز للإنتاج",
          data: "بيانات مرحلة",
          results: "نتائج الاختبار",
          documentation: "وثائق المستخدم"
        }
      },
      phase4: {
        title: "النشر والتدريب",
        duration: "1-2 أسابيع",
        description: "نشر النظام وتدريب فريقك على الاستخدام الأمثل",
        activities: {
          training: "تدريب المستخدمين",
          support: "دعم الانتقال",
          monitoring: "مراقبة الأداء",
          resolution: "حل المشاكل"
        },
        deliverables: {
          users: "مستخدمون مدربون",
          live: "نظام مباشر",
          support: "خطة الدعم",
          performance: "تقارير الأداء"
        }
      },
      phase5: {
        title: "التحسين والنمو",
        duration: "مستمر",
        description: "تحسين مستمر ودعم للنمو المستقبلي",
        activities: {
          reviews: "مراجعات دورية",
          retuning: "إعادة ضبط",
          upgrades: "ترقيات النظام",
          optimization: "تحسين الأداء"
        },
        deliverables: {
          reports: "تقارير الأداء",
          features: "ميزات جديدة",
          enhanced: "نظام محسن",
          growth: "خطة النمو"
        }
      },
      provenResults: "نتائج مثبتة",
      provenDescription: "منهجيتنا المثبتة تحقق نتائج استثنائية لعملائنا",
      proof: {
        faster: "تنفيذ أسرع",
        fasterDesc: "من متوسط الصناعة",
        zero: "صفر",
        zeroDesc: "وقت توقف",
        zeroDetail: "أثناء التنفيذ",
        adoption: "معدل اعتماد",
        adoptionDesc: "في الشهر الأول"
      }
    },

    // Testimonials Section
    testimonials: {
      badge: "قصص النجاح",
      title: "عملاؤنا",
      titleHighlight: "يحققون نتائج استثنائية",
      description: "اكتشف كيف تحول الشركات عملياتها وتحقق نمواً مستداماً مع MovinWare",
      caseStudyNavigation: "التنقل في دراسات الحالة",
      labels: {
        challenge: "التحدي",
        solution: "الحل",
        results: "النتائج",
        implementation: "التنفيذ",
        efficiency: "الكفاءة",
        adoption: "الاعتماد"
      },
      case1: {
        client: "مجموعة التجارة الذكية",
        industry: "التجارة الإلكترونية",
        challenge: "كانت الشركة تواجه تحديات في إدارة المخزون عبر قنوات متعددة مع عدم وجود رؤية موحدة للعمليات.",
        solution: "نفذنا حل تخطيط موارد المؤسسات المتكامل مع تكامل التجارة الإلكترونية وإدارة المخزون في الوقت الفعلي.",
        results: {
          timeline: "تنفيذ في 6 أسابيع",
          efficiency: "تحسن الكفاءة بنسبة 40%",
          visibility: "رؤية كاملة للمخزون",
          processes: "عمليات آلية بالكامل"
        },
        quote: "MovinWare حول عملياتنا تماماً. الآن لدينا رؤية كاملة لأعمالنا ويمكننا اتخاذ قرارات مدروسة بسرعة.",
        author: "أحمد المنصوري",
        position: "المدير التنفيذي",
        metrics: {
          implementation: "6 أسابيع",
          efficiency: "40%+",
          adoption: "95%"
        }
      },
      case2: {
        client: "أكاديمية المستقبل",
        industry: "التعليم",
        challenge: "إدارة معقدة للطلاب والرسوم مع الحاجة لدعم ثنائي اللغة وبوابة أولياء الأمور.",
        solution: "حل تعليمي شامل مع إدارة الطلاب وبوابة أولياء الأمور ونظام فوترة آلي.",
        results: {
          cultural: "دعم ثقافي كامل",
          communication: "تحسن التواصل مع الأهالي",
          exams: "إدارة آلية للامتحانات",
          management: "إدارة مبسطة للرسوم"
        },
        quote: "الدعم ثنائي اللغة والفهم الثقافي جعل MovinWare الخيار المثالي لمؤسستنا التعليمية.",
        author: "د. فاطمة الزهراء",
        position: "مديرة الأكاديمية",
        metrics: {
          implementation: "4 أسابيع",
          efficiency: "60%+",
          adoption: "98%"
        }
      },
      case3: {
        client: "شركة اللوجستيات المتقدمة",
        industry: "اللوجستيات",
        challenge: "تتبع معقد للشحنات وإدارة الأسطول مع الحاجة لتحسين المسارات وخفض التكاليف.",
        solution: "نظام لوجستيات متكامل مع تتبع GPS وتحسين المسارات وإدارة شاملة للأسطول.",
        results: {
          reduction: "خفض التكاليف بنسبة 25%",
          delivery: "تحسن أوقات التسليم",
          maintenance: "صيانة وقائية",
          tracking: "تتبع في الوقت الفعلي"
        },
        quote: "تحسين المسارات والتتبع في الوقت الفعلي وفر لنا آلاف الدولارات شهرياً وحسن خدمة العملاء بشكل كبير.",
        author: "خالد العتيبي",
        position: "مدير العمليات",
        metrics: {
          implementation: "8 أسابيع",
          efficiency: "35%+",
          adoption: "92%"
        }
      }
    },

    // Contact Section
    contact: {
      badge: "تواصل معنا",
      title: "هل أنت مستعد",
      titleHighlight: "لتحويل عملك؟",
      description: "تواصل مع خبرائنا اليوم واكتشف كيف يمكن لـ MovinWare تحويل عملياتك وتسريع نموك",
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        company: "الشركة",
        companyPlaceholder: "أدخل اسم شركتك",
        phone: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        inquiryType: "نوع الاستفسار",
        inquiryPlaceholder: "اختر نوع الاستفسار",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا كيف يمكننا مساعدتك",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        validation: {
          nameRequired: "الاسم مطلوب",
          emailRequired: "البريد الإلكتروني مطلوب",
          emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
          inquiryRequired: "نوع الاستفسار مطلوب",
          messageRequired: "الرسالة مطلوبة"
        },
        successMessage: "شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
        errorMessage: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
      },
      info: {
        title: "معلومات الاتصال",
        description: "تواصل معنا مباشرة أو احجز استشارة مجانية مع خبرائنا",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع"
      },
      quickActions: "إجراءات سريعة",
      talkToExpert: "تحدث مع خبير",
      scheduleConsultation: "احجز استشارة",
      whatsappSupport: "دعم واتساب",
      whatsappDescription: "تواصل معنا فوراً عبر واتساب للحصول على دعم سريع",
      chatWhatsapp: "دردشة واتساب"
    },

    // Footer
    footer: {
      tagline: "العمليات الذكية.\nالتحول السلس.",
      links: {
        solutions: "الحلول",
        services: "الخدمات",
        industries: "القطاعات",
        about: "من نحن",
        contact: "اتصل بنا",
        careers: "الوظائف",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        cookies: "سياسة ملفات تعريف الارتباط",
        support: "الدعم",
        documentation: "الوثائق",
        partner: "كن شريكاً"
      },
      copyright: "© 2024 MovinWare. جميع الحقوق محفوظة."
    }
  },

  en: {
    // Navigation
    nav: {
      skipToMain: "Skip to main content",
      mainNavigation: "Main navigation",
      homeLink: "Home link",
      changeLanguage: "Change language",
      languageMenu: "Language menu",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      scrollToTop: "Scroll to top",
      platform: "Platform",
      industries: "Industries",
      whyMovinware: "Why MovinWare",
      pricing: "Pricing",
      resources: "Resources",
      getDemo: "Get Demo"
    },

    // Platform dropdown
    platform: {
      coreModules: "Core Modules",
      aiFeatures: "AI Features",
      integration: "Integration Capabilities",
      mobileCloud: "Mobile & Cloud Access"
    },

    // Industries
    industries: {
      education: "Education",
      retail: "Retail",
      manufacturing: "Manufacturing",
      logistics: "Logistics",
      viewAll: "View All Industries",
      badge: "Industries",
      title: "Tailored Solutions for Every Sector",
      description: "We deliver specialized ERP solutions designed specifically to meet the unique needs of your industry",
      clientSize: {
        title: "Solutions for Every Company Size",
        description: "From startups to enterprises, we have the right solution for you"
      },
      education: {
        title: "Education",
        description: "Comprehensive solutions for managing educational institutions from schools to universities",
        features: {
          student: "Student Management",
          academic: "Academic Planning",
          parent: "Parent Portal",
          fee: "Fee Management"
        },
        clients: {
          schools: "Schools",
          universities: "Universities",
          training: "Training Centers",
          online: "Online Learning"
        }
      },
      logistics: {
        title: "Logistics",
        description: "Optimize shipping and distribution operations with comprehensive fleet tracking",
        features: {
          fleet: "Fleet Management",
          route: "Route Optimization",
          inventory: "Inventory Tracking",
          customs: "Customs Management"
        },
        clients: {
          shipping: "Shipping Companies",
          3pl: "3PL Providers",
          distribution: "Distribution Centers",
          freight: "Freight Companies"
        }
      },
      retail: {
        title: "Retail",
        description: "Integrated solutions for e-commerce and traditional retail with comprehensive inventory management",
        features: {
          pos: "Point of Sale",
          sync: "Inventory Sync",
          loyalty: "Loyalty Programs",
          multichannel: "Multi-channel Sales"
        },
        clients: {
          chains: "Retail Chains",
          online: "Online Stores",
          fashion: "Fashion",
          electronics: "Electronics"
        }
      },
      manufacturing: {
        title: "Manufacturing",
        description: "Optimize production processes with advanced resource planning and quality management",
        features: {
          planning: "Production Planning",
          quality: "Quality Control",
          supply: "Supply Chain Management",
          maintenance: "Preventive Maintenance"
        },
        clients: {
          manufacturers: "Manufacturers",
          assembly: "Assembly Lines",
          food: "Food Processing",
          textile: "Textile"
        }
      },
      startups: {
        title: "Startups",
        description: "Flexible and scalable solutions for fast-growing companies",
        benefits: {
          implementation: "Quick Implementation",
          scalable: "Scalable",
          cost: "Cost-Effective",
          growth: "Supports Rapid Growth"
        }
      },
      smes: {
        title: "Small & Medium Enterprises",
        description: "Comprehensive solutions designed for growing businesses",
        benefits: {
          featured: "Feature-Rich",
          customization: "Customizable",
          integration: "Easy Integration",
          support: "Dedicated Support"
        }
      },
      enterprises: {
        title: "Large Enterprises",
        description: "Advanced solutions for large and complex organizations",
        benefits: {
          analytics: "Advanced Analytics",
          multi: "Multi-Location",
          compliance: "Regulatory Compliance",
          support247: "24/7 Support"
        }
      }
    },

    // Why MovinWare dropdown
    whyMovinware: {
      story: "Our Story & Mission",
      methodology: "Our Methodology",
      success: "Success Stories",
      expertise: "Regional Expertise"
    },

    // Pricing dropdown
    pricing: {
      startup: "Startup Package",
      sme: "SME Package",
      enterprise: "Enterprise Package",
      custom: "Custom Solutions"
    },

    // Resources dropdown
    resources: {
      documentation: "Documentation",
      tutorials: "Tutorials",
      caseStudies: "Case Studies",
      blog: "Blog",
      support: "Support Center"
    },

    // Hero Section
    hero: {
      title: "Smart Operations",
      subtitle: "Seamless Transformation",
      description: "AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare's intelligent solutions.",
      metrics: {
        implementation: "Faster Implementation",
        adoption: "Adoption Rate",
        support: "Support"
      }
    },

    // About Section
    about: {
      badge: "About Us",
      title: "We believe that",
      titleHighlight: "technology should work for you",
      description1: "MovinWare was founded on a simple vision: make advanced ERP systems accessible to every business, regardless of size or complexity. We've seen too many companies struggle with complex, expensive solutions that take months to implement and years to master.",
      description2: "That's why we built MovinWare - an ERP system that understands your business, adapts to your needs, and grows with you. With a focus on simplicity, intelligence, and speed, we empower businesses to transform digitally without the complexity.",
      principles: {
        speed: {
          title: "Speed to Value",
          description: "From setup to full operation in weeks, not months"
        },
        intelligence: {
          title: "Built-in Intelligence",
          description: "AI and automation embedded in every aspect of the system"
        },
        adoption: {
          title: "Easy Adoption",
          description: "Intuitive interfaces that make training and adoption effortless"
        },
        growth: {
          title: "Sustainable Growth",
          description: "Scalable solutions that grow with your business and evolve with your needs"
        }
      },
      vision: {
        title: "Our Vision",
        description: "We envision a world where every business, from startups to enterprises, has access to world-class ERP tools that enable them to focus on what they do best - serving their customers and growing their business.",
        points: {
          democratize: "Democratize access to enterprise technology",
          eliminate: "Eliminate barriers of complexity and cost",
          enable: "Enable every business to reach its full potential"
        }
      },
      mission: {
        title: "Our Mission",
        description: "Our mission is simple: deliver the world's most powerful yet easiest ERP solution. We're committed to continuous innovation, service excellence, and our customers' success.",
        metrics: {
          title: "Our commitment to excellence:",
          days: "30",
          daysDesc: "Days to Implementation",
          process: "99%",
          processDesc: "Process Automation",
          user: "24/7",
          userDesc: "User Support"
        }
      },
      regional: {
        title: "Regional Expertise, Global Standards",
        description: "As a MENA-based company, we understand the unique challenges and opportunities facing businesses in our region. Our solutions are built with local cultural, linguistic, and regulatory considerations in mind.",
        understanding: {
          title: "Local Understanding",
          description: "Deep understanding of regional business practices and regulatory requirements"
        },
        bilingual: {
          title: "Bilingual Support",
          description: "Native Arabic and English interfaces with full RTL support"
        },
        standards: {
          title: "Global Standards",
          description: "World-class technology, security, and reliability"
        }
      }
    },

    // Value Section
    value: {
      title: "360° VALUE",
      subtitle: "We don't just build software",
      subtitleHighlight: "We build your business future",
      cta: "Start Your Journey"
    },

    // Services Section
    services: {
      badge: "Our Services",
      title: "Comprehensive Solutions for Every Need",
      description: "From implementation to ongoing support, we provide a complete range of services to ensure your success",
      tabs: {
        services: "Services",
        solutions: "Solutions",
        value: "Value Add"
      },
      erp: {
        title: "ERP Implementation",
        description: "Comprehensive implementation with customization, integration, and training",
        features: {
          architecture: "Architecture Design",
          development: "Custom Development",
          migration: "Data Migration",
          training: "User Training"
        }
      },
      industry: {
        title: "Industry-Specific Solutions",
        description: "Tailored solutions for different industries with best practices",
        features: {
          healthcare: "Healthcare",
          education: "Education",
          fitness: "Fitness",
          logistics: "Logistics"
        }
      },
      ai: {
        title: "AI Integration",
        description: "Intelligent AI-powered solutions for automation and analytics",
        features: {
          forecasting: "Smart Forecasting",
          chatbots: "Chatbots",
          ocr: "Document Processing",
          automation: "Workflow Automation"
        }
      },
      ux: {
        title: "UX Design",
        description: "Intuitive interfaces designed for MENA users",
        features: {
          rtl: "Native RTL Support",
          localization: "Cultural Localization",
          accessibility: "Accessibility",
          mobile: "Responsive Design"
        }
      },
      migration: {
        title: "Data Migration",
        description: "Safe and seamless migration from legacy systems",
        features: {
          mapping: "Data Mapping",
          api: "API Integration",
          sync: "Real-time Sync",
          backup: "Backup & Recovery"
        }
      },
      support: {
        title: "Support & Maintenance",
        description: "Ongoing support, updates, and performance optimization",
        features: {
          updates: "Automatic Updates",
          tuning: "Performance Tuning",
          development: "Continuous Development",
          monitoring: "24/7 Monitoring"
        }
      }
    },

    // Solutions
    solutions: {
      accounting: {
        title: "Accounting & Finance",
        description: "Comprehensive financial management with real-time reporting",
        features: {
          ledger: "General Ledger",
          invoicing: "Automated Invoicing",
          reporting: "Financial Reporting",
          compliance: "Regulatory Compliance"
        }
      },
      hr: {
        title: "Human Resources",
        description: "Complete employee management from hire to retire",
        features: {
          records: "Employee Records",
          attendance: "Attendance Management",
          payroll: "Payroll Processing",
          calendar: "Leave Calendar"
        }
      },
      sales: {
        title: "Sales & CRM",
        description: "Complete sales cycle and customer relationship management",
        features: {
          leads: "Lead Management",
          quotes: "Quote Generation",
          orders: "Order Processing",
          portal: "Customer Portal"
        }
      },
      inventory: {
        title: "Inventory Management",
        description: "Real-time inventory tracking and management",
        features: {
          stock: "Stock Tracking",
          warehousing: "Warehouse Management",
          pricing: "Pricing Strategies",
          labeling: "Automated Labeling"
        }
      },
      manufacturing: {
        title: "Manufacturing",
        description: "Advanced production planning and control",
        features: {
          bom: "Bill of Materials",
          orders: "Production Orders",
          planning: "Resource Planning",
          quality: "Quality Control"
        }
      },
      assets: {
        title: "Asset Management",
        description: "Fixed asset tracking and maintenance",
        features: {
          depreciation: "Depreciation Calculation",
          maintenance: "Scheduled Maintenance",
          qr: "QR Code Tracking",
          alerts: "Maintenance Alerts"
        }
      }
    },

    // Value propositions
    value: {
      ai: {
        title: "Built-in AI",
        description: "Artificial intelligence embedded in every aspect of the system",
        features: {
          forecasting: "Automatic Forecasting",
          automation: "Decision Automation",
          workflows: "Smart Workflows",
          analytics: "Advanced Analytics"
        }
      },
      speed: {
        title: "Unmatched Speed",
        description: "From setup to full operation in record time",
        features: {
          deployment: "Rapid Deployment",
          roi: "Immediate ROI",
          benefits: "Instant Benefits",
          methodology: "Proven Methodology"
        }
      },
      cultural: {
        title: "Cultural Fit",
        description: "Designed specifically for MENA businesses",
        features: {
          bilingual: "Bilingual Support",
          rtl: "Native RTL Interfaces",
          compliance: "Local Compliance",
          alignment: "Cultural Alignment"
        }
      },
      adoption: {
        title: "Easy Adoption",
        description: "Intuitive interfaces ensure rapid adoption",
        features: {
          design: "Intuitive Design",
          training: "Simplified Training",
          interface: "User-Friendly Interface",
          support: "Ongoing Support"
        }
      }
    },

    // Implementation Section
    implementation: {
      badge: "Implementation",
      title: "Proven Methodology",
      titleHighlight: "Guaranteed Results",
      description: "Our structured approach ensures successful and smooth implementation with minimal disruption to your operations",
      phase1: {
        title: "Assessment & Planning",
        duration: "1-2 weeks",
        description: "Comprehensive analysis of your current processes and requirements",
        activities: {
          mapping: "Process Mapping",
          analysis: "Gap Analysis",
          audit: "System Audit",
          gathering: "Requirements Gathering"
        },
        deliverables: {
          assessment: "Assessment Report",
          gap: "Gap Analysis",
          requirements: "Requirements Document",
          roadmap: "Implementation Roadmap"
        }
      },
      phase2: {
        title: "Design & Configuration",
        duration: "2-3 weeks",
        description: "System design and configuration according to your specific requirements",
        activities: {
          workflow: "Workflow Design",
          ai: "AI Configuration",
          bilingual: "Bilingual Setup",
          security: "Security Configuration"
        },
        deliverables: {
          blueprint: "System Blueprint",
          specifications: "Configuration Specs",
          mockups: "UI Mockups",
          integration: "Integration Plan"
        }
      },
      phase3: {
        title: "Development & Testing",
        duration: "3-4 weeks",
        description: "Custom development and comprehensive system testing",
        activities: {
          development: "Custom Development",
          demos: "Demo Sessions",
          migration: "Data Migration",
          testing: "Comprehensive Testing"
        },
        deliverables: {
          system: "Production-Ready System",
          data: "Migrated Data",
          results: "Test Results",
          documentation: "User Documentation"
        }
      },
      phase4: {
        title: "Deployment & Training",
        duration: "1-2 weeks",
        description: "System deployment and training your team for optimal usage",
        activities: {
          training: "User Training",
          support: "Go-Live Support",
          monitoring: "Performance Monitoring",
          resolution: "Issue Resolution"
        },
        deliverables: {
          users: "Trained Users",
          live: "Live System",
          support: "Support Plan",
          performance: "Performance Reports"
        }
      },
      phase5: {
        title: "Optimization & Growth",
        duration: "Ongoing",
        description: "Continuous improvement and support for future growth",
        activities: {
          reviews: "Regular Reviews",
          retuning: "System Retuning",
          upgrades: "System Upgrades",
          optimization: "Performance Optimization"
        },
        deliverables: {
          reports: "Performance Reports",
          features: "New Features",
          enhanced: "Enhanced System",
          growth: "Growth Plan"
        }
      },
      provenResults: "Proven Results",
      provenDescription: "Our proven methodology delivers exceptional results for our clients",
      proof: {
        faster: "Faster Implementation",
        fasterDesc: "Than industry average",
        zero: "Zero",
        zeroDesc: "Downtime",
        zeroDetail: "During implementation",
        adoption: "Adoption Rate",
        adoptionDesc: "Within first month"
      }
    },

    // Testimonials Section
    testimonials: {
      badge: "Success Stories",
      title: "Our Clients",
      titleHighlight: "Achieve Exceptional Results",
      description: "Discover how businesses transform their operations and achieve sustainable growth with MovinWare",
      caseStudyNavigation: "Case study navigation",
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        results: "Results",
        implementation: "Implementation",
        efficiency: "Efficiency",
        adoption: "Adoption"
      },
      case1: {
        client: "Smart Commerce Group",
        industry: "E-commerce",
        challenge: "The company faced challenges managing inventory across multiple channels with no unified view of operations.",
        solution: "We implemented an integrated ERP solution with e-commerce integration and real-time inventory management.",
        results: {
          timeline: "Implemented in 6 weeks",
          efficiency: "40% efficiency improvement",
          visibility: "Complete inventory visibility",
          processes: "Fully automated processes"
        },
        quote: "MovinWare completely transformed our operations. We now have complete visibility into our business and can make informed decisions quickly.",
        author: "Ahmed Al-Mansoori",
        position: "CEO",
        metrics: {
          implementation: "6 weeks",
          efficiency: "40%+",
          adoption: "95%"
        }
      },
      case2: {
        client: "Future Academy",
        industry: "Education",
        challenge: "Complex student and fee management with need for bilingual support and parent portal.",
        solution: "Comprehensive education solution with student management, parent portal, and automated billing system.",
        results: {
          cultural: "Full cultural support",
          communication: "Improved parent communication",
          exams: "Automated exam management",
          management: "Streamlined fee management"
        },
        quote: "The bilingual support and cultural understanding made MovinWare the perfect choice for our educational institution.",
        author: "Dr. Fatima Al-Zahra",
        position: "Academy Director",
        metrics: {
          implementation: "4 weeks",
          efficiency: "60%+",
          adoption: "98%"
        }
      },
      case3: {
        client: "Advanced Logistics Co.",
        industry: "Logistics",
        challenge: "Complex shipment tracking and fleet management with need for route optimization and cost reduction.",
        solution: "Integrated logistics system with GPS tracking, route optimization, and comprehensive fleet management.",
        results: {
          reduction: "25% cost reduction",
          delivery: "Improved delivery times",
          maintenance: "Preventive maintenance",
          tracking: "Real-time tracking"
        },
        quote: "The route optimization and real-time tracking saved us thousands of dollars monthly and significantly improved customer service.",
        author: "Khalid Al-Otaibi",
        position: "Operations Manager",
        metrics: {
          implementation: "8 weeks",
          efficiency: "35%+",
          adoption: "92%"
        }
      }
    },

    // Contact Section
    contact: {
      badge: "Contact Us",
      title: "Ready to",
      titleHighlight: "Transform Your Business?",
      description: "Connect with our experts today and discover how MovinWare can transform your operations and accelerate your growth",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your email address",
        company: "Company",
        companyPlaceholder: "Enter your company name",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        inquiryType: "Inquiry Type",
        inquiryPlaceholder: "Select inquiry type",
        message: "Message",
        messagePlaceholder: "Tell us how we can help you",
        submit: "Send Message",
        submitting: "Sending...",
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email address",
          inquiryRequired: "Inquiry type is required",
          messageRequired: "Message is required"
        },
        successMessage: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        errorMessage: "There was an error sending your message. Please try again."
      },
      info: {
        title: "Contact Information",
        description: "Reach out to us directly or schedule a free consultation with our experts",
        email: "Email",
        phone: "Phone",
        location: "Location"
      },
      quickActions: "Quick Actions",
      talkToExpert: "Talk to Expert",
      scheduleConsultation: "Schedule Consultation",
      whatsappSupport: "WhatsApp Support",
      whatsappDescription: "Connect with us instantly on WhatsApp for quick support",
      chatWhatsapp: "Chat on WhatsApp"
    },

    // Footer
    footer: {
      tagline: "Smart Operations.\nSeamless Transformation.",
      links: {
        solutions: "Solutions",
        services: "Services",
        industries: "Industries",
        about: "About",
        contact: "Contact",
        careers: "Careers",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        cookies: "Cookie Policy",
        support: "Support",
        documentation: "Documentation",
        partner: "Become a Partner"
      },
      copyright: "© 2024 MovinWare. All rights reserved."
    }
  }
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to English if key not found in current locale
      if (locale !== 'en') {
        return getTranslation('en', key)
      }
      return key // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
}