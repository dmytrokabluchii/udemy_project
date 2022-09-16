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