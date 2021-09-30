import React from 'react';
import { Table } from 'reactstrap';
import '../css/Home.css';

// Add image file imports here
import yousef from '../utils/images/yousef_ahmed.jpg';
import aaron from '../utils/images/aaron_alexander.png';

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
        image: yousef,
      },
      {
        name: 'Eesha',
        link: '/eesha',
        image: yousef,
      },
      {
        name: 'Ellie',
        link: '/ellie',
        image: yousef,
      },
    ],
    [
      {
        name: 'Grace',
        link: '/grace',
        image: yousef,
      },
      {
        name: 'Jessica',
        link: '/jessica',
        image: yousef,
      },
      {
        name: 'Ashwin',
        link: '/ashwin',
        image: yousef,
      },
      {
        name: 'Danielle',
        link: '/danielle',
        image: yousef,
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
