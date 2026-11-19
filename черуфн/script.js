let Z = 0; // один счётчик на всю игру

function M() {
    const T = document.getElementById("g");
    const P = document.getElementById("P");
    const O = document.getElementById("p");
    const i = document.getElementById("i");
    const I = document.getElementById("I");
    const H = document.getElementById("H");
    const K = document.getElementById("K");
    const z = document.getElementById("z");
    const num = document.getElementById('num2');
    const A = document.getElementById('AA');
    const KV = document.getElementById("KV");

    Z++;

    if (Z === 1) {
        T.innerText = "C др тебя!!!";
        P.innerText = "Тебе достался один подарок, но ";
        O.innerText = "И да, если будут проблемы, можешь мне сообщить";
        i.innerText = "он полностью скрыт шифром. Надеюсь тебе понравится. Удачи!!!";
        document.getElementById('E').classList.add('XeX');
    }

    if (Z === 2) {
        num.classList.remove('Xex');
        document.getElementById('I').classList.remove('lol');
        document.getElementById('H').classList.remove('kek');
        T.textContent = "Регистрация";
        P.textContent = "Пожалуйста, введите своё имя. ";
        O.textContent = "";
        i.textContent = "";
        z.textContent = "";
    }

    if (Z === 3) {
        A.classList.remove('hidden');
        num.classList.add('Xex');
        document.getElementById('I').classList.remove('lol');
        T.textContent = "ОКАК!";
        P.textContent = "Похоже, этот аккаунт существует... ";
        i.textContent = "Пожалуйста, введите пароль";
        O.textContent = "И да, если будут проблемы, можешь мне сообщить";
        z.textContent = "";
    }

    if (Z === 4) {
        const answer = document.getElementById('C').value.trim().toLowerCase();

        if (answer === 'okak') {
            document.getElementById('AA').classList.add('hidden');
            document.getElementById('BB').classList.remove('hidden');
            T.innerText = "Хмммм...";
            P.innerText = "Да, у вас есть один проект... ";
            i.innerText = "Но у него есть пароль)";
            O.innerText = "";
        } else {
            Z--; // откатываемся, чтобы следующее нажатие снова проверило это поле
            T.innerText = "Неверно! (Попробуй на англ)";
        }
    }

    if (Z === 5) {
        const answer = document.getElementById('RT').value.trim().toLowerCase();

        if (answer === 'а чё в смысле') {
            document.getElementById('BB').classList.add('hidden');
            document.getElementById('qeq').classList.remove('hidden');
            T.innerText = "Так, Главный Вопрос...";
            P.innerText = "";
            i.innerText = "";
            O.innerText = "";
            z.innerText = "ТЫ ХОЧЕШЬ В ЛАГЕРЬ?";
        } else {
            Z--; // откатываемся
            T.innerText = "Неверно! (Попробуй на рус.)";
        }
    }

    if (Z === 6) {
        const selected = document.querySelector('input[name="size"]:checked');

        if (!selected) {
            Z--; // ничего не выбрано — можно нажать снова
        } else if (selected.value === 'qq' || selected.value === 'qqe') {
            document.getElementById('qeq').classList.add('hidden');
            T.innerText = "ЭТО КОНЕЦ";
            P.innerText = "Надеюсь, тебе вся эта тема понравилась. ";
            O.innerText = "Ещё раз ПОЗДРАВЛЯЮ ТЕБЯ С ДР!!!!";
            i.innerText = " Кстати, осталось ещё кое-что, можешь мне в лс написать ";
            z.innerText = "'ПеРфОрАтОр'. УДАЧИ!!!";
            KV.innerText = "(Это единственная картинка, которая загружается, потом расскажу)";
        } else {
            Z--; // ответ «Нет» — можно выбрать снова
            T.innerText = "Не то! Попробуй другой вариант.";
        }
    }

}
