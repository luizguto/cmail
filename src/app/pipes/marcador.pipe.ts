import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'marcador'
})
export class MarcadorPipe implements PipeTransform {

    transform(destinatario: string) {
        if (destinatario.includes('chefe')) {
            return `[URGENT]	${destinatario}`
        }
        if (destinatario.includes('sandy')) {
            return `[friends]	${destinatario}`
        }
        return destinatario
    }

}
