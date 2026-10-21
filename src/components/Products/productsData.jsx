// Invertors
import deye66k from "../../assets/products/deye_6-6K.webp";
import anl1100 from "../../assets/products/anl_11000T_48l_w-pro.webp";
import deye1420k from "../../assets/products/deye_1420k.webp";
import deye25kw from "../../assets/products/deye25kw.webp";
import deye5kw from "../../assets/products/deye_5kw.webp";
import deye8kw from "../../assets/products/deye_8kw.webp";
import deye10kw from "../../assets/products/deye_10kw.webp";
import deye25kwHL from "../../assets/products/deye_25kwHL.webp";
import deyeGrid15kw from "../../assets/products/deye_grid15kw.webp";
import deyeGrid19kw from "../../assets/products/deye_grid-10kw.webp";
import deyeGrid20kw from "../../assets/products/deye_grid20kw.webp";
import deyeGrid50kw from "../../assets/products/deye_grid50kw.webp";
import deyeGrid100kw from "../../assets/products/deye_grid100kw.webp";

// Charging
import dynessPowerBricSC from "../../assets/products/chargings/dyness_powerbrickSC.webp";
import deyeSpringSEG from "../../assets/products/chargings/deye_spring_seg1.webp";

// Solar Panels
import lp1624Second from "../../assets/products/chargings/lp1624100--2.jpg";
import lr772hvhf from "../../assets/products/panels/LR7-72HVHF.webp";
import jkm650670n from "../../assets/products/panels/jkm650-670n-66ql6.jpg";

// Brand Logos
import LogoAninerel from "../SvgIcons/LogoAninerel";
import LogoJinko from "../SvgIcons/LogoBrandJinko";
import LogoDeye from "../SvgIcons/LogoBrandDeye";
import LogoDyness from "../SvgIcons/LogoBrandDyness";
import LogoBrandLongi from "../SvgIcons/LogoBrandLongi";

export const products = {
  invertors: {
    hybridLV: [
      {
        id: "SUN-5K-SG05LP1-EU",
        title: "DEYE SUN-5K (5кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-5K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye5kw,
        inStock: true,
        price: "120 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Инверторы Deye SUN-5K– это современные однофазные гибридные устройства, разработанные по высоким стандартам для эффективного управления энергией. Они обеспечивают оптимальное хранение и использование энергии, что делает их отличным выбором как для дома, так и для небольших коммерческих объектов. Мощность в 5 кВт позволяет этим инверторам справляться с различными задачами энергоснабжения, при этом они легко интегрируются с уже установленными солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "5кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 1 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "120 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "25 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-6K-SG05LP1-EU",
        title: "DEYE SUN-6K (6кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-6K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye5kw,
        inStock: true,
        price: "135 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия инверторов Deye SUN-6K представляет собой современную линейку однофазных гибридных инверторов, созданных для эффективного управления энергией. Эти инверторы разработаны для оптимизации процессов хранения и потребления энергии, что делает их идеальным выбором как для жилых, так и для небольших коммерческих объектов. С мощностью 6 кВт эта универсальная серия удовлетворяет различные потребности в энергии и легко интегрируется с существующими солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "6кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "135 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "24.9 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-8K-SG05LP1-EU",
        title: "DEYE SUN-8K (8кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-8K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye8kw,
        inStock: true,
        price: "190 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия инверторов Deye SUN-8K представляет собой современную линейку однофазных гибридных инверторов, разработанных для эффективного управления энергией. Эти инверторы предназначены для оптимизации процессов хранения и потребления энергии, что делает их идеальным решением как для жилых, так и для небольших коммерческих объектов. С мощностью 8 кВт эта серия удовлетворяет различные потребности в энергоснабжении и легко интегрируется с существующими солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "8кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "190 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "26 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-10K-SG06LP1-EU",
        title: "DEYE SUN-10K (10кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-10K-SG06LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye10kw,
        inStock: true,
        price: "200 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Инвертор Deye SUN-10K современный однофазный гибридный инвертор, разработанный для улучшения хранения и использования энергии в жилых и коммерческих приложениях. Этот инвертор объединяет передовые технологии и прочный дизайн, обеспечивая непревзойденную энергоэффективность и надежность.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "10кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "200 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "464×763×282 мм.",
          },
          weight: { label: "Вес", value: "52 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-12K-SG06LP1-EU",
        title: "DEYE SUN-12K (12 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-12K-SG06LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye10kw,
        inStock: true,
        price: "225 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Инвертор Deye SUN-12K современный однофазный гибридный инвертор, разработанный для улучшения хранения и использования энергии в жилых и коммерческих приложениях. Этот инвертор объединяет передовые технологии и прочный дизайн, обеспечивая непревзойденную энергоэффективность и надежность.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "12кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "220 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "464×763×282 мм.",
          },
          weight: { label: "Вес", value: "52 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-12K-SG05LP3-EU",
        title: "DEYE SUN-12K (12 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-12K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye25kw,
        inStock: true,
        price: "290 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Трёхфазный гибридный инвертор Deye, модель SUN-12K, представляет собой современное решение для управления энергией, разработанное как для жилых, так и для коммерческих солнечных установок. Эта серия инверторов обеспечивает интеграцию солнечной генерации с аккумуляторным хранением энергии, что позволяет оптимально использовать энергию и повышать общую эффективность системы.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "12кВт" },
          phase: { label: "Фазы", value: 3 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "240 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "422×658×254 мм.",
          },
          weight: { label: "Вес", value: "38 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-15K-SG05LP3-EU",
        title: "DEYE SUN-15K (15 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-15K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "320 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-15K — это универсальный инвертор, сочетающий в себе функции преобразователя, солнечного зарядного устройства и устройства для зарядки батарей. Он обеспечивает надежное и непрерывное электроснабжение в компактном и эргономичном исполнении. Интуитивно понятный ЖК-дисплей упрощает доступ к настройкам и управлению, позволяя пользователю легко регулировать параметры зарядки аккумулятора, выбирать приоритеты между сетью и солнечными панелями, а также задавать допустимые уровни входного напряжения для адаптации к различным условиям эксплуатации.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "15кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "280 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-16K-SG05LP3-EU",
        title: "DEYE SUN-16K (16 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-15K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "320 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-16K — многофункциональный инвертор, объединяющий возможности преобразователя, солнечного зарядного устройства и устройства зарядки батарей. Он обеспечивает стабильное и бесперебойное энергоснабжение, отличаясь компактностью и удобством в использовании. Удобный ЖК-дисплей обеспечивает простой доступ к настройкам, позволяя легко управлять процессом зарядки аккумуляторов, выбирать приоритеты между источниками питания и настраивать допустимые уровни входного напряжения для работы в различных условиях.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "16кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "300 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-20K-SG05LP3-EU",
        title: "DEYE SUN-20K (20 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-20K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "400 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-20K-SG05LP3-EU-SM2 представляет собой высокотехнологичный инвертор, объединяющий функции преобразования энергии, солнечной зарядки и аккумуляторной поддержки. Устройство обеспечивает стабильное энергоснабжение, сочетая надёжность, эргономичность и компактный дизайн.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "20кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "350 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
    ],
    hybridHV: [
      {
        id: "SUN-20K-SG01HP3-EU",
        title: "DEYE SUN-20K (20кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-20K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kw,
        inStock: true,
        price: "330 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Гибридный инвертор серии DEYE SUN-20K-SG01HP3-EU-AM2 создан для обеспечения максимальной эффективности в современных солнечных энергосистемах. С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "20кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "37 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 160 - 700 В.",
          },
          size: {
            label: "Габариты",
            value: "408×638×237 мм.",
          },
          weight: { label: "Вес", value: "30.5 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-25K-SG01HP3-EU",
        title: "DEYE SUN-25K (25кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-25K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kw,
        inStock: true,
        price: "375 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Гибридный инвертор серии DEYE SUN-20K-SG01HP3-EU-AM2 создан для обеспечения максимальной эффективности в современных солнечных энергосистемах. С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "25кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 160 - 700 В.",
          },
          size: {
            label: "Габариты",
            value: "408×638×237 мм.",
          },
          weight: { label: "Вес", value: "30.5 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-30K-SG01HP3-EU",
        title: "DEYE SUN-30K (30кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-30K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "480 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия трехфазных гибридных инверторов DEYE SUN-30K-SG01HP3-EU-AM2 разработана для обеспечения максимальной эффективности и надежности как в жилых домах, так и в коммерчиских объектах . С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "30кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 180 - 800 В.",
          },
          size: {
            label: "Габариты",
            value: "527×894×294 мм.",
          },
          weight: { label: "Вес", value: "80 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-40K-SG01HP3-EU",
        title: "DEYE SUN-40K (40кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-40K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "680 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия трехфазных гибридных инверторов DEYE SUN-40K-SG01HP3-EU-AM2 разработана для обеспечения максимальной эффективности и надежности как в жилых домах, так и в коммерчиских объектах . С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "60кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 180 - 800 В.",
          },
          size: {
            label: "Габариты",
            value: "527×894×294 мм.",
          },
          weight: { label: "Вес", value: "80 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-50K-SG01HP3-EU",
        title: "DEYE SUN-50K (50кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-30K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "800 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия трехфазных гибридных инверторов DEYE SUN-50K-SG01HP3-EU-AM2 разработана для обеспечения максимальной эффективности и надежности как в жилых домах, так и в коммерчиских объектах . С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "50кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 180 - 800 В.",
          },
          size: {
            label: "Габариты",
            value: "527×894×294 мм.",
          },
          weight: { label: "Вес", value: "80 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-60K-SG01HP3-EU",
        title: "DEYE SUN-60K (60кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-60K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "940 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия трехфазных гибридных инверторов DEYE SUN-60K-SG01HP3-EU-AM2 разработана для обеспечения максимальной эффективности и надежности как в жилых домах, так и в коммерчиских объектах . С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "60кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 180 - 800 В.",
          },
          size: {
            label: "Габариты",
            value: "527×894×294 мм.",
          },
          weight: { label: "Вес", value: "80 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-80K-SG01HP3-EU",
        title: "DEYE SUN-80K (80кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-30K-SG01HP3-EU",
        subtitle: "Высоковольтный, гибридный, трёхфазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "1000 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия трехфазных гибридных инверторов DEYE SUN-80K-SG01HP3-EU-AM2 разработана для обеспечения максимальной эффективности и надежности как в жилых домах, так и в коммерчиских объектах . С мощностью 20 кВт он способен удовлетворять широкий диапазон энергетических потребностей, что делает его идеальным выбором как для жилых, так и для коммерческих объектов. Эта серия инверторов разработана с учетом изменяющихся условий работы энергосистем, гарантируя стабильность, адаптивность и высокую эффективность в управлении электроэнергией.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "80кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "50 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 180 - 800 В.",
          },
          size: {
            label: "Габариты",
            value: "527×894×294 мм.",
          },
          weight: { label: "Вес", value: "80 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
    ],
    grid: [
      {
        id: "SUN-5K-G05P1-EU",
        title: "DEYE-SUN-5K-G05P1-EU (5кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-5K-G05P1-EU",
        subtitle: "Сетевой, однофазный инвертор",
        image: deye25kwHL,
        inStock: true,
        price: "60 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Deye SUN-5K-G05P1-EU-AM2 — это однофазный сетевой (grid-tie) инвертор мощностью 5 кВт, предназначенный для преобразования энергии солнечных панелей в переменный ток с последующей передачей его в электрическую сеть.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "5кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 1 },

          controller: { label: "Контроллер", value: "2 MPPT(МППТ)" },
          size: {
            label: "Габариты",
            value: "305х280х180 мм.",
          },
          weight: { label: "Вес", value: "7.7 кг" },
        },
      },
      {
        id: "SUN-10K-G02P1-EU",
        title: "DEYE-SUN-10K-G02P1-EU (10кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-10K-G02P1-EU",
        subtitle: "Сетевой, однофазный инвертор",
        image: deyeGrid19kw,
        inStock: true,
        price: "95 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Deye-SUN-10K-G02P1-EU — это однофазный сетевой (grid-tie) инвертор мощностью 10 кВт, предназначенный для преобразования энергии солнечных панелей в переменный ток с последующей передачей его в электрическую сеть.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "10кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 1 },

          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "330х410х213.5 мм.",
          },
          weight: { label: "Вес", value: "14.8 кг" },
        },
      },

      {
        id: "SUN-10K-G06P3-EU",
        title: "SUN-10K-G06P3-EU (10кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-10K-G06P3-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid19kw,
        inStock: false,
        price: "70 000 ₽",
        purpose: {
          label: "Назначение",
          value:
            "DEYE-SUN-10K-G06P3-EU — это сетевой (grid-tie) трехфазный инвертор мощностью 10 кВт, предназначенный для преобразования энергии солнечных панелей в переменный ток с последующей передачей его в электрическую сеть.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "10кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "283х463х178 мм.",
          },
          weight: { label: "Вес", value: "11 кг" },
        },
      },
      {
        id: "SUN-15K-G06P3-EU",
        title: "SUN-15K-G06P3-EU (15кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-15K-G06P3-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid15kw,
        inStock: false,
        price: "95 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Deye SUN-15K-G06P3-EU — трёхфазный сетевой инвертор мощностью 15 кВт с двумя MPPT, высоким КПД (до 98,5 %), защитой IP65, функцией «нулевого экспорта», поддержкой Wi-Fi/4G и интеллектуальным мониторингом. Подходит для жилых и коммерческих объектов.Deye SUN-15K-G06P3-EU-AM2-P1 — трёхфазный сетевой инвертор мощностью 15 кВт с двумя MPPT, высоким КПД (до 98,5 %), защитой IP65, функцией «нулевого экспорта», поддержкой Wi-Fi/4G и интеллектуальным мониторингом. Подходит для жилых и коммерческих объектов.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "15кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "283х463х178 мм.",
          },
          weight: { label: "Вес", value: "11 кг" },
        },
      },

      {
        id: "SUN-20K-G05-EU",
        title: "SUN-20K-G05-EU (20кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-20K-G05-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid20kw,
        inStock: false,
        price: "115 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Трехфазная серия сетевых инверторов Deye, включающая модели SUN-20K-G05 предлагает передовые решения в сфере солнечной энергетики с максимальным КПД до 98,6%. Оснащенные двумя трекерами максимальной точки мощности (MPP), эти инверторы обеспечивают оптимальный сбор энергии от солнечных панелей, что делает их идеальными для применения в системах с нулевым экспортом и виртуальным синхронным генератором (VSG). Прочная конструкция и передовые функции делают эти инверторы отличным выбором как для жилых, так и для коммерческих солнечных установок.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "20 кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "362×527×220 мм.",
          },
          weight: { label: "Вес", value: "20 кг" },
        },
      },
      {
        id: "SUN-30K-G04-EU",
        title: "SUN-30K-G04-EU (30кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-30K-G04-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid20kw,
        inStock: true,
        price: "155 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Основной особенностью серии SUN-30K-G04 является ее исключительная эффективность. С максимальным КПД 98,6% и европейским КПД 98,1%, эти инверторы обеспечивают оптимальное преобразование энергии, минимизируя потери и увеличивая рентабельность инвестиций.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "30кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "362×577×215 мм.",
          },
          weight: { label: "Вес", value: "23 кг" },
        },
      },
      {
        id: "SUN-50K-G04-EU",
        title: "SUN-50K-G04-EU (50кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-50K-G04-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid50kw,
        inStock: true,
        price: "240 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Ощутите высший уровень преобразования солнечной энергии с серией инверторов Deye SUN-50K-G04 – передовыми трехфазными стринг-инверторами, разработанными для высоконагруженных коммерческих установок. Созданные для максимальной эффективности и надежности, инверторы SUN-50K-G04 обеспечивают высокую производительность, гибкость и широкий набор защитных функций, отвечая самым строгим требованиям солнечной энергетики.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "50кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "434×570×243 мм.",
          },
          weight: { label: "Вес", value: "37.1 кг" },
        },
      },

      {
        id: "SUN-100K-G03-EU",
        title: "SUN-100K-G03-EU (100кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-100K-G03-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid100kw,
        inStock: true,
        price: "415 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Серия Deye SUN-70/75/80/90/100/110K-G03 представляет собой передовую технологию трехфазных сетевых инверторов, разработанную для максимального увеличения выработки солнечной энергии в крупных коммерческих и промышленных установках. В серию входят модели SUN-70K-G03, SUN-75K-G03, SUN-80K-G03, SUN-90K-G03, SUN-100K-G03 и SUN-110K-G03, каждая из которых предназначена для различных уровней потребляемой мощности.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "100кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "824×516×312.7 мм.",
          },
          weight: { label: "Вес", value: "81 кг" },
        },
      },

      {
        id: "SUN-130K-G01P3-EU",
        title: "SUN-130K-G01P3-EU (130кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-130K-G01P3-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid100kw,
        inStock: true,
        price: "520 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Инверторы серии DEYE SUN-130K-G01P3-EU-AM8 представляют собой современные трехфазные струнные инверторы, разработанные для высокопроизводительных коммерческих и промышленных солнечных электростанций. Обладая пиковым КПД до 98,8%, они обеспечивают максимальную выработку энергии, надежность и стабильность работы благодаря передовым инновационным технологиям.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "130кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "1006×516×325.5 мм.",
          },
          weight: { label: "Вес", value: "103 кг" },
        },
      },

      {
        id: "SUN-135K-G01P3-EU",
        title: "SUN-135K-G01P3-EU (135кВт)",
        tool: "Сетевой инвертор",
        model: "SUN-135K-G01P3-EU",
        subtitle: "Сетевой, трехфазный инвертор",
        image: deyeGrid100kw,
        inStock: true,
        price: "580 000 ₽",

        purpose: {
          label: "Назначение",
          value:
            "Инверторы серии DEYE SUN-135K-G01P3-EU-AM8 представляют собой современные трехфазные струнные инверторы, разработанные для высокопроизводительных коммерческих и промышленных солнечных электростанций. Обладая пиковым КПД до 98,8%, они обеспечивают максимальную выработку энергии, надежность и стабильность работы благодаря передовым инновационным технологиям.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "135кВт" },
          type: { label: "Тип", value: "Сетевой" },
          phase: { label: "Фазы", value: 3 },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          size: {
            label: "Габариты",
            value: "1006×516×325.5 мм.",
          },
          weight: { label: "Вес", value: "103 кг" },
        },
      },
    ],
  },

  chargings: {
    chrageLV: [
      {
        id: "SE-5.1 Pro-B",
        tool: "Аккумуляторная батарея",
        title: "DEYE-SE-5.1 Pro-B (LiFePO₄)",
        model: "Deye SE-G5.1 Pro-B",
        inStock: false,
        image: deyeSpringSEG,
        price: "144 000 ₽",

        subtitle:
          "Низковольтный литий‑железо‑фосфатный (LiFePO₄) модуль ёмкостью 5,12 кВт·ч (номинально указывают как 5 кВт·ч).",
        purpose: {
          label: "Назначение",
          value:
            "Он подходит для солнечных электростанций, гибридных систем и резервного питания — в том числе в составе решений для частных домов . Модульная конструкция позволяет наращивать ёмкость под нужную автономность.",
        },

        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          type: {
            label: "Тип батареи",
            value: "LiFePO4(LFP)",
          },
          capacity: { label: "Емкость", value: "100 А·ч" },
          power: { label: "Номинальное напряжение", value: " 51,2 В" },
          lifeCycles: {
            label: "Количество жизненных циклов разряда/заряда",
            value: "≥6000 циклов",
          },
          size: {
            label: "Размер",
            value: "440 x 133 x 540 мм.",
          },
          weight: { label: "Вес", value: "45 кг" },
          servicePeriod: { label: "Срок службы", value: "10 лет" },
        },
      },
    ],
    chargeHV: [],
  },
  panels: [
    // LONGI
    {
      id: "LR7-72HVHF650M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-72HVHF-650M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "17 600 ₽",
      badge: "Есть в наличии",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24.1%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "28, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "144 (6x24)",
        },
      },
    },

    {
      id: "LR8-66HVD650M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR8-66HVD-650M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "17 500 ₽",
      badge: "Есть в наличии",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24.1%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "28, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "144 (6x24)",
        },
      },
    },

    {
      id: "LR7-60HVHL540M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-60HVHL-540M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "16 700 ₽",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "540Вт" },
        efficiency: { label: "КПД", value: "23.9%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "1990x1134x30 мм.",
        },
        weight: { label: "Вес", value: "16, 3 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "120 (6x20)",
        },
      },
    },

    {
      id: "LR7-54HVH485M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-54HVH-485M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "14 000 ₽",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "485Вт" },
        efficiency: { label: "КПД", value: "23.9%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "1800x1134x30 мм.",
        },
        weight: { label: "Вес", value: "23, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "120 (6x20)",
        },
      },
    },

    // JINKO

    // {
    //   id: "JKN48QL6-DB",
    //   tool: "Солнечная панель",
    //   title: "Jinko 460",
    //   model: "48QL60DB",
    //   subtitle:
    //     "Солнечная панель технологии Tiger Neo III. Ведущий класс мощности на базе усовершенствованной платформы N‑type TOPCon благодаря передовым технологиям и оптимизированной компоновке, которая улавливает больше солнечного света",
    //   image: jkm650670n,
    //   price: "Уточняйте на складе",
    //
    //   inStock: false,
    //   purpose: {
    //     label: "Назначение",
    //     value: "Преобразование солнечной энергии в электричество",
    //   },
    //   features: {
    //     brand: {
    //       label: "Бренд",
    //       value: "JINKO",
    //       logo: <LogoJinko />,
    //       link: "https://www.jinkosolar.com/en/",
    //     },
    //     technology: {
    //       label: "Технология",
    //       value: "N-type Mono-crystaline",
    //       titleSmall:
    //         "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
    //     },
    //     voltage: {
    //       label: "Максимальное напрежение",
    //       value: "36.63 В",
    //     },
    //     power: { label: "Мощность", value: "460Вт" },
    //     maxFuseCurrentA: {
    //       label: "Max ток предохранителя",
    //       value: "30 A",
    //     },
    //     size: {
    //       label: "Габариты",
    //       value: "1762x1140x30 мм.",
    //     },
    //     weight: { label: "Вес", value: "24.4 кг" },
    //     operatingTemperatureRangeC: {
    //       label: "Рабочая температура",
    //       value: "−40…+70 °C",
    //     },
    //     cell: {
    //       label: "Количество ячеек", value: "264 (66x4)"
    //     }
    //   },
    // },

    {
      id: "JKM465M-48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 465",
      model: "JKM465M-48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "12 400 ₽",

      inStock: true,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "30.80 В",
        },
        power: { label: "Мощность", value: "465Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        efficiency: { label: "КПД", value: "23.27%" },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "264 (66x4)",
        },
      },
    },
    {
      id: "JKM650N-66QL6-BDV",
      tool: "Солнечная панель",
      title: "Jinko 650",
      model: "JKM650N-66QL6BDV",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "16 800 ",

      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "42,57 В",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24. 6%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "35 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1140x30 мм.",
        },
        weight: { label: "Вес", value: "32, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "264 (66x4)",
        },
      },
    },
  ],
};
