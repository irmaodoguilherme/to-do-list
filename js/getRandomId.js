export const getRandomId = () =>
    Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
/*
Date.now() => Retorna a data atual que a função é disparada
.toString(36) => Converte o valor para 'base 36'
—
Math.random() => Gera um número aleatório, Ex.: 0,123.
.substring() => Retorna um pedaço da string de um index até outro.
*/