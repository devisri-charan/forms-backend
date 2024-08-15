import type { Schema, Attribute } from '@strapi/strapi';

export interface ValidationRulesValidationRules extends Schema.Component {
  collectionName: 'components_validation_rules_validation_rules';
  info: {
    displayName: 'Validation Rules';
  };
  attributes: {
    rule_name: Attribute.String;
    rule_value: Attribute.String;
  };
}

export interface OptionsFieldOptions extends Schema.Component {
  collectionName: 'components_options_field_options';
  info: {
    displayName: 'Field Options';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'validation-rules.validation-rules': ValidationRulesValidationRules;
      'options.field-options': OptionsFieldOptions;
    }
  }
}
