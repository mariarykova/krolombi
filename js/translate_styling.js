let txt = {
    en: {
        'about': 'About me',
        'portfolio': 'Portfolio',
        'editorial': 'editorial',
        'commercial': 'commercial',
        'subservice_one': 'style & colour & body shape',
        'subservice_two': 'wardrobe detox, planing & outfitting',
        'subservice_three': 'personal shopping & styling',
        'subservice_four': 'special occasion styling',
        'desc_title': 'Change your relationship with style or handpicked solutions with you in mind.',
        'text_one': 'You are a professional in how to deal with your day to day life but you probably don’t have much time to figure out what to wear, you try on multiple options and spend hours shopping online or in store. Your wardrobe and style is making you unhappy and you don’t really know where to start to change it?',
        'text_two': 'With professional help and honest unbiased opinions we will be able to find the best way of transforming your wardrobe and developing your style.',
        'text_three': 'I am a believer in defining one’s personal brand. You don’t need luxe brand to develop your own sense of style and start feeling good in your own skin. Your own brand is born out of an awareness of who you are, and ensuring your style represents that. During consultation my main goal is to identify your personal needs and desires and make them come to life. There is not one single solution for everyone but working together, we can identify the gaps and fill them with the bespoke solutions.',
        'text_four': 'By the end of our sessions you will get a more defined personal style with a multifunctional wardrobe that makes you feel happy and confident. You will learn how to shop smarter investing in forever pieces that work together; how to identify and adapt trends to your needs without simply following them. Be it a special occasion or staying at home - you will feel comfortable within your own skin.',
        'services': 'services',
        'service_one': 'style & colour & body shape',
        'text_five': 'Understanding your body shape and complexion type will change the way you dress and shop forever. The session will give you a complete understanding about your body type, what are the best, most flattering styles and fabrics that work specifically for you. It begins with an in-depth consultation to identify your clothing likes and dislikes, budget, lifestyle needs and your personal main preferences.We will conduct a colour and body shape analysis in order for you to know how to work with your own wardrobe and build outfits. We will use your existing items to demonstrate what works and why so you become more familiar with your own styling identity which will give you guidance on how to look for the best styling solution by yourself.',
        'text_six': 'This styling service is less about actual shopping, but more about giving you the knowledge of what works and what doesn’t work, which can then be applied in your future shopping - with or without stylist help.',
        'text_seven': 'This service is offered online or in person, depending on your preference, geographical location and other circumstances.',
        'text_eight': 'Each consultation is fully bespoke, depending on the time taken and the services offered. Indicatively prices would start at £150 for consultation. Prior to commencing any project I provide a full quote for the cost for my clients.',
    },
    ru: {
        'about': 'Обо мне',
        'portfolio': 'Портфолио',
        'editorial': 'творческие работы',
        'commercial': 'коммерческая съемка',
        'subservice_one': 'Персональный разбор личного стиля и цветотипа',
        'subservice_two': 'детокс гардероба',
        'subservice_three': 'шоппинг сопровождение и создание новых образов',
        'subservice_four': 'стилизация и шоппинг для особых событий',
        'desc_title': 'ИЗМЕНИТЕ ПОДХОД К СВОЕМУ СТИЛЮ И ГАРДЕРОБУ',
        'text_one': 'Если вы недовольны вашим гардеробом и стилем, но не знаете, с чего начать перемены, я совершенно точно могу быть вам полезна.',
        'text_two': '',
        'text_three': 'Я твердо верю в создание личного бренда. Необязательно использовать вещи от дорогих марок, чтобы комфортно чувствовать себя. Личный бренд рождается, когда вы понимаете, кто вы, а ваш стиль отражает это понимание. Моя главная цель во время консультации — определить ваши потребности и желания, а затем  воплотить их в жизнь с помощью гармоничного вам образа. Единого решения для всех не существует, но, работая вместе, мы сможем создать гардероб, ориентированный исключительно на вас. ',
        'text_four': 'К концу нашего сотрудничества вы будете четко понимать свой стиль, обладать  многофункциональным гардеробом и почувствуете себя увереннее в ваших отношениях с собственным стилем и выбором одежды. Вы научитесь покупать вещи «с умом», инвестируя в  одежду «вне времени», которая будет легко сочетаться между собой. Вы сможете определять тренды и адаптировать их под свои потребности, а не просто следовать им. Отталкиваясь от цветотипа и типа фигуры, вы научитесь работать со своим гардеробом и создавать многофункциональные комплекты одежды.',
        'services': 'услуги',
        'service_one': 'Определение цветотипа и анализ особенностей фигуры',
        'text_five': 'На этой сессии я помогу вам определить цветотип внешности и понять особенности вашей фигуры, после чего процесс подбора и покупки одежды изменится для вас навсегда. ',
        'text_six': 'Сначала мы определим, какая одежда вам нравится или не нравится, проанализируем потребности, исходя из вашего образа жизни, и зафиксируем комфортный бюджет.',
        'text_seven': 'Вместе разобравшись с кроями и фасонами, я  продемонстрирую, что вам подходит, и помогу понять вашу «стилевую идентичность». В дальнейшем это знание поможет вам создавать гармоничные образы  самостоятельно.',
        'text_eight': 'Я работаю с абсолютно разными клиентами, с непохожими образами жизни, фигурами и запросами, и верю, что каждому типажу нужен индивидуальный подход.',
        
      
        
    }
};

let lang;

document.getElementById('en').addEventListener('click', setLang.bind(null, 'en'));
document.getElementById('ru').addEventListener('click', setLang.bind(null, 'ru'));
  
  function setLang(lang) {
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