export class ValidarCpf {

    public static cpf(cpf: string): boolean {
        if (cpf === null || cpf.length !== 11 || !this.apenasNumeros(cpf) || this.todosCaracteresIguais(cpf)) {
            return false;
        }
        let j: number = 10;
        let somatorio: number = 0;
        let cpfAux = cpf.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            somatorio = somatorio + (+cpfAux.charAt(i) * j);
            j--;
        }
        let resto = somatorio % 11;
        let digito1: number = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1.toString();
        for (let i: number = 0; i < 10; i++) {
            somatorio = somatorio + (+cpfAux.charAt(i) * j);
            j--;
        }
        resto = somatorio % 11;
        let digito2: number = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2.toString();
        if (cpf !== cpfAux) {
            return false;
        }
        return true;
    }

    private static apenasNumeros(cpf: string): boolean {
        for (let i: number = 0; i < cpf.length; i++) {
            if (!(+cpf.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
                return false;
            }
        }
        return true;
    }

    private static todosCaracteresIguais(cpf: string): boolean {
        return cpf.split('').every(char => char === cpf[0]);
    }

}
