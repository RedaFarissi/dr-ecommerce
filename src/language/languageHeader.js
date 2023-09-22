var headerTop = {}
if(true){
  headerTop["placeholder"] =  "أدخل اسم المنتج الخاص بك";
  headerTop['login_title'] = "تسجيل الدخول";
  headerTop['create_store_title'] = "إنشاء المتجر بسهولة";
} else if(true) {
  headerTop['placeholder'] = "Enter your product name"
  headerTop["login_title"] = "login";
  headerTop['create_store_title'] = "create store easily";
}


const languages_link = {}
if(true){
  languages_link['home'] = "الصفحة الرئيسية"
  languages_link['men'] = "الرجال"
  languages_link['jewellery'] = "مجوهرات"
  languages_link['electronics'] = "الكتروني"
  languages_link['women'] = "النساء"
  languages_link['accessories'] = "إكسسوارات"
  languages_link['kids'] = "أطفال"
}else if(true){
  languages_link['home'] = "Homepage"
  languages_link['men'] = "men"
  languages_link['jewellery'] = "jewellery"
  languages_link['electronics'] = "electronics"
  languages_link['women'] = "women"
  languages_link['accessories'] = "accessories"
  languages_link['kids'] = "kids"
}



export {headerTop as default , languages_link}  ;