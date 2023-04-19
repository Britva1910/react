export interface IPersonCard {
  firstName: string | undefined;
  lastName: string | undefined;
  birthday: string | undefined;
  country: string | undefined;
  consent: boolean | undefined;
  promo: string | undefined;
  file: string;
}

export interface IResponseSearchByWord {
  results: IImageData[];
  total: number | null;
  total_pages: number | null;
}
export interface IImageData {
  alt_description: string | null;
  urls: IImageUrls;
  user: IUserData;
  likes: string;
  promoted_at: string;
  downloads: number;
  id: string;
  views: number;
  tags_preview: Tags[];
}

interface IImageUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
}

interface IUserData {
  name: string;
}

interface Tags {
  type: string;
  title: string;
}
