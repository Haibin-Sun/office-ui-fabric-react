/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {
  ITheme,
  IStyle,
  IStyleFunction
} from '../../Styling';
import { IComponentAs } from '../../Utilities';

export interface ILabel {

}

export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Render the root element as another type.
   */
  as?: IComponentAs<React.AllHTMLAttributes<HTMLElement>>;

  /**
   * Optional callback to access the ILabel interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ILabel) => void;

  /**
   * Whether the associated form field is required or not
   * @defaultvalue false
   */
  required?: boolean;

  /**
   * Renders the label as disabled.
   */
  disabled?: boolean;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Styles for the label.
   */
  getStyles?: IStyleFunction<ILabelStyleProps, ILabelStyles>;
}

export interface ILabelStyles {
  /**
   * Styles for the root element.
   */
  root: IStyle;
}

export interface ILabelStyleProps {
  /**
   *
   */
  theme: ITheme;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}