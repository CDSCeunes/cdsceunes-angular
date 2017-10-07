import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teachers = [
      { id: 10,  name: 'Leonardo Silveste', email: 'leonardo.silvestre@ufes.br' },
      { id: 11, name: 'Aníbal Cotrina', email: 'anibal.cotrina@ufes.br' },
      { id: 12, name: 'Daniel Coura', email: 'daniel.coura@ufes.br'},
      { id: 13, name: 'Sílvia Rissino', email: 'silvia.rissino@ufes.br' },
      { id: 14, name: 'Henrique Cristovão', email: 'henrique.cristovao@ufes.br' },
      { id: 15, name: 'Luciana Lee', email: 'luciana.lee@ufes.br' },
      { id: 16, name: 'Helcio Mello', email: 'helcio.mello@ufes.br' },
      { id: 17, name: 'Leandro Costalonga', email: 'landro.costalonga@ufes.br' },
      { id: 18, name: 'Sandra Regina Rocha', email: 'sandra.rocha@ufes.br' },
      { id: 19, name: 'Maria das Graças da Silva', email: 'maria.silva@ufes.br' },
      { id: 20, name: 'Willian Hisatagu', email: 'willian.hisatagu@ufes.br' },
      { id: 21, name: 'Flavio Duarte', email: 'flavio.duarte@ufes.br' },
      { id: 22, name: 'Francisco de Assis', email: 'francisco.assis@ufes.br' },
      { id: 23, name: 'Helder Rocha', email: 'helder.rocha@ufes.br' },
      { id: 24, name: 'Flavio Duarte', email: 'flavio.duarte@ufes.br' },
      { id: 25, name: 'Luís Otávio Rigo', email: 'luis.rigo@ufes.br' },
      { id: 26, name: 'Roney Pignaton', email: 'roney.pignaton@ufes.br' },
      { id: 27, name: 'Wanderley Cardoso', email: 'wanderley.cardoso@ufes.br' }
    ];

    const departments = [
      {id: 1, name: 'DCAB - Departamento de Ciências Agrárias e Biológicas'},
      {id: 2, name: 'DCN - Departamento de Ciências Naturais'},
      {id: 3, name: 'DCS - Departamento de Ciências da Saúde'},
      {id: 4, name: 'DCEL - Departamento de Computação e Eletrônica'},
      {id: 5, name: 'DECH - Departamento de Educação e Ciências Humanas'},
      {id: 6, name: 'DETEC - Departamento de Engenharias e Tecnologia'},
      {id: 7, name: 'DMA - Departamento de Matemática Aplicada'},
    ];

    const disciplines = [
      // tslint:disable-next-line:max-line-length
      {id: 1, name: 'Programação I', course: 'Engenharia de Computação', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 2, name: 'Introdução a Engenharia de Computação', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 3, name: 'Circuitos Elétricos I', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 4, name: 'Programação II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 5, name: 'Práticas de Laboratório', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 6, name: 'Circuitos Elétricos II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 7, name: 'Estrutura de Dados I', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 8, name: 'Eletromagnetismo II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 9, name: 'Estrutura de Dados II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 10, name: 'Arquitetura de Computadores', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 11, name: 'Programação III', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 12, name: 'Sinais e Sistemas', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 13, name: 'Sistemas Operacionais', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 14, name: 'Eletrônica Básica I', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 15, name: 'Instalações Elétricas', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 16, name: 'Engenharia de Sofware', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 17, name: 'Eletrônica Digital', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 18, name: 'Linguagens de Programação', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      // tslint:disable-next-line:max-line-length
      {id: 19, name: 'Análise e Modelagem de Sistemas Dinâmicos', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 20, name: 'Eletrônica Básica II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 21, name: 'Laboratório de Controle Automático',
        currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 22, name: 'Teleprocessamento', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 23, name: 'Processos Estocásticos', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 24, name: 'Computação Gráfica', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 25, name: 'Sistemas Digitais', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 26, name: 'Linguagens Formais e Autômatos',
        currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 27, name: 'Sistemas Realimentados', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 28, name: 'Sistemas Embarcados', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 29, name: 'Redes de Computadores', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 30, name: 'Fundamentos da Teoria da Computação',
        currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 31, name: 'Banco de Dados', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 32, name: 'Compiladores', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 33, name: 'Avaliação de Desempenho de Sistemas Computacionais',
        currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 34, name: 'Projeto de Graduação I', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60},
      {id: 35, name: 'Projeto de Graduação II', currentTeacher: 'Professor Placeholder', teoricLoad: 60, exerciseLoad: 60, labLoad: 60}
    ];

    const commissions = [
      {id: 1, name: 'Comissão de Ensino', minNumber: 1, maxNumber: 3,
        teachers: 'Luciana Lee, Sandra Regina Rocha Silva e Silvia das Dores Rissino',
        positions: 'Cargo 1, Cargo 2 e Cargo 3'},
      {id: 2, name: 'Comissão de Infraestrutura', minNumber: 1, maxNumber: 3,
        teachers: 'Helder Roberto de Oliveira Rocha, Wilian Hiroshi Hisatugu e Aníbal Cotrina Atencio',
        positions: 'Cargo 4, Cargo 5 e Cargo 6'},
      {id: 3, name: 'Comissão de Pesquisa e Extensão', minNumber: 1, maxNumber: 3,
        teachers: 'Francisco de Assis Souza dos Santos, Flávio Duarte Couto Oliveira e Anibal Cotrina Atencio',
        positions: 'Cargo 7, Cargo 8 e Cargo 9'},
      {id: 4, name: 'Comissão de Recursos Humanos', minNumber: 1, maxNumber: 3,
        teachers: 'Daniel José Custódio Coura, Wanderley Cardoso Celeste e Luís Otávio Rigo Júnior',
        positions: 'Cargo 10, Cargo 11 e Cargo 12'}
    ];

    const positions = [
      {id: 1, name: 'Cargo 1', inCharge: 'Luciana Lee', commission: 'Comissão Aleatória'},
      {id: 2, name: 'Cargo 2', inCharge: 'Sandra Regina Rocha', commission: 'Comissão Aleatória'},
      {id: 3, name: 'Cargo 3', inCharge: 'Silvia das Dores Rissino', commission: 'Comissão Aleatória'},
      {id: 4, name: 'Cargo 4', inCharge: 'Helder Rocha', commission: 'Comissão Aleatória'},
      {id: 5, name: 'Cargo 5', inCharge: 'Wilian Hiroshi Hisatugu', commission: 'Comissão Aleatória'},
      {id: 6, name: 'Cargo 6', inCharge: 'Aníbal Cotrina Atencio', commission: 'Comissão Aleatória'},
      {id: 7, name: 'Cargo 7', inCharge: 'Francisco de Assis Souza', commission: 'Comissão Aleatória'},
      {id: 8, name: 'Cargo 8', inCharge: 'Flávio Duarte Couto Oliveira', commission: 'Comissão Aleatória'},
      {id: 9, name: 'Cargo 9', inCharge: 'Luís Otávio Rigo', commission: 'Comissão Aleatória'},
      {id: 10, name: 'Cargo 10', inCharge: 'Wanderley Cardoso Celeste', commission: 'Comissão Aleatória'},
    ];

    const semesters = [
      {id: 1, name: '2012/1', offeredDisciplines: 'Disciplina 1, Disciplina 2, Disciplina 3'},
      {id: 2, name: '2012/2', offeredDisciplines: 'Disciplina 4, Disciplina 5, Disciplina 6'},
      {id: 3, name: '2013/1', offeredDisciplines: 'Disciplina 1, Disciplina 2, Disciplina 3'},
      {id: 4, name: '2013/2', offeredDisciplines: 'Disciplina 4, Disciplina 5, Disciplina 6'},
      {id: 5, name: '2014/1', offeredDisciplines: 'Disciplina 1, Disciplina 2, Disciplina 3'},
      {id: 6, name: '2014/2', offeredDisciplines: 'Disciplina 4, Disciplina 5, Disciplina 6'},
      {id: 7, name: '2015/1', offeredDisciplines: 'Disciplina 1, Disciplina 2, Disciplina 3'},
      {id: 8, name: '2015/2', offeredDisciplines: 'Disciplina 4, Disciplina 5, Disciplina 6'},
    ];

    return {teachers, departments, disciplines, commissions, positions, semesters};
  }
}
