import React from "react";
// import { useState, useEffect } from "react";

import mainPage from "../../styles/Main.module.scss";

import OpenButton from "../../components/Drawer/OpenButon";

function Main() {
  return (
    <div>
      <div className={mainPage.main_header}>
        <div className={mainPage.first_block}>
          <div className={mainPage.one}></div>
          <div className={mainPage.two}></div>
          <div className={mainPage.three}></div>
          <div className={mainPage.four}></div>
          <div className={mainPage.five}></div>

          <div className={mainPage.base}>
            <img
              className={mainPage.sputnic}
              src="https://github.com/Lubava7/port2/blob/master/src/images/transparentPng/sputnic.png?raw=true"
              alt="sputnic"
            />
          </div>
          <img
            className={mainPage.rocket}
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/R-7_prototipo.svg"
            alt="rocket"
          />
        </div>

        <div className={mainPage.second_block}></div>

        <div className={mainPage.main_body}>
          <p className={mainPage.p_p}>
            Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
            используемый в печати и вэб-дизайне. Lorem Ipsum является
            стандартной "рыбой" для текстов на латинице с начала XVI века. В то
            время некий безымянный печатник создал большую коллекцию размеров и
            форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
            Ipsum не только успешно пережил без заметных изменений пять веков,
            но и перешагнул в электронный дизайн. Его популяризации в новое
            время послужили публикация листов Letraset с образцами Lorem Ipsum в
            60-х годах и, в более недавнее время, программы электронной вёрстки
            типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            Почему он используется? Давно выяснено, что при оценке дизайна и
            композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
            используют потому, что тот обеспечивает более или менее стандартное
            заполнение шаблона, а также реальное распределение букв и пробелов в
            абзацах, которое не получается при простой дубликации "Здесь ваш
            текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы
            электронной вёрстки и редакторы HTML используют Lorem Ipsum в
            качестве текста по умолчанию, так что поиск по ключевым словам
            "lorem ipsum" сразу показывает, как много веб-страниц всё ещё
            дожидаются своего настоящего рождения. За прошедшие годы текст Lorem
            Ipsum получил много версий. Некоторые версии появились по ошибке,
            некоторые - намеренно (например, юмористические варианты). Откуда он
            появился? Многие думают, что Lorem Ipsum - взятый с потолка
            псевдо-латинский набор слов, но это не совсем так. Его корни уходят
            в один фрагмент классической латыни 45 года н.э., то есть более двух
            тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
            Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в
            Lorem Ipsum, "consectetur", и занялся его поисками в классической
            латинской литературе. В результате он нашёл неоспоримый
            первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de
            Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной
            Цицероном в 45 году н.э. Этот трактат по теории этики был очень
            популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem
            ipsum dolor sit amet..", происходит от одной из строк в разделе
            1.10.32 Классический текст Lorem Ipsum, используемый с XVI века,
            приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus
            Bonorum et Malorum" Цицерона и их английский перевод, сделанный H.
            Rackham, 1914 год. Где его взять? Есть много вариантов Lorem Ipsum,
            но большинство из них имеет не всегда приемлемые модификации,
            например, юмористические вставки или слова, которые даже отдалённо
            не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного
            проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в
            середине абзаца. Также все другие известные генераторы Lorem Ipsum
            используют один и тот же текст, который они просто повторяют, пока
            не достигнут нужный объём. Это делает предлагаемый здесь генератор
            единственным настоящим Lorem Ipsum генератором. Он использует
            словарь из более чем 200 латинских слов, а также набор моделей
            предложений. В результате сгенерированный Lorem Ipsum выглядит
            правдоподобно, не имеет повторяющихся абзацей или "невозможных"
            слов.
          </p>
        </div>
        <div className={mainPage.endurance_div}>
          <img
            className={mainPage.endurance}
            src="https://i.imgur.com/8vwY40V.png"
            alt="endurance"
          />
        </div>
      </div>

      <div>
        <OpenButton />
      </div>
    </div>
  );
}

export default Main;
