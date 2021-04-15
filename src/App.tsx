import React from 'react';
import './App.css';

function App() {
  return (
    <main id="main">
      <h1 id="title">Martin Luther King Jr.</h1>
      <p></p>
      <figure id="img-div">
        <img
          id="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Martin_Luther_King_-_March_on_Washington.jpg/1024px-Martin_Luther_King_-_March_on_Washington.jpg"
          alt="King gave his most famous speech, I Have a Dream, before the Lincoln Memorial during the 1963 March on Washington for Jobs and Freedom."
        />
        <figcaption id="img-caption">
          King gave his most famous speech, I Have a Dream, before the Lincoln Memorial during the 1963 March on Washington for Jobs and Freedom.
    </figcaption>
      </figure>
      <section id="tribute-info">
        <h3 id="headline">The Life of Dr Martin Luther King Jr. in 10 Locations:</h3>
        <ul>
          <li><strong>Birth Home</strong> - Martin Luther King Jr. was born Michael King Jr. on January 15, 1929, in Atlanta, Geaorgia, the second of three children to the Reverend Michael King Sr. and Alberta King, themselves descendents of ministers and sharecroppers.</li>
          <li>
            <strong>Historic Ebenezer Baptist Church, Atlanta, Georgia</strong> - King Sr. was the pastor of Ebenezer Baptist Church, and the King family worshipped here regularly. In 1934 King Sr. travelled to Germany on a church trip and withnessed the nascent Nazi government. The event had a profound impact on his own and King Jr.'s outlook.'
      </li>
          <li>
            <strong>Booker T. Washington High School, Atlanta</strong> - In 1942 King Jr. skipped the ninth grade and was enrolled in Booker T. Washington High School. The high school, formed by local black leaders including King's grandfather, was the only on in the city for African American students. There, he eagerly joined the debate team.
      </li>
          <li>
            <strong>Morehouse College</strong> - King passed the entrance exam for Morehouse College, a respectable, historically Black university, at the age of just 15. Just before his final year, he decided to enter the ministry. He graduated from Morehouse as a Bachelor of Arts in sociology in 1948.
      </li>
          <li>
            <strong>March on Washington</strong> - In August 1963, King helped organise the March on Washington for Jobs and Freedom. A nationwide alliance of civil rights, labour, and religious organisations numbering around 250,000 people marched from the Washington Monument to the Lincoln Memorial.
      </li>
          <li>
            <strong>I have a dream...</strong> - From the steps of the Lincoln Memorial, Dr Martin Luther King Jr. gave a prepared oratory. As he neared the end, Magalia Hackson called from the crowd, "Tell them about the dream, Martin!", at which point he then gave his historic speech, I Have a Dream.
      </li>
          <li>
            <strong>16th Street Baptist Church, Birmingham, Alabama</strong> - Early in 1963, the birmingham campaign had been launched with the aim of non-violently desegregating one of the most segregated cities in the US. In September, the 16th Street Baptist Church, headquarters for the campaign, was bombed by white supremacists.
      </li>
          <li>
            <strong>Brown's Chapel Church in Selma, Alabama</strong> - This church marked the starting point for the Selma to Montgomery marches of 1965, which saw the police engage in ruthless attacks against the marchers. The violence of the authorities led to the first march becoming know simplfy as Bloody Sunday.
      </li>
          <li>
            <strong>New York City Riverside Church</strong> - In 1967, exactly a year to the day before his death. King made a speech entitled Beyong Vietnam: A Time to Break Silence. His brave stand against American aggression in Vietnam marked a new focus of his campaigning, yet lost him many former allies, who felt it unpatriotic.
      </li>
          <li>
            <strong>The Lorraine Motel, Memphis</strong> - On April 4 1968, King was staying in his usual room at The Lorraine Motel, Memphis. As he stood on the balcony talking to Reverand Jesse Jackson, he was shot by James Earl Ray. King was rushed to St. Joseph's Hospital, but never regained consciousness.
      </li>
          <li>
            <strong>MLK Jr. National Historial Park</strong> - King's grave and monument are found oposite his childhood church, the Historic Ebenezer Baptist Church. The site is now a National Historic Park dedicated to the life and work of King, and the wider Civil Rights movement.
      </li>
        </ul>
        <blockquote
          cite="https://artsandculture.google.com/story/qQWBkzWr7i05tA"
        >
          <p>
            "The road ahead is not altogether a smooth one"
      </p>
          <cite>-- Martin Luther King Jr.</cite>
        </blockquote>
        <h3>
          If you have time, you should read more about this incredible human being
          on his
      <a
            id="tribute-link"
            href="https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."
            target="_blank"
            rel="noreferrer"
          >Wikipedia entry</a
          >.
    </h3>
      </section>
    </main>
  );
}

export default App;
