var app = new Vue({
  el: "#store",
  data: {
    show: false,
    Out: false,
    showItem: false,
    cart: [],
    item: {},
    instruments: [
      {
        noImg: false,
        name: "Malibu",
        type: "String",
        price: "400",
        brand: "Fender",
        img:
          "https://acousticguitar.com/wp-content/uploads/2020/03/Enter-to-Win-A-Fender-Malibu-Guitar-Acoustic-full-image.jpg"
      },

      {
        noImg: false,
        name: "Precision Bass",
        type: "String",
        price: "300.00",
        brand: "Fender",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/2/26/Fender_Precision_Bass.jpg"
      },

      {
        noImg: false,
        name: "Venova",
        type: "Wind",
        price: "99.99",
        brand: "Yamaha",
        img:
          "https://media.guitarcenter.com/is/image/MMGS7/Alto-Venova/L70403000000000-00-160x160.jpg"
      },

      {
        noImg: false,
        name: "Yamaha SHS-10R Keytar 1987",
        type: "Piano",
        price: "379.99",
        brand: "Yamaha",
        img:
          "https://images.reverb.com/image/upload/s--oItVwQBN--/t_card-square/v1575065364/hk6inauwdfvtmuhlqqzo.jpg"
      },

      {
        noImg: false,
        name: "Steel-String",
        type: "String",
        price: "329.99",
        brand: "Maton",
        img:
          "https://img1.pnghut.com/10/15/14/GPmLTVEU3k/cavaquinho-acoustic-guitar-tiple-plucked-string-instruments.jpg"
      },

      {
        noImg: false,
        name: "Aussie-Maton",
        type: "String",
        price: "700",
        brand: "Maton",
        img:
          "https://i.dailymail.co.uk/1s/2020/06/29/00/30031022-8401187-Harry_Vanda_of_The_Easybeats_wrote_the_band_s_hit_song_Friday_On-a-6_1593388608546.jpg"
      }
    ]
  },

  methods: {
    addToCart: function (instrument, index) {
      this.cart.push(instrument);
      this.instruments.splice(index, 1);
    },

    removeItems: function () {
      this.instruments = this.instruments.concat(this.cart);
      this.cart = [];
    },

    newInstrument: function () {
      this.instruments.push({
        name: this.addName,
        type: this.addType,
        price: this.addPrice,
        brand: this.addBrand,
        img: this.addImg,
        noImg: true
      });

      (this.addName = ""),
        (this.addType = ""),
        (this.addPrice = ""),
        (this.addBrand = ""),
        (this.showForm = false);
    }
  },

  watch: {
    instruments: function () {
      if (this.instruments.length <= 0) {
        this.Out = true;
      } else {
        this.Out = false;
      }
    }
  }
});