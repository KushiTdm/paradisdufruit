"use client";

export default function ContactForm() {
  return (
    <form
      className="rounded-3xl p-8 lg:p-10"
      style={{ backgroundColor: "white", boxShadow: "0 4px 24px rgba(32,77,54,0.06)" }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Merci ! Votre message a bien été envoyé (démo).");
      }}
    >
      <h2 className="font-display text-3xl mb-6" style={{ color: "#204D36" }}>
        Écrivez-nous
      </h2>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Prénom"
            className="font-body text-sm px-5 py-3 rounded-full outline-none w-full"
            style={{ backgroundColor: "#FAF9F5", color: "#204D36" }}
          />
          <input
            type="text"
            placeholder="Nom"
            className="font-body text-sm px-5 py-3 rounded-full outline-none w-full"
            style={{ backgroundColor: "#FAF9F5", color: "#204D36" }}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full font-body text-sm px-5 py-3 rounded-full outline-none"
          style={{ backgroundColor: "#FAF9F5", color: "#204D36" }}
        />
        <textarea
          rows={5}
          placeholder="Votre message…"
          className="w-full font-body text-sm px-5 py-3 rounded-2xl outline-none resize-none"
          style={{ backgroundColor: "#FAF9F5", color: "#204D36" }}
        />
      </div>

      <button type="submit" className="btn-pill btn-pill-coral mt-6 w-full sm:w-auto">
        Envoyer
      </button>
    </form>
  );
}
