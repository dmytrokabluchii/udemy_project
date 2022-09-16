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