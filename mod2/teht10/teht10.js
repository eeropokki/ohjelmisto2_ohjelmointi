'use strict'

const candidateCount = Number(prompt('Montako kandidaattia? '));

let candidates = [];

for (let i = 1; i < candidateCount; i++) {
  const name = prompt(`Kandidaatin ${i} nimi: `)
  candidates.push({
    name: name,
    votes: 0
  })
}

const voterCount = Number(prompt('Montako äänestäjää? '));

for (let i =1; i <= voterCount; i++) {
  const vote = prompt(`Äänestäjä ${i}, ketä äänestät? (tyhjä = tyhjä ääni) `)

  if (vote === null || vote.trim() === ''){

  } else {
    const candidate = candidates.find(c => c.name === vote);
    if (candidate){
      candidate.votes += 1;
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

console.log(`Voittaja on ${winner.name}, jolla on ${winner.votes} ääntä.`);
console.log('tulokset: ');
for (let c of candidates){
  console.log(`${c.name}: ${c.votes} ääntä.`)
}

