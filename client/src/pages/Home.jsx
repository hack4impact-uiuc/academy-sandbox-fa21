import React from 'react';
import { Table } from 'reactstrap';
import '../css/Home.css';

// Add image file imports here
import yousef from '../utils/images/yousef_ahmed.jpg';
<<<<<<< HEAD
import ellie from '../utils/images/estrella_popoca.jpg';
=======
import aaron from '../utils/images/aaron_alexander.png';
>>>>>>> 5ba23f318e98bc7db65552b575119362e772b3ea
import jessica from '../utils/images/jessica_singh.jpg';
import danielle from '../utils/images/danielle_yang.PNG';
import eesha from '../utils/images/eesha_barua.jpg';
import grace from '../utils/images/grace_zhang.jpg';
import anthony from '../utils/images/anthony_cruzmacedo1.jpg';

function Home() {
  const people = [
    [
      {
        name: 'Aaron',
        link: '/aaron',
        image: aaron,
      },
      {
        name: 'Anthony',
        link: '/anthony',
        image: anthony,
      },
      {
        name: 'Eesha',
        link: '/eesha',
        image: eesha,
      },
      {
        name: 'Ellie',
        link: '/ellie',
        image: ellie,
      },
    ],
    [
      {
        name: 'Grace',
        link: '/grace',
        image: grace,
      },
      {
        name: 'Jessica',
        link: '/jessica',
        image: jessica,
      },
      {
        name: 'Ashwin',
        link: '/ashwin',
        image: yousef,
      },
      {
        name: 'Danielle',
        link: '/danielle',
        image: danielle,
      },
    ],
  ];

  return (
    <>
      <h1>Academy Sandbox</h1>
      <p>a place to practice what you learn</p>

      <Table style={{ margin: 'auto' }}>
        <tbody>
          {people.map((row, index) => (
            <tr key={index}>
              {row.map((person) => (
                <td key={person.name} style={{ textAlign: 'center' }}>
                  <img
                    alt={person.name}
                    src={person.image}
                    width="120"
                    height="120"
                  />
                  <br />
                  <a id="profile-name" href={person.link}>
                    {person.name}
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
