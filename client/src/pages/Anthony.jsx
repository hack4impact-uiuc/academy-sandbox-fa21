// @flow
import React from 'react';

import '../css/Home.css';
import anthony from '../utils/images/anthony_cruzmacedo1.jpg';

function Anthony() {
  return (
    <>
    <h1>
        Anthony
    </h1>
    <h2>
        <a href="https://www.facebook.com/profile.php?id=100072821919133">Facebook</a> 
        <a href="https://www.instagram.com/saxytony/">Instagram</a> 
        <a href="https://www.linkedin.com/in/acruzmacedo/">LinkedIn</a> 
    </h2>
    <img src={anthony} 
        alt="anthony headshot" 
        width = "200"
        height = "200"/>
    <h2>
        About Me
        <p>
            My name is Anthony and I'm a sophomore at the University of Illinois studying Computer Engineering. Here, I
            am involved in Hack4Impact as an Academy Member and on the Community, Product Research, and Technology 
            Committees, as well as in the Society of Hispanic Professional Engineers where I serve on their MemberSHPE
            Committee. I am excited to build and develop my skills and knowledge during my time at UIUC!
        </p>
    </h2>
    <h2>
        Interests and Hobbies
        <p>
            Apart from academics and clubs, I love listening to and playing music, watching all kinds of movies, reading,
            and spending time with my friends and family!
        </p>
    </h2>
    <h2>
        Fun Facts!
    </h2>
    </>
  );
}

export default Anthony;
