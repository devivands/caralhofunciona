const cards = [
    { image: 'images/card1.jpeg', description: '' },
    { image: 'images/card2.jpeg', description: '' },
    { image: 'images/card3.jpeg', description: '' },
    { image: 'images/card4.jpeg', description: '' },
    { image: 'images/card5.jpeg', description: '' },
    { image: 'images/card6.jpeg', description: '' },
    { image: 'images/card7.jpeg', description: '' },
    { image: 'images/card8.jpeg', description: '' },
    { images: ['images/card9_1.jpeg', 'images/card9_2.jpeg', 'images/card9_3.jpeg'], description: '' },
    { images: ['images/card10_1.jpeg', 'images/card10_2.jpeg', 'images/card10_3.jpeg'], description: '' }
  ];
  
  const questions = [
  {
    question: '1-Fotossíntese é um processo realizado pelas plantas para a produção de energia necessária para a sua sobrevivência. Sabendo que o processo ocorre da seguinte maneira a água e os sais minerais são retirados do solo através da raiz da planta e chega até as folhas pelo caule em forma de seiva. A luz do sol, por sua vez também é absorvida pela folha, através da clorofila, substância que dá a coloração verde das folhas. Então a clorofila e a energia solar transformam os outros ingredientes em glicose (energia). Essa substância é conduzida ao longo dos canais existentes na planta para todas as partes do vegetal. Ela utiliza parte desse alimento para viver e crescer; a outra parte fica armazenada na raiz, caule e sementes, sob a forma de amido. A fotossíntese é uma das principais fontes de energia da natureza, não só para os vegetais, mas para vários outros seres vivos. Sendo assim, observando o Pokémon Oddish, podemos concluir que ele se encontra no nivel trópico ?',
    answers: ['Consumidor', 'Decompositor', 'Produtor', 'Herbívoro'],
    correctAnswer: 'Produtor',
    explanation: 'As plantas são classificadas como produtores porque produzem seu próprio alimento através da fotossíntese.'
  },
  {
    question: '2 - Conhecido como o Pokémon peixe, o Magikarp é encontrado em muitos corpos de água, especialmente lagos, rios e lagoas. É um peixe vermelho-laranja, de tamanho médio. Suas características notáveis incluem escalas em grandes quedas d aguas para o momento de reprodução. Sabendo que estas informações sobre este Pokémon, podemos classificar ele em qual nível trópico ele se encontra?',
    answers: ['Consumidor Terciário', 'Consumidor Primario', 'Consumidor Decompositor', 'Consumidor Secundario'],
    correctAnswer: 'Consumidor Terciário',
    explanation: 'Este Pokémon é um predador de nível superior, portanto, é classificado como consumidor terciário.'
  },
  {
    question: '3 - Dewgong é um pinipede (Familias das focas, mamiferos marinhos) Pokémon parecido com um leão-marinho. Possui um corpo branco e peludo, o que torna praticamente invisível em condições nevadas. Vive em icebergs à deriva em águas geladas do oceano. Ao armazenar energia térmica dentro do seu corpo, é completamente ileso mesmo pelo tempo de congelamento mais intenso. Durante o dia, dorme em gelo amargamente frio ou sob águas rasas. No entanto, à noite, quando a temperatura cai, torna-se um caçador e busca presas como Magikarp.',
    answers: ['Consumidor Primário', 'Consumidor Quartenario', 'Consumidor Secundário', 'Consumidor Terciário'],
    correctAnswer: 'Consumidor Terciário',
    explanation: 'A foca é um predador que se alimenta de outros consumidores, sendo classificada como consumidor terciário.'
  },
  {
    question: '4 - Está Medusa/Polvo/Lula também é conhecido como o gangster do mar. O Tentacruel tem cerca de oitenta tentáculos que ele pode alongar ou encurtar sua vontade, ele os usa para pegar sua presa e enfraquecê-la por meio de uma substância muito tóxica que segrega por seus picos. Uma vez presa a sua presa, não a solta, não importa o que aconteça, e tem sido visto usar os seus tentáculos de diferentes maneiras: como "braços" para alcançar as suas presas (técnica com a qual pode chegar a atingir até 80 presas de cada vez, ou seja, uma para cada tentáculo que tem) ou entrelaçá-las como uma rede para impedir que as suas presas escapem. Ele usa o brilho das esferas vermelhas de sua cabeça para se comunicar com os seus quando está nervoso e, assim, avisá-los sobre o perigo. Descobriu-se que um piscar é um sinal de aviso. Em algumas ocasiões aparecem grandes grupos deste Pokémon; durante este evento, os Pokémon peixes como Magirkap e Goldeen, ao redor desaparecem sem deixar vestígios. Embora se saiba que sua espécie Pokémon é uma medusa, ela compartilha mais traços com uma lula de Humboldt, como seu bico ou os flashes que ela emite.Com estas informações podemos concluir que este Pokémon se encaixa em qual nível trófico',
    answers: ['Consumidor Terciário', 'Consumidor Secundário', 'Produtor', 'Peixe'],
    correctAnswer: 'Consumidor Secundário',
    explanation: 'O polvo é um predador que se alimenta de consumidores primários, classificando-o como consumidor secundário.'
  },
  {
    question: '5 - Lickitung é o Pokémon Salamandra/Camaleão, sua principal caracteriza e sua longa língua, que ele usa para conhecer ambientes novos e também alimentos.A parte mais notória deste Pokémon é a sua língua, que pode se estender por quase 2 metros e é muito sensível, podendo manipular sua língua melhor do que suas próprias pernas, é utilizada para sua alimentação. Também usando-a para perceber melhor o calor ou texturas devido à sua grande sensibilidade.Após estas informações, qual nível trófico nosso Pokémon se encaixa:',
    answers: ['Consumidor Terciário', 'Consumidor Secundário', 'Consumidor Primário', 'Salamandra/Camaleão'],
    correctAnswer: 'Consumidor Primário',
    explanation: 'Este Pokémon se alimenta diretamente de produtores, sendo um consumidor primário.'
  },
  {
    question: '6 - Victreebel é baseado na planta carnívora nepenthes. Tem uma folha que lhe cobre a boca, para se tornar uma armadilha para os Pokémon insetos. Os seus olhos estão colados à boca e não são saltos, como nas suas pré-evoluções. No seu caule, no final, há uma espécie de gancho amarelo para se pendurar como a espécies de planta ao qual é sua inspiração. Quando ele vê algo que chama sua atenção, ele salta sobre ele e com o ácido de sua boca, que cheira a algo parecido com mel para se tomar uma armadilha perfeita para os Caterpie e o Weedle, ele os derrete para engolir. Coma qualquer Pokémon bicho, não importa se seu alimento seja venenoso, pois seus poderosos ácidos estomacais o dissolverão eliminando o veneno e até mesmo, digerindo o mesmo veneno. Mesmo dormindo continua abrindo a boca, em poucas ocasiões parece esquecer de caçar e dorme de cabeça para baixo. Ele está sempre pendurado nas árvores com o ramo que possui.Sabendo que está planta é carnívora, qual nível trófico ela se encontra?',
  
    answers: ['Decompositor', 'Carnívoro', 'Consumidor secundário', 'Consumidor Primário'],
    correctAnswer: 'Consumidor Primário',
    explanation: 'Embora as plantas carnívoras produzam seu próprio alimento, elas também consomem insetos, sendo consideradas consumidores primários.'
  },
  {
    question: '7 - Sua aparência é baseada em um tipo de caranguejo eremita, mas com um cogumelo em vez de uma concha. Por sua vez, o conceito de fungo é baseado em um tipo de fungo parasitóide, que é capaz de assumir o controle do sistema nervoso do hospedeiro. Se o fungo se soltar, Parasect deixará de se mover, corroborando assim a teoria de que o cogumelo parasita é quem controla o Pokémon. Ele habita em florestas frondosas e cavernas das montanhas, procurando se afastar da luz solar, adora lugares úmidos e escuros, esses locais são preferidos pelo fungo, não por ele. Nesta carta podemos observar um parasita e um animal, considerando os níveis tróficos, o parasita seria um decompositor?Nesta imagem podemos observar um parasita e um animal, considerando os níveis tróficos, o parasita seria um decompositor?',
    answers: ['Verdadeiro', 'Falso'],
    correctAnswer: 'Verdadeiro',
    explanation: 'Os parasitas são considerados decompositores porque se alimentam de organismos mortos ou em decomposição.'
  },
  {
    question: '8 - Este Pokémon é baseado em um Amonites que era um tipo de molusco agora extinto. De tonalidade azul tem olhos enormes que se projetam da entrada de sua concha em forma de espiral revestida de alguns espinhos, bem como um forte bico semelhante ao das lulas atuais. Possui um grupo de tentáculos com quatro grandes que lhe dão uma forma de estrela que lhe serviam como mãos e pés, tinha outros menores atrás destes, ao qual podem ser vistos utilizando para se alimentar de pequenos Pokémon. Diz-se que este Pokémon está extinto porque sua concha se tornou muito grande e pesada, o que o tornou lento, impedindo-o de se mover livremente e era difícil para ele pegar suas presas. Uma vez que ela agarra sua presa com seus tentáculos, ela não a deixará escapar, usando seus picos afiados que cercam sua boca lhe permitiram destruí-las, como no caso da concha de Shellder (Ostra) que ela pulverizava para poder absorver seu interior macio. Acredita-se que Omastar seja um possível ancestral remoto/comum dos Octillery (Polvo).Observando esse molusco na imagem, em qual nível trópico ele pertence, sabendo que ele também se alimenta de algas:',
    answers: ['Consumidor Primário', 'Consumidor Secundário', 'Consumidor Quartenario', 'Consumidor Terciário'],
    correctAnswer: 'Consumidor Secundário',
    explanation: 'Este Pokémon é um consumidor secundário porque se alimenta de algas e outros organismos.'
  },
  {
    question: '9 - Jynx, em seu design original, foi baseado na moda japonesa ganguro, este Pokémon é caracterizada por ter uma semelhança especial com os humanos, especialmente com uma mulher. Já o Mr. Mime é baseado em um Mimico devido ao seu comportamento, embora a sua aparência se pareça também com um Arlequim/Palhaço. Outro Pokémon Humanoide é o Machoke o fisiculturista, ele faz musculação todos os dias, vai para o campo e para as montanhas para treinar. Sua natureza diligente e trabalhadora, faz com que ela ofereça uma boa disposição para usar sua força em realizar trabalhos físicos a pedido das pessoas. Observando as características destes 3 humanóides, que nivel trópico eles pertencem?',
    answers: ['Consumidor Primário', 'Consumidor Secundário', 'Consumidor Quartenario', 'Consumidor Terciário'],
    correctAnswer: 'Consumidor Terciário',
    imageClass: 'large-image',
    explanation: 'Esses humanoides são predadores de nível superior, sendo classificados como consumidores terciários.'
  },
  {
    question: '10 - Uma cadeia alimentar é formada por 3 níveis tróficos que se complementam. No mundo Pokémon também segue o mesmo conceito, podendo ser observado nesta sequência: Exeggcute é baseado em sementes em forma de ovo. É composto por seis membros, cada ovo deste Pokémon mostra um gesto ou estado de espírito diferente. Embora pareçam ovos, estudos recentes revelaram que na verdade são criaturas semelhantes a sementes ou frutos que contêm genes de plantas e outras espécies. O cavalo de fogo Ponyta é baseado em um pônei, embora este Pokémon herbívoro seja pacífico, é preciso ter cuidado ao ferrá-los, pois eles podem soltar chutes fortes. Vivem formando rebanhos em pradarias, campos e montanhas onde é comum vê-los correndo a grandes distâncias sem se cansar. O grande predador da savana a Arbok parece ser inspirado na Cobra-indiana (Naja naja). Possui presas venenosas na boca e uma fina língua bífida.O desenho da barriga de Arbok pode variar de uma área para outra, segundo alguns estudos que os desenhos com as quais fazendo uso habilmente de deslumbrar pode paralisar a sua presa, para depois enrolá-la com o seu corpo e espremê-la com um abraço sufocante, se isso não for suficiente também pode optar por envenená-la, se sua presa escapar antes de ser pega, ela não cessará a perseguição e o seguirá, não importa para onde ela vá. Observando a cadeia alimentar, qual a sequência correta?',
    answers: ['Consumidor, Produtor e Decompositor', 'Decompositor, Consumidor e Produtor primário', 'Consumidor Primário, Secundário e Terciário', 'Herbívoro, Carnívoro e onívoro'],
    correctAnswer: 'Consumidor Primário, Secundário e Terciário',
    imageClass: 'large-image',
    explanation: 'A sequência correta é consumidor primário, secundário e terciário, conforme a estrutura da cadeia alimentar.'
  },
  // Adicione mais perguntas conforme necessário
  ];
  
  let currentCardIndex = 0;
  let currentQuestionIndex = 0;
  let cardsShown = 0;
  let attempts = 0;
  
  const cardImagesElement = document.getElementById('card-images');
  const cardDescriptionElement = document.getElementById('card-description');
  const nextCardButton = document.getElementById('next-card-btn');
  
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextQuestionButton = document.getElementById('next-question-btn');
  const feedbackMessage = document.getElementById('feedback-message');
  const scoreContainer = document.getElementById('score-container');
  const scoreElement = document.getElementById('score');
  const errorElement = document.getElementById('errors');
  
  let score = 0;
  let errors = 0;
  
  nextCardButton.addEventListener('click', showNextCard);
  nextQuestionButton.addEventListener('click', showNextQuestion);
  
  function showNextCard() {
  if (cardsShown < 1 && currentCardIndex < cards.length) {
    showCard(cards[currentCardIndex]);
    currentCardIndex++;
    cardsShown++;
  } else {
    showQuestion(questions[currentQuestionIndex]);
  }
  }
  
  function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    cardsShown = 0;
    showNextCard();
    feedbackMessage.classList.add('hide');
    nextQuestionButton.classList.add('hide');
  } else {
    showScore();
  }
  }
  
  function showCard(card) {
  cardImagesElement.innerHTML = '';
  if (Array.isArray(card.images)) {
    card.images.forEach(imgSrc => {
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      cardImagesElement.appendChild(imgElement);
    });
  } else {
    const imgElement = document.createElement('img');
    imgElement.src = card.image;
    cardImagesElement.appendChild(imgElement);
  }
  
  if (card.imageClass) {
    cardImagesElement.classList.add(card.imageClass);
  } else {
    cardImagesElement.classList.remove('large-image');
  }
  
  cardDescriptionElement.innerText = card.description;
  questionContainerElement.classList.add('hide');
  nextCardButton.classList.remove('hide');
  nextQuestionButton.classList.add('hide');
  }
  
  function showQuestion(question) {
  questionContainerElement.classList.remove('hide');
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(button, question.correctAnswer, question.explanation));
    answerButtonsElement.appendChild(button);
  });
  nextCardButton.classList.add('hide');
  nextQuestionButton.classList.add('hide');
  }
  
  function selectAnswer(selectedButton, correctAnswer, explanation) {
  const isCorrect = selectedButton.innerText === correctAnswer;
  setStatusClass(selectedButton, isCorrect);
  
  if (isCorrect) {
    if (attempts === 0) {
      score += 1;
    } else if (attempts === 1) {
      score += 0.75;
    } else if (attempts === 2) {
      score += 0.25;
    } else {
      score += 0;
    }
    feedbackMessage.innerText = `Resposta correta! ${explanation}`;
    feedbackMessage.classList.remove('hide');
    nextQuestionButton.classList.remove('hide');
    attempts = 0; // Reset attempts for the next question
  
    // Desabilitar todos os botões após a resposta correta
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
    });
  } else {
    attempts++;
    feedbackMessage.innerText = `Resposta incorreta. ${explanation}`;
    feedbackMessage.classList.remove('hide');
    Array.from(answerButtonsElement.children).forEach(button => {
      if (button.innerText === correctAnswer) {
        button.classList.remove('correct-answer');
      }
    });
  }
  
  console.log(`Score: ${score.toFixed(2)}, Attempts: ${attempts}, Errors: ${errors}`);
  }
  
  function setStatusClass(element, isCorrect) {
  clearStatusClass(element);
  if (isCorrect) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
  }
  
  function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
  }
  
  function showScore() {
  scoreContainer.classList.remove('hide');
  scoreElement.innerText = score.toFixed(2);
  questionContainerElement.classList.add('hide');
  document.getElementById('card-container').classList.add('hide');
  nextQuestionButton.classList.add('hide');
  }
  
  document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-container').classList.add('hide');
  document.getElementById('quiz-container').classList.remove('hide');
  showNextCard();
  });
  