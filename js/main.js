// Barwaaqo Health Clinic - Main JavaScript

// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        // Homepage
        heroTitle: "Your Health, Our Priority",
        heroSub: "Trusted care for Somali families with bilingual support.",
        stat1: "Years of experience",
        stat2: "Certified doctors",
        stat3: "Patient satisfaction",
        qa1: "Book Appointment",
        qa2: "Online Consultation",
        qa3: "Find a Doctor",
        qa4: "Health Tips",
        qa5: "Contact Clinic",
        servicesTitle: "🌟 Our Core Services",
        doctorsTitle: "👩‍⚕️ Our Specialist Doctors",
        testimonialTitle: "💬 What Our Patients Say",
        wellnessTitle: "🧘 Wellness & Health Tips",
        ctaTitle: "Ready to Prioritize Your Health?",
        ctaText: "Book an appointment today and experience compassionate care in your language.",
        
        // About Page
        pageTitle: "About Barwaaqo Health Clinic",
        pageSubtitle: "Our story, mission, and commitment to the Somali community",
        storyTitle: "Our Story",
        storyText1: "Barwaaqo Health Clinic was founded in 2010 with a simple mission: to provide accessible, compassionate, and culturally-sensitive healthcare to the Somali community and beyond.",
        storyText2: "The word 'Barwaaqo' means prosperity and well-being in Somali, reflecting our holistic approach to health. What started as a small clinic with two doctors has grown into a trusted healthcare center serving thousands of families annually.",
        missionTitle: "Our Mission",
        missionText: "To deliver equitable, high-quality healthcare that bridges cultural and linguistic gaps.",
        visionTitle: "Our Vision",
        visionText: "A healthier Somali community where wellness is accessible to all.",
        valuesTitle: "Our Values",
        valuesText: "Compassion • Respect • Integrity • Cultural Competence",
        teamTitle: "Meet Our Leadership Team",
        communityTitle: "🇸🇴 Proudly Serving the Somali Community",
        communityText: "All our doctors and staff speak Somali and English, ensuring no language barrier stands between you and quality healthcare.",
        
        // Appointment Page
        nameLabel: "Full Name *",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number *",
        doctorLabel: "Select Doctor *",
        serviceLabel: "Select Service *",
        dateLabel: "Preferred Date *",
        timeLabel: "Preferred Time *",
        notesLabel: "Additional Notes",
        submitBtn: "Submit Appointment Request",
        infoTitle: "📋 What to Expect",
        info1: "✓ Confirmation within 2 hours via WhatsApp/SMS",
        info2: "✓ Free consultation for first-time patients",
        info3: "✓ Somali & English speaking staff available",
        info4: "✓ Telehealth options available",
        emergencyNote: "For emergencies:",
        
        // Contact Page
        addressTitle: "Visit Us",
        phoneTitle: "Call Us",
        whatsappTitle: "WhatsApp Support",
        emailTitle: "Email Us",
        hoursTitle: "Working Hours",
        formTitle: "Send us a Message",
        mapTitle: "Find Us Here",
        whatsappHours: "Available 8 AM - 8 PM daily"
    },
    so: {
        heroTitle: "Caafimaadkaaga, Mudnaantayada",
        heroSub: "Daryeel lagu kalsoonaan qoysaska Soomaaliyeed oo leh taageer laba luuqadood.",
        stat1: "Sano oo khibrad",
        stat2: "Dhakhaatiir shahaado leh",
        stat3: "Qanacsanaanta bukaanka",
        qa1: "Qabso Ballan",
        qa2: "Talo Telehealth",
        qa3: "Raadi Dhakhtar",
        qa4: "Talooyin Caafimaad",
        qa5: "Nagala Soo Xiriir",
        servicesTitle: "🌟 Adeegyada Caafimaad",
        doctorsTitle: "👩‍⚕️ Dhakhaatiirtayada Takhasuska leh",
        testimonialTitle: "💬 Dadka Bukaanka ayaa Yidhi",
        wellnessTitle: "🧘 Fayoobida & Talooyin Caafimaad",
        ctaTitle: "Diyaar ma u tahay inaad Mudnaan siiso Caafimaadkaaga?",
        ctaText: "Qabso ballan maanta oo la kulam daryeel naxariis leh oo ku qoran luqaddaada.",
        
        pageTitle: "Ku Saabsan Barwaaqo Health Clinic",
        pageSubtitle: "Sheekadayada, himiladayada, iyo ballanqaadka bulshada Soomaaliyeed",
        storyTitle: "Sheekadayada",
        storyText1: "Barwaaqo Health Clinic waxaa la aasaasay 2010 hadaf fudud: siinta daryeel caafimaad oo la heli karo, naxariis leh, iyo dhaqan-u-yaqaan bulshada Soomaaliyeed iyo kuwa kaleba.",
        storyText2: "Erayga 'Barwaaqo' wuxuu ka dhigan yahay barwaaqo iyo fayoobi oo Soomaali ah, taasoo ka tarjumaysa habkeena caafimaad ee dhammaystiran.",
        missionTitle: "Himiladayada",
        missionText: "In la bixiyo daryeel caafimaad oo sinnaan leh, tayo sare leh oo baafisa farqiga dhaqan iyo luqad.",
        visionTitle: "Aragtidayada",
        visionText: "Bulsho Soomaaliyeed oo caafimaad qaba oo fayoobi ay u heli karto qof kasta.",
        valuesTitle: "Qiyamadayada",
        valuesText: "Naxariis • Ixtiraam • Daacadnimo • Kartida Dhaqanka",
        teamTitle: "La Kulam Kooxda Hogaanka",
        communityTitle: "🇸🇴 Waxaan Ku Faani Sahay Adeegidda Bulshada Soomaaliyeed",
        communityText: "Dhakhaatiirtayada oo dhan iyo shaqaaluhu waxay ku hadlaan Soomaali iyo Ingiriisi, hubinta in aan luqad caqabad ku noqon karto adiga iyo caafimaadka tayada leh.",
        
        nameLabel: "Magaca Bukaanka *",
        emailLabel: "Emailka",
        phoneLabel: "Lambarka Teleefanka *",
        doctorLabel: "Dooro Dhakhtar *",
        serviceLabel: "Dooro Adeegga *",
        dateLabel: "Taariikhda La Doono *",
        timeLabel: "Wakhtiga La Doono *",
        notesLabel: "Qoraalo Dheeraad ah",
        submitBtn: "Dir Codsiga Ballanka",
        infoTitle: "📋 Maxaa Laga Filanyahay",
        info1: "✓ Xaqiijin 2 saac gudahood iyadoo loo marayo WhatsApp/SMS",
        info2: "✓ La-talin bilaash ah bukaanka marka ugu horreysa",
        info3: "✓ Shaqaale ku hadla Soomaali & Ingiriisi ayaa diyaar ah",
        info4: "✓ Ikhtiyaarada Telehealth ayaa diyaar ah",
        emergencyNote: "Xaaladaha Degdegga ah:",
        
        addressTitle: "Nagala Soo Xiriir",
        phoneTitle: "Naga Soo Wac",
        whatsappTitle: "Taageerada WhatsApp",
        emailTitle: "Nagu Soo Dir Email",
        hoursTitle: "Saacadaha Shaqada",
        formTitle: "Noo Soo Dir Fariin",
        mapTitle: "Nagala Soo Xiriir Halkan",
        whatsappHours: "La Heli Kara 8 subaxnimo ilaa 8 fiidnimo maalin kasta"
    }
};

// Data Arrays
const servicesData = [
    { icon: "🩺", nameEn: "General Consultation", nameSo: "Talo Guud", descEn: "Comprehensive primary care", descSo: "Daryeel aasaasi oo dhammaystiran" },
    { icon: "👶", nameEn: "Maternal & Child Care", nameSo: "Daryeelka Hooyada & Ilmaha", descEn: "Prenatal to pediatric care", descSo: "Daryeel uurka ilaa carruurnimada" },
    { icon: "💉", nameEn: "Vaccination", nameSo: "Tallaal", descEn: "Immunizations for all ages", descSo: "Tallaal da' kasta" },
    { icon: "🥗", nameEn: "Nutrition Counseling", nameSo: "La-talinta Nafaqada", descEn: "Personalized meal plans", descSo: "Qorshayaal cunto oo qaas ah" },
    { icon: "🧠", nameEn: "Mental Wellness", nameSo: "Caafimaadka Dhimirka", descEn: "Counseling & therapy", descSo: "La-talinta & daaweynta" },
    { icon: "🔬", nameEn: "Laboratory Services", nameSo: "Adeegyga Shaybaarka", descEn: "Full diagnostic testing", descSo: "Baaritaan dhammaystiran" },
    { icon: "💊", nameEn: "Chronic Disease Management", nameSo: "Maareynta Cudurrada Daba-dheeraada", descEn: "Diabetes, hypertension care", descSo: "Daryeelka sonkorowga, dhiig-karka" },
    { icon: "💻", nameEn: "Telehealth Consultation", nameSo: "La-talinta Telehealth", descEn: "Video consultations", descSo: "La-talinta fiidiyowga" },
    { icon: "🚑", nameEn: "Emergency Care", nameSo: "Daryeelka Degdegga ah", descEn: "24/7 emergency services", descSo: "Adeegyada degdegga ah 24/7" }
];

const wellnessServices = [
    { nameEn: "Fitness & Wellness Coaching", nameSo: "Tababarka Jirka & Fayoobida", descEn: "Personal training plans", descSo: "Qorshayaal tababar gaar ah" },
    { nameEn: "Stress Management", nameSo: "Maareynta Walbahaarka", descEn: "Meditation & therapy", descSo: "Feejignaan & daaweyn" },
    { nameEn: "Preventive Screening", nameSo: "Baaritaan Kahortag", descEn: "Early detection packages", descSo: "Xirmooyinka ogaanshaha hore" },
    { nameEn: "Lifestyle Plans", nameSo: "Qorshayaasha Qaab Nololeedka", descEn: "Holistic wellness programs", descSo: "Barnaamijyada fayoobida dhammaystiran" }
];

const doctors = [
    { name: "Dr. Fartun Ali", specialtyEn: "Family Medicine", specialtySo: "Dhaqtarka Qoyska", exp: "12 years", lang: "Somali, English, Arabic", rating: 4.9, img: "assets/doctors/Dr-Fartun-Ali.jpg" },
    { name: "Dr. Mohamed Hassan", specialtyEn: "Pediatrics", specialtySo: "Dhaqtarka Carruurta", exp: "9 years", lang: "Somali, English", rating: 4.8, img: "assets/doctors/Dr-Mohamed-Hassan.jpg" },
    { name: "Dr. Amina Yusuf", specialtyEn: "Maternal Health", specialtySo: "Caafimaadka Hooyada", exp: "15 years", lang: "Somali, English, Amharic", rating: 4.9, img: "assets/doctors/Dr-Amina-Yusuf.jpg" },
    { name: "Dr. Ahmed Abdi", specialtyEn: "Cardiology", specialtySo: "Dhaqtarka Wadnaha", exp: "18 years", lang: "Somali, English, Arabic", rating: 4.95, img: "assets/doctors/Dr-Ahmed-Abdi.jpg" },
    { name: "Dr. Sahra Isse", specialtyEn: "Nutrition", specialtySo: "Nafaqada", exp: "7 years", lang: "Somali, English", rating: 4.7, img: "assets/doctors/Dr-Sahra-sse.jpg" },
    { name: "Dr. Omar Duale", specialtyEn: "Mental Health", specialtySo: "Caafimaadka Dhimirka", exp: "11 years", lang: "Somali, English", rating: 4.85, img: "assets/doctors/Dr-OmarDuale.jpg" }
];

const testimonials = [
    { name: "Amina M.", textEn: "Excellent care! The doctors speak Somali and made me feel comfortable.", textSo: "Daryeel heersare ah! Dhakhaatiirtu waxay ku hadlaan Soomaali, waxayna i dareensiiyeen raaxo.", rating: 5 },
    { name: "Jamal D.", textEn: "Best clinic in Mogadishu. Highly recommend for families.", textSo: "Xannaanada ugu fiican Muqdisho. Waxaan ku talinayaa qoysaska.", rating: 5 },
    { name: "Hawa S.", textEn: "They helped manage my diabetes with great nutrition advice.", textSo: "Waxay i caawiyeen maaraynta sonkorowga talo nafaqo oo wanaagsan.", rating: 4.8 },
    { name: "Abdirahman K.", textEn: "Fast appointment and friendly staff. Very professional.", textSo: "Ballan degdeg ah iyo shaqaale saaxiibtinimo leh. Aad u xirfad leh.", rating: 4.9 }
];

const blogs = [
    { titleEn: "What is Diabetes? (Sonkorow)", titleSo: "Waa maxay Sonkorow?", descEn: "Learn about causes, symptoms, and management of diabetes.", descSo: "Ka baro sababaha, calaamadaha, iyo maaraynta sonkorowga.", category: "Diabetes", img: "assets/about/clinic-facility.jpg" },
    { titleEn: "Child Vaccination Guide", titleSo: "Hagaha Tallaalka Carruurta", descEn: "Essential vaccines for children under 5.", descSo: "Tallaal muhiim u ah carruurta 5 jir ka yar.", category: "Vaccination", img: "assets/about/clinic-team.jpg" },
    { titleEn: "Healthy Eating During Ramadan", titleSo: "Cunto Fayooban Inta lagu Jiro Ramadaan", descEn: "Tips for maintaining nutrition while fasting.", descSo: "Talooyin lagu ilaalinayo nafaqada inta aad soonaysaatay.", category: "Nutrition", img: "assets/about/community-care.jpg" },
    { titleEn: "Mental Health Awareness", titleSo: "Wacyigalinta Caafimaadka Dhimirka", descEn: "Recognizing signs of anxiety and depression.", descSo: "Aqoonsiga calaamadaha walaaca iyo niyad-jabka.", category: "Mental Health", img: "assets/about/consultation-room.jpg" },
    { titleEn: "Maternal Health Tips", titleSo: "Talooyin Caafimaadka Hooyada", descEn: "Prenatal care and postpartum wellness.", descSo: "Daryeelka uurka iyo fayoobida dhalmada ka dib.", category: "Maternal", img: "assets/about/laboratory.jpg" }
];

const teamMembers = [
    { name: "Dr. Fartun Ali", roleEn: "Founder & Medical Director", roleSo: "Aasaasaha & Agaasimaha Caafimaad", img: "assets/doctors/Dr-Fartun-Ali.jpg" },
    { name: "Dr. Mohamed Hassan", roleEn: "Head of Pediatrics", roleSo: "Madaxa Carruurta", img: "assets/doctors/Dr-Mohamed-Hassan.jpg" },
    { name: "Ms. Halima Abdi", roleEn: "Head Nurse", roleSo: "Kalkaalisada Guud", img: "assets/doctors/Dr-Sahra-sse.jpg" }
];

let currentLang = 'en';

// Helper Functions
function getTranslation(key) {
    return translations[currentLang][key] || translations['en'][key];
}

function updateLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
    
    // Re-render dynamic content
    renderServices();
    renderDoctors();
    renderTestimonials();
    renderBlogs();
    renderWellness();
    renderTeam();
    populateDropdowns();
}

// Render Functions
function renderServices() {
    const grids = document.querySelectorAll('#servicesGrid, #allServicesGrid');
    grids.forEach(grid => {
        if (grid) {
            grid.innerHTML = servicesData.map(s => `
                <div class="service-card">
                    <div style="font-size: 3rem;">${s.icon}</div>
                    <h3>${currentLang === 'en' ? s.nameEn : s.nameSo}</h3>
                    <p>${currentLang === 'en' ? s.descEn : s.descSo}</p>
                </div>
            `).join('');
        }
    });
    
    const wellnessGrid = document.querySelector('#wellnessServicesGrid');
    if (wellnessGrid) {
        wellnessGrid.innerHTML = wellnessServices.map(w => `
            <div class="wellness-card">
                <i class="fas fa-heartbeat fa-2x"></i>
                <h3>${currentLang === 'en' ? w.nameEn : w.nameSo}</h3>
                <p>${currentLang === 'en' ? w.descEn : w.descSo}</p>
            </div>
        `).join('');
    }
}

function renderDoctors() {
    const grids = document.querySelectorAll('#doctorsGrid, #allDoctorsGrid');
    grids.forEach(grid => {
        if (grid) {
            grid.innerHTML = doctors.map(d => `
                <div class="doctor-card">
                    <img src="${d.img}" alt="${d.name}">
                    <h3>${d.name}</h3>
                    <p><strong>${currentLang === 'en' ? d.specialtyEn : d.specialtySo}</strong></p>
                    <p>${d.exp} ${currentLang === 'en' ? 'experience' : 'khibrad'}</p>
                    <p>🗣️ ${d.lang}</p>
                    <div class="rating">${'★'.repeat(Math.floor(d.rating))}${d.rating % 1 ? '½' : ''} (${d.rating})</div>
                    <button class="btn-outline" style="margin-top: 12px; padding: 6px 20px;" onclick="window.location.href='appointment.html'">${currentLang === 'en' ? 'Book' : 'Qabso'}</button>
                </div>
            `).join('');
        }
    });
}

function renderTestimonials() {
    const grid = document.querySelector('#testimonialsGrid');
    if (grid) {
        grid.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <i class="fas fa-quote-left fa-2x" style="color: var(--primary); margin-bottom: 16px;"></i>
                <p>"${currentLang === 'en' ? t.textEn : t.textSo}"</p>
                <h4 style="margin-top: 16px;">- ${t.name}</h4>
                <div>${'★'.repeat(Math.floor(t.rating))}</div>
            </div>
        `).join('');
    }
}

function renderBlogs() {
    const grids = document.querySelectorAll('#blogGrid, #allBlogsGrid');
    grids.forEach(grid => {
        if (grid) {
            grid.innerHTML = blogs.map(b => `
                <div class="blog-card">
                    <img src="${b.img}" alt="${currentLang === 'en' ? b.titleEn : b.titleSo}">
                    <h3>${currentLang === 'en' ? b.titleEn : b.titleSo}</h3>
                    <p>${currentLang === 'en' ? b.descEn : b.descSo}</p>
                    <span class="tag" style="display: inline-block; margin-top: 12px;">${b.category}</span>
                    <a href="#" style="display: block; margin-top: 16px; color: var(--primary);">${currentLang === 'en' ? 'Read more →' : 'Akhri wax dheeri ah →'}</a>
                </div>
            `).join('');
        }
    });

    const featured = document.querySelector('#featuredArticle');
    if (featured && blogs.length) {
        const b = blogs[0];
        featured.innerHTML = `
            <img src="${b.img}" alt="${currentLang === 'en' ? b.titleEn : b.titleSo}">
            <div>
                <span class="tag">${b.category}</span>
                <h2>${currentLang === 'en' ? b.titleEn : b.titleSo}</h2>
                <p>${currentLang === 'en' ? b.descEn : b.descSo}</p>
                <a href="#allBlogsGrid" class="btn-outline">${currentLang === 'en' ? 'Explore articles' : 'Eeg maqaalada'}</a>
            </div>
        `;
    }
}

function renderWellness() {
    const grid = document.querySelector('#wellnessGrid');
    if (grid) {
        grid.innerHTML = wellnessServices.map(w => `
            <div class="wellness-card">
                <i class="fas fa-spa fa-2x"></i>
                <h3>${currentLang === 'en' ? w.nameEn : w.nameSo}</h3>
                <p>${currentLang === 'en' ? w.descEn : w.descSo}</p>
            </div>
        `).join('');
    }
}

function renderTeam() {
    const grid = document.querySelector('#teamGrid');
    if (grid) {
        grid.innerHTML = teamMembers.map(t => `
            <div class="doctor-card">
                <img src="${t.img}" alt="${t.name}">
                <h3>${t.name}</h3>
                <p><strong>${currentLang === 'en' ? t.roleEn : t.roleSo}</strong></p>
            </div>
        `).join('');
    }
}

function populateDropdowns() {
    const doctorSelect = document.querySelector('#doctorSelect');
    const serviceSelect = document.querySelector('#serviceSelect');
    
    if (doctorSelect) {
        doctorSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Doctor' : 'Dooro Dhakhtar'}</option>` + 
            doctors.map(d => `<option value="${d.name}">${d.name} (${currentLang === 'en' ? d.specialtyEn : d.specialtySo})</option>`).join('');
    }
    
    if (serviceSelect) {
        serviceSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Service' : 'Dooro Adeeg'}</option>` +
            servicesData.map(s => `<option value="${currentLang === 'en' ? s.nameEn : s.nameSo}">${currentLang === 'en' ? s.nameEn : s.nameSo}</option>`).join('');
    }
}

// Handle Appointment Form
function setupAppointmentForm() {
    const form = document.querySelector('#appointmentForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('#patName')?.value;
            if (!name) {
                alert(currentLang === 'en' ? 'Please enter your name' : 'Fadlan gali magacaaga');
                return;
            }
            const msg = document.querySelector('#formMsg');
            if (msg) {
                msg.innerHTML = currentLang === 'en' ? '✅ Appointment request sent! We will contact you within 2 hours.' : '✅ Codsiga ballanka waa la diray! Waxaan kula soo xiriiri doonnaa 2 saac gudahood.';
                msg.style.color = '#2c7a6e';
                msg.style.background = '#e8f5f2';
                msg.style.padding = '12px';
                msg.style.borderRadius = '32px';
                form.reset();
            }
            setTimeout(() => { if(msg) msg.innerHTML = ''; }, 5000);
        });
    }
}

// Handle Contact Form
function setupContactForm() {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLang === 'en' ? 'Message sent! We will reply soon.' : 'Fariinta waa la diray! Waan ku soo jawaabi doonnaa.');
            form.reset();
        });
    }
}

// Handle Newsletter
function setupNewsletter() {
    const form = document.querySelector('#newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLang === 'en' ? 'Subscribed! Check your email for updates.' : 'Waad iska diiwaan gelisay! Hubi emailkaaga warka cusub.');
            form.reset();
        });
    }
}

// Dark Mode Toggle
function setupDarkMode() {
    const btn = document.querySelector('#darkModeBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', document.body.classList.contains('dark'));
        });
    }
    
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
}

// Language Switch
function setupLanguageSwitch() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                currentLang = lang;
                localStorage.setItem('language', lang);
                
                langBtns.forEach(b => b.classList.remove('lang-active'));
                btn.classList.add('lang-active');
                
                updateLanguage();
                
                // Update page title and meta if needed
                document.documentElement.lang = lang === 'so' ? 'so' : 'en';
            }
        });
    });
    
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'so')) {
        currentLang = savedLang;
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (activeBtn) {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('lang-active'));
            activeBtn.classList.add('lang-active');
        }
        updateLanguage();
    }
}

// Smooth Scroll for Anchor Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Apply translations to HTML elements with data-i18n
function applyTranslationsToMarkup() {
    // For static elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    setupDarkMode();
    setupLanguageSwitch();
    setupAppointmentForm();
    setupContactForm();
    setupNewsletter();
    setupSmoothScroll();
    
    // Initial render
    renderServices();
    renderDoctors();
    renderTestimonials();
    renderBlogs();
    renderWellness();
    renderTeam();
    populateDropdowns();
    applyTranslationsToMarkup();
});
