export type AwardType = "best-paper" | "honorable-mention";

interface SocialLinkProps {
  url: string;
  title: string;
}

export function SocialLink({ title, url }: SocialLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
}
