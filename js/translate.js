let txt = {
    en: {
        'about': 'About me',
        'service_one': 'Personal styling and shopping',
        'subservice_one': 'style & colour & body shape',
        'subservice_two': 'wardrobe detox, planing & outfitting',
        'subservice_three': 'personal shopping & styling',
        'subservice_four': 'special occasion styling',
        'portfolio': 'Portfolio',
        'editorial': 'editorial',
        'commercial': 'commercial',
        'main_title': 'Fashion Consultant and Personal Stylist',
        'main_subtitle': 'Creativity on your terms',
        'btn_sayhello': 'Say Hello',
        'typeServices': 'Types of services',
        'service_one_title': 'Fashion styling and Art Direction',
        'service_one_subtitle': 'Current portfolio of editorial commercial works',
        'btn_more_detail': 'More details',
        'service_two_title': 'Personal styling',
        'service_two_subtitle': 'Change the way you feel about your wardrobe,style, colour and shopping',
        'btn_more_details': 'More details',
        'aboutme': 'about me',
        'bio_list_title': 'What we can create together',
        'list_one': 'Fashion styling and concept creation for commercial and editorial shoots.',
        'list_two': 'Colour therapy and body analysis to define and create your authentic self.',
        'list_three': 'Wardrobe detox and outfit building to make dressing in the morning easy and to look stunning effortlessly.',
        'list_four': 'Personal shopping - keep the joy of finding exciting new things and fitting them into your wardrobe, learn how to be smart about you investments.',
        'list_five': 'When you need that one outfit to make you stand out. Focusing on the special event to make you feel confident and to make the occasions even more memorable.',
        'about_descr': 'London based, Moscow born, Olya is a fashion and personal stylist and consultant. Olya works with private clients, magazines and digital platforms. She started her journey by graduating from UAL where she studied Fashion Styling and Creative Direction. Olya is experienced in using colour therapy that can be applied in personal styling, wardrobe review and interior design. In her work, she likes to bring a mix of historic references and cultures and combine them with modern trends. The ingredients of her work are the creation of themes, concept, styling and creative direction. She creates stylish and contemporary images for editorial photoshoots and for private clients. Olya is available for Editorial, Advertorial, Commercial and Personal Styling.',
        'letstalk': 'let’s talk',
        'options': 'Service options:',
        'option_one': 'Fashion Styling and photoshoots',
        'submit': 'submit',
        'optional': '* Оptional',

    },
    ru: {
        'about': 'Обо мне',
        'service_one': 'Персональная стилистика и шоппинг',
        'subservice_one': 'Персональный разбор личного стиля и цветотипа',
        'subservice_two': 'детокс гардероба',
        'subservice_three': 'шоппинг сопровождение и создание новых образов',
        'subservice_four': 'стилизация и шоппинг для особых событий',
        'portfolio': 'Портфолио',
        'editorial': 'творческие работы',
        'commercial': 'коммерческая съемка',
        'main_title': 'Персональный стилист и модный консультант',
        'main_subtitle': 'Работать в области создания стиля – значит быть и психологом и художником. Я знакомлю вас с вашей личностью, а потом помогаю привести стиль в соответствие с содержанием и запросом.',
        'btn_sayhello': 'Вопросы сюда',
        'typeServices': 'Виды Услуг',
        'service_one_title': 'Стилизация съемок',
        'service_one_subtitle': 'От разработки креативного решения до координации точного воплощения.',
        'btn_more_detail': 'За деталями',
        'service_two_title': 'Персональный стилист',
        'service_two_subtitle': 'От создания личного стиля и анализа цветотипа до детокса гардероба и шоппинг сопровождения.',
        'btn_more_details': 'За деталями',
        'aboutme': 'обо мне',
        'bio_list_title': 'О ВАШИХ ЖЕЛАНИЯХ, КОТОРЫЕ Я УМЕЮ ИСПОЛНЯТЬ',
        'list_one': 'Модная съемка для СМИ и рекламы.',
        'list_two': 'Провожу цветотерапию личности и аналитику фигуры, чтобы определить ваш персональный стиль.',
        'list_three': 'Подбираю оптимальный гардероб для любого типа фигур и делюсь основными правилами для дальнейшего самостоятельного составления образов.',
        'list_four': 'Помогаю найти самые интересные и актуальные предметы для будущего гардероба. Моя задача, чтобы ни одна вещь в шкафу не лежала без дела!',
        'list_five': 'Создаю образы для особых событий в вашей жизни.',
        'about_descr': 'Меня зовут Оля, я  - персональный стилист и модный-консультант. Родилась в Москве, живу и работаю в Лондоне. Закончила Лондонский университет искусств по специальности  «Стайлинг и креативный менеджмент в индустрии моды». Сегодня я сотрудничаю с журналами и диджитал-платформами, а также частными клиентами. Разбираюсь в цветотерапии и всегда начинаю с нее, работая над персональным стилем и созданием гардероба, а также дизайном интерьера. Люблю использовать исторические и культурные коннотации и сочетать их с современными трендами. Подбираю стилевые решения, способные поднять самооценку способные сделать ваши отношения с собственным стилем понятнее и экономичнее. Придумываю и создаю концепты и стиль для съемок в СМИ и частных клиентов. Моя работа включает создание ключевой темы, общей стилизации проекта, а также координацию воплощения на каждом из этапов.',
        'letstalk': 'Поговорим?',
        'options': 'Выбрать услугу:',
        'option_one': 'Стилизация съемок ',
        'submit': 'Отправить Запрос',
        'optional': '* Не обязательно для заполнения',
    }
};

let lang;

document.getElementById('en').addEventListener('click', setLang.bind(null, 'en'));
document.getElementById('ru').addEventListener('click', setLang.bind(null, 'ru'));
  
  function setLang(lang){
    let p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }

    document.getElementById('en').classList.toggle('active');
      document.getElementById('ru').classList.toggle('active');
  }
  lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang));
  setLang(lang);