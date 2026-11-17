const cdn = 'https://framerusercontent.com';
const original = 'https://gruposrb.framer.website/celebrate';
const whatsapp = 'https://wa.me/5591993318434';
const image = (file) => cdn + '/images/' + file;
const video = (file) => cdn + '/assets/' + file + '.mp4';

function fill(selector, items, render) {
  document.querySelector(selector).innerHTML = items.map(render).join('');
}

function fillPhotos(selector, files) {
  fill(selector, files, (file) => `<img src="${image(file)}" loading="lazy" alt="">`);
}

fillPhotos('.hero-gallery', [
  'dbgsAGn9DFsR3xdlzRFihkuHY.png', 'JQruOgVGskuq0n0W5fqjh3nchcE.png',
  'EFWElbBjtOMpn5YHTzsFsUsFHY.png', 'kVJlPI8w6UIryycIIC8TPtImds.png',
  'jkbzX7TGtzCN0Un8JfrjliynU.png', 'bHfU4G4sgAr9eUH8YPPIakjUoM.png',
  'Hu7k6EMqNTqRUAzR1hkEFrzRz0.png'
]);

const contact = whatsapp + '?text=' + encodeURIComponent('Olá! Vim pelo site do Celebrate e gostaria de solicitar um orçamento personalizado para meu evento.');
fill('.event-grid', [
  ['casamentos', 'Casamentos', 'FZVrKX5nnZgyC5az8yhia5ks6Yg.jpg', original + '/casamentos', 'Explore'],
  ['quinze-anos', '15 anos', 'LKbAYlbT6o7QkG0JxHcsVzhug0.png', original + '/15-anos', 'Explore'],
  ['corporativo', 'Corporativo', 'kZCLZQtZBRQg9q5TFY9jvGS3R4.png', original + '/eventos-corporativos', 'Explore'],
  ['mais-historias', 'Mais histórias', 'QqKP88ObSJto84N31XfTspByPc.png', contact, 'Fale conosco']
], ([id, name, file, href, action]) => `
  <a class="event-card" id="${id}" href="${href}" style="background-image:linear-gradient(#160e0840,#160e08aa),url('${image(file)}')">
    <strong>${name}</strong><span>${action}</span>
  </a>`);

fillPhotos('.photos', [
  'xPIJVLKw4C3Ew8ahuoXpZEso2Gw.jpg', 'N1nsHy8b7WM37y4e6PXBK1a8IfU.png',
  'swRBVHrynpBvv5S4pV3M3CmENZk.jpg', 'Q4VyayimcZ3e7bZfATKaAvshbM.jpg',
  'fNWvBa6lXxTS0nMEp0mHyYM.png', 'IsEiPW3KfGXXjQpCbcTyJRPuLA.jpg'
]);

fill('.records', [
  ['Amanda & Tedd', 'Casamento', 'sEwyfwwNRFaF1UahJSADNem88', 'MiT4brhjFNsYhLa4zIKpQZ5iUs.jpg'],
  ['Lucas', 'Festa 15 anos', 'GpBC5AoGrfnmyiv9y9abpHzSamA', 'syPPBqZoQgYNoIh1L5P8ORjh0.jpg'],
  ['Betina', 'Festa 15 anos', 'qQGxTuibGMpNfpbfMcXShpeG2w', 'IFlRfJYP9GdORb8ed5CR67F0M.jpg'],
  ['Lorena Margalho', 'Aniversário temático', 'zUama4svxykerwdC1wXYW2nAvg', 'DA1S03vSK1ywVMy95hh6NnYAWiw.jpg'],
  ['Gabriel Águila', 'Noite de autógrafos', 'IY2QkrycigivfKv6PM5WQGc2fGc']
], ([name, description, file, poster]) => `
  <figure><video controls playsinline preload="none" aria-label="${name}" src="${video(file)}"${poster ? ' poster="' + image(poster) + '"' : ''}></video><figcaption>${name}<br>${description}</figcaption></figure>`);

fill('.drinks', [
  ['Bee’s Knees', '9NPxQ4xYtBjcHxkER39Vl7OjE.png'],
  ['Tiki', 'omahaXih8XSUR2a4933pLewHWE.png'],
  ['Virgin Margarita', 'xdEl6HGSO7E40xpfVKQ2kxWpA.png'],
  ['Virgin Tommy’s', 'SEzRg3k8ObXwrBjL8Xxh17zUuVM.png'],
  ['Airmail', '4HBY9hYuEnA9oPS8FORvibIYXM.png']
], ([name, file]) => `<figure><img src="${image(file)}" loading="lazy" alt=""><figcaption>${name}</figcaption></figure>`);

const services = [
  ['Personal Chef', 'O sabor acontece ao vivo.'],
  ['Sushi Bar', 'Uma experiência à parte.'],
  ['Carrinho Celebrate', 'Pequenos momentos, grandes surpresas.'],
  ['Sushi Box', 'Surpreenda seus convidados.']
];
fill('.services', services, ([name, description]) => `<article><h3>${name}</h3><p>${description}</p></article>`);

fill('.faq', [
  ['Quais tipos de evento o Celebrate recebe?', 'O Celebrate recebe casamentos, 15 anos, aniversários, eventos corporativos, formaturas e outras celebrações, com uma estrutura versátil para diferentes formatos.'],
  ['Quantas pessoas o espaço comporta?', 'O Celebrate recebe eventos de até 160 convidados, mantendo a proposta de uma experiência mais intimista e especial.'],
  ['O Celebrate possui mobiliário e estrutura própria?', 'Sim. O Celebrate conta com estrutura e mobiliário próprios para a realização dos eventos. Necessidades específicas de decoração, ambientação e equipamentos adicionais podem ser alinhadas durante o planejamento.'],
  ['Posso contratar minha própria decoração e cerimonial?', 'Sim. Fornecedores externos podem participar da produção do evento, seguindo as orientações e regras de montagem do espaço.'],
  ['A gastronomia é somente japonesa?', 'Não. Além da assinatura do Sushi Ruy Barbosa, o Celebrate oferece diferentes experiências gastronômicas e formatos de menu para compor cada tipo de evento.'],
  ['É possível adaptar o menu para restrições alimentares?', 'Necessidades e restrições alimentares podem ser informadas durante o planejamento para que nossa equipe avalie as opções adequadas para o evento.'],
  ['Como funciona o orçamento do meu evento?', 'Você pode montar uma primeira estimativa diretamente pelo nosso simulador, escolhendo o tipo de evento, experiência gastronômica, número de convidados e experiências adicionais. Depois, nossa equipe prepara uma proposta personalizada.'],
  ['O Celebrate oferece serviço de drinks?', 'O serviço de drinks pode ser consultado como parte da proposta personalizada. Nossa equipe poderá informar as opções e condições disponíveis para o seu evento.']
], ([question, answer], index) => `<details name="faq" ${index === 0 ? 'open' : ''}><summary>${question}</summary><p>${answer}</p></details>`);

const navigation = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
function setMenu(open) {
  navigation.hidden = !open;
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
menu.addEventListener('click', () => setMenu(navigation.hidden));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !navigation.hidden) {
    setMenu(false);
    menu.focus();
  }
});

const eventTypes = ['Casamento', '15 anos', 'Aniversário', 'Corporativo', 'Formatura', 'Outro'];
const drinksIncluded = 'Água, suco e refrigerante';
const packages = [
  { name: 'Coquetel', label: 'Serviço volante', price: 194, items: ['Salgados fritos', '4 mini porções (finger foods)', '2 mini sobremesas', drinksIncluded] },
  { name: 'Basic', label: 'Buffet pré-selecionado', price: 244, items: ['Salgados fritos', 'Dadinho de tapioca', 'Casquinha de caranguejo', 'Filé ao molho roti com cebola', 'Camarão com penne à caprese', 'Arroz, farofa e batata palha', 'Torta 3 chocolates', drinksIncluded] },
  { name: 'Splendor', label: 'Buffet — 3 proteínas', price: 300, items: ['Salgados fritos', '2 finger foods', 'Filé, camarão e peixe branco', '1 acompanhamento especial', 'Arroz, farofa e batata palha', 'Sobremesa a definir', drinksIncluded] },
  { name: 'Opulence', label: 'Buffet + estação de sushi', price: 411, items: ['Salgados fritos', '2 finger foods', 'Filé e camarão', 'Sushis: salmão, camarão e kani', 'Arroz, farofa e batata palha', 'Sobremesa a definir', drinksIncluded] }
];
const form = document.querySelector('#calculator');
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const selection = { step: 1, eventType: eventTypes[0], packageName: packages[0].name, guests: '160', extras: new Set() };

function options(name, values, selected, type = 'radio') {
  return `<div class="options">${values.map((value) =>
    `<label><input type="${type}" name="${name}" value="${value}" ${selected.has(value) ? 'checked' : ''}>${value}</label>`
  ).join('')}</div>`;
}

function packageDetails(pkg) {
  return `<h3>O que está incluso</h3><ul>${pkg.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderCalculator(focus = false) {
  const { step, eventType, packageName, guests, extras } = selection;
  const pkg = packages.find(({ name }) => name === packageName);
  const estimate = currency.format(pkg.price * Number(guests));
  const titles = ['Monte seu evento!', 'Escolha sua experiência gastronômica', 'Personalize sua experiência', 'É hora de celebrar o seu evento'];
  const message = ['Olá! Vim pelo site do Celebrate e gostaria de receber uma proposta.', `Tipo de evento: ${eventType}`, `Experiência gastronômica: ${packageName}`, `Convidados: ${guests}`, `Estimativa gastronômica: ${estimate}`, `Serviços extras: ${[...extras].join(', ') || 'Nenhum'}`].join('\n');
  const panels = [
    () => `<p>Escolha uma opção para começar. Você poderá voltar e alterar depois.</p>
      <fieldset><legend>Tipo de evento</legend>${options('eventType', eventTypes, new Set([eventType]))}</fieldset>`,
    () => `<fieldset><legend>Experiência gastronômica</legend>${options('packageName', packages.map(({name}) => name), new Set([packageName]))}</fieldset>
      <p>${pkg.label} · <strong>${currency.format(pkg.price)} por pessoa</strong></p>
      ${packageDetails(pkg)}
      <label for="guests">Quantos convidados?</label>
      <input id="guests" name="guests" type="number" min="1" max="160" required value="${guests}">`,
    () => `<fieldset><legend>Serviços adicionais · Valor personalizado</legend>
      ${options('extras', services.map(([name]) => name), extras, 'checkbox')}</fieldset>`,
    () => `<p>Estimativa</p><output class="estimate">${estimate}</output><p>${guests} pessoas</p>
      <h3>Experiência gastronômica</h3><p>${packageName}</p>${packageDetails(pkg)}
      <h3>Serviços extras (valor à parte)</h3><p>${[...extras].join(', ') || 'Nenhum adicional selecionado.'}</p>
      <p>Estimativa referente ao pacote gastronômico. Serviços extras serão orçados à parte.</p>`
  ];
  form.innerHTML = `<progress aria-label="Etapa ${step} de 4" value="${step}" max="4"></progress>
    <h2 tabindex="-1">${titles[step - 1]}</h2>${panels[step - 1]()}
    <div class="controls">
      ${step > 1 ? `<button class="pill" type="button" data-back>${step === 4 ? 'Editar evento' : 'Voltar'}</button>` : ''}
      ${step < 4 ? '<button class="pill gold" type="submit">Continuar</button>' : `<a class="pill gold" href="${whatsapp}?text=${encodeURIComponent(message)}">Receber proposta</a>`}
    </div>`;
  if (focus) form.querySelector('h2').focus();
}

form.addEventListener('input', ({ target }) => {
  if (target.name === 'guests') selection.guests = target.value;
});
form.addEventListener('change', ({ target }) => {
  if (target.name === 'extras') {
    if (target.checked) selection.extras.add(target.value);
    else selection.extras.delete(target.value);
  } else if (target.name === 'eventType' || target.name === 'packageName') {
    selection[target.name] = target.value;
    if (target.name === 'packageName') {
      renderCalculator();
      form.querySelector('input[name="packageName"]:checked').focus();
    }
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (selection.step < 4) {
    selection.step += 1;
    renderCalculator(true);
  }
});
form.addEventListener('click', (event) => {
  if (event.target.closest('[data-back]')) {
    selection.step = selection.step === 4 ? 1 : selection.step - 1;
    renderCalculator(true);
  }
});
renderCalculator();
