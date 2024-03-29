/* tslint:disable */
/* eslint-disable */

/**
 * Clase EventUpdateRequest
 */
export interface EventUpdateRequest {

  /**
   * Categoría de Evento
   */
  category: string;

  /**
   * Fecha Máxima para registrar Candidatos
   */
  dateMaxRegisterCandidate: string;

  /**
   * Fecha  Máxima para registrar participantes
   */
  dateMaxRegisterParticipants: string;

  /**
   * Fecha máxima para realizar votación
   */
  dateMaxVote: string;

  /**
   * Fecha  mínima para realizar votación
   */
  dateMinVote: string;

  /**
   * Descripción de evento
   */
  description: string;

  /**
   * Permitir máximo personas para Evento
   */
  maxPeople: boolean;

  /**
   * Nombre de evento
   */
  name: string;

  /**
   * Máximo de Candidatos
   */
  numberMaxCandidate: number;

  /**
   * Número máximo de personas para evento
   */
  numberMaxPeople: number;
}
