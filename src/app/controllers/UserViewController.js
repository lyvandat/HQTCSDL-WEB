const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

let large_banner = [
  { img: "images/banners/banner-1.png", link: "banner1.com", index: 0 },
  { img: "images/banners/banner-2.png", link: "banner2.com", index: 1 },
  { img: "images/banners/banner-3.png", link: "banner3.com", index: 2 },
];

let small_banners_1 = [
  {
    img: "images/banners/small-banner-3.png",
    link: "sm_banner1.com",
    index: 0,
  },
  {
    img: "images/banners/small-banner-1.png",
    link: "sm_banner3.com",
    index: 1,
  },
];

let small_banners_2 = [
  {
    img: "images/banners/small-banner-2.png",
    link: "sm_banner2.com",
    index: 0,
  },
  {
    img: "images/banners/small-banner-4.png",
    link: "sm_banner4.com",
    index: 1,
  },
];

let rect_banners = [
  { img: "images/banners/rect-banner-1.png", link: "re_banner1.com", index: 0 },
  { img: "images/banners/rect-banner-2.png", link: "re_banner2.com", index: 1 },
];

let recommend = [
  {
    img: "images/FoodThumnail/bun.png",
    name: "Bún Đậu Mắm Tôm chuẩn ngon",
    link: "/item",
    fstar: 4,
    hstar: 0,
    nstar: 1,
    rvcount: 12.567,
    price: 89,
  },
  {
    img: "images/FoodThumnail/pho.png",
    name: "Cơm Tấm Hoàng Diệu 2",
    link: "/item",
    fstar: 3,
    hstar: 1,
    nstar: 1,
    rvcount: 8.291,
    price: 25,
  },
  {
    img: "images/FoodThumnail/doannhanh.png",
    name: "Cá Viên Chiên Makima",
    link: "/item",
    fstar: 5,
    hstar: 0,
    nstar: 0,
    rvcount: 163.523,
    price: 999,
  },
  {
    img: "images/FoodThumnail/dohan.png",
    name: "Nem Cuốn Hàn Xẻng",
    link: "/item",
    fstar: 3,
    hstar: 1,
    nstar: 1,
    rvcount: 1.286,
    price: 56,
  },
  {
    img: "images/FoodThumnail/donhat.png",
    name: "Thập Cẩm Chả Biết Tên",
    link: "/item",
    fstar: 4,
    hstar: 0,
    nstar: 1,
    rvcount: 15.927,
    price: 102,
  },
  {
    img: "images/FoodThumnail/pho.png",
    name: "Cơm Chay Chỉ Thiên",
    link: "/item",
    fstar: 3,
    hstar: 0,
    nstar: 2,
    rvcount: 26.546,
    price: 89,
  },
];

let sale_thumnails_1 = [
  {
    img: "images/FoodThumnail/bun.png",
    name: "Bún Đậu Mắm Tôm",
    link: "/item",
    brand: "Sunrise Foods",
    fstar: 4,
    hstar: 0,
    nstar: 1,
    rvcount: 12.567,
    price: 89,
    status: "Còn hàng",
  },
  {
    img: "images/FoodThumnail/pho.png",
    name: "Cơm Tấm Thôn Quê",
    link: "/item",
    brand: "Sunrise Foods",
    fstar: 3,
    hstar: 1,
    nstar: 1,
    rvcount: 8.291,
    price: 25,
    status: "Còn hàng",
  },
];

let sale_thumnails_2 = [
  {
    img: "images/FoodThumnail/donhat.png",
    name: "Thập Cẩm Chả Biết Tên",
    link: "/item",
    brand: "Sunrise Foods",
    fstar: 4,
    hstar: 0,
    nstar: 1,
    rvcount: 15.927,
    price: 102,
    status: "Còn hàng",
  },
  {
    img: "images/FoodThumnail/pho.png",
    name: "Cơm Chay Chỉ Thiên",
    link: "/item",
    brand: "Sunrise Foods",
    fstar: 3,
    hstar: 0,
    nstar: 2,
    rvcount: 26.546,
    price: 89,
    status: "Còn hàng",
  },
];

const restaurant_logo = [
  { img: "/images/logo/logo.png", name: "Sunrise Foods", link: "/list" },
  {
    img: "/images/logo/FlavourOfIndia-logo.png",
    name: "Flavour of India",
    link: "/list",
  },
  { img: "/images/logo/PanzerHot-logo.png", name: "Panzer Hot", link: "/list" },
  {
    img: "/images/logo/Friggitoria-logo.png",
    name: "Friggitoria",
    link: "/list",
  },
];

// cart
const items = [
  {
    key: "bbt001",
    img: "images/FoodThumnail/lau.png",
    link: "/item",
    name: "Bò Bít Tết Hoàng Gia",
    status: "Còn hàng",
    brand: "Sunrise Foods",
    notice: "Raw meet and clean decoration",
    price: 369,
  },
  {
    key: "ggt001",
    img: "images/FoodThumnail/pho.png",
    link: "/item",
    name: "Gỏi Gia Truyền Truyền Từ Thời Ông Cố Nội",
    status: "Còn hàng",
    brand: "Sunrise Foods",
    notice: "Raw meet and clean decoration",
    price: 171,
  },
];

// payment
const payment_methods = [
  {
    key: "momo-method",
    img: "images/icons/momo.png",
    label: "Thanh toán Online bằng Momo (Có mã ưu đãi)",
  },
  {
    key: "banking-method",
    img: "images/icons/debit-card.png",
    label: "Chuyển khoản ngân hàng (Miễn phí phí chuyển)",
  },
  {
    key: "cod-method",
    img: "images/icons/cod.png",
    label: "Thanh toán khi nhận hàng (COD)",
  },
  {
    key: "visa-method",
    img: "images/icons/visa.png",
    label: "Thanh toán Online bằng Visa, Master, JCB (Miễn phí phí chuyển)",
  },
];

exports.renderCart = function cart(req, res, next) {
  Cart.findOne({ userID: req.params.id })
    .then((cart) => {
      const cartProducts = cart.products.map((item) =>
        mongoose.Types.ObjectId(item.productID)
      );

      Product.find({ _id: { $in: cartProducts } })
        .then((products) => {
          const items = multipleMongooseToObject(products);
          items.forEach((item) =>
            Object.assign(item, {
              status: item.stock > 0 ? "Còn hàng" : "Hết hàng",
            })
          );

          res.render("cart", {
            items,
            recommend,
          });
        })
        .catch(next);
    })
    .catch(next);
};

exports.renderHome = function index(req, res, next) {
  res.render("home", {
    large_banner,
    small_banners_1,
    small_banners_2,
    rect_banners,
    recommend,
    sale_thumnails_1,
    sale_thumnails_2,
  });
};

exports.renderItemDetail = function (req, res, next) {
  Product.findOne({ slug: req.params.slug })
    .then((product) => {
      res.render("item", {
        recommend,
        food: mongooseToObject(product),
      });
    })
    .catch(next);
};

exports.renderItems = async function (req, res, next) {
  const products = await Product.find();

  res.render("products", {
    foods: multipleMongooseToObject(products),
    restaurant_logo,
  });
};

exports.renderCart = function (req, res, next) {
  res.render("cart", {
    items,
    recommend,
  });
};

exports.renderPayment = function (req, res, next) {
  res.render("buy", {
    items,
    payment_methods,
  });
};