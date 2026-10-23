const AlleyCompany = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ООО «Аллея‑Строй»
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Наша компания реализует комплексные решения в сфере благоустройства
            общественных территорий, а также специализируется на производстве и
            изготовлении металлоконструкций, укладки уличной, тротуарной плитки,
            системы полива, освещения.Мы охватываем полный цикл работ — от
            проектирования до финальной реализации: разрабатываем технические
            решения, контролируем качество на каждом этапе и следим за тем,
            чтобы итоговый результат соответствовал и техническим требованиям, и
            эстетическим ожиданиям. Металлоконструкции, которые мы создаём,
            отличаются прочностью, долговечностью и продуманной интеграцией в
            ландшафт или архитектурный ансамбль. Помимо этого, в спектр наших
            услуг входят проектирование световых сценариев и монтаж систем
            освещения — чтобы пространство было не только функциональным, но и
            комфортным для людей. Отдельное направление — системы автополива: мы
            подбираем и адаптируем решения под особенности конкретного участка,
            помогая клиентам сократить трудозатраты и выстроить эффективный уход
            за территорией. Наша задача — предлагать не просто отдельные услуги,
            а целостные, практичные решения. Мы детально разбираем запрос
            клиента, подбираем оптимальный вариант и сопровождаем проект на всех
            стадиях — от идеи до сдачи объекта. Будем рады стать вашим надёжным
            партнёром в реализации проектов.
          </p>
        </div>

        {/* Основные показатели */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-blue-600">
              220 млн руб.
            </h3>
            <p className="text-gray-600">Выручка за 2025 год</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-green-600">
              9,4 млн руб.
            </h3>
            <p className="text-gray-600">Прибыль за 2025 год</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-purple-600">
              12 млн руб.
            </h3>
            <p className="text-gray-600">Стоимость активов за 2025 год</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-orange-600">
              3,5 млн руб.
            </h3>
            <p className="text-gray-600">Налоги и сборы за 2025 год</p>
          </div>
        </div>

        {/* Динамика развития */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Динамика развития
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
              <span className="text-2xl font-bold text-red-600">2023</span>
              <p className="text-gray-600 mt-2">1 сотрудник</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
              <span className="text-2xl font-bold text-yellow-600">2024</span>
              <p className="text-gray-600 mt-2">8 сотрудников</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
              <span className="text-2xl font-bold text-green-600">2025</span>
              <p className="text-gray-600 mt-2">14 сотрудников</p>
            </div>
          </div>
        </div>

        {/* Госзакупки */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Участие в госзакупках
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6">
            Заключено 2 контракта на общую сумму 365 млн рублей.
          </p>
          <p className="text-center text-gray-700 font-medium">
            Крупнейший заказчик — Департамент капитального строительства
            Администрации города Симферополя.
          </p>
        </div>

        {/* Реквизиты */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Основные сведения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p>
                <span className="font-semibold">Юридический адрес:</span>{" "}
                297402, Республика Крым, г. Евпатория, ул. Эскадронная, д. 11,
                офис 3
              </p>
              <p>
                <span className="font-semibold">ИНН:</span> 9110031953
              </p>
              <p>
                <span className="font-semibold">ОГРН:</span> 1239100004890
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Уставный капитал:</span>{" "}
                10 000 рублей
              </p>
              <p>
                <span className="font-semibold">Статус:</span> микропредприятие
                (с 10 мая 2023 года)
              </p>
              <p>
                <span className="font-semibold">ОКВЭД:</span> 25.99
                (производство прочих готовых металлических изделий)
              </p>
            </div>
          </div>
        </div>

        {/* Руководство */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Генеральный директор и единственный учредитель —{" "}
            <strong>Бузинский Алексей Андреевич</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlleyCompany;
