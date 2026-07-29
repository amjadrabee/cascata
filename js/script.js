const A = "assets/";
const WA_NUMBER = "971555309240";
const WA_DISPLAY = "+971 55 530 9240";
const EMAIL = "Operation@cascata.ae";

const dict = {
  "nav.core": { en: "Our Core", ar: "جوهرنا" },
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.why": { en: "Why Choose Us", ar: "لماذا CASCATA" },
  "nav.portfolio": { en: "Portfolio", ar: "أعمالنا" },
  "nav.systems": { en: "Specialized Systems", ar: "أنظمتنا المتخصصة" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.alliances": { en: "Strategic Alliances", ar: "تحالفاتنا" },
  "nav.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "cta.start": { en: "Start Your Journey", ar: "ابدأ رحلتك" },
  "cta.startFull": { en: "Start Your Journey with CASCATA", ar: "ابدأ رحلتك مع CASCATA" },
  "cta.explore": { en: "Explore Our Services", ar: "استكشف خدماتنا" },
  "cta.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "cta.askService": { en: "Ask About This Service", ar: "اسأل عن هذه الخدمة" },
  "hero.slogan": { en: "Protection Builds Trust", ar: "الحماية تبني الثقة" },
  "hero.tagline": { en: "​", ar: "​" },
  "hero.title": {
    en: "Engineering Excellence in Structural Protection",
    ar: "التميز الهندسي في حماية المنشآت",
  },
  "hero.sub": {
    en: " Long-lasting engineering solutions for waterproofing, insulation, and structural durability.",
    ar: "حلول معتمدة في العزل المائي والحراري، ترميم الخرسانة، وحماية المنشآت للمشاريع السكنية والتجارية والصناعية في دولة الإمارات.",
  },
  "hero.badge1": { en: "Certified Systems", ar: "أنظمة معتمدة" },
  "hero.badge2": { en: "Engineer-Supervised Execution", ar: "تنفيذ بإشراف هندسي" },
  "hero.badge3": { en: "Long-Term Warranties", ar: "ضمانات طويلة الأمد" },
  "hero.badge4": { en: "UAE-Based Operations", ar: "عمليات داخل دولة الإمارات" },
  "about.title": { en: "About CASCATA", ar: "من نحن" },
  "about.eyebrow": { en: "Who We Are", ar: "من نحن" },
  "about.p1": {
    en: "CASCATA provides integrated engineering solutions specialized in protecting structures from water infiltration, moisture damage, and environmental deterioration.",
    ar: "تقدم CASCATA حلولًا هندسية متكاملة ومتخصصة في حماية المنشآت من تسربات المياه، والرطوبة، والعوامل البيئية المختلفة.",
  },
  "about.p2": {
    en: "By combining advanced technologies, certified materials, and precision-driven execution, CASCATA delivers long-lasting durability for residential, commercial, and industrial projects.",
    ar: "نعتمد على أحدث التقنيات والمواد المعتمدة عالميًا، إلى جانب منهجية تنفيذ دقيقة، لضمان أعلى مستويات المتانة والاستدامة للمشروعات السكنية والتجارية والصناعية.",
  },
  "about.p3": {
    en: "Our approach is built on engineering excellence, operational efficiency, and uncompromising quality standards, ensuring seamless project delivery from assessment and system design to installation, maintenance, and repairs.",
    ar: "يقوم نهجنا على التميز الهندسي، والكفاءة التشغيلية، والالتزام الصارم بمعايير الجودة، لنضمن تنفيذًا متكاملًا يبدأ من دراسة المشروع وتصميم النظام المناسب، وصولًا إلى التنفيذ والصيانة والإصلاحات.",
  },
  "mv.eyebrow": { en: "Direction & Purpose", ar: "الرسالة والرؤية" },
  "vision.title": { en: "Our Vision", ar: "رؤيتنا" },
  "vision.body": {
    en: "To be the gold standard for quality and safety in structural protection across the region.",
    ar: "أن نكون المعيار الذهبي للجودة والسلامة في مجال حماية المنشآت على مستوى المنطقة.",
  },
  "mission.title": { en: "Our Mission", ar: "رسالتنا" },
  "mission.body": {
    en: "Securing real estate investments through professional execution, certified systems, and long-term warranties.",
    ar: "حماية استثماراتكم العقارية من خلال تنفيذ احترافي، وأنظمة معتمدة، وضمانات طويلة الأمد.",
  },
  "sys.title": { en: "Our Specialized Systems", ar: "أنظمتنا المتخصصة" },
  "sys.eyebrow": { en: "Certified Materials", ar: "مواد معتمدة" },
  "sys.desc": {
    en: "We utilize the latest industry-certified materials and technologies to ensure maximum protection and durability.",
    ar: "نعتمد على أحدث الأنظمة والمواد المعتمدة عالميًا لتحقيق أعلى درجات الحماية والمتانة.",
  },
  "sys.1": { en: "Bitumen Systems", ar: "أنظمة البيتومين" },
  "sys.2": { en: "Combo Systems", ar: "أنظمة الكومبو" },
  "sys.3": { en: "Membrane Rolls", ar: "لفائف الممبرين" },
  "sys.4": { en: "Cementitious Waterproofing", ar: "العزل الأسمنتي" },
  "sys.5": { en: "Thermal Insulation Systems", ar: "أنظمة العزل الحراري" },
  "sys.6": { en: "Epoxy Coatings", ar: "طلاءات الإيبوكسي" },
  "sys.7": { en: "Advanced Certified Protection Materials", ar: "مواد حماية متقدمة ومعتمدة" },
  "svc.title": { en: "Our Core Services", ar: "خدماتنا الأساسية" },
  "svc.eyebrow": { en: "What We Do", ar: "ماذا نقدم" },
  "svc.a.t": { en: "Sub-structure Waterproofing", ar: "عزل الأساسات والقواعد" },
  "svc.a.b": {
    en: "Protecting foundations against groundwater using advanced membranes such as Bituminous, PVC, HDPE, and pile head treatment.",
    ar: "تأمين المنشآت ضد المياه الجوفية والرطوبة باستخدام لفائف البيتومين، PVC، HDPE، ومعالجة رؤوس الخوازيق.",
  },
  "svc.b.t": { en: "Roofing & Thermal Insulation", ar: "عزل الأسطح والأنظمة الحرارية" },
  "svc.b.b": {
    en: "High-performance leak prevention and energy-saving systems, including Combo Roofing and EPDM solutions.",
    ar: "منع التسريب ورفع كفاءة الطاقة عبر أنظمة متطورة تشمل نظام الكومبو المعتمد وعزل EPDM.",
  },
  "svc.c.t": { en: "Wet Area & Balcony Waterproofing", ar: "عزل المناطق الرطبة والشرفات" },
  "svc.c.b": {
    en: "Certified protection for kitchens, bathrooms, balconies, and terraces to prevent leakage into interior spaces.",
    ar: "حماية متكاملة للمطابخ والحمامات والبالكونات لضمان عدم نفاذ المياه إلى الهيكل الإنشائي والمساحات الداخلية.",
  },
  "svc.d.t": { en: "Concrete Injection", ar: "حقن الخرسانة المتخصص" },
  "svc.d.b": {
    en: "Engineering solutions to seal structural cracks and stop heavy water ingress using high-pressure injection.",
    ar: "حلول هندسية لسد الشروخ الإنشائية ووقف التسريبات القوية باستخدام تقنيات الحقن تحت الضغط.",
  },
  "svc.e.t": { en: "Concrete Repair", ar: "ترميم وإصلاح الخرسانة" },
  "svc.e.b": {
    en: "Comprehensive restoration of damaged structures and reinforcement corrosion to ensure long-term stability.",
    ar: "معالجة تآكل الحديد والعيوب الإنشائية لإعادة تأهيل المبنى وإطالة عمره الافتراضي وضمان سلامته.",
  },
  "svc.f.t": { en: "Flooring & Tank Lining", ar: "الأرضيات وتبطين الخزانات" },
  "svc.f.b": {
    en: "Industrial epoxy flooring and certified, non-toxic lining systems for safe and durable water storage.",
    ar: "تنفيذ أرضيات الإيبوكسي شديدة التحمل، وتبطين الخزانات بمواد معتمدة وآمنة تمنع التآكل والتسريب.",
  },
  "pf.trustTitle": { en: "The Choice of Sovereign Entities & Top-Tier Developers", ar: "اختيار الجهات السيادية وكبار المطورين" },
  "pf.title": { en: "Explore Portfolio", ar: "استكشف سابقة الأعمال" },
  "pf.eyebrow": { en: "Selected Portfolio", ar: "سابقة أعمال مختارة" },
  "pf.intro": {
    en: "A selected portfolio of national landmarks, strategic infrastructure, luxury destinations, institutional facilities, and corporate developments delivered to demanding technical standards across the UAE.",
    ar: "نماذج مختارة من مشاريع ومعالم وطنية وبنية تحتية استراتيجية ووجهات فاخرة ومنشآت مؤسسية وتجارية، تم تنفيذها وفق متطلبات فنية عالية داخل دولة الإمارات.",
  },
  "pf.count": { en: "250+ Projects", ar: "أكثر من 250 مشروعًا" },
  "pf.countNote": {
    en: "And counting. These are just a selection. CASCATA has delivered 250+ projects for clients across the UAE.",
    ar: "وما زال العدد يتزايد. هذه مجرد نماذج مختارة. نفّذت CASCATA أكثر من 250 مشروعًا لعملاء في مختلف أنحاء دولة الإمارات.",
  },
  "pf.categoryAria": { en: "Portfolio categories", ar: "تصنيفات سابقة الأعمال" },
  "pf.projectsLabel": { en: "Projects & References", ar: "مشاريع ومراجع" },
  "pf.client": { en: "Client", ar: "العميل" },
  "pf.consultant": { en: "Consultant", ar: "الاستشاري" },
  "pf.contractor": { en: "Contractor", ar: "المقاول" },
  "pf.scopeNote": { en: "Featured references shown first", ar: "المراجع الأبرز معروضة أولًا" },
  "pf.referencesCount": { en: "references", ar: "مرجعًا" },
  "pf.viewAll": { en: "View all references", ar: "عرض كل المراجع" },
  "pf.showLess": { en: "Show fewer", ar: "عرض أقل" },
  "pf.hiddenProjects": { en: "Additional portfolio projects are available in this category.", ar: "توجد مشاريع إضافية ضمن هذا التصنيف." },
  "pf.cta": { en: "Discuss a Similar Project", ar: "ناقش مشروعًا مشابهًا" },
  "com.title": { en: "Our Commitment", ar: "التزامنا" },
  "com.eyebrow": { en: "Lasting Quality", ar: "جودة دائمة" },
  "com.p1": {
    en: "At CASCATA, we believe that structural protection is not just a service; it is a long-term investment in safety, durability, and trust.",
    ar: "في CASCATA، نؤمن أن حماية المنشآت ليست مجرد خدمة، بل استثمار طويل الأمد في الأمان والمتانة والثقة.",
  },
  "com.p2": {
    en: "Every project is executed with engineering precision, certified materials, and a commitment to excellence that ensures lasting results.",
    ar: "لذلك نحرص على تنفيذ كل مشروع بأعلى درجات الدقة الهندسية، باستخدام مواد معتمدة وحلول موثوقة تضمن نتائج تدوم لسنوات.",
  },
  "al.title": { en: "Our Strategic Alliances", ar: "تحالفاتنا الاستراتيجية" },
  "al.eyebrow": { en: "Trusted Partners", ar: "شركاء موثوقون" },
  "al.body": {
    en: "We collaborate with the world's leading manufacturers to ensure the highest quality of materials and systems. Our strategic associations include industry leaders such as Sika, Fosroc, BASF, Mapei, Henkel Polybit, and other certified protection material providers.",
    ar: "نعتز بشراكتنا مع كبرى الشركات العالمية المصنعة لمواد البناء والعزل، ونستخدم أنظمة معتمدة من رواد الصناعة لضمان تنفيذ المشاريع بأعلى معايير الجودة العالمية والضمانات الموثوقة.",
  },
  "fcta.title": { en: "Secure Your Investment with Engineering Precision", ar: "احمِ استثمارك بدقة هندسية" },
  "fcta.sub": {
    en: "Elevate your project's durability with certified systems, expert engineering, and trusted execution.",
    ar: "ارتقِ بمتانة مشروعك من خلال أنظمة معتمدة، وخبرة هندسية، وتنفيذ احترافي موثوق.",
  },
  "ct.title": { en: "Contact CASCATA", ar: "تواصل مع CASCATA" },
  "ct.eyebrow": { en: "Let's Talk", ar: "تواصل معنا" },
  "ct.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "ct.email": { en: "Email", ar: "البريد الإلكتروني" },
  "ct.location": { en: "Location", ar: "الموقع" },
  "ct.addr": {
    en: "Ath Tharwat Street, Off Al Manhal Street Zone ME12, Mohammed Bin Zayed City Abu Dhabi, United Arab Emirates",
    ar: "شارع ثروت، متفرع من شارع المنهل، المنطقة ME12، مدينة محمد بن زايد، أبوظبي، الإمارات العربية المتحدة",
  },
  "form.name": { en: "Name", ar: "الاسم" },
  "form.phone": { en: "Phone number", ar: "رقم الهاتف" },
  "form.email": { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
  "form.desc": { en: "Project description (optional)", ar: "وصف المشروع (اختياري)" },
  "form.loc": { en: "Project location (optional)", ar: "موقع المشروع (اختياري)" },
  "form.svc": { en: "Service interest (optional)", ar: "الخدمة المطلوبة (اختياري)" },
  "form.send": { en: "Send Inquiry", ar: "إرسال الطلب" },
  "form.required": { en: "Required", ar: "حقل مطلوب" },
  "form.success": { en: "Thank you. Our team will reach out shortly.", ar: "شكراً لك. سيتواصل معك فريقنا قريبًا." },
  "form.invalidPhone": { en: "Please enter a valid phone number", ar: "الرجاء إدخال رقم هاتف صحيح" },
  "form.invalidEmail": { en: "Please enter a valid email", ar: "الرجاء إدخال بريد إلكتروني صحيح" },
  "ft.quick": { en: "Quick Links", ar: "روابط سريعة" },
  "ft.services": { en: "Services", ar: "الخدمات" },
  "ft.contact": { en: "Contact", ar: "بيانات التواصل" },
  "ft.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "wa.general": {
    en: "Hello CASCATA, I'm interested in your structural protection and waterproofing services. I would like to get more details.",
    ar: "مرحبًا CASCATA، أريد الاستفسار عن خدمات حماية المنشآت والعزل المائي. من فضلك أرسل لي التفاصيل.",
  },
};

const navItems = [
  ["home", "nav.home"],
  ["portfolio", "nav.portfolio"],
  ["about", "nav.about"],
  ["mission-vision", "nav.core"],
  ["systems", "nav.systems"],
  ["services", "nav.services"],
  ["alliances", "nav.alliances"],
  ["contact", "nav.contact"],
];

const stakeholders = [
  ["ADNOC", "portfolio/adnoc.jpeg"],
  ["Aldar", "portfolio/aldar.jpeg"],
  ["Miral", "portfolio/miral.jpeg"],
  ["DAMAC", "portfolio/damac.jpeg"],
  ["MERCEDES", "portfolio/MERCEDES.jpeg"],
  ["ENEC", "portfolio/enec.jpeg"],
  ["ADEK", "portfolio/adek.jpeg"],
  ["AD Ports", "portfolio/ad-ports.jpeg"],
  ["Majid Al Futtaim", "portfolio/majid-al-futtaim.jpeg"],
];

const portfolioCategories = [
  {
    id: "sovereign-cultural",
    title: { en: "Sovereign & Cultural Landmarks", ar: "معالم سيادية وثقافية" },
    description: {
      en: "Iconic national landmarks demanding precision engineering, technical excellence, and uncompromising reliability.",
      ar: "معالم وطنية بارزة تتطلب دقة هندسية وتميزًا فنيًا واعتمادية عالية دون تنازل.",
    },
    projects: [
      p("Zayed National Museum, Saadiyat Island", "متحف زايد الوطني، جزيرة السعديات", "Abu Dhabi", "أبوظبي", "Department of Culture & Tourism", "WSP", "Al Ryum General Cont. Est."),
      p("Natural History Museum", "متحف التاريخ الطبيعي", "Abu Dhabi", "أبوظبي", "Miral", "Ellasdos", "ALEC"),
      p("Sheikh Zayed Palace - Injection Work", "قصر الشيخ زايد - أعمال الحقن", "Dubai", "دبي"),
      p("Siny Majlis - Crown Prince Court", "مجلس سيني - ديوان ولي العهد", "Abu Dhabi", "أبوظبي", "Crown Prince Court", "", "Al Shd General Contracting"),
      p("Sheikh Mansoor Palace", "قصر الشيخ منصور", "Abu Dhabi", "أبوظبي", "Sheikh Mansoor", "", "Modular General Contracting LLC"),
      p("Al Bateen Palace Service Block", "مبنى الخدمات في قصر البطين", "Abu Dhabi", "أبوظبي"),
      p("Qasr Al Watan / Presidential Flight Infrastructure - Roof Waterproofing", "قصر الوطن / بنية الطيران الرئاسي - عزل الأسطح", "Abu Dhabi", "أبوظبي", "Presidential Flight", "", "Maplin for Agricultural Projects LLC"),
    ],
  },
  {
    id: "energy-infrastructure",
    title: { en: "Energy & Strategic Infrastructure", ar: "الطاقة والبنية التحتية الاستراتيجية" },
    description: {
      en: "Large-scale energy, logistics, and strategic infrastructure projects built to national-level operational standards.",
      ar: "مشاريع طاقة ولوجستيات وبنية تحتية استراتيجية واسعة النطاق، منفذة وفق معايير تشغيلية على مستوى وطني.",
    },
    projects: [
      p("Auxiliary Buildings at Barakah Nuclear Power Plant", "المباني المساندة في محطة براكة للطاقة النووية", "Abu Dhabi", "أبوظبي", "Emirates Nuclear Energy Corporation", "Korean Electricity Power Corporation", "Seoyong Construction"),
      p("Nuclear Power Plant Refurbishment - Roof Waterproofing", "تجديد محطة الطاقة النووية - عزل الأسطح", "Abu Dhabi", "أبوظبي", "Emirates Nuclear Energy Corporation", "Korean Electricity Power Corporation", "Seoyong Construction Co. LLC"),
      p("Expansion of Container Terminal 1 at Khalifa Port", "توسعة محطة الحاويات 1 في ميناء خليفة", "Abu Dhabi", "أبوظبي", "Abu Dhabi Ports", "Jacobs", "China Harbour Engineering Co. LLC"),
      p("ADNOC BAB Office Building, Habshan Field", "مبنى مكاتب أدنوك باب، حقل حبشان", "Abu Dhabi", "أبوظبي", "ADNOC", "Project Lap", "Auburn Electromechanical Contracting Est."),
      p("ADNOC Service Stations Network", "شبكة محطات خدمة أدنوك", "Al Ain & Abu Dhabi", "العين وأبوظبي"),
      p("Rooftop Solar PV Plant at JAFZA", "محطة طاقة شمسية كهروضوئية على الأسطح في جافزا", "Dubai", "دبي", "Al Etihad Energy Services", "", "Al Maden Mena"),
      p("PV2 Power Project", "مشروع الطاقة PV2", "Abu Dhabi", "أبوظبي", "", "", "CCS COMSERVICE FZ LLC / Man Energy"),
      p("Power Substations Infrastructure", "بنية تحتية لمحطات الكهرباء الفرعية", "Al Ain", "العين", "", "SNC LAVALIN", "El Race General Contracting Co. LLC"),
      p("Al Wathba Strategic Tunnel", "نفق الوثبة الاستراتيجي", "Abu Dhabi", "أبوظبي", "", "", "Al Wathba Cement Industries LLC"),
    ],
  },
  {
    id: "hospitality-luxury",
    title: { en: "Hospitality & Luxury Destinations", ar: "الضيافة والوجهات الفاخرة" },
    description: {
      en: "Luxury hospitality destinations, premium residential communities, and world-class lifestyle developments.",
      ar: "وجهات ضيافة فاخرة ومجتمعات سكنية راقية ومشاريع أسلوب حياة بمستوى عالمي.",
    },
    projects: [
      p("Crowne Plaza Hotel", "فندق كراون بلازا", "Dubai", "دبي", "", "", "Ancient Builders Constructions LLC"),
      p("Al Raha Beach Waterfront Development", "تطوير واجهة شاطئ الراحة البحرية", "Abu Dhabi", "أبوظبي"),
      p("DAMAC Lagoons, Venice & Portofino Clusters - 61 Luxury Villas", "داماك لاجونز، مجموعتا فينيسيا وبورتوفينو - 61 فيلا فاخرة", "Dubai", "دبي", "DAMAC", "Lacasa Architects", "Ancient Builders Constructions LLC"),
      p("Tilal Al Ghaf, The Harmony Development", "تلال الغاف، مشروع ذا هارموني", "Dubai / Abu Dhabi", "دبي / أبوظبي"),
      p("Al Forsan International Sports Resort", "منتجع الفرسان الرياضي الدولي", "Abu Dhabi", "أبوظبي"),
      p("Al Forsan Equestrian Club Expansion, Phase II", "توسعة نادي الفرسان للفروسية، المرحلة الثانية", "Abu Dhabi", "أبوظبي"),
      p("Mirfa City Walkway Development", "تطوير ممشى مدينة المرفأ", "Abu Dhabi", "أبوظبي", "Department of Municipalities & Transport"),
      p("Saadiyat Luxury Villas Complex", "مجمع فلل السعديات الفاخرة", "Abu Dhabi", "أبوظبي"),
      p("Al Reem Island Tower", "برج جزيرة الريم", "Abu Dhabi", "أبوظبي", "", "", "Teejan Contracting LLC"),
      p("Yas Island Premium Villas, YAS Villa & Private Villas", "فلل فاخرة في جزيرة ياس، فيلا ياس وفلل خاصة", "Abu Dhabi", "أبوظبي", "Abdullah Al Zaabi", "", "Auburn Electromechanical / Al Ahd General Contracting"),
    ],
  },
  {
    id: "healthcare-institutional",
    title: { en: "Healthcare & Institutional Facilities", ar: "المنشآت الصحية والمؤسسية" },
    description: {
      en: "Specialized healthcare and institutional facilities developed in compliance with rigorous governmental and operational standards.",
      ar: "منشآت صحية ومؤسسية متخصصة منفذة بما يتوافق مع معايير حكومية وتشغيلية دقيقة.",
    },
    projects: [
      p("Saudi German Hospital", "المستشفى السعودي الألماني", "Ajman & Dubai", "عجمان ودبي", "", "", "IHCC"),
      p("YAS Clinic Health Facilities", "منشآت ياس كلينك الصحية", "Abu Dhabi", "أبوظبي"),
      p("Fayyhealth Polyclinic", "عيادة فاي هيلث متعددة التخصصات", "Dubai", "دبي", "", "", "Cherwell Interior Decoration LLC"),
      p("Abu Dhabi Future Schools, ADEK, Various Campuses", "مدارس أبوظبي المستقبلية، أدك، عدة مقرات", "Al Rahba, Al Bahya, etc.", "الرحبة، الباهية، وغيرها", "ADEK", "Althorath International", "Teejan Contracting LLC"),
      p("Future International School, ADEK", "مدرسة فيوتشر الدولية، أدك", "Abu Dhabi", "أبوظبي"),
      p("Al Yasmina School", "مدرسة الياسمينة", "Abu Dhabi", "أبوظبي", "Al Dar Properties PJSC", "GHD", "Tornado General Contracting LLC"),
      p("Al Hudaybiya School", "مدرسة الحديبية", "Dubai", "دبي", "", "", "Ovation General Contracting"),
      p("Mirfa Marine Rehabilitation Center", "مركز المرفأ لإعادة تأهيل الأحياء البحرية", "Abu Dhabi", "أبوظبي", "Environment Agency Abu Dhabi"),
    ],
  },
  {
    id: "commercial-corporate",
    title: { en: "Commercial & Corporate Developments", ar: "المشاريع التجارية والشركات" },
    description: {
      en: "Corporate headquarters, premium commercial developments, and international industrial facilities engineered for performance and longevity.",
      ar: "مقار إدارية ومشاريع تجارية راقية ومنشآت صناعية دولية مصممة للأداء طويل الأمد.",
    },
    projects: [
      p("Al Maryah Bank Headquarters", "المقر الرئيسي لبنك المارية", "Abu Dhabi", "أبوظبي", "", "", "Citisape LLC"),
      p("Al Maryah Vista Tower - SB13", "برج المارية فيستا - SB13", "Abu Dhabi", "أبوظبي", "Webridge Properties LLC", "Pioneer Engineering Consultancy LLC", "A&M International General Contracting LLC"),
      p("Mercedes-Benz Showrooms & Service Centers", "معارض ومراكز خدمة مرسيدس-بنز", "Musaffah & Dubai", "مصفح ودبي", "", "", "Al Asser Al Raji Contractor"),
      p("Sun Towers Project - Waterproofing Application", "مشروع صن تاورز - تنفيذ أعمال العزل المائي", "Abu Dhabi", "أبوظبي", "", "", "SUN TOWERS GENERAL CONTRACTING L.L.C."),
      p("Kizad Headquarters, Area 3", "المقر الرئيسي لكيزاد، المنطقة 3", "Abu Dhabi", "أبوظبي"),
      p("Himalaya Wellness Manufacturing Facility", "منشأة تصنيع هيمالايا ويلنس", "Dubai Industrial City", "مدينة دبي الصناعية"),
      p("Food Factory for Future Foods Industry LTD, Kezad Group", "مصنع أغذية لشركة فيوتشر فودز، مجموعة كيزاد", "Abu Dhabi & Dubai", "أبوظبي ودبي", "Future Foods / Kezad Group", "Capital Engineering Consultancy / Winner Holistic Consultants", "China National Chemical Engineering Corporation, CNCEC"),
      p("Al Ain Distribution Company", "شركة العين للتوزيع", "Abu Dhabi", "أبوظبي", "", "ATKINS", "Allied ME Contracting & Gen. Maintenance LLC"),
      p("M13B Office Building", "مبنى مكاتب M13B", "Abu Dhabi", "أبوظبي", "", "GHD", "Code Contracting Co. LLC"),
      p("Motor City Control Tower", "برج التحكم في موتور سيتي", "Dubai", "دبي", "", "", "Modular General Contracting LLC"),
      p("Abu Dhabi Business Hub, Phase IV Warehouses", "أبوظبي بزنس هب، مستودعات المرحلة الرابعة"),
      p("Umm Al Quwain Free Trade Zone Authority Buildings", "مباني هيئة منطقة أم القيوين الحرة"),
      p("Al Safadi Restaurant Premium Facility", "منشأة مطعم الصفدي الفاخرة", "Abu Dhabi", "أبوظبي", "Fadi Al Safadi", "Swah Design", "Continent General Contracting LLC"),
    ],
  },
];

const state = {
  lang: "en",
  activeCategory: portfolioCategories[0].id,
  expanded: false,
  mobileOpen: false,
};

function p(en, ar, locEn, locAr, client, consultant, contractor) {
  return {
    title: { en, ar },
    location: locEn ? { en: locEn, ar: locAr } : null,
    client: client || "",
    consultant: consultant || "",
    contractor: contractor || "",
  };
}

function t(key) {
  return dict[key] ? dict[key][state.lang] : key;
}

function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function serviceMessage(serviceName) {
  if (state.lang === "ar") return `مرحبًا CASCATA، أريد الاستفسار عن خدمة ${serviceName}. من فضلك أرسل لي التفاصيل.`;
  return `Hello CASCATA, I'm interested in ${serviceName}. Please send me more details.`;
}

function icon(name) {
  const paths = {
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/>',
    hardHat: '<path d="M2 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"/><path d="M10 10V5a2 2 0 0 1 4 0v5"/><path d="M4 18v-5a8 8 0 0 1 16 0v5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    check: '<path d="M21.8 10A10 10 0 1 1 17 3.3"/><path d="m9 11 3 3L22 4"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    map: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7z"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    bath: '<path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.6 6.4a2 2 0 0 0 0 2.8l.6.6"/><path d="M2 12v2a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-2"/>',
    syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-6 6a2.1 2.1 0 0 1-3-3l6-6a6 6 0 0 1 7.9-7.9z"/>',
    square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
    badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    menu: '<path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.check}</svg>`;
}

function Arrow() {
  return icon(state.lang === "ar" ? "arrowLeft" : "arrowRight");
}

function asset(path) {
  return A + path;
}

function render() {
  setDocumentLanguage();
  const app = document.getElementById("app");
  app.innerHTML = `
    ${renderNavbar()}
    <main class="main">
      ${renderHero()}
      ${renderPortfolio()}
      ${renderAbout()}
      ${renderMission()}
      ${renderCommitment()}
      ${renderSystems()}
      ${renderServices()}
      ${renderAlliances()}
      ${renderFinalCta()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    ${renderFloatingAction()}
  `;
  bindEvents();
  updateScrolled();
}

function setDocumentLanguage() {
  const ar = state.lang === "ar";
  document.documentElement.lang = state.lang;
  document.documentElement.dir = ar ? "rtl" : "ltr";
  document.title = ar
    ? "CASCATA | عزل مائي وحراري وحماية المنشآت في الإمارات"
    : "CASCATA | Waterproofing & Structural Protection Services in UAE";
  const desc = ar
    ? "CASCATA تقدم خدمات العزل المائي والحراري، ترميم الخرسانة، الحقن، وأنظمة الحماية المعتمدة للمشاريع السكنية والتجارية والصناعية في الإمارات."
    : "CASCATA provides certified waterproofing, thermal insulation, concrete repair, injection, flooring, tank lining, and structural protection systems across the UAE.";
  document.querySelector('meta[name="description"]').setAttribute("content", desc);
  try {
    localStorage.setItem("cascata.lang", state.lang);
  } catch {}
}

function renderNavbar() {
  const switchLabel = state.lang === "en" ? "ع" : "E";
  const switchAria = state.lang === "en" ? "Switch to Arabic" : "Switch to English";
  return `
    <header class="navbar" id="navbar">
      <div class="container nav-container">
        <div class="nav-grid">
          <a href="#home" class="brand" aria-label="CASCATA — Home">
            <span class="brand-logo-wrap"><img class="brand-logo" src="${asset("logo-cascata-final.png")}" alt="CASCATA Waterproofing"></span>
            <span class="brand-tag"><span>Insulation</span><span class="nowrap">Material works</span></span>
          </a>
          <div class="desktop-nav"><nav>${navItems.map(([id, key]) => `<a href="#${id}">${t(key)}</a>`).join("")}</nav></div>
          <div class="desktop-actions">
            <button class="lang-btn js-lang" aria-label="${switchAria}"><span>${switchLabel}</span></button>
            <a class="nav-cta" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer">${icon("message")}${t("cta.start")}</a>
          </div>
          <button class="mobile-menu-button js-menu" aria-label="Menu">${state.mobileOpen ? icon("x") : icon("menu")}</button>
        </div>
        <div class="mobile-panel ${state.mobileOpen ? "open" : ""}">
          <nav>
            ${navItems.map(([id, key]) => `<a href="#${id}" class="js-close-menu">${t(key)}</a>`).join("")}
            <div class="mobile-actions">
              <button class="lang-btn js-lang" aria-label="${switchAria}"><span>${switchLabel}</span></button>
              <a class="nav-cta js-close-menu" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer">${icon("message")}${t("cta.start")}</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
}

function renderHero() {
  const badges = [
    ["hero.badge1", "badge"],
    ["hero.badge2", "hardHat"],
    ["hero.badge3", "shield"],
    ["hero.badge4", "map"],
  ];
  return `
    <section class="hero" id="home">
      <img class="hero-bg" src="${asset("hero-cascata.jpg")}" alt="${t("hero.title")}" width="1920" height="1080">
      <div class="hero-overlay"></div>
      <div class="hero-grid grid-pattern"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <h1 class="hero-title font-display">${t("hero.title")}</h1>
          <p class="hero-sub">${t("hero.sub")}</p>
          <p class="hero-slogan">${t("hero.slogan")}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer">${t("cta.startFull")}${Arrow()}</a>
            <a class="btn btn-outline-light" href="#services">${t("cta.explore")}</a>
          </div>
          <div class="hero-badges">
            ${badges.map(([key, ico]) => `<div class="hero-badge"><span class="hero-badge-icon">${icon(ico)}</span><span>${t(key)}</span></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSection(id, content, extra = "") {
  return `<section id="${id}" class="section ${extra}"><div class="container">${content}</div></section>`;
}

function eyebrow(key) {
  return `<div class="eyebrow">${t(key)}</div>`;
}

function renderAbout() {
  return renderSection("about", `
    <div class="two-col">
      <div>
        ${eyebrow("about.eyebrow")}
        <h2 class="section-title font-display">${t("about.title")}</h2>
        <div class="body-copy"><p>${t("about.p1")}</p><p>${t("about.p2")}</p><p>${t("about.p3")}</p></div>
      </div>
      <div class="image-glow"><img class="feature-img" src="${asset("systems.png")}" alt="${t("sys.title")}" loading="lazy" width="1280" height="960"></div>
    </div>
  `);
}

function renderMission() {
  return renderSection("mission-vision", `
    <div class="text-center">
      ${eyebrow("mv.eyebrow")}
      <h2 class="section-title font-display">${t("mission.title")} &amp; ${t("vision.title")}</h2>
    </div>
    <div class="cards-grid mt-section">
      <div class="card">${icon("shield")}<h3 id="mission" class="font-display">${t("mission.title")}</h3><p>${t("mission.body")}</p></div>
      <div class="card">${icon("award")}<h3 id="vision" class="font-display">${t("vision.title")}</h3><p>${t("vision.body")}</p></div>
    </div>
    <img class="wide-img mt-section" src="${asset("mission.jpg")}" alt="" loading="lazy" width="1280" height="960">
  `, "soft-section");
}

function renderCommitment() {
  return renderSection("commitment", `
    <div class="two-col">
      <div class="image-glow commitment-image"><img class="feature-img" src="${asset("commitment.png")}" alt="${t("com.title")}" loading="lazy" width="1280" height="960"></div>
      <div class="commitment-text">
        ${eyebrow("com.eyebrow")}
        <h2 class="section-title font-display">${t("com.title")}</h2>
        <div class="body-copy"><p>${t("com.p1")}</p><p>${t("com.p2")}</p></div>
      </div>
    </div>
  `);
}

function renderSystems() {
  return renderSection("systems", `
    <div class="grid-pattern"></div>
    <div class="relative">
      <div class="text-center mb-section">
        ${eyebrow("sys.eyebrow")}
        <h2 class="section-title font-display text-white mb-tight">${t("sys.title")}</h2>
        <p class="lead max-lead text-white-muted">${t("sys.desc")}</p>
      </div>
      <div class="systems-grid">
        ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<div class="system-card">${icon("check")}<h3 class="font-display">${t(`sys.${n}`)}</h3></div>`).join("")}
      </div>
    </div>
  `, "deep-section");
}

function renderServices() {
  const services = [
    ["substructure.png", "droplet", "svc.a.t", "svc.a.b"],
    ["roofing.jpg", "building", "svc.b.t", "svc.b.b"],
    ["wetarea.jpg", "bath", "svc.c.t", "svc.c.b"],
    ["injection.jpg", "syringe", "svc.d.t", "svc.d.b"],
    ["repair.jpg", "wrench", "svc.e.t", "svc.e.b"],
  ];
  return renderSection("services", `
    <div class="text-center mb-section">
      ${eyebrow("svc.eyebrow")}
      <h2 class="section-title font-display">${t("svc.title")}</h2>
    </div>
    <div class="services-grid">
      ${services.map(([img, ico, titleKey, bodyKey]) => {
        const title = t(titleKey);
        return `<article class="service-card">
          <div class="service-media"><img src="${asset(img)}" alt="${title}" loading="lazy" width="1280" height="960"><span class="service-icon">${icon(ico)}</span></div>
          <div class="service-body"><h3 class="font-display">${title}</h3><p>${t(bodyKey)}</p><a class="service-link" href="${waLink(serviceMessage(title))}" target="_blank" rel="noopener noreferrer">${icon("message")}${t("cta.askService")}</a></div>
        </article>`;
      }).join("")}
    </div>
  `);
}

function renderAlliances() {
  const logos = [
    ["sika.png", "Sika"],
    ["mc.png", "MC – Be Sure. Build Sure."],
    ["fosroc.png", "Fosroc"],
    ["soprema.png", "Soprema"],
    ["basf.png", "BASF Master Builders"],
    ["polybit.png", "Polybit"],
    ["stoncor.png", "StonCor Group"],
    ["flowcrete.png", "Flowcrete"],
    ["awazel.png", "Awazel"],
    ["hilti.png", "Hilti"],
    ["henkel.png", "Henkel"],
    ["corrotech.png", "Corrotech"],
    ["mapei.png", "Mapei"],
    ["vip.png", "VIP Coating Solutions"],
    ["weber.png", "Weber"],
  ];
  return renderSection("alliances", `
    <div class="text-center mb-section">
      ${eyebrow("al.eyebrow")}
      <h2 class="section-title font-display mb-title">${t("al.title")}</h2>
      <p class="lead max-lead-wide">${t("al.body")}</p>
    </div>
    <div class="partners-grid">${logos.map(([file, name]) => `<div class="partner-card" title="${name}"><img src="${asset(`partners/${file}`)}" alt="${name}" loading="lazy"></div>`).join("")}</div>
  `, "soft-section");
}

function renderFinalCta() {
  return `
    <section class="final-cta-section">
      <div class="container">
        <div class="final-cta">
          <div class="final-cta-inner">
            <div><h3 class="font-display">${t("fcta.title")}</h3><p>${t("fcta.sub")}</p></div>
            <a class="btn btn-white" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer">${icon("message")}${t("cta.startFull")}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return renderSection("contact", `
    <div class="text-center mb-section">
      ${eyebrow("ct.eyebrow")}
      <h2 class="section-title font-display">${t("ct.title")}</h2>
    </div>
    <div class="contact-grid">
      <div class="contact-list">
        <a class="contact-card" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer"><span class="contact-icon">${icon("message")}</span><div><p class="contact-label">${t("ct.whatsapp")}</p><p class="contact-value big" dir="ltr">${WA_DISPLAY}</p></div></a>
        <a class="contact-card" href="mailto:${EMAIL}"><span class="contact-icon">${icon("mail")}</span><div><p class="contact-label">${t("ct.email")}</p><p class="contact-value break">${EMAIL}</p></div></a>
        <div class="contact-card"><span class="contact-icon">${icon("map")}</span><div><p class="contact-label">${t("ct.location")}</p><p class="contact-value small">${t("ct.addr")}</p></div></div>
      </div>
      <div class="contact-form-wrap" id="contact-form-wrap">${renderContactForm()}</div>
    </div>
  `);
}

function renderContactForm() {
  return `
    <form class="form-card" id="contact-form" novalidate>
      <input class="honeypot" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="form-grid">
        ${field("name", "form.name", "text", true)}
        ${field("phone", "form.phone", "tel", true, "ltr")}
      </div>
      ${field("email", "form.email", "email", false, "ltr")}
      ${field("service", "form.svc")}
      ${field("location", "form.loc")}
      <div class="field"><label>${t("form.desc")}</label><textarea name="description" rows="4"></textarea></div>
      <button class="btn btn-primary full-width" type="submit">${icon("send")}${t("form.send")}</button>
      <p class="form-note"><span dir="ltr">${state.lang === "ar" ? "" : WA_DISPLAY}</span></p>
    </form>
  `;
}

function field(name, labelKey, type = "text", required = false, dir = "") {
  return `<div class="field" data-field="${name}"><label>${t(labelKey)} ${required ? '<span class="required">*</span>' : ""}</label><input name="${name}" type="${type}" ${dir ? `dir="${dir}"` : ""}></div>`;
}

function renderPortfolio() {
  const active = portfolioCategories.find((c) => c.id === state.activeCategory) || portfolioCategories[0];
  const visible = state.expanded ? active.projects : active.projects.slice(0, 4);
  const hasHidden = active.projects.length > visible.length;
  const tabIcons = ["award", "hardHat", "building", "shield", "badge"];
  return renderSection("portfolio", `
    <div class="portfolio-stack">
      <div class="portfolio-head">
        <div>${eyebrow("pf.eyebrow")}<h2 class="section-title-xl font-display">${t("pf.title")}</h2></div>
        <div class="portfolio-intro"><p>${t("pf.intro")}</p><div class="portfolio-count"><strong class="font-display">${t("pf.count")}</strong><span>${t("pf.countNote")}</span></div></div>
      </div>
      <div class="trust-band">
        <h3 class="font-display">${t("pf.trustTitle")}</h3>
        <div class="stakeholders">${stakeholders.map(([name, logo]) => `<div class="stakeholder ${name === "AD Ports" || name === "Majid Al Futtaim" ? "wide" : ""}" title="${name}"><img src="${asset(logo)}" alt="${name}" loading="lazy"></div>`).join("")}</div>
      </div>
      <div class="portfolio-controls">
        <div class="tabs" role="tablist" aria-label="${t("pf.categoryAria")}">
          ${portfolioCategories.map((cat, i) => `<button class="tab ${cat.id === active.id ? "active" : ""}" type="button" role="tab" aria-selected="${cat.id === active.id}" data-category="${cat.id}"><span class="tab-icon">${icon(tabIcons[i])}</span><span>${cat.title[state.lang]}</span></button>`).join("")}
        </div>
        <div class="portfolio-panel" role="tabpanel">
          <div class="panel-head">
            <div><p class="panel-label">${t("pf.projectsLabel")}</p><h3 class="font-display">${active.title[state.lang]}</h3><p>${active.description[state.lang]}</p></div>
            <p class="reference-count">${active.projects.length} ${t("pf.referencesCount")}</p>
          </div>
          <div class="project-grid">${visible.map((project, index) => renderProject(project, index)).join("")}</div>
          <div class="panel-actions">
            <p>${hasHidden ? t("pf.hiddenProjects") : t("pf.scopeNote")}</p>
            <div class="panel-buttons">
              ${active.projects.length > 4 ? `<button type="button" class="pill pill-outline js-toggle-projects">${state.expanded ? t("pf.showLess") : t("pf.viewAll")}</button>` : ""}
              <a href="#contact" class="pill pill-primary">${t("pf.cta")}${Arrow()}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, "portfolio");
}

function renderProject(project, index) {
  const meta = [
    project.client && [t("pf.client"), project.client],
    project.consultant && [t("pf.consultant"), project.consultant],
    project.contractor && [t("pf.contractor"), project.contractor],
  ].filter(Boolean);
  return `
    <article class="project-row">
      <div class="project-row-inner">
        <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <div class="project-title-line">
            <h4 class="font-display">${project.title[state.lang]}</h4>
            ${project.location ? `<span class="location">${icon("map")}${project.location[state.lang]}</span>` : ""}
          </div>
          ${meta.length ? `<dl class="meta-list">${meta.map(([label, value]) => `<div><dt>${label}:</dt><dd>${value}</dd></div>`).join("")}</dl>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderFooter() {
  const serviceKeys = ["svc.a.t", "svc.b.t", "svc.c.t", "svc.d.t", "svc.e.t", "svc.f.t"];
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div><div class="footer-brand"><div class="footer-logo-wrap"><img src="${asset("logo-cascata-final.png")}" alt="CASCATA"></div><span>CASCATA</span></div><p>${t("hero.tagline")} — ${t("about.p1")}</p></div>
        <div><h4>${t("ft.quick")}</h4><ul><li><a href="#about">${t("nav.about")}</a></li><li><a href="#why">${t("nav.why")}</a></li><li><a href="#portfolio">${t("nav.portfolio")}</a></li><li><a href="#alliances">${t("nav.alliances")}</a></li><li><a href="#contact">${t("nav.contact")}</a></li></ul></div>
        <div><h4>${t("ft.services")}</h4><ul>${serviceKeys.map((key) => `<li>${t(key)}</li>`).join("")}</ul></div>
        <div><h4>${t("ft.contact")}</h4><ul class="mb-tight"><li dir="ltr">${WA_DISPLAY}</li><li>${EMAIL}</li><li class="small">${t("ct.addr")}</li></ul><a class="btn btn-primary" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer">${t("cta.whatsapp")}</a></div>
      </div>
      <div class="footer-bottom"><div class="container footer-bottom-inner"><span>© ${new Date().getFullYear()} CASCATA. ${t("ft.rights")}</span><span class="display">${t("hero.tagline")}</span></div></div>
    </footer>
  `;
}

function renderFloatingAction() {
  const label = state.lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp";
  return `<a class="floating-whatsapp" href="${waLink(t("wa.general"))}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}">${icon("message")}</a>`;
}

function bindEvents() {
  document.querySelectorAll(".js-lang").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = state.lang === "en" ? "ar" : "en";
      state.mobileOpen = false;
      render();
    });
  });
  const menu = document.querySelector(".js-menu");
  if (menu) {
    menu.addEventListener("click", () => {
      state.mobileOpen = !state.mobileOpen;
      render();
    });
  }
  document.querySelectorAll(".js-close-menu").forEach((link) => {
    link.addEventListener("click", () => {
      state.mobileOpen = false;
      render();
    });
  });
  document.querySelectorAll("[data-category]").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeCategory = tab.dataset.category;
      state.expanded = false;
      render();
      document.getElementById("portfolio").scrollIntoView({ block: "nearest" });
    });
  });
  const toggle = document.querySelector(".js-toggle-projects");
  if (toggle) {
    toggle.addEventListener("click", () => {
      state.expanded = !state.expanded;
      render();
    });
  }
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", handleContactSubmit);
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  if (data.company) return;
  const errors = {};
  if (!String(data.name || "").trim() || String(data.name || "").trim().length < 2) errors.name = t("form.required");
  const phone = String(data.phone || "").trim();
  if (phone.length < 6 || phone.length > 25 || !/^[+\d\s\-()]+$/.test(phone)) errors.phone = t("form.invalidPhone");
  const email = String(data.email || "").trim();
  if (email && (email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) errors.email = t("form.invalidEmail");
  if (Object.keys(errors).length) {
    showFormErrors(errors);
    return;
  }
  const wrap = document.getElementById("contact-form-wrap");
  wrap.innerHTML = `<div class="success-card">${icon("check")}<p>${t("form.success")}</p></div>`;
  setTimeout(() => {
    const fresh = document.getElementById("contact-form-wrap");
    if (fresh) {
      fresh.innerHTML = renderContactForm();
      const form = document.getElementById("contact-form");
      if (form) form.addEventListener("submit", handleContactSubmit);
    }
  }, 5000);
}

function showFormErrors(errors) {
  document.querySelectorAll(".field").forEach((fieldEl) => {
    fieldEl.classList.remove("error");
    fieldEl.querySelector(".error-text")?.remove();
    const name = fieldEl.dataset.field || fieldEl.querySelector("input,textarea")?.name;
    if (errors[name]) {
      fieldEl.classList.add("error");
      fieldEl.insertAdjacentHTML("beforeend", `<p class="error-text">${errors[name]}</p>`);
    }
  });
}

function updateScrolled() {
  const nav = document.getElementById("navbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateScrolled, { passive: true });

try {
  const stored = localStorage.getItem("cascata.lang");
  if (stored === "en" || stored === "ar") {
    state.lang = stored;
  } else if ((navigator.language || "").toLowerCase().startsWith("ar")) {
    state.lang = "ar";
  }
} catch {}

render();
