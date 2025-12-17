interface InviteEmailProps {
  inviteLink: string;
  companyName: string;
}

export function InviteEmail({ inviteLink, companyName }: InviteEmailProps) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
      <h2 style={{ color: "#6d28d9" }}>Point Break 🌊</h2>
      <h1>Você foi convidado!</h1>
      <p style={{ fontSize: "16px" }}>
        Você recebeu um convite para se juntar à equipe da{" "}
        <strong>{companyName}</strong> no Point Break.
      </p>

      <div style={{ margin: "30px 0" }}>
        <a
          href={inviteLink}
          style={{
            backgroundColor: "#6d28d9",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Aceitar Convite
        </a>
      </div>

      <p style={{ fontSize: "14px", color: "#666" }}>
        Ou copie e cole este link no seu navegador: <br />
        <a href={inviteLink}>{inviteLink}</a>
      </p>

      <hr style={{ borderColor: "#eee", margin: "20px 0" }} />
      <p style={{ fontSize: "12px", color: "#999" }}>
        Se você não esperava este convite, pode ignorar este e-mail.
      </p>
    </div>
  );
}
