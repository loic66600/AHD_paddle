// Jeu de contenus éditoriaux utilisé sur la page d'accueil

import { withBase } from '../utils/url';

export const categories = [
  {
    title: 'Windsurf',
    description: 'Freeride, wave, race : explorez la collection la plus performante de la côte Atlantique.',
    image: withBase('/images/category-windsurf.webp'),
    link: withBase('/windsurf')
  },
  {
    title: 'Wingfoil',
    description: 'Foils carbone, ailes haute performance et boards compactes pour maîtriser chaque rafale.',
    image: withBase('/images/category-wingfoil.jpg'),
    link: withBase('/wingfoil')
  },
  {
    title: 'Accessoires',
    description: 'Pads, housses, voiles signature et lignes carbone pour compléter votre setup AHD.',
    image: withBase('/images/category-%20accesoires.png'),
    link: withBase('/accessoires')
  }
];

export const lineup = [
  {
    name: 'Fury',    slug: 'fury',    description: 'Planche de freeride ultime, nerveuse et confortable sur tous les plans d’eau.',
    price: '549 €',
    image: withBase('/images/boards/ahd-fury.png'),
    discipline: 'Freeride signature'
  },
  {
    name: 'SL-S',
    slug: 'sls',
    description: 'La référence slalom : accélération immédiate et contrôle dans le chantier.',
    price: '549 €',
    image: withBase('/images/boards/AHD_SLS.png'),
    discipline: 'Slalom pur'
  },
  {
    name: 'Compact Foil',
    slug: 'compact-foil',
    description: 'Shape compact et portance précoce pour voler en vent médium dès 12 nœuds.',
    price: '549 €',
    image: withBase('/images/boards/ahd-compact-foil.png'),
    discipline: 'Foil performance'
  },
  {
    name: 'Zen',    slug: 'zen',    description: 'Glisse fluide et stabilité active : l’arme parfaite pour progresser en freeride.',
    price: '549 €',
    image: withBase('/images/boards/ahd-zen.png'),
    discipline: 'Progression'
  }
];

export const experiences = [
  {
    title: 'Programmes Signature',
    copy: 'Des clinics en Méditerranée au downwind nordique : choisissez votre terrain de jeu, nous fournissons les AHD, coachs et assistance.',
    image: withBase('/images/ahd-experience.webp')
  },
  {
    title: 'Atelier Sur Mesure',
    copy: 'Accédez aux designers AHD pour personnaliser vos pads, vos rails ou votre finition carbone, directement depuis notre atelier vendéen.',
    image: withBase('/images/category-%20accesoires.png')
  },
  {
    title: 'Services Skipper',
    copy: 'Transport, préparation course, entretien foil : une équipe dédiée accompagne votre saison sur tous les spots européens.',
    image: withBase('/images/category-wingfoil.jpg')
  }
];

export const insights = [
  {
    eyebrow: 'Technologie',
    title: 'Carbone Mantis T700',
    body: 'Assemblage en autoclave issu de la course au large, rigidité accrue de 18 % pour des relances explosives.'
  },
  {
    eyebrow: 'Hydrodynamique',
    title: 'Carène Vector Flow',
    body: 'Entrées d’eau chanfreinées et triple concave optimisés CFD pour garder le cap même en clapot croisé.'
  },
  {
    eyebrow: 'Connectivité',
    title: 'AHD Sense',
    body: 'Capteurs intégrés, application compagnon et coaching vocal en direct pour piloter vos progrès.'
  }
];
