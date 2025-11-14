
export type FactSheet = Record<string, string | undefined>;

export type Asset = {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl: string | null ;
  factSheet: FactSheet;
  buttons: string[];
};

