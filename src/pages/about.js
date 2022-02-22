import React from 'react';
import Me from '../assets/images/me.jpg';
import {Image} from 'antd';
import {MessageOutlined} from '@ant-design/icons';

const screenHeight = window.screen.height;

export default function () {
  return(
    <div style={style.contentBox}>
      <div style={style.descriptionBox}>
        <p style={style.wordLarge}>Hey! Nice to meet you.</p>
        <p style={style.wordSmall}>I was graduate from QUT with Computer Science major. In the past few years, I have
          been very happy to study CS, and I have developed a strong interest in web design when I was in school, and
          developed some simple websites before I was graduated. After that, I learned WordPress online,
          which helped me a lot in my internship at Shafston International College. Previously, most of my work was
          teaching basic knowledge of web development, so I had a solid understanding of HTML and CSS. Now, as a contract worker at
          KonnectApps, I've been fortunate enough to work on some really interesting projects and learn more about
          web development.</p>
        <p style={style.wordSmall}>My recent projects are all about application design and the development language is
          mostly React Native. The middle also involves other language knowledge and frameworks such as NestJs, Firebase,
          etc. Be able to use tools such as Github proficiently.</p>
        <div >
          <a style={style.contactBox}>
            <span style={style.wordMid}>Say hey to me</span>
            <MessageOutlined style={{fontSize: 30}}/>
          </a>
        </div>
      </div>
      <div style={style.pictureBox}>
        <Image src={Me} style={style.myPicture}/>
      </div>
    </div>

  )
}
const style= {
  contentBox: {
    padding: '0 100px',
    width: '100%',
    height: screenHeight,
    backgroundColor: '#fff5e8',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionBox: {
    width: '45%',
    minWidth: 300,
    padding: 10,
    // backgroundColor: '#5f1'
  },
  pictureBox: {
    width: '35%',
    minWidth: 250,
    padding: 10,
    backgroundColor: '#5a9',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  myPicture: {
    width: '100%',
    // height: '50%',
    backgroundColor: '#f65',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contactBox: {
    width: '25%',
    minWidth: 150,
    height: '20%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wordLarge: {
    fontSize: 40,
    fontWeight: 700,
  },
  wordMid: {
    fontSize: 20,
    fontWeight: 700,
  },
  wordSmall: {
    fontSize: 16,
    fontWeight: 500,
  },
}
