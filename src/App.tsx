import { useState } from 'react';

import { Card } from './components/Card';
import { Checkbox } from './components/Checkbox';

interface DataProps {
  name: string;
  value: number;
  type: string;
  checked: boolean;
}

function App() {
  const [total, setTotal] = useState<number>(0);

  const [itens, setItens] = useState<DataProps[]>([
    { name: 'Motor', value: 100000, type: 'DESEMPENHOS', checked: false },
    { name: 'Freio', value: 60000, type: 'DESEMPENHOS', checked: false },
    { name: 'Transmissão', value: 90000, type: 'DESEMPENHOS', checked: false },
    { name: 'Suspensão', value: 50000, type: 'DESEMPENHOS', checked: false },
    { name: 'Turbo', value: 80000, type: 'DESEMPENHOS', checked: false },
    { name: 'Blindagem', value: 200000, type: 'DESEMPENHOS', checked: false },
    { name: 'Blindagem Pneu(16)', value: 50000, type: 'DESEMPENHOS', checked: false },
    {
      name: 'Tunagem Full',
      value: 395000,
      type: 'TUNAGENS_FULL',
      checked: false,
    },
    {
      name: 'Tunagem Full + Blindagem Lataria',
      value: 595000,
      type: 'TUNAGENS_FULL',
      checked: false,
    },
    {
      name: 'Tunagem Full + Blindagem Pneu',
      value: 445000,
      type: 'TUNAGENS_FULL',
      checked: false,
    },
    {
      name: 'Tunagem Full + Blindagem Lataria e Pneu',
      value: 645000,
      type: 'TUNAGENS_FULL',
      checked: false,
    },
    { name: 'Primaria', value: 30000, type: 'PINTURAS', checked: false },
    { name: 'Secundaria', value: 30000, type: 'PINTURAS', checked: false },
    { name: 'Primaria e secundaria', value: 45000, type: 'PINTURAS', checked: false },
    { name: 'Decal', value: 50000, type: 'PINTURAS', checked: false },
    {
      name: 'Cromado, Metálico, Fosco e Metal',
      value: 30000,
      type: 'PINTURAS',
      checked: false,
    },
    { name: 'Aerofólio', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Para-choque', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Saias', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Escapamento', value: 20000, type: 'ESTETICAS', checked: false },
    { name: 'Gaiola', value: 20000, type: 'ESTETICAS', checked: false },
    { name: 'Grelha', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Capô', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Para-Lama', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Teto', value: 70000, type: 'ESTETICAS', checked: false },
    { name: 'Buzina', value: 10000, type: 'ESTETICAS', checked: false },
    { name: 'Santo Antonio', value: 15000, type: 'ESTETICAS', checked: false },
    { name: 'Interior Enfeite Painel', value: 70000, type: 'ESTETICAS', checked: false },
    { name: 'Interior Painel', value: 15000, type: 'ESTETICAS', checked: false },
    { name: 'Interior Ponteiro', value: 15000, type: 'ESTETICAS', checked: false },
    { name: 'Interior Janela', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Interior Banco', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Interior SOM', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Bloco do motor(51)', value: 55000, type: 'ESTETICAS', checked: false },
    { name: 'Som porta malas', value: 20000, type: 'ESTETICAS', checked: false },
    { name: 'Som das portas', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'DVD player', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Hidráulica(31)', value: 55000, type: 'ESTETICAS', checked: false },
    { name: 'Xenon Adicionar', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Xenon Mudar Cor', value: 5000, type: 'ESTETICAS', checked: false },
    { name: 'Rodas nacionais(16)', value: 20000, type: 'ESTETICAS', checked: false },
    { name: 'Rodas importadas(16)', value: 25000, type: 'ESTETICAS', checked: false },
    { name: 'Cor das rodas(5 tintas)', value: 20000, type: 'ESTETICAS', checked: false },
    { name: 'Pneu Custom', value: 15000, type: 'ESTETICAS', checked: false },
    { name: 'Fumaça', value: 5000, type: 'ESTETICAS', checked: false },
    { name: 'Placa', value: 5000, type: 'ESTETICAS', checked: false },
    { name: 'Neon', value: 10000, type: 'ESTETICAS', checked: false },
    { name: 'Insufilm', value: 45000, type: 'ESTETICAS', checked: false },
  ]);

  function handleOnChecking(name: string) {
    const newList = itens;
    const itemIndex = newList.findIndex((product) => {
      return product.name === name;
    });

    // Se o item já estiver somado
    if (newList[itemIndex].checked) {
      setTotal(total - newList[itemIndex].value);
      newList[itemIndex].checked = false;
      return;
    }

    // Se o item não estiver somado
    if (!newList[itemIndex].checked) {
      setTotal(total + newList[itemIndex].value);
      newList[itemIndex].checked = true;
      return;
    }

    setItens(newList);
  }

  function handleOnResetting() {
    const newList = itens.map((item) => ({ ...item, checked: false }));
    setItens(newList);
    setTotal(0);
    return;
  }

  return (
    <div className="w-screen h-screen bg-[#312E38] flex items-center justify-center">
      <section className="grid gap-8 mr-8">
        <Card title="Tunagem FULL">
          {itens.map((item) => {
            if (item.type === 'TUNAGENS_FULL') {
              return (
                <Checkbox
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  isChecked={item.checked}
                  onClick={() => handleOnChecking(item.name)}
                />
              );
            }
          })}
        </Card>

        <Card title="Desempenho">
          {itens.map((item) => {
            if (item.type === 'DESEMPENHOS') {
              return (
                <Checkbox
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  isChecked={item.checked}
                  onClick={() => handleOnChecking(item.name)}
                />
              );
            }
          })}
        </Card>

        <Card title="Pintura">
          {itens.map((item) => {
            if (item.type === 'PINTURAS') {
              return (
                <Checkbox
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  isChecked={item.checked}
                  onClick={() => handleOnChecking(item.name)}
                />
              );
            }
          })}
        </Card>

        <Card title="Valor total">
          <span className="text-white">{total}</span>

          <button
            className="bg-[#FF9000] rounded-xl w-full h-12 mt-4"
            type="button"
            onClick={handleOnResetting}
          >
            Resetar
          </button>
        </Card>
      </section>

      <section>
        <Card title="Estética">
          {itens.map((item) => {
            if (item.type === 'ESTETICAS') {
              return (
                <Checkbox
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  isChecked={item.checked}
                  onClick={() => handleOnChecking(item.name)}
                />
              );
            }
          })}
        </Card>
      </section>
    </div>
  );
}

export default App;
