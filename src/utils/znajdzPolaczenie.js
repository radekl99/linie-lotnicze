const polaczenia = [
  ["ATH", "EDI"],
  ["ATH", "GLA"],
  ["ATH", "CTA"],
  ["BFS", "CGN"],
  ["BFS", "LTN"],
  ["BFS", "CTA"],
  ["BTS", "STN"],
  ["BTS", "BLQ"],
  ["CRL", "BLQ"],
  ["CRL", "BSL"],
  ["CRL", "LTN"],
  ["DUB", "LCA"],
  ["LTN", "DUB"],
  ["LTN", "MAD"],
  ["LCA", "HAM"],
  ["EIN", "BUD"],
  ["EIN", "MAD"],
  ["HAM", "BRS"],
  ["KEF", "LPL"],
  ["KEF", "CGN"],
  ["SUF", "LIS"],
  ["SUF", "BUD"],
  ["SUF", "STN"],
  ["STN", "EIN"],
  ["STN", "HAM"],
  ["STN", "DUB"],
  ["STN", "KEF"],
];
//Funkcja zwracająca wszystkie lotniska mające połączenie z podanym lotniskiem
const znajdzPolaczeniaZLotniska = (wybraneLotnisko) => {
  const polaczoneLotniska = polaczenia.filter((polaczenie) =>
    polaczenie.includes(wybraneLotnisko)
  );

  const mozliwePolaczenia = [];

  //Z każdego połączenia usuwamy wybrane lotnisko, dla którego szukaliśmy połączeń
  polaczoneLotniska.forEach((polaczenie) => {
    const mozliwePolaczenie = polaczenie.filter(
      (lotnisko) => lotnisko !== wybraneLotnisko
    );
    mozliwePolaczenia.push(mozliwePolaczenie);
  });

  return mozliwePolaczenia.flat();
};

// Funkcja znajdująca szukaną trasę
export const znajdzPolaczenie = (wylot, cel) => {
  let trasy = [[wylot]];
  const zbadaneLotniska = [wylot];
  let znalezionoCel = false;

  //  Co każdą iterację pętli tablica 'trasy' jest modyfikowana
  //poprzez dopisywanie do istniejących tras wszystkich kierunków,
  //w które można się udać z danego miejsca, chyba że lotnisko wystąpiło już wcześniej
  do {
    let noweTrasy = [];
    trasy.forEach((trasa) => {
      const polaczenia = znajdzPolaczeniaZLotniska(trasa[trasa.length - 1]);
      polaczenia.forEach((polaczenie) => {
        if (!zbadaneLotniska.includes(polaczenie))
          noweTrasy.push(trasa.concat(polaczenie));
        zbadaneLotniska.push(polaczenie);
      });
    });

    trasy = noweTrasy;

    //Wiemy ,że znaleźliśmy trasę, gdy któraś z tras zawiera cel
    znalezionoCel = trasy.some((trasa) => trasa.includes(cel));
  } while (!znalezionoCel);

  // Zwracamy tylko trasę, która zawiera cel oraz usuwamy zagnieżdżenie tablicy
  return trasy.filter((trasa) => trasa.includes(cel)).flat();
};
