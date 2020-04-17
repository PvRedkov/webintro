/**
 * FP Order service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ErrorResponse } from '../model/errorResponse';
import { TeaOrder } from '../model/teaOrder';
import { TeaSpot } from '../model/teaSpot';
import { TeaType } from '../model/teaType';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'http://localhost:10011/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * List of tea types to order
     * @param spotId Tea spot to filter out
     * @param startTime Start time of orders updates
     * @param endTime End time of orders updates
     * @param page Page to iterate, 1 is default
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrders(spotId?: string, startTime?: string, endTime?: string, page?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<TeaOrder>>;
    public listOrders(spotId?: string, startTime?: string, endTime?: string, page?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeaOrder>>>;
    public listOrders(spotId?: string, startTime?: string, endTime?: string, page?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeaOrder>>>;
    public listOrders(spotId?: string, startTime?: string, endTime?: string, page?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (spotId !== undefined && spotId !== null) {
            queryParameters = queryParameters.set('spotId', <any>spotId);
        }
        if (startTime !== undefined && startTime !== null) {
            queryParameters = queryParameters.set('startTime', <any>startTime);
        }
        if (endTime !== undefined && endTime !== null) {
            queryParameters = queryParameters.set('endTime', <any>endTime);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<TeaOrder>>('get',`${this.basePath}/tea/orders`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * List of tea cafe and tea spot places
     * @param tea The name of the tea type for filtering
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listSpots(tea?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<TeaSpot>>;
    public listSpots(tea?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeaSpot>>>;
    public listSpots(tea?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeaSpot>>>;
    public listSpots(tea?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (tea !== undefined && tea !== null) {
            queryParameters = queryParameters.set('tea', <any>tea);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<TeaSpot>>('get',`${this.basePath}/tea/spots`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * List of tea types to order
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listTeaTypes(observe?: 'body', reportProgress?: boolean): Observable<Array<TeaType>>;
    public listTeaTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeaType>>>;
    public listTeaTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeaType>>>;
    public listTeaTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<TeaType>>('get',`${this.basePath}/tea/types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
