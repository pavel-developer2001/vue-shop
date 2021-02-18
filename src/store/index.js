import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          title: "Игровой ноутбук ASUS TUF Gaming F15 FX506LI-HN012",
          img:
            "https://content2.onliner.by/catalog/device/main/40b4ea5dfad47cfbf39a72e5afbef237.jpeg",
          describe:
            '15.6" 1920 x 1080 IPS, несенсорный, Intel Core i5 10300H 2500 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: NVIDIA GeForce GTX 1650 Ti 4 ГБ, без ОС, цвет крышки черный',
          price: 2000
        },
        {
          id: 2,
          title: "Ноутбук HONOR MagicBook 14 2020 53010VTY",
          img:
            "https://content2.onliner.by/catalog/device/main/b7c7b0af5a18a6cf216173a4957e6d8c.jpeg",
          describe:
            '14.0" 1920 x 1080 IPS, несенсорный, AMD Ryzen 5 3500U 2100 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: встроенный, Windows 10, цвет крышки темно-серый',
          price: 1900
        },
        {
          id: 3,
          title: "Ноутбук HP 15s-eq1103ur 25T09EA",
          img:
            "https://content2.onliner.by/catalog/device/header/20c0d2fe95fc1e8bf24b0f852de351c4.jpeg",
          describe:
            '15.6" 1920 x 1080 IPS, несенсорный, AMD Ryzen 5 4500U 2300 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: встроенный, без ОС, цвет крышки темно-серый',
          price: 1869
        },
        {
          id: 4,
          title: "Игровой ноутбук HP Gaming Pavilion 15-dk1029ur 232C8EA",
          img:
            "https://content2.onliner.by/catalog/device/header/dd7a821d4bc35f096ea9a25c4bf33d16.jpeg",
          describe:
            '15.6" 1920 x 1080 IPS, несенсорный, Intel Core i5 10300H 2500 МГц, 16 ГБ, SSD 1024 ГБ, граф. адаптер: NVIDIA GeForce RTX 2060 Max-Q 6 ГБ, без ОС, цвет крышки черный/зеленый',
          price: 3380
        },
        {
          id: 5,
          title: "Ноутбук Lenovo IdeaPad 5 15IIL05 81YK006HRE",
          img:
            "https://content2.onliner.by/catalog/device/header/e1b5b156a80f290cc07a43bf7de91b8e.jpeg",
          describe:
            '15.6" 1920 x 1080 IPS, несенсорный, Intel Core i5 1035G1 1000 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: NVIDIA GeForce MX350 2 ГБ, без ОС, цвет крышки темно-серый',
          price: 2090
        },
        {
          id: 6,
          title: "Ноутбук HP 14s-fq0035ur 24C07EA",
          img:
            "https://content2.onliner.by/catalog/device/header/c8ef17c6f373c0dd473a00cc5839584a.jpeg",
          describe:
            '14.0" 1920 x 1080 IPS, несенсорный, AMD Ryzen 3 4300U 2700 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: встроенный, без ОС, цвет крышки серебристый',
          price: 1500
        }
      ],
      cart: []
    };
  },
  mutations: {},
  actions: {
    // addItem(context) {
    //   this.state.cart.push(context)
    //   console.log(this.state.cart)
    // }
  },
  modules: {}
});
