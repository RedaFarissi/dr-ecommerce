
class Language{
    constructor(language){
        this.language = language
        this.headerTop = { }
        this.banner = { }
        this.aside = { }
        this.homeProductTop = {}
        this.dealDay ={}
        this.homeLastProdut = {}
        this.login = {}
        this.cart = {}
        this.dir = this.language === "arabic" ? "rtl" : "ltr";       
    }
    HeaderTop(){
      if(this.language === "arabic"){
        this.headerTop["placeholder"] =  "أدخل اسم المنتج الخاص بك";
        this.headerTop['login_title'] = "تسجيل الدخول";
        this.headerTop['create_store_title'] = "بيع المنتج الخاص بك";
        this.headerTop['icon_lang'] = "تغيير اللغة إلى الإنجليزية";
        this.headerTop['icon_cart'] = 'عربة التسوق'
        this.headerTop['icon_dark'] = 'الوضع المظلم'
        this.headerTop['icon_light'] = 'وضع الضوء'
        this.headerTop['profile'] = 'حساب تعريفي'
      } else {
        this.headerTop['placeholder'] = "Enter your product name"
        this.headerTop["login_title"] = "Login";
        this.headerTop['create_store_title'] = "Sell your Product";
        this.headerTop['icon_lang'] = "change language to Arabic";
        this.headerTop['icon_cart'] = 'Cart'
        this.headerTop['icon_dark'] = 'Dark mode'
        this.headerTop['icon_light'] = 'Light mode'
        this.headerTop['profile'] = 'Profile'
      }
      return this.headerTop
    }
    Banner(){
      if(this.language === "arabic"){
        this.banner['heading_1'] = "بيع أحدث صيحات الموضة النسائية"
        this.banner['heading_2'] = "النظارات الشمسية الحديثة"
        this.banner['heading_3'] = "بيع أزياء الصيف الجديدة"
        
      }else{
        this.banner['heading_1'] = "Selling the latest women's fashion"
        this.banner['heading_2'] = "Modern sunglasses"
        this.banner['heading_3'] = "New summer fashion sale"
      }
      return this.banner
    }

    Aside(){
      if(this.language === "arabic"){
        this.aside['title'] = "أحسن تخفيضات";
      }else{
        this.aside['title'] = "Best discounts";
      }
      return this.aside
    }

    HomeProductTop(){
      if(this.language === "arabic"){
        this.homeProductTop['title1'] = "أخر المنتجات"
        this.homeProductTop['title2'] = "الأعلى تقييما"
      }else{
        this.homeProductTop['title1'] = "Latest products"
        this.homeProductTop['title2'] = "Highest rated"
      }
      return this.homeProductTop
    }

    DealDay(){
      if(this.language === "arabic"){
        this.dealDay['title'] = "صفقة اليوم"
      }else{
        this.dealDay['title'] = "Deal of the day"
      }
      return this.dealDay
    }

    HomeLastProdut(){
      if(this.language === "arabic"){
        this.homeLastProdut['title'] = "جميع المنتجات"
      }else{
        this.homeLastProdut['title'] = "All Products"
      }
      return this.homeLastProdut
    }
    Login(){
        if(this.language === "arabic"){
          this.login['h3'] = "تسجيل الدخول";
          this.login['p'] = "قم بتسجيل الدخول لإنشاء متجر بسهولة";
          this.login['username'] = "اسم المستخدم";
          this.login['password'] = "كلمة المرور";
          this.login['forgot_password'] ="هل نسيت كلمة السر";
          this.login['sign_in_with'] = "أو تسجيل الدخول باستخدام";
          this.login['Create_account'] = "قم بإنشاء حساب";
        }else{
          this.login['h3'] = "Sign In"
          this.login['p'] = "Sign in to easily create a store";
          this.login['username'] = "Username";
          this.login['password'] = "Password";
          this.login['forgot_password'] ="Forgot your password";
          this.login['sign_in_with'] = "or sign in with";
          this.login['Create_account'] = "Create an account";
        }       
        return this.login;
    }
    Cart(){
      if(this.language === "arabic"){
        this.cart['h3'] = "عربة التسوق"
        this.cart['btn1'] =  "المضي قدما في الدفع"
        this.cart['btn2'] = "مواصلة التسوق"
      }else{
        this.cart['h3'] = "Shopping Cart"
        this.cart['btn1'] = "Proceed to Pay"
        this.cart['btn2'] = "Continue Shopping"
      }
      return this.cart 
    }
     
}

const check_langage = new Language(localStorage.getItem('language')||"english")
const login = check_langage.Login();
const headerTop = check_langage.HeaderTop()
const dir = check_langage.dir
const banner = check_langage.Banner()
const aside = check_langage.Aside()
const homeProductTop = check_langage.HomeProductTop()
const dealDay = check_langage.DealDay()
const homeLastProdut = check_langage.HomeLastProdut()
const cart = check_langage.Cart()

const languages = {
  dir , headerTop , banner , aside , login ,  homeProductTop , dealDay , 
  homeLastProdut , cart , 
};

export default languages;