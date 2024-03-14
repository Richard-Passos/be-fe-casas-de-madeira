import type { Schema, Attribute } from '@strapi/strapi';

export interface EstruturaSecao extends Schema.Component {
  collectionName: 'components_estrutura_secaos';
  info: {
    displayName: 'Se\u00E7\u00E3o';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    actions: Attribute.Component<'ui.botao', true>;
    items: Attribute.Component<'ui.item', true>;
    name: Attribute.Enumeration<['Hero', 'Why us', 'Work', 'Process']> &
      Attribute.Required;
  };
}

export interface SeoMetadado extends Schema.Component {
  collectionName: 'components_seo_metadados';
  info: {
    displayName: 'Metadado';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface UiBotao extends Schema.Component {
  collectionName: 'components_ui_botaos';
  info: {
    displayName: 'A\u00E7\u00E3o';
    icon: 'plus';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String;
  };
}

export interface UiItem extends Schema.Component {
  collectionName: 'components_ui_items';
  info: {
    displayName: 'Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'estrutura.secao': EstruturaSecao;
      'seo.metadado': SeoMetadado;
      'ui.botao': UiBotao;
      'ui.item': UiItem;
    }
  }
}
