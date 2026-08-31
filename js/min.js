

/* =========================================================
   HERO SLIDER
========================================================= */

var slides = document.querySelectorAll(".slide");

var indicators = document.querySelectorAll(".indicator");

var nextBtn = document.getElementById("nextBtn");

var prevBtn = document.getElementById("prevBtn");

var currentSlide = 0;


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });

    indicators.forEach(function (indicator) {

        indicator.classList.remove("active");

    });

    slides[index].classList.add("active");

    indicators[index].classList.add("active");

    currentSlide = index;

}


/* =========================================================
   NEXT SLIDE
========================================================= */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* =========================================================
   PREVIOUS SLIDE
========================================================= */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}


/* =========================================================
   SLIDER BUTTONS
========================================================= */

if (nextBtn) {

    nextBtn.addEventListener("click", nextSlide);

}

if (prevBtn) {

    prevBtn.addEventListener("click", previousSlide);

}


/* =========================================================
   SLIDER INDICATORS
========================================================= */

indicators.forEach(function (indicator, index) {

    indicator.addEventListener("click", function () {

        showSlide(index);

    });

});


/* =========================================================
   AUTO SLIDER
========================================================= */

if (slides.length > 0) {

    setInterval(function () {

        nextSlide();

    }, 5000);

}


/* =========================================================
   PRODUCTS DATA
========================================================= */

var products = [

    /* ================= LAMPS ================= */
    /* ================= TACPRO LED ================= */

    {
        name: "لمبه TACPRO LED Headlight",
        productNumber: "TAC-H4-01",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/tacpro1.jpeg",
        description: "لمبة TACPRO LED للسيارات، بتقنية LED وإضاءة قوية، لون إضاءة يصل إلى 6000K، مناسبة لتحسين قوة ووضوح الإضاءة أثناء القيادة."
    },

    {
        name: "لمبه TACPRO LED Super Power",
        productNumber: "TAC-LED-02",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/tacpro2.jpeg",
        description: "لمبة TACPRO LED عالية الأداء، مصممة لتوفير إضاءة قوية وواضحة للسيارات، مع تصميم عملي ومروحة تبريد للمساعدة على الحفاظ على كفاءة اللمبة."
    },

    {
        name: "لمبه TACPRO LED Extra Power",
        productNumber: "TAC-LED-03",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/tacpro3.png",
        description: "لمبة TACPRO LED Extra Power بإضاءة قوية وتصميم مناسب للاستخدام في السيارات، مع لون إضاءة يصل إلى 6000K وأداء مرتفع."
    },
    {
        name: "لمبه (9005) 12 فولت",
        productNumber: "5016",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp1.jpeg",
        description: "لمبة 9005 بجهد 12 فولت، مناسبة للاستخدام في السيارات حسب نوع وموديل السيارة."
    },

    {
        name: "فيشة 3 شوكة 1.5 ملي STAR",
        productNumber: "6087",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp2.jpeg",
        description: "فيشة 3 شوكة مقاس 1.5 ملي من STAR، مناسبة لتوصيلات كهرباء السيارات."
    },

    {
        name: "لمبه H11 بالقاعدة 12 فولت",
        productNumber: "5048",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp3.jpeg",
        description: "لمبة H11 بالقاعدة بجهد 12 فولت، مناسبة لعدد من موديلات السيارات."
    },

    {
        name: "لمبه بسلكه (H3) 24 فولت 70 وات",
        productNumber: "5025",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp4.jpeg",
        description: "لمبة H3 بسلكة بجهد 24 فولت وقدرة 70 وات، مناسبة للاستخدام في السيارات والمركبات."
    },

    {
        name: "لمبه (9006) 12 فولت 100 وات",
        productNumber: "5017",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp5.jpeg",
        description: "لمبة 9006 بجهد 12 فولت وقدرة 100 وات، مناسبة للإضاءة في السيارات حسب الموديل."
    },

    {
        name: "لمبه بدون سلكة (H1) 12 فولت 100 وات",
        productNumber: "5029",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp6.jpeg",
        description: "لمبة H1 بدون سلكة بجهد 12 فولت وقدرة 100 وات، مناسبة للسيارات."
    },

    {
        name: "لمبه بسلكه H3 V12 W100",
        productNumber: "6009",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp7.jpeg",
        description: "لمبة H3 بسلكة بجهد 12 فولت وقدرة 100 وات، مناسبة للاستخدام في السيارات."
    },

    {
        name: "لمبه اوبل (H7) 24 فولت 100 وات",
        productNumber: "5028",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp8.jpeg",
        description: "لمبة H7 بجهد 24 فولت وقدرة 100 وات، مناسبة للاستخدام حسب نوع السيارة."
    },

    {
        name: "لمبه اوبل (H7) 24 فولت 70 وات",
        productNumber: "5034",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp9.jpeg",
        description: "لمبة H7 بجهد 24 فولت وقدرة 70 وات، مناسبة للاستخدام في السيارات والمركبات."
    },

    {
        name: "لمبه بكعب (606) 12V-4W",
        productNumber: "6195",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp10.jpeg",
        description: "لمبة بكعب 606 بجهد 12 فولت وقدرة 4 وات، مناسبة لاستخدامات الإضاءة في السيارات."
    },

    {
        name: "لمبه (880) 12 فولت",
        productNumber: "5011",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp11.jpeg",
        description: "لمبة 880 بجهد 12 فولت، مناسبة للاستخدام في السيارات حسب نوع وموديل السيارة."
    },

    {
        name: "لمبه 200 / 260 جناح (H4) 12 فولت",
        productNumber: "5002",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp12.jpeg",
        description: "لمبة H4 جناح 200 / 260 بجهد 12 فولت، مناسبة للاستخدام في السيارات."
    },

    {
        name: "لمبه بسلكه (H3) 12 فولت 100 وات",
        productNumber: "5031",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp13.jpeg",
        description: "لمبة H3 بسلكة بجهد 12 فولت وقدرة 100 وات، مناسبة للسيارات."
    },

    {
        name: "لمبه 1 بول 12V اصفر 1141A",
        productNumber: "6038",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp14.jpeg",
        description: "لمبة 1 بول 1141A بجهد 12 فولت باللون الأصفر، مناسبة لاستخدامات الإضاءة في السيارات."
    },

    {
        name: "لمبه 120/200 3 جناح (484) 12V",
        productNumber: "6003",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp15.jpeg",
        description: "لمبة 484 ثلاثية الأجنحة بجهد 12 فولت، مناسبة للاستخدام في السيارات."
    },

    {
        name: "لمبه 1 بول (1141) 12V",
        productNumber: "6034",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp16.jpeg",
        description: "لمبة 1 بول 1141 بجهد 12 فولت، مناسبة لعدد من تطبيقات الإضاءة في السيارات."
    },

    {
        name: "لمبه 2 بول (1016) 12V",
        productNumber: "6036",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp17.jpeg",
        description: "لمبة 2 بول 1016 بجهد 12 فولت، مناسبة لاستخدامات الإضاءة في السيارات."
    },

    {
        name: "لمبه H8 بالقاعدة 12 فولت",
        productNumber: "5026",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp18.jpeg",
        description: "لمبة H8 بالقاعدة بجهد 12 فولت، مناسبة للاستخدام حسب نوع وموديل السيارة."
    },

    {
        name: "لمبه W27 V12 881",
        productNumber: "6016",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp19.jpeg",
        description: "لمبة 881 بجهد 12 فولت، مناسبة للاستخدام في السيارات حسب التطبيق والموديل."
    },

    {
        name: "لمبه 5 وات (67) 12V",
        productNumber: "6032",
        category: "lamps",
        categoryName: "لمبات السيارات",
        image: "imgs/لمبات/lamp20.jpeg",
        description: "لمبة 67 بجهد 12 فولت وقدرة 5 وات، مناسبة لاستخدامات الإضاءة المختلفة في السيارات."
    },


    /* ================= VACUUM ================= */

    {
        name: "مضخة فاكيوم 1",
        category: "vacuum",
        categoryName: "مضخات الفاكيوم",
        image: "imgs/products/vacuum1.jpg"
    },

    {
        name: "مضخة فاكيوم 2",
        category: "vacuum",
        categoryName: "مضخات الفاكيوم",
        image: "imgs/products/vacuum2.jpg"
    },


    /* ================= COPPER ================= */

    {
        name: "وصلة نحاس 1",
        category: "copper",
        categoryName: "إكسسوارات ووصلات نحاس",
        image: "imgs/products/copper1.jpg"
    },

    {
        name: "وصلة نحاس 2",
        category: "copper",
        categoryName: "إكسسوارات ووصلات نحاس",
        image: "imgs/products/copper2.jpg"
    },


    /* ================= FREON ================= */

    {
        name: "فريون تبريد 1",
        category: "freon",
        categoryName: "فريونات وزيوت تبريد",
        image: "imgs/products/freon1.jpg"
    },

    {
        name: "زيت تبريد",
        category: "freon",
        categoryName: "فريونات وزيوت تبريد",
        image: "imgs/products/freon2.jpg"
    },


    /* ================= COOLING ================= */

    {
        name: "قطعة تبريد 1",
        category: "cooling",
        categoryName: "قطع غيار التبريد",
        image: "imgs/products/cooling1.jpg"
    },

    {
        name: "قطعة تبريد 2",
        category: "cooling",
        categoryName: "قطع غيار التبريد",
        image: "imgs/products/cooling2.jpg"
    },


    /* ================= WIRES ================= */

    {
        name: "سلك سيارة 1",
        category: "wires",
        categoryName: "أسلاك وكابلات السيارات",
        image: "imgs/71SZJhhRo8L.jpg"
    },

    {
        name: "سلك سيارة 2",
        category: "wires",
        categoryName: "أسلاك وكابلات السيارات",
        image: "imgs/71SZJhhRo8L.jpg"
    }

];


/* =========================================================
   CATEGORY IMAGES
========================================================= */

var categoryImages = {

    lamps:
        "imgs/XWILLTOP-CM-80-W-Led-Car-4.webp",

    vacuum:
        "imgs/74c1655c-c78f-4479-acef-b30679052084-thumbnail-770x770-70.jpeg",

    copper:
        "imgs/images.jfif",

    freon:
        "imgs/item383508.jpg",

    cooling:
        "imgs/74c1655c-c78f-4479-acef-b30679052084-thumbnail-770x770-70.jpeg",

    wires:
        "imgs/71SZJhhRo8L.jpg"

};


/* =========================================================
   GET ELEMENTS
========================================================= */

var categoryCards =
    document.querySelectorAll(".category-card");

var productsContainer =
    document.getElementById("productsContainer");

var productsTitle =
    document.getElementById("productsTitle");

var productsSection =
    document.getElementById("products");

var productsMainImage =
    document.getElementById("productsMainImage");

var productsMainImageContainer =
    document.getElementById("productsMainImageContainer");

var productsHeader =
    document.getElementById("productsHeader");


/* =========================================================
   HIDE PRODUCTS SECTION AT START
========================================================= */

if (productsSection) {

    productsSection.style.display = "none";

}


/* =========================================================
   CATEGORY CLICK
========================================================= */

categoryCards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        event.preventDefault();


        var selectedCategory =
            this.getAttribute("data-category");


        displayProducts(selectedCategory);

    });

});


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(category) {

    /* =====================================================
       CHECK ELEMENTS
    ====================================================== */

    if (!productsContainer || !productsSection) {

        return;

    }


    /* =====================================================
       EMPTY OLD PRODUCTS
    ====================================================== */

    productsContainer.innerHTML = "";


    /* =====================================================
       FILTER PRODUCTS
    ====================================================== */

    var filteredProducts =
        products.filter(function (product) {

            return product.category === category;

        });


    /* =====================================================
       NO PRODUCTS
    ====================================================== */

    if (filteredProducts.length === 0) {

        productsSection.style.display = "block";


        if (productsHeader) {

            productsHeader.style.display = "block";

        }


        if (productsMainImageContainer) {

            productsMainImageContainer.style.display = "none";

        }


        if (productsTitle) {

            productsTitle.innerHTML = "المنتجات";

        }


        productsContainer.innerHTML =

            '<div class="col-12 text-center">' +

                '<h3>لا توجد منتجات في هذا القسم حالياً</h3>' +

            '</div>';


        scrollToProducts();


        return;

    }


    /* =====================================================
       SHOW PRODUCTS SECTION
    ====================================================== */

    productsSection.style.display = "block";


    /* =====================================================
       SHOW CENTER NAME + CATEGORY NAME
    ====================================================== */

    if (productsHeader) {

        productsHeader.style.display = "block";

    }


    if (productsTitle) {

        productsTitle.innerHTML =
            filteredProducts[0].categoryName;

    }


    /* =====================================================
       SHOW CATEGORY IMAGE
    ====================================================== */

    if (
        productsMainImage &&
        productsMainImageContainer &&
        categoryImages[category]
    ) {

        productsMainImage.src =
            categoryImages[category];

        productsMainImage.alt =
            filteredProducts[0].categoryName;

        productsMainImageContainer.style.display = "block";

    }


    /* =====================================================
       DISPLAY PRODUCTS
    ====================================================== */

    filteredProducts.forEach(function (product) {

        productsContainer.innerHTML +=

            '<div class="col-lg-3 col-md-4 col-sm-6">' +

                '<div class="product-card">' +

                    '<div class="product-image">' +

                        '<img src="' +

                        product.image +

                        '" alt="' +

                        product.name +

                        '">' +

                    '</div>' +


                    '<div class="product-info">' +

                        '<h3>' +

                            product.name +

                        '</h3>' +


                        '<p class="product-number">' +

                            'رقم الصنف: ' +

                            (product.productNumber || "") +

                        '</p>' +


                        '<p>' +

                            (product.description || "") +

                        '</p>' +


                        '<a href="https://wa.me/201070411474?text=' +

                        encodeURIComponent(

                            "مرحباً، أريد الاستفسار عن " +

                            product.name +

                            " - رقم الصنف: " +

                            (product.productNumber || "")

                        ) +

                        '" target="_blank" ' +

                        'class="product-btn">' +

                            'استفسر عن المنتج' +

                        '</a>' +

                    '</div>' +

                '</div>' +

            '</div>';

    });


    /* =====================================================
       SCROLL TO PRODUCTS
    ====================================================== */

    scrollToProducts();

}


/* =========================================================
   SCROLL TO PRODUCTS
========================================================= */

function scrollToProducts() {

    setTimeout(function () {

        if (!productsSection) {

            return;

        }


        var navbar =
            document.querySelector(".navbar");


        var navbarHeight =
            navbar ? navbar.offsetHeight : 0;


        var sectionPosition =
            productsSection.getBoundingClientRect().top +

            window.pageYOffset;


        window.scrollTo({

            top:
                sectionPosition -

                navbarHeight -

                10,

            behavior: "smooth"

        });

    }, 100);

}
// ================= Theme Elements =================

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");

// ================= Load Saved Theme =================

const savedTheme = localStorage.getItem("abu-salim-theme");

if (savedTheme === "dark") {


document.body.classList.add("dark-mode");

themeIcon.classList.remove("fa-moon");

themeIcon.classList.add("fa-sun");


}

// ================= Toggle Theme =================

themeToggle.addEventListener("click", function () {


document.body.classList.toggle("dark-mode");


if (document.body.classList.contains("dark-mode")) {

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

    localStorage.setItem("abu-salim-theme", "dark");

} else {

    themeIcon.classList.remove("fa-sun");

    themeIcon.classList.add("fa-moon");

    localStorage.setItem("abu-salim-theme", "light");

}


});

