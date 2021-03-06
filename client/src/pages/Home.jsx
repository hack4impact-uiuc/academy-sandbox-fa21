import React from 'react';
import { Table } from 'reactstrap';
import '../css/Home.css';

// Add image file imports here
import aaron from '../utils/images/aaron_alexander.jpg';
import ellie from '../utils/images/estrella_popoca.jpg';
import jessica from '../utils/images/jessica_singh.jpg';
import danielle from '../utils/images/danielle_yang.PNG';
import eesha from '../utils/images/eesha_barua.jpg';
import grace from '../utils/images/grace_zhang.jpg';
import anthony from '../utils/images/anthony_cruzmacedo1.jpg';
import ashwin from '../utils/images/ashwin_saxena.jpeg';

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
        image: ashwin,
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
      <h1 className="home-title">Academy Sandbox</h1>
      <p className="home-subtitle">a place to practice what you learn</p>

      <Table className="home-table">
        <tbody>
          {people.map((row, index) => (
            <tr className="home-table-row" key={index}>
              {row.map((person) => (
                <td key={person.name} style={{ textAlign: 'center' }}>
                  <img
                    className="headshots"
                    alt={person.name}
                    src={person.image}
                    width="120"
                    height="120"
                  />
                  <br />
                  <a href={person.link}>{person.name}</a>
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
