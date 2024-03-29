/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ForggotenPasswordRequest } from '../models/forggoten-password-request';
import { LoginRequest } from '../models/login-request';
import { LoginResponseGenericResponse } from '../models/login-response-generic-response';
import { UnitGenericResponse } from '../models/unit-generic-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthLoginPost
   */
  static readonly ApiAuthLoginPostPath = '/api/auth/login';

  /**
   * Generar token mediante credenciales.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * Generar token mediante credenciales.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain(params?: {
    body?: LoginRequest
  }): Observable<LoginResponseGenericResponse> {

    return this.apiAuthLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

  /**
   * Generar token mediante credenciales.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * Generar token mediante credenciales.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json(params?: {
    body?: LoginRequest
  }): Observable<LoginResponseGenericResponse> {

    return this.apiAuthLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

  /**
   * Path part for operation apiAuthForgottenpasswordPost
   */
  static readonly ApiAuthForgottenpasswordPostPath = '/api/auth/forgottenpassword';

  /**
   * Olvidé contraseña.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthForgottenpasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgottenpasswordPost$Plain$Response(params?: {
    body?: ForggotenPasswordRequest
  }): Observable<StrictHttpResponse<UnitGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthForgottenpasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UnitGenericResponse>;
      })
    );
  }

  /**
   * Olvidé contraseña.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthForgottenpasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgottenpasswordPost$Plain(params?: {
    body?: ForggotenPasswordRequest
  }): Observable<UnitGenericResponse> {

    return this.apiAuthForgottenpasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UnitGenericResponse>) => r.body as UnitGenericResponse)
    );
  }

  /**
   * Olvidé contraseña.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthForgottenpasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgottenpasswordPost$Json$Response(params?: {
    body?: ForggotenPasswordRequest
  }): Observable<StrictHttpResponse<UnitGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthForgottenpasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UnitGenericResponse>;
      })
    );
  }

  /**
   * Olvidé contraseña.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthForgottenpasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgottenpasswordPost$Json(params?: {
    body?: ForggotenPasswordRequest
  }): Observable<UnitGenericResponse> {

    return this.apiAuthForgottenpasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UnitGenericResponse>) => r.body as UnitGenericResponse)
    );
  }

}
