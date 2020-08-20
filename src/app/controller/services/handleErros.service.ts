import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { Mensagens } from 'src/app/view/shared/components/mensagens';

@Injectable({
  providedIn: 'root'
})
export class HandleErrosService {

  constructor(private messageService: MessageService) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  check500Error(error) {
    switch (error.status) {
      case 500:
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: Mensagens.ConnectionErrorSummary,
          detail: Mensagens.ConnectionErrorDetail
        });
        break;
    }
  }

}
