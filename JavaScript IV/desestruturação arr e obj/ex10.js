const competidores = ['Usain Bolt', 'Justin Gatlin', 'Andre De Grasse', 'Yohan Blake'];

const [vencedor, ...outros]= competidores


 console.log(vencedor); // Saída: Usain Bolt
 console.log(outros);   // Saída: ['Justin Gatlin', 'Andre De Grasse', 'Yohan Blake']