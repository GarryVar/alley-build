import MaxLogo from "../SvgIcons/MaxLogo";
import TelegramLogo from "../SvgIcons/TelegramLogo";
import VkLogo from "../SvgIcons/VkLogo";
import InstaLogo from "../SvgIcons/InstaLogo";
import Adress from "../SvgIcons/IconAddres";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <section className={`${styles.contacts} bg-white`}>
      <div className={`${styles.contactsWrapper} container px-4`}>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Контакты</h2>
        <ul className={`${styles.contactsInfo} space-y-4 text-gray-600`}>
          <li>
            <Adress />
            Симферополь
          </li>
          <li>📞 +7 (978) 773-73-90</li>
          <li>🕒 Пн–Пт: 08:30–17:30</li>
        </ul>
        <div className={`${styles.contactsSocials} space-x-4 flex`}>
          <a href="#" className="text-blue-600 hover:underline">
            <InstaLogo />
          </a>
          <a href="" className="text-blue-600 hover:underline">
            <TelegramLogo />
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            <MaxLogo />
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            <VkLogo />
          </a>
        </div>
        <div
          className={`${styles.contactsMap} h-[300px] bg-gray-200 rounded overflow-hidden border border-gray-300`}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=34.1032,44.9526&z=15"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
