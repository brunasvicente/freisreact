import './index.scss';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Cartoes } from '../../components/cartoes';


export default function App() {
  return (
    <div className="pagina-app">
      
      <Cabecalho/>

      <main>
          <h1>Escolha um treino...</h1>

          <div className='cartoes'>

            <Cartoes titulo={'Converter Kg/gramas'} destino={'/exercicio1'} exercicio={'Exercício 1'}/>

            <Cartoes titulo={'Converter Kg/gramas'} destino={'/exercicio2'} exercicio={'Exercício 2'}/>

            <Cartoes titulo={'Valor total por quantidade'} destino={'/exercicio3'} exercicio={'Exercício 3'}/>

            <Cartoes titulo={'Tempo de Leitura Livro'} destino={'/exercicio4'} exercicio={'Exercício 4'}/>

            <Cartoes titulo={'Verificação de Aluno'} destino={'/exercicio5'} exercicio={'Exercício 5'}/>

            <Cartoes titulo={'Calcular Salário Líquido'} destino={'/exercicio6'} exercicio={'Exercício 6'}/>

            <Cartoes titulo={'Verificar Cores Primárias'} destino={'/exercicio7'} exercicio={'Exercício 7'}/>

            <Cartoes titulo={'Situação da Temperatura'} destino={'/exercicio8'} exercicio={'Exercício 8'}/>

            <Cartoes titulo={'Compra na Sorveteria'} destino={'/exercicio9'} exercicio={'Exercício 9'}/>

            <Cartoes titulo={'Índice de Massa Corporal'} destino={'/exercicio10'} exercicio={'Exercício 10'}/>

            <Cartoes titulo={'Um número, uma Tabuada'} destino={'/exercicio11'} exercicio={'Exercício 11'}/>

            <Cartoes titulo={'Calculo da Média de 3 Notas'} destino={'/exercicio12'} exercicio={'Exercício 12'}/>

            <Cartoes titulo={'Leitor de Valores Inteiros'} destino={'/exercicio13'} exercicio={'Exercício 13'}/>

            <Cartoes titulo={'Verificar Números Primos'} destino={'/exercicio14'} exercicio={'Exercício 14'}/>

            <Cartoes titulo={'Inserir INFO de Usuários'} destino={'/exercicio15'} exercicio={'Exercício 15'}/>

            <Cartoes titulo={'Sorteio de Número Premiado'} destino={'/exercicio16'} exercicio={'Exercício 16'}/>

            <Cartoes titulo={'Menu: Operações Simples'} destino={'/exercicio17'} exercicio={'Exercício 17'}/>

            <Cartoes titulo={'Compras no SuperMercado'} destino={'/exercicio18'} exercicio={'Exercício 18'}/>
            
          </div>
        </main>

    </div>
  );
}