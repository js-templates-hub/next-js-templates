import data from '../data.json';

export type PageId = keyof typeof data.pages;

export type SectionId = keyof (typeof data.pages)[PageId]['sections'];

export type PageProps = {
  pageId: PageId;
};

export type ContainerProps = {
  page: Page;
};

export type SectionProps = {
  section: Section;
};

export type SectionWrapperProps = {
  section: Section;
  containerClasses?: string;
  children?: any;
};

export type Section = {
  id: string;
  animation: Animation;
  backgrounds: Record<string, string>[];
  containerClasses: string;
  data: IGenericElement;
};

export type Seo = {
  title: string;
  description: string;
};

export type Page = {
  id: PageId;
  label: string;
  link: string;
  containerClasses: string;
  backgrounds?: string[];
  sections: Record<SectionId | string, Section>;
  seo?: Seo;
};

export type IGenericTextElement = {
  type: string;
  classes: string;
  content: string;
  animation?: Animation;
};

export type IGenericElement = Pick<
  Elements,
  | 'button'
  | 'buttonClasses'
  | 'buttonAnimation'
  | 'buttons'
  | 'buttonsClasses'
  | 'img'
  | 'imgClasses'
  | 'imgAnimation'
  | 'video'
  | 'videoClasses'
  | 'imgBackgrounds'
  | 'items'
  | 'itemsClasses'
  | 'items2'
  | 'items2Classes'
  | 'itemsBackgrounds'
  | 'title'
  | 'titleClasses'
  | 'titleAnimation'
  | 'titleBackgrounds'
  | 'number'
  | 'numberClasses'
  | 'numberAnimation'
  | 'numberBackgrounds'
  | 'subtitle'
  | 'subtitleClasses'
  | 'subtitleAnimation'
  | 'subtitleBackgrounds'
  | 'text'
  | 'textClasses'
  | 'textAnimation'
  | 'link'
  | 'linkClasses'
  | 'linkAnimation'
  | 'links'
  | 'linksClasses'
  | 'imgs'
  | 'imgsClasses'
  | 'imgsBackgrounds'
  | 'label'
  | 'labelClasses'
  | 'labelAnimation'
  | 'input'
  | 'inputClasses'
  | 'inputBackgrounds'
  | 'form'
  | 'formClasses'
  | 'formAnimation'
  | 'formBackgrounds'
  | 'form2'
  | 'form2Classes'
  | 'form2Animation'
  | 'form2Backgrounds'
>;

export type TitleElement = {
  title: string;
  titleClasses: string;
};

export type ImgItem = {
  src: string;
  alt: string;
  href?: string;
  newTab?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

export type ButtonItem = {
  label: string;
  href: string;
  type: 'submit' | 'reset' | 'button' | 'link' | undefined;
  newTab?: boolean;
};

export type ImgElement = {
  img: ImgItem;
  imgClasses: string;
  imgBackgrounds: any[];
  containerClasses?: string;
  width?: number;
  height?: number;
};

export type VideoElement = ImgItem & {
  videoSrc: string;
};
export type ButtonElement = {
  button: ButtonItem;
  buttonClasses: string;
  animation?: Animation;
  children?: any;
};

export type LinkElement = {
  link: LinkItem;
  linkClasses: string;
  animation?: Animation;
};

export type Form = {
  useSubmitFunc: boolean;
  method: string;
  action: string;
  items: Elements[];
  itemsContainerClasses: string;
  itemsLabelClasses: string;
  itemsInputClasses: string;
  itemsBackgrounds: any[];
};

export type FormInput = {
  name: string;
  value: string;
  label?: string;
  type: any;
  placeholder?: string;
  required?: boolean;
  width?: string;
};

export type NumberElement = {
  content: number;
  classes: string;
  animation?: Animation;
};
export type Animation = {
  effects?: {
    enabled?: boolean;
    direction?: string;
    duration?: number;
    delay?: number;
    offset?: number;
    ease?: string;
    once?: boolean;
  };
};

export type Elements = {
  label: string;
  labelClasses: string;
  labelAnimation?: Animation;
  title: string;
  titleClasses: string;
  titleAnimation?: Animation;
  titleBackgrounds: any[];
  text: string;
  textClasses: string;
  textAnimation?: Animation;
  textBackgrounds: any[];
  number: number;
  numberClasses: string;
  numberAnimation?: Animation;
  numberBackgrounds: any[];
  subtitle: string;
  subtitleClasses: string;
  subtitleAnimation?: Animation;
  subtitleBackgrounds: any[];
  img: ImgItem;
  imgClasses: string;
  imgAnimation?: Animation;
  video: VideoElement;
  videoClasses: string;
  imgBackgrounds: any[];
  imgs: Elements[];
  imgsClasses: string;
  imgsBackgrounds: any[];
  link: LinkItem;
  linkClasses: string;
  linkAnimation?: Animation;
  links: LinkElement[];
  linksClasses: string;
  button: ButtonItem;
  buttonClasses: string;
  buttonAnimation?: Animation;
  buttons: ButtonItem[];
  buttonsClasses: string;
  items: Elements[];
  itemsClasses: string;
  itemsBackgrounds: any[];
  items2: Elements[];
  items2Classes: string;
  items2Backgrounds: any[];
  input: FormInput;
  containerClasses: string;
  inputClasses: string;
  inputAnimation?: Animation;
  inputBackgrounds: any[];
  form: Form;
  formClasses: string;
  formAnimation?: Animation;
  formBackgrounds: any[];
  form2: Form;
  form2Classes: string;
  form2Animation?: Animation;
  form2Backgrounds: any[];
};

export type PageSeo = {
  title: string;
  description: string;
};
