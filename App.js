import { useState } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

const quotes = [
  {
    image: 'https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg',
    quote: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.',
    author: 'Albert Einstein',
  },
  {
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeIu78psZ2H4vKbJYdlmELxlUisQvK_KItzBws_PDJ1GfBvpO0',
    quote: 'Não devemos permitir que alguém saia de nossa presença sem se sentir melhor e mais feliz.',
    author: 'Madre Teresa de Calcutá',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
    quote: 'Daqui a vinte anos você estará mais desapontado pelas coisas que não fez do que pelas que fez.',
    author: 'Mark Twain',
  },
  {
    image: 'https://s3.static.brasilescola.uol.com.br/be/2022/10/marylin-monroe-preto-branco.jpg',
    quote: 'Imperfeição é beleza, loucura é genialidade, e é melhor ser absolutamente ridículo que absolutamente chato.',
    author: 'Marilyn Monroe',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg',
    quote: 'O destino é uma questão de escolha, não de acaso. Não é algo a se esperar, mas algo a se conquistar.',
    author: 'William Shakespeare',
  },
  {
    image: 'https://cdn.britannica.com/54/9454-050-D39631E8/Albert-Schweitzer-photograph-Yousuf-Karsh.jpg',
    quote: 'Felicidade não é um estado a que se chega, mas uma maneira de viajar.',
    author: 'Albert Schweitzer',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg',
    quote: 'Nós somos o que repetidamente fazemos. A excelência, então, não é um ato, mas um hábito.',
    author: 'Aristóteles',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg/1200px-Ruth_Bader_Ginsburg_2016_portrait.jpg',
    quote: 'Lute pelas coisas que você ama, mas faça isso de uma maneira que leve os outros a se juntarem a você.',
    author: 'Ruth Bader Ginsburg',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjzdZMidJ_T_OmheXvhOtlZke-9mz5YiCeQ&s',
    quote: 'Escolha um trabalho que você ame e não terá que trabalhar um único dia em sua vida.',
    author: 'Confúcio',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg',
    quote: 'Eu não falhei. Apenas descobri 10.000 maneiras que não funcionam.',
    author: 'Thomas Edison',
  },
];

const App = () => {
  const [quote, setQuote] = useState(null);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Quotes App</Text>

      {quote && (
        <Image style={styles.image} source={{ uri: quote.image }}/>
      )}

      {quote && (
        <Text style={styles.citacaoText}>{quote.quote}</Text>
      )}

      {quote && ( 
        <Text style={styles.autorText}>{quote.author}</Text>
      )}

      <TouchableOpacity onPress={randomQuote} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar Citação</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 30,
    color: '#f3b61f',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  image: {
    width: 250, 
    height: 250,
    marginBottom: 10,
  },

  citacaoText: {
    fontSize: 20, 
    textAlign: 'center',
    marginVertical: 10,
  },

  autorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },

  button: {
    backgroundColor: '#f3b61f',
    padding: 15,
    borderRadius: 50, 
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold', 
  },

});

export default App;