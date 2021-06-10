import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Email } from "../models/email";

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    api = `${environment.apiUrl}/emails`;
    cabecalho = new HttpHeaders({ 'Authorization': `${localStorage.getItem('cmail-token')}` });

    constructor(private http: HttpClient) { }

    enviar({ destinatario, assunto, conteudo }) {

        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }

        return this.http
            .post(this.api, emailParaApi, { headers: this.cabecalho })
            .pipe<Email>(
                map(
                    (emailApi: any) => {
                        return new Email({
                            destinatario: emailApi.to,
                            assunto: emailApi.subject,
                            conteudo: emailApi.content,
                            dataDeEnvio: emailApi.createdAt
                        })
                    }
                )
            )
    }

    listar() {

        return this.http
            .get<any[]>(this.api, { headers: this.cabecalho })
            .pipe<Email[]>( 
                map(
                    (response: any[]) => {
                        return response
                            .map(
                                emailApi => new Email({
                                    destinatario: emailApi.to,
                                    assunto: emailApi.subject,
                                    conteudo: emailApi.content,
                                    dataDeEnvio: emailApi.createdAt
                                })
                            )
                    }
                )
            )
    }

}