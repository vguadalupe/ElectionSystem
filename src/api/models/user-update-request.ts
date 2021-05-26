/* tslint:disable */
/* eslint-disable */

/**
 * Clase Request para Update Usuario
 */
export interface UserUpdateRequest {

  /**
   * Fecha de nacimiento Usuario
   */
  birthDate: string;

  /**
   * Cédula Usuario
   */
  dni: string;

  /**
   * Primer Apellido Usuario
   */
  firstLastName: string;

  /**
   * Primer nombre Usuario
   */
  firstName: string;

  /**
   * Segundo Apellido Usuario
   */
  secondLastName?: null | string;

  /**
   * Segundo nombre Usuario
   */
  secondName?: null | string;

  /**
   * Nick Usuario
   */
  userName: string;
}
