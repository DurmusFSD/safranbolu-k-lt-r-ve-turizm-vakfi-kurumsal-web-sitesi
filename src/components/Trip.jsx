import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Müze Kent Safranbolu</h1>
      <p>Safranbolu'da Gezilecek Yerler</p>
      <div className="tripcard">
        <TripData
          image="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT6tv4JalkMtAAhC8Y2crVNBWu-LVf0nshrXIiBq24AbChVTuCcqd3FNz0f0FXSyISFC6C51uH7Rlp-uNl6O3MD_1TkI74U8GPhzsad0Q"
          heading="Tokatlı Kanyonu"
          text="Tarihi su kemeri manzarasına sahip olan ve yürüyüş parkuru, şelalesi ve kafesi bulunan doğal kanyon."
        />
        <TripData
          image="https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20210326170503794_DSC_4009.jpeg?format=jpg&quality=50"
          heading="Köprülü Mehmet Paşa Cami"
          text="Sadrazam Köprülü Mehmet Paşa tarafından (H.1072/M.1661) yaptırılmıştır. Cami; Çarşı’da Çeşme Mahallesi'ndedir. Yazıtı yoktur, ancak caminin bağlı bulunduğu Köprülü Mehmet Paşa Vakfı'nın mühründe H.1072/M.1661 tarihi bulunmaktadır. Muhtemelen cami 1661 yılında ibadete açılmıştır. Yine Sadrazam Köprülü Mehmet Paşa tarafından gönderilen el yazması bir Kuran’dan caminin 1661 yılında ibadete açıldığı anlaşılmaktadır. Cami tümüyle XVII. yüzyılın özelliklerini belirgin bir şekilde ortaya koymaktadır. Avlusunda şadırvan, güneş saati ile kütüphane ve muvakkithane olarak müştereken yapılmış bina bulunmaktadır."
        />
        <TripData
          image="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT6tv4JalkMtAAhC8Y2crVNBWu-LVf0nshrXIiBq24AbChVTuCcqd3FNz0f0FXSyISFC6C51uH7Rlp-uNl6O3MD_1TkI74U8GPhzsad0Q"
          heading="Kaymakamlar Gezi Evi"
          text="Kaymakamlar Evi 18 ve 19.yüzyıl Türk toplumunun geçmişini, kültürünü ve yaşama biçimi ile teknolojisini  yansıtan Safranbolu Evleri arasında önemli bir örnektir. 19.yüzyıl başlarında yapıldığı sanılmaktadır. Sahibi Safranbolu Kışlası kumandanı Hacı Mehmet Efendidir. Hacı Mehmet Efendi’ye yarbay karşılığı olan “Kaim–Makam” denilmesi nedeniyle ailesi; dolayısıyla evleri halk arasında bu isimle söylenegelir olmuştur."
        />
      </div>
    </div>
  );
}

export default Trip;
