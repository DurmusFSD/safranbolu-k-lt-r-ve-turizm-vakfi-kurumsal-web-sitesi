import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>
        Harika insanlar olmadan harika vizyon konu dışıdır. Birlikte çalışalım.
      </h1>
      <h1>Mesajınız:</h1>
      <form>
        <input type="text" placeholder="İsim " />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Mesajınız" />
        <textarea placeholder="Mesaj" rows="4"></textarea>
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ContactForm;
