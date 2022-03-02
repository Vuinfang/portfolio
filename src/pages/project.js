import React, {useState} from 'react';
import T1 from '../assets/images/pawOne.png';
import T2 from '../assets/images/pawTwo.png';
import T3 from '../assets/images/pawThree.png';
import Nutrezi from '../assets/images/nutrezi.png';
import pawJustice from '../assets/images/pawJustice.png'
import {Avatar, Button, Card, Image} from 'antd';
import {CaretDownOutlined, EditOutlined, EllipsisOutlined, MessageOutlined, SettingOutlined} from '@ant-design/icons';

const screenHeight = window.screen.height;
const { Meta } = Card;

export default function () {
  const [isHover,setHover]= useState(false);
  return(
    <div style={style.contentBox}>
      {/*<div >*/}
      {/*  <Button type="primary" shape="circle" icon={<CaretDownOutlined />} size="large" style={{backgroundColor: 'darkgreen', marginTop: '-50%'}}/>*/}
      {/*</div>*/}
      <div style={style.mainBox}>
        <div style={isHover ? style.pictureBoxHover : style.pictureBox} onMouseOver={()=>setHover(true)}
             onMouseOut={()=>setHover(false)}>
          <Card
            style={{ width: '100%' }}
            cover={
              <img
                alt="Paw Justice"
                src={pawJustice}
                style={{padding: 20}}
              />
            }
            actions={[
              // <SettingOutlined key="setting" />,
              // <EditOutlined key="edit" />,
              // <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={ <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>Vi</Avatar>}
              title="Paw Justice"
              description="Paw Justice exists to encourage people to make the right choices around pets. We want to
              force change, education and changes to laws so those who abuse animals are punished commensurate with the
              crime - and pets get the justice they deserve! We think New Zealand's approach to animal cruelty needs
              reform. We host various events and activities to promote our cause. Often, we need a rebellious approach
              and we need your help!"
            />
          </Card>,
        </div>
        <div style={style.descriptionBox}>
          <p style={style.wordMid}>Project overview</p>
          <p style={style.wordSmall}>This project is to develop the mobile terminal of Paw Justice, a non-profit animal
            help website that allows users to register, log in and donate money to help and protect animals. The
            development of the mobile terminal mainly focuses on the following aspects:</p>
          <ul>
            <li style={style.wordSmall}>
              Design different photo frames to take pictures of pets
            </li>
            <li style={style.wordSmall}>
              Different stickers are allowed on the photo for added interest
            </li>
            <li style={style.wordSmall}>
              Obtain data through the API provided by customers, sort donors, and stimulate the enthusiasm of donors to
              donate money
            </li>
            <li style={style.wordSmall}>
              Allow Funraisin to log in as a third party
            </li>
          </ul>
        </div>
      </div>

      {/*-----------------------------------------------------*/}
      <div style={style.mainBox}>
        <div style={isHover ? style.pictureBoxHover : style.pictureBox} onMouseOver={()=>setHover(true)}
             onMouseOut={()=>setHover(false)}>
          <Card
            style={{ width: '100%' }}
            cover={
              <img
                alt="Nutrezi"
                src={Nutrezi}
                style={{padding: 20}}
              />
            }
            actions={[
              // <SettingOutlined key="setting" />,
              // <EditOutlined key="edit" />,
              // <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={ <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>Vi</Avatar>}
              title="Nutrezi"
              description="Welcome to the new way of quickly and easily finding out if a particular food is suitable for
               you and your family whether it be allergies, intolerances or other dietary requirements. Scan or search
               for a product and nutrezi does the rest for you based on your profile preferences."
            />
          </Card>,
        </div>
        <div style={style.descriptionBox}>
          <p style={style.wordMid}>Project overview</p>
          <p style={style.wordSmall}>This app is designed to help users find food that suits them, by setting user preferences and allergens to
            filter food. The front end of this project is done with React Native. Main features including:</p>
          <ul>
            <li style={style.wordSmall}>
              User registration login
            </li>
            <li style={style.wordSmall}>
              Query and filter product information
            </li>
            <li style={style.wordSmall}>
              Scan and compare iterm with products in database
            </li>
            <li style={style.wordSmall}>
              Google Pay and Apple Pay
            </li>
          </ul>
        </div>
      </div>
      {/*--------------------this used for images combine----------------------------------*/}
      {/*<div style={style.mainBox}>*/}
      {/*  <div style={style.testBox}>*/}
      {/*    <Image src={T1} width="30%"/>*/}
      {/*    <Image src={T2} width="30%"/>*/}
      {/*    <Image src={T3} width="30%"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>

  )
}
const style= {
  li: {
    listStyle: 'none',
  },
  contentBox: {
    padding: '0 100px',
    width: '100%',
    // height: screenHeight,
    backgroundColor: '#c1cbc9',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  mainBox: {
    padding: '100px 20px',
    width: '90%',
    minWidth: 600,
    height: '95%',
    // backgroundColor: '#c85',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  descriptionBox: {
    alignItems: 'center',
    width: '30%',
    minWidth: 200,
    padding: 10,
    // backgroundColor: '#5f1'
  },
  pictureBoxHover: {
    width: '65%',
    minWidth: 250,
    // padding: 10,
    // backgroundColor: '#f5f5f5',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 25,
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,.3)',
  },
  pictureBox: {
    width: '65%',
    minWidth: 250,
    // padding: 10,
    // backgroundColor: '#f5f5f5',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 25,
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,.15)',
  },
  testBox: {
    width: '60%',
    height: 700,
    minWidth: 250,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
