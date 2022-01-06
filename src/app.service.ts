import { Injectable } from '@nestjs/common';

const lista = ['banana', 'maça', 'melão'];

const listaObj = [{ nome: 'leo', email: 'leo@leo.com.br', idade: 24 }];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLista(): string[] {
    return lista;
  }

  getLista2(): object[] {
    return listaObj;
  }
}
