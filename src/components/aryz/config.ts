// Edite estas constantes para personalizar contatos e vídeo
export const CONFIG = {
  videoUrl: "https://youtu.be/UvnjLZWvY_U",
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá! Vim pela landing page ARYZ + FBN e gostaria de conhecer as soluções de benefícios corporativos.",
  contactEmail: "contato@aryz.com.br",
};

export function youtubeEmbed(url: string): string | null {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
}
