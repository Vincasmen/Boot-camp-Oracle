for (let i = 1; i <= 100; i++) {
  const jeDelitelne3 = i % 3 === 0;
  const jeDelitelne5 = i % 5 === 0;

  const vysledek =
    (jeDelitelne3 ? "Crackle" : "") + (jeDelitelne5 ? "Pop" : "");

  console.log(vysledek || i);
}
