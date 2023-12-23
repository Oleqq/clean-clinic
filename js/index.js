
// свайперы swiper js --

//blog swiper
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.blog-swiper', {
        slidesPerView: 2,
        
        
        navigation: {
            nextEl: '.blog-swiper-button-next',
            prevEl: '.blog-swiper-button-prev',
        },
        breakpoints: {
            
            

            991: {
                spaceBetween: 64,
            },
            767: {
                spaceBetween: 32,
            },
            567: {
                spaceBetween: 16,
            },
            390: {
                spaceBetween: 10,
            },
            240: {
                spaceBetween: 10,
            }
        }
    });
});
// blog swiper

// product swiper
document.addEventListener('DOMContentLoaded', function () {
    // Проверка ширины экрана
    if (window.innerWidth <= 991) {
        var swiper = new Swiper('.product-swiper', {
            slidesPerView: 2,
            spaceBetween: 32,
            
            
            navigation: {
                nextEl: '.product-swiper-button-next',
                prevEl: '.product-swiper-button-prev',
            },
            breakpoints: {

                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                991: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 2,
                    spaceBetween: 32,
                },
                767: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 2,
                    spaceBetween: 0,
                },
                567: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                },
                467: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                367: {
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                },
                0: {
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                }

                
            }
        });
    }
});
// product swiper

// special-offer swiper
document.addEventListener('DOMContentLoaded', function () {
    // Проверка ширины экрана
    if (window.innerWidth <= 991) {
        var swiper = new Swiper('.special-offer-swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.special-offer-swiper-button-next',
                prevEl: '.special-offer-swiper-button-prev',
            },
            breakpoints: {

                991: {
                    slidesPerView: 2,
                    spaceBetween: 64,
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 6,
                },
                567: {
                    slidesPerView: 1,
                    
                }
            }
        });
    }
});
// special-offer swiper

// specialist swiper
document.addEventListener('DOMContentLoaded', function () {
    // Проверка ширины экрана
    if (window.innerWidth <= 991) {
        var swiper = new Swiper('.specialist-swiper', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.specialist-swiper-button-next',
                prevEl: '.specialist-swiper-button-prev',
            },
            breakpoints: {

                991: {
                    slidesPerView: 2,
                    
                },
                767: {
                    slidesPerView: 2,
                    
                },
            }
        });
    }
});
// specialist swiper

// hero swiper
document.addEventListener('DOMContentLoaded', function () {
    // Создание нового экземпляра Swiper
    const mySwiper = new Swiper('.hero__slider', {
        // Настройки Swiper
        slidesPerView: 1,
        
        pagination: {
            el: '.hero__pagination', // Местоположение пагинации
            clickable: true, // Делает пагинацию кликабельной
            type: 'bullets',
        },
    });
});
// hero swiper


// product-big swiper
document.addEventListener('DOMContentLoaded', function () {
    // Создание нового экземпляра Swiper
    const mySwiper = new Swiper('.product-big__slider', {
        // Настройки Swiper
        slidesPerView: 1,
        
        navigation: {
            nextEl: '.product-big-button-next',
            prevEl: '.product-big-button-prev',
        },
    });
});
// product-big swiper

// benefits swiper
document.addEventListener('DOMContentLoaded', function () {
    // Проверка ширины экрана
    if (window.innerWidth <= 991) {
        var swiper = new Swiper('.benefits-swiper', {
            slidesPerView: 'auto',
            slidesPerGroupAuto: true,
            spaceBetween: 0,
            
            navigation: {
                nextEl: '.benefits-swiper-button-next',
                prevEl: '.benefits-swiper-button-prev',
            },
            breakpoints: {

                
            }
        });
    }
});
// benefits swiper

// свайперы swiper js -- end



// burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const overlayMenu = document.querySelector('.overlay-menu');
    const body = document.querySelector('body');
    const burgerTitle = document.querySelector('.burger-menu__title');

    // Функция для открытия/закрытия меню
    function toggleMenu() {
        overlayMenu.classList.toggle('active');
        body.classList.toggle('fixed');
        // Изменение иконки в зависимости от состояния меню
        if (overlayMenu.classList.contains('active')) {
            burgerMenu.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M1 24L23.884 1.22658" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1.11621 1L24.0002 23.7734" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        } else {
            burgerMenu.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="19" viewBox="0 0 46 19" fill="none">
                    <rect y="8" width="46" height="3" rx="1.5" fill="#363636"/>
                    <rect x="16" width="30" height="3" rx="1.5" fill="#363636"/>
                    <rect y="16" width="30" height="3" rx="1.5" fill="#363636"/>
                </svg>
            `;
        }
    }

    // Обработчик события клика на иконку бургер-меню
    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Обработчик события клика на элемент burger-menu__title
    burgerTitle.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Обработчик события клика вне меню (закрытие меню)
    document.addEventListener('click', function(event) {
        if (!overlayMenu.contains(event.target) && overlayMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
// burger

// pop up
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openPopupButtons = document.querySelectorAll('.popup__button');

    // Функция для открытия поп-апа
    function openPopup() {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона при открытом поп-апе
    }

    // Функция для закрытия поп-апа
    function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = ''; // Восстановление прокрутки фона
    }

    // Добавляем обработчик клика на каждую кнопку
    openPopupButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        openPopup();
    });
    });

    // Обработчик события для закрытия поп-апа по клику на крестик
    document.getElementById('closeBtn').addEventListener('click', closePopup);

    // Обработчик события для закрытия поп-апа по клику вне области поп-апа
    window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
    });


});
// pop up


