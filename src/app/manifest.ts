import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Point Break",
    short_name: "PointBreak",
    description: "Controle de ponto inteligente",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#6d28d9",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
