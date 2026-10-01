export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export type ArticleSection = { id: string; title: string; blocks: Block[] };

export type Photo = { src: string; alt: string; caption: string };

export type ServiceContent = {
  breadcrumb: { label: string; href?: string }[];
  label: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  cardQuestion: string;
  part1: ArticleSection[];
  photos?: [Photo, Photo, Photo];
  part2?: ArticleSection[];
  methods?: { label: string; href: string }[];
  projects?: { title: string; place: string; image: string; alt: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};
