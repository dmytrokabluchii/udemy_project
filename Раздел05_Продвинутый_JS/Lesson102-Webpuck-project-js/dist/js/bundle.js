/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {
    // Lesson 97-98. Создаем калькулятор на сайте
    const calcResult = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    // Установим в localStorage введенные польз-м значения и значения по дефолту
    if (localStorage.getItem('sex')) {
        // то заносим эти знач0я в перем-ю sex
        sex = localStorage.getItem('sex');
    } else {
        // если такого значения нет, мы вручную задаем то знач-е кот-е нас интересует
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if (localStorage.getItem('ratio')) {
        // то заносим эти знач-я в перем-ю sex
        ratio = localStorage.getItem('ratio');
    } else {
        // если такого значения нет, мы вручную задаем то знач-е кот-е нас интересует
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    // Фун-я при заходе на стр-цу будет очищать класс активности у кнопок и во время перебора элементов
    // будет проверять когда кнопка совпадет по значению, с ratio например, запис-му с localStorage
    // то на эту кнопку будем навешивать класс активности
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            // Сначала удалим у элементов класс активности
            elem.classList.remove(activeClass);
            // Переберем элементы с id и если id будет = значению что наход. в localStorage 'sex'
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                // и если условие выше хоть раз выпол-ся то данному элементу мы назначим класс-активности
                elem.classList.add(activeClass);
            }
            // Далее проверим элементы с атрибутами
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                // И если знач-я выше совпадают то элементу(блоку) мы назн-м класс активности
                elem.classList.add(activeClass);
            }
        });
    }
    // Запускаем фун-и с 2 арг-ми, тоже самое делали с фун-й getStaticInformation
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
 
    // Фун-я общего вычисления калорий, должна вызыв-я каждый раз когда на стр-це проис-т измен-е
    function calcTotal() {
        // если у нас нет(не введено), т.е. если хот-бы одно их этих условий выпол-ся(будет false)
        if (!sex || !height || !weight || !age || !ratio) {
            // то тогда мы не будем рассчит-ть
            calcResult.textContent = '____';
            // далее досрочно прервем фун-ю
            return; 
        }
        // если же все данные будут заполнены, то
        if (sex === 'female') {
            // Формула расчета базовой нормы калорий:
            // для женщин: BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)
            // Метод Math.round() возвращает число, округлённое к ближайшему целому.
            calcResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            // для мужчин: BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)
            calcResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();

    // Фун-я получ-я статических данных по калориям и перекл-ю активности, в уроке 98 немного доработали ее
    function getStaticInformation(selector, activeClass) {
        // получаем все div элементы внутри родителя
        const elements = document.querySelectorAll(selector);
        // Исправ-м баги при клике на поля вне кнопок
        elements.forEach(elem => {
            // далее отслеж-м клики по родит-му элементу(parentSelector) кот-й содер-т все div и
            // испол-ть при этом будем делегир-е событий
            elem.addEventListener('click', (e) => {
                // если при клике на элемент он содержит атрибут ...
                if(e.target.getAttribute('data-ratio')) {
                    // то мы получ-м значение этого атрибута как число
                    ratio = +e.target.getAttribute('data-ratio');
                    // занесем в localStorage записанные полз-м данные
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    // если у элемента не будет атрибута, то получ-м знач-е id элемента
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                // Т.к. выше мы уже получили все знач-я элементов, нам нужно поработать с классами активности
                // сначала удалим все классы активности у элем-в, а потом назначим только тому кот-й нужен
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                // и тому элементу на кот-й кликнули назнач-м класс активности
                e.target.classList.add(activeClass);
                // В конце каждой из фун-й вызываем calcTotal(), что-бы примен-сь измен-я на стр-це
                calcTotal();
            });
        });
    }
    // теперь нам нужно запустить фун-ю выше с 2 статич. элементами, где 1-м арг-м идет блок с id="gender"
    // а 2-м наш класс активности
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    // При 2-м вызове укажем нашего родителя, класс активности при этом не меняется
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    // Далее созд-м фун-ю кот-я будет обраб-ть каждый отдел-й input
    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);
        // Событие input срабатывает каждый раз при изменении значения.
        input.addEventListener('input', () => {
            // Если мы видим в input что-то кроме чисел, исправить это можем испол-я РВ
            if (input.value.match(/\D/g)) {
                // то бордер делаем красным, иниче убераем его
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            // когда польз-ль что-то вводит. Конструкция switch заменяет собой сразу несколько if.
            switch(input.getAttribute('id')) {
                // если наш input с id = height
                case 'height':
                    // то запис-м в нее знач-е кот-е ввел польз-ль и прерыв-м операцию(break)
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
        // В конце каждой из фун-й вызываем calcTotal(), что-бы примен-сь измен-я на стр-це
        calcTotal();
        });
    }
    // Далее нам нужно выз-ть фун-ю выше с 3-мя разными селекторами
    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');

}
module.exports = calc;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

function cards() {
    // Lesson 79. Используем классы в реальной работе
    // Задача: шаблонизировать карточки с меню и созд-ть их перед-я только нужные аргум-ты
    // Для этой задачи будем испол-ть классы и создан-е динамич-х элементов на стр-це с перед-й аргум-в
    // В ...classes испол-м оператор rest из Lesson 80. Т.к. мы не знаем сколько еще может добав-ся аргум-в
    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
            // в this.parent помещаем DOM элемент(нащего родителя в верстке) кот-й в дальн-м мы сможем испол-ть
            this.parent = document.querySelector(parentSelector);
            // сюда запишем статич-й курс валют(в будущем можно поменять если курс будет прих-ть от сервера)
            this.transfer = 27;
            // вызовем метод ниже changeToUAN() что-бы он уже верн-л нам прав-е значение
            this.changeToUAN();
        }
        // добавим метод кот-й будет заниматься конвер-й валюты
        changeToUAN() {
            this.price *= this.transfer;
        }
        // здесь мы сфор-м нашу верстку(елементы куда помещ-ся отпер-я верстка), потом допол-ть
        // верстку данными кот-е прих-т от аргум-в и поместить элемент на стр-цу
        render() {
        // сформир-м сам div элемент куда мы поместим нашу верстку
        const element = document.createElement('div');
        // если мы ничего не перед-м в ...classes
            if (this.classes.length === 0) {
                // тогда мы будем ставить дефолт-й класс
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                // т.е. если не было передано ни одного класса сформ-м их самост-но
                // т.к. в classes у нас будет наход-ся массив елементов(его вернет оператор ...rest), переб-м его
                this.classes.forEach(className => element.classList.add(className));
            }     
            // innerHTML позво-т нам динам-ки сформир-ть HTML стр-ру наших карточек
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">
                ${this.description}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            // помещ=м наш элемент во внутрь родителя
            this.parent.append(element);
        }
    }

    // Созд-м фун-ю для получ-я наших карточек
    const getResource = async (url) => {
        // Тут мы просто делаем запрос через fetch() и дожидаемся его окончания
        const res = await fetch(url);
        // Promise возвращаемый вызовом fetch() не перейдёт в состояние "отклонено" из-за ответа HTTP, т.е. не выдаст ошибку!!!
        // и этот момент нам нужно предусмотреть и сделать спец. условие
        if (!res.ok) {
            // здесь мы познакомимся с объектом ошибки new Error, во внутрь которой () помещаем текст ошибки
            // и чтобы эта ошибка выпала из фун-и есть спец. оператор throw, т.е. мы выкидываем новую ошибку
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        // трансфор-м данные получ-е выше с перем-й в обычный json-объект
        return await res.json();
    };

    // Пересоберем наши карточки new MenuCard()  Lesson 90
    /* getResource('http://localhost:3000/menu')
    // далее обрабат-м наш ответ с сервера, он(data) к нам приходит уже в транфор-м виде объекта(т.е. массива)
    .then(data => {
        // переб-м все элементы получ-го массива(а он в свою очередь сост. их объектов)
        // Ниже испол-м синтаксис деструктур-и объекта - это когда мы из объекта(db.json) вытаск-м отдел-е св-ва в качестве 
        // отдел-й перем-й {img}. И теперь нам не нужно пост-но обращ-ся к obj
        data.forEach(({img, altimg, title, descr, price}) => {
            // т.е. это конст-р будет созд-ся столько раз сколько у нас будет объектов внутри массива, кот-й приходит от сервера
            // В '' помещаем родителя, т.е. куда мы будем все это пушить
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    }); */

    // Lesson 91. Библиотека axios. Отправим запрос этим методом, в () помещаем наш URL-адресс
    axios.get('http://localhost:3000/menu')
        // .then(data => console.log(data));  // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
        // Т.е. выше она вернет нам все данные о нашем запросе в виде уже готового обычного объекта
        // переб-м все элементы получ-го массива(а он в свою очередь сост. их объектов)
        // Ниже испол-м синтаксис деструктур-и объекта - это когда мы из объекта(db.json) вытаск-м отдел-е св-ва в качестве 
        // отдел-й перем-й {img}. И теперь нам не нужно пост-но обращ-ся к obj
        .then(data => { 
            // небол-е измен-е, нам нужно обрат-ся к данным кот-е мы получили от axios (data.data), а не к объекту с общей инфо
            // это поведение описано в докумен-и к axios
            data.data.forEach(({img, altimg, title, descr, price}) => {
            // т.е. это конст-р будет созд-ся столько раз сколько у нас будет объектов внутри массива, кот-й приходит от сервера
            // В '' помещаем родителя, т.е. куда мы будем все это пушить
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
        

    // Есть еще 2-й альтернативный вариант создания динамических элементов на стр-це
    // Он часто испол-ся, но не формир-т классы, а испол-т верстку на лету:
    /* getResource('http://localhost:3000/menu')
    // далее вызовем сформир-ю ниже фун-ю и в () добавим данные кот-е она будет отраб-ть(data, т.е. то что прих-т с сервера)
    .then(data => createCard(data));
    // далее когда мы получ-м данные нам нужно запустить фун-ю, кот-я будет созд-ть карт-ки на стр-це
    // При этом допустим что у нас нет никакго шаблона(шаблонизации) и карточки нам нужно сфор-ть только один раз
    // При этом мы созд-м фун-ю, но это будет фун-я уже, а не класс
    function createCard(data) {
        data.forEach(({img, altimg, title, descr, price}) => {
            // т.к. у нас нет никакой шаблонизации все элементы созд-м тут внутри
            const element = document.createElement('div');
            // назнач-м класс елементу выше
            element.classList.add('menu__item');
            // далее во внутрь элемента просто помещаем верстку
            element.innerHTML = `
                <img src=${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
            `;
            // Далее нам нужно поместить куда-то тот элемент что только-что создали
            document.querySelector('.menu .container').append(element);
        });
    } */

}
module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    // Lesson 84 Реализация скрипта отправки данных на сервер
    // Forms
    const forms = document.querySelectorAll('form');
    // Создадим объект со списком фраз которые мы будем испол-ть в коде далее. 
    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, Скоро мы с вами свяжемся',
        failure: 'Ошибка, что-то пошло не так'
    };
    // берем все наши формы и под каждую из них подвяз-м фун-ю postData. Объект FormData имеет метод forEach
    forms.forEach(item => {
        // эта фун-я и будет обработ-м события при отправке
        bindPostData(item);
    });

    // Lesson 90. Получение данных с сервера. Async/Await (ES8)
    // Фун-я postDada настр-т наш запрос, посылает его на сервер(через fetch), получ-т ответ от сервера(удачный или нет) 
    // и потом транфор-м этот ответ в json. На данном этапе мы имеем асинх-й код и что-бы эта фун-я правильно работала 
    // и не выдавала ошибок нам нужен как бы "синх-й" код, тут нам и поможет констр-я Async/Await(подр-е в коде ниже).
    // async - ставит-ся перед функ-й и делает ее асинх-й, а await - значит "подожди", т.е. он ставится перед той опрацией(кодом)
    // выпол-е кода которой нужно дождаться, например подождать пока не прийдет данные в перем-ю res от сервера в методе fetch.
    // Испол-м синтаксис Function Expression, т.е. присв-е фун-и в обычную переменную, где url соот адресс, 
    // а data - данные кот-е будут постится в этой функ-и
    const postDada = async (url, data) => {
        // Во внутрь перем-й поместим промис кот-й возвр-ся от fetch()
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            // 
            body: data
        });
        // В перем-й res у нас будет наход-ся промис, кот-й мы обработ-м уже как json-формат
        // Мы не знаем каким большим будет промис(т.е. объект с данными что вернется) и сколько времени нужно будет чтобы
        // перевести его в обычный объект и чтобы додж-ть выпол-я этой части кода испол-и и тут await перед перем-й res
        return await res.json();
    };

    // Функ-я отвеч-я за привязку к постингу данных с сервера(в Lesson 90 переим-м ее)
    function bindPostData(form) {
        // навеш-м событие 'submit' и оно будет сраб-ть каждый раз когда форма отправ-ся
        form.addEventListener('submit', (e) => {
            // отмен-м станд-е поведение браузера(у нас это перез-ка при отправке данных)
            e.preventDefault();
            // Созд-м и показываем блок с соот. сообщение о ...
            const statusMessage = document.createElement('img');
            // подгруж-м нашу svg картинку. Атрибут src подгр-м из message.loading
            statusMessage.src = message.loading;
            // примен-м css стили к картинке
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // width: 38px;
            // height: 38px;
            // form.append(statusMessage);  // изменили в lesson 85
            form.insertAdjacentElement('afterend', statusMessage);

            // для отправки данных с формы есть два способа, 1-й: Объект FormData 2-й: JSON формат
            // какой выбрать зависит во многом от сервера(какой формат передачи данных он поддер-т)
            const formData = new FormData(form);

            // 2-й: JSON формат(в lesson 90 модиц-м код ниже)
            // Метод Object.entries(obj) – возвращает массив пар [ключ, значение]. И далее из получ-ся стр-ры сделаем обыч. объект
            // Испол-м для этого метод Object.fromEntries. А JSON.stringify превр-т все уже в json-объект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // Ниже перед .then испол-м нашу фун-ю postDada, во внутрь() кот-й поместим URL-адресс и body который пойдет на сервер
            // где в body мы из обыч. объекта делаем JSON-объект и далее отправ-м его на сервер
            postDada('http://localhost:3000/requests', json)
            // теперь нам нужно обработать результат нашего запроса, при помощи промисов
            // где data это как раз те данные что возвр-ся у нас из промиса, т.е. те что нам вернул сервер
            .then(data => {
                // После отправки данных с формы мы увидим их не только в консоли но и в нашем db.json в объекте "requests"
                // И в будущем эти данные мы сможем испол-ть, если они нам будут нужны.
                console.log(data);      // {name: 'Вероника', phone: '+38 (067) 902-42-38', id: 1}
                // меняем сооб-е с объекта на .success
                showThanksModal(message.success);
                // чтобы надпись исчезла через время
                    statusMessage.remove();
            // И что-бы обработ-ть возможные ошибки пропишем метод catch()
            }).catch( () => {
                // если запрос не прошел то
                showThanksModal(message.failure);
            // И в самом конце пропишем метод finally() для очистки нашей формы после отправки
            }).finally( () => {
                // очищаем нашу форму после отправки, метод reset() делает это
                form.reset();
            });
        });
    }

    // Lesson 85. Красивое оповещение пользователя, Spinner
    function showThanksModal(message) {
        // Получаем блок modal__dialog
        const prevModalDialog = document.querySelector('.modal__dialog');
        // скрываем временно блок при помощи стилей
        prevModalDialog.classList.add('hide');
        // запустим фун-ю openModal() отвеч-ю за откр-е модал-х окон
        openModal();
        // Созд-м блок-обертку для нашего окна и задаем ему необ. классы
        const thanksModal = document.createElement('div');
        // Т.е мы один modal__dialog заменяем другим
        thanksModal.classList.add('modal__dialog');
        // Далее просто формир-м верстку кот-я будет наход-ся в данном модал. окне
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        // получ-м модал окно и помещаем его на стр-цу
        document.querySelector('.modal').append(thanksModal);
        // и чтобы наше старое модал окно отображалось, удалим thanksModal через 5 сек и соот. покажем prevModalDialog
        setTimeout( () => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            // и в конце закрываем модал-е окно
            closeModal();
        }, 5000);
    }

    // Lesson 89 - работа с JSON-Server
    // Подключаем наш JSON файл(db.json далее заменим его на http://localhost:3000/menu) испол-я метод fetch, 
    fetch('http://localhost:3000/menu') 
    // fetch возвр-т промис и мы его обраб-м метом .then()
    // где data - это наш ответ от сервера, а далее просто превратим его в js-объект - (data.json())
    .then(data => data.json())
    // далее берем тот резул-т кот-й получится (res) и просто выведем его в консоль
    .then(res => console.log(res));   // {menu: Array(3), requests: Array(0)}
    // в консоли мы видим объект с массивами данных внутри, кот-е нам нужны будут в будущем при постороении карточек меню(menu)
    // в объект requests при этом мы будем уже постить данные и для этого нам нужны будут POST-запросы и соот. устан. JSON-Server
    // после запуска сервера командой: npx json-server db.json  мы увидем такие энпойнты, пути куда можно делать запросы:
    // http://localhost:3000/menu http://localhost:3000/requests
    // для дальнейшей работы с этим сервером мы скопируем адресс http://localhost:3000/menu и подставим его уже вместо 
    // назван-я файла ('db.json') в fetch
    // И в резул-те в консоли мы увидим уже не объект а массив: [{…}, {…}, {…}] т.к. мы обратились уже к /menu, а это уже массив
    // В будущем нужно будет запускать и локальный сервер и JSON-Server для работы с этим и др. проектами!
}
module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
    // Modal Lesson 72. Создаем модальное окно
    // Пропишем функионал модал. окна и пропишем его сразу на несколько триггеров. 
    // Триггеры это те элементы что вызывают последующие действия. 
    // Пропишем data-атрибуты(data-modal) в html нужным конопкам, тоже самое сдел-м и с закрытием окна,
    // на нужный нам div повесим data-close
    const btnModalOpen = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');
        //   btnModalClose = document.querySelector('[data-close]');
          
    // фун-я открыв-я модал. окно
    function openModal() {
        // показыв-м и скрываем наше мод. окно, т.е. актив-м соот. css классы + есть вариант с toggle
        modalWindow.classList.add('show', 'fade-modal');
        modalWindow.classList.remove('hide');
        // альтерн-й вариант с toggle
        // modalWindow.classList.toggle('show');
        // когда мы откр-м модал. окно у нас добав-ся стиль не позвол-й прокручивать стр-цу
        document.body.style.overflow = 'hidden';
        // если польз-ль уже открывал модал.окно - обнулим таймер в перем-й
        clearInterval(modalTimerId);
    }
    // переберем наши кнопки btnModalOpen чтобы мы могли с любой кнопки откр-ть модал.окно
    btnModalOpen.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Фун-я закрывающая мод. окно
    function closeModal() {
        // скрываем и показыв-м наше мод. окно
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        // альтерн-й вариант с toggle
        // modalWindow.classList.toggle('show');
        // восстанав-м скролл на стр-це после закрытия, если остав-м '' то браузер сам решит что ставить по дефолту
        document.body.style.overflow = '';
    }
    // только после сраб-я клика у нас выпол-ся фун-я closeModal
    // btnModalClose.addEventListener('click', closeModal);
    // реал.функ-л закрытия модал. окна по клику вне мод. окна
    // вешаем обраб-к клика на модал-е окно, где в () в callback фун-и помещ-м обьект события(e или event)
    modalWindow.addEventListener('click', (e) => {
        // e.target - куда кликнул польз-ль или "крестик"
        // т.е. если этот атрибут 'data-close' будет при клике мы закроем модал. окно
        if(e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    // реал-м функ-л закрытия модал. окна по нажатию на кнопку клав-ры ESC
    // Событие keydown срабатывает, когда клавиша была нажата.
    document.addEventListener('keydown', (e) => {
        // у нашего объекта событие (e) есть св-во .code, кот-е может отслеж-ть код нашей клавиши
        // code – физической код клавиши на клавиатуре; для клав-ши ESC это будет 'Escape'
        // есть спец.сайты где можно узнать как имен-ся необ. клавиша по нажатию на нее https://www.toptal.com/developers/keycode
        // и чтобы фун-я пост-я не запус-ст когда мы нажимаем ESC в условие добавим доп. проверку
        // Метод Node.contains() возвращает Boolean значение, указывающее, является ли узел потомком данного узла, 
        // т.е. проверяет, находится ли элемент ('show') в теле страницы.
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Lesson 73 продол-е. 1.Через опред-й промежуток времени в () нам нужно поместить фун-ю 
    // открытию модал. окна и указать время через окно появится с момента захода на наш сайт
    const modalTimerId = setTimeout(openModal, 500000); 
    // чтобы при пролистывании до конца мод. окно постоянно не вылазило созд-м фун-ю 
    function showModalByScroll() {
        // 2.Когда пользов-ль долистал стр-цу до конца появляется модал-е окно
        // Свойство Element.scrollHeight (только чтение) - измерение высоты контента в элементе, 
        // включая содержимое, невидимое из-за прокрутки.
        // pageYOffset - свойство окна Window , доступное только для чтения. Это то же свойство, что и scrollY и, 
        // как таковое, оно тоже возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх).
        // window.pageYOffset - это прокруч-я часть
        // Document.documentElement - свойство только для чтения, которое возвращает элемент Element(тема парам-ры докум-а)
        // document.documentElement.clientHeight - это видимая часть которую мы прямо сейчас видим на сайте(без прокрутки)
        // document.documentElement.scrollHeight - значит что польз-ль долистал до конца стр-цы
        // -1 (px) указыв-м чтобы не было возможных багов в некот-х браузерах
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            // чтобы при пролистывании до конца окно постоянно не вылазило
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // чтобы удал-ть обраб-к события нужно делать и ссылку на фун-ю кот-я испол-сь и это showModalByScroll
    window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
    // Slider 92. Создаем слайдер на сайте
    const slider = document.querySelector('.offer__slider'),
          slides = slider.querySelectorAll('.offer__slide'),
          arrowPrev = slider.querySelector('.offer__slider-prev'),
          arrowNext = slider.querySelector('.offer__slider-next'),
          currentSliderCounter = slider.querySelector('#current'),
          totalSliderCounter = slider.querySelector('#total'),
          slidesWrapper = slider.querySelector('.offer__slider-wrapper'),
          slidesField = slider.querySelector('.offer__slider-inner'),
        // Метод Window.getComputedStyle() возвр-т объект, содер-й знач-я всех CSS-свойств элемента
        // Где в () наход-ся наша общая обертка для слайдов
        // window.getComputedStyle(slidesWrapper) вернет нам объект с CSS-свойствами и мы возм-м с него ширину
          width = window.getComputedStyle(slidesWrapper).width;

    // Индекс опред-й полож-е в текущем слайде, где 1 это номер нашего слайда
    let slideIndex = 1;
    // Для работы с отступами, чтобы мы знали насколько отступили влево-вправо
    let offset = 0;

    // Отображаем или нет 0 в общем счетчике слайдов
    if (slides.length < 10) {
        // .textContent - Позволяет задавать или получать текстовое содержимое элемента и его потомков.
        totalSliderCounter.textContent = `0${slides.length}`;
        currentSliderCounter.textContent = `0${slideIndex}`;
    } else {
        totalSliderCounter.textContent = slides.length;
        currentSliderCounter.textContent = slideIndex;
    }

    // Устан-м ширину блоку в 100%
    // Т.е. мы помещ-м все слайды что есть на стр-це(slides.length) во внуть slidesField и чтобы они все помес-сь полностью
    slidesField.style.width = 100 * slides.length + '%';
    // Установ-м блоку slidesField css св-во display: flex;
    slidesField.style.display = 'flex';
    // Добавим плавности блоку при перек-и слайдов и далее скроем неиспол-е слайды
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    // Переб-м все слайды на стр-це, где внутри нах-ся каждый отдел-й слайд (slide)
    slides.forEach(slide => {
        // И каждому слайду устнан-м опред-ю ширину что нас интересует. В рез-те мы будем уверены что все слайды будут
        // одинаковой ширины и все они помес-ся в перем-ю slidesField
        slide.style.width = width;
    });

    // Lesson 94 Сделаем индикаторы(буллеты) для нашего слайдера
    // Теперь все элементы внутри слайдера что абсол-но спозиц-ны будут норм. отображ-ся
    slider.style.position = 'relative';
    // Создадим блок 'ol' для наших индикаторов и добавим ему класс
    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    // Вставим Css стили для наших индикаторов испол-я .cssText
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    // Далее размещ-м этот блок на стр-це, т.е append наши indicator в блок slider
    slider.append(indicators);
    // Созд-м необ-е нам кол-во буллетов. Цикл закон-ся тогда когда конч-ся слайды(slides.length)
    for (let i = 0; i < slides.length; i++) {
        // Созд-м точки и добавим им атрибут c нумерацией нач-я с 1(i + 1), т.к. 1-й слайд - 1-я точка
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        // И для красивого отображения добавим им Css стили
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        // Добавим подсветки активности буллетам при соот. слайде
        if(i == 0) {
            dot.style.opacity = 1;
        }
        // Далее аппендим их в наш 
        indicators.append(dot);
        // Далее мы получим массив с нашими буллетами
        dots.push(dot);
    }

    // Фун-я превр-я строку в числов. тип данных и вырезающая все не числа, испол-ся регул-е выражения
    // /\D/g - где \D это не числа, а g глобал-ть, т.е. мы заменим все не числа на пустую строку'', т.е. удалим их
    function doNumberFromString(str) {
        return +str.replace(/\D/g, '');
    }

    // Назначим обраб-к события для передвижения нашего слайдера, на кнопку Next
    arrowNext.addEventListener('click', () => {
        // И когда слайдер долистает до конца, мы должны вернуть его в начал-е положение
        // Если отступ(offset) будет равен ширине 1 слайда * на кол-во слайдов -1, то мы устан-м offset в 0
        // В width у нас будет наход-ся нечто '500px' и нам нужно будет прев-ть его в число и вырезать px
        if (offset == doNumberFromString(width) * (slides.length -1)) {
            offset = 0;
            // Если это будет не последний слайд, нам нужно будет добавить смещение
        } else {
            // offset +=  +width.slice(0, width.length - 2);
            offset +=  doNumberFromString(width);
            // Т.е. когда мы кликаем на стрелку Next к offset добав-я ширина еще одного слайда и слайд смест-ся на опредю велич-у
        }
        transformSlidesLeft();
        // При перем-и слайдов мы также должны контр-ть slideIndex в Счетчике. Если мы дошли до конца слайда(slides.length)
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        showZeroInCounterSlider();
        setStyleDots();

    });

    // Далее сделаем немного схожие действия для кнопки arrowPrev
    arrowPrev.addEventListener('click', () => {
        // изменим условие, когда у нас будет ровно 1-й слайд (offset == 0), мы перем-я в самый конец
        if (offset == 0) {
            // т.е. в пере-ю offset мы запишем наш посл-й слайд вычисл-й по след-й формуле
            offset = doNumberFromString(width) * (slides.length -1);
            // И если это был не 1-й слайд то знач-е нужно отнимать
        } else {
            offset -=  doNumberFromString(width);
        }
        transformSlidesLeft();
        // При перем-и слайдов мы также должны контр-ть slideIndex в Счетчике.
        // Если мы на 1-м слайде, то при клике на кнопку пред-го слайда мы будем смещ-ся в самый конец
        if (slideIndex == 1) {
            slideIndex = slides.length;
            // кол-во слайдов соот. умен-ся при нажатии
        } else {
            slideIndex--;
        }
        showZeroInCounterSlider();
        setStyleDots();
    });

    // Далее нам нужно на наши буллеты добавить перек-е слайдов при клике
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            // при клике на соот. буллет у нас в slideIndex пойдет соот номер буллета(1 или 5 и тд)
            slideIndex = slideTo;
            // в пере-ю offset мы запишем наш посл-й слайд вычисл-й по след-й формуле
            // где doNumberFromString(width) - общая ширина при расчете
            offset = doNumberFromString(width) * (slideTo -1);
            transformSlidesLeft();
            showZeroInCounterSlider();
            setStyleDots();
        });
    });
    
    // Фун-я перебора массива буллетов dots, где каждой точке dot устанав-м инлайн-стили
    function setStyleDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    } 
    // Фун-я отображения 0 в счетчике слайдов
    function showZeroInCounterSlider() {
        if (slides.length < 10) {
            currentSliderCounter.textContent = `0${slideIndex}`;
        } else {
            currentSliderCounter.textContent = slideIndex;
        }
    }
    // Фун-я делаем смещение сашего слайдера, для смешения влево в css мы указ-м отриц. знач-я
    function transformSlidesLeft() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }
}
module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
    // Lesson 64. Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
    // родитель кот-й будет содер-ть все наши табы(тема делегирование событий)
          tabsParent = document.querySelector('.tabheader__items');

    // делаем фун-ю(она может быть универсальной) где скрываем все ненуж-е нам табы!
    function hideTabContent() {
        // т.к. это псевдомассив нам его нужно перебрать, где item - это каждый отдел-й контент
        tabsContent.forEach(item => {
                // т.е. добав-м к item css стиль - display = 'none', кот-й скрывает контент
                // item.style.display = 'none';
            // чтобы добавить анимацию при перек-и табов нам нужны будут css классы при перек-и, а не inline стили испол-е выше
            // класс 'hide' прячет контент (display = 'none')
            // класс 'show' показ-т контент (display = 'block')
            // класс 'fade' у нас отвеч-т за анимацию
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        // убер-м класс активности у всех табов которые нам не нужны будут
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // теперь делаем фун-ю которая будет показывать нам таб-контент(она может быть универсальной)!
    // где i - это элемент(номер) к кот-му мы обращ-ся и кот-й нужно будет показать.
    // в ES6 есть такой функционал где мы можем устан-ть значение по умолчанию уже в нашей фун-и! 
    // Т.е. если мы выз-м фун-ю без аргум-та, то у нас вместо i будет подст-ся 0. Т.е. i мы сразу присв-м 0 !
    function showtabContent(i = 0) {
            // испол-м inline стили при перекл-и, но также в перек-и часто испол-т и классы(далее рассмотрим)
            // tabsContent[i].style.display = 'block';
        // для того что бы у нас работали классы и соот. анимация заменим пример выше на:
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    // чтобы фун-и выше заработали не забываем их вызывать после!
    hideTabContent();
    // арг-м в() устан-м в фун-и по умолчанию, т.е. 0, в ES6 функ-и мы можем сразу присв-ть 0, (i = 0)
    showtabContent();

    // испол-я делегирование, созд-м событие на клик
    tabsParent.addEventListener('click', (event) => {
        // если мы часто будем испол-ть событие event.target мы можем опред-ть его в перем-ю
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            // методом перебора делаем расп-е куда кликнул польз-ль и подст-м соот. по номеру элемент для показа
            // где item - это каждый таб что бы будем передавать, а i - это номер элемента по порядку(согласно синтаксису метода)
            tabs.forEach((item, i) => {
                // если target(тот элемент в кот-й мы кликнули) будет совпадать с элементом что мы перебираем
                if(target == item) {
                    // вызыв-м 2 фун-и т.к. при перекл-и мы должны скрыть остальные и ост-ть только нужную
                    hideTabContent();
                    // где в i хранит-ся нужный нам номер по порядку
                    showtabContent(i);
                }
            });
        }
    });
}
// Далее просто экспортируем эту функ-ю в модули
module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    // Lesson 69. Timer + Lesson 70. Обработка прошедшей даты
    // в перем-ю поместим дату в виде строки, это будет наша отправ-я точка
    const deadline = '2022-12-08';

    // 1-я фун-я! опред-я разницу между deadline и нашим текущим временем, т.е разницу между датами
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        // нам нужно превр-ть строку в нечно осязаемое, испол-м Date.parce
        // получ-и кол-во мс в нашем конеч-м времени до кот-го нам нужно дойти
        // мы в пере-ю t получим разницу между этими датами в кол-ве мс
        const t = Date.parse(endtime) - Date.parse(new Date());
        // добавим обработка прошедшей даты(Lesson 70), опред-м будет ли значение у нас отриц-м, 
        // и если оно отриц-е то мы просто вернем нули 000 вместо наших значений
        if (t <= 0) {
            // устан-м знач-е 0 каждой перем-й
            days = 0;
            hours = 0;
            minutes = 0; 
            seconds = 0;
        } else {
        // тут нам нужно посч-ть кол-во дней отобр-я в нашем таймере
        // нам нужно взять кол-во мс и / на кол-во мс в одном дне и округлить все это
        //  days = Math.floor() - это округ-е до ближ-го целого\
        // где 1000 * 60 - кол-во мс в 1мин, еще на * 60 - кол-во в 1 часе, * 24 - кол-во в 1 дне
        // т.е тут (1000 * 60 * 60 * 24) мы получ-м сколько в сутках будем мс
        // и когда мы общее кол-во мс t / на (1000 * 60 * 60 * 24) мы получ-м сколько суток у нас осталось до оконч-я
        // нашей даты ('2020-05-11')
        days = Math.floor( (t/(1000*60*60*24)) );
        // t / на кол-во мс в 1 часе и так мы получим общее кол-во часов остав-ся до таймера
        // далее мы общее кол-во часов что получ-сь (t / 1000 * 60 * 60) делим через % на 24
        // т.е. мы напр. 50 / 24 и получ-м 2 дня, а остаток от деления, т.е. 2 часа, вер-ся и мы его помести к нам на сайт
        // в графу кол-ва часов остав-ся до конца акции
        hours = Math.floor( (t/(1000*60*60) % 24) );
        // и по похожему принципу мы будем считать и далее т.к. нам нужны именно "хвостики" а не общее кол-во!
        minutes = Math.floor( (t/1000/60) % 60 );
        // тут нам нужно просто разделить кол-во сек внутри мс
        seconds = Math.floor( (t/1000) % 60 );
        }
        

        // и что-бы мы могли испол-ть перем-е выше снаружи мы должны их вернуть, при этом мы будем возв-ть объект
        // такой прием часто испол-ся!!!
        return {
            // св-во total будет у нас - общее кол-во мс, куда соот. мы поместим значение t
            // в будущем нам нужна будем перем-я t, т.к. нам нужно знать не закон-ся ли таймер
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            // в ссылке есть инфа как записать схожие по названию ключи и значения иначе
            // https://attacomsian.com/blog/javascript-object-property-shorthand
        };
    }

    // тут нам нужно подставить 0 в ячейки с днями и часами, чтобы было 09 дней и тд
    function getZero(num){
        // если пришед-е число от 0-10 тогда подст-м 0
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    // 2-я фун-я! когда у нас уже есть фун-я по расчету времен-х промежутков, напишем фун-ю устанав-ю наш таймер нам на стр-цу
    // для запуска этой фун-и нам понад-ся 2 аргум-та (selector, endtime)
    function setClock(selector, endtime) {
        // и что-бы настроить наш таймер нам нужен блок <div class="timer"> и deadline кот-й мы будем в него перед-ть
        // получ-м все нужные нам элем-ты со страницы
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
            // где фун-й будет высту-ть updateClock() и запус-я она будет через каждую сек
              timeInterval = setInterval(updateClock, 1000);

        // запус-м updateClock для инициализации(запустит текущ-ю дату) и отмены "моргания" таймера при обновлении страницы
        updateClock();

        // 3-я фун-я! обновляющая наш таймер каждую секунду, пишем ее внутри 2-й фун-и setClock
        // внутри себя она будет содер-ть 3 самых глав. действия
        function updateClock() {
            // 1. расчет времени что остался прямо на эту секунду и для этого испол. фун-ю getTimeRemaining
            // которрая возвр-т нужный нам объект с данными, где endtime это на дедлайн кот-й мы будем перед-ть в setClock
            const t = getTimeRemaining(endtime);
            // 2. теперь нам нужно поместить на стр-цу расчетные величины что мы получили
            // колич-во дней кот-е мы отобр-м на стр-це
            // и чтобы наш 0 при необ-ть подств-ся испол. фун-ю getZero
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            // и когда эта фун-я запус-ся, она расч-т нужное нам время и на основ-и этих расчетов запишет на стр-цу 
            // необ. резул-ты, запуск фун-и будет в константе timeInterval
            // 3. И раз у нас уже есть интервал, то нам его нужно будет рано или поздно остановить
            // и для этого нам нужна будет перем-я t в 'total': t, т.к. в ней есть кол-во мс нужное нам
            // если наше ремя уже вышло, т.е. оно идет в отриц-ю сторону, то таймер мы уже не обновляем
            if (t.total <= 0) {
                // то мы просто будем остан-ть наш таймер
                clearInterval(timeInterval);
            }
        }
    }
    // устанав-м наши часы в фун-и setClock, где 1-й арг-т это наш селектор .timer, 
    // а 2-й наш дедлайн, в будущем данные в эту перем-ю могут прих-ть от сервера!
    setClock('.timer', deadline);
}
module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
// сначала назначаем глобальный обработчик событий
window.addEventListener('DOMContentLoaded', () => {  
    // Lesson 101-102 Модули + Webpuck
    // Заимпортируем все наши js файлы в главный(порядок значения не имеет), тем самым объединив их
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
          cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
          calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
          forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
    // Т.к. переменные выше явл-ся функциями - вызовем их
    tabs();
    timer();
    modal();
    cards();
    slider();
    calc();
    forms();

});




// Lesson 82 JSON
// JSON.stringify()
// Метод преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены,
// или с включением только определённых свойств, если указан массив замены. Синтаксис:
// JSON.stringify(value[, replacer[, space]])
// value - Значение, преобразуемое в строку JSON.
// replacer (Необязательный) - Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; 
// если является массивом, определяет набор свойств, включаемых в объект в окончательной строке.
// space (Необязательный) - Делает результат красиво отформатированным (расставляя пробелы).

// Lesson 84 
// Объект FormData позволяет создать набор пар ключ/значение и передать их, используя XMLHttpRequest. Объект FormData 
// предназначен для передачи данных форм, однако может быть использован для передачи пар ключ/значение независимо от форм. 
// Данные передаются в том же формате, как и данные, передаваемые методом submit() формы
// В html в <input> в форме обязат-но нужно прописывать имя (name="name")! Что-бы не было ошибок при работе с этим объектом

// .textContent
// Позволяет задавать или получать текстовое содержимое элемента и его потомков.

// .reset()
// очищаем данные в полях input после отправки

// Lesson 83
// XMLHttpRequest 
// Это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки 
// страницы. Мы можем загружать/скачивать файлы, отслеживать прогресс и многое другое.
// На сегодняшний день не обязательно использовать XMLHttpRequest, так как существует другой, более современный метод fetch.
// XMLHttpRequest()
// Конструктор XMLHttpRequest() создаёт новый объект XMLHttpRequest. Для отправки HTTP-запроса нужно создать 
// XMLHttpRequest-объект, открыть URL и отправить запрос. После выпол-я запроса можно получить и обраб-ть тело и статус ответа.
// XMLHttpRequest имеет два режима работы: синхронный и асинхронный.
// Синтаксис: const myRequest = new XMLHttpRequest();
//          Его метод open()
// Этот метод обычно вызывается сразу после new XMLHttpRequest. В него передаются основные параметры запроса:
// - method – HTTP-метод. Обычно это "GET" или "POST". "GET" для получ-я данных от сервера, "POST" для отправ-я данных на сервер.
// - URL – URL, куда отправляется запрос: строка, может быть и объект URL. Тут путь нужно формир-ть относит-но HTML
// - async – если указать false, тогда запрос будет выполнен синхронно, это мы рассмотрим чуть позже. 
// Синхронный код идет по порядку, т.е. код долго выпол-ся то код ниже будет ее ждать.
// Асинхронный работает иначе, он не блокирует остальной код, в основном испол-ся именно он!
// И по умолчанию Ajax-запросы являются асинхронным кодом
// - login, - password – логин и пароль для базовой HTTP-авторизации (если требуется). Пример:
//  request.open(method, url, async, login, password);
// Заметим, что вызов open, вопреки своему названию, не открывает соединение. Он лишь конфигурирует запрос, но непосредственно 
// отсылается запрос только лишь после вызова send.
//          Его HTTP-заголовки
// XMLHttpRequest умеет как указывать свои заголовки в запросе, так и читать присланные в ответ.
// Для работы с HTTP-заголовками есть 3 метода:
// - setRequestHeader(name, value);
// Устанавливает заголовок запроса с именем name и значением value. Например:
// request.setRequestHeader('Content-Type', 'application/json');
// - getResponseHeader(name);
// Возвращает значение заголовка ответа name (кроме Set-Cookie и Set-Cookie2). Например:
// request.getResponseHeader('Content-Type');
// - getAllResponseHeaders();
// Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2.
//           Послать запрос.
// request.send([body])
// Этот метод устанавливает соединение и отсылает запрос к серверу. Необязательный параметр body содержит тело запроса.
//          Когда мы уже отправили запрос, далее с ним нужно что-то делать, когда прийдет ответ от сервера
// для этого есть разл-е св-ва: 
// - status (404 и тд), есть отдел-й Список кодов состояния HTTP(в ссылках к уроку)
// - statusText: 404 Not Found («не найдено»)
// - response - это будет наш ответ от сервера, это тот ответ что задал backend-разработчик и мы будем испол-ть на клиенте
// - readyState - это текущее сост-е нашего запроса
// Свойство XMLHttpRequest.readyState возвращает текущее состояние объекта XMLHttpRequest. Объект request может иметь следующие состояния:
// Значение	Состояние	        Описание
//  0	    UNSENT	            Объект был создан. Метод open() ещё не вызывался.
//  1	    OPENED	            Метод open() был вызван.
//  2	    HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
//  3	    LOADING	Загрузка;   responseText содержит частичные данные.
//  4	    DONE	            Операция полностью завершена.
// И на основании этих св-в мы будем сторить дальнейшее взаимод-е
//          У объекта XMLHttpRequest также есть события кот-е относ-ся к нему. События на request, чтобы получить ответ.
// Три наиболее используемых события:
// - load – происходит, когда получен какой-либо ответ, включая ответы с HTTP-ошибкой, например 404.
// Изменения в состоянии объекта запроса генерируют событие readystatechange:
// - error – когда запрос не может быть выполнен, например, нет соединения или невалидный URL.
// - progress – происходит периодически во время загрузки ответа, сообщает о прогрессе.
//          Отмена запроса
// Если мы передумали делать запрос, можно отменить его вызовом request.abort():


// Lesson 85
// getAttribute()
// возвращает значение указанного атрибута элемента. Если элемент не содержит данный атрибут, 
// могут быть возвращены null или "" (пустая строка);

// insertAdjacentElement()
// Метод insertAdjacentElement() добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод. Синтаксис:
// targetElement.insertAdjacentElement(position, element);
// position: 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
// element: Элемент, добавляемый в DOM-дерево.
// Возвращаемое значение: Метод возвращает добавляемый элемент, либо null, если добавление элемента завершилось ошибкой.

// Lesson 87 Fetch API
//      Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный 
// метод fetch() (en-US), который позволяет легко и логично получать ресурсы по сети асинхронно.
// Подобная функциональность ранее достигалась с помощью XMLHttpRequest. Fetch представляет собой лучшую альтернативу, 
// которая может быть легко использована другими технологиями, такими как Service Workers. Fetch также обеспечивает 
// единое логическое место для определения других связанных с HTTP понятий, такие как CORS и расширения для HTTP.
// Обратите внимание, fetch спецификация отличается от jQuery.ajax() в основном в двух пунктах:
// - !!! Promise возвращаемый вызовом fetch() не перейдёт в состояние "отклонено" из-за ответа HTTP, который считается ошибкой, 
// даже если ответ HTTP 404 или 500. Вместо этого, он будет выполнен нормально (с значением false в статусе ok ) 
// и будет отклонён только при сбое сети или если что-то помешало запросу выполниться.
// - По умолчанию, fetch не будет отправлять или получать cookie файлы с сервера, в результате чего запросы будут осуществляться 
// без проверки подлинности, что приведёт к неаутентифицированным запросам, если сайт полагается на проверку пользовательской 
// сессии (для отправки cookie файлов в аргументе init options должно быть задано значение свойства credentials отличное от 
// значения по умолчанию omit).
//      fetch()
// Есть несколько способов делать сетевые запросы и получать информацию с сервера.
// Метод fetch() Базовый синтаксис:
// let promise = fetch(url, [options])
// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.
// Без options это простой GET-запрос, скачивающий содержимое по адресу url.
// Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для получения результата.
//      Во-первых, promise выполняется с объектом встроенного класса Response в качестве результата, как только сервер 
// пришлёт заголовки ответа. На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он успешно, 
// а также посмотреть заголовки, но пока без тела ответа.
// Промис завершается с ошибкой, если fetch не смог выполнить HTTP-запрос, например при ошибке сети или если нет такого сайта. 
// HTTP-статусы 404 и 500 не являются ошибкой. Мы можем увидеть HTTP-статус в свойствах ответа:
// status – код статуса HTTP-запроса, например 200.
// ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.
// Например:
// let response = await fetch(url);
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//    получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }
//      Во-вторых, для получения тела ответа нам нужно использовать дополнительный вызов метода.
// Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:
// response.text() – читает ответ и возвращает как обычный текст,
// response.json() – декодирует ответ в формате JSON,
// response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
// помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. 
// Мы рассмотрим и такой пример несколько позже.
// Например, получим JSON-объект с последними коммитами из репозитория на GitHub:
// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);
// let commits = await response.json(); // читаем ответ в формате JSON
// alert(commits[0].author.login);
// ! Важно запомнить что: Promise возвращаемый вызовом fetch() не перейдёт в состояние "отклонено" из-за ответа HTTP, 
// который считается ошибкой, даже если ответ HTTP 404 или 500.  Вместо этого, он будет выполнен нормально 
// (с значением false в статусе ok ) и будет отклонён только при сбое сети или если что-то помешало запросу выполниться.
// Главное для этого метода что он вообще смог сделать этот запрос

// Итого
// Типичный запрос с помощью fetch состоит из двух операторов await: Или, без await:
//      Параметры ответа:
// response.status – HTTP-код ответа, т.е. тот статус что вернул нам сервер(404 и тд)
// response.ok – true, т.е. все хорошо, если статус ответа в диапазоне 200-299.
// response.headers – похожий на Map объект с HTTP-заголовками.
//      Методы для получения тела ответа:
// response.text() – возвращает ответ как обычный текст,
// response.json() – преобразовывает ответ в JSON-объект,
// response.formData() – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),
//      Опции fetch, которые мы изучили на данный момент:
// method – HTTP-метод,
// headers – объект с запрашиваемыми заголовками (не все заголовки разрешены),
// body – данные для отправки (тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.


// Lesson 89 - работа с JSON-Server
// Команда запуска JSON-Server в терминале VS-code на Windows 10: npx json-server db.json
// после запуска сервера командой: npx json-server db.json  мы увидем такие пути куда можно делать запросы в терминале:
// Resources
// http://localhost:3000/menu
// http://localhost:3000/requests
// Home
// http://localhost:3000
// В будущем нужно будет запускать и локальный сервер и JSON-Server для работы с этим и др. проектами!


// Lesson 90. Получение данных с сервера. Async/Await (ES8)
// Async/await
// async - ставится перед функцией и говорит что внутри будет асинх-й код, эта функция всегда будет возвращать промис. 
// Ключевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис.
// await - можно использовать только внутри async-функций и ставит-ся только перед теми операциами, т.е перед тем кодом, 
// например перед fetch(), выпол-е кода которых нужно дожд-ся(например подождать пока не прийдут данные от сервера в методе fetch)
// Оперераторы async/await всегда испол-ся в паре!
// После отправки данных с формы мы увидим их не только в консоли но и в нашем db.json в объекте "requests":

// Object.entries()
// Метод Object.entries(obj) – возвращает массив пар [ключ, значение].
// Object.fromEntries
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

// Error
// Конструктор Error создаёт объект ошибки. Экземпляры объекта Error выбрасываются при возникновении ошибок во время 
// выполнения. Объект Error также может использоваться в качестве базового для пользовательских исключений. 
// throw
// Инструкция throw позволяет генерировать исключения, определяемые пользователем, т.е. позволяет 
// выкидывать текст ошибки выше. Например:
// throw "Error2"; // генерирует исключение, значением которого является строка

// Деструктуризация
// Деструктурирующее присваивание в JavaScript — это изящный способ извлечения значений из массивов и объектов, при котором 
// в полной мере реализуется принцип DRY (англ. Don’t repeat yourself — «Не повторяйся»).
// Т.е. - это когда мы из объекта(напр. db.json) вытаск-м отдел-е св-ва в качестве отдел-й перем-й {img, altimg}


// Lesson 91. Что такое библиотеки. Библиотека axios. CDN
//      CDN
// CDN (Content Delivery Network - сеть доставки контента) - это группа серверов, расположенных во многих местах. 
// Эти сервера хранят дубликаты данных, чтобы сервера могли выполнять запросы данных на основе того, какие сервера ближе всего к 
// конечным пользователям. CDN увеличивают скорость доступа к сервису уменьшая влияние высокого трафика.
//      Axios
// Axios — это широко известная JavaScript-библиотека. Она представляет собой HTTP-клиент, основанный на промисах и 
// предназначенный для браузеров и для Node.js. Он изоморфный (= он может работать в браузере и node.js 
// с той же базой кодов). На стороне сервера он использует нативный node.js http-модуль, тогда как на стороне клиента (браузер) 
// он использует XMLHttpRequests. 
// Особенности:
// 1. Делает XMLHttpRequests запросы из браузера; 2. Делает http запросы из node.js;
// 3. Поддерживает Promise API; 4. Перехватывает запросы и ответы;
// 5. Преобразовывает данные запроса и ответа; 6. Отменяет запросы;
// 7. Автоматическое преобразование для JSON-данных; 8. Поддержка на стороне клиента для защиты от XSRF


// Lesson 92=93. Слайдер 
//      window.getComputedStyle()
// Метод Window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после 
// применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать. 
// Некоторые CSS-свойства доступны через API, предоставляемые объектом, или индексацию по именам CSS-свойств.
// Синтаксис:
// var style = window.getComputedStyle(element [, pseudoElt]);
// element - Element, свойства которого необходимо получить.
// pseudoElt (Необязательный) - Строка указывающая на найденный псевдо-элемент. Опускается (или null) для не псевдо-элементов.
// Возвращённый style живой CSSStyleDeclaration объект, который обновляется автоматически когда элемент стилей изменяется.
// Выводы: Метод Window.getComputedStyle() предоставляет все значения CSS-свойств элементов после применения текущей таблицы 
// стилей или базового расчёта каких-либо значений, которые могут быть.

// .slice()
// Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.


// Lesson 97-98. Создаем калькулятор на сайте
//      Формула расчета базовой нормы калорий:
// для мужчин: BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)
// для женщин: BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)
// Коэффициенты активности при расчете нормы калорий(прописан в data-атрибутах):
//       Минимальный уровень активности — 1.2
// Низкий уровень активности — 1.375
// Средний уровень активности — 1.55
// Высокий уровень — 1.725
// Очень высокий —  1.9

// Событие: input
// Событие input срабатывает каждый раз при изменении значения.
// В отличие от событий клавиатуры, оно работает при любых изменениях значений, даже если они не связаны с 
// клавиатурными действиями: вставка с помощью мыши или распознавание речи при диктовке текста.
// Если мы хотим обрабатывать каждое изменение в <input>, то это событие является лучшим выбором.

// Конструкция "switch"
// Конструкция switch заменяет собой сразу несколько if и имеет один или более блок case и необ-й блок default.
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       [break]
//     case 'value2':  [break]
//     default: [break]
// }

// Math.round()
// Метод Math.round() возвращает число, округлённое к ближайшему целому.




// Команда запуска JSON-Server в терминале VS-code на Windows 10: npx json-server db.json

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map