import { withBase } from '../utils/url';

export interface ProductVariant {
  color: string;
  colorHex: string;
}

export interface ProductImage {
  thumb: string;
  main: string;
}

export interface PerformanceMetric {
  label: string;
  level: number; // 0-100
}

export interface TechnicalSpec {
  name: string;
  specs: Record<string, string>;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'windsurf' | 'wingfoil' | 'accessoires';
  price: number;
  shortDescription: string;
  images: ProductImage[];
  variants: ProductVariant[];
  sizes: string[];
  
  // Description sections
  programme?: string;
  presentation?: string;
  descriptionImages?: string[];
  
  // Shape section
  shapeImages?: {
    outline?: string;
    careneRails?: string;
    tail?: string;
    nose?: string;
  };
  shapeDescriptions?: {
    outline?: string;
    careneRails?: string;
    tail?: string;
    nose?: string;
  };
  
  // Performance metrics
  performance?: PerformanceMetric[];
  
  // Technology
  technology?: string;
  technologyImage?: string;
  
  // Technical specs
  specs?: TechnicalSpec[];
  
  // Related products
  relatedProducts?: string[]; // slugs of related products
}

export const products: Product[] = [
  {
    id: 'fury-1',
    slug: 'fury',
    name: 'Fury',
    category: 'windsurf',
    price: 586,
    shortDescription: 'La planche de freeride ultime, pour performer en tout confort, dans toutes les conditions.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-fury.png'),
        main: withBase('/images/boards/ahd-fury.png')
      },
      {
        thumb: withBase('/images/boards_detail/fury/shap_back_fury.png'),
        main: withBase('/images/boards_detail/fury/shap_back_fury.png')
      },
      {
        thumb: withBase('/images/boards_detail/fury/wing_fury.png'),
        main: withBase('/images/boards_detail/fury/wing_fury.png')
      },
      {
        thumb: withBase('/images/boards_detail/fury/presentation_fury.png'),
        main: withBase('/images/boards_detail/fury/presentation_fury.png')
      }
    ],
    variants: [
      { color: 'Lagoon Blue', colorHex: '#0D3B4C' },
      { color: 'Sunset Red', colorHex: '#FF4444' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    programme: 'Débuter, progresser rapidement et sans difficultés en surf foil.',
    presentation: `La nouvelle FURY est une planche de freeride ultime, cool, esprit mid-length. Capable de générer de la vitesse sur une onde ou une vague microscopique, la FURY est vraiment simple et de confort.\n\nSon shape respire la facilité et offre un style de ride tout en courbes avec une fluidité absolue. Son volume large et largeur aux épaules, offre une rame stable, facilité et douceur.\n\nCette surface avancée facilite avancée avancée quand on doit mettre de la pression devant ou démarrer dans des mousses qui poussent. Le tail assez maigre et le nose porteur évitent de se faire soulever.\n\nUn outline large à l'avant et fin au tail permet à la FURY d'avoir un encombrement minimum au pied arrière dans les tours.\n\nLes rails sont fins pour accentuer ce sentiment de liberté et réduire toujours plus les contacts avec l'eau. Une ligne pure et fluide, un shape super cool.`,
    descriptionImages: [
      withBase('/images/boards_detail/fury/presentation_fury.png'),
      withBase('/images/boards_detail/fury/wing_fury.png')
    ],
    performance: [
      { label: 'Vague', level: 40 },
      { label: 'Freestyle', level: 85 },
      { label: 'Course', level: 90 },
      { label: 'Foil', level: 60 }
    ],
    shapeDescriptions: {
      outline: `L'outline généreux et tout en courbe de la FURY offre la rame beaucoup de confort, une stabilité parfaite et une excellente vitesse, pour prendre n'importe quel type de vague.\n\nL'encombrement reste minimum dans les courses et permet aux turns les plus radicaux avec son pied arrière fin.`,
      careneRails: `L'outline généreux et tout en courbe de la FURY offre la rame beaucoup de confort, une stabilité parfaite et une excellente vitesse, pour prendre n'importe quel type de vague.\n\nL'encombrement reste minimum dans les courses et permet aux turns les plus radicaux avec son pied arrière fin.`,
      tail: `L'outline généreux et tout en courbe de la FURY offre la rame beaucoup de confort, une stabilité parfaite et une excellente vitesse, pour prendre n'importe quel type de vague.\n\nL'encombrement reste minimum dans les courses et permet aux turns les plus radicaux avec son pied arrière fin.`,
      nose: `L'outline généreux et tout en courbe de la FURY offre la rame beaucoup de confort, une stabilité parfaite et une excellente vitesse, pour prendre n'importe quel type de vague.`
    },
    shapeImages: {
      outline: withBase('/images/boards_detail/fury/outline_fury.png'),
      careneRails: withBase('/images/boards_detail/fury/shap_back_fury.png'),
      tail: withBase('/images/boards_detail/fury/shap_back_fury.png'),
      nose: withBase('/images/boards_detail/fury/shap_nose_fury.png')
    },
    technology: `Shape en 3D sur logiciel de modélisation. Prêtshape à la commande numérique pour une fiabilité totale. Contrôle du shape par templates traditionnels, finition du dernier. Résinée epoxy et pain de mousse EPS : solide et léger. Stratification carbone et verre sur pain de mousse EPS 3mm. Détail du puit : 1 couche de fibre de verre 6oz et 1 couche de fibre de carbone. Hot coat latino pour les déchaussements. Renforts fibre carbone en batten pour renforcer les 2 patche renfoit. Carbon finish : mat, réalisée à la main, pour un gain de poids et facilité d'entretien. Grip : Pais anti-dérapant très large pour traction d'enfer ! Hot cost latino pour un excellent rapport légèrement mettant en avant toutes les capacités. Ces planches sont 100% ébauches et gassées dans notre usine Asie qui fabrique strictement nos méthodes développées en France et testées à la mondes entier.`,
    technologyImage: withBase('/images/boards_detail/fury/composition.png'),
    specs: [
      {
        name: 'Dimensions et volume',
        specs: {
          '5\'6" x 20" x 2"': '30 L',
          '5\'10" x 20.5" x 2.25"': '33 L',
          '6\'0" x 20.75" x 2.375"': '37 L',
          '6\'2" x 21" x 2.5"': '40 L'
        }
      }
    ],
    relatedProducts: ['zen', 'compact-foil', 'sls']
  },
  {
    id: 'zen-1',
    slug: 'zen',
    name: 'Zen',
    category: 'windsurf',
    price: 549,
    shortDescription: 'Glisse fluide et stabilité active : l\'arme parfaite pour progresser en freeride.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-zen.png'),
        main: withBase('/images/boards/ahd-zen.png')
      }
    ],
    variants: [
      { color: 'Atlantic Blue', colorHex: '#0A3B5C' },
      { color: 'Carbon Black', colorHex: '#1a1a1a' }
    ],
    sizes: ['M', 'L', 'XL'],
    programme: 'Progresser rapidement en windsurf freeride avec stabilité maximale.',
    presentation: 'Une planche de progression idéale pour tous les riders.'
  },
  {
    id: 'compact-foil-1',
    slug: 'compact-foil',
    name: 'Compact Foil',
    category: 'wingfoil',
    price: 899,
    shortDescription: 'Prise en main immédiate, parfaite pour progresser en wing foil.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-compact-foil.png'),
        main: withBase('/images/boards/ahd-compact-foil.png')
      }
    ],
    variants: [
      { color: 'Lagoon Blue', colorHex: '#0D3B4C' },
      { color: 'Signal Orange', colorHex: '#FF6600' }
    ],
    sizes: ['60L', '75L', '88L']
  },
  {
    id: 'fury-wing-1',
    slug: 'fury-wing',
    name: 'Fury Wing',
    category: 'wingfoil',
    price: 999,
    shortDescription: 'Carène tendue et rails affutés pour les riders à la recherche de vitesse.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-fury.png'),
        main: withBase('/images/boards/ahd-fury.png')
      }
    ],
    variants: [
      { color: 'Lagoon Blue', colorHex: '#0D3B4C' },
      { color: 'Signal Orange', colorHex: '#FF6600' }
    ],
    sizes: ['88 L']
  },
  {
    id: 'u-surf-foil-1',
    slug: 'u-surf-foil',
    name: 'U-Surf Foil',
    category: 'wingfoil',
    price: 949,
    shortDescription: 'Hyper compacte, elle maximise la maniabilité dans les vagues.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-zen.png'),
        main: withBase('/images/boards/ahd-zen.png')
      }
    ],
    variants: [
      { color: 'Lagoon Blue', colorHex: '#0D3B4C' },
      { color: 'Signal Orange', colorHex: '#FF6600' }
    ],
    sizes: ['60 L']
  },
  {
    id: 'sky-rider-1',
    slug: 'sky-rider',
    name: 'Sky Rider',
    category: 'wingfoil',
    price: 975,
    shortDescription: 'Stabilité longitudinale accrue pour décoller tôt et rester en vol.',
    images: [
      {
        thumb: withBase('/images/boards/ahd-compact-foil.png'),
        main: withBase('/images/boards/ahd-compact-foil.png')
      }
    ],
    variants: [
      { color: 'Lagoon Blue', colorHex: '#0D3B4C' },
      { color: 'Signal Orange', colorHex: '#FF6600' }
    ],
    sizes: ['100 L']
  },
  {
    id: 'sls-1',
    slug: 'sls',
    name: 'SL-S',
    category: 'windsurf',
    price: 1549,
    shortDescription: 'Version slalom pure pensée pour accélérer dès la relance.',
    images: [
      {
        thumb: withBase('/images/boards/AHD_SLS.png'),
        main: withBase('/images/boards/AHD_SLS.png')
      }
    ],
    variants: [
      { color: 'Atlantic Blue', colorHex: '#0A3B5C' }
    ],
    sizes: ['M', 'L']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  if (!product.relatedProducts) return [];
  return product.relatedProducts
    .map(slug => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);
}
